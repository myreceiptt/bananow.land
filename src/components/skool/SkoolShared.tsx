import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import type React from "react";
import useSound from "use-sound";

export function useClickSound() {
  const [play] = useSound("/sounds/tinggg.mp3", { volume: 0.75 });
  return () => {
    play();
  };
}

export function Emphasis({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-green-now dark:text-yellow-now font-extrabold">
      {children}
    </span>
  );
}

export function CtaLink({
  href,
  label,
  variant = "dark",
}: {
  href: string;
  label: string;
  variant?: "dark" | "accent";
}) {
  const soundClick = useClickSound();

  return (
    <Link
      onClick={soundClick}
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 xl:text-base xl:font-medium text-sm font-normal transition-colors ${
        variant === "accent"
          ? "bg-green-now dark:bg-yellow-now text-neutral-900 dark:text-white hover:bg-yellow-now dark:hover:bg-green-now"
          : "bg-dark-now dark:bg-white-now text-white dark:text-neutral-900 hover:bg-green-now hover:text-neutral-900 dark:hover:bg-yellow-now dark:hover:text-white"
      }`}>
      {label}
      <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}
