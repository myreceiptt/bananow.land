import fs from "fs";
import type { GetStaticProps } from "next";
import path from "path";
import LegalMarkdown from "../components/legal/LegalMarkdown";
import Layout from "../components/ui/Layout";

type LegalPageProps = {
  markdown: string;
};

const termsDescription =
  "You can review the most current version of these Terms at any time on this page.";

export default function Terms({ markdown }: LegalPageProps) {
  return (
    <Layout
      title="Terms & Conditions - BANANOW Land"
      description={termsDescription}>
      <div
        className="bg-white dark:bg-neutral-900 w-full px-4 pt-32 pb-16"
        id="terms">
        <h2 className="text-4xl font-judul font-bold text-center text-neutral-900 dark:text-white">
          Terms and Conditions of Use
        </h2>

        <div className="pt-6 pb-16 text-base max-w-4xl text-left m-auto text-dark-now dark:text-white-now space-y-4">
          <LegalMarkdown markdown={markdown} />
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<LegalPageProps> = async () => {
  const markdown = fs.readFileSync(
    path.join(process.cwd(), "src/content/legal/terms-and-conditions.md"),
    "utf8",
  );

  return {
    props: {
      markdown,
    },
  };
};
