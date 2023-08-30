import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Twitter";

export default function Twitter() {
  return (
    <Layout>
      <div
        className="bg-white dark:bg-neutral-900 w-full px-4 pt-32 pb-16"
        id="404"
      >
        <h2 className="text-4xl font-bold text-center">Redirecting...</h2>

        <p className="pt-6 pb-16 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          Redirecting to Twitter account of <span className="text-rose-500">BANANOW</span>...
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
        {/* <div className="mt-16 text-center">
          <Link href="...">
            <button className="bg-rose-500 text-white text-base rounded-full px-16 p-3 font-medium dark:hover:bg-white hover:bg-black hover:text-white dark:hover:text-black">
              Discord Server
            </button>
          </Link>
        </div> */}
      </div>
      <div className="bg-gray-50 dark:bg-neutral-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-20 pb-10">
        <h1 className="text-4xl font-bold text-center">
          You are being redirected, if nothing happens, please hit the button below!
        </h1>
      </div>

      <div className="text-center pb-20">
        <Link href="https://twitter.com/bananow_land" target="_blank">
          <button className="bg-rose-500 text-white rounded-full px-6 p-3 font-medium dark:hover:bg-white hover:bg-black hover:text-white dark:hover:text-black">
            Twitter Account
          </button>
        </Link>
      </div>
    </div>
    </Layout>
  );
}
