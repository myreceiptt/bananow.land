import Link from "next/link";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

const products = [
  {
    title: "Sprouts",
    supplies: "∞",
    symbol: "👪",
    universe: "Reality",
    description: "The Community who are still thinking about whether these bananas will be eaten now or taken home? They can interact like any other, but still in different boats with the same goal. They can level up by going more bananas.",
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
    title: "Sprouts",
    supplies: "∞",
    symbol: "👪",
    universe: "0101",
    description: "The Community who are still thinking about whether these bananas will be eaten now or taken home? They can interact like any other, but still in different boats with the same goal. They can level up by going more bananas.",
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
    title: "Lovers",
    supplies: "∞",
    symbol: "👪",
    universe: "Reality",
    description: "The Friends that loves bananas in their ice cream. They are active, crazy, and always spread positive vibes, just like bananas. They also travel companions in navigating the world of Web3 to thrive together.",
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
    title: "Lovers",
    supplies: "∞",
    symbol: "👪",
    universe: "0101",
    description: "The Friends that loves bananas in their ice cream. They are active, crazy, and always spread positive vibes, just like bananas. They also travel companions in navigating the world of Web3 to thrive together.",
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
    title: "Heads",
    supplies: "0000",
    symbol: "👪",
    universe: "Reality",
    description: "The Family, which is all holders of BANANOW NFTs, gets full support and becomes a priority in obtaining benefits from the potential of this land that they backing up, to develop their owned BANANOW as their brand.",
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
    title: "Heads",
    supplies: 2345,
    symbol: "👪",
    universe: "0101",
    description: "The Family, which is all holders of BANANOW NFTs, gets full support and becomes a priority in obtaining benefits from the potential of this land that they backing up, to develop their owned BANANOW as their brand.",
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
    title: "Farmers",
    supplies: 5,
    symbol: "👪",
    universe: "Reality",
    description: "The Holders of BANANOW NFTs who maintain the fertility of each of the plantation crops on this land. Make this space as always a healthy, fair, and fun place. You can call them, the administrator of the plantation.",
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
    title: "Farmers",
    supplies: 6,
    symbol: "👪",
    universe: "0101",
    description: "The Holders of BANANOW NFTs who maintain the fertility of each of the plantation crops on this land. Make this space as always a healthy, fair, and fun place. You can call them, the administrator of the plantation.",
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
  const [billingInterval, setBillingInterval] =
    useState<BillingInterval>("Reality");
  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="theheads">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <h2 className="text-4xl font-bold text-center">Community of <span className="text-rose-500">BANANOW</span>.</h2>

        <p className="pt-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
        <span className="text-rose-500">BANANOW</span> is backed by the perfect community for its Web3 activities, that is the friends and family of <span className="text-rose-500">BANANOW</span> in the 0101 Universe (Digital World of the Internet).
        </p>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 sm:flex sm:flex-col sm:align-center">
        <div className="relative self-center text-base font-semibold mt-6 bg-neutral-200  dark:bg-neutral-800 rounded-lg flex sm:mt-8">
          <button
            onClick={() => setBillingInterval("Reality")}
            type="button"
            className={`${
              billingInterval === "Reality"
                ? "relative w-1/2 bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
                : "ml-0.5 relative w-1/2 text-neutral-900 dark:text-neutral-400"
            } rounded-md m-1 py-2 whitespace-nowrap sm:w-auto sm:px-8`}
          >
            Universe of Reality
          </button>
          <button
            onClick={() => setBillingInterval("0101")}
            type="button"
            className={`${
              billingInterval === "0101"
                ? "relative w-1/2 bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
                : "ml-0.5 relative w-1/2 text-neutral-900 dark:text-neutral-400"
            } rounded-md m-1 py-2 whitespace-nowrap sm:w-auto sm:px-8`}
          >
            0101 Universe
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
        {products.map(
          ({
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
                    key={title}
                    className={`rounded-lg py-8 relative flex flex-col ${
                      mostWanted
                        ? "border-rose-300 border-2 border-solid dark:border-rose-500"
                        : "border-neutral-300 border dark:border-neutral-600"
                    }`}
                  >
                    <h3 className="px-6 text-lg font-semibold leading-5">
                      {title}
                    </h3>
                    {mostWanted && (
                      <p className="mx-6 absolute top-0 px-4 py-1 -translate-y-1/2 bg-rose-100 text-rose-500  rounded-full text-sm font-semibold tracking-wide shadow-md">
                        Most Wanted
                      </p>
                    )}

                    <p className="px-6 mt-4 leading-6 dark:text-neutral-400">
                      {description}
                    </p>
                    <div className="mt-2 p-6 -mx-6">
                      <p className="px-6 font-medium flex place-items-end">
                        <span className="text-4xl font-bold">{symbol}</span>&nbsp;&nbsp;
                        <span className="text-4xl font-bold">{supplies}</span>
                        <span className="ml-1.5">in&nbsp;{universe}</span>
                      </p>
                    </div>

                    {/* Call to action */}
                    <Link
                      href={href}
                      target="_blank"
                      className={`mt-4 mx-6 block px-6 py-3 font-medium leading-4 text-center rounded-full dark:hover:bg-rose-500 hover:bg-rose-500 hover:text-white dark:hover:text-white ${
                        mostWanted
                          ? "bg-rose-500 text-white shadow-md dark:hover:bg-white hover:bg-black hover:text-white dark:hover:text-black"
                          : "bg-black text-white dark:bg-white dark:text-black"
                      }`}
                    >
                      {cta}
                    </Link>

                    {/* features */}
                    <ul className="mt-6 px-6 space-y-4 flex-1 border-t border-neutral-300 dark:border-neutral-500">
                      <p className="mt-6 font-semibold dark:text-neutral-300">
                        What&apos;s featured...
                      </p>
                      {features.map((features) => (
                        <li key={features} className="leading-6 flex">
                          <CheckIcon className="mt-2 w-3 h-3 text-rose-500 shrink-0" />
                          <span className="ml-3 dark:text-neutral-400">
                            {features}
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
