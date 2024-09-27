import Link from "next/link";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

import useSound from "use-sound";

const products = [
  {
    key: "1a",
    title: "Sprouts",
    supplies: "∞",
    symbol: "👪",
    universe: "Reality",
    description:
      "The Community who are still thinking about whether these BANANAS will be eaten now or taken home? They can interact like any other, but still in different boats with the same goal. They can level up by going more BANANAS.",
    features: [
      "Very Limited Resources",
      "One of One User",
      "No Access",
      "No Support",
    ],
    href: "/discord/",
    cta: "Be a Sprout",
    mostWanted: false,
  },
  {
    key: "1b",
    title: "Sprouts",
    supplies: "∞",
    symbol: "👪",
    universe: "0101",
    description:
      "The Community who are still thinking about whether these BANANAS will be eaten now or taken home? They can interact like any other, but still in different boats with the same goal. They can level up by going more BANANAS.",
    features: [
      "Very Limited Resources",
      "One of One User",
      "Very Limited Access",
      "Very Limited Support",
    ],
    href: "/discord/",
    cta: "Be a Sprout",
    mostWanted: false,
  },
  {
    key: "2a",
    title: "Lovers",
    supplies: "∞",
    symbol: "👪",
    universe: "Reality",
    description:
      "The Friends that loves BANANAS in their ice cream. They are active, crazy, and always spread positive vibes, just like BANANAS. They also travel companions in navigating the world of Web3 to thrive together.",
    features: [
      "Very Limited Resources",
      "One of One User",
      "Very Limited Access",
      "Very Limited Support",
      "No Giveaways",
      "Merchandises",
    ],
    href: "/discord/",
    cta: "Be a Lover",
    mostWanted: false,
  },
  {
    key: "2b",
    title: "Lovers",
    supplies: "∞",
    symbol: "👪",
    universe: "0101",
    description:
      "The Friends that loves BANANAS in their ice cream. They are active, crazy, and always spread positive vibes, just like BANANAS. They also travel companions in navigating the world of Web3 to thrive together.",
    features: [
      "Limited Resources",
      "One of One User",
      "Limited Access",
      "Limited Support",
      "Giveaways",
      "Merchandises",
    ],
    href: "/discord/",
    cta: "Be a Lover",
    mostWanted: false,
  },
  {
    key: "3a",
    title: "Heads",
    supplies: "0000",
    symbol: "👪",
    universe: "Reality",
    description:
      "The FAMILY, which is all holders of BANANOW NFTs, gets full support and becomes a priority in obtaining benefits from the potential of this LAND that they backing up, to develop their owned BANANOW as their brand.",
    features: [
      "Limited Resources",
      "One of One User",
      "Limited Access",
      "Limited Support",
      "Giveaways",
      "Merchandises",
      "Limited Media Custom*",
      "Free Website Service*",
      "Profit Share*",
    ],
    href: "https://heads.bananow.land/",
    cta: "Be a Head",
    mostWanted: true,
  },
  {
    key: "3b",
    title: "Heads",
    supplies: 2345,
    symbol: "👪",
    universe: "0101",
    description:
      "The FAMILY, which is all holders of BANANOW NFTs, gets full support and becomes a priority in obtaining benefits from the potential of this LAND that they backing up, to develop their owned BANANOW as their brand.",
    features: [
      "Unlimited Resources",
      "One of Many Users",
      "Unlimited Access",
      "Unlimited Support",
      "Giveaways",
      "Merchandises",
      "Limited Media Custom*",
      "Free Website Service*",
      "Profit Share*",
    ],
    href: "https://heads.bananow.land/",
    cta: "Be a Head",
    mostWanted: true,
  },
  {
    key: "4a",
    title: "Farmers",
    supplies: 5,
    symbol: "👪",
    universe: "Reality",
    description:
      "The Holders of BANANOW NFTs who maintain the fertility of each of the plantation crops on this LAND. Make this space as always a healthy, fair, and fun place. You can call them, the administrator of the plantation.",
    features: [
      "Unlimited Resources",
      "Many of Many Users",
      "Unlimited Access",
      "Unlimited Support",
      "No Giveaways",
      "Free Merchandises",
      "No Media Custom",
      "No Website Service",
      "No Profit Share",
      "Revenue Share*",
    ],
    href: "/discord/",
    cta: "Be a Farmer",
    mostWanted: false,
  },
  {
    key: "4b",
    title: "Farmers",
    supplies: 6,
    symbol: "👪",
    universe: "0101",
    description:
      "The Holders of BANANOW NFTs who maintain the fertility of each of the plantation crops on this LAND. Make this space as always a healthy, fair, and fun place. You can call them, the administrator of the plantation.",
    features: [
      "Unlimited Resources",
      "Many of Many Users",
      "Unlimited Access",
      "Unlimited Support",
      "No Giveaways",
      "Free Merchandises",
      "No Media Custom",
      "No Website Service",
      "No Profit Share",
      "Revenue Share*",
    ],
    href: "/discord/",
    cta: "Be a Farmer",
    mostWanted: false,
  },
];

type BillingInterval = "0101" | "Reality";

