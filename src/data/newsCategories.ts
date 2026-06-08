export type NewsCategory = {
  name: string;
  slug: string;
  description: string;
};

export const newsCategories: NewsCategory[] = [
  {
    name: "LAND",
    slug: "land",
    description:
      "Direction, identity, documents, status, and major development of BANANOW LAND.",
  },
  {
    name: "Technology",
    slug: "technology",
    description:
      "General technology that affects life, creativity, community, work, and the future.",
  },
  {
    name: "Web3",
    slug: "web3",
    description:
      "Blockchain, NFT, wallet, crypto culture, decentralized participation, ownership, verification, and on-chain activity.",
  },
  {
    name: "Arts",
    slug: "arts",
    description:
      "Art, visual culture, creative process, creator economy, and creative expression.",
  },
  {
    name: "Community",
    slug: "community",
    description:
      "Community stories, social relations, public participation, movement, and BANANOW social life.",
  },
  {
    name: "Education",
    slug: "education",
    description:
      "Learning, literacy, skills, workshops, Skool Now, and knowledge transfer.",
  },
  {
    name: "Business",
    slug: "business",
    description:
      "Business models, collaboration, brand growth, partners, sponsors, operations, and project sustainability.",
  },
  {
    name: "Markets",
    slug: "markets",
    description:
      "Market movement, economic context, and trends that affect technology, Web3, creative economy, or BANANOW.",
  },
  {
    name: "Gaming",
    slug: "gaming",
    description:
      "Games, play culture, esports, blockchain gaming, and games as culture.",
  },
  {
    name: "Opinion",
    slug: "opinion",
    description:
      "Point of view, essay, critique, reflection, trend interpretation, or BANANOW editorial stance.",
  },
  {
    name: "Reviews",
    slug: "reviews",
    description:
      "Reviews of products, platforms, tools, projects, collections, or user experiences.",
  },
];

export function getNewsCategoryByName(name: string) {
  return newsCategories.find((category) => category.name === name);
}

export function getNewsCategoryBySlug(slug: string) {
  return newsCategories.find((category) => category.slug === slug);
}
