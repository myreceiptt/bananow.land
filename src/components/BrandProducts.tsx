import Image from "next/image";
import Link from "next/link";

import useSound from "use-sound";
import React from "react";

const activeBrands = [
  {
    name: "Na Now News",
    url: "/news/",
    description:
      "Here we share whatever we have done. It can be crazy nothing or ordinary something. There are a lot of them. Let's dig in!",
    icon: "/images/brandproducts/nanownews.svg",
  },
  {
    name: "Skool Now",
    url: "/skool/",
    description:
      "BANANOW's home for learning programs, playing communities, and real-world growth.",
    icon: "/images/brandproducts/skoolnow.svg",
  },
  {
    name: "Claps",
    url: "/claps/",
    description:
      "AI companion for parents and caregivers—here to listen, reflect, and help you grow with confidence, compassion, and a little more calm.",
    icon: "/images/brandproducts/claps.svg",
  },
];

export function BrandProducts() {
  const sound0Loc = "/sounds/tiuing.mp3";
  const [play0] = useSound(sound0Loc, { volume: 0.75 });
  const sound0Click = () => {
    play0();
  };

  const sound4Loc = "/sounds/ngung-ngung.mp3";
  const [play4, { stop }] = useSound(sound4Loc, { volume: 1.25 });
  const [isHovering, setIsHovering] = React.useState(false);

  return (
    <div className="bg-white dark:bg-neutral-900" id="brandproducts">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-4xl font-judul font-bold text-neutral-900 dark:text-white">
          Here are{" "}
          <span className="text-green-now dark:text-yellow-now font-extrabold">
            BANANOW
          </span>
          's Growing Brands
        </h2>

        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto text-dark-now dark:text-white-now">
          Our{" "}
          <span className="text-green-now dark:text-yellow-now font-bold">
            FAMILY
          </span>{" "}
          always maintain the fertility of each of the plantation crops on this{" "}
          <span className="text-yellow-now dark:text-green-now font-bold">
            LAND
          </span>
          . Make this space a healthy, fair, and fun place to grow. If you want
          to know more about what we do, which is updated regularly, click on
          our brands below.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        {activeBrands.map((brand) => (
          <div key={brand.name}>
            <div className="h-32 w-32 flex justify-center mx-auto hover:scale-110 transition">
              <Link
                onClick={sound0Click}
                href={brand.url}
                title={brand.name}
                target="_blank">
                <Image
                  onMouseEnter={() => {
                    setIsHovering(true);
                    play4();
                  }}
                  onMouseLeave={() => {
                    setIsHovering(false);
                    stop();
                  }}
                  src={brand.icon}
                  alt={brand.name}
                  width={130}
                  height={130}
                  quality={75}
                  sizes="100vw"
                  priority
                />
              </Link>
            </div>
            <h2 className="font-judul font-bold text-lg text-center text-neutral-900 dark:text-white">
              {brand.name}
            </h2>
            <p className="pt-2 text-base text-center text-dark-now dark:text-white-now">
              {brand.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
