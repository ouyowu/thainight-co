import { HotelCta } from "@/components/HotelCta";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Bangkok Luxury Hotels 2026 – River Rates to Confirm",
  "What a famous Bangkok luxury hotel costs in 2026: riverside entry rates and the Aman ceiling. Ranges to confirm, plus Agoda links for each river hotel.",
  "/bangkok/luxury-hotels/",
);

export default function BangkokLuxuryHotelsPage() {
  return (
    <PageShell
      path="/bangkok/luxury-hotels/"
      title="Bangkok Luxury Hotels (2026)"
      lead="The famous Bangkok luxury hotels sit on the Chao Phraya or, at the top of the price list, over a private garden on Wireless Road. Thai Night does not rank them. The useful split is the river row against one much higher garden hotel, and both move with the month."
    >
      <Section title="What a night costs">
        <PriceTable
          caption="Published 2026 entry rates for named Bangkok luxury hotels"
          headers={["Hotels", "What the sources describe", "Nightly range"]}
          rows={[
            [
              "Peninsula, Mandarin Oriental, Four Seasons at Chao Phraya, The Siam, Capella",
              "River rooms, courtyards, or a small upriver estate",
              "About ฿14,000–30,000 all-in; about US$350–950",
            ],
            [
              "Aman Nai Lert",
              "Suites over a private garden in Ploenchit",
              "About ฿45,000–55,000; from about US$1,200",
            ],
          ]}
        />
        <p className="text-sm text-muted">
          Ranges checked 14 October 2026. They move with the date. Confirm on the spot. Thai Night
          does not rank hotels and does not take payment for placement. Each hotel button opens Agoda with that hotel shown first. Aman Nai Lert is not listed on Agoda, so its section keeps a Bangkok-wide search.
        </p>
        <Bullets>
          <li>
            <strong>Riverside five.</strong> An October 2026 all-in guide puts low-season entry
            from about ฿14,000 at The Peninsula to about ฿23,000 at Capella, and peak entry from
            about ฿19,000 to about ฿30,000. Mandarin Oriental and the Four Seasons at Chao Phraya
            sit about ฿18,000–26,000; The Siam about ฿16,000–21,000 (Destination Thailand). A
            September 2026 roundup puts the same hotels from about US$350–500 at the Peninsula to
            about US$800–950 at Capella, with Mandarin Oriental and the Four Seasons about
            US$450–600 and The Siam about US$450–650 (Biirdee).
          </li>
          <li>
            <strong>Aman Nai Lert.</strong> The same October guide puts entry at about
            ฿45,000–55,000. Biirdee puts it from about US$1,200. Both describe a 2025 hotel over
            Nai Lert Park, sold as a different budget from the river row.
          </li>
        </Bullets>
      </Section>

      <Section title="The river">
        <p>
          Capella, the Four Seasons, and the Mandarin Oriental share the Charoen Krung bend.
          The Peninsula is on the Thonburi bank. The Siam is further upriver in Dusit, a small
          estate rather than a tower. Hotel boats run to a pier; they are not a BTS station, and
          late boats stop. A Sukhumvit night from here is a Grab.
        </p>
        <p>
          Nights already on this site from a river base: the{" "}
          <A href="/bangkok/dinner-cruise/">Chao Phraya dinner cruise</A> and{" "}
          <A href="/bangkok/sky-bar/">Sky Bar</A> near Saphan Taksin. Area choice, including
          cheaper river hotels, is on the{" "}
          <A href="/bangkok/where-to-stay/">where-to-stay guide</A>.
        </p>
        <p>
          Use the two published bands above, not a single “from” price. December and Chinese New
          Year sit at the top. Confirm on the spot.
        </p>
        <HotelCta label="The Peninsula Bangkok on Agoda" link="peninsulaBangkok" />
        <HotelCta label="Mandarin Oriental, Bangkok on Agoda" link="mandarinOrientalBangkok" />
        <HotelCta label="Four Seasons at Chao Phraya River on Agoda" link="fourSeasonsBangkok" />
        <HotelCta label="The Siam on Agoda" link="siamHotelBangkok" />
        <HotelCta label="Capella Bangkok on Agoda" link="capellaBangkok" />
      </Section>

      <Section title="A higher ceiling">
        <p>
          Aman Nai Lert is the outlier in both 2026 sources: a garden hotel in Ploenchit, not a
          river hotel, and roughly double the famous riverside entry rates. It suits a stay where
          the hotel is the plan. The BTS is closer here than at the upriver estates.
        </p>
        <HotelCta label="Search hotels in Bangkok" link="hotelBangkok" />
      </Section>

      <FaqList
        items={[
          {
            q: "How much is a luxury hotel in Bangkok per night in 2026?",
            a: "Published bands for the famous riverside hotels run about ฿14,000–30,000 all-in, or about US$350–950, depending on the hotel and the season. Aman Nai Lert is published around ฿45,000–55,000, or from about US$1,200. Confirm the rate for your dates.",
          },
          {
            q: "Which Bangkok luxury hotels are on the river?",
            a: "Capella, the Four Seasons at Chao Phraya, and the Mandarin Oriental are on the Charoen Krung side. The Peninsula is on the Thonburi bank. The Siam is upriver in Dusit. This page does not rank them.",
          },
          {
            q: "Does the hotel button open one of these hotels?",
            a: "Yes for the five river hotels: each button opens Agoda with that hotel shown first. Aman Nai Lert is not listed on Agoda, so that section searches all of Bangkok.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/bangkok/where-to-stay/", label: "Where to stay" },
          { href: "/bangkok/design-hotels/", label: "Sukhumvit design hotels" },
          { href: "/bangkok/couples-hotels/", label: "Hotels for couples" },
          { href: "/bangkok/dinner-cruise/", label: "Dinner cruise" },
        ]}
      />
    </PageShell>
  );
}
