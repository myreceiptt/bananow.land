import Image from "next/image";
import Link from "next/link";
import ThemeSwitchOption from "./ThemeSwitchOption";

import useSound from "use-sound";
import React from "react";

const social = [
  {
    name: "discord",
    title: "Discord server of BANANOW",
    href: "/discord/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" fill="none">
        <path
          d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "twitter",
    title: "X - Twitter account of BANANOW",
    href: "/twitter/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="none">
        <path
          d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
          fill="currentColor"
        />
      </svg>
    ),
  },

  {
    name: "instagram",
    title: "Instagram profile of BANANOW",
    href: "/instagram/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 436 500" fill="none">
        <path
          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
          fill="currentColor"
        />
      </svg>
    ),
  },

  {
    name: "youtube",
    title: "YouTube channel of BANANOW",
    href: "/youtube/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="none">
        <path
          d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

const column1 = [
  { name: "Home Page", href: "/" },
  { name: "The Features", href: "/#features" },
  { name: "The Brands", href: "/#brandproducts" },
  { name: "The Community", href: "/#theheads" },
  { name: "The Farmers", href: "/#farmers" },
  { name: "Some F.A.Q.", href: "/#faq" },
  { name: "The Embassy", href: "/#embassy" },
];

const column2 = [
  { name: "90's Vibes", href: "/vibes/" },
  { name: "Dermaga Web3", href: "/dermaga/" },
  { name: "Class Now", href: "/class/" },
  { name: "InAMotion", href: "/inamotion/" },
  { name: "Agent Now", href: "/delegate/" },
  { name: "NOTA's Dept.", href: "/professor/" },
  { name: "Na Now News", href: "https://nanownews.endhonesa.com/" }
];

const column3 = [
  { name: "Be a Head Now", href: "https://bananownfts.endhonesa.com/", target: "_target" },
  { name: "The Green Print", href: "https://bananowgp.endhonesa.com/", target: "_target" },
  { name: "Privacy Policy", href: "/privacy/", target: "_self" },
  { name: "Terms & Conditions", href: "/terms/", target: "_self" },
];

export default function Footer() {
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
    <footer className="bg-neutral-900 text-white-now">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5">
        <div className="col-span-2 sm:col-span-3 md:col-span-3 lg:col-span-2 2xl:col-span-2">
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
              className="h-17 w-auto hover:scale-110 transition"
              src="/images/logos/BananowLogo-169x121.png"
              alt="BANANOW.LAND Logo"
              width={150}
              height={150}
              quality={75}
              sizes="100vw"
            />
          </Link>

          <p className="md:text-sm pt-4 w-auto sm:w-6/12 md:w-6/12 lg:w-8/12">
            <span className="text-yellow-now font-bold">BANANOW</span>.<span className="text-green-now font-bold">LAND</span> - A Web3 Supportive Family
          </p>

          <div className="flex gap-2 pt-6 sm:pt-6 md:pt-6 lg:pt-12 max-w-[300px]">
            {social.map((red) => (
              <Link 
                onMouseEnter={() => {
                  setIsHovering(true);
                  play4();
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                  stop();
                }}
                onClick={sound2Click} key={red.name} href={red.href} title={red.title} target="_blank">
                <div className="w-9 h-9 p-2 text-white bg-yellow-now hover:text-neutral-900 hover:bg-green-now rounded-full flex items-center justify-center">
                  {red.icon}
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm md:text-xs font-bold pb-4 pt-12 lg:pt-0">
            BANANOW
          </h3>
          {column1.map((item) => (
            <Link
              onClick={sound1Click}
              key={item.name}
              href={item.href}
              className="hover:text-yellow-now hover:underline md:text-sm my-4 grid"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div>
          <h3 className="text-sm md:text-xs font-bold pb-4 pt-12 lg:pt-0">
            BRANDS
          </h3>
          {column2.map((item) => (
            <Link
              onClick={sound1Click}
              key={item.name}
              href={item.href}
              target="_blank"
              className="hover:text-yellow-now hover:underline md:text-sm my-4 grid"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div>
          <h3 className="text-sm md:text-xs font-bold pb-4 pt-12 lg:pt-0">
            LEGAL
          </h3>
          {column3.map((item) => (
            <Link
              onClick={sound1Click}
              key={item.name}
              href={item.href}
              target={item.target}
              className="hover:text-yellow-now hover:underline md:text-sm my-4 grid"
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-12">
            <ThemeSwitchOption />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 p-6 text-center border-t border-dark-now">
        <Link
          onClick={sound0Click}
          href="/"
          className="text-white-now text-sm hover:text-yellow-now"
        >
          <span className="text-yellow-now font-bold">BANANOW</span>.<span className="text-green-now font-bold">LAND</span> &copy; Copyright {new Date().getFullYear()}. All Rights Reserved.
        </Link>
      </div>
    </footer>
  );
}
