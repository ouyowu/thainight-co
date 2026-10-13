import type { AffiliateKey } from "@/lib/affiliates";
import { demoGuides, type DemoCity, type DemoGuide } from "@/lib/demo-guides";
import {
  bangkokAreas,
  bangkokGuides,
  chiangMaiGuides,
  pattayaAreas,
  pattayaGuides,
  phuketGuides,
} from "@/lib/guides";

const HUBS = {
  "/bangkok/": { city: "Bangkok" as const, links: [...bangkokGuides, ...bangkokAreas] },
  "/pattaya/": { city: "Pattaya" as const, links: [...pattayaGuides, ...pattayaAreas] },
  "/phuket/": { city: "Phuket" as const, links: [...phuketGuides] },
  "/chiang-mai/": { city: "Chiang Mai" as const, links: [...chiangMaiGuides] },
};

const TONE: Record<DemoCity, string> = {
  Bangkok: "#1c2430",
  Pattaya: "#243044",
  Phuket: "#16343a",
  "Chiang Mai": "#3a2e22",
};

const HOTELS: { prefix: string; city: DemoCity; link: AffiliateKey; label: string }[] = [
  { prefix: "/bangkok/", city: "Bangkok", link: "hotelBangkok", label: "Search Bangkok hotels" },
  { prefix: "/pattaya/", city: "Pattaya", link: "hotelPattaya", label: "Search Pattaya hotels" },
  { prefix: "/phuket/", city: "Phuket", link: "hotelPhuket", label: "Search Phuket hotels" },
  { prefix: "/chiang-mai/", city: "Chiang Mai", link: "hotelChiangMai", label: "Search Chiang Mai hotels" },
];

const HUB_PATHS = new Set(Object.keys(HUBS));

export function isCityHub(path: string): path is keyof typeof HUBS {
  return path in HUBS;
}

export function cityListingCards(path: string): DemoGuide[] {
  const hub = HUBS[path as keyof typeof HUBS];
  if (!hub) return [];
  return hub.links.map((link) => {
    const found = demoGuides.find((guide) => guide.href === link.href);
    if (found) return found;
    return {
      href: link.href,
      title: link.label,
      city: hub.city,
      category: "Guides",
      description: "",
      tone: TONE[hub.city],
    };
  });
}

export function cityHotelFor(path: string) {
  return HOTELS.find((hotel) => path.startsWith(hotel.prefix)) ?? null;
}

export function relatedGuides(path: string): DemoGuide[] {
  const hotel = cityHotelFor(path);
  const others = demoGuides.filter((guide) => guide.href !== path && !HUB_PATHS.has(guide.href));
  const same = hotel ? others.filter((guide) => guide.city === hotel.city) : others;
  const extra = others.filter((guide) => !same.includes(guide));
  return [...same, ...extra].slice(0, 3);
}
