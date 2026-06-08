export type BrandItem = {
  name: string;
  url: string;
  description: string;
  icon: string;
  title?: string;
};

export const activeBrands: BrandItem[] = [
  {
    name: "Na Now News",
    url: "/news/",
    description:
      "Here we share whatever we have done. It can be crazy nothing or ordinary something. There are a lot of them. Let's dig in!",
    icon: "/images/brandproducts/nanownews.svg",
  },
  {
    name: "Skool Now",
    url: "/skool/",
    description:
      "The home for learning programs, playing communities, and real-world growth.",
    icon: "/images/brandproducts/skoolnow.svg",
  },
  {
    name: "Claps",
    url: "/claps/",
    description:
      "AI companion for parents and caregivers—here to listen, reflect, and help you grow with confidence, compassion, and a little more calm.",
    icon: "/images/brandproducts/claps.svg",
  },
];

export const oldBrands: BrandItem[] = [
  {
    name: "90's Vibes",
    url: "/vibes",
    description:
      "The space (mostly on X - Twitter and Discord) where we can sing, chat, share, shill, or laugh with the fun of 90's spirit. Speak up your voices, make a lot of noise, and don't be silent!",
    title: "The 90's Vibes Space",
    icon: "/images/brandproducts/90svibes.svg",
  },
  {
    name: "Dermaga Web3",
    url: "/dermaga",
    description:
      "The offline event that shares and exchanges knowledge about the Web3 world. The bridge between Web2 and Web3 community.",
    title: "Dermaga NFT is Part of Dermaga Web3",
    icon: "/images/brandproducts/dermaga.svg",
  },
  {
    name: "Class Now",
    url: "/class",
    description:
      "An intimate education approach for the community. The room to share about love, life, and technology. It can be on a Discord channel or in any physical room in the Universe of Reality.",
    title: "Discord Class is Part of BANANOW Class",
    icon: "/images/brandproducts/class.svg",
  },
  {
    name: "InAMotion",
    url: "/inamotion",
    description:
      "The creative agency that accommodates the creative needs of other brands/products/entities, and is a profitable employer for creative people in the BANANOW community.",
    title: "Ina Motion Creative Agency",
    icon: "/images/brandproducts/inamotion.svg",
  },
  {
    name: "Agent Now",
    url: "/delegate",
    description:
      "The talent coordinator agency of BANANOW which is delegates the demand from other entities to farmers in BANANOW FAMILY.",
    title: "Agent Now is Farmers Delegate",
    icon: "/images/brandproducts/delegate.svg",
  },
  {
    name: "NOTA's Dept.",
    url: "/professor",
    description:
      "The Web3 tech support department which makes the engine run smoothly in BANANOW. Doing tech strategy, Web3 philosophical research, blockchain exploration, and even soul analytics.",
    title: "Prof. NOTA's Department",
    icon: "/images/brandproducts/professornota.svg",
  },
];
