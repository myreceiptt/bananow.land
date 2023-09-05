import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/solid";

export function Features() {
  return (
    <div className="bg-white dark:bg-neutral-900" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-x-40 pt-16 pb-16">
        <h2 className="text-4xl font-judul font-bold text-center text-neutral-900 dark:text-white">Let's GO <span className="text-yellow-now dark:text-green-now font-extrabold">BANANAS</span></h2>
        <p className="pt-6 text-base max-w-2xl text-center m-auto text-dark-now dark:text-white-now">
          Here we can be whoever we want. We can do crazy things with dignity. There are no laws, only consequences. Let's thrive together!
        </p>

        <div
          className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-28 items-center"
        >
          <div
            className="pt-8 md:pt-16 order-1" // on the left
            // className="pt-8 md:pt-16 order-1 md:order-2" // on the right
          >
            <h1 className="text-2xl font-judul font-bold text-neutral-900 dark:text-white"><span className="text-green-now dark:text-yellow-now font-extrabold">PLAYING</span> Always Fun</h1>
            <p className="pt-6 pb-6 text-base text-dark-now dark:text-white-now">
              Diane Ackerman says, "<span className="text-green-now dark:text-yellow-now font-bold">PLAY</span> is our brain's favorite way of <span className="text-yellow-now dark:text-green-now font-bold">LEARNING</span>." So, to us <span className="text-green-now dark:text-yellow-now font-bold">PLAY</span> it's not just a word that we try to say, but it is our way of life! We're here to share the secret sauce to a happier, less stressful journey.<br />
              <br />
              Activate our inner <span className="text-yellow-now dark:text-green-now font-bold">PLAYING</span> mode. Life's a rollercoaster, and whether it takes you soaring high or dipping low, we're here to remind you to keep the game going. It's like having a perpetual fun pass for this wild ride called life!
            </p>
            <ul className="font-medium space-y-1 flex-1">
              <li className="leading-6 flex">
                <CheckIcon className="mt-2 w-3 h-3 text-green-now dark:text-yellow-now shrink-0" />
                <span className="ml-3 text-dark-now dark:text-white-now">
                  So, let's turn those frowns upside down, sprinkle in some laughter, and make every moment a <span className="text-green-now dark:text-yellow-now font-bold">PLAYFUL</span> adventure!
                </span>
              </li>
            </ul>
          </div>
          <div
            className="order-1 pt-8 md:pt-16 mr-0 2xl:-mr-40" // on the right
            // className="order-1 pt-8 md:pt-16 ml-0 2xl:-ml-40" // on the left
          >
            <div className="flex items-center">
              <Image
                src="/images/features/playing.svg"
                alt="PLAYING Always Fun"
                width={1920}
                height={1080}
                quality={75}
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-28 items-center"
        >
          <div
            // className="pt-8 md:pt-16 order-1" // on the left
            className="pt-8 md:pt-16 order-1 md:order-2" // on the right
          >
            <h1 className="text-2xl font-judul font-bold text-neutral-900 dark:text-white">Never Stop <span className="text-yellow-now dark:text-green-now font-extrabold">LEARNING</span></h1>
            <p className="pt-6 pb-6 text-base text-dark-now dark:text-white-now">
              Curiosity is our compass! And in every journey comes a fresh chapter we wrote on the book of discovery. Yes! We are writing a story of the ever-evolving world of Web3.<br />
              <br />
              We've made our mission to keep peeling away the layers of this amazing universe. With each step, we explored our new adventures, shared our newfound knowledge, and found inspiration in the endless possibilities.
            </p>
            <ul className="font-medium space-y-1 flex-1">
              <li className="leading-6 flex">
                <CheckIcon className="mt-2 w-3 h-3 text-green-now dark:text-yellow-now shrink-0" />
                <span className="ml-3 text-dark-now dark:text-white-now">
                  So, let's embrace the thrill of <span className="text-green-now dark:text-yellow-now font-bold">LEARNING</span>, spark our curiosity, and embark on this boundless journey together!
                </span>
              </li>
            </ul>
          </div>
          <div
            // className="order-1 pt-8 md:pt-16 mr-0 2xl:-mr-40" // on the right
            className="order-1 pt-8 md:pt-16 ml-0 2xl:-ml-40" // on the left
          >
            <div className="flex items-center">
              <Image
                src="/images/features/learning.svg"
                alt="PLAYING Always Fun"
                width={1920}
                height={1080}
                quality={75}
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-28 items-center"
        >
          <div
            className="pt-8 md:pt-16 order-1" // on the left
            // className="pt-8 md:pt-16 order-1 md:order-2" // on the right
          >
            <h1 className="text-2xl font-judul font-bold text-neutral-900 dark:text-white"><span className="text-green-now dark:text-yellow-now font-extrabold">WORKING</span> with All You Got</h1>
            <p className="pt-6 pb-6 text-base text-dark-now dark:text-white-now">
              Meet the <span className="text-green-now dark:text-yellow-now font-bold">BANANOW</span> <span className="text-yellow-now dark:text-green-now font-bold">FAMILY</span>, where "Very Hard <span className="text-green-now dark:text-yellow-now font-bold">WORKING</span>" isn't just a trait, it's our superpower! We're not your average crew - we <span className="text-yellow-now dark:text-green-now font-bold">PLAY</span> hard, but we <span className="text-green-now dark:text-yellow-now font-bold">WORK</span> even harder, and yes, we've got the "Smart <span className="text-yellow-now dark:text-green-now font-bold">WORKING</span>" badge too.<br />
              <br />
              Our love for <span className="text-green-now dark:text-yellow-now font-bold">PLAY</span> fuels our passion for <span className="text-yellow-now dark:text-green-now font-bold">WORK</span>, and it's what keeps us humble. We're big on appreciating the sweat and toil that goes into making things happen, and we're here to spread the love.
            </p>
            <ul className="font-medium space-y-1 flex-1">
              <li className="leading-6 flex">
                <CheckIcon className="mt-2 w-3 h-3 text-green-now dark:text-yellow-now shrink-0" />
                <span className="ml-3 text-dark-now dark:text-white-now">
                  So, join our "<span className="text-green-now dark:text-yellow-now font-bold">WORK</span> Hard, <span className="text-yellow-now dark:text-green-now font-bold">PLAY</span> Hard" party, and let's turn every challenge into a golden opportunity together!
                </span>
              </li>
            </ul>
          </div>
          <div
            className="order-1 pt-8 md:pt-16 mr-0 2xl:-mr-40" // on the right
            // className="order-1 pt-8 md:pt-16 ml-0 2xl:-ml-40" // on the left
          >
            <div className="flex items-center">
              <Image
                src="/images/features/working.svg"
                alt="PLAYING Always Fun"
                width={1920}
                height={1080}
                quality={75}
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
