> Shush, I'm playing, learning, and working. 🤫 🤫 🤫 🤫

- 😄 &nbsp; I'm [Prof. NOTA](https://deeplinks.straight-line.org/), per/pers.
- 🤙 &nbsp; I’m currently playing.
- 🌱 &nbsp; I’m currently learning.
- 🔭 &nbsp; I’m currently working.
- 👯 &nbsp; I’m not looking to collaborate.
- 🤔 &nbsp; I’m not looking for help.
- 💬 &nbsp; Don't ask me about that.
- 📫 &nbsp; Don't try to reach me.
- ⚡ &nbsp; Fun fact: [The King's NFTs project](https://iqraa.straight-line.org/the-kings-nfts/)

> Here are some ideas to get you started:

```json
{
  "name": "BANANOW.LAND",
  "version": "1.4.7",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@headlessui/react": "^1.7.4",
    "@heroicons/react": "^2.0.16",
    "@tailwindcss/typography": "^0.5.8",
    "@vercel/analytics": "^0.1.11",
    "next": "^13.0.6",
    "next-themes": "^0.2.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-hook-form": "^7.39.3",
    "use-sound": "^4.0.1",
    "use-web3forms": "^1.2.1"
  },
  "devDependencies": {
    "@types/node": "^18.11.9",
    "@types/react": "18.0.24",
    "@types/react-dom": "18.0.8",
    "autoprefixer": "^10.4.12",
    "eslint": "8.26.0",
    "eslint-config-next": "^13.0.6",
    "file-loader": "^6.2.0",
    "postcss": "^8.4.18",
    "tailwindcss": "^3.2.1",
    "typescript": "4.8.4"
  }
}
```

> Init! Init it! Init!

```javascript
import Head from "next/head";
import { useRouter } from "next/router";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Prefooter from "./Prefooter";
import { title } from "process";

const Layout = (props: any) => {
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
        <meta key={title} content={meta.description} name="description" />
        <meta property="og:url" content={`https://bananow.land${router.asPath}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
      </Head>
      <main id="skip" className="bg-white dark:bg-neutral-900">
        <Navbar />
        {children}
        <Prefooter />
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
```

> Regards
> 
> [Prof. NOTA](https://deeplinks.straight-line.org/)
> 
> [init.straight-line.org](https://init.straight-line.org/)
> 

