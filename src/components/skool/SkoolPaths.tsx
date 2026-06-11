import {
  AcademicCapIcon,
  CheckIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

import { skoolPaths } from "../../data/skool";
import { CtaLink } from "./SkoolShared";

export function SkoolPaths() {
  return (
    <div className="bg-white dark:bg-neutral-900" id="skool-paths">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-x-40 pt-32 pb-16">
        <h2 className="text-4xl font-judul font-bold text-center text-neutral-900 dark:text-white">
          Three Layers to Grow With{" "}
          <span className="text-yellow-now dark:text-green-now font-extrabold">
            Skool
          </span>{" "}
          <span className="text-green-now dark:text-yellow-now font-extrabold">
            Now
          </span>
        </h2>
        <p className="pt-6 text-base max-w-2xl text-center m-auto text-dark-now dark:text-white-now">
          Skool Now connects participants, partners, sponsors, and investors
          through programs that can be reviewed, agreed, and delivered
          responsibly.
        </p>

        <div className="pt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
          {skoolPaths.map((path, index) => (
            <div
              key={path.title}
              className={`rounded-lg py-8 relative flex flex-col ${
                index === 1
                  ? "border-green-now border-2 border-solid dark:border-yellow-now"
                  : "border-light-now border dark:border-light-now"
              }`}>
              {index === 1 && (
                <p className="mx-6 absolute top-0 px-4 py-1 -translate-y-1/2 bg-dark-now dark:bg-white-now text-white dark:text-neutral-900 rounded-full text-sm font-semibold tracking-wide shadow-md">
                  Partner Path
                </p>
              )}
              <div className="px-6">
                <div className="h-12 w-12 rounded-full bg-white-now dark:bg-dark-now flex items-center justify-center">
                  {index === 0 && (
                    <AcademicCapIcon className="h-6 w-6 text-green-now dark:text-yellow-now" />
                  )}
                  {index === 1 && (
                    <UserGroupIcon className="h-6 w-6 text-green-now dark:text-yellow-now" />
                  )}
                  {index === 2 && (
                    <SparklesIcon className="h-6 w-6 text-green-now dark:text-yellow-now" />
                  )}
                </div>
                <h3 className="mt-6 text-lg font-judul font-semibold leading-5 text-neutral-900 dark:text-white">
                  {path.title}
                </h3>
                <p className="mt-4 leading-6 text-dark-now dark:text-white-now">
                  {path.summary}
                </p>
              </div>
              <ul className="mt-6 px-6 space-y-4 flex-1 border-t border-light-now dark:border-light-now">
                {path.details.map((detail) => (
                  <li key={detail} className="leading-6 flex pt-4 first:pt-6">
                    <CheckIcon className="mt-2 w-3 h-3 text-green-now dark:text-yellow-now shrink-0" />
                    <span className="ml-3 text-dark-now dark:text-white-now">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 px-6">
                <CtaLink
                  href={path.href}
                  label={path.cta}
                  variant={index === 1 ? "accent" : "dark"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
