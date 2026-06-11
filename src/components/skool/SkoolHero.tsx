import Image from "next/image";

import { skoolHero } from "../../data/skool";
import { CtaLink, Emphasis } from "./SkoolShared";

export function SkoolHero() {
  return (
    <div className="bg-white dark:bg-neutral-900" id="skool-hero">
      <div className="max-w-7xl mx-auto pt-32 pb-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2">
        <div className="pt-6 sm:pt-8 justify-start sm:text-start">
          <h1 className="text-5xl font-bold text-neutral-900 dark:text-white font-judul">
            {skoolHero.titleLines[0]}
            <br />
            <Emphasis>{skoolHero.titleLines[1]}</Emphasis>
            {skoolHero.titleLines[2]}
          </h1>
          <p className="pt-6 text-base leading-7 w-auto sm:w-10/12 md:w-10/12 text-dark-now dark:text-white-now">
            {skoolHero.descriptionLead1}{" "}
            <span className="text-yellow-now dark:text-green-now font-bold">
              LEARNING
            </span>
            {skoolHero.descriptionLead2.replace("LEARNING", "")}
            <br />
            <br />
            {skoolHero.descriptionBody1}{" "}
            <span className="text-green-now dark:text-yellow-now font-bold">
              LEARN
            </span>{" "}
            {skoolHero.descriptionBody2.replace("LEARN", "")}
            <br />
            <br />
            {skoolHero.descriptionClose.intro}{" "}
            <span className="text-yellow-now dark:text-green-now font-bold">
              {skoolHero.descriptionClose.program}
            </span>{" "}
            {skoolHero.descriptionClose.suffix}{" "}
            <span className="text-green-now dark:text-yellow-now font-bold">
              {skoolHero.descriptionClose.action}
            </span>
            , {skoolHero.descriptionClose.ending}{" "}
            <span className="text-yellow-now dark:text-green-now font-bold">
              {skoolHero.descriptionClose.brand}
            </span>
            .
          </p>
          <div className="flex flex-wrap pt-10 gap-2 min-w-87.5 justify-start">
            <CtaLink
              href={skoolHero.primaryCta.href}
              label={skoolHero.primaryCta.label}
            />
            <CtaLink
              href={skoolHero.secondaryCta.href}
              label={skoolHero.secondaryCta.label}
            />
          </div>
        </div>

        <div className="flex items-center mt-12">
          <Image
            src={skoolHero.image}
            alt={skoolHero.imageAlt}
            width={1025}
            height={662}
            quality={75}
            sizes="100vw"
            priority
          />
        </div>
      </div>
    </div>
  );
}
