import type { GetStaticProps } from "next";

import Layout from "../../components/Layout";
import NewsCard from "../../components/NewsCard";
import NewsTaxonomyList from "../../components/NewsTaxonomyList";
import { activeBrands } from "../../data/brands";
import { newsCategories } from "../../data/newsCategories";
import { getPublishedNewsArticles, type NewsArticle } from "../../lib/news";

type NewsIndexProps = {
  articles: NewsArticle[];
  tagItems: { name: string; slug: string }[];
};

const newsDescription =
  activeBrands.find((brand) => brand.name === "Na Now News")?.description ??
  "Na Now News is BANANOW Land's space for updates, stories, and ordinary something.";

export default function NewsIndex({ articles, tagItems }: NewsIndexProps) {
  return (
    <Layout title="Na Now News - BANANOW Land" description={newsDescription}>
      <div className="bg-white px-4 pb-16 pt-32 dark:bg-neutral-900" id="news">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="font-judul text-4xl font-bold text-neutral-900 dark:text-white">
            Na{" "}
            <span className="text-yellow-now dark:text-green-now font-extrabold">
              Now
            </span>{" "}
            News
          </h1>
          <p className="mx-auto max-w-2xl pt-6 text-base text-dark-now dark:text-white-now">
            {newsDescription}
          </p>
        </div>

        <div className="mx-auto max-w-5xl pt-10">
          <NewsTaxonomyList
            basePath="/news/category"
            items={newsCategories.map((category) => ({
              name: category.name,
              slug: category.slug,
            }))}
          />
        </div>

        {articles.length ? (
          <div className="mx-auto grid max-w-7xl gap-6 pt-10 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <NewsCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-12 max-w-2xl rounded-lg border border-neutral-200 bg-white p-8 text-center dark:border-neutral-800 dark:bg-neutral-900">
            <h2 className="font-judul text-2xl font-bold text-neutral-900 dark:text-white">
              The news soil is ready.
            </h2>
            <p className="pt-4 text-base text-dark-now dark:text-white-now">
              No published Na Now News articles have been planted yet. Farmer
              can add Markdown articles to <code>src/content/news/</code> when
              the first story is ready.
            </p>
          </div>
        )}

        {tagItems.length ? (
          <div className="mx-auto max-w-5xl pt-10">
            <NewsTaxonomyList
              basePath="/news/tag"
              variant="featuredInverted"
              items={tagItems}
            />
          </div>
        ) : null}
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<NewsIndexProps> = async () => {
  const articles = getPublishedNewsArticles();
  const tagMap = new Map<string, string>();

  for (const article of articles) {
    article.tags.forEach((tag, index) => {
      tagMap.set(article.tagSlugs[index], tag);
    });
  }

  return {
    props: {
      articles,
      tagItems: Array.from(tagMap.entries()).map(([slug, name]) => ({
        name: `${name}`,
        slug,
      })),
    },
  };
};
