import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export function pageMeta(title: string, description: string, path: string): Metadata {
  const url = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      siteName: SITE_NAME,
      url,
      locale: "en_US",
      title,
      description,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
