import Image from "next/image";
import Link from "next/link";

import useSound from "use-sound";
import React from "react";
import { activeBrands } from "../../data/brands";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-x-40 pt-32 pb-16">
        <h2 className="text-4xl font-judul font-bold text-center text-neutral-900 dark:text-white">
          Here are{" "}
          <span className="text-green-now dark:text-yellow-now font-extrabold">
            BANANOW
          </span>
          's Growing Crops
        </h2>

        <p className="pt-6 text-base max-w-2xl text-center m-auto text-dark-now dark:text-white-now">
          Our{" "}
          <span className="text-green-now dark:text-yellow-now font-bold">
            FAMILY
          </span>{" "}
          always maintain the fertility of each of the plantation crops on this{" "}
          <span className="text-yellow-now dark:text-green-now font-bold">
            Land
          </span>
          . Make this space a healthy, fair, and fun place to grow. If you want
          to know more about what we do, which is updated regularly, click on
          our crops below.
        </p>

        <div className="pt-16 grid lg:grid-cols-3 gap-6">
          {activeBrands.map((brand) => (
            <div key={brand.name} className="h-full px-4">
              <div className="h-40 flex items-center justify-center mx-auto hover:scale-110 transition">
                <Link onClick={sound0Click} href={brand.url} title={brand.name}>
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
                    width={178}
                    height={260}
                    quality={75}
                    sizes="100vw"
                    priority
                  />
                </Link>
              </div>
              <h3 className="pt-6 text-lg font-judul font-bold text-center text-neutral-900 dark:text-white">
                {brand.name}
              </h3>
              <p className="pt-4 text-base text-center text-dark-now dark:text-white-now">
                {brand.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
