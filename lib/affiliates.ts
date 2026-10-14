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

/** Agoda partner hotel link: opens the city search with this hotel pinned first. */
function agodaHotel(hotelId: string): string {
  return `https://www.agoda.com/partners/partnersearch.aspx?cid=1969005&hid=${hotelId}&hl=en-us`;
}

// Hotel ids from Agoda's own search suggestions, 14 October 2026. Aman Nai Lert is not sold on Agoda.
const AGODA_HOTEL = {
  peninsulaBangkok: agodaHotel("10715"),
  mandarinOrientalBangkok: agodaHotel("10713"),
  fourSeasonsBangkok: agodaHotel("8634385"),
  siamHotelBangkok: agodaHotel("296765"),
  capellaBangkok: agodaHotel("16997294"),
  pillarsSuitesBangkok: agodaHotel("1266554"),
  fourSeasonsChiangMai: agodaHotel("10742"),
  pillarsHouseChiangMai: agodaHotel("288296"),
  nimmanMaiChiangMai: agodaHotel("276670"),
  hiltonPattaya: agodaHotel("241427"),
  royalCliffGrandPattaya: agodaHotel("197206"),
  capeDaraPattaya: agodaHotel("295589"),
  keemalaPhuket: agodaHotel("3072111"),
  trisaraPhuket: agodaHotel("3073929"),
};

/** Klook affiliate site "Thai Night" (AID 139170). Klook tracks any klook.com URL that carries aid. */
function klook(path: string): string {
  const url = new URL(`https://www.klook.com/en-US${path}`);
  url.searchParams.set("aid", "139170");
  return url.toString();
}

// Activity ids checked on klook.com, 14 October 2026.
const KLOOK = {
  muayThaiBangkok: klook("/activity/94126-muay-thai-boxing-match-rajadamnern-lumpinee-bangkok/"),
  muayThaiPattaya: klook("/activity/80757-max-muay-thai-pattaya/"),
  muayThaiPhuket: klook("/activity/80745-bangla-boxing-stadium-phuket/"),
  cabaretBangkok: klook("/activity/361-calypso-cabaret-show-bangkok/"),
  cabaretPattaya: klook("/activity/336-tiffanys-show-pattaya/"),
  alcazarPattaya: klook("/activity/2321-alcazar-cabaret-pattaya/"),
  cabaretPhuket: klook("/activity/292-simon-cabaret-show-phuket/"),
  // Search pages for "compare" buttons; both result lists hold only cruises / rooftop bars.
  dinnerCruise: klook("/search/result/?query=chao phraya dinner cruise"),
  rooftopBangkok: klook("/search/result/?query=bangkok rooftop bar"),
  // Covers pickups at Suvarnabhumi (BKK) and Don Mueang (DMK).
  transferBangkokPattaya: klook("/activity/30353-private-city-transfers-bangkok-pattaya-ayutthaya-hua-hin/"),
  airportTransfers: klook("/airport-transfers/"),
  esim: klook("/activity/110438-thailand-esim-high-speed-internet-qr-code-in-the-voucher/"),
};

export const affiliates = {
  hotelBangkok: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_HOTEL_BANGKOK, AGODA_BANGKOK),
  hotelPattaya: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_HOTEL_PATTAYA, AGODA_PATTAYA),
  hotelSukhumvit: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_HOTEL_SUKHUMVIT, AGODA_BANGKOK),
  hotelWalkingStreet: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_HOTEL_WALKING_STREET, AGODA_PATTAYA),
  hotelChiangMai: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_HOTEL_CHIANG_MAI, AGODA_CHIANG_MAI),
  hotelPhuket: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_HOTEL_PHUKET, AGODA_PHUKET),
  cabaretPhuket: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_CABARET_PHUKET, KLOOK.cabaretPhuket),
  muayThaiPhuket: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_MUAY_THAI_PHUKET, KLOOK.muayThaiPhuket),
  transferPhuketAirport: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_TRANSFER_PHUKET_AIRPORT, KLOOK.airportTransfers),
  hotelBeachRoad: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_HOTEL_BEACH_ROAD, AGODA_PATTAYA),
  klook: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_KLOOK, KLOOK.airportTransfers),
  muayThaiBangkok: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_MUAY_THAI_BANGKOK, KLOOK.muayThaiBangkok),
  muayThaiPattaya: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_MUAY_THAI_PATTAYA, KLOOK.muayThaiPattaya),
  cabaretBangkok: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_CABARET_BANGKOK, KLOOK.cabaretBangkok),
  cabaretPattaya: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_CABARET_PATTAYA, KLOOK.cabaretPattaya),
  alcazarPattaya: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_ALCAZAR_PATTAYA, KLOOK.alcazarPattaya),
  dinnerCruise: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_DINNER_CRUISE, KLOOK.dinnerCruise),
  rooftopBangkok: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_ROOFTOP_BANGKOK, KLOOK.rooftopBangkok),
  transferBangkokPattaya: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_TRANSFER_BKK_PATTAYA, KLOOK.transferBangkokPattaya),
  esim: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_ESIM, KLOOK.esim),
  ...AGODA_HOTEL,
} as const;

export type AffiliateKey = keyof typeof affiliates;

/** True when a real affiliate URL is configured (not empty / placeholder). */
export function hasAffiliate(href: string | undefined): href is string {
  return Boolean(href && href !== "#");
}
