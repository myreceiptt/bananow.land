import Link from "next/link";
import Layout from "../components/Layout";

import useSound from "use-sound";

export default function News() {
  const sound2Loc = "/sounds/tinggg.mp3";
  const [play2] = useSound(sound2Loc, { volume: 0.75 });
  const sound2Click = () => {
    play2();
  };

  return (
    <Layout>
      <div
        className="bg-white dark:bg-neutral-900 w-full px-4 pt-32 pb-16"
        id="news">
        <h2 className="text-4xl font-judul font-bold text-center text-neutral-900 dark:text-white">
          Na{" "}
          <span className="text-yellow-now dark:text-green-now font-extrabold">
            Now
          </span>{" "}
          News
        </h2>

        <p className="pt-6 pb-16 text-base max-w-2xl text-center m-auto text-dark-now dark:text-white-now">
          <span className="text-green-now dark:text-yellow-now font-bold">
            BANANOW
          </span>
          &apos;s space for updates, stories, and ordinary something is being
          prepared.
        </p>

        <div className="text-center">
          <Link
            onClick={sound2Click}
            href="/"
            className="inline-block bg-dark-now dark:bg-white-now text-white dark:text-neutral-900 text-base rounded-full px-16 p-3 font-medium dark:hover:bg-yellow-now hover:bg-green-now hover:text-neutral-900 dark:hover:text-white">
            Back to BANANOW LAND
          </Link>
        </div>
      </div>
    </Layout>
  );
}
