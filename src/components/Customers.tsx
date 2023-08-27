import Image from "next/image";
import Link from "next/link";

const customers = [
    {
        name: "google-play",
        href: "https://play.google.com/",
        src: "/images/customers/google-play.svg",
        alt: "Google play logo",
    },
    {
        name: "github",
        href: "https://github.com/",
        src: "/images/customers/github.svg",
        alt: "Github logo",
    },
    {
        name: "docker",
        href: "https://www.docker.com/",
        src: "/images/customers/docker.svg",
        alt: "Docker logo",
    },
    {
        name: "python",
        href: "https://www.python.org/",
        src: "/images/customers/python.svg",
        alt: "Python logo",
    },
    {
        name: "slack",
        href: "https://slack.com/",
        src: "/images/customers/slack.svg",
        alt: "Slack logo",
    },
    {
        name: "discord",
        href: "https://discord.com/",
        src: "/images/customers/discord.svg",
        alt: "Discord logo",
    }
]

export default function Customers() {
    return (
        <div className="bg-white dark:bg-neutral-900 w-full px-4 pt-16 pb-16" id="faq">
            <h2 className="text-4xl font-bold text-center">
                Happy Customers
            </h2>

            <p className="pt-6 pb-8 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit nam maxime quas fugiat tempore blanditiis, eveniet quia accusantium.
            </p>
            <div className="mx-auto w-full max-w-4xl bg-white dark:bg-transparent">
                <div className="text-center justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
                    {customers.map((item) => (
                        <Link key={item.name} href={item.href} target="_blank">
                            <Image
                                className="h-10 w-auto mt-6 justify-center text-center mx-auto hover:scale-110 transition"
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

