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
