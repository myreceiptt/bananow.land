import Image from "next/image";

const brandProducts = [
  {
    title: "90's Vibes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit laudantium.",
    image: "/images/brandproducts/1.svg",
    alt: "Service description",
  },
  {
    title: "Dermaga NFT",
    description:
      "Nemo quos doloribus quo omnis mollitia nostrum excepturi impedit veniam.",
    image: "/images/brandproducts/2.svg",
    alt: "Service description",
  },
  {
    title: "Bananow Class",
    description:
      "Accusantium eius omnis minus debitis est odio earum labore ad itaque mollitia.",
    image: "/images/brandproducts/3.svg",
    alt: "Service description",
  },
  {
    title: "Na Na Now (e.g.)",
    description:
      "Dolores nemo labore soluta incidunt cumque repellat quod ducimus explicabo.",
    image: "/images/brandproducts/4.svg",
    alt: "Service description",
  },
  {
    title: "Now Movies (e.g.)",
    description:
      "Voluptatum ex molestiae quae alias quasi eum magnam maxime autem atque.",
    image: "/images/brandproducts/5.svg",
    alt: "Service description",
  },
  {
    title: "Farmers Delegate (e.g.)",
    description:
      "Vitae iure impedit magni consequuntur nihil consectetur laboriosam perspiciatis.",
    image: "/images/brandproducts/6.svg",
    alt: "Service description",
  },
];
export function BrandProducts() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="brandproducts">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-4xl font-bold">What is <span className="text-rose-500">BANANOW</span>?</h2>

        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          <span className="text-rose-500">BANANOW</span> is a fun, non-intimidating, supportive family, where its members can always play, learn, and work according to their resulting revenue and formed value in Web3 ecosystem.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        {brandProducts.map(({ title, description, image, alt }) => (
          <div key={title}>
            <div className="h-32 w-32 flex justify-center mx-auto">
              <Image
                src={image}
                alt={alt}
                width={130}
                height={130}
                quality={75}
                sizes="100vw"
                priority
              />
            </div>
            <h2 className="font-bold text-lg text-center">{title}</h2>
            <p className="pt-2 text-base text-center dark:text-neutral-400">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
