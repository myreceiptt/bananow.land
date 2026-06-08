import Image from "next/image";
import Link from "next/link";

import type { NewsArticle } from "../lib/news";
import { slugify } from "../lib/slugify";

type NewsCardProps = {
  article: NewsArticle;
};

export default function NewsCard({ article }: NewsCardProps) {
  return (
    <article className="grid gap-4 rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
      {article.coverImage ? (
        <Link href={`/news/${article.slug}`} className="block overflow-hidden rounded-md">
          <Image
            src={article.coverImage}
            alt={article.title}
            width={1200}
            height={675}
            className="h-auto w-full transition hover:scale-105"
          />
        </Link>
      ) : null}

      <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-dark-now dark:text-white-now">
        <Link
          href={`/news/category/${article.primaryCategorySlug}`}
          className="rounded-full bg-yellow-now px-3 py-1 text-neutral-900 hover:bg-green-now hover:text-white"
        >
          {article.primaryCategory}
        </Link>
        <span>{article.date}</span>
      </div>

      <div>
        <h3 className="font-judul text-2xl font-bold text-neutral-900 dark:text-white">
          <Link href={`/news/${article.slug}`} className="hover:text-green-now dark:hover:text-yellow-now">
            {article.title}
          </Link>
        </h3>
        <p className="mt-3 text-base text-dark-now dark:text-white-now">
          {article.excerpt}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <Link
            key={tag}
            href={`/news/tag/${slugify(tag)}`}
            className="text-sm text-green-now hover:text-yellow-now dark:text-yellow-now dark:hover:text-green-now"
          >
            #{tag}
          </Link>
        ))}
      </div>
    </article>
  );
}
