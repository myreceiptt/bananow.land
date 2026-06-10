import { ctaLinks } from "./site";

export type FooterLink = {
  name: string;
  href: string;
  target?: string;
};

export const footerSocialLinks = [
  {
    name: "discord",
    title: "Discord server of BANANOW",
    href: ctaLinks.discord,
    icon: "discord",
  },
  {
    name: "twitter",
    title: "X - Twitter account of BANANOW",
    href: ctaLinks.twitter,
    icon: "twitter",
  },
  {
    name: "instagram",
    title: "Instagram profile of BANANOW",
    href: ctaLinks.instagram,
    icon: "instagram",
  },
  {
    name: "youtube",
    title: "YouTube channel of BANANOW",
    href: ctaLinks.youtube,
    icon: "youtube",
  },
] as const;

export const footerBananowLinks: FooterLink[] = [
  { name: "Home Page", href: "/" },
  { name: "The Features", href: "/#features" },
  { name: "The Crops", href: "/#brandproducts" },
  { name: "The Community", href: "/#theheads" },
  { name: "The Farmers", href: "/#farmers" },
  { name: "Some F.A.Q.", href: "/#faq" },
  { name: "The Embassy", href: "/#embassy" },
];

export const footerBrandLinks: FooterLink[] = [
  { name: "Na Now News", href: "/news/" },
  { name: "Skool Now", href: "/skool/" },
  { name: "Claps", href: "/claps/" },
  { name: "NFTs", href: "/nfts/" },
  { name: "Earlier Crops", href: "/oldbrands" },
];

export const footerLegalLinks: FooterLink[] = [
  // { name: "Be a Head Now", href: ctaLinks.beAHead, target: "_self" },
  { name: "The Green Print", href: ctaLinks.greenPrint, target: "_target" },
  { name: "Privacy Policy", href: "/privacy/", target: "_self" },
  { name: "Terms & Conditions", href: "/terms/", target: "_self" },
];
