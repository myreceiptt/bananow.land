import Image from "next/image";
import Link from "next/link";

import useSound from "use-sound";
import React from "react";

export function BrandProducts() {
  const sound0Loc = "/sounds/tiuing.mp3";
  const [play0] = useSound(
    sound0Loc,
    { volume: 0.75 }
  );
  const sound0Click = () => {
    play0();
  };

  const sound4Loc = "/sounds/ngung-ngung.mp3";
  const [play4, { stop }] = useSound(
    sound4Loc,
    { volume: 1.25 }
  );
  const [isHovering, setIsHovering] = React.useState(
    false
  );
  
  return (
    <div className="bg-white dark:bg-neutral-900" id="brandproducts">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-4xl font-judul font-bold text-neutral-900 dark:text-white">Here are <span className="text-green-now dark:text-yellow-now font-extrabold">BANANOW</span>'s Growing Brands</h2>

        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto text-dark-now dark:text-white-now">
          Our <span className="text-green-now dark:text-yellow-now font-bold">FAMILY</span> always maintain the fertility of each of the plantation crops on this <span className="text-yellow-now dark:text-green-now font-bold">LAND</span>. Make this space a healthy, fair, and fun place to grow. If you want to know more about what we do, which is updated regularly, click on our brands below.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        <div>
          <div className="h-32 w-32 flex justify-center mx-auto hover:scale-110 transition">
            <Link onClick={sound0Click} href="/vibes/" title="The 90's Vibes Space">
              <Image
                onMouseEnter={() => {
                  setIsHovering(true);
                  play4();
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                  stop();
                }}
                src="/images/brandproducts/90svibes.svg"
                alt="The 90's Vibes Space"
                width={130}
                height={130}
                quality={75}
                sizes="100vw"
                priority
              />
            </Link>
          </div>
          <h2 className="font-judul font-bold text-lg text-center text-neutral-900 dark:text-white">90's Vibes</h2>
          <p className="pt-2 text-base text-center text-dark-now dark:text-white-now">
            The space (mostly on X - Twitter and Discord) where we can sing, chat, share, shill, or laugh with the fun of 90's spirit. Speak up your voices, make a lot of noise, and don't be silent!
          </p>
        </div>
        <div>
          <div className="h-32 w-32 flex justify-center mx-auto hover:scale-110 transition">
            <Link onClick={sound0Click} href="/dermaga/" title="Dermaga NFT is Part of Dermaga Web3">
              <Image
                onMouseEnter={() => {
                  setIsHovering(true);
                  play4();
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                  stop();
                }}
                src="/images/brandproducts/dermaga.svg"
                alt="Dermaga NFT is Part of Dermaga Web3"
                width={130}
                height={130}
                quality={75}
                sizes="100vw"
                priority
              />
            </Link>
          </div>
          <h2 className="font-judul font-bold text-lg text-center text-neutral-900 dark:text-white">Dermaga Web3</h2>
          <p className="pt-2 text-base text-center text-dark-now dark:text-white-now">
            The offline event that shares and exchanges knowledge about the Web3 world. The bridge between Web2 and Web3 community.
          </p>
        </div>
        <div>
          <div className="h-32 w-32 flex justify-center mx-auto hover:scale-110 transition">
            <Link onClick={sound0Click} href="/class/" title="Discord Class is Part of BANANOW Class">
              <Image
                onMouseEnter={() => {
                  setIsHovering(true);
                  play4();
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                  stop();
                }}
                src="/images/brandproducts/class.svg"
                alt="Discord Class is Part of BANANOW Class"
                width={130}
                height={130}
                quality={75}
                sizes="100vw"
                priority
              />
            </Link>
          </div>
          <h2 className="font-judul font-bold text-lg text-center text-neutral-900 dark:text-white">Class Now</h2>
          <p className="pt-2 text-base text-center text-dark-now dark:text-white-now">
            An intimate education approach for the community. The room to share about love, life, and technology. It can be on a Discord channel or in any physical room in the Universe of Reality.
          </p>
        </div>
        <div>
          <div className="h-32 w-32 flex justify-center mx-auto hover:scale-110 transition">
            <Link onClick={sound0Click} href="/inamotion/" title="Ina Motion Creative Agency">
              <Image
                onMouseEnter={() => {
                  setIsHovering(true);
                  play4();
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                  stop();
                }}
                src="/images/brandproducts/inamotion.svg"
                alt="Ina Motion Creative Agency"
                width={130}
                height={130}
                quality={75}
                sizes="100vw"
                priority
              />
            </Link>
          </div>
          <h2 className="font-judul font-bold text-lg text-center text-neutral-900 dark:text-white">InAMotion</h2>
          <p className="pt-2 text-base text-center text-dark-now dark:text-white-now">
            The creative agency that accommodates the creative needs of other brands/products/entities, and is a profitable employer for creative people in the <span className="text-green-now dark:text-yellow-now font-bold">BANANOW</span> community.
          </p>
        </div>
        <div>
          <div className="h-32 w-32 flex justify-center mx-auto hover:scale-110 transition">
            <Link onClick={sound0Click} href="/delegate/" title="Agent Now is Farmers Delegate">
              <Image
                onMouseEnter={() => {
                  setIsHovering(true);
                  play4();
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                  stop();
                }}
                src="/images/brandproducts/delegate.svg"
                alt="Agent Now is Farmers Delegate"
                width={130}
                height={130}
                quality={75}
                sizes="100vw"
                priority
              />
            </Link>
          </div>
          <h2 className="font-judul font-bold text-lg text-center text-neutral-900 dark:text-white">Agent Now</h2>
          <p className="pt-2 text-base text-center text-dark-now dark:text-white-now">
            The talent coordinator agency of <span className="text-green-now dark:text-yellow-now font-bold">BANANOW</span> which is delegates the demand from other entities to farmers in <span className="text-yellow-now dark:text-green-now font-bold">BANANOW</span> <span className="text-green-now dark:text-yellow-now font-bold">FAMILY</span>.
          </p>
        </div>
        <div>
          <div className="h-32 w-32 flex justify-center mx-auto hover:scale-110 transition">
            <Link onClick={sound0Click} href="/professor/" title="Prof. NOTA's Department">
              <Image
                onMouseEnter={() => {
                  setIsHovering(true);
                  play4();
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                  stop();
                }}
                src="/images/brandproducts/professornota.svg"
                alt="Prof. NOTA's Department"
                width={130}
                height={130}
                quality={75}
                sizes="100vw"
                priority
              />
            </Link>
          </div>
          <h2 className="font-judul font-bold text-lg text-center text-neutral-900 dark:text-white">NOTA's Dept.</h2>
          <p className="pt-2 text-base text-center text-dark-now dark:text-white-now">
            The Web3 tech support department which makes the engine run smoothly in <span className="text-green-now dark:text-yellow-now font-bold">BANANOW</span>. Doing tech strategy, Web3 philosophical research, blockchain exploration, and even soul analytics.
          </p>
        </div>
      </div>
    </div>
  );
}
