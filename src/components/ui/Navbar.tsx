import Link from "next/link";
import Image from "next/image";
import ThemeSwitchButton from "./ThemeSwitchButton";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";

import useSound from "use-sound";
import React from "react";
import { NavigationItem, primaryNavigation } from "../../data/navigation";
import { ctaLinks, site } from "../../data/site";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = React.useState<
    string | null
  >(null);

  const sound0Loc = "/sounds/tiuing.mp3";
  const [play0] = useSound(sound0Loc, { volume: 0.75 });
  const sound0Click = () => {
    play0();
  };

  const sound1Loc = "/sounds/nguing.mp3";
  const [play1] = useSound(sound1Loc, { volume: 0.75 });
  const sound1Click = () => {
    play1();
  };

  const sound2Loc = "/sounds/tinggg.mp3";
  const [play2] = useSound(sound2Loc, { volume: 0.75 });
  const sound2Click = () => {
    play2();
  };

  const sound4Loc = "/sounds/ngung-ngung.mp3";
  const [play4, { stop }] = useSound(sound4Loc, { volume: 1.25 });
  const [isHovering, setIsHovering] = React.useState(false);

  const closeDropdownOnBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setOpenDropdown(null);
    }
  };

  const renderDesktopNavigationItem = (item: NavigationItem) => {
    const hasChildren = Boolean(item.children?.length);
    const isOpen = openDropdown === item.name;

    return (
      <div
        key={item.name}
        className="relative"
        onMouseEnter={() => setOpenDropdown(item.name)}
        onMouseLeave={() => setOpenDropdown(null)}
        onFocus={() => setOpenDropdown(item.name)}
        onBlur={closeDropdownOnBlur}>
        <Link
          onClick={sound1Click}
          href={item.href}
          className={classNames(
            item.current
              ? "text-neutral-900 dark:text-white "
              : "text-dark-now dark:text-white-now hover:underline hover:text-neutral-900 dark:hover:text-white",
            "inline-flex items-center gap-1 xl:text-base xl:font-medium text-sm font-normal",
          )}
          aria-current={item.current ? "page" : undefined}
          aria-haspopup={hasChildren ? "true" : undefined}
          aria-expanded={hasChildren ? isOpen : undefined}>
          {item.name}
          {hasChildren && (
            <ChevronDownIcon
              className={`h-4 w-4 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            />
          )}
        </Link>

        {hasChildren && isOpen && (
          <div className="absolute left-0 top-full z-30 min-w-52 pt-3">
            <div className="rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white/95 dark:bg-neutral-900/95 px-2 py-2 shadow-lg backdrop-blur-sm">
              {item.children?.map((child) => (
                <Link
                  onClick={sound1Click}
                  key={child.name}
                  href={child.href}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-dark-now dark:text-white-now hover:bg-white-now hover:text-neutral-900 dark:hover:bg-dark-now dark:hover:text-white">
                  {child.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderMobileNavigationItem = (item: NavigationItem) => {
    const hasChildren = Boolean(item.children?.length);
    const isOpen = openMobileSubmenu === item.name;
    const submenuId = `mobile-submenu-${item.name
      .toLowerCase()
      .replace(/\W+/g, "-")}`;

    return (
      <div
        key={item.name}
        className="border-b border-neutral-200 dark:border-neutral-700">
        <div className="flex items-center justify-between">
          <Disclosure.Button
            onClick={sound1Click}
            as="a"
            href={item.href}
            className={classNames(
              item.current
                ? "text-neutral-900 dark:text-white"
                : "text-dark-now dark:text-white-now",
              "block flex-1 py-4 text-base font-medium",
            )}
            aria-current={item.current ? "page" : undefined}>
            {item.name}
          </Disclosure.Button>
          {hasChildren && (
            <button
              onClick={() => {
                sound1Click();
                setOpenMobileSubmenu(isOpen ? null : item.name);
              }}
              type="button"
              className="ml-3 flex h-10 w-10 items-center justify-center rounded-md text-dark-now hover:bg-white-now hover:text-neutral-900 dark:text-white-now dark:hover:bg-dark-now dark:hover:text-white"
              aria-controls={submenuId}
              aria-expanded={isOpen}
              aria-label={`Toggle ${item.name} submenu`}>
              <ChevronDownIcon
                className={`h-5 w-5 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>
          )}
        </div>
        {hasChildren && isOpen ? (
          <div id={submenuId} className="pb-3 pl-4">
            {item.children?.map((child) => (
              <Disclosure.Button
                onClick={sound1Click}
                key={child.name}
                as="a"
                href={child.href}
                className="block rounded-md py-2 pl-4 pr-3 text-sm font-medium text-dark-now dark:text-white-now hover:bg-white-now hover:text-neutral-900 dark:hover:bg-dark-now dark:hover:text-white">
                {child.name}
              </Disclosure.Button>
            ))}
          </div>
        ) : null}
      </div>
    );
  };

  return (
    <Disclosure
      as="nav"
      className="fixed top-0 left-0 right-0 text-neutral-900 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-700 backdrop-blur-sm bg-white/90 dark:bg-neutral-900/80 z-20">
      {({ open }: { open: any }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-start">
                <div className="flex shrink-0 items-center md:pl-0">
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
                      src={site.logo}
                      alt="BANANOW Land Logo"
                      width={150}
                      height={150}
                      quality={75}
                      sizes="100vw"
                    />
                  </Link>
                </div>

                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex space-x-5 items-center">
                    {primaryNavigation.map(renderDesktopNavigationItem)}
                  </div>
                </div>

                <div className="absolute inset-y-0 right-10 lg:right-0 flex items-center gap-2">
                  <Link
                    onClick={sound2Click}
                    href={ctaLinks.beAHead}
                    title="Be a Head of BANANOW Land..."
                    className="hidden lg:block bg-dark-now dark:bg-white-now text-white dark:text-neutral-900 px-4 p-2 xl:text-base xl:font-medium text-sm font-normal dark:hover:bg-yellow-now hover:bg-yellow-now hover:text-neutral-900 dark:hover:text-white rounded-full">
                    Be a Head
                  </Link>
                  <Link
                    onClick={sound2Click}
                    href={ctaLinks.greenPrint}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden lg:block bg-dark-now dark:bg-white-now text-white dark:text-neutral-900 px-4 p-2 xl:text-base xl:font-medium text-sm font-normal dark:hover:bg-green-now hover:bg-green-now hover:text-neutral-900 dark:hover:text-white rounded-full"
                    title="Read The Green Print of BANANOW Land...">
                    The Green Print
                  </Link>
                  <ThemeSwitchButton />
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button
                    onClick={sound0Click}
                    className="inline-flex items-center justify-center rounded-md text-dark-now dark:text-light-now ">
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
              {primaryNavigation.map(renderMobileNavigationItem)}
              <Link
                onClick={sound2Click}
                href={ctaLinks.beAHead}
                title="Be a Head of BANANOW Land..."
                className="mt-12 block bg-dark-now dark:bg-white-now text-white dark:text-neutral-900 px-4 p-3 font-medium rounded-full w-full text-center">
                Be a Head
              </Link>
              <Link
                onClick={sound2Click}
                href={ctaLinks.greenPrint}
                target="_blank"
                rel="noopener noreferrer"
                title="Read The Green Print of BANANOW Land..."
                className="mt-12 block bg-dark-now dark:bg-white-now text-white dark:text-neutral-900 px-4 p-3 font-medium rounded-full w-full text-center">
                The Green Print
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
