import Image from "next/image";
import Link from "next/link";

import useSound from "use-sound";
import React from "react";

const brandProducts = [
  {
    jump: "/vibes/",
    title: "90's Vibes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit laudantium.",
    image: "/images/brandproducts/90svibes.svg",
    alt: "Service description",
  },
  {
    jump: "/dermaga/",
    title: "Dermaga NFT",
    description:
      "Nemo quos doloribus quo omnis mollitia nostrum excepturi impedit veniam.",
    image: "/images/brandproducts/dermaga.svg",
    alt: "Service description",
  },
  {
    jump: "/class/",
    title: "BANANOW Class",
    description:
      "Accusantium eius omnis minus debitis est odio earum labore ad itaque mollitia.",
    image: "/images/brandproducts/class.svg",
    alt: "Service description",
  },
  {
    jump: "/nftindonesia/",
    title: "NFT Indonesia",
    description:
      "Dolores nemo labore soluta incidunt cumque repellat quod ducimus explicabo.",
    image: "/images/brandproducts/nftindonesia.svg",
    alt: "Service description",
  },
  {
    jump: "/delegate/",
    title: "Farmers Delegate",
    description:
      "Voluptatum ex molestiae quae alias quasi eum magnam maxime autem atque.",
    image: "/images/brandproducts/delegate.svg",
    alt: "Service description",
  },
  {
    jump: "/inamotion/",
    title: "Ina Motion",
    description:
      "Vitae iure impedit magni consequuntur nihil consectetur laboriosam perspiciatis.",
    image: "/images/brandproducts/inamotion.svg",
    alt: "Service description",
  },
];

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
        <h2 className="text-4xl font-bold text-neutral-900 dark:text-white">What Brands Are in <span className="text-green-now dark:text-yellow-now font-extrabold">BANANOW</span>?</h2>

        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto text-dark-now dark:text-white-now">
          Its members always maintain the fertility of each of the plantation crops on this land. Make this space a healthy, fair, and fun place to grow.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        {brandProducts.map(({ jump, title, description, image, alt }) => (
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
