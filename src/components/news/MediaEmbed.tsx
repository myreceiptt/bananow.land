import Link from "next/link";

type MediaEmbedProps = {
  url: string;
};

type EmbedData =
  | {
      type: "iframe";
      provider: string;
      src: string;
    }
  | {
      type: "card";
      provider: string;
      href: string;
    };

function getYouTubeId(url: URL) {
  if (url.hostname === "youtu.be") {
    return url.pathname.split("/").filter(Boolean)[0];
  }

  if (!url.hostname.endsWith("youtube.com")) {
    return null;
  }

  if (url.pathname === "/watch") {
    return url.searchParams.get("v");
  }

  const pathParts = url.pathname.split("/").filter(Boolean);
  if (pathParts[0] === "shorts" || pathParts[0] === "embed") {
    return pathParts[1];
  }

  return null;
}

function getVimeoId(url: URL) {
  if (url.hostname === "vimeo.com") {
    return url.pathname.split("/").filter(Boolean)[0];
  }

  if (url.hostname === "player.vimeo.com") {
    const pathParts = url.pathname.split("/").filter(Boolean);
    if (pathParts[0] === "video") {
      return pathParts[1];
    }
  }

  return null;
}

function getEmbedData(rawUrl: string): EmbedData {
  const url = new URL(rawUrl);
  const hostname = url.hostname.replace(/^www\./, "");

  const youtubeId = getYouTubeId(url);
  if (youtubeId) {
    return {
      type: "iframe",
      provider: "YouTube",
      src: `https://www.youtube.com/embed/${youtubeId}`,
    };
  }

  const vimeoId = getVimeoId(url);
  if (vimeoId) {
    return {
      type: "iframe",
      provider: "Vimeo",
      src: `https://player.vimeo.com/video/${vimeoId}`,
    };
  }

  if (hostname === "instagram.com") {
    return { type: "card", provider: "Instagram", href: rawUrl };
  }

  if (hostname === "facebook.com") {
    return { type: "card", provider: "Facebook", href: rawUrl };
  }

  if (hostname === "x.com" || hostname === "twitter.com") {
    return { type: "card", provider: "X", href: rawUrl };
  }

  return { type: "card", provider: "External Media", href: rawUrl };
}

export function isStandaloneUrl(value: string) {
  return /^https?:\/\/\S+$/.test(value);
}

export default function MediaEmbed({ url }: MediaEmbedProps) {
  const embed = getEmbedData(url);

  if (embed.type === "iframe") {
    return (
      <div className="overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="relative aspect-video w-full">
          <iframe
            src={embed.src}
            title={`${embed.provider} media embed`}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900">
      <p className="font-judul text-xl font-bold text-neutral-900 dark:text-white">
        {embed.provider}
      </p>
      <p className="mt-2 wrap-break-word text-sm text-dark-now dark:text-white-now">
        {embed.href}
      </p>
      <Link
        href={embed.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block rounded-full bg-dark-now px-5 py-2 text-sm font-medium text-white hover:bg-green-now hover:text-white dark:bg-white-now dark:text-neutral-900 dark:hover:bg-yellow-now dark:hover:text-white"
      >
        Open on {embed.provider}
      </Link>
    </div>
  );
}
