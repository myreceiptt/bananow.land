import Link from "next/link";
import Layout from "../components/Layout";

import useSound from "use-sound";

const oldBrands = [
  {
    name: "90’s Vibes",
    url: "/vibes",
    description:
      "The space (mostly on X - Twitter and Discord) where we can sing, chat, share, shill, or laugh with the fun of 90's spirit. Speak up your voices, make a lot of noise, and don't be silent!",
  },
  {
    name: "Dermaga Web3",
    url: "/dermaga",
    description:
      "The offline event that shares and exchanges knowledge about the Web3 world. The bridge between Web2 and Web3 community.",
  },
  {
    name: "Class Now",
    url: "/class",
    description:
      "An intimate education approach for the community. The room to share about love, life, and technology. It can be on a Discord channel or in any physical room in the Universe of Reality.",
  },
  {
    name: "InAMotion",
    url: "/inamotion",
    description:
      "The creative agency that accommodates the creative needs of other brands/products/entities, and is a profitable employer for creative people in the BANANOW community.",
  },
  {
    name: "Agent Now",
    url: "/delegate",
    description:
      "The talent coordinator agency of BANANOW which is delegates the demand from other entities to farmers in BANANOW FAMILY.",
  },
  {
    name: "NOTA’s Dept.",
    url: "/professor",
    description:
      "The Web3 tech support department which makes the engine run smoothly in BANANOW. Doing tech strategy, Web3 philosophical research, blockchain exploration, and even soul analytics.",
  },
];

export default function OldBrands() {
  const sound2Loc = "/sounds/tinggg.mp3";
  const [play2] = useSound(sound2Loc, { volume: 0.75 });
  const sound2Click = () => {
    play2();
  };

  return (
    <Layout>
      <div
        className="bg-white dark:bg-neutral-900 w-full px-4 pt-32 pb-16"
        id="oldbrands"
      >
        <h2 className="text-4xl font-judul font-bold text-center text-neutral-900 dark:text-white">
          Here are BANANOW&apos;s Old Brands
        </h2>

        <div className="pt-6 pb-16 text-base max-w-4xl text-left m-auto text-dark-now dark:text-white-now">
          <p>
            Our{" "}
            <span className="text-green-now dark:text-yellow-now font-bold">
              FAMILY
            </span>{" "}
            is actually trying the best to always maintain the fertility of each
            of the plantation crops on this{" "}
            <span className="text-yellow-now dark:text-green-now font-bold">
              LAND
            </span>
            . Make this space a healthy, fair, and fun place to grow.
          </p>
          <p className="pt-6">
            But time goes by. What is planted grows. What is born also grows to
            maturity. What is young grows old. What is old eventually dies and
            fertilizes the soil, making everything planted can grow.
          </p>
          <p className="pt-6">
            So, if you want to know more about what we do in the early times,
            click on our old brands below.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-8">
          {oldBrands.map((brand) => (
            <div
              key={brand.name}
              className="border border-light-now dark:border-light-now rounded-lg p-6"
            >
              <h3 className="font-judul font-bold text-2xl text-neutral-900 dark:text-white">
                {brand.name}
              </h3>
              <p className="pt-4 text-base text-dark-now dark:text-white-now">
                {brand.description}
              </p>
              <Link
                onClick={sound2Click}
                href={brand.url}
                target="_blank"
                className="mt-6 inline-block bg-dark-now dark:bg-white-now text-white dark:text-neutral-900 text-base rounded-full px-8 p-3 font-medium dark:hover:bg-yellow-now hover:bg-green-now hover:text-neutral-900 dark:hover:text-white"
              >
                Visit {brand.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
