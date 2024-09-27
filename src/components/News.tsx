import Link from "next/link";
import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/solid";

import useSound from "use-sound";
import React from "react";

const contents = [
  {
    title: "Title Na Now News",
    description:
      "Diane Ackerman says “Play is our brain’s favorite way of Learning.” So, to us Play it’s not just a word that we try to say, but it is our way of life! We're here to share the secret sauce to a happier, less stressful journey.",
    features: [
      "Date: xx/xx/xxxx",
      "Category: BANANOW, 90s Vibes",
      "Author: Prof. NOTA",
    ],
    image: "/images/features/playing.svg",
    imagealt: "Image description...",
    order: true,
  },
  {
    title: "Title Na Now News",
    description:
      "Activate our inner Playing mode. Life's a rollercoaster, and whether it takes you soaring high or dipping low, we're here to remind you to keep the game going. It's like having a perpetual fun pass for this wild ride called life!",
    features: [
      "Date: xx/xx/xxxx",
      "Category: BANANOW, Dermaga NFT",
      "Author: Prof. NOTA",
    ],
    image: "/images/features/learning.svg",
    imagealt: "Image description...",
    order: false,
  },
  {
    title: "Title Na Now News",
    description:
      "Diane Ackerman says “Play is our brain’s favorite way of Learning.” So, to us Play it’s not just a word that we try to say, but it is our way of life! We're here to share the secret sauce to a happier, less stressful journey.",
    features: [
      "Date: xx/xx/xxxx",
      "Category: BANANOW, BANANOW Class",
      "Author: Prof. NOTA",
    ],
    image: "/images/features/working.svg",
    imagealt: "Image description...",
    order: true,
  },
];

export function News1() {
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
    <div className="bg-white dark:bg-neutral-900" id="news1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-x-40 pt-0 pb-16">
        <div className="h-48 w-38 flex justify-center mx-auto hover:scale-110 transition">
          <Link onClick={sound0Click} href="https://news.bananow.land/" title="Na Now News of BANANOW" target="_blank">
            <Image
              onMouseEnter={() => {
                setIsHovering(true);
                play4();
              }}
              onMouseLeave={() => {
                setIsHovering(false);
                stop();
              }}
              src="/images/hero/hero.svg"
              alt="Na Now News of BANANOW"
              width={240}
              height={240}
              quality={75}
              sizes="100vw"
              priority
            />
          </Link>
        </div>
        {/* <h2 className="text-4xl font-bold text-center text-neutral-900 dark:text-white">Na Now News</h2> */}
        <h2 className="font-judul font-bold text-lg text-center text-neutral-900 dark:text-white">Na Now News</h2>
        <p className="pt-2 text-base text-center text-dark-now dark:text-white-now">
        Here we share whatever we have done. It can be crazy nothing or ordinary something. There are a lot of them. Let's dig in!
          </p>
        {/* <p className="pt-6 text-base max-w-2xl text-center m-auto text-dark-now dark:text-white-now">
          Here we share whatever we have done. It can be crazy nothing or ordinary something. There are a lot of them. Let's dig in!
        </p> */}

        {/* {contents.map((content) => (
          <div
            key={content.title}
            className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-28 items-center"
          >
            <div
              className={`pt-8 md:pt-16 ${
                content.order ? "order-1 md:order-2" : "order-1"
              }`}
            >
              <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">{content.title}</h1>
              <p className="pt-6 pb-6 text-base text-dark-now dark:text-white-now">
                {content.description}
              </p>
              <ul className="font-medium space-y-1 flex-1">
                {content.features.map((feature) => (
                  <li key={feature} className="leading-6 flex">
                    <CheckIcon className="mt-2 w-3 h-3 text-green-now dark:text-yellow-now shrink-0" />
                    <span className="ml-3 text-dark-now dark:text-white-now">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`order-1 pt-8 md:pt-16 ${
                content.order ? "ml-0 2xl:-ml-40" : "mr-0 2xl:-mr-40"
              }`}
            >
              <div className="flex items-center">
                <Image
                  src={content.image}
                  alt={content.imagealt}
                  width={1920}
                  height={1080}
                  quality={75}
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
}

const listNews = [
  {
    jump: "/vibes/",
    title: "90's Vibes",
    description:
      "The space (mostly on Twitter) where we can sing, chat, shill, or laugh with the fun of 90's spirit. Speak up your voices, make a lot of noise, and don't be silent!",
    image: "/images/brandproducts/90svibes.svg",
    alt: "The 90's Vibes Space",
  },
  {
    jump: "/dermaga/",
    title: "Dermaga Web3",
    description:
      "The offline event that shares and exchanges knowledge about the Web3 world. The bridge between Web2 and Web3 community.",
    image: "/images/brandproducts/dermaga.svg",
    alt: "Dermaga NFT is Part of Dermaga Web3",
  },
  {
    jump: "/class/",
    title: "BANANOW Class",
    description:
      "An intimate education approach for the community. The room to share about love, life, and technology. It can be on a Discord channel or in any physical room in the Universe of Reality.",
    image: "/images/brandproducts/class.svg",
    alt: "Discord Class is Part of BANANOW Class",
  },
  {
    jump: "/inamotion/",
    title: "Ina Motion",
    description:
      "A creative agency that accommodates the creative needs of other brands/products/entities, and is a profitable employer for creative people in the BANANOW community.",
    image: "/images/brandproducts/inamotion.svg",
    alt: "Ina Motion Creative Agency",
  },
  {
    jump: "/delegate/",
    title: "Agent Now",
    description:
      "The talent coordinator agency of BANANOW which is delegates the demand from other entities to farmers in BANANOW FAMILY.",
    image: "/images/brandproducts/delegate.svg",
    alt: "Agent Now is Farmers Delegate",
  },
  {
    jump: "/professor/",
    title: "Prof. NOTA's Dept.",
    description:
      "The Web3 tech support department which makes the engine run smoothly in BANANOW. Doing tech strategy, Web3 philosophical research, blockchain exploration, and even soul analytics.",
    image: "/images/brandproducts/professornota.svg",
    alt: "Prof. NOTA's Department",
  },
];

export function News2() {
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
    <div className="bg-white dark:bg-neutral-900" id="new2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-4xl font-bold text-neutral-900 dark:text-white">Here are <span className="text-green-now dark:text-yellow-now font-extrabold">BANANOW</span>'s Growing Brands</h2>

        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto text-dark-now dark:text-white-now">
          Our <span className="text-green-now dark:text-yellow-now font-bold">FAMILY</span> always maintain the fertility of each of the plantation crops on this <span className="text-yellow-now dark:text-green-now font-bold">LAND</span>. Make this space a healthy, fair, and fun place to grow.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        {listNews.map(({ jump, title, description, image, alt }) => (
          <div key={title}>
            <div className="h-32 w-32 flex justify-center mx-auto hover:scale-110 transition">
              <Link onClick={sound0Click} href={jump} title={title}>
                <Image
                  onMouseEnter={() => {
                    setIsHovering(true);
                    play4();
                  }}
                  onMouseLeave={() => {
                    setIsHovering(false);
                    stop();
                  }}
                  src={image}
                  alt={alt}
                  width={130}
                  height={130}
                  quality={75}
                  sizes="100vw"
                  priority
                />
              </Link>
            </div>
            <h2 className="font-bold text-lg text-center text-neutral-900 dark:text-white">{title}</h2>
            <p className="pt-2 text-base text-center text-dark-now dark:text-white-now">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
