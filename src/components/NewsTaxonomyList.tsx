import Link from "next/link";

type TaxonomyItem = {
  name: string;
  slug: string;
};

type NewsTaxonomyListProps = {
  items: TaxonomyItem[];
  basePath: "/news/category" | "/news/tag";
  variant?: "default" | "featuredInverted";
};

export default function NewsTaxonomyList({
  items,
  basePath,
  variant = "default",
}: NewsTaxonomyListProps) {
  if (!items.length) {
    return null;
  }

  const linkClassName =
    variant === "featuredInverted"
      ? "rounded-full bg-yellow-now px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-dark-now hover:text-white dark:bg-green-now dark:text-white dark:hover:bg-white-now dark:hover:text-neutral-900"
      : "rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-dark-now hover:border-green-now hover:bg-green-now hover:text-white dark:border-neutral-700 dark:text-white-now dark:hover:border-yellow-now dark:hover:bg-yellow-now dark:hover:text-neutral-900";

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {items.map((item) => (
        <Link
          key={item.slug}
          href={`${basePath}/${item.slug}`}
          className={linkClassName}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
