import { execFileSync } from "node:child_process";

/**
 * Per-route last-modified dates (YYYY-MM-DD). Used by sitemap and PageShell JSON-LD.
 * When this build has a full git history, lastmod is that page file's last commit
 * date. A missing git binary or a shallow clone keeps the map below so the sitemap
 * still builds and does not publish a truncated history as if it were complete.
 */

export const PAGE_MODIFIED: Record<string, string> = {
  "/": "2026-10-10",
  "/bangkok/": "2026-10-15",
  "/bangkok/first-timer/": "2026-10-15",
  "/bangkok/faq/": "2026-10-10",
  "/bangkok/getting-around/": "2026-10-09",
  "/bangkok/airport/": "2026-10-13",
  "/bangkok/night-activities/": "2026-10-10",
  "/bangkok/rooftop-bars/": "2026-10-10",
  "/bangkok/muay-thai/": "2026-10-10",
  "/bangkok/dinner-cruise/": "2026-10-10",
  "/bangkok/night-markets/": "2026-10-10",
  "/bangkok/ladies-night/": "2026-10-10",
  "/bangkok/bar-types/": "2026-10-10",
  "/bangkok/where-to-stay/": "2026-10-15",
  "/bangkok/luxury-hotels/": "2026-10-14",
  "/bangkok/design-hotels/": "2026-10-14",
  "/bangkok/couples-hotels/": "2026-10-14",
  "/bangkok/hotels-nana-asok/": "2026-10-13",
  "/bangkok/areas/": "2026-10-15",
  "/bangkok/areas/soi-11/": "2026-10-15",
  "/bangkok/areas/khao-san/": "2026-10-15",
  "/bangkok/areas/patpong/": "2026-10-15",
  "/bangkok/areas/rca-thonglor/": "2026-10-15",
  "/bangkok/rca-clubs/": "2026-10-15",
  "/bangkok/one-night-plan/": "2026-10-10",
  "/bangkok/prices/": "2026-10-15",
  "/bangkok/tonight/": "2026-10-10",
  "/pattaya/": "2026-10-15",
  "/pattaya/first-timer/": "2026-10-10",
  "/pattaya/faq/": "2026-10-10",
  "/pattaya/getting-around/": "2026-10-09",
  "/pattaya/airport/": "2026-10-10",
  "/pattaya/bangkok-to-pattaya/": "2026-10-10",
  "/pattaya/night-activities/": "2026-10-13",
  "/pattaya/night-markets/": "2026-10-13",
  "/pattaya/max-muay-thai-stadium/": "2026-10-13",
  "/pattaya/cabaret-shows/": "2026-10-10",
  "/pattaya/bar-types/": "2026-10-10",
  "/pattaya/where-to-stay/": "2026-10-15",
  "/pattaya/luxury-hotels/": "2026-10-14",
  "/pattaya/beachfront-resorts/": "2026-10-14",
  "/pattaya/couples-hotels/": "2026-10-14",
  "/pattaya/hotels-walking-street/": "2026-10-13",
  "/pattaya/areas/": "2026-10-15",
  "/pattaya/areas/walking-street/": "2026-10-15",
  "/pattaya/areas/jomtien-beach-road/": "2026-10-15",
  "/pattaya/areas/soi-buakhao/": "2026-10-15",
  "/pattaya/areas/tree-town/": "2026-10-15",
  "/pattaya/one-night-plan/": "2026-10-10",
  "/pattaya/prices/": "2026-10-15",
  "/pattaya/tonight/": "2026-10-10",
  "/bangkok/calypso-cabaret/": "2026-10-10",
  "/bangkok/airport-to-sukhumvit-taxi-price/": "2026-10-10",
  "/bangkok/don-mueang-to-sukhumvit-taxi-price/": "2026-10-13",
  "/chiang-mai/": "2026-10-13",
  "/chiang-mai/first-timer/": "2026-10-15",
  "/chiang-mai/where-to-stay/": "2026-10-14",
  "/chiang-mai/luxury-hotels/": "2026-10-14",
  "/chiang-mai/boutique-hotels/": "2026-10-14",
  "/chiang-mai/couples-hotels/": "2026-10-14",
  "/chiang-mai/night-markets/": "2026-10-10",
  "/chiang-mai/nimman-nightlife/": "2026-10-10",
  "/chiang-mai/old-city-nightlife/": "2026-10-10",
  "/phuket/": "2026-10-13",
  "/phuket/first-timer/": "2026-10-14",
  "/phuket/prices/": "2026-10-15",
  "/phuket/getting-around/": "2026-10-14",
  "/phuket/where-to-stay/": "2026-10-14",
  "/phuket/luxury-hotels/": "2026-10-14",
  "/phuket/pool-villas/": "2026-10-14",
  "/phuket/couples-hotels/": "2026-10-14",
  "/phuket/bangla-road/": "2026-10-10",
  "/phuket/beach-clubs/": "2026-10-10",
  "/phuket/simon-cabaret/": "2026-10-10",
  "/phuket/muay-thai/": "2026-10-10",
  "/phuket/night-markets/": "2026-10-10",
  "/phuket/airport-to-patong-taxi-price/": "2026-10-10",
  "/thailand/": "2026-10-14",
  "/thailand/alcohol-ban-days-2026/": "2026-10-14",
  "/thailand/esim-for-tourists/": "2026-10-14",
  "/scams/": "2026-10-15",
  "/budgets/": "2026-10-15",
  "/cash/": "2026-10-09",
  "/prices/": "2026-10-15",
  "/safety/": "2026-10-10",
  "/about/": "2026-10-10",
  "/disclaimer/": "2026-10-10",
  "/affiliate-disclosure/": "2026-10-10",
};

const FALLBACK_DATE = "2026-10-10";
const cache = new Map<string, string>();
let gitMode: "full" | "off" | null = null;

function git(args: string[]): string | null {
  try {
    return execFileSync("git", args, {
      cwd: process.cwd(),
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    return null;
  }
}

function gitDatesAvailable(): boolean {
  if (gitMode) return gitMode === "full";
  const inside = git(["rev-parse", "--is-inside-work-tree"]);
  const shallow = git(["rev-parse", "--is-shallow-repository"]);
  const sample = git(["log", "-1", "--format=%cs", "--", "app/page.tsx"]);
  gitMode = inside === "true" && shallow === "false" && /^\d{4}-\d{2}-\d{2}$/.test(sample ?? "") ? "full" : "off";
  return gitMode === "full";
}

function routeFile(path: string): string {
  if (path === "/") return "app/page.tsx";
  const clean = path.endsWith("/") ? path : `${path}/`;
  return `app${clean}page.tsx`;
}

export function lastModifiedIso(path: string): string {
  const cached = cache.get(path);
  if (cached) return cached;
  let date: string | null = null;
  if (gitDatesAvailable()) {
    const out = git(["log", "-1", "--format=%cs", "--", routeFile(path)]);
    if (out && /^\d{4}-\d{2}-\d{2}$/.test(out)) date = out;
  }
  const value = date ?? PAGE_MODIFIED[path] ?? FALLBACK_DATE;
  cache.set(path, value);
  return value;
}

export function lastModifiedDate(path: string): Date {
  return new Date(`${lastModifiedIso(path)}T00:00:00Z`);
}
