import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Vibes() {
  return (
    <Layout>
      <div
        className="bg-white dark:bg-neutral-900 w-full px-4 pt-32 pb-16"
        id="404"
      >
        <h2 className="text-4xl font-bold text-center">90's Vibes</h2>

        <p className="pt-6 pb-16 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          Here you will find all the information about the 90's Vibes of <span className="text-rose-500">BANANOW</span>. Stay tuned!
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
          <Link href="/">
            <button className="bg-rose-500 text-white text-base rounded-full px-16 p-3 font-medium dark:hover:bg-white hover:bg-black hover:text-white dark:hover:text-black">
              Return to The Land
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
