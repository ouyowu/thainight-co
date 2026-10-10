function affiliateHref(value: string | undefined): string {
  const trimmed = value?.trim();
  return trimmed || "#";
}

export const affiliates = {
  hotelBangkok: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_HOTEL_BANGKOK),
  hotelPattaya: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_HOTEL_PATTAYA),
  hotelSoiCowboy: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_HOTEL_SOI_COWBOY),
  hotelNanaPlaza: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_HOTEL_NANA_PLAZA),
  hotelWalkingStreet: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_HOTEL_WALKING_STREET),
  hotelSoi6: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_HOTEL_SOI_6),
  hotelLkMetro: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_HOTEL_LK_METRO),
  klook: affiliateHref(process.env.NEXT_PUBLIC_AFFILIATE_KLOOK),
} as const;
