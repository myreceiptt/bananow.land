import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <div className="bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto pt-20 pb-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2">
        <div className="pt-6 md:pt-32 justify-center text-center sm:justify-start sm:text-start">
          <h1 className="text-5xl font-bold">
            Welcome to <br />{" "}
            <span className="text-rose-500 font-extrabold">BANANOW</span>!
          </h1>
          <p className="pt-6 text-base w-auto sm:w-10/12 md:w-10/12 dark:text-neutral-400">
            A land where its community can always play, learn, and work according to their resulting revenue and formed value.
          </p>
          <div className="flex flex-auto pt-10 gap-2 min-w-[350px] justify-center sm:justify-start">
            <div>
              <Link href="#brandproducts">
                <button className="bg-black dark:bg-white text-white dark:text-black text-base rounded-full px-4 p-2 font-medium dark:hover:bg-rose-500 hover:bg-rose-500 hover:text-white dark:hover:text-white">
                  The Brands
                </button>
              </Link>
            </div>

            <div>
              <Link href="#features">
                <button className="bg-rose-500 text-white text-base rounded-full px-4 p-2 font-medium dark:hover:bg-white hover:bg-black hover:text-white dark:hover:text-black">
                  The Features
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center mt-12">
          <Image
            src="/images/hero/hero.svg"
            alt="Image hero description"
            width={1025}
            height={662}
            quality={75}
            sizes="100vw"
            priority
          />
        </div>
      </div>
    </div>
  );
}
