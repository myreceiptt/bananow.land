import type { GetStaticPaths, GetStaticProps } from "next";

import Layout from "../../components/ui/Layout";
import NewsArticleLayout from "../../components/news/NewsArticleLayout";
import {
  getNewsArticleBySlug,
  getNewsArticlePaths,
  type NewsArticle,
} from "../../lib/news";

type NewsArticlePageProps = {
  article: NewsArticle;
};

export default function NewsArticlePage({ article }: NewsArticlePageProps) {
  return (
    <Layout
      title={`Na Now News: ${article.title}`}
      description={article.excerpt}
      image={article.coverImage}>
      <NewsArticleLayout article={article} />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getNewsArticlePaths(),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<NewsArticlePageProps> = async ({
  params,
}) => {
  const slug = String(params?.slug ?? "");
  const article = getNewsArticleBySlug(slug);

  if (!article) {
    return { notFound: true };
  }

  return {
    props: {
      article,
    },
  };
};
