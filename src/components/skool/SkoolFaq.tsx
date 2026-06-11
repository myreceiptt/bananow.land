import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import useSound from "use-sound";

import { skoolFaq } from "../../data/skool";

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
        <span className="text-green-now dark:text-yellow-now font-extrabold">
          Skool
        </span>{" "}
        <span className="text-yellow-now dark:text-green-now font-extrabold">
          Now
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
