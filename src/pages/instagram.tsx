import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Redirect";

import useSound from "use-sound";

export default function Redirect() {
  const sound2Loc = "/sounds/tinggg.mp3";
  const [play2] = useSound(
    sound2Loc,
    { volume: 0.75 }
  );
  const sound2Click = () => {
    play2();
  };
  return (
    <Layout>
      <Head>
        <meta httpEquiv="Refresh" content="4; url='https://instagram.com/bananow.land'" />
      </Head>
      <div
        className="bg-white dark:bg-neutral-900 w-full px-4 pt-32 pb-16"
        id="404"
      >
        <h2 className="text-4xl font-bold text-center">Redirecting...</h2>
        <p className="pt-6 pb-16 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          Redirecting to Instagram profile of <span className="text-yellow-now">BANANOW</span>...
        </p>
        <Image
          src="/images/404/404.svg"
          alt="Image 404"
          width={1920}
          height={1080}
          quality={75}
          sizes="100vw"
          className="w-[350px] md:w-4/12 justify-center text-center mx-auto"
        />
        <div className="mt-16 text-center">
          <p className="pt-6 pb-16 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
            You are being redirected. If nothing happens, please hit the button below!
          </p>
          <Link onClick={sound2Click} href="https://instagram.com/bananow.land">
            <button className="bg-yellow-now text-white text-base rounded-full px-16 p-3 font-medium dark:hover:bg-white hover:bg-black hover:text-white dark:hover:text-black">
              Instagram Profile
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
