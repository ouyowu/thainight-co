function affiliateHref(value: string | undefined, fallback = ""): string {
  const trimmed = value?.trim();
  if (trimmed && trimmed !== "#") return trimmed;
  return fallback;
}

/**
 * Public Agoda partner search (Site ID 1969005).
 * Defaults are city-wide searches. A set NEXT_PUBLIC_AFFILIATE_HOTEL_* value replaces the default.
 * Neighborhood buttons use the city search: no area id was present on the live Agoda URL.
 */
function agodaCitySearch(cityId: string): string {
  return `https://www.agoda.com/partners/partnersearch.aspx?cid=1969005&city=${cityId}&hl=en-us`;
}

/** city=9395 is Bangkok. Confirmed partner redirect keeps cid=1969005. */
const AGODA_BANGKOK = agodaCitySearch("9395");
/** city=8584 from https://www.agoda.com/city/pattaya-th.html defaultSearchURL. */
const AGODA_PATTAYA = agodaCitySearch("8584");
/** city=16056 from https://www.agoda.com/city/phuket-th.html defaultSearchURL. */
const AGODA_PHUKET = agodaCitySearch("16056");
/** city=7401 from https://www.agoda.com/city/chiang-mai-th.html defaultSearchURL. */
const AGODA_CHIANG_MAI = agodaCitySearch("7401");

export const affiliates = {
  hotelBangkok: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_HOTEL_BANGKOK, AGODA_BANGKOK),
  hotelPattaya: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_HOTEL_PATTAYA, AGODA_PATTAYA),
  hotelSukhumvit: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_HOTEL_SUKHUMVIT, AGODA_BANGKOK),
  hotelWalkingStreet: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_HOTEL_WALKING_STREET, AGODA_PATTAYA),
  hotelChiangMai: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_HOTEL_CHIANG_MAI, AGODA_CHIANG_MAI),
  hotelPhuket: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_HOTEL_PHUKET, AGODA_PHUKET),
  cabaretPhuket: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_CABARET_PHUKET),
  muayThaiPhuket: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_MUAY_THAI_PHUKET),
  transferPhuketAirport: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_TRANSFER_PHUKET_AIRPORT),
  hotelBeachRoad: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_HOTEL_BEACH_ROAD, AGODA_PATTAYA),
  klook: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_KLOOK),
  // Activity / ticket deep links (Klook, GetYourGuide, etc.)
  muayThaiBangkok: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_MUAY_THAI_BANGKOK),
  muayThaiPattaya: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_MUAY_THAI_PATTAYA),
  cabaretBangkok: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_CABARET_BANGKOK),
  cabaretPattaya: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_CABARET_PATTAYA),
  dinnerCruise: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_DINNER_CRUISE),
  rooftopBangkok: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_ROOFTOP_BANGKOK),
  transferBangkokPattaya: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_TRANSFER_BKK_PATTAYA),
  esim: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_ESIM),
} as const;

export type AffiliateKey = keyof typeof affiliates;

/** True when a real affiliate URL is configured (not empty / placeholder). */
export function hasAffiliate(href: string | undefined): href is string {
  return Boolean(href && href !== "#");
}
