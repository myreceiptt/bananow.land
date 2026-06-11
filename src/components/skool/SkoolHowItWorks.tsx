import Image from "next/image";

import { skoolHowItWorks } from "../../data/skool";

export function SkoolHowItWorks() {
  return (
    <div className="bg-white dark:bg-neutral-900" id="skool-how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-x-40 pt-32 pb-16">
        <h2 className="text-4xl font-judul font-bold text-center text-neutral-900 dark:text-white">
          How{" "}
          <span className="text-yellow-now dark:text-green-now font-extrabold">
            Skool
          </span>{" "}
          <span className="text-green-now dark:text-yellow-now font-extrabold">
            Now
          </span>{" "}
          Works
        </h2>
        <p className="pt-6 text-base max-w-2xl text-center m-auto text-dark-now dark:text-white-now">
          A simple path for participants, partners, sponsors, and investors to
          learn, build, support, share progress, and grow impact together.
        </p>

        <div className="pt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skoolHowItWorks.map((step, index) => (
            <div key={step.title} className="h-full px-4">
              <div className="h-40 flex items-center justify-center mx-auto">
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  width={step.imageWidth}
                  height={step.imageHeight}
                  className="max-h-full w-auto max-w-full object-contain"
                  quality={75}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <h3 className="pt-6 text-lg font-judul font-bold text-center text-neutral-900 dark:text-white">
                (
                <span className="text-green-now dark:text-yellow-now">
                  {index + 1}
                </span>
                ) {step.title}
              </h3>
              <p className="pt-4 text-base text-center text-dark-now dark:text-white-now">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
