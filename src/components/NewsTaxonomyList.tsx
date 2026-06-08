import Link from "next/link";

type TaxonomyItem = {
  name: string;
  slug: string;
};

type NewsTaxonomyListProps = {
  items: TaxonomyItem[];
  basePath: "/news/category" | "/news/tag";
};

export default function NewsTaxonomyList({
  items,
  basePath,
}: NewsTaxonomyListProps) {
  if (!items.length) {
    return null;
  }

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {items.map((item) => (
        <Link
          key={item.slug}
          href={`${basePath}/${item.slug}`}
          className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-dark-now hover:border-green-now hover:bg-green-now hover:text-white dark:border-neutral-700 dark:text-white-now dark:hover:border-yellow-now dark:hover:bg-yellow-now dark:hover:text-neutral-900"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
