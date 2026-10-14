import { HotelCta } from "@/components/HotelCta";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Chiang Mai Luxury Hotels 2026 – Nightly Rates",
  "What a Chiang Mai luxury hotel costs in 2026: Four Seasons in Mae Rim and 137 Pillars House. Ranges to confirm on the spot, plus Agoda links for both hotels.",
  "/chiang-mai/luxury-hotels/",
);

export default function ChiangMaiLuxuryHotelsPage() {
  return (
    <PageShell
      path="/chiang-mai/luxury-hotels/"
      title="Chiang Mai Luxury Hotels (2026)"
      lead="Chiang Mai luxury is a valley resort north of town, or a small suite hotel on the Ping River. Two properties have a nightly figure from more than one current source. Thai Night does not rank them."
    >
      <Section title="What a night costs">
        <PriceTable
          caption="Chiang Mai luxury hotels with two 2026 sources"
          headers={["Hotel", "Setting", "Nightly range"]}
          rows={[
            [
              "Four Seasons Resort Chiang Mai",
              "Pavilions in Mae Rim, about 20 km north",
              "About ฿15,000–24,000; about US$720–1,673",
            ],
            [
              "137 Pillars House",
              "Suites in a teak house, Wat Gate on the Ping",
              "Offers from ฿13,230+++; a review says about ฿18,000–22,000",
            ],
          ]}
        />
        <p className="text-sm text-muted">
          Ranges checked 14 October 2026. “+++” means the hotel still adds service charge and
          tax. Confirm on the spot. Thai Night does not rank hotels and does not take payment
          for placement. Each hotel button opens Agoda with that hotel shown first.
        </p>
        <Bullets>
          <li>
            <strong>Four Seasons.</strong> An August 2026 all-in guide puts entry at about
            ฿15,000 in low season and about ฿24,000 in the cool season (Destination Thailand).
            Hotels for Kings lists a pavilion from US$720. Kayak lists the hotel from US$766,
            a July average near US$915, and a January average near US$1,673.
          </li>
          <li>
            <strong>137 Pillars House.</strong> The hotel’s own advance offers, checked 14
            October 2026, start at ฿13,230+++ on a non-refundable rate and at ฿16,915 before
            tax on a 90-day advance rate, both with breakfast and blackout dates. ThailandAddict
            puts entry suites at about ฿18,000–22,000. The figures are not the same offer. Use
            them as a bracket and confirm the bill.
          </li>
        </Bullets>
      </Section>

      <Section title="Valley or river">
        <p>
          The Four Seasons is a resort stay. Mae Rim is a ride from Nimman and the Old City, so
          the night out is planned, not a walk. 137 Pillars House is in Wat Gate, on the east
          bank of the Ping, closer to town and still not on the Nimman strip.
        </p>
        <p>
          Walkable nights are <A href="/chiang-mai/nimman-nightlife/">Nimman</A> and the{" "}
          <A href="/chiang-mai/old-city-nightlife/">Old City</A>. Neighbourhood hotel bands at a
          lower budget are on <A href="/chiang-mai/where-to-stay/">where to stay</A>. Design-led
          rooms in town are on <A href="/chiang-mai/boutique-hotels/">boutique hotels</A>.
        </p>
        <p>
          Cool season and the smoky weeks after February change both the rate and the view.
          Confirm on the spot.
        </p>
        <HotelCta label="Four Seasons Resort Chiang Mai on Agoda" link="fourSeasonsChiangMai" />
        <HotelCta label="137 Pillars House on Agoda" link="pillarsHouseChiangMai" />
      </Section>

      <FaqList
        items={[
          {
            q: "How much is a luxury hotel in Chiang Mai per night in 2026?",
            a: "Four Seasons is published at about ฿15,000–24,000, or about US$720–1,673 depending on the month and the site. 137 Pillars House offers start at ฿13,230+++ and ฿16,915 before tax; a review puts entry suites at about ฿18,000–22,000. Confirm your dates.",
          },
          {
            q: "Are these hotels in the Old City?",
            a: "No. The Four Seasons is in Mae Rim. 137 Pillars House is in Wat Gate, by the Ping River. Nimman and the Old City are a ride.",
          },
          {
            q: "Does the button book the Four Seasons?",
            a: "Yes. Each button opens Agoda with that hotel shown first. Confirm the room and the rate for your dates there.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/chiang-mai/where-to-stay/", label: "Where to stay" },
          { href: "/chiang-mai/boutique-hotels/", label: "Boutique hotels" },
          { href: "/chiang-mai/couples-hotels/", label: "Hotels for couples" },
          { href: "/chiang-mai/nimman-nightlife/", label: "Nimman nightlife" },
        ]}
      />
    </PageShell>
  );
}
