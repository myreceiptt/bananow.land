import Head from "next/head";
import { useRouter } from "next/router";

import Footer from "./Footer";
import Navbar from "./Navbar";
// import Prefooter from "./Prefooter";

const Discord = (props: any) => {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "BANANOW.LAND - A Web3 Supportive Family",
    description: `BANANOW is a fun, non-intimidating, supportive family, where its members can always play, learn, and work according to their resulting revenue and formed value in Web3 ecosystem.`,
    image: "/images/seo/FpVbaX0aMAAC7NI.jpeg",
    type: "website",
    ...customMeta,
  };
  return (
    <div className="min-w-[350px] overflow-x-hidden">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <link href="/logo32.png" rel="shortcut icon" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://bananow.land${router.asPath}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta http-equiv="Refresh" content="4; url='https://discord.gg/PpfGQpKDhs'" />
      </Head>

      <main id="skip" className="bg-white dark:bg-neutral-900">
        <Navbar />
        {children}
        {/* <Prefooter /> */}
        <Footer />
      </main>
    </div>
  );
};

export default Discord;
