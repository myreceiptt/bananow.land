import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

import useSound from "use-sound";

const faqitems = [
  {
    question: "What does Web3 mean??",
    response:
      "Web3 is an idea for a new iteration of the World Wide Web which incorporates concepts such as decentralization, blockchain technologies, and token-based economics.",
  },
  {
    question: "What is the purpose of Web3?",
    response:
      "The major aim of Web3 is to give back the internet power to the users instead of companies. To achieve this, Web3 makes use of blockchain and cryptocurrency technology to create a form of ownership.",
  },
  {
    question: "What are the advantages of Web3?",
    response:
      "Web3 is huge and interconnected, which is why it is easier for anyone to gain access to the public and private data that you share online. As Web3-based websites and applications become popular, the pressure will come on existing businesses to upgrade.",
  },
  {
    question: "Is Web3 easy to learn?",
    response:
      "Accordingly, BANANOW is here, so you can learn new knowledge and skills or build on your existing ones, and even complete beginners can become Web3-ready. In fact, we recommend that everyone start with blockchain and Bitcoin fundamentals by becoming a community member of BANANOW.",
  },
];

export default function Faq() {
  const sound3Loc = "/sounds/jept.mp3";
  const [play3] = useSound(
    sound3Loc,
    { volume: 0.75 }
  );
  const sound3Click = () => {
    play3();
  };

  return (
    <div
      className="bg-white dark:bg-neutral-900 w-full px-4 pt-16 pb-16"
      id="faq"
    >
      <h2 className="text-4xl font-bold text-center text-neutral-900 dark:text-white">
        F.A.Q. About Web3.
      </h2>

      <p className="pt-6 pb-16 text-base max-w-2xl text-center m-auto text-dark-now dark:text-white-now">
        A list of some questions and answers about Web3, especially one giving basic information for the new visitor of this website.
      </p>
      <div className="mx-auto w-full max-w-2xl rounded-2xl bg-transparent dark:bg-transparent">
        {faqitems.map(({ question, response }) => (
          <div key={question}>
            <Disclosure>
              {({ open }) => (
                <div className="mt-4">
                  <Disclosure.Button
                    onClick={sound3Click}
                    className={`${
                      open
                        ? "bg-white-now dark:bg-dark-now hover:bg-white-now rounded-b-none"
                        : ""
                    } flex w-full justify-between rounded-lg bg-white-now dark:bg-dark-now dark:hover:bg-dark-now px-4 py-4 text-left text-base font-medium`}
                  >
                    <h2 className="font-semibold text-neutral-900 dark:text-white">{question}</h2>
                    <ChevronDownIcon
                      className={`${
                        open ? "rotate-180 transition-transform text-green-now dark:text-yellow-now" : ""
                      } h-5 w-5 flex-shrink-0 text-green-now dark:text-yellow-now`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel
                    className={`${
                      open
                        ? "px-4 pt-4 pb-2 text-base text-dark-now dark:text-white-now"
                        : ""
                    } bg-white-now dark:bg-dark-now rounded-b-lg`}
                  >
                    <p>{response}</p><br />
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
