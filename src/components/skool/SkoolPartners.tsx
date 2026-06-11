import { MapPinIcon } from "@heroicons/react/24/solid";

import { skoolPartners } from "../../data/skool";
import { CtaLink } from "./SkoolShared";

export function SkoolPartners() {
  return (
    <div
      className="bg-white dark:bg-neutral-900 w-full px-4 pt-32 pb-16"
      id="skool-partners">
      <h2 className="text-4xl font-judul font-bold text-center text-neutral-900 dark:text-white">
        Partners of{" "}
        <span className="text-green-now dark:text-yellow-now font-extrabold">
          Skool
        </span>{" "}
        <span className="text-yellow-now dark:text-green-now font-extrabold">
          Now
        </span>
      </h2>

      <p className="pt-6 pb-8 text-base max-w-2xl text-center m-auto text-dark-now dark:text-white-now">
        {skoolPartners.description}
      </p>

      <div className="mx-auto w-full max-w-4xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {skoolPartners.categories.map((category) => (
            <div
              key={category}
              className="rounded-lg border border-light-now dark:border-light-now px-4 py-6 text-center">
              <MapPinIcon className="mx-auto h-6 w-6 text-green-now dark:text-yellow-now" />
              <p className="pt-4 text-base font-judul font-bold text-neutral-900 dark:text-white">
                {category}
              </p>
            </div>
          ))}
        </div>
        <div className="pt-8 text-center">
          <CtaLink
            href={skoolPartners.cta.href}
            label={skoolPartners.cta.label}
            variant="accent"
          />
        </div>
      </div>
    </div>
  );
}
