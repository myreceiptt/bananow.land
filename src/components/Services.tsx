import Image from "next/image";

const services = [
  {
    title: "Dolorum molestiae",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit laudantium",
    image: "/images/services/1.svg",
    alt: "Service description",
  },
  {
    title: "Commodi mollitia",
    description:
      "Nemo quos doloribus quo omnis mollitia nostrum excepturi impedit veniam ",
    image: "/images/services/2.svg",
    alt: "Service description",
  },
  {
    title: "Neque numquam",
    description:
      "Accusantium eius omnis minus debitis est odio earum labore ad itaque mollitia",
    image: "/images/services/3.svg",
    alt: "Service description",
  },
  {
    title: "Vero animi",
    description:
      "Dolores nemo labore soluta incidunt cumque repellat quod ducimus explicabo",
    image: "/images/services/4.svg",
    alt: "Service description",
  },
  {
    title: "Repudiandae pariatur",
    description:
      "voluptatum ex molestiae quae alias quasi eum magnam maxime autem atque",
    image: "/images/services/5.svg",
    alt: "Service description",
  },
  {
    title: "Placeat voluptas",
    description:
      "vitae iure impedit magni consequuntur nihil consectetur laboriosam perspiciatis",
    image: "/images/services/6.svg",
    alt: "Service description",
  },
];
export function Services() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-4xl font-bold">What is Halley?</h2>

        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          Halley is consectetur Obcaecati veniam explicabo perspiciatis sapiente
          saepe sequi atque aut ullam aliquam.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        {services.map(({ title, description, image, alt }) => (
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
