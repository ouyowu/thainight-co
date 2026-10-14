import { HotelCta } from "@/components/HotelCta";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Chiang Mai Hotels for Couples 2026 – Suites, Pools and the River",
  "Chiang Mai hotels that suit a couple: a Mae Rim resort with pool villas, and riverside suites in Wat Gate. 2026 ranges to confirm on the spot.",
  "/chiang-mai/couples-hotels/",
);

export default function ChiangMaiCouplesHotelsPage() {
  return (
    <PageShell
      path="/chiang-mai/couples-hotels/"
      title="Chiang Mai Hotels for Couples (2026)"
      lead="A Chiang Mai hotel that suits a couple is a private pavilion or a suite, with a pool or the river outside. Two full-stay hotels have published rates from more than one source. This is not a ranking, and it is a full night, not a short booking."
    >
      <Section title="What a night costs">
        <PriceTable
          caption="Stays for two, with two 2026 sources"
          headers={["Hotel", "Why it suits two people", "Nightly range"]}
          rows={[
            [
              "Four Seasons Resort Chiang Mai",
              "Separate pavilions and pool villas in Mae Rim",
              "About ฿15,000–24,000; about US$720–1,673",
            ],
            [
              "137 Pillars House",
              "Suites in a quiet teak house on the Ping, one with a private pool",
              "Offers from ฿13,230+++; a review says about ฿18,000–22,000",
            ],
          ]}
        />
        <p className="text-sm text-muted">
          Ranges checked 14 October 2026. Entry rates are not the private-pool suite. Confirm on
          the spot. Thai Night does not rank hotels and does not take payment for placement. The
          button searches Agoda for the whole of Chiang Mai (city 7401).
        </p>
        <Bullets>
          <li>
            <strong>Four Seasons.</strong> Destination Thailand (August 2026) puts an entry
            pavilion at about ฿15,000–24,000 all-in. Hotels for Kings lists a pavilion from
            US$720 and describes one-bedroom pool villas as a separate, higher room. Kayak’s
            monthly averages run about US$915 in July to about US$1,673 in January, with deals
            from about US$766. The pool-villa price appears in only one of these sources, so it
            is not repeated as a number.
          </li>
          <li>
            <strong>137 Pillars House.</strong> The hotel site, checked 14 October 2026, starts
            at ฿13,230+++ (non-refundable, conditions apply) and ฿16,915 before tax on an advance
            rate. ThailandAddict puts entry suites at about ฿18,000–22,000 and describes a larger
            suite with its own pool. That suite’s price is only in the review, so it is left out.
          </li>
        </Bullets>
      </Section>

      <Section title="A pool, or the river">
        <p>
          Mae Rim is the private version: pavilions in a garden, a pool villa if you book that
          room, and a long ride to Nimman. Wat Gate is the in-town version: a small suite hotel
          on the Ping, quiet, and still a Grab to the Old City or Nimman.
        </p>
        <p>
          For a design hotel you can walk from, see{" "}
          <A href="/chiang-mai/boutique-hotels/">boutique hotels</A>. Nights out:{" "}
          <A href="/chiang-mai/nimman-nightlife/">Nimman</A> and{" "}
          <A href="/chiang-mai/old-city-nightlife/">Old City live music</A>. Neighbourhoods are
          on <A href="/chiang-mai/where-to-stay/">where to stay</A>.
        </p>
        <p>
          Ask for the pool villa or the pool suite by name. The bands above are the entry room
          unless the source says otherwise. Confirm on the spot.
        </p>
        <HotelCta label="Search hotels in Chiang Mai" link="hotelChiangMai" />
      </Section>

      <FaqList
        items={[
          {
            q: "What kind of Chiang Mai hotel suits a couple?",
            a: "A full-night stay with privacy: a pavilion or pool villa in Mae Rim, or a suite on the Ping River. Published examples are the Four Seasons Resort and 137 Pillars House.",
          },
          {
            q: "How much is a couples hotel in Chiang Mai per night in 2026?",
            a: "Four Seasons entry rates are about ฿15,000–24,000, or about US$720–1,673. 137 Pillars House offers start at ฿13,230+++ and a review puts suites at about ฿18,000–22,000. A private-pool room costs more than those entry figures. Confirm your dates.",
          },
          {
            q: "Does the button book a pool villa?",
            a: "No. It opens a Chiang Mai-wide Agoda search. Thai Night does not link to a single hotel.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/chiang-mai/where-to-stay/", label: "Where to stay" },
          { href: "/chiang-mai/luxury-hotels/", label: "Luxury hotels" },
          { href: "/chiang-mai/boutique-hotels/", label: "Boutique hotels" },
          { href: "/chiang-mai/old-city-nightlife/", label: "Old City nightlife" },
        ]}
      />
    </PageShell>
  );
}
