import type { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";

import Layout from "../../../components/Layout";
import NewsCard from "../../../components/NewsCard";
import {
  getCategoryOrNull,
  getNewsCategoryPaths,
  getPublishedNewsArticlesByCategory,
  type NewsArticle,
} from "../../../lib/news";
import type { NewsCategory } from "../../../data/newsCategories";

type NewsCategoryPageProps = {
  category: NewsCategory;
  articles: NewsArticle[];
};

export default function NewsCategoryPage({
  category,
  articles,
}: NewsCategoryPageProps) {
  return (
    <Layout
      title={`${category.name} | Na Now News`}
      description={category.description}>
      <div className="bg-white px-4 pb-16 pt-32 dark:bg-neutral-900">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="font-judul text-4xl font-bold text-neutral-900 dark:text-white">
            {category.name}
          </h1>
          <p className="mx-auto max-w-2xl pt-6 text-base text-dark-now dark:text-white-now">
            {category.description}
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
              No published articles here yet.
            </h2>
            <p className="pt-4 text-base text-dark-now dark:text-white-now">
              This category shelf is ready for future Na Now News stories.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getNewsCategoryPaths(),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<NewsCategoryPageProps> = async ({
  params,
}) => {
  const categorySlug = String(params?.categorySlug ?? "");
  const category = getCategoryOrNull(categorySlug);

  if (!category) {
    return { notFound: true };
  }

  return {
    props: {
      category,
      articles: getPublishedNewsArticlesByCategory(categorySlug),
    },
  };
};
