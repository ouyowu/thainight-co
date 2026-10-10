/** Licensed Wikimedia Commons stills. Credit required (CC BY / BY-SA). */

export type Photo = {
  src: string;
  alt: string;
  credit: string;
  href: string;
};

export const photos = {
  rooftop: {
    src: "/images/rooftop.webp",
    alt: "Bangkok city lights at night seen from a rooftop bar",
    credit: "Jorge Láscar / Wikimedia Commons (CC BY 2.0)",
    href: "https://commons.wikimedia.org/wiki/File:Lascar_Bangkok_at_night_from_Moon_Bar_at_Vertigo_(4509100955).jpg",
  },
  muayThai: {
    src: "/images/muay-thai.webp",
    alt: "Muay Thai fighter in the corner between rounds at Lumpinee Stadium, Bangkok",
    credit: "Peerapong Prasutr / Wikimedia Commons (CC BY-SA 4.0)",
    href: "https://commons.wikimedia.org/wiki/File:Bangkok_Lumpinee_Boxing_Stadium_4.jpg",
  },
  cabaret: {
    src: "/images/cabaret.webp",
    alt: "Performer in a gold revue costume on stage at Alcazar Cabaret, Pattaya",
    credit: "Andyindia / Wikimedia Commons (CC BY-SA 3.0)",
    href: "https://commons.wikimedia.org/wiki/File:Alkazar_show1.jpg",
  },
  taxiMeter: {
    src: "/images/taxi-meter.webp",
    alt: "Green-and-yellow Bangkok taxi with a taxi-meter roof sign",
    credit: "Ilya Plekhanov / Wikimedia Commons (CC BY-SA 4.0)",
    href: "https://commons.wikimedia.org/wiki/File:Taxi-meter_in_Bangkok_10.jpg",
  },
  khaoSan: {
    src: "/images/khao-san.webp",
    alt: "Khao San Road at night with street stalls and pedestrians",
    credit: "Kevin Poh / Wikimedia Commons (CC BY 2.0)",
    href: "https://commons.wikimedia.org/wiki/File:Khao_San_Road_at_night_by_kevinpoh.jpg",
  },
  patpong: {
    src: "/images/patpong.webp",
    alt: "Covered stall at Patpong Night Bazaar selling bags and jewellery",
    credit: "nakhon100 / Wikimedia Commons (CC BY 2.0)",
    href: "https://commons.wikimedia.org/wiki/File:Patpong_Night_Bazaar_(5828832361).jpg",
  },
  soi11: {
    src: "/images/soi-11.webp",
    alt: "Tuk-tuks lined up on Sukhumvit Soi 11 at night",
    credit: "Mark Fischer / Wikimedia Commons (CC BY-SA 2.0)",
    href: "https://commons.wikimedia.org/wiki/File:Sukhumvit_Soi_11_tuktuks.jpg",
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
    alt: "Sunset over the sand and sea at Jomtien Beach",
    credit: "Slyronit / Wikimedia Commons (CC BY-SA 4.0)",
    href: "https://commons.wikimedia.org/wiki/File:Jomtien_beach_at_sunset.jpg",
  },
  centralPattaya: {
    src: "/images/central-pattaya.webp",
    alt: "CentralFestival mall lit at night on Pattaya Beach Road",
    credit: "Arthur Taksin / Wikimedia Commons (CC BY 4.0)",
    href: "https://commons.wikimedia.org/wiki/File:CentralFestival_Pattaya_Beach_back.jpg",
  },
} as const satisfies Record<string, Photo>;
