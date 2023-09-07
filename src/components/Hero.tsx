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
      <div className="max-w-7xl mx-auto pt-4 pb-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2">
        <div className="pt-6 md:pt-32 justify-center text-center sm:justify-start sm:text-start">
          <h1 className="text-5xl font-bold text-neutral-900 dark:text-white font-judul">
            <span className="text-green-now dark:text-yellow-now font-extrabold">BANANOW</span>...<br />{" "}
            The <span className="text-yellow-now dark:text-green-now font-extrabold">LAND</span> of Nutrition
          </h1>
          <p className="pt-6 text-base w-auto sm:w-10/12 md:w-10/12 text-dark-now dark:text-white-now">
             Welcome to the <span className="text-green-now dark:text-yellow-now font-bold">BANANOW</span>.<span className="text-yellow-now dark:text-green-now font-bold">LAND</span>, where the vibes are always hype and the fun never stops! We are your friendly neighborhood from Web3.<br />
            <br />
            Yes, we know, Web3 this, Web3 that, Web3 her, Web3 him, Web3 they, what the freak is Web3, right?<br />
            <br />
            Take it easy, <span className="text-green-now dark:text-yellow-now font-bold">FAMS</span>! We're not going to push your limit knowing it, but we're here trying our best to show you that diving into the digital world can be as easy as peeling a <span className="text-yellow-now dark:text-green-now font-bold">BANANA</span>.<br />
            <br />
            Whether we're <span className="text-green-now dark:text-yellow-now font-bold">PLAYING</span>, <span className="text-yellow-now dark:text-green-now font-bold">LEARNING</span>, or <span className="text-green-now dark:text-yellow-now font-bold">WORKING</span>, together we've got your back. So, grab your lemon tea and join us for the most a-peeling adventure you'll ever have in the digital jungle!<br />
            <br />
            Let's grooowwww!!!!
          </p>
          <div className="flex flex-auto pt-10 gap-2 min-w-[350px] justify-center sm:justify-start">
            <div>
              <Link onClick={sound2Click} href="#brandproducts">
                <button className="bg-dark-now dark:bg-white-now text-white dark:text-neutral-900 text-base rounded-full px-4 p-2 font-medium dark:hover:bg-yellow-now hover:bg-green-now hover:text-neutral-900 dark:hover:text-white">
                  The Brands
                </button>
              </Link>
            </div>

            <div>
              <Link onClick={sound2Click} href="#theheads">
                <button className="bg-dark-now dark:bg-white-now text-white dark:text-neutral-900 text-base rounded-full px-4 p-2 font-medium dark:hover:bg-yellow-now hover:bg-green-now hover:text-neutral-900 dark:hover:text-white">
                  The Community
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
