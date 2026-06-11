import Image from "next/image";
import Link from "next/link";
import React from "react";
import MediaEmbed, { isStandaloneUrl } from "./MediaEmbed";

type NewsMarkdownProps = {
  markdown: string;
};

function renderInline(text: string) {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g);

  return parts.map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={index}
          className="rounded bg-neutral-100 px-1 py-0.5 font-mono text-sm dark:bg-neutral-800"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }

    const linkMatch = part.match(/^\[([^\]]+)\]\((\S+)(?:\s+["'][^"']*["'])?\)$/);
    if (linkMatch) {
      return (
        <Link
          key={index}
          href={linkMatch[2]}
          className="font-medium text-green-now underline hover:text-yellow-now dark:text-yellow-now dark:hover:text-green-now"
        >
          {linkMatch[1]}
        </Link>
      );
    }

    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}

function flushList(
  blocks: React.ReactNode[],
  listItems: string[],
  listType: "ol" | "ul" | null,
) {
  if (!listItems.length || !listType) {
    return;
  }

  const ListTag = listType;
  blocks.push(
    <ListTag
      key={`list-${blocks.length}`}
      className={`${listType === "ol" ? "list-decimal" : "list-disc"} space-y-2 pl-6`}
    >
      {listItems.map((item) => (
        <li key={item}>{renderInline(item)}</li>
      ))}
    </ListTag>,
  );
}

export default function NewsMarkdown({ markdown }: NewsMarkdownProps) {
  const blocks: React.ReactNode[] = [];
  const lines = markdown.split(/\r?\n/);
  let listItems: string[] = [];
  let listType: "ol" | "ul" | null = null;

  const resetList = () => {
    flushList(blocks, listItems, listType);
    listItems = [];
    listType = null;
  };

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (!trimmed) {
      resetList();
      return;
    }

    const orderedMatch = trimmed.match(/^\d+\.\s+(.*)$/);
    if (orderedMatch) {
      if (listType !== "ol") {
        resetList();
        listType = "ol";
      }
      listItems.push(orderedMatch[1]);
      return;
    }

    const unorderedMatch = trimmed.match(/^[-*]\s+(.*)$/);
    if (unorderedMatch) {
      if (listType !== "ul") {
        resetList();
        listType = "ul";
      }
      listItems.push(unorderedMatch[1]);
      return;
    }

    resetList();

    if (/^---+$/.test(trimmed)) {
      blocks.push(
        <hr key={`hr-${blocks.length}`} className="border-neutral-200 dark:border-neutral-700" />,
      );
      return;
    }

    const imageMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (imageMatch) {
      blocks.push(
        <Image
          key={`image-${blocks.length}`}
          src={imageMatch[2]}
          alt={imageMatch[1]}
          width={1200}
          height={675}
          className="h-auto w-full rounded-lg"
        />,
      );
      return;
    }

    if (isStandaloneUrl(trimmed)) {
      blocks.push(<MediaEmbed key={`media-${blocks.length}`} url={trimmed} />);
      return;
    }

    if (trimmed.startsWith("### ")) {
      blocks.push(
        <h3 key={`h3-${blocks.length}`} className="pt-4 font-judul text-2xl font-bold">
          {renderInline(trimmed.slice(4))}
        </h3>,
      );
      return;
    }

    if (trimmed.startsWith("## ")) {
      blocks.push(
        <h2 key={`h2-${blocks.length}`} className="pt-6 font-judul text-3xl font-bold">
          {renderInline(trimmed.slice(3))}
        </h2>,
      );
      return;
    }

    if (trimmed.startsWith("# ")) {
      blocks.push(
        <h1 key={`h1-${blocks.length}`} className="pt-6 font-judul text-4xl font-bold">
          {renderInline(trimmed.slice(2))}
        </h1>,
      );
      return;
    }

    if (trimmed.startsWith("> ")) {
      blocks.push(
        <blockquote
          key={`quote-${blocks.length}`}
          className="border-l-4 border-yellow-now pl-4 italic text-dark-now dark:text-white-now"
        >
          {renderInline(trimmed.slice(2))}
        </blockquote>,
      );
      return;
    }

    blocks.push(<p key={`p-${blocks.length}`}>{renderInline(trimmed)}</p>);
  });

  resetList();

  return <div className="space-y-5">{blocks}</div>;
}
