import { HotelCta } from "@/components/HotelCta";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Phuket Pool Villas 2026 – Nightly Rates to Confirm",
  "Phuket pool-villa rates in 2026, using Trisara as the resort two guides both price. Private pool and a sea view. Confirm on the spot.",
  "/phuket/pool-villas/",
);

export default function PhuketPoolVillasPage() {
  return (
    <PageShell
      path="/phuket/pool-villas/"
      title="Phuket Pool Villas (2026)"
      lead="A Phuket pool villa is a room with its own pool, usually facing the Andaman, on a resort rather than in a tower. Trisara in the north is the property two 2026 guides both price. Thai Night does not rank villas."
    >
      <Section title="What a night costs">
        <PriceTable
          caption="Trisara pool villas, two 2026 guides"
          headers={["Room", "ThailandAddict", "Thailand Guide"]}
          rows={[
            [
              "Ocean-view pool junior suite",
              "From about ฿29,000 in low season; peak is described as nearly double",
              "About ฿35,000–65,000",
            ],
            [
              "Ocean-front pool villa",
              "About ฿52,000 in low season; the guide says peak is nearly double",
              "About ฿48,000–95,000",
            ],
          ]}
        />
        <p className="text-sm text-muted">
          Ranges checked 14 October 2026. Low season in these guides is about May–October, high
          season about November–April. Confirm on the spot. Thai Night does not rank hotels and
          does not take payment for placement. The hotel button opens Agoda with Trisara shown first.
        </p>
        <Bullets>
          <li>
            <strong>ThailandAddict.</strong> The resort has 39 pool villas and suites, each with
            a sea view and a private pool. Low-season figures: ocean-view pool junior suite from
            about ฿29,000, ocean-view pool villa about ฿40,000, ocean-front pool villa about
            ฿52,000. Peak months are described as nearly double.
          </li>
          <li>
            <strong>Thailand Guide.</strong> Ocean-view pool junior suite about ฿35,000–65,000.
            Ocean-front pool villa about ฿48,000–95,000. Larger houses on the same resort run
            well above that.
          </li>
        </Bullets>
      </Section>

      <Section title="What you are booking">
        <p>
          Trisara is on a headland at Layan, north of Bang Tao. The stay is the pool and the
          cove, not Patong. A one-bedroom pool villa is already a high budget; a multi-bedroom
          house is another category and is not folded into the table.
        </p>
        <p>
          Kamala’s Keemala is a different pool-villa resort, priced on the{" "}
          <A href="/phuket/luxury-hotels/">luxury hotels</A> page. Ordinary hotel areas — Patong,
          Kata, Karon, Old Town — are on <A href="/phuket/where-to-stay/">where to stay</A>. For
          a couple using a private pool as the room, see{" "}
          <A href="/phuket/couples-hotels/">hotels for couples</A>.
        </p>
        <p>
          The two guides do not match to the baht. Read both columns and confirm the villa type
          on the spot.
        </p>
        <HotelCta label="Trisara on Agoda" link="trisaraPhuket" />
      </Section>

      <FaqList
        items={[
          {
            q: "How much is a pool villa in Phuket per night in 2026?",
            a: "At Trisara, one guide starts an ocean-view pool suite at about ฿29,000 in low season and the other uses about ฿35,000–65,000. Ocean-front villas are about ฿52,000 in that low-season note, or about ฿48,000–95,000 in the second guide. Confirm the villa and the dates.",
          },
          {
            q: "Does every Phuket villa include a private pool?",
            a: "No. This page is about villas that do. At Trisara, both guides describe a private pool with the rooms in the table. Ask before you book a cheaper “villa” elsewhere.",
          },
          {
            q: "Does the button book Trisara?",
            a: "Yes. It opens Agoda with Trisara shown first. Pick the pool suite or the pool villa there; they are different rates.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/phuket/where-to-stay/", label: "Where to stay" },
          { href: "/phuket/luxury-hotels/", label: "Luxury hotels" },
          { href: "/phuket/couples-hotels/", label: "Hotels for couples" },
          { href: "/phuket/beach-clubs/", label: "Beach clubs" },
        ]}
      />
    </PageShell>
  );
}
