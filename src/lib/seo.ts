import { site } from "../data/site";

export type SeoMeta = {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
};

export function getCanonicalUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, site.baseUrl).toString();
}

export function getSeoMeta(path: string, customMeta: SeoMeta = {}) {
  return {
    title: site.title,
    description: site.description,
    image: site.image,
    type: "website",
    canonicalUrl: getCanonicalUrl(path),
    ...Object.fromEntries(
      Object.entries(customMeta).filter(([, value]) => value !== undefined),
    ),
  };
}
