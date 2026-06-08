import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import useSound from "use-sound";

import type { RedirectConfig } from "../data/redirects";
import Layout from "./Layout";
import RedirectLayout from "./Redirect";

type RedirectPageProps = {
  redirect: RedirectConfig;
};

function RedirectDescription({ redirect }: RedirectPageProps) {
  return (
    <>
      {redirect.description.map((part, index) =>
        part.highlight ? (
          <span
            key={`${part.text}-${index}`}
            className="text-green-now dark:text-yellow-now font-bold"
          >
            {part.text}
          </span>
        ) : (
          <span key={`${part.text}-${index}`}>{part.text}</span>
        ),
      )}
    </>
  );
}

export default function RedirectPage({ redirect }: RedirectPageProps) {
  const sound2Loc = "/sounds/tinggg.mp3";
  const [play2] = useSound(sound2Loc, { volume: 0.75 });
  const sound2Click = () => {
    play2();
  };
  const PageLayout = redirect.layout === "redirect" ? RedirectLayout : Layout;

  return (
    <PageLayout>
      <Head>
        <meta httpEquiv="Refresh" content={`4; url='${redirect.target}'`} />
      </Head>
      <div
        className="bg-white dark:bg-neutral-900 w-full px-4 pt-32 pb-16"
        id={redirect.id ?? "404"}
      >
        <h2
          className={
            redirect.headingClassName ??
            "text-4xl font-judul font-bold text-center text-neutral-900 dark:text-white"
          }
        >
          {redirect.heading}
        </h2>
        <p className="pt-6 pb-16 text-base max-w-2xl text-center m-auto text-dark-now dark:text-white-now">
          <RedirectDescription redirect={redirect} />
        </p>
        <Image
          src={redirect.image}
          alt={redirect.imageAlt}
          width={1920}
          height={1080}
          quality={75}
          sizes="100vw"
          loading="eager"
          className="w-87.5 md:w-4/12 justify-center text-center mx-auto"
        />
        <div className="mt-16 text-center">
          <p className="pt-6 pb-16 text-base max-w-2xl text-center m-auto text-dark-now dark:text-white-now">
            You are being redirected. If nothing happens, please hit the button
            below!
          </p>
          <Link
            onClick={sound2Click}
            href={redirect.target}
            className="inline-block bg-dark-now dark:bg-white-now text-white dark:text-neutral-900 text-base rounded-full px-16 p-3 font-medium dark:hover:bg-yellow-now hover:bg-green-now hover:text-neutral-900 dark:hover:text-white"
          >
            {redirect.buttonLabel}
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
