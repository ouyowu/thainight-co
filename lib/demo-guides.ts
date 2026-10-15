import { photos } from "@/lib/photos";

export const demoCities = ["Bangkok", "Pattaya", "Phuket", "Chiang Mai"] as const;

export type DemoCity = (typeof demoCities)[number];

export type DemoGuide = {
  href: string;
  title: string;
  city: DemoCity;
  category: string;
  description: string;
  image?: keyof typeof photos;
  tone: string;
};

/** Short titles and descriptions already published on the guide pages. */
export const demoGuides: DemoGuide[] = [
  {
    href: "/bangkok/",
    title: "Bangkok nightlife guide",
    city: "Bangkok",
    category: "City guides",
    description:
      "Bangkok nightlife overview: rooftop bars, Soi 11, RCA and Thonglor clubs, Muay Thai, cabaret and night markets.",
    image: "rooftop",
    tone: "#1c2430",
  },
  {
    href: "/pattaya/",
    title: "Pattaya nightlife guide",
    city: "Pattaya",
    category: "City guides",
    description:
      "Pattaya nightlife overview: Walking Street, Soi Buakhao and Tree Town, cabaret shows, Muay Thai and night markets.",
    image: "walkingStreet",
    tone: "#243044",
  },
  {
    href: "/phuket/",
    title: "Phuket nightlife guide",
    city: "Phuket",
    category: "City guides",
    description:
      "Phuket nightlife overview: Bangla Road clubs in Patong, beach clubs, Simon Cabaret, Muay Thai and night markets.",
    tone: "#16343a",
  },
  {
    href: "/chiang-mai/",
    title: "Chiang Mai nightlife guide",
    city: "Chiang Mai",
    category: "City guides",
    description:
      "Chiang Mai nightlife overview: Nimman bars and clubs, Old City live music, riverside bars and the night markets.",
    tone: "#3a2e22",
  },
  {
    href: "/bangkok/rooftop-bars/",
    title: "Bangkok rooftop bars",
    city: "Bangkok",
    category: "Rooftops",
    description:
      "Bangkok rooftop bars compared: Sky Bar, Vertigo, Sky Beach, Octave, Spectrum and value picks near Asok and Nana.",
    image: "rooftop",
    tone: "#1c2430",
  },
  {
    href: "/bangkok/soi-11-rooftop-bars/",
    title: "Soi 11 rooftop bars",
    city: "Bangkok",
    category: "Rooftops",
    description:
      "Rooftop bars on and around Sukhumvit Soi 11 near BTS Nana: Above Eleven, Pastel, Spectrum, RedSquare and Belga.",
    image: "soi11",
    tone: "#243044",
  },
  {
    href: "/bangkok/sky-bar/",
    title: "Sky Bar dress code",
    city: "Bangkok",
    category: "Rooftops",
    description:
      "Sky Bar at lebua (State Tower): dress code rules, reservation deposits, what to expect on price and cheaper rooftops with similar views.",
    image: "rooftop",
    tone: "#2a2438",
  },
  {
    href: "/pattaya/cabaret-shows/",
    title: "Pattaya cabaret show tickets",
    city: "Pattaya",
    category: "Shows",
    description:
      "Pattaya cabaret show tickets: Tiffany’s and Alcazar seat prices, show times, which to choose and where to book.",
    image: "cabaret",
    tone: "#3a2430",
  },
  {
    href: "/pattaya/tiffany-show/",
    title: "Tiffany’s Show prices",
    city: "Pattaya",
    category: "Shows",
    description:
      "Tiffany’s Show Pattaya: ticket prices from mezzanine to VIP Diamond, show times, which seat to book and how to get there.",
    image: "cabaret",
    tone: "#3a2430",
  },
  {
    href: "/pattaya/alcazar-show/",
    title: "Alcazar Show prices",
    city: "Pattaya",
    category: "Shows",
    description:
      "Alcazar Cabaret Pattaya: VIP vs VVIP ticket prices, four daily show times and where to book without markup.",
    image: "cabaret",
    tone: "#3a2430",
  },
  {
    href: "/bangkok/calypso-cabaret/",
    title: "Calypso Cabaret tickets",
    city: "Bangkok",
    category: "Shows",
    description:
      "Calypso Cabaret at Asiatique: online vs walk-up ticket prices, dinner and cruise combos, show times and the free shuttle boat.",
    tone: "#2c2438",
  },
  {
    href: "/phuket/simon-cabaret/",
    title: "Simon Cabaret tickets",
    city: "Phuket",
    category: "Shows",
    description:
      "Simon Cabaret in Patong: ticket prices from about 800 THB, VIP vs regular seats and three nightly show times.",
    tone: "#1e3040",
  },
  {
    href: "/bangkok/night-markets/",
    title: "Bangkok night markets",
    city: "Bangkok",
    category: "Night markets",
    description:
      "Bangkok night markets: Jodd Fairs Ratchada, Asiatique, Rot Fai Srinakarin and Patpong. Current locations and usual days.",
    image: "patpong",
    tone: "#2a241c",
  },
  {
    href: "/chiang-mai/night-markets/",
    title: "Chiang Mai night markets",
    city: "Chiang Mai",
    category: "Night markets",
    description:
      "Sunday Walking Street, Wualai Saturday market, Night Bazaar, Chang Phueak and Chiang Mai Gate — days, hours and how to bargain.",
    tone: "#3a2e22",
  },
  {
    href: "/phuket/night-markets/",
    title: "Phuket night markets",
    city: "Phuket",
    category: "Night markets",
    description:
      "Old Town Sunday Walking Street, Naka Weekend Market, Chillva, Banzaan and Malin Plaza in Patong — days, hours and what to eat.",
    tone: "#16343a",
  },
  {
    href: "/bangkok/airport-to-sukhumvit-taxi-price/",
    title: "Airport → Sukhumvit taxi price",
    city: "Bangkok",
    category: "Taxis",
    description:
      "Suvarnabhumi to Sukhumvit (Nana, Asok): metered taxi total with the 50 THB surcharge and tolls, Grab, and the Airport Rail Link plus BTS.",
    image: "taxiMeter",
    tone: "#1c2830",
  },
  {
    href: "/pattaya/bangkok-airport-to-pattaya-taxi-price/",
    title: "Airport → Pattaya taxi price",
    city: "Pattaya",
    category: "Taxis",
    description:
      "Suvarnabhumi to Pattaya: official taxi counter, Grab and Bolt, private transfers and the airport bus compared.",
    image: "taxiMeter",
    tone: "#1c2830",
  },
  {
    href: "/phuket/airport-to-patong-taxi-price/",
    title: "Airport → Patong taxi price",
    city: "Phuket",
    category: "Taxis",
    description:
      "Phuket airport to Patong: metered taxi with the 100 THB surcharge, Grab, pre-booked transfers and the 100 THB Smart Bus.",
    image: "taxiMeter",
    tone: "#16343a",
  },
  {
    href: "/pattaya/baht-bus/",
    title: "Baht bus prices",
    city: "Pattaya",
    category: "Taxis",
    description:
      "Pattaya baht bus fares: 10–20 THB on fixed routes vs private charter, Beach Road and Second Road loops.",
    image: "centralPattaya",
    tone: "#243044",
  },
  {
    href: "/bangkok/first-timer/",
    title: "Bangkok first-timer guide",
    city: "Bangkok",
    category: "First-timer",
    description:
      "Step-by-step first night in Bangkok: rooftop sunset, Soi 11 bars or Thonglor, clubs, current prices and practical tips.",
    image: "soi11",
    tone: "#1c2430",
  },
  {
    href: "/pattaya/first-timer/",
    title: "Pattaya first-timer guide",
    city: "Pattaya",
    category: "First-timer",
    description:
      "First night in Pattaya: cabaret show, Walking Street, Tree Town and Soi Buakhao compared, with current prices and practical rules.",
    image: "walkingStreet",
    tone: "#243044",
  },
  {
    href: "/safety/",
    title: "Nightlife safety",
    city: "Bangkok",
    category: "Safety",
    description:
      "Practical safety tips for Bangkok and Pattaya nightlife: transport, valuables, bills and when to leave.",
    tone: "#242830",
  },
  {
    href: "/scams/",
    title: "Nightlife scams",
    city: "Bangkok",
    category: "Safety",
    description:
      "Common nightlife scams: tout shows, padded bills, taxi and tuk-tuk overcharges, fake tickets and jet-ski damage claims.",
    image: "taxiMeter",
    tone: "#242830",
  },
  {
    href: "/bangkok/areas/khao-san/",
    title: "Khao San Road",
    city: "Bangkok",
    category: "Areas",
    description:
      "Khao San Road at night: cheap street bars, what a night costs, live-music rooms, Soi Rambuttri, and how to pair it with a Rajadamnern fight night.",
    image: "khaoSan",
    tone: "#2a241c",
  },
  {
    href: "/bangkok/areas/soi-11/",
    title: "Sukhumvit Soi 11",
    city: "Bangkok",
    category: "Areas",
    description:
      "Sukhumvit Soi 11 nightlife: bars, a rooftop, live music and clubs near BTS Nana — what to expect and how it fits a Bangkok night.",
    image: "soi11",
    tone: "#243044",
  },
  {
    href: "/bangkok/areas/rca-thonglor/",
    title: "RCA & Thonglor",
    city: "Bangkok",
    category: "Areas",
    description:
      "RCA and Thonglor for club and cocktail nights: cover charges, ID checks, dress code and how to get there.",
    image: "rca",
    tone: "#1c2430",
  },
  {
    href: "/pattaya/areas/walking-street/",
    title: "Walking Street",
    city: "Pattaya",
    category: "Areas",
    description:
      "Walking Street guide: drink prices, clubs and live music, best arrival time, seafood, and how to avoid common bill and tout issues.",
    image: "walkingStreet",
    tone: "#243044",
  },
  {
    href: "/pattaya/areas/jomtien-beach-road/",
    title: "Jomtien Beach Road",
    city: "Pattaya",
    category: "Areas",
    description:
      "Jomtien Beach Road at night: sunset beach bars, a checked rooftop, live-music cafes and a calmer alternative to Walking Street.",
    image: "jomtien",
    tone: "#16343a",
  },
  {
    href: "/chiang-mai/nimman-nightlife/",
    title: "Nimman bars & clubs",
    city: "Chiang Mai",
    category: "Areas",
    description:
      "Nimmanhaemin nightlife: Warm Up Cafe, Mojo, rooftop cocktails, cover charges, dress codes and closing times.",
    tone: "#3a2e22",
  },
  {
    href: "/chiang-mai/old-city-nightlife/",
    title: "Old City & riverside",
    city: "Chiang Mai",
    category: "Areas",
    description:
      "Old City and riverside nightlife: North Gate Jazz Co-Op, backpacker bars near Tha Phae Gate and live-music riverside restaurants.",
    tone: "#3a2e22",
  },
  {
    href: "/phuket/first-timer/",
    title: "Phuket first-timer guide",
    city: "Phuket",
    category: "First-timer",
    description:
      "First night in Phuket: Simon Cabaret or Muay Thai, then Bangla Road, with beach clubs and Old Town as the quieter options.",
    tone: "#16343a",
  },
  {
    href: "/phuket/getting-around/",
    title: "Getting around Phuket at night",
    city: "Phuket",
    category: "Taxis",
    description:
      "How to move around Phuket after dark: walk Patong, use Grab or Bolt, and the songthaew and Smart Bus fares we could confirm.",
    tone: "#16343a",
  },
  {
    href: "/phuket/bangla-road/",
    title: "Bangla Road clubs",
    city: "Phuket",
    category: "Areas",
    description:
      "Bangla Road in Patong: Illuzion and the main clubs, cover charges, drink prices, opening hours and how to avoid tab and taxi overcharges.",
    tone: "#16343a",
  },
  {
    href: "/bangkok/muay-thai/",
    title: "Muay Thai tickets & prices",
    city: "Bangkok",
    category: "Muay Thai",
    description:
      "Muay Thai ticket prices in Bangkok: Rajadamnern from 1,000 THB and Lumpinie from 1,000 THB, seat classes and weekly fight schedule.",
    image: "muayThai",
    tone: "#2a241c",
  },
  {
    href: "/phuket/muay-thai/",
    title: "Muay Thai: Bangla & Patong stadiums",
    city: "Phuket",
    category: "Muay Thai",
    description:
      "Bangla Boxing Stadium vs Patong Boxing Stadium, fight nights, start times and ticket prices (about 1,500–1,900 THB).",
    image: "muayThai",
    tone: "#2a241c",
  },
  {
    href: "/phuket/beach-clubs/",
    title: "Beach clubs: minimum spend",
    city: "Phuket",
    category: "Beach clubs",
    description:
      "Phuket beach clubs compared: Catch, Café del Mar, XANA, Dream Beach Club and Bimi — minimum spend, cocktail prices and hours.",
    image: "jomtien",
    tone: "#16343a",
  },
  {
    href: "/bangkok/dinner-cruise/",
    title: "Dinner cruise prices",
    city: "Bangkok",
    category: "Shows",
    description:
      "Bangkok dinner cruise prices: buffet cruises from about 1,200 THB to luxury set-menu cruises over 3,000 THB.",
    tone: "#1c2430",
  },
  {
    href: "/prices/",
    title: "Nightlife prices",
    city: "Bangkok",
    category: "Prices",
    description:
      "2026 price reference for Bangkok and Pattaya nightlife: beer, cocktails, rooftop bars, club entry, shows and late-night transport.",
    tone: "#242830",
  },
  {
    href: "/budgets/",
    title: "Nightlife budgets",
    city: "Pattaya",
    category: "Prices",
    description:
      "Realistic nightlife budget bands for Bangkok and Pattaya: casual bar nights, rooftop evenings, club nights and show nights.",
    tone: "#243044",
  },
];

export const demoCategories = [
  "City guides",
  "Rooftops",
  "Shows",
  "Night markets",
  "Taxis",
  "First-timer",
  "Safety",
  "Areas",
  "Muay Thai",
  "Beach clubs",
  "Prices",
] as const;

export function guidesIn(city: DemoCity): DemoGuide[] {
  return demoGuides.filter((guide) => guide.city === city);
}

export function searchGuides(query: string, city = "All", category = "All"): DemoGuide[] {
  const q = query.trim().toLowerCase();
  return demoGuides.filter((item) => {
    if (city !== "All" && item.city !== city) return false;
    if (category !== "All" && item.category !== category) return false;
    if (!q) return true;
    return [item.title, item.city, item.category, item.description].join(" ").toLowerCase().includes(q);
  });
}

export function guidePhoto(guide: DemoGuide) {
  return guide.image ? photos[guide.image] : undefined;
}
