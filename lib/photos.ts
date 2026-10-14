/**
 * Site photos. Two sources:
 * - Unsplash / Pexels: free licence, no credit required, but we credit anyway.
 *   These carry a thainight.co stamp bottom-right.
 * - Wikimedia Commons (CC BY / BY-SA): credit is required by the licence, so the
 *   photographer stays named and the href points at the file page. No stamp: the
 *   licences forbid implying the work is ours.
 */

export type Photo = {
  src: string;
  alt: string;
  credit: string;
  href: string;
};

export const photos = {
  rooftop: {
    src: "/images/rooftop.webp",
    alt: "Rooftop bar at sunset in Bangkok, city lights below the terrace",
    credit: "Florian Peeters / Unsplash",
    href: "https://unsplash.com/@fpeeters",
  },
  muayThai: {
    src: "/images/muay-thai.webp",
    alt: "Muay Thai fighters in the ring at a Bangkok stadium, crowd behind",
    credit: "Mateusz Turbiński / Pexels",
    href: "https://www.pexels.com/photo/2607922/",
  },
  cabaret: {
    src: "/images/cabaret.webp",
    alt: "Performer in a gold revue costume on stage at Alcazar Cabaret, Pattaya",
    credit: "Andyindia / Wikimedia Commons (CC BY-SA 3.0)",
    href: "https://commons.wikimedia.org/wiki/File:Alkazar_show1.jpg",
  },
  taxiMeter: {
    src: "/images/taxi-meter.webp",
    alt: "Green-and-yellow and all-yellow metered taxis parked on a Bangkok street",
    credit: "Tanawin Wichit / Unsplash",
    href: "https://unsplash.com/@rektplorer64",
  },
  khaoSan: {
    src: "/images/khao-san.webp",
    alt: "Neon bar and taco signs over the crowd on Khao San Road at night",
    credit: "Waranont (Joe) / Unsplash",
    href: "https://unsplash.com/@tricell1991",
  },
  patpong: {
    src: "/images/patpong.webp",
    alt: "Lit food stall and Thai signage on a Bangkok street at night",
    credit: "Pexels",
    href: "https://www.pexels.com/photo/12681089/",
  },
  soi11: {
    src: "/images/soi-11.webp",
    alt: "Tuk-tuks under neon signs on a Bangkok street at night",
    credit: "Mario Scheibl / Unsplash",
    href: "https://unsplash.com/@aguyonecam",
  },
  rca: {
    src: "/images/rca.webp",
    alt: "Entrance of RCA Plaza on Royal City Avenue, Bangkok",
    credit: "Globe-trotter / Wikimedia Commons (CC BY-SA 3.0)",
    href: "https://commons.wikimedia.org/wiki/File:RCA_Plaza_in_Huai_Khwang_District,_Bangkok,_Thailand.jpg",
  },
  walkingStreet: {
    src: "/images/walking-street.webp",
    alt: "Crowds on Walking Street, Pattaya, at night under shop and restaurant signs",
    credit: "Vyacheslav Argenberg / Wikimedia Commons (CC BY 4.0)",
    href: "https://commons.wikimedia.org/wiki/File:Pattaya,_Walking-Street_at_night,_Thailand.jpg",
  },
  jomtien: {
    src: "/images/jomtien.webp",
    alt: "Pattaya Bay from above: the beach road curve and hotel towers",
    credit: "Ryutaro Uozumi / Unsplash",
    href: "https://unsplash.com/@ryutarouozumi",
  },
  centralPattaya: {
    src: "/images/central-pattaya.webp",
    alt: "Pattaya hotel towers lit up at night above the bay",
    credit: "Pexels",
    href: "https://www.pexels.com/photo/30594686/",
  },
} as const satisfies Record<string, Photo>;
