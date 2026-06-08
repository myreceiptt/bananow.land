export type NavigationItem = {
  name: string;
  href: string;
  current: boolean;
};

export const primaryNavigation: NavigationItem[] = [
  { name: "Home", href: "/", current: false },
  { name: "Features", href: "/#features", current: false },
  { name: "Brands", href: "/#brandproducts", current: false },
  { name: "Community", href: "/#theheads", current: false },
  { name: "Farmers", href: "/#farmers", current: false },
  { name: "F.A.Q.", href: "/#faq", current: false },
  { name: "Embassy", href: "/#embassy", current: false },
];

// export const primaryNavigation: NavigationItem[] = [
//   - Main Menu: { name: "Home", href: "/", current: false },
//      - Sub Menu { name: "Features", href: "/#features", current: false },
//      - Sub Menu { name: "Brands", href: "/#brandproducts", current: false },
//      - Sub Menu { name: "Community", href: "/#theheads", current: false },
//      - Sub Menu { name: "Farmers", href: "/#farmers", current: false },
//      - Sub Menu { name: "F.A.Q.", href: "/#faq", current: false },
//      - Sub Menu { name: "Embassy", href: "/#embassy", current: false },
//   - Main Menu: { name: "News", href: "/news", current: false },
//      - Sub Menu { name: "LAND", href: "/news/category/land", current: false },
//      - Sub Menu { name: "Technology", href: "/news/category/technology", current: false },
//      - Sub Menu { name: "Web3", href: "/news/category/web3", current: false },
//      - Sub Menu { name: "Arts", href: "/news/category/arts", current: false },
//      - Sub Menu { name: "Community", href: "/news/category/community", current: false },
//      - Sub Menu { name: "Education", href: "/news/category/education", current: false },
//      - Sub Menu { name: "Business", href: "/news/category/business", current: false },
//      - Sub Menu { name: "Markets", href: "/news/category/markets", current: false },
//      - Sub Menu { name: "Gaming", href: "/news/category/gaming", current: false },
//      - Sub Menu { name: "Opinion", href: "/news/category/opinion", current: false },
//      - Sub Menu { name: "Reviews", href: "/news/category/reviews", current: false },
//   - Main Menu: { name: "Skool", href: "/skool", current: false },
//   - Main Menu: { name: "Claps", href: "/claps", current: false },
//   - Main Menu: { name: "NFTs", href: "/nfts", current: false },
//   - Main Menu: { name: "Privacy", href: "/privacy", current: false },
//   - Main Menu: { name: "Terms", href: "/terms", current: false },
// ];
