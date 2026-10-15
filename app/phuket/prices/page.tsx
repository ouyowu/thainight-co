import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, LinkList, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Phuket Nightlife Prices 2026 – Drinks, Clubs & Airport Transfers",
  "Phuket nightlife prices for 2026 where two public sources agree: Bangla Road beer, cocktails and club entry, plus the airport limousine and Smart Bus to Patong.",
  "/phuket/prices/",
);

export default function PhuketPricesPage() {
  return (
    <PageShell
      path="/phuket/prices/"
      title="Phuket Nightlife Prices (2026)"
      lead="A published Phuket range appears here only when two current public sources state it the same way. Beach-club minimums and pool-villa rates stay on their own pages."
    >
      <Section title="Bangla Road">
        <PriceTable
          caption="Bangla Road prices two 2026 sources agree on"
          headers={["Item", "Range"]}
          rows={[
            ["Beer, open-air bar", "100–180 THB"],
            ["Cocktail, ordinary bar", "200–350 THB"],
            ["Club entry, regular night", "300–500 THB"],
          ]}
        />
        <p>
          Open-air beer and ordinary-bar cocktails are the same bands in the Swanpass Bangla Road
          prices note and the July 2026 OutThailand Bangla Road guide. Club entry of 300–500 THB
          on a regular night, often with a drink, is the band both OutThailand and Eve Phuket
          publish. Event nights cost more. Venue-by-venue notes are on the{" "}
          <A href="/phuket/bangla-road/">Bangla Road guide</A>.
        </p>
        <p className="text-sm text-muted">
          Sources: Swanpass, Bangla Road prices 2026 (
          https://swanpass.com/blogs/bangla-road-prices); OutThailand, Bangla Road Phuket 2026,
          July 2026 (https://outthailand.com/guide/bangla-road-phuket/); Eve Phuket, Bangla Road
          guide (https://www.evephuket.com/blog/bangla-road-phuket-everything-you-need-to-know/).
        </p>
      </Section>

      <Section title="Airport to Patong">
        <PriceTable
          caption="Airport to Patong fares two sources agree on"
          headers={["Option", "Fare"]}
          rows={[
            ["Fixed-rate airport limousine to Patong", "800 THB"],
            ["Smart Bus to Patong", "100 THB per person"],
          ]}
        />
        <p>
          The airport’s own minibus-taxi page lists Patong Beach at 800 THB. OutThailand’s July
          2026 airport guide lists the same fixed-rate limousine at 800 THB. The Smart Bus at 100
          THB per person is in that OutThailand guide and in Eve Phuket’s June 2026 transfer
          table. Metered taxis are a wider band across those guides, so this page does not publish
          one. Step-by-step notes are on{" "}
          <A href="/phuket/airport-to-patong-taxi-price/">Phuket airport to Patong</A>.
        </p>
        <p className="text-sm text-muted">
          Sources: Airports of Thailand, Phuket minibus-taxi (
          https://phuket.airportthai.co.th/service/transportation/detail/160); OutThailand, Phuket
          Airport to Patong 2026, July 2026 (
          https://outthailand.com/guide/phuket-airport-to-patong/); Eve Phuket, airport transfer
          guide, June 2026 (
          https://www.evephuket.com/blog/phuket-airport-transfer-guide/).
        </p>
      </Section>

      <Section title="Left on their own pages">
        <p>
          Beach-club minimum spend, pool-villa rates and neighbourhood hotel bands are not
          repeated here. Two current sources do not state one shared range for those categories
          on this page.
        </p>
        <LinkList
          links={[
            { href: "/phuket/beach-clubs/", label: "Beach clubs" },
            { href: "/phuket/pool-villas/", label: "Pool villas" },
            { href: "/phuket/where-to-stay/", label: "Where to stay" },
            { href: "/phuket/bangla-road/", label: "Bangla Road" },
            { href: "/phuket/airport-to-patong-taxi-price/", label: "Airport to Patong taxi" },
          ]}
        />
      </Section>

      <FaqList
        items={[
          {
            q: "How much is a beer on Bangla Road?",
            a: "About 100–180 THB at an open-air bar, the band both a 2026 Swanpass note and the July 2026 OutThailand guide publish.",
          },
          {
            q: "How much is a cocktail on Bangla Road?",
            a: "About 200–350 THB at an ordinary bar. Those two guides use that band. Club cocktails cost more.",
          },
          {
            q: "How much is club entry on Bangla Road?",
            a: "About 300–500 THB on a regular night, often including a drink. OutThailand and Eve Phuket both publish that band. Event nights cost more.",
          },
          {
            q: "How much is a taxi from Phuket airport to Patong?",
            a: "The fixed-rate airport limousine to Patong is 800 THB on the airport’s own page and in OutThailand’s July 2026 guide. The Smart Bus is 100 THB per person.",
          },
        ]}
      />
    </PageShell>
  );
}
