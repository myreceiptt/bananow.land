import Image from "next/image";
import Link from "next/link";

import useSound from "use-sound";

const farmers = [
    {
        name: "Mrs. V",
        // href: "https://twitter.com/Bananow_V",
        href: "/v/",
        src: "/images/farmers/BananowFarmers-169x121.png",
        alt: "BANANOW PFP of V",
    },
    {
        name: "Mr. Pung",
        // href: "https://twitter.com/Inamotion21",
        href: "/pung/",
        src: "/images/farmers/BananowFarmers-169x121.png",
        alt: "BANANOW PFP of Pung",
    },
    {
        name: "ZORTAN",
        // href: "https://twitter.com/zortan_",
        href: "/zortan/",
        src: "/images/farmers/BananowFarmers-169x121.png",
        alt: "BANANOW PFP of Zortan",
    },
    {
        name: "Prof. NOTA",
        // href: "https://twitter.com/MyReceiptTT",
        href: "/nota/",
        src: "/images/farmers/BananowFarmers-169x121.png",
        alt: "BANANOW PFP of Prof. NOTA",
    },
    {
        name: "Novrizky Norman",
        // href: "https://twitter.com/Novrizkynorman",
        href: "/novrizky/",
        src: "/images/farmers/BananowFarmers-169x121.png",
        alt: "BANANOW PFP of Novrizky Norman",
    },
    {
        name: "Suwar Kainde",
        // href: "https://twitter.com/SuwarKainde",
        href: "/kainde/",
        src: "/images/farmers/BananowFarmers-169x121.png",
        alt: "BANANOW PFP of Suwar Kainde",
    }
]

export default function Farmers() {
    const sound0Loc = "/sounds/tiuing.mp3";
    const [play0] = useSound(
    sound0Loc,
    { volume: 0.75 }
    );
    const sound0Click = () => {
    play0();
    };
    return (
        <div className="bg-white dark:bg-neutral-900 w-full px-4 pt-16 pb-16" id="farmers">
            <h2 className="text-4xl font-bold text-center">
                Farmers of <span className="text-rose-500">BANANOW</span>.
            </h2>

            <p className="pt-6 pb-8 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit nam maxime quas fugiat tempore blanditiis, eveniet quia accusantium.
            </p>
            <div className="mx-auto w-full max-w-4xl bg-white dark:bg-transparent">
                <div className="text-center justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
                    {farmers.map((item) => (
                        <Link onClick={sound0Click} key={item.name} href={item.href} title={item.name} target="_blank">
                            <Image
                                className="h-20 w-auto mt-6 justify-center text-center mx-auto hover:scale-110 transition"
                                src={item.src}
                                alt={item.alt}
                                width={150}
                                height={150}
                                quality={75}
                                sizes="100vw"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>

    );
}

