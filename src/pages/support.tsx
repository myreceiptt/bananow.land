import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

import useSound from "use-sound";

export default function Support() {
  const sound2Loc = "/sounds/tinggg.mp3";
  const [play2] = useSound(sound2Loc, { volume: 0.75 });
  const sound2Click = () => {
    play2();
  };
  return (
    <Layout>
      <Head>
        <meta
          httpEquiv="Refresh"
          content="4; url='https://gp.bananow.land/the-embassy'"
        />
      </Head>
      <div
        className="bg-white dark:bg-neutral-900 w-full px-4 pt-32 pb-16"
        id="404"
      >
        <h2 className="text-4xl font-judul font-bold text-center text-neutral-900 dark:text-white">
          Embassy of Support
        </h2>
        <p className="pt-6 pb-16 text-base max-w-2xl text-center m-auto text-dark-now dark:text-white-now">
          This page redirects to the green print page where all the information
          about how to access the Embassy of{" "}
          <span className="text-green-now dark:text-yellow-now font-bold">
            BANANOW
          </span>
          is written...
        </p>
        <Image
          src="/images/404/404.svg"
          alt="Support Terms"
          width={1920}
          height={1080}
          quality={75}
          sizes="100vw"
          className="w-[350px] md:w-4/12 justify-center text-center mx-auto"
        />
        <div className="mt-16 text-center">
          <p className="pt-6 pb-16 text-base max-w-2xl text-center m-auto text-dark-now dark:text-white-now">
            If you open this page by accident, please hit the button below!
          </p>
          <Link onClick={sound2Click} href="/">
            <button className="bg-dark-now dark:bg-white-now text-white dark:text-neutral-900 text-base rounded-full px-16 p-3 font-medium dark:hover:bg-yellow-now hover:bg-green-now hover:text-neutral-900 dark:hover:text-white">
              Return to Home Page
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
