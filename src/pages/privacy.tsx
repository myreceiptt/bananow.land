import fs from "fs";
import type { GetStaticProps } from "next";
import path from "path";
import LegalMarkdown from "../components/LegalMarkdown";
import Layout from "../components/Layout";

type LegalPageProps = {
  markdown: string;
};

const privacyDescription =
  "Please read this Privacy Policy carefully before accessing or using our website.";

export default function Privacy({ markdown }: LegalPageProps) {
  return (
    <Layout
      title="Privacy Policy - BANANOW Land"
      description={privacyDescription}>
      <div
        className="bg-white dark:bg-neutral-900 w-full px-4 pt-32 pb-16"
        id="privacy">
        <h2 className="text-4xl font-judul font-bold text-center text-neutral-900 dark:text-white">
          Privacy Policy
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
    path.join(process.cwd(), "src/content/legal/privacy-policy.md"),
    "utf8",
  );

  return {
    props: {
      markdown,
    },
  };
};
