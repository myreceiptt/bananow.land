import fs from "fs";
import type { GetStaticProps } from "next";
import path from "path";
import React from "react";
import Layout from "../components/Layout";

type LegalPageProps = {
  markdown: string;
};

function formatInline(text: string) {
  return text.split(/(`[^`]+`)/g).map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={index} className="font-mono text-sm">
          {part.slice(1, -1)}
        </code>
      );
    }

    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}

function renderMarkdown(markdown: string) {
  const blocks: React.ReactNode[] = [];
  const lines = markdown.split(/\r?\n/);
  let listItems: string[] = [];

  const flushList = () => {
    if (!listItems.length) {
      return;
    }

    blocks.push(
      <ol
        key={`list-${blocks.length}`}
        className="list-decimal pl-6 space-y-2"
      >
        {listItems.map((item) => (
          <li key={item}>{formatInline(item)}</li>
        ))}
      </ol>,
    );
    listItems = [];
  };

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushList();
      return;
    }

    const listMatch = trimmed.match(/^\d+\.\s+(.*)$/);
    if (listMatch) {
      listItems.push(listMatch[1]);
      return;
    }

    flushList();

    if (trimmed.startsWith("# ")) {
      return;
    }

    if (trimmed.startsWith("## ")) {
      blocks.push(
        <h3
          key={`heading-${blocks.length}`}
          className="pt-8 font-judul text-2xl font-bold text-neutral-900 dark:text-white"
        >
          {formatInline(trimmed.slice(3))}
        </h3>,
      );
      return;
    }

    if (trimmed.startsWith("### ")) {
      blocks.push(
        <h4
          key={`subheading-${blocks.length}`}
          className="pt-6 font-judul text-xl font-bold text-neutral-900 dark:text-white"
        >
          {formatInline(trimmed.slice(4))}
        </h4>,
      );
      return;
    }

    blocks.push(
      <p key={`paragraph-${blocks.length}`}>{formatInline(trimmed)}</p>,
    );
  });

  flushList();
  return blocks;
}

export default function Privacy({ markdown }: LegalPageProps) {
  return (
    <Layout>
      <div
        className="bg-white dark:bg-neutral-900 w-full px-4 pt-32 pb-16"
        id="privacy"
      >
        <h2 className="text-4xl font-judul font-bold text-center text-neutral-900 dark:text-white">
          Privacy Policy
        </h2>

        <div className="pt-6 pb-16 text-base max-w-4xl text-left m-auto text-dark-now dark:text-white-now space-y-4">
          {renderMarkdown(markdown)}
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<LegalPageProps> = async () => {
  const markdown = fs.readFileSync(
    path.join(process.cwd(), "DOCSNOW/UPDATE_PRIVACY_POLICY.md"),
    "utf8",
  );

  return {
    props: {
      markdown,
    },
  };
};
