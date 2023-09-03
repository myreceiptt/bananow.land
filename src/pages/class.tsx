import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

import useSound from "use-sound";

export default function Class() {
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
        <h2 className="text-4xl font-bold text-center text-neutral-900 dark:text-white"><span className="text-green-now dark:text-yellow-now font-extrabold">BANANOW</span> Class</h2>

        <p className="pt-6 pb-16 text-base max-w-2xl text-center m-auto text-dark-now dark:text-white-now">
          Here you will find all the information about the <span className="text-green-now dark:text-yellow-now font-bold">BANANOW</span> Class held in both Universe of Reality, and Web3 Universe. Stay tuned!
        </p>
        <Image
          src="/images/brandproducts/class.svg"
          alt="Discord Class is Part of BANANOW Class"
          width={1920}
          height={1080}
          quality={75}
          sizes="100vw"
          className="w-[350px] md:w-4/12 justify-center text-center mx-auto"
        />
        <div className="mt-16 text-center">
          <Link href="/">
            <button className="bg-dark-now dark:bg-white-now text-white dark:text-neutral-900 text-base rounded-full px-16 p-3 font-medium dark:hover:bg-yellow-now hover:bg-green-now hover:text-neutral-900 dark:hover:text-white">
              Return to Home Page
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
