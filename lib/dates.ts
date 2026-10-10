/** Per-route last-modified dates (YYYY-MM-DD). Used by sitemap and PageShell JSON-LD. */

export const PAGE_MODIFIED: Record<string, string> = {
  "/": "2026-10-10",
  "/bangkok/": "2026-10-10",
  "/bangkok/first-timer/": "2026-10-10",
  "/bangkok/faq/": "2026-10-10",
  "/bangkok/getting-around/": "2026-10-09",
  "/bangkok/airport/": "2026-10-09",
  "/bangkok/night-activities/": "2026-10-10",
  "/bangkok/rooftop-bars/": "2026-10-10",
  "/bangkok/muay-thai/": "2026-10-10",
  "/bangkok/dinner-cruise/": "2026-10-10",
  "/bangkok/night-markets/": "2026-10-10",
  "/bangkok/ladies-night/": "2026-10-10",
  "/bangkok/bar-types/": "2026-10-10",
  "/bangkok/hotels-nana-asok/": "2026-10-10",
  "/bangkok/areas/": "2026-10-10",
  "/bangkok/areas/soi-11/": "2026-10-10",
  "/bangkok/areas/khao-san/": "2026-10-10",
  "/bangkok/areas/patpong/": "2026-10-10",
  "/bangkok/areas/rca-thonglor/": "2026-10-10",
  "/bangkok/one-night-plan/": "2026-10-10",
  "/bangkok/prices/": "2026-10-10",
  "/bangkok/tonight/": "2026-10-10",
  "/pattaya/": "2026-10-10",
  "/pattaya/first-timer/": "2026-10-10",
  "/pattaya/faq/": "2026-10-10",
  "/pattaya/getting-around/": "2026-10-09",
  "/pattaya/airport/": "2026-10-10",
  "/pattaya/bangkok-to-pattaya/": "2026-10-10",
  "/pattaya/night-activities/": "2026-10-10",
  "/pattaya/cabaret-shows/": "2026-10-10",
  "/pattaya/bar-types/": "2026-10-10",
  "/pattaya/hotels-walking-street/": "2026-10-10",
  "/pattaya/areas/": "2026-10-10",
  "/pattaya/areas/walking-street/": "2026-10-10",
  "/pattaya/areas/jomtien-beach-road/": "2026-10-10",
  "/pattaya/areas/soi-buakhao/": "2026-10-10",
  "/pattaya/areas/tree-town/": "2026-10-10",
  "/pattaya/one-night-plan/": "2026-10-10",
  "/pattaya/prices/": "2026-10-10",
  "/pattaya/tonight/": "2026-10-10",
  "/scams/": "2026-10-10",
  "/budgets/": "2026-10-10",
  "/cash/": "2026-10-09",
  "/prices/": "2026-10-10",
  "/safety/": "2026-10-10",
  "/about/": "2026-10-10",
  "/disclaimer/": "2026-10-10",
  "/affiliate-disclosure/": "2026-10-10",
};

export function lastModifiedIso(path: string): string {
  return PAGE_MODIFIED[path] ?? "2026-10-10";
}

export function lastModifiedDate(path: string): Date {
  return new Date(`${lastModifiedIso(path)}T00:00:00Z`);
}
