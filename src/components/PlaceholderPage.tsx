import Link from "next/link";
import type React from "react";

import useSound from "use-sound";

import Layout from "./Layout";

type PlaceholderPageProps = {
  id: string;
  title: React.ReactNode;
  description: React.ReactNode;
};

export default function PlaceholderPage({
  id,
  title,
  description,
}: PlaceholderPageProps) {
  const sound2Loc = "/sounds/tinggg.mp3";
  const [play2] = useSound(sound2Loc, { volume: 0.75 });
  const sound2Click = () => {
    play2();
  };

  return (
    <Layout>
      <div
        className="bg-white dark:bg-neutral-900 w-full px-4 pt-32 pb-16"
        id={id}
      >
        <h2 className="text-4xl font-judul font-bold text-center text-neutral-900 dark:text-white">
          {title}
        </h2>

        <p className="pt-6 pb-16 text-base max-w-2xl text-center m-auto text-dark-now dark:text-white-now">
          {description}
        </p>

        <div className="text-center">
          <Link
            onClick={sound2Click}
            href="/"
            className="inline-block bg-dark-now dark:bg-white-now text-white dark:text-neutral-900 text-base rounded-full px-16 p-3 font-medium dark:hover:bg-yellow-now hover:bg-green-now hover:text-neutral-900 dark:hover:text-white"
          >
            Back to BANANOW LAND
          </Link>
        </div>
      </div>
    </Layout>
  );
}
