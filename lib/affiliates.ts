function affiliateHref(value: string | undefined): string {
  const trimmed = value?.trim();
  return trimmed || "";
}

export const affiliates = {
  hotelBangkok: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_HOTEL_BANGKOK),
  hotelPattaya: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_HOTEL_PATTAYA),
  hotelSukhumvit: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_HOTEL_SUKHUMVIT),
  hotelWalkingStreet: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_HOTEL_WALKING_STREET),
  hotelBeachRoad: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_HOTEL_BEACH_ROAD),
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
