import type { MetadataRoute } from "next";
import { lastModifiedDate } from "@/lib/dates";
import { routes, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: lastModifiedDate(path),
    changeFrequency: path === "/" || path.endsWith("/tonight/") ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.endsWith("/tonight/") ? 0.5 : 0.7,
  }));
}
