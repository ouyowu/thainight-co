import { HotelCta } from "@/components/HotelCta";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Where to Stay in Pattaya 2026 – Walking Street, Beach Road, Jomtien, Pratumnak",
  "Which Pattaya area to sleep in: Walking Street and Central, Beach Road, Jomtien, or Pratumnak. Nightly ranges to confirm on the spot, plus a city-wide hotel search.",
  "/pattaya/where-to-stay/",
);

export default function PattayaWhereToStayPage() {
  return (
    <PageShell
      path="/pattaya/where-to-stay/"
      title="Where to Stay in Pattaya (2026)"
      lead="Stay in Central Pattaya, near Walking Street, if the night is the strip and a cabaret. Stay on Beach Road if you want the sand on the same walk. Stay in Jomtien for a beach evening. Stay on Pratumnak if you want the hill between those two beaches. There is no ranked winner."
    >
      <Section title="Which area?">
        <PriceTable
          caption="Pattaya areas for a nightlife trip"
          headers={["Area", "Suits", "Nightlife already on this site", "Nightly range"]}
          rows={[
            [
              "Walking Street / Central",
              "First trip, walk to the strip",
              "Walking Street, cabaret shows",
              "About ฿800–3,500",
            ],
            [
              "Beach Road",
              "Beach and a walk to the south end",
              "Walking Street, baht bus",
              "About ฿800–3,500; beachfront often from ฿1,400",
            ],
            [
              "Jomtien",
              "A real beach and an earlier night",
              "Jomtien beach bars",
              "About ฿600–2,400; sea-view about ฿1,800–4,500",
            ],
            [
              "Pratumnak",
              "Quieter hill between the two beaches",
              "Short ride to Walking Street or Jomtien",
              "About ฿1,200–4,500",
            ],
          ]}
        />
        <p className="text-sm text-muted">
          Ranges checked 13 October 2026. They move with the date, the view and the season.
          Confirm on the spot. Thai Night does not rank hotels and does not take payment for
          placement. Each button below searches Agoda for the whole of Pattaya (city 8584), not
          one soi and not one hotel.
        </p>
        <Bullets>
          <li>
            <strong>Walking Street / Central.</strong> A June 2026 area table puts a Central
            Pattaya mid-range room (Beach Road and Soi 1–15) at about ฿900–3,500, and budget
            doubles at the Walking Street end at about ฿600–1,100 (Go To Pattaya). Another
            neighbourhood guide lists Central Pattaya at about ฿800–3,000 (3 Day Guide).
          </li>
          <li>
            <strong>Beach Road.</strong> The same two guides fold Beach Road into that central
            band (about ฿800–3,500 and about ฿800–3,000). Go To Pattaya separately lists rooms on
            the beachfront itself at about ฿1,400–3,000 and up.
          </li>
          <li>
            <strong>Jomtien.</strong> Go To Pattaya lists a mid-range room at about ฿1,000–2,400
            and a sea-view beachfront room at about ฿1,800–4,500. 3 Day Guide lists typical
            Jomtien doubles at about ฿600–2,000. A sampled mid-range average for central Jomtien
            beach hotels is about US$71 a night (TrustedTrips).
          </li>
          <li>
            <strong>Pratumnak.</strong> Go To Pattaya lists a mid-range room at about ฿1,400–2,800
            (June 2026 note). 3 Day Guide lists Pratumnak Hill at about ฿1,200–4,500.
          </li>
        </Bullets>
      </Section>

      <Section title="Walking Street / Central">
        <p>
          This suits a first Pattaya night. Central sits between Beach Road and Second Road, so
          food, a baht bus and a Grab are all close. The south end is the shortest walk to the
          strip and the noisiest sleep.
        </p>
        <p>
          Nights already covered: <A href="/pattaya/areas/walking-street/">Walking Street</A>,{" "}
          <A href="/pattaya/cabaret-shows/">cabaret shows</A> on Second Road, and{" "}
          <A href="/pattaya/areas/tree-town/">Tree Town</A> as another night in the same cluster.
        </p>
        <p>
          Block-by-block notes (Central, Beach Road, Second Road) are on the{" "}
          <A href="/pattaya/hotels-walking-street/">Walking Street hotels page</A>. This section
          does not repeat them.
        </p>
        <p>
          Published 2026 bands for this cluster run about ฿800–3,500 a night, with cheaper rooms
          at the Walking Street end from about ฿600. Confirm on the spot.
        </p>
        <HotelCta label="Search hotels in Pattaya" link="hotelWalkingStreet" />
      </Section>

      <Section title="Beach Road">
        <p>
          This suits people who want the promenade outside the door. Rooms on the sand cost more
          and hear more of the road. A few sois inland is usually the quieter version of the same
          base.
        </p>
        <p>
          Walking Street is the south end of this road after it turns pedestrian. Use the{" "}
          <A href="/pattaya/baht-bus/">baht bus</A> for hops along Beach Road and Second Road, and
          the <A href="/pattaya/areas/walking-street/">Walking Street guide</A> for the night
          itself.
        </p>
        <p>
          Inland and central rooms share the ฿800–3,500 band. Beachfront rooms were listed from
          about ฿1,400. Confirm on the spot.
        </p>
        <HotelCta label="Search hotels in Pattaya" link="hotelBeachRoad" />
      </Section>

      <Section title="Jomtien">
        <p>
          This suits a beach stay when Walking Street is one night, not the whole trip. The beach
          is longer and the bars wind down earlier than Central.
        </p>
        <p>
          The evening on this site is <A href="/pattaya/areas/jomtien-beach-road/">Jomtien Beach
          Road</A>: sunset bars and live-music cafes. A Grab or baht bus reaches{" "}
          <A href="/pattaya/areas/walking-street/">Walking Street</A> if you still want the strip.
        </p>
        <p>
          Typical doubles are published at about ฿600–2,400. A sea-view beachfront room is a
          separate band, about ฿1,800–4,500. Confirm on the spot.
        </p>
        <HotelCta label="Search hotels in Pattaya" link="hotelPattaya" />
      </Section>

      <Section title="Pratumnak">
        <p>
          This suits people who want a quieter sleep on the headland between Central Pattaya and
          Jomtien. Cosy Beach is the small beach on the hill. You are not walking distance to
          Walking Street in any useful sense; budget a short ride both ways.
        </p>
        <p>
          Use it as a base, then ride to <A href="/pattaya/areas/walking-street/">Walking Street</A>{" "}
          or down to <A href="/pattaya/areas/jomtien-beach-road/">Jomtien</A>. The{" "}
          <A href="/pattaya/baht-bus/">baht bus</A> runs the main roads; a Grab is simpler after
          midnight.
        </p>
        <p>
          Published ranges run about ฿1,200–4,500 a night, with a June 2026 mid-range note of
          about ฿1,400–2,800. Confirm on the spot.
        </p>
        <HotelCta label="Search hotels in Pattaya" link="hotelPattaya" />
      </Section>

      <Section title="Hotel types">
        <p>
          The areas above are the first choice. These pages go one step further, still without a
          ranking: <A href="/pattaya/luxury-hotels/">luxury hotels</A>,{" "}
          <A href="/pattaya/beachfront-resorts/">beachfront resorts</A>, and{" "}
          <A href="/pattaya/couples-hotels/">hotels for couples</A> (a suite, a pool, or a sea
          view). Each button on those pages is the same city-wide search.
        </p>
      </Section>

      <FaqList
        items={[
          {
            q: "Where should I stay in Pattaya for nightlife?",
            a: "Central Pattaya, near Walking Street, if you want to walk to the strip and the cabaret theatres. Jomtien or Pratumnak if the beach matters more and you will ride in for one night.",
          },
          {
            q: "How much is a hotel in Pattaya per night in 2026?",
            a: "Published bands: Central and Beach Road about ฿800–3,500, with beachfront Beach Road often from ฿1,400; Jomtien about ฿600–2,400, or about ฿1,800–4,500 for a sea-view room; Pratumnak about ฿1,200–4,500. Confirm the rate for your dates.",
          },
          {
            q: "Does the hotel button book Walking Street only?",
            a: "No. It opens a Pattaya-wide Agoda search. Filter there for Central, Beach Road, Jomtien or Pratumnak. Thai Night does not link to a single hotel.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/pattaya/hotels-walking-street/", label: "Walking Street hotels" },
          { href: "/pattaya/luxury-hotels/", label: "Luxury hotels" },
          { href: "/pattaya/beachfront-resorts/", label: "Beachfront resorts" },
          { href: "/pattaya/couples-hotels/", label: "Hotels for couples" },
          { href: "/pattaya/first-timer/", label: "First-timer" },
          { href: "/pattaya/one-night-plan/", label: "One-night plans" },
          { href: "/pattaya/getting-around/", label: "Getting around at night" },
        ]}
      />
    </PageShell>
  );
}