export default function TheHeads() {
  const sound2Loc = "/sounds/tinggg.mp3";
  const [play2] = useSound(
    sound2Loc,
    { volume: 0.75 }
  );
  const sound2Click = () => {
    play2();
  };

  const sound3Loc = "/sounds/jept.mp3";
  const [play3] = useSound(
    sound3Loc,
    { volume: 0.75 }
  );
  const sound3ClickA = () => {
    play3();
    setBillingInterval("Reality");
  };
  const sound3ClickB = () => {
    play3();
    setBillingInterval("0101");
  };

  const [billingInterval, setBillingInterval,] =
    useState<BillingInterval>("Reality");
    
  return (
    <div className="bg-white dark:bg-neutral-900" id="theheads">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <h2 className="text-4xl font-judul font-bold text-center text-neutral-900 dark:text-white">
          Community of <span className="text-yellow-now dark:text-green-now font-extrabold">BANANOW</span>
        </h2>

        <p className="pt-6 text-base max-w-2xl text-center m-auto text-dark-now dark:text-white-now">
          <span className="text-green-now dark:text-yellow-now font-bold">BANANOW</span> is backed by the
          perfect community for its Web3 activities, that is the friends and <span className="text-yellow-now dark:text-green-now font-bold">FAMILY</span> of <span className="text-green-now dark:text-yellow-now font-bold">BANANOW</span> in both universes, the Universe of Reality and the 0101 Universe.
        </p>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 sm:flex sm:flex-col sm:align-center">
        <div className="relative self-center text-base font-semibold mt-6 bg-dark-now dark:bg-white-now rounded-lg flex sm:mt-8">
          <button
            onClick={sound3ClickA}
            type="button"
            className={`${
              billingInterval === "Reality"
                ? "relative w-1/2 bg-white-now dark:bg-dark-now text-neutral-900 dark:text-white"
                : "ml-0.5 relative w-1/2 text-white-now dark:text-dark-now hover:underline hover:text-white dark:hover:text-neutral-900"
            } rounded-md m-1 py-2 whitespace-nowrap sm:w-auto sm:px-8`}
          >
            Universe of Reality
          </button>
          <button
            onClick={sound3ClickB}
            type="button"
            className={`${
              billingInterval === "0101"
                ? "relative w-1/2 bg-white-now dark:bg-dark-now text-neutral-900 dark:text-white"
                : "ml-0.5 relative w-1/2 text-white-now dark:text-dark-now hover:underline hover:text-white dark:hover:text-neutral-900"
            } rounded-md m-1 py-2 whitespace-nowrap sm:w-auto sm:px-8`}
          >
            0101 Universe
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 grid lg:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-16">
        {products.map(
          ({
            key,
            title,
            mostWanted,
            description,
            symbol,
            supplies,
            universe,
            cta,
            features,
            href,
          }) => {
            return (
              <>
                {billingInterval === universe ? (
                  <div
                    key={key}
                    className={`rounded-lg py-8 relative flex flex-col ${
                      mostWanted
                        ? "border-green-now border-2 border-solid dark:border-yellow-now"
                        : "border-light-now border dark:border-light-now"
                    }`}
                  >
                    <h3 className="px-6 text-lg font-judul font-semibold leading-5 text-neutral-900 dark:text-white">
                      {title}
                    </h3>
                    {mostWanted && (
                      <p className="mx-6 absolute top-0 px-4 py-1 -translate-y-1/2 bg-dark-now dark:bg-white-now text-white dark:text-neutral-900 rounded-full text-sm font-semibold tracking-wide shadow-md">
                        Most Wanted
                      </p>
                    )}

                    <p className="px-6 mt-4 leading-6 text-dark-now dark:text-white-now">
                      {description}
                    </p>
                    <div className="mt-2 p-6 -mx-6">
                      <p className="px-6 font-medium flex place-items-end">
                        <span className="text-4xl font-bold">{symbol}</span>
                        &nbsp;&nbsp;
                        <span className="text-4xl font-bold text-neutral-900 dark:text-white">{supplies}</span>
                        <span className="ml-1.5 text-neutral-900 dark:text-white">in&nbsp;{universe}</span>
                      </p>
                    </div>

                    {/* Call to action */}
                    <Link
                      onClick={sound2Click}
                      href={href}
                      target="_blank"
                      className={`mt-4 mx-6 block px-6 py-3 xl:text-base xl:font-medium text-sm font-normal leading-4 text-center rounded-full ${
                        mostWanted
                          ? "bg-green-now dark:bg-yellow-now text-neutral-900 dark:text-white dark:hover:bg-white-now hover:bg-dark-now hover:text-white dark:hover:text-neutral-900 shadow-md"
                          : "bg-dark-now text-white dark:bg-white-now dark:text-neutral-900 dark:hover:bg-green-now hover:bg-yellow-now hover:text-neutral-900 dark:hover:text-white"
                      }`}
                    >
                      {cta}
                    </Link>

                    {/* features */}
                    <ul className="mt-6 px-6 space-y-4 flex-1 border-t border-light-now dark:border-light-now">
                      <p className="mt-6 font-semibold text-dark-now dark:text-white-now">
                        What&apos;s featured...
                      </p>
                      {features.map((feature, index) => (
                        <li key={index} className="leading-6 flex">
                          <CheckIcon className="mt-2 w-3 h-3 text-green-now dark:text-yellow-now shrink-0" />
                          <span className="ml-3 text-dark-now dark:text-white-now">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </>
            );
          }
        )}
      </div>
    </div>
  );
}
