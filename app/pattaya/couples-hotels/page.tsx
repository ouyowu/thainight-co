import { HotelCta } from "@/components/HotelCta";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Pattaya Hotels for Couples 2026 – Suites, Pools and a Beach View",
  "Pattaya hotels that suit a couple: a cliff resort with a private beach, and a north-beach resort with pool suites. 2026 ranges to confirm on the spot.",
  "/pattaya/couples-hotels/",
);

export default function PattayaCouplesHotelsPage() {
  return (
    <PageShell
      path="/pattaya/couples-hotels/"
      title="Pattaya Hotels for Couples (2026)"
      lead="A Pattaya hotel that suits a couple is a full night in a quiet room: a suite, a pool, or a view of the sea, away from the loudest stretch of Beach Road. Two resorts have published rates from more than one listing. This is not a ranking."
    >
      <Section title="What a night costs">
        <PriceTable
          caption="Pattaya stays suited to two people, with two 2026 listings"
          headers={["Hotel", "Why it suits two people", "Nightly range"]}
          rows={[
            [
              "Royal Cliff Grand",
              "Cliff rooms, private beach, a quieter headland",
              "About US$149–272",
            ],
            [
              "Cape Dara Resort",
              "Private beach and suites, including a pool suite",
              "From about US$118–120",
            ],
          ]}
        />
        <p className="text-sm text-muted">
          Ranges checked 14 October 2026. The Cape Dara floor is a standard room, not the pool
          suite. Confirm on the spot. Thai Night does not rank hotels and does not take payment
          for placement. Each hotel button opens Agoda with that hotel shown first.
        </p>
        <Bullets>
          <li>
            <strong>Royal Cliff Grand.</strong> Kayak lists rooms from about US$149, with an
            August average near US$151 and a December average near US$229, and describes the
            hotel as a cliffside stay that suits a couple. Vio’s October 2026 dates run about
            US$161–272. The resort has its own beach below the cliff.
          </li>
          <li>
            <strong>Cape Dara.</strong> A standard room is listed from US$118 (Tripadvisor) and
            the cheapest night in a recent 30-day window was US$120.24 (Klook). The hotel’s own
            site also sells a beachfront suite and a private-pool suite. Only the hotel states
            those suite prices, so they are not repeated here.
          </li>
        </Bullets>
      </Section>

      <Section title="A view, then the night">
        <p>
          Both hotels are a ride from Walking Street, which is the point if you want the strip
          for one evening and a quiet room after. Royal Cliff is the headland. Cape Dara is the
          north bay. Ask for a suite or a pool suite if that is the stay; the cheap listing is
          often a standard room.
        </p>
        <p>
          The evening out is <A href="/pattaya/areas/walking-street/">Walking Street</A> or a{" "}
          <A href="/pattaya/cabaret-shows/">cabaret show</A>, then a Grab back. Area prices for
          Central and Jomtien are on <A href="/pattaya/where-to-stay/">where to stay</A>. More
          beach hotels are on <A href="/pattaya/beachfront-resorts/">beachfront resorts</A>.
        </p>
        <p>Book a full night and confirm the room type on the spot.</p>
        <HotelCta label="Royal Cliff Grand on Agoda" link="royalCliffGrandPattaya" />
        <HotelCta label="Cape Dara Resort on Agoda" link="capeDaraPattaya" />
      </Section>

      <FaqList
        items={[
          {
            q: "What kind of Pattaya hotel suits a couple?",
            a: "A full-night resort with privacy, a suite or a pool, and a sea view. Published examples are Royal Cliff Grand and Cape Dara. The cheapest listed room is not always the suite.",
          },
          {
            q: "How much is a couples hotel in Pattaya per night in 2026?",
            a: "Royal Cliff Grand is listed about US$149–272. Cape Dara’s standard room is listed from about US$118–120; the hotel’s pool suite is a separate rate. Confirm your dates.",
          },
          {
            q: "Does the button book a suite?",
            a: "Yes. Each button opens Agoda with that hotel shown first. The pool suite is a separate rate from the cheapest room.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/pattaya/where-to-stay/", label: "Where to stay" },
          { href: "/pattaya/beachfront-resorts/", label: "Beachfront resorts" },
          { href: "/pattaya/luxury-hotels/", label: "Luxury hotels" },
          { href: "/pattaya/areas/walking-street/", label: "Walking Street" },
        ]}
      />
    </PageShell>
  );
}
