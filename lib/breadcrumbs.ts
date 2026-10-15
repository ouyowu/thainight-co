import { SITE_URL } from "@/lib/site";

const LABELS: Record<string, string> = {
  bangkok: "Bangkok",
  pattaya: "Pattaya",
  "chiang-mai": "Chiang Mai",
  phuket: "Phuket",
  thailand: "Thailand",
  "koh-samui": "Koh Samui",
  "jodd-fairs-vs-asiatique": "Jodd Fairs vs Asiatique",
  songkran: "Songkran",
  "alcohol-ban-days-2026": "Alcohol ban days 2026",
  "esim-for-tourists": "Tourist eSIM",
  "bangla-road": "Bangla Road",
  "beach-clubs": "Beach clubs",
  "simon-cabaret": "Simon Cabaret",
  "airport-to-patong-taxi-price": "Airport to Patong taxi",
  "nimman-nightlife": "Nimman",
  "old-city-nightlife": "Old City & riverside",
  "calypso-cabaret": "Calypso Cabaret",
  "airport-to-sukhumvit-taxi-price": "Airport to Sukhumvit taxi",
  "don-mueang-to-sukhumvit-taxi-price": "Don Mueang to Sukhumvit taxi",
  "max-muay-thai-stadium": "Max Muay Thai",
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
  "where-to-stay": "Where to stay",
  "luxury-hotels": "Luxury hotels",
  "design-hotels": "Design hotels",
  "couples-hotels": "Hotels for couples",
  "beachfront-resorts": "Beachfront resorts",
  "pool-villas": "Pool villas",
  "boutique-hotels": "Boutique hotels",
  "hotels-nana-asok": "Sukhumvit hotels",
  "hotels-walking-street": "Walking Street hotels",
  areas: "Areas",
  "soi-11": "Soi 11",
  "khao-san": "Khao San",
  patpong: "Patpong",
  "rca-thonglor": "RCA & Thonglor",
  "rca-clubs": "RCA clubs",
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
