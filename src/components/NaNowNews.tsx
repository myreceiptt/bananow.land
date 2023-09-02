import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/solid";

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

export function NaNowNews() {
  return (
    <div className="bg-white dark:bg-neutral-900" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-x-40 pt-16 pb-16">
        <h2 className="text-4xl font-bold text-center text-neutral-900 dark:text-white">The Latest News from <span className="text-yellow-now dark:text-green-now font-extrabold">BANANOW</span></h2>
        <p className="pt-6 text-base max-w-2xl text-center m-auto text-dark-now dark:text-white-now">
          Here we share whatever we have done. It can be crazy nothing or ordinary something. There are a lot of them. Let's dig in!
        </p>

        {contents.map((content) => (
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
        ))}
      </div>
    </div>
  );
}
