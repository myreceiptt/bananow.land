import fs from "fs";
import path from "path";
import {
  getNewsCategoryByName,
  getNewsCategoryBySlug,
  newsCategories,
  type NewsCategory,
} from "../data/newsCategories";
import { slugify } from "./slugify";

export type NewsStatus = "published" | "draft" | "unlisted" | "archived";

export type NewsArticle = {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  updated?: string;
  author: string;
  status: NewsStatus;
  primaryCategory: string;
  primaryCategorySlug: string;
  categories: string[];
  categorySlugs: string[];
  tags: string[];
  tagSlugs: string[];
  coverImage?: string;
  content: string;
};

type RawFrontmatter = Record<string, string | string[]>;

const newsDirectory = path.join(process.cwd(), "src/content/news");
const statuses: NewsStatus[] = ["published", "draft", "unlisted", "archived"];
const requiredFields = [
  "title",
  "slug",
  "excerpt",
  "date",
  "author",
  "status",
  "primaryCategory",
  "categories",
  "tags",
] as const;

function stripQuotes(value: string) {
  return value.trim().replace(/^["']|["']$/g, "");
}

function parseFrontmatter(source: string, fileName: string) {
  if (!source.startsWith("---")) {
    throw new Error(`News article ${fileName} is missing frontmatter.`);
  }

  const endIndex = source.indexOf("\n---", 3);
  if (endIndex === -1) {
    throw new Error(`News article ${fileName} has invalid frontmatter.`);
  }

  const frontmatterSource = source.slice(3, endIndex).trim();
  const content = source.slice(endIndex + 4).trim();
  const frontmatter: RawFrontmatter = {};
  const lines = frontmatterSource.split(/\r?\n/);

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const keyMatch = line.match(/^([A-Za-z][A-Za-z0-9]*):\s*(.*)$/);
    if (!keyMatch) {
      continue;
    }

    const [, key, rawValue] = keyMatch;
    if (rawValue) {
      frontmatter[key] = stripQuotes(rawValue);
      continue;
    }

    const values: string[] = [];
    while (index + 1 < lines.length) {
      const nextLine = lines[index + 1];
      const arrayMatch = nextLine.match(/^\s*-\s+(.+)$/);
      if (!arrayMatch) {
        break;
      }
      values.push(stripQuotes(arrayMatch[1]));
      index += 1;
    }
    frontmatter[key] = values;
  }

  return { frontmatter, content };
}

function requireString(
  frontmatter: RawFrontmatter,
  key: (typeof requiredFields)[number],
  fileName: string,
) {
  const value = frontmatter[key];
  if (!value || Array.isArray(value)) {
    throw new Error(`News article ${fileName} is missing string field: ${key}.`);
  }
  return value;
}

function requireArray(
  frontmatter: RawFrontmatter,
  key: "categories" | "tags",
  fileName: string,
) {
  const value = frontmatter[key];
  if (!Array.isArray(value) || value.length === 0) {
    throw new Error(`News article ${fileName} is missing array field: ${key}.`);
  }
  return value;
}

function validateArticle(
  article: Omit<
    NewsArticle,
    "primaryCategorySlug" | "categorySlugs" | "tagSlugs"
  >,
  fileName: string,
): NewsArticle {
  const status = article.status;
  if (!statuses.includes(status)) {
    throw new Error(
      `News article ${fileName} has invalid status: ${status}. Expected ${statuses.join(", ")}.`,
    );
  }

  const primaryCategory = getNewsCategoryByName(article.primaryCategory);
  if (!primaryCategory) {
    throw new Error(
      `News article ${fileName} has unknown primaryCategory: ${article.primaryCategory}.`,
    );
  }

  if (!article.categories.includes(article.primaryCategory)) {
    throw new Error(
      `News article ${fileName} primaryCategory must be included in categories.`,
    );
  }

  const categorySlugs = article.categories.map((categoryName) => {
    const category = getNewsCategoryByName(categoryName);
    if (!category) {
      throw new Error(
        `News article ${fileName} has unknown category: ${categoryName}.`,
      );
    }
    return category.slug;
  });

  if (article.slug !== slugify(article.slug)) {
    throw new Error(
      `News article ${fileName} slug must be lowercase, URL-safe, and hyphenated.`,
    );
  }

  return {
    ...article,
    primaryCategorySlug: primaryCategory.slug,
    categorySlugs,
    tagSlugs: article.tags.map((tag) => slugify(tag)),
  };
}

function readArticleFile(fileName: string) {
  const filePath = path.join(newsDirectory, fileName);
  const source = fs.readFileSync(filePath, "utf8");
  const { frontmatter, content } = parseFrontmatter(source, fileName);

  for (const field of requiredFields) {
    if (!frontmatter[field]) {
      throw new Error(`News article ${fileName} is missing field: ${field}.`);
    }
  }

  const status = requireString(frontmatter, "status", fileName) as NewsStatus;
  const article = validateArticle(
    {
      title: requireString(frontmatter, "title", fileName),
      slug: requireString(frontmatter, "slug", fileName),
      excerpt: requireString(frontmatter, "excerpt", fileName),
      date: requireString(frontmatter, "date", fileName),
      updated:
        typeof frontmatter.updated === "string"
          ? frontmatter.updated
          : undefined,
      author: requireString(frontmatter, "author", fileName),
      status,
      primaryCategory: requireString(frontmatter, "primaryCategory", fileName),
      categories: requireArray(frontmatter, "categories", fileName),
      tags: requireArray(frontmatter, "tags", fileName),
      coverImage:
        typeof frontmatter.coverImage === "string"
          ? frontmatter.coverImage
          : undefined,
      content,
    },
    fileName,
  );

  return article;
}

export function getAllNewsArticles() {
  if (!fs.existsSync(newsDirectory)) {
    return [];
  }

  const articles = fs
    .readdirSync(newsDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .filter((fileName) => !fileName.startsWith("_"))
    .map(readArticleFile)
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );

  const slugs = new Set<string>();
  for (const article of articles) {
    if (slugs.has(article.slug)) {
      throw new Error(`Duplicate news article slug: ${article.slug}.`);
    }
    slugs.add(article.slug);
  }

  return articles;
}

export function getPublishedNewsArticles() {
  return getAllNewsArticles().filter((article) => article.status === "published");
}

export function getPublicNewsArticles() {
  return getAllNewsArticles().filter(
    (article) =>
      article.status === "published" ||
      article.status === "unlisted" ||
      article.status === "archived",
  );
}

export function getNewsArticleBySlug(slug: string) {
  return getPublicNewsArticles().find((article) => article.slug === slug);
}

export function getPublishedNewsArticlesByCategory(categorySlug: string) {
  return getPublishedNewsArticles().filter((article) =>
    article.categorySlugs.includes(categorySlug),
  );
}

export function getPublishedNewsArticlesByTag(tagSlug: string) {
  return getPublishedNewsArticles().filter((article) =>
    article.tagSlugs.includes(tagSlug),
  );
}

export function getNewsCategoryPaths() {
  return newsCategories.map((category) => ({
    params: { categorySlug: category.slug },
  }));
}

export function getNewsArticlePaths() {
  return getPublicNewsArticles().map((article) => ({
    params: { slug: article.slug },
  }));
}

export function getNewsTagPaths() {
  const tagSlugs = new Set<string>();
  for (const article of getPublishedNewsArticles()) {
    for (const tagSlug of article.tagSlugs) {
      tagSlugs.add(tagSlug);
    }
  }

  return Array.from(tagSlugs).map((tagSlug) => ({
    params: { tagSlug },
  }));
}

export function getKnownTagName(tagSlug: string) {
  for (const article of getPublishedNewsArticles()) {
    const index = article.tagSlugs.indexOf(tagSlug);
    if (index >= 0) {
      return article.tags[index];
    }
  }
  return tagSlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function getCategoryOrNull(categorySlug: string): NewsCategory | null {
  return getNewsCategoryBySlug(categorySlug) ?? null;
}
