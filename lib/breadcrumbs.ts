import { SITE_URL } from "@/lib/site";

const LABELS: Record<string, string> = {
  bangkok: "Bangkok",
  pattaya: "Pattaya",
  "first-timer": "First-timer",
  faq: "FAQ",
  "getting-around": "Getting around",
  airport: "Airport",
  "night-activities": "Night activities",
  "rooftop-bars": "Rooftop bars",
  "muay-thai": "Muay Thai",
  "dinner-cruise": "Dinner cruise",
  "night-markets": "Night markets",
  "ladies-night": "Ladies night",
  "bar-types": "Bar types",
  "hotels-nana-asok": "Where to stay",
  "hotels-walking-street": "Where to stay",
  areas: "Areas",
  "soi-11": "Soi 11",
  "khao-san": "Khao San",
  patpong: "Patpong",
  "rca-thonglor": "RCA & Thonglor",
  "one-night-plan": "One-night plans",
  prices: "Prices",
  tonight: "Tonight",
  "bangkok-to-pattaya": "Bangkok to Pattaya",
  "cabaret-shows": "Cabaret shows",
  "walking-street": "Walking Street",
  "jomtien-beach-road": "Jomtien Beach Road",
  "soi-buakhao": "Soi Buakhao",
  "tree-town": "Tree Town",
  scams: "Scams",
  budgets: "Budgets",
  cash: "Cash",
  safety: "Safety",
  about: "About",
  disclaimer: "Disclaimer",
  "affiliate-disclosure": "Affiliate disclosure",
};

export type Crumb = { name: string; url: string };

export function breadcrumbsFor(path: string): Crumb[] {
  const crumbs: Crumb[] = [{ name: "Home", url: `${SITE_URL}/` }];
  if (path === "/") return crumbs;
  const parts = path.split("/").filter(Boolean);
  let acc = "";
  for (const part of parts) {
    acc += `/${part}`;
    crumbs.push({
      name: LABELS[part] ?? part.replace(/-/g, " "),
      url: `${SITE_URL}${acc}/`,
    });
  }
  return crumbs;
}
