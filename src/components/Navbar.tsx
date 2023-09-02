import Link from "next/link";
import Image from "next/image";
import ThemeSwitchButton from "./ThemeSwitchButton";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";

import useSound from "use-sound";
import React from "react";

const navigation = [
  { name: "Land", href: "/", current: false },
  { name: "Features", href: "/#features", current: false },
  { name: "Brands", href: "/#brandproducts", current: false },
  { name: "Community", href: "/#theheads", current: false },
  { name: "Farmers", href: "/#farmers", current: false },
  { name: "F.A.Q.", href: "/#faq", current: false },
  { name: "Embassy", href: "/#embassy", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const sound0Loc = "/sounds/tiuing.mp3";
  const [play0] = useSound(
    sound0Loc,
    { volume: 0.75 }
  );
  const sound0Click = () => {
    play0();
  };

  const sound1Loc = "/sounds/nguing.mp3";
  const [play1] = useSound(
    sound1Loc,
    { volume: 0.75 }
  );
  const sound1Click = () => {
    play1();
  };

  const sound2Loc = "/sounds/tinggg.mp3";
  const [play2] = useSound(
    sound2Loc,
    { volume: 0.75 }
  );
  const sound2Click = () => {
    play2();
  };

  const sound4Loc = "/sounds/ngung-ngung.mp3";
  const [play4, { stop }] = useSound(
    sound4Loc,
    { volume: 1.25 }
  );
  const [isHovering, setIsHovering] = React.useState(
    false
  );

  return (
    <Disclosure
      as="nav"
      className="fixed top-0 left-0 right-0 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-700 backdrop-blur-sm bg-white/90 dark:bg-neutral-900/80 z-20"
    >
      {({ open }: { open: any }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-start">
                <div className="flex flex-shrink-0 items-center md:pl-0">
                  <Link onClick={sound0Click} href="/">
                    <Image
                      onMouseEnter={() => {
                        setIsHovering(true);
                        play4();
                      }}
                      onMouseLeave={() => {
                        setIsHovering(false);
                        stop();
                      }}
                      className="block h-11 w-auto hover:scale-110 transition"
                      src="/images/logos/BananowLogo-169x121.png"
                      alt="BANANOW.LAND Logo"
                      width={150}
                      height={150}
                      quality={75}
                      sizes="100vw"
                    />
                  </Link>
                </div>

                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex space-x-5 items-center">
                    {navigation.map((item) => (
                      <Link
                        onClick={sound1Click}
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "text-neutral-900 dark:text-white "
                            : "text-dark-now dark:text-white-now hover:underline hover:text-neutral-900 dark:hover:text-white",
                          "text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-y-0 right-10 lg:right-0 flex items-center gap-2">
                  <Link
                    onClick={sound2Click}
                    href="https://heads.bananow.land/"
                    target="_blank"
                    className="hidden lg:block"
                    title="Be a Head of BANANOW.LAND..."
                  >
                    <button
                      className="bg-dark-now dark:bg-white-now text-white dark:text-neutral-900 px-4 p-2 text-base font-medium dark:hover:bg-yellow-now hover:bg-yellow-now hover:text-neutral-900 dark:hover:text-white rounded-full"
                    >
                      Be a Head
                    </button>
                  </Link>
                  <Link
                    onClick={sound2Click}
                    href="https://gp.bananow.land/"
                    target="_blank"
                    className="hidden lg:block"
                    title="Read The Green Print of BANANOW.LAND..."
                  >
                    <button
                      className="bg-dark-now dark:bg-white-now text-white dark:text-neutral-900 px-4 p-2 text-base font-medium dark:hover:bg-green-now hover:bg-green-now hover:text-neutral-900 dark:hover:text-white rounded-full"
                    >
                      The Green Print
                    </button>
                  </Link>
                  <ThemeSwitchButton />
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button onClick={sound0Click} className="inline-flex items-center justify-center rounded-md text-dark-now dark:text-light-now ">
                    <span className="sr-only">Open The Menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-4 min-h-screen border-t border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900">
              {navigation.map((item) => (
                <Disclosure.Button
                  onClick={sound1Click}
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-neutral-900 dark:text-white"
                      : "text-dark-now dark:text-white-now",
                    "block py-4 text-base font-medium border-b border-neutral-200 dark:border-neutral-700"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <Link
                onClick={sound2Click}
                href="https://heads.bananow.land/" target="_blank" title="Be a Head of BANANOW.LAND...">
                <button className="mt-12 bg-dark-now dark:bg-white-now text-white dark:text-neutral-900 px-4 p-3 font-medium rounded-full w-full">
                  Be a Head
                </button>
              </Link>
              <Link
                onClick={sound2Click}
                href="https://gp.bananow.land/" target="_blank" title="Read The Green Print of BANANOW.LAND...">
                <button className="mt-12 bg-dark-now dark:bg-white-now text-white dark:text-neutral-900 px-4 p-3 font-medium rounded-full w-full">
                  The Green Print
                </button>
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
