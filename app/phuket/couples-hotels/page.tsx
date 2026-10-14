import { HotelCta } from "@/components/HotelCta";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Phuket Hotels for Couples 2026 – Private Pool Villas",
  "Phuket hotels that suit a couple: a private pool and a sea view. Trisara nightly bands from two 2026 guides, to confirm on the spot.",
  "/phuket/couples-hotels/",
);

export default function PhuketCouplesHotelsPage() {
  return (
    <PageShell
      path="/phuket/couples-hotels/"
      title="Phuket Hotels for Couples (2026)"
      lead="On Phuket, a hotel that suits a couple is usually a villa with its own pool and a view, not a room above a club street. Trisara is the resort two current guides both describe that way, and both price. This page does not rank it."
    >
      <Section title="What a night costs">
        <PriceTable
          caption="A private-pool stay for two, two 2026 guides"
          headers={["Room at Trisara", "ThailandAddict", "Thailand Guide"]}
          rows={[
            [
              "Ocean-view pool junior suite",
              "From about ฿29,000 in low season",
              "About ฿35,000–65,000",
            ],
            [
              "Ocean-front pool villa",
              "About ฿52,000 in low season",
              "About ฿48,000–95,000",
            ],
          ]}
        />
        <p className="text-sm text-muted">
          Ranges checked 14 October 2026. Confirm on the spot. Thai Night does not rank hotels
          and does not take payment for placement. The hotel button opens Agoda with Trisara shown first.
        </p>
        <Bullets>
          <li>
            <strong>Privacy.</strong> Both guides describe a private pool and a sea view on these
            rooms. ThailandAddict puts the low-season junior suite from about ฿29,000 and the
            ocean-front villa about ฿52,000. Thailand Guide uses about ฿35,000–65,000 and about
            ฿48,000–95,000 for the same two types across the year.
          </li>
          <li>
            <strong>Another hillside.</strong> Keemala, above Kamala, is a smaller pool-villa
            resort. Its rates are on <A href="/phuket/luxury-hotels/">luxury hotels</A>, from
            different sources, and are not repeated as a second Trisara number.
          </li>
        </Bullets>
      </Section>

      <Section title="The shape of the stay">
        <p>
          You are in the villa more than you are in Patong. Layan is the north of the island. A
          day can be the pool and the resort beach. Bangla, if you want it, is a planned taxi:
          see <A href="/phuket/bangla-road/">Bangla Road</A> for club prices, then book the car
          back before midnight.
        </p>
        <p>
          Book the pool room, not a garden room that shares a pool. The table is only the rooms
          both guides say have a private pool. More villa detail is on{" "}
          <A href="/phuket/pool-villas/">pool villas</A>. Hotel areas at a lower budget are on{" "}
          <A href="/phuket/where-to-stay/">where to stay</A>.
        </p>
        <p>Confirm the villa name and the season on the spot.</p>
        <HotelCta label="Trisara on Agoda" link="trisaraPhuket" />
      </Section>

      <FaqList
        items={[
          {
            q: "What kind of Phuket hotel suits a couple?",
            a: "A full-stay villa with a private pool and a sea view. Trisara’s ocean-view pool suite and ocean-front pool villa are the rooms two 2026 guides both describe that way.",
          },
          {
            q: "How much is a couples villa in Phuket per night in 2026?",
            a: "At Trisara, about ฿29,000–65,000 for an ocean-view pool suite and about ฿48,000–95,000 for an ocean-front pool villa, depending on which guide and which season. Confirm your dates.",
          },
          {
            q: "Does the button book a pool villa?",
            a: "Yes. It opens Agoda with Trisara shown first. Pick the pool suite or the pool villa there; they are different rates.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/phuket/where-to-stay/", label: "Where to stay" },
          { href: "/phuket/pool-villas/", label: "Pool villas" },
          { href: "/phuket/luxury-hotels/", label: "Luxury hotels" },
          { href: "/phuket/bangla-road/", label: "Bangla Road" },
        ]}
      />
    </PageShell>
  );
}
