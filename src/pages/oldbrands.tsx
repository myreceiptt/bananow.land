import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

import useSound from "use-sound";
import React from "react";
import { oldBrands } from "../data/brands";

export default function OldBrands() {
  const sound2Loc = "/sounds/tinggg.mp3";
  const [play2] = useSound(sound2Loc, { volume: 0.75 });
  const sound2Click = () => {
    play2();
  };

  const sound4Loc = "/sounds/ngung-ngung.mp3";
  const [play4, { stop }] = useSound(sound4Loc, { volume: 1.25 });
  const [isHovering, setIsHovering] = React.useState(false);

  return (
    <Layout>
      <div
        className="bg-white dark:bg-neutral-900 w-full px-4 pt-32 pb-16"
        id="oldbrands">
        <h2 className="text-4xl font-judul font-bold text-center text-neutral-900 dark:text-white">
          Here are{" "}
          <span className="text-green-now dark:text-yellow-now font-extrabold">
            BANANOW
          </span>
          's Earlier Crops
        </h2>

        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto text-dark-now dark:text-white-now">
          Our{" "}
          <span className="text-green-now dark:text-yellow-now font-bold">
            FAMILY
          </span>{" "}
          is actually trying the best to always maintain the fertility of each
          of the plantation crops on this{" "}
          <span className="text-yellow-now dark:text-green-now font-bold">
            Land
          </span>
          . Make this space a healthy, fair, and fun place to grow.
        </p>
        <p className="pb-6 text-base max-w-2xl text-center m-auto text-dark-now dark:text-white-now">
          But time goes by. What is planted grows. What is born also grows to
          maturity. What is young grows old. What is old eventually fertilizes
          the soil, making everything planted can grow. If you want to know more
          about what we did in the early times, click on our Earlier Crops below.
        </p>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
          {oldBrands.map((brand) => (
            <div key={brand.name}>
              <div className="h-32 w-32 flex justify-center mx-auto hover:scale-110 transition">
                <Link
                  onClick={sound2Click}
                  href={brand.url}
                  title={brand.title}
                  target="_blank"
                  rel="noopener noreferrer">
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
                    alt={brand.title ?? brand.name}
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
    </Layout>
  );
}
