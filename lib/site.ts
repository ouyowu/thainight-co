export const SITE_URL = "https://thainight.co";
export const SITE_NAME = "Thai Night";
export const LAST_UPDATED = "October 2026";

export const navLinks = [
  { href: "/bangkok/", label: "Bangkok" },
  { href: "/pattaya/", label: "Pattaya" },
  { href: "/prices/", label: "Prices" },
  { href: "/scams/", label: "Scams" },
] as const;

export const tonightLinks = [
  { href: "/bangkok/tonight/", label: "Bangkok" },
  { href: "/pattaya/tonight/", label: "Pattaya" },
] as const;

export const routes = [
  "/",
  "/bangkok/",
  "/bangkok/first-timer/",
  "/bangkok/areas/",
  "/bangkok/areas/nana-plaza/",
  "/bangkok/areas/nana-plaza/floors/",
  "/bangkok/areas/soi-cowboy/",
  "/bangkok/areas/soi-cowboy/bars/",
  "/bangkok/areas/soi-11/",
  "/bangkok/areas/patpong/",
  "/bangkok/areas/rca-thonglor/",
  "/bangkok/one-night-plan/",
  "/bangkok/prices/",
  "/bangkok/tonight/",
  "/pattaya/",
  "/pattaya/first-timer/",
  "/pattaya/areas/",
  "/pattaya/areas/walking-street/",
  "/pattaya/areas/walking-street/venues/",
  "/pattaya/areas/soi-6/",
  "/pattaya/areas/soi-buakhao/",
  "/pattaya/areas/tree-town/",
  "/pattaya/areas/lk-metro/",
  "/pattaya/one-night-plan/",
  "/pattaya/prices/",
  "/pattaya/tonight/",
  "/scams/",
  "/budgets/",
  "/prices/",
  "/safety/",
  "/about/",
  "/disclaimer/",
] as const;
