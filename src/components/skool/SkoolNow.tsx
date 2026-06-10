import { Disclosure } from "@headlessui/react";
import {
  AcademicCapIcon,
  ArrowRightIcon,
  CheckIcon,
  ChevronDownIcon,
  MapPinIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import useSound from "use-sound";

import {
  skoolFaq,
  skoolHero,
  skoolHowItWorks,
  skoolPartners,
  skoolPaths,
  skoolPrograms,
} from "../../data/skool";

function useClickSound() {
  const [play] = useSound("/sounds/tinggg.mp3", { volume: 0.75 });
  return () => {
    play();
  };
}

function Emphasis({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-green-now dark:text-yellow-now font-extrabold">
      {children}
    </span>
  );
}

function CtaLink({
  href,
  label,
  variant = "dark",
}: {
  href: string;
  label: string;
  variant?: "dark" | "accent";
}) {
  const soundClick = useClickSound();

  return (
    <Link
      onClick={soundClick}
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 xl:text-base xl:font-medium text-sm font-normal transition-colors ${
        variant === "accent"
          ? "bg-green-now dark:bg-yellow-now text-neutral-900 dark:text-white hover:bg-yellow-now dark:hover:bg-green-now"
          : "bg-dark-now dark:bg-white-now text-white dark:text-neutral-900 hover:bg-green-now hover:text-neutral-900 dark:hover:bg-yellow-now dark:hover:text-white"
      }`}>
      {label}
      <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}

export function SkoolHero() {
  return (
    <div className="bg-white dark:bg-neutral-900" id="skool-hero">
      <div className="max-w-7xl mx-auto pt-32 pb-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-28">
        <div className="pt-6 sm:pt-8 justify-start sm:text-start">
          <p className="font-judul font-bold text-lg text-dark-now dark:text-white-now">
            {skoolHero.eyebrow}
          </p>
          <h1 className="mt-4 text-5xl font-bold text-neutral-900 dark:text-white font-judul">
            <Emphasis>SKOOL</Emphasis>{" "}
            <span className="text-yellow-now dark:text-green-now font-extrabold">
              NOW
            </span>
          </h1>
          <p className="pt-6 text-base w-auto sm:w-10/12 md:w-10/12 text-dark-now dark:text-white-now">
            <span className="text-green-now dark:text-yellow-now font-bold">
              BANANOW
            </span>
            &apos;s home for learning programs, sports communities, and
            real-world growth.
            <br />
            <br />
            <span className="text-yellow-now dark:text-green-now font-bold">
              Learn.
            </span>{" "}
            <span className="text-green-now dark:text-yellow-now font-bold">
              Move.
            </span>{" "}
            <span className="text-yellow-now dark:text-green-now font-bold">
              Grow.
            </span>{" "}
            Together.
          </p>
          <div className="flex flex-wrap pt-10 gap-2 min-w-87.5 justify-start">
            <CtaLink href={skoolHero.primaryCta.href} label={skoolHero.primaryCta.label} />
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

export function SkoolPaths() {
  return (
    <div className="bg-white dark:bg-neutral-900" id="skool-paths">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-x-40 pt-32 pb-16">
        <h2 className="text-4xl font-judul font-bold text-center text-neutral-900 dark:text-white">
          Three Paths to Grow With{" "}
          <span className="text-yellow-now dark:text-green-now font-extrabold">
            Skool Now
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

export function SkoolPrograms() {
  return (
    <div className="bg-white dark:bg-neutral-900" id="skool-programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 text-center">
        <h2 className="text-4xl font-judul font-bold text-neutral-900 dark:text-white">
          Our{" "}
          <span className="text-green-now dark:text-yellow-now font-extrabold">
            Programs
          </span>
        </h2>
        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto text-dark-now dark:text-white-now">
          Skate Skool Now is the first program direction. More Skool Now paths
          can open as partners, venues, and communities become ready.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        {skoolPrograms.map((program, index) => (
          <div
            key={program.title}
            className="rounded-lg border border-light-now dark:border-light-now p-6 flex flex-col">
            <div className="h-44 flex items-center justify-center">
              <Image
                src={program.image}
                alt={program.imageAlt}
                width={360}
                height={220}
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

export function SkoolHowItWorks() {
  return (
    <div className="bg-white dark:bg-neutral-900" id="skool-how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-x-40 pt-32 pb-16">
        <h2 className="text-4xl font-judul font-bold text-center text-neutral-900 dark:text-white">
          How{" "}
          <span className="text-yellow-now dark:text-green-now font-extrabold">
            Skool Now
          </span>{" "}
          Works
        </h2>
        <p className="pt-6 text-base max-w-2xl text-center m-auto text-dark-now dark:text-white-now">
          A simple journey for learning new skills, joining sessions, growing
          with community, sharing progress, and building confidence.
        </p>

        <div className="pt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {skoolHowItWorks.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="rounded-lg border border-light-now dark:border-light-now p-6 h-full">
                <p className="font-judul font-bold text-4xl text-green-now dark:text-yellow-now">
                  {index + 1}
                </p>
                <h3 className="pt-6 text-lg font-judul font-bold text-neutral-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="pt-4 text-base text-dark-now dark:text-white-now">
                  {step.description}
                </p>
              </div>
              {index < skoolHowItWorks.length - 1 && (
                <ArrowRightIcon className="hidden lg:block absolute -right-4 top-1/2 h-5 w-5 text-light-now" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SkoolPartners() {
  return (
    <div
      className="bg-white dark:bg-neutral-900 w-full px-4 pt-32 pb-16"
      id="skool-partners">
      <h2 className="text-4xl font-judul font-bold text-center text-neutral-900 dark:text-white">
        Partners of{" "}
        <span className="text-green-now dark:text-yellow-now font-extrabold">
          Skool Now
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

export function SkoolFaq() {
  const [play] = useSound("/sounds/jept.mp3", { volume: 0.75 });
  const soundClick = () => {
    play();
  };

  return (
    <div
      className="bg-white dark:bg-neutral-900 w-full px-4 pt-32 pb-16"
      id="skool-faq">
      <h2 className="text-4xl font-judul font-bold text-center text-neutral-900 dark:text-white">
        F.A.Q. About{" "}
        <span className="text-yellow-now dark:text-green-now font-extrabold">
          Skool Now
        </span>
      </h2>

      <p className="pt-6 pb-16 text-base max-w-2xl text-center m-auto text-dark-now dark:text-white-now">
        Basic information for participants, parents, guardians, coaches,
        partners, sponsors, and investors who want to understand Skool Now.
      </p>
      <div className="mx-auto w-full max-w-2xl rounded-2xl bg-transparent dark:bg-transparent">
        {skoolFaq.map(({ question, response }) => (
          <div key={question}>
            <Disclosure>
              {({ open }) => (
                <div className="mt-4">
                  <Disclosure.Button
                    onClick={soundClick}
                    className={`${
                      open
                        ? "bg-white-now dark:bg-dark-now hover:bg-white-now rounded-b-none"
                        : ""
                    } flex w-full justify-between rounded-lg bg-white-now dark:bg-dark-now dark:hover:bg-dark-now px-4 py-4 text-left text-base font-medium cursor-pointer`}>
                    <h3 className="font-semibold text-neutral-900 dark:text-white">
                      {question}
                    </h3>
                    <ChevronDownIcon
                      className={`${
                        open
                          ? "rotate-180 transition-transform text-green-now dark:text-yellow-now"
                          : ""
                      } h-5 w-5 shrink-0 text-green-now dark:text-yellow-now`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel
                    className={`${
                      open
                        ? "px-4 pt-4 pb-2 text-base text-dark-now dark:text-white-now"
                        : ""
                    } bg-white-now dark:bg-dark-now rounded-b-lg`}>
                    <p>{response}</p>
                    <br />
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SkoolNow() {
  return (
    <>
      <SkoolHero />
      <SkoolPaths />
      <SkoolPrograms />
      <SkoolHowItWorks />
      <SkoolPartners />
      <SkoolFaq />
    </>
  );
}
