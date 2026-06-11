import Image from "next/image";
import Link from "next/link";

import type { NewsArticle } from "../../lib/news";

type NewsCardProps = {
  article: NewsArticle;
};

export default function NewsCard({ article }: NewsCardProps) {
  return (
    <article className="flex h-full flex-col gap-4 rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
      {article.coverImage ? (
        <Link
          href={`/news/${article.slug}`}
          className="relative block aspect-video overflow-hidden rounded-md">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-center transition duration-300 hover:scale-105"
            loading="eager"
          />
        </Link>
      ) : null}

      <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-dark-now dark:text-white-now">
        <Link
          href={`/news/category/${article.primaryCategorySlug}`}
          className="rounded-full bg-green-now px-3 py-1 text-white hover:bg-yellow-now hover:text-neutral-900 dark:bg-yellow-now dark:text-neutral-900 dark:hover:bg-green-now dark:hover:text-white">
          {article.primaryCategory}
        </Link>
        <span>{article.date}</span>
      </div>

      <div className="flex flex-1 flex-col">
        <h3 className="min-h-16 font-judul text-2xl font-bold text-neutral-900 dark:text-white">
          <Link
            href={`/news/${article.slug}`}
            className="line-clamp-2 hover:text-green-now dark:hover:text-yellow-now">
            {article.title}
          </Link>
        </h3>
        <p className="mt-3 min-h-18 line-clamp-3 text-base text-dark-now dark:text-white-now">
          {article.excerpt}
        </p>
      </div>
    </article>
  );
}
