import Image from "next/image";
import Link from "next/link";

import type { NewsArticle } from "../../lib/news";
import NewsMarkdown from "./NewsMarkdown";
import NewsTaxonomyList from "./NewsTaxonomyList";

type NewsArticleLayoutProps = {
  article: NewsArticle;
};

export default function NewsArticleLayout({ article }: NewsArticleLayoutProps) {
  return (
    <article className="mx-auto max-w-4xl px-4 pb-16 pt-32 text-dark-now dark:text-white-now sm:px-6 lg:px-8">
      <Link
        href="/news"
        className="font-medium text-green-now hover:text-yellow-now dark:text-yellow-now dark:hover:text-green-now">
        Back to Na Now News
      </Link>

      <header className="pt-8 text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-green-now dark:text-yellow-now">
          {article.primaryCategory}
        </p>
        <h1 className="pt-4 font-judul text-4xl font-bold text-neutral-900 dark:text-white md:text-5xl">
          {article.title}
        </h1>
        <p className="mx-auto max-w-2xl pt-6 text-base">{article.excerpt}</p>
        <div className="flex flex-wrap justify-center gap-3 pt-6 text-sm">
          <span>{article.date}</span>
          {article.updated ? <span>Updated {article.updated}</span> : null}
          <span>{article.author}</span>
        </div>
      </header>

      {article.coverImage ? (
        <div className="relative mt-10 aspect-video overflow-hidden rounded-lg bg-yellow-now/20 dark:bg-neutral-900">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            priority
            loading="eager"
            sizes="(min-width: 1024px) 896px, calc(100vw - 2rem)"
            className="object-cover object-center"
          />
        </div>
      ) : null}

      <div className="pt-10">
        <NewsTaxonomyList
          basePath="/news/category"
          items={article.categories.map((category, index) => ({
            name: category,
            slug: article.categorySlugs[index],
          }))}
        />
      </div>

      <div className="pt-6">
        <NewsTaxonomyList
          basePath="/news/tag"
          variant="featuredInverted"
          items={article.tags.map((tag, index) => ({
            name: `${tag}`,
            slug: article.tagSlugs[index],
          }))}
        />
      </div>

      <div className="pt-12 text-base leading-8 text-neutral-900 dark:text-white">
        <NewsMarkdown markdown={article.content} />
      </div>
    </article>
  );
}
