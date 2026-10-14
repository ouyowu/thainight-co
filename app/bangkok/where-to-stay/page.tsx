import { HotelCta } from "@/components/HotelCta";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Where to Stay in Bangkok 2026 – Sukhumvit, Silom, Riverside, Old Town",
  "Which Bangkok area to sleep in for nightlife: Sukhumvit, Silom and Sathorn, the riverside, or the Old Town. Nightly ranges to confirm on the spot, plus a city-wide hotel search.",
  "/bangkok/where-to-stay/",
);

export default function BangkokWhereToStayPage() {
  return (
    <PageShell
      path="/bangkok/where-to-stay/"
      title="Where to Stay in Bangkok (2026)"
      lead="Stay on Sukhumvit if the night is Soi 11, hotel rooftops and Thong Lo. Stay in Silom or Sathorn for the sky bars. Stay on the river for a dinner cruise. Stay in the Old Town if the day is temples and the night is Khao San. There is no ranked winner."
    >
      <Section title="Which area?">
        <PriceTable
          caption="Bangkok areas for a nightlife trip"
          headers={["Area", "Suits", "Nightlife already on this site", "Nightly range"]}
          rows={[
            [
              "Sukhumvit (Nana–Asok–Thong Lo)",
              "First trip, BTS on the doorstep",
              "Soi 11, rooftops, Thong Lo",
              "Private rooms often listed about ฿1,700–4,800",
            ],
            [
              "Silom / Sathorn",
              "Sky bars and a central business-district base",
              "Sky Bar, Patpong night market",
              "Mid-range about ฿2,000–3,500",
            ],
            [
              "Riverside",
              "River boats and a dinner cruise",
              "Chao Phraya dinner cruise",
              "Budget to mid-range about ฿1,100–4,800",
            ],
            [
              "Old Town",
              "Temples by day, Khao San at night",
              "Khao San, Rajadamnern",
              "Budget to mid-range about US$20–100",
            ],
          ]}
        />
        <p className="text-sm text-muted">
          Ranges checked 13 October 2026. They move with the date and the room. Confirm on the
          spot. Thai Night does not rank hotels and does not take payment for placement. Each
          button below searches Agoda for the whole of Bangkok (city 9395), not a single
          neighbourhood or a single hotel.
        </p>
        <Bullets>
          <li>
            <strong>Sukhumvit.</strong> A 2026 roundup listed private-room starting prices from
            about ฿1,700 up to about ฿4,800 at larger hotels on the Nana–Asok–Phrom Phong stretch,
            with dorm beds from about ฿400 and a luxury tower from about ฿7,500 (ThailandAddict).
            A separate neighbourhood sample put the mid-range average for Lower Sukhumvit
            (Nana–Asok) at about US$96 a night, and the wider Sukhumvit district at about US$82 in
            May and about US$116 in January (TrustedTrips).
          </li>
          <li>
            <strong>Silom / Sathorn.</strong> July 2026 listings put a mid-range room at about
            ฿2,000–3,500, with an area average near ฿3,400, hostel beds from about ฿460, and
            luxury towers about ฿8,000–15,000 (Out Thailand, citing Trip.com). A 2026 area guide
            puts the same mid-range band at about US$50–100 (Travel Guides Tip).
          </li>
          <li>
            <strong>Riverside.</strong> July 2026 listings put a budget river-view room at about
            ฿1,100–2,000 and a larger mid-range river hotel at about ฿3,200–4,800, with well-known
            luxury hotels from about ฿6,000 (Out Thailand). A 2026 area guide puts riverside
            mid-range rooms at about US$80–130 and luxury from about US$150 (Travel Guides Tip).
          </li>
          <li>
            <strong>Old Town.</strong> A 2026 area guide puts budget rooms around US$20–40 and
            mid-range rooms around US$50–100 (Travel Guides Tip). On 11 October 2026 a hotel on
            the Khao San side was listed from US$21.55 for the cheapest night in the following 30
            days (Klook). A small riverside boutique in Rattanakosin was listed from about US$140
            (Compass Bangkok, 2026).
          </li>
        </Bullets>
      </Section>

      <Section title="Sukhumvit (Nana–Asok–Thong Lo)">
        <p>
          This suits a first nightlife trip: you can walk to bars or ride one or two BTS stops.
          Nana and Asok are the liveliest. Phrom Phong is calmer. Thong Lo is the cocktail and
          live-music end.
        </p>
        <p>
          Nights already covered here: <A href="/bangkok/areas/soi-11/">Soi 11</A>,{" "}
          <A href="/bangkok/rooftop-bars/">rooftop bars</A>,{" "}
          <A href="/bangkok/soi-11-rooftop-bars/">Soi 11 rooftops</A>, and{" "}
          <A href="/bangkok/areas/rca-thonglor/">RCA and Thong Lo</A>. RCA itself is a ride toward
          Rama 9, not a walk from Asok.
        </p>
        <p>
          The stop-by-stop breakdown lives on the{" "}
          <A href="/bangkok/hotels-nana-asok/">Sukhumvit (Nana–Asok) hotels page</A>. This section
          does not repeat it.
        </p>
        <p>
          Private rooms on this stretch are often listed at about ฿1,700–4,800 a night in the 2026
          sources above. Confirm on the spot.
        </p>
        <HotelCta label="Search hotels in Bangkok" link="hotelSukhumvit" />
      </Section>

      <Section title="Silom / Sathorn">
        <p>
          This suits people who want the famous sky bars and a base where the BTS and MRT meet.
          Sala Daeng, Chong Nonsi and Saphan Taksin cover most of the evening without a long ride.
        </p>
        <p>
          Pair the hotel with <A href="/bangkok/sky-bar/">Sky Bar</A> (dress code, no entrance fee
          on the usual night) and the <A href="/bangkok/areas/patpong/">Patpong night market</A>{" "}
          off Silom. Treat Patpong as a market and a casual drink.
        </p>
        <p>
          A mid-range room is about ฿2,000–3,500 a night in the July 2026 listings above. Luxury
          towers on the Sathorn side are a different budget. Confirm on the spot.
        </p>
        <HotelCta label="Search hotels in Bangkok" link="hotelBangkok" />
      </Section>

      <Section title="Riverside">
        <p>
          This suits a dinner-cruise night and anyone who wants the boat more than the BTS. You
          trade doorstep trains for pier access. Many hotels run a shuttle boat to Sathorn Pier;
          check the timetable before you book an early flight.
        </p>
        <p>
          The evening on this site is the <A href="/bangkok/dinner-cruise/">Chao Phraya dinner
          cruise</A>, mostly from Asiatique, ICONSIAM or River City.{" "}
          <A href="/bangkok/sky-bar/">Sky Bar</A> is a short walk from Saphan Taksin if you add a
          sunset drink.
        </p>
        <p>
          Budget river-view rooms were about ฿1,100–2,000 and larger mid-range river hotels about
          ฿3,200–4,800 in the July 2026 listings. Icons cost more. Confirm on the spot.
        </p>
        <HotelCta label="Search hotels in Bangkok" link="hotelBangkok" />
      </Section>

      <Section title="Old Town">
        <p>
          This suits temple days and a cheaper night. The Old Town goes quiet earlier than
          Sukhumvit. Khao San is the loud pocket; Rattanakosin lanes near the river are calmer.
        </p>
        <p>
          Use <A href="/bangkok/areas/khao-san/">Khao San Road</A> for low-spend bars and live
          music, and <A href="/bangkok/muay-thai/">Rajadamnern</A> when there is a fight card. A
          Sukhumvit or Silom night from here is a Grab, not a walk.
        </p>
        <p>
          Budget to mid-range rooms are published around US$20–100. Small riverside boutiques
          start higher, from about US$140 in the 2026 note above. Confirm on the spot.
        </p>
        <HotelCta label="Search hotels in Bangkok" link="hotelBangkok" />
      </Section>

      <Section title="Hotel types">
        <p>
          The areas above are the first choice. These pages go one step further, still without a
          ranking: <A href="/bangkok/luxury-hotels/">luxury hotels</A> on the river,{" "}
          <A href="/bangkok/design-hotels/">design suites on Sukhumvit</A>, and{" "}
          <A href="/bangkok/couples-hotels/">hotels for couples</A> (a private suite, a pool, or
          a river view). Each button on those pages is the same city-wide search.
        </p>
      </Section>

      <FaqList
        items={[
          {
            q: "Where should I stay in Bangkok for nightlife?",
            a: "Sukhumvit, between Nana and Thong Lo, if you want bars and rooftops on the BTS. Silom or Sathorn if the plan is sky bars. The river if the plan is a dinner cruise. The Old Town if the plan is temples and Khao San.",
          },
          {
            q: "How much is a hotel in Bangkok per night in 2026?",
            a: "Published 2026 bands: Sukhumvit private rooms often about ฿1,700–4,800, Silom and Sathorn mid-range about ฿2,000–3,500, riverside budget to mid-range about ฿1,100–4,800, and Old Town budget to mid-range about US$20–100. Confirm the rate for your dates.",
          },
          {
            q: "Does the hotel button book one neighbourhood?",
            a: "No. It opens a Bangkok-wide Agoda search. Filter there for the area you picked. Thai Night does not link to a single hotel.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/bangkok/hotels-nana-asok/", label: "Sukhumvit hotels (Nana–Asok)" },
          { href: "/bangkok/luxury-hotels/", label: "Luxury hotels" },
          { href: "/bangkok/design-hotels/", label: "Sukhumvit design hotels" },
          { href: "/bangkok/couples-hotels/", label: "Hotels for couples" },
          { href: "/bangkok/first-timer/", label: "First-timer" },
          { href: "/bangkok/one-night-plan/", label: "One-night plans" },
          { href: "/bangkok/getting-around/", label: "Getting around at night" },
        ]}
      />
    </PageShell>
  );
}
