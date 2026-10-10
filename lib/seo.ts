import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const OG_IMAGE = {
  url: `${SITE_URL}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: `${SITE_NAME} – Practical Nightlife Guides for Bangkok & Pattaya`,
};

export function pageMeta(title: string, description: string, path: string): Metadata {
  const url = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: path === "/" ? "website" : "article",
      siteName: SITE_NAME,
      url,
      locale: "en_US",
      title,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
