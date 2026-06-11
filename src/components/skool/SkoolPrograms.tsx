import { CheckIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

import { skoolPrograms } from "../../data/skool";
import { CtaLink } from "./SkoolShared";

export function SkoolPrograms() {
  return (
    <div className="bg-white dark:bg-neutral-900" id="skool-programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 text-center">
        <h2 className="text-4xl font-judul font-bold text-neutral-900 dark:text-white">
          Our{" "}
          <span className="text-yellow-now dark:text-green-now font-extrabold">
            Programs
          </span>
        </h2>
        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto text-dark-now dark:text-white-now">
          Skate Skool Now is the first program direction. More Skool Now paths
          can open as partners, venues, and communities become ready.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid lg:grid-cols-3 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        {skoolPrograms.map((program, index) => (
          <div
            key={program.title}
            className="rounded-lg border border-light-now dark:border-light-now p-6 flex flex-col">
            <div className="h-80 flex items-center justify-center">
              <Image
                src={program.image}
                alt={program.imageAlt}
                width={program.imageWidth}
                height={program.imageHeight}
                className="max-h-full w-auto max-w-full object-contain"
                quality={75}
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
            </div>
            <p className="mt-6 inline-flex w-fit rounded-full bg-white-now dark:bg-dark-now px-4 py-1 text-sm font-semibold text-green-now dark:text-yellow-now">
              {program.status}
            </p>
            <h3 className="pt-4 text-2xl font-judul font-bold text-neutral-900 dark:text-white">
              {program.title}
            </h3>
            <p className="pt-4 text-base text-dark-now dark:text-white-now">
              {program.description}
            </p>
            <ul className="mt-6 space-y-3 flex-1">
              {program.highlights.map((highlight) => (
                <li key={highlight} className="leading-6 flex">
                  <CheckIcon className="mt-2 w-3 h-3 text-green-now dark:text-yellow-now shrink-0" />
                  <span className="ml-3 text-dark-now dark:text-white-now">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CtaLink
                href={program.href}
                label={program.cta}
                variant={index === 0 ? "accent" : "dark"}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
