export type NavigationItem = {
  name: string;
  href: string;
  current?: boolean;
  children?: NavigationItem[];
};

export const primaryNavigation: NavigationItem[] = [
  {
    name: "Land",
    href: "/",
    children: [
      { name: "Features", href: "/#features" },
      { name: "The Crops", href: "/#brandproducts" },
      { name: "Community", href: "/#theheads" },
      { name: "Farmers", href: "/#farmers" },
      { name: "F.A.Q.", href: "/#faq" },
      { name: "Embassy", href: "/#embassy" },
    ],
  },
  {
    name: "News",
    href: "/news",
    children: [
      { name: "Land", href: "/news/category/land" },
      { name: "Technology", href: "/news/category/technology" },
      { name: "Web3", href: "/news/category/web3" },
      { name: "Arts", href: "/news/category/arts" },
      { name: "Community", href: "/news/category/community" },
      { name: "Education", href: "/news/category/education" },
      { name: "Business", href: "/news/category/business" },
      { name: "Markets", href: "/news/category/markets" },
      { name: "Gaming", href: "/news/category/gaming" },
      { name: "Opinion", href: "/news/category/opinion" },
      { name: "Reviews", href: "/news/category/reviews" },
    ],
  },
  {
    name: "Skool",
    href: "/skool",
    children: [
      { name: "Layers", href: "/skool#skool-paths" },
      { name: "How It Works", href: "/skool#skool-how-it-works" },
      { name: "Programs", href: "/skool#skool-programs" },
      { name: "Partners", href: "/skool#skool-partners" },
      { name: "F.A.Q.", href: "/skool#skool-faq" },
      { name: "Embassy", href: "/skool#embassy" },
    ],
  },
  { name: "Claps", href: "/claps" },
  { name: "NFTs", href: "/nfts" },
];
