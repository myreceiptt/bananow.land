import type { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";

import Layout from "../../../components/Layout";
import NewsCard from "../../../components/NewsCard";
import {
  getKnownTagName,
  getNewsTagPaths,
  getPublishedNewsArticlesByTag,
  type NewsArticle,
} from "../../../lib/news";

type NewsTagPageProps = {
  tagName: string;
  tagSlug: string;
  articles: NewsArticle[];
};

export default function NewsTagPage({
  tagName,
  tagSlug,
  articles,
}: NewsTagPageProps) {
  const description = `Na Now News articles tagged ${tagName}.`;

  return (
    <Layout title={`${tagName} | Na Now News`} description={description}>
      <div className="bg-white px-4 pb-16 pt-32 dark:bg-neutral-900">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-judul text-4xl font-bold text-neutral-900 dark:text-white">
            #{tagName}
          </h1>
          <p className="mx-auto max-w-2xl pt-6 text-base text-dark-now dark:text-white-now">
            {description}
          </p>
        </div>

        <div className="mx-auto max-w-4xl text-center pt-10">
          <Link
            href="/news"
            className="font-medium text-green-now hover:text-yellow-now dark:text-yellow-now dark:hover:text-green-now">
            Back to Na Now News
          </Link>
        </div>

        {articles.length ? (
          <div className="mx-auto grid max-w-7xl gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <NewsCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-12 max-w-2xl rounded-lg border border-neutral-200 bg-white p-8 text-center dark:border-neutral-800 dark:bg-neutral-900">
            <h2 className="font-judul text-2xl font-bold text-neutral-900 dark:text-white">
              No published articles for #{tagSlug} yet.
            </h2>
            <p className="pt-4 text-base text-dark-now dark:text-white-now">
              The tag page exists so future stories can grow into it.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getNewsTagPaths(),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<NewsTagPageProps> = async ({
  params,
}) => {
  const tagSlug = String(params?.tagSlug ?? "");

  return {
    props: {
      tagName: getKnownTagName(tagSlug),
      tagSlug,
      articles: getPublishedNewsArticlesByTag(tagSlug),
    },
  };
};
