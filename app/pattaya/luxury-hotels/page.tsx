import { HotelCta } from "@/components/HotelCta";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Pattaya Luxury Hotels 2026 – Five-Star Nightly Rates",
  "What large Pattaya five-star hotels cost in 2026. Nightly samples for Hilton Pattaya and Royal Cliff, to confirm on the spot, plus Agoda links for both.",
  "/pattaya/luxury-hotels/",
);

export default function PattayaLuxuryHotelsPage() {
  return (
    <PageShell
      path="/pattaya/luxury-hotels/"
      title="Pattaya Luxury Hotels (2026)"
      lead="Pattaya’s large five-star hotels are beach towers and a cliff resort with its own beach, not a ranked list. Two of them have current published rates from more than one site. Confirm the night you actually want."
    >
      <Section title="What a night costs">
        <PriceTable
          caption="Large Pattaya five-star hotels with two 2026 listings"
          headers={["Hotel", "Setting", "Nightly range"]}
          rows={[
            [
              "Hilton Pattaya",
              "Beach tower in central Pattaya",
              "About US$150–231",
            ],
            [
              "Royal Cliff Grand",
              "Cliff above a private beach, Pratumnak side",
              "About US$149–272",
            ],
          ]}
        />
        <p className="text-sm text-muted">
          Ranges checked 14 October 2026. Confirm on the spot. Thai Night does not rank hotels
          and does not take payment for placement. Each hotel button opens Agoda with that hotel shown first.
        </p>
        <Bullets>
          <li>
            <strong>Hilton Pattaya.</strong> HotelsCombined, updated 10 October 2026, lists
            cheapest deals from about US$150 and a usual rate near US$231. A Klook listing beside
            other Pattaya hotels showed about US$206 before a taxes-and-fees total near US$242.
          </li>
          <li>
            <strong>Royal Cliff Grand.</strong> Kayak lists rooms from about US$149, an August
            average near US$151, and a December average near US$229. Vio’s October 2026 calendar
            shows nights from about US$161 to about US$272. Kayak describes it as a five-star
            cliff hotel with a private beach.
          </li>
        </Bullets>
      </Section>

      <Section title="Beach tower or cliff">
        <p>
          Hilton Pattaya is the central beach: the sand and Beach Road are the point, and Walking
          Street is a ride or a long walk south. Royal Cliff sits on the headland toward
          Pratumnak, which is the quieter sleep and a short ride back to town.
        </p>
        <p>
          Use <A href="/pattaya/where-to-stay/">where to stay</A> for Central, Jomtien, and
          Pratumnak at lower rates. Beachfront hotels that are not in this five-star sample are
          on <A href="/pattaya/beachfront-resorts/">beachfront resorts</A>. Nights out:{" "}
          <A href="/pattaya/areas/walking-street/">Walking Street</A> and{" "}
          <A href="/pattaya/cabaret-shows/">cabaret shows</A>.
        </p>
        <p>
          The bands above are listing samples, not a promise for New Year. Confirm on the spot.
        </p>
        <HotelCta label="Hilton Pattaya on Agoda" link="hiltonPattaya" />
        <HotelCta label="Royal Cliff Grand on Agoda" link="royalCliffGrandPattaya" />
      </Section>

      <FaqList
        items={[
          {
            q: "How much is a luxury hotel in Pattaya per night in 2026?",
            a: "Published samples: Hilton Pattaya about US$150–231, and Royal Cliff Grand about US$149–272 depending on the month. Confirm the rate for your dates.",
          },
          {
            q: "Is a Pattaya five-star on the beach?",
            a: "Hilton Pattaya is a beach tower in central Pattaya. Royal Cliff Grand is on a cliff with a private beach, toward Pratumnak. This page does not rank them.",
          },
          {
            q: "Does the hotel button book Hilton Pattaya?",
            a: "It opens Agoda with Hilton Pattaya shown first, and you book there. Royal Cliff Grand has its own button.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/pattaya/where-to-stay/", label: "Where to stay" },
          { href: "/pattaya/beachfront-resorts/", label: "Beachfront resorts" },
          { href: "/pattaya/couples-hotels/", label: "Hotels for couples" },
          { href: "/pattaya/areas/walking-street/", label: "Walking Street" },
        ]}
      />
    </PageShell>
  );
}
