import {
  farmerExternalLinks,
  greenPrintCropLinks,
  nftLinks,
  officialLinks,
} from "./officialLinks";

export type RedirectTextPart = {
  text: string;
  highlight?: boolean;
};

export type RedirectConfig = {
  slug: string;
  target: string;
  heading: string;
  description: RedirectTextPart[];
  image: string;
  imageAlt: string;
  buttonLabel: string;
  id?: string;
  layout?: "default" | "redirect";
  headingClassName?: string;
};

const bananow: RedirectTextPart = { text: "BANANOW", highlight: true };

export const redirects = {
  base: {
    slug: "base",
    target: nftLinks.basedOpenSea,
    heading: "Redirecting...",
    description: [
      { text: "Redirecting to " },
      { text: "BANANOW BASED", highlight: true },
      { text: " NFTs collection on OpenSea.IO marketplace..." },
    ],
    image: "/images/redirects/base.svg",
    imageAlt: "OpenSea.IO",
    buttonLabel: "BANANOW BASED NFTs on OpenSea.IO",
    layout: "redirect",
  },
  basescan: {
    slug: "basescan",
    target: nftLinks.basedBaseScan,
    heading: "Redirecting...",
    description: [
      { text: "Redirecting to " },
      { text: "BANANOW BASED", highlight: true },
      { text: " NFTs collection on BaseScan.Org explorer..." },
    ],
    image: "/images/redirects/basescan.svg",
    imageAlt: "BaseScan.Org",
    buttonLabel: "BANANOW BASED NFTs on BaseScan.Org",
    layout: "redirect",
  },
  born2burn: {
    slug: "born2burn",
    target: nftLinks.born2burn,
    heading: "Redirecting...",
    description: [
      { text: "Redirecting to Born 2 Burn NFT collection on OBJKT.Com marketplace..." },
    ],
    image: "/images/redirects/born2burn.svg",
    imageAlt: "Born 2 Burn NFT Collection",
    buttonLabel: "Born 2 Burn NFT Collection",
    layout: "redirect",
  },
  class: {
    slug: "class",
    target: greenPrintCropLinks.classNow,
    heading: "Class Now",
    description: [
      {
        text: "This page redirects to The Green Print, where all information about Class Now in both the Universe of Reality and 0101 Universe is documented...",
      },
    ],
    image: "/images/brandproducts/class.svg",
    imageAlt: "Discord Class is Part of BANANOW Class",
    buttonLabel: "Class Now on The Green Print",
  },
  delegate: {
    slug: "delegate",
    target: greenPrintCropLinks.agentNow,
    heading: "Agent Now",
    description: [
      {
        text: "This page redirects to The Green Print, where information about how to access and empower the Farmers of ",
      },
      bananow,
      { text: " for your needs..." },
    ],
    image: "/images/brandproducts/delegate.svg",
    imageAlt: "Agent Now is Farmers Delegate",
    buttonLabel: "Agent Now on The Green Print",
    headingClassName:
      "text-4xl font-judul font-bold text-center text-neutral-900 dark:text-white",
  },
  dermaga: {
    slug: "dermaga",
    target: greenPrintCropLinks.dermaga,
    heading: "Dermaga Web3",
    description: [
      {
        text: "This page redirects to The Green Print, where information about the Web3 onboarding events of ",
      },
      bananow,
      { text: "..." },
    ],
    image: "/images/brandproducts/dermaga.svg",
    imageAlt: "Dermaga NFT is Part of Dermaga Web3",
    buttonLabel: "Dermaga Web3 on The Green Print",
  },
  discord: {
    slug: "discord",
    target: "https://discord.gg/PpfGQpKDhs",
    heading: "Redirecting...",
    description: [{ text: "Redirecting to Discord server of " }, bananow, { text: "..." }],
    image: "/images/redirects/discord.svg",
    imageAlt: "Discord Server",
    buttonLabel: "Discord Server",
    id: "discord",
    layout: "redirect",
  },
  escapeace: {
    slug: "escapeace",
    target: nftLinks.escapeace,
    heading: "Redirecting...",
    description: [{ text: "Redirecting to Escape Ace NFT collection on OpenSea.IO marketplace..." }],
    image: "/images/redirects/escapeace.svg",
    imageAlt: "Escape Ace NFT Collection",
    buttonLabel: "Escape Ace NFT Collection",
    layout: "redirect",
  },
  inamotion: {
    slug: "inamotion",
    target: greenPrintCropLinks.inamotion,
    heading: "InAMotion",
    description: [
      { text: "This page redirects to The Green Print, where information about InAMotion Creative Agency is documented..." },
    ],
    image: "/images/brandproducts/inamotion.svg",
    imageAlt: "Ina Motion Creative Agency",
    buttonLabel: "InAMotion on The Green Print",
  },
  instagram: {
    slug: "instagram",
    target: "https://instagram.com/bananow.land",
    heading: "Redirecting...",
    description: [{ text: "Redirecting to Instagram account of " }, bananow, { text: "..." }],
    image: "/images/redirects/instagram.svg",
    imageAlt: "Instagram Account",
    buttonLabel: "Instagram Account",
    id: "instagram",
    layout: "redirect",
  },
  kainde: {
    slug: "kainde",
    target: farmerExternalLinks.kainde,
    heading: "Redirecting...",
    description: [{ text: "Redirecting to X - Twitter account of Suwar Kainde..." }],
    image: "/images/redirects/kainde.png",
    imageAlt: "Suwar Kainde",
    buttonLabel: "X - Twitter Account of Suwar Kainde",
    layout: "redirect",
  },
  ladyme: {
    slug: "ladyme",
    target: nftLinks.ladyme,
    heading: "Redirecting...",
    description: [{ text: "Redirecting to LadyME NFT collection on OBJKT.Com marketplace..." }],
    image: "/images/redirects/ladyme.svg",
    imageAlt: "LadyME NFT Collection",
    buttonLabel: "LadyME NFT Collection",
    layout: "redirect",
  },
  lord: {
    slug: "lord",
    target: nftLinks.lord,
    heading: "Redirecting...",
    description: [{ text: "Redirecting to Lord Of BANANOW NFT collection on OpenSea.IO marketplace..." }],
    image: "/images/redirects/lord.svg",
    imageAlt: "Lord Of BANANOW NFT Collection",
    buttonLabel: "Lord Of BANANOW NFT Collection",
    layout: "redirect",
  },
  nota: {
    slug: "nota",
    target: farmerExternalLinks.nota,
    heading: "Redirecting...",
    description: [{ text: "Redirecting to X - Twitter account of Prof. NOTA..." }],
    image: "/images/redirects/nota.png",
    imageAlt: "Prof. NOTA",
    buttonLabel: "X - Twitter Account of Prof. NOTA",
    layout: "redirect",
  },
  novrizky: {
    slug: "novrizky",
    target: farmerExternalLinks.novrizky,
    heading: "Redirecting...",
    description: [{ text: "Redirecting to X - Twitter account of Novrizky Norman..." }],
    image: "/images/redirects/novrizky.png",
    imageAlt: "Novrizky Norman",
    buttonLabel: "X - Twitter Account of Novrizky Norman",
    layout: "redirect",
  },
  opensea: {
    slug: "opensea",
    target: nftLinks.opensea,
    heading: "Redirecting...",
    description: [{ text: "Redirecting to BANANOW NFTs collection on OpenSea.IO marketplace..." }],
    image: "/images/redirects/opensea.svg",
    imageAlt: "BANANOW NFTs Collection",
    buttonLabel: "BANANOW NFTs on OpenSea.IO",
    layout: "redirect",
  },
  professor: {
    slug: "professor",
    target: greenPrintCropLinks.notasDepartment,
    heading: "NOTA's Dept.",
    description: [
      {
        text: "This page redirects to The Green Print, where information about the role of Professor NOTA in ",
      },
      bananow,
      { text: "..." },
    ],
    image: "/images/brandproducts/professornota.svg",
    imageAlt: "Prof. NOTA's Department",
    buttonLabel: "NOTA's Dept. on The Green Print",
  },
  pung: {
    slug: "pung",
    target: farmerExternalLinks.pung,
    heading: "Redirecting...",
    description: [{ text: "Redirecting to X account of Pung..." }],
    image: "/images/redirects/pung.png",
    imageAlt: "Pung",
    buttonLabel: "X Account of Pung",
    layout: "redirect",
  },
  rotybroi: {
    slug: "rotybroi",
    target: nftLinks.rotybroi,
    heading: "Redirecting...",
    description: [{ text: "Redirecting to The ROTY BROI NFT collection on OpenSea.IO marketplace..." }],
    image: "/images/redirects/rotybroi.svg",
    imageAlt: "The ROTY BROI NFT Collection",
    buttonLabel: "The ROTY BROI NFT Collection",
    layout: "redirect",
  },
  support: {
    slug: "support",
    target: greenPrintCropLinks.embassy,
    heading: "Redirecting...",
    description: [
      { text: "Redirecting to The Green Print, where information about The Embassy of " },
      bananow,
      { text: "..." },
    ],
    image: "/images/404/404.svg",
    imageAlt: "The Embassy of BANANOW",
    buttonLabel: "The Embassy on The Green Print",
  },
  tree: {
    slug: "tree",
    target: nftLinks.tree,
    heading: "Redirecting...",
    description: [{ text: "Redirecting to BANANOW Tree NFT collection on OpenSea.IO marketplace..." }],
    image: "/images/redirects/tree.svg",
    imageAlt: "BANANOW Tree NFT Collection",
    buttonLabel: "BANANOW Tree NFT Collection",
    layout: "redirect",
  },
  twitter: {
    slug: "twitter",
    target: "https://x.com/bananow_land",
    heading: "Redirecting...",
    description: [{ text: "Redirecting to X account of " }, bananow, { text: "..." }],
    image: "/images/redirects/twitter.svg",
    imageAlt: "X - Twitter Account",
    buttonLabel: "X (Twitter) Account",
    id: "404",
    layout: "redirect",
  },
  v: {
    slug: "v",
    target: farmerExternalLinks.v,
    heading: "Redirecting...",
    description: [{ text: "Redirecting to X - Twitter account of V..." }],
    image: "/images/redirects/vanny.png",
    imageAlt: "V",
    buttonLabel: "X - Twitter Account of V",
    layout: "redirect",
  },
  vibes: {
    slug: "vibes",
    target: greenPrintCropLinks.vibes,
    heading: "90's Vibes",
    description: [
      {
        text: "This page redirects to The Green Print, where information about the 90's Vibes is documented...",
      },
    ],
    image: "/images/brandproducts/90svibes.svg",
    imageAlt: "The 90's Vibes Space",
    buttonLabel: "90's Vibes on The Green Print",
  },
  youtube: {
    slug: "youtube",
    target: "https://www.youtube.com/@bananow_land_",
    heading: "Redirecting...",
    description: [{ text: "Redirecting to Youtube channel of " }, bananow, { text: "..." }],
    image: "/images/redirects/youtube.svg",
    imageAlt: "Youtube Channel",
    buttonLabel: "Youtube Channel",
    id: "youtube",
    layout: "redirect",
  },
  zortan: {
    slug: "zortan",
    target: farmerExternalLinks.zortan,
    heading: "Redirecting...",
    description: [{ text: "Redirecting to X - Twitter account of Zortan..." }],
    image: "/images/redirects/zortan.png",
    imageAlt: "Zortan",
    buttonLabel: "X - Twitter Account of Zortan",
    layout: "redirect",
  },
} satisfies Record<string, RedirectConfig>;

export type RedirectKey = keyof typeof redirects;
