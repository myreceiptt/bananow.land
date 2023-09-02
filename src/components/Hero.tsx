import Image from "next/image";
import Link from "next/link";

import useSound from "use-sound";

export function Hero() {
  const sound2Loc = "/sounds/tinggg.mp3";
  const [play2] = useSound(
    sound2Loc,
    { volume: 0.75 }
  );
  const sound2Click = () => {
    play2();
  };
  return (
    <div className="bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto pt-20 pb-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2">
        <div className="pt-6 md:pt-32 justify-center text-center sm:justify-start sm:text-start">
          <h1 className="text-5xl font-bold text-neutral-900 dark:text-white">
            Welcome to <br />{" "}
            <span className="text-green-now dark:text-yellow-now font-extrabold">BANANOW</span>!
          </h1>
          <p className="pt-6 text-base w-auto sm:w-10/12 md:w-10/12 text-dark-now dark:text-white-now">
            <span className="text-green-now dark:text-yellow-now font-bold">BANANOW</span> is a fun, non-intimidating, supportive family, where its members can always play, learn, and work according to their resulting revenue and formed value in Web3 ecosystem.
          </p>
          <div className="flex flex-auto pt-10 gap-2 min-w-[350px] justify-center sm:justify-start">
            <div>
              <Link onClick={sound2Click} href="#features">
                <button className="bg-dark-now dark:bg-white-now text-white dark:text-neutral-900 text-base rounded-full px-4 p-2 font-medium dark:hover:bg-yellow-now hover:bg-green-now hover:text-neutral-900 dark:hover:text-white">
                  The Features
                </button>
              </Link>
            </div>

            <div>
              <Link onClick={sound2Click} href="#brandproducts">
                <button className="bg-dark-now dark:bg-white-now text-white dark:text-neutral-900 text-base rounded-full px-4 p-2 font-medium dark:hover:bg-yellow-now hover:bg-green-now hover:text-neutral-900 dark:hover:text-white">
                  The Brands
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
