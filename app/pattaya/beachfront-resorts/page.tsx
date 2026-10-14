import { HotelCta } from "@/components/HotelCta";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Pattaya Beachfront Resorts 2026 – Nightly Rates",
  "Pattaya beachfront hotel rates in 2026: Cape Dara and Hilton Pattaya, from published listings. Confirm on the spot. City-wide hotel search.",
  "/pattaya/beachfront-resorts/",
);

export default function PattayaBeachfrontResortsPage() {
  return (
    <PageShell
      path="/pattaya/beachfront-resorts/"
      title="Pattaya Beachfront Resorts (2026)"
      lead="A beachfront stay in Pattaya means the Gulf is outside, not a ranked resort list. Two properties have a nightly figure from more than one current listing: a north-Pattaya resort with its own beach, and a central beach tower."
    >
      <Section title="What a night costs">
        <PriceTable
          caption="Beachfront Pattaya hotels with two 2026 listings"
          headers={["Hotel", "Beach", "Nightly range"]}
          rows={[
            [
              "Cape Dara Resort",
              "Private beach, North Pattaya",
              "From about US$118–120",
            ],
            [
              "Hilton Pattaya",
              "Pattaya Beach, central",
              "About US$150–231",
            ],
          ]}
        />
        <p className="text-sm text-muted">
          Ranges checked 14 October 2026. A sea-view suite costs more than the cheapest room.
          Confirm on the spot. Thai Night does not rank hotels and does not take payment for
          placement. The button searches Agoda for the whole of Pattaya (city 8584), not one beach.
        </p>
        <Bullets>
          <li>
            <strong>Cape Dara.</strong> Tripadvisor’s published band for a standard room starts
            at US$118. Klook’s cheapest night in a 30-day window was US$120.24. The resort’s own
            site describes a private beach on Pattaya Bay and a beachfront suite; this page does
            not repeat a suite rate that only the hotel states.
          </li>
          <li>
            <strong>Hilton Pattaya.</strong> HotelsCombined, updated 10 October 2026, lists deals
            from about US$150 and a usual rate near US$231. Klook showed about US$206 before fees.
            The hotel faces Pattaya Beach.
          </li>
        </Bullets>
      </Section>

      <Section title="North beach or central beach">
        <p>
          Cape Dara is the quieter north end: a resort beach, then a ride to Walking Street.
          Hilton is central, so the promenade is the walk and the road is louder. Jomtien is a
          third beach, covered as an area on{" "}
          <A href="/pattaya/where-to-stay/">where to stay</A> and{" "}
          <A href="/pattaya/areas/jomtien-beach-road/">Jomtien Beach Road</A>, without a second
          resort rate repeated here.
        </p>
        <p>
          Five-star samples that include the cliff are on{" "}
          <A href="/pattaya/luxury-hotels/">luxury hotels</A>. For a room that is mainly a view
          and a pool, see <A href="/pattaya/couples-hotels/">hotels for couples</A>.
        </p>
        <p>
          The floors above are the cheap end of recent listings. A beachfront suite is a
          different number. Confirm on the spot.
        </p>
        <HotelCta label="Search hotels in Pattaya" link="hotelBeachRoad" />
      </Section>

      <FaqList
        items={[
          {
            q: "How much is a beachfront hotel in Pattaya per night in 2026?",
            a: "Recent listings put Cape Dara from about US$118–120 and Hilton Pattaya about US$150–231. A suite or a holiday week costs more. Confirm your dates.",
          },
          {
            q: "Which Pattaya beach are these hotels on?",
            a: "Cape Dara has its own beach in North Pattaya. Hilton Pattaya faces Pattaya Beach in the centre. Jomtien is a separate beach.",
          },
          {
            q: "Does the button book a beachfront room?",
            a: "No. It opens a Pattaya-wide Agoda search. Filter there for beachfront. Thai Night does not link to a single hotel.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/pattaya/where-to-stay/", label: "Where to stay" },
          { href: "/pattaya/luxury-hotels/", label: "Luxury hotels" },
          { href: "/pattaya/couples-hotels/", label: "Hotels for couples" },
          { href: "/pattaya/areas/jomtien-beach-road/", label: "Jomtien Beach Road" },
        ]}
      />
    </PageShell>
  );
}
