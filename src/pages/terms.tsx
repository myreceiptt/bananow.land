import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

import useSound from "use-sound";

export default function Terms() {
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
      <div
        className="bg-white dark:bg-neutral-900 w-full px-4 pt-32 pb-16"
        id="404"
      >
        <h2 className="text-4xl font-bold text-center">Terms and Conditions</h2>

        <p className="pt-6 pb-16 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          Here you can read all the information about the Terms and Conditions of <span className="text-yellow-now">BANANOW</span>. Stay tuned!
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
          <Link onClick={sound2Click} href="/">
            <button className="bg-yellow-now text-white text-base rounded-full px-16 p-3 font-medium dark:hover:bg-white hover:bg-black hover:text-white dark:hover:text-black">
              Return to The Land
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
