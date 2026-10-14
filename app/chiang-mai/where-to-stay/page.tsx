import { HotelCta } from "@/components/HotelCta";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Where to Stay in Chiang Mai 2026 – Nimman, Old City, Night Bazaar",
  "Which Chiang Mai area to sleep in: Nimman, the Old City, or the Night Bazaar. Nightly ranges to confirm on the spot, plus a city-wide hotel search.",
  "/chiang-mai/where-to-stay/",
);

export default function ChiangMaiWhereToStayPage() {
  return (
    <PageShell
      path="/chiang-mai/where-to-stay/"
      title="Where to Stay in Chiang Mai (2026)"
      lead="Stay in Nimman if the night is cocktails and clubs. Stay inside the Old City if you want to walk to live music and the Sunday market. Stay by the Night Bazaar if you want the market every evening and a short ride to the river. There is no ranked winner."
    >
      <Section title="Which area?">
        <PriceTable
          caption="Chiang Mai areas for a nightlife trip"
          headers={["Area", "Suits", "Nightlife already on this site", "Nightly range"]}
          rows={[
            [
              "Nimman",
              "Cocktails, clubs, cafes",
              "Nimman bars and clubs",
              "About ฿1,500–4,500",
            ],
            [
              "Old City",
              "Walkable live music and temples",
              "Old City bars, Sunday market",
              "Guesthouse ฿400–1,500; boutique ฿1,300–3,500",
            ],
            [
              "Night Bazaar",
              "A market every night",
              "Night Bazaar and Chang Klan",
              "About ฿1,200–3,500",
            ],
          ]}
        />
        <p className="text-sm text-muted">
          Ranges checked 13 October 2026. January and February sit higher than the July low-season
          listings. Confirm on the spot. Thai Night does not rank hotels and does not take payment
          for placement. Each button below searches Agoda for the whole of Chiang Mai (city 7401),
          not one neighbourhood and not one hotel.
        </p>
        <Bullets>
          <li>
            <strong>Nimman.</strong> A 2026 area guide lists a mid-range double at about
            ฿1,500–3,500 (Thailand Explorer). A January–February 2026 sample put Nimman boutique
            hotels at about ฿3,000–4,500 and budget guesthouses at about ฿1,200–2,000 (Unfold
            East).
          </li>
          <li>
            <strong>Old City.</strong> July 2026 low-season listings put dorms at about ฿170–350,
            guesthouse rooms at about ฿400–850, and boutique hotels at about ฿1,300–2,700 (Out
            Thailand). Thailand Explorer lists a mid-range double at about ฿1,200–3,000. A
            January–February 2026 sample put Old City guesthouses at about ฿800–1,500 and
            boutiques at about ฿2,500–3,500 (Unfold East).
          </li>
          <li>
            <strong>Night Bazaar.</strong> Thailand Explorer lists a mid-range double around Chang
            Klan at about ฿1,200–3,500. An August 2026 planning band put Night Bazaar mid-range
            rooms at about US$55–95 and upscale rooms at about US$120–140 (VoyageHacks). A
            September 2026 cost guide says Chang Klan rooms often run about 10–20% below a
            comparable Old City or Nimman room (Siam With Me).
          </li>
        </Bullets>
      </Section>

      <Section title="Nimman">
        <p>
          This suits cocktails, a club, and the cafe strip. Nimmanhaemin Road is west of the moat,
          about a ten-minute Grab from the Old City. It is the latest scene in town, and it still
          closes earlier than Bangkok.
        </p>
        <p>
          The night on this site is <A href="/chiang-mai/nimman-nightlife/">Nimman bars and
          clubs</A>. Sunday Walking Street is inside the Old City, so plan a ride if that market
          is the reason you came. See <A href="/chiang-mai/night-markets/">night markets</A> for
          the days.
        </p>
        <p>
          Published 2026 bands run about ฿1,500–4,500 a night, depending on whether you are in the
          mid-range guide or the January–February boutique sample. Confirm on the spot.
        </p>
        <HotelCta label="Search hotels in Chiang Mai" link="hotelChiangMai" />
      </Section>

      <Section title="Old City">
        <p>
          This suits a first visit. The moat square is walkable: temples, massage shops, and the
          Sunday market on Ratchadamnoen Road. It is quiet late. People who want clubs sleep in
          Nimman and visit the Old City by day, or the other way around.
        </p>
        <p>
          Nights on this site: <A href="/chiang-mai/old-city-nightlife/">Old City and riverside
          live music</A>, including the North Gate, and the{" "}
          <A href="/chiang-mai/night-markets/">Sunday Walking Street</A> when your dates land on a
          Sunday.
        </p>
        <p>
          Low-season guesthouses were about ฿400–850 in July 2026 listings. Boutique and mid-range
          rooms run higher, up to about ฿3,500 in the January–February sample. Confirm on the
          spot.
        </p>
        <HotelCta label="Search hotels in Chiang Mai" link="hotelChiangMai" />
      </Section>

      <Section title="Night Bazaar">
        <p>
          This suits people who want a market outside every evening. Chang Klan Road sits between
          the Old City and the Ping River. It is practical, busy, and an easy Grab to Nimman or
          the moat.
        </p>
        <p>
          Use the <A href="/chiang-mai/night-markets/">Night Bazaar and Anusarn</A> pages for what
          is open nightly, and <A href="/chiang-mai/old-city-nightlife/">riverside live music</A>{" "}
          if you walk east toward the Ping. Nimman is a separate ride:{" "}
          <A href="/chiang-mai/nimman-nightlife/">Nimman nightlife</A>.
        </p>
        <p>
          A mid-range double is listed at about ฿1,200–3,500. An August 2026 planning band put
          mid-range rooms at about US$55–95. Confirm on the spot.
        </p>
        <HotelCta label="Search hotels in Chiang Mai" link="hotelChiangMai" />
      </Section>

      <Section title="Hotel types">
        <p>
          The areas above are the first choice. These pages go one step further, still without a
          ranking: <A href="/chiang-mai/luxury-hotels/">luxury hotels</A>,{" "}
          <A href="/chiang-mai/boutique-hotels/">boutique hotels</A>, and{" "}
          <A href="/chiang-mai/couples-hotels/">hotels for couples</A> (a pavilion, a suite, a
          pool, or the river). Each button on those pages is the same city-wide search.
        </p>
      </Section>

      <FaqList
        items={[
          {
            q: "Where should I stay in Chiang Mai for nightlife?",
            a: "Nimman for cocktails and clubs. The Old City for live music you can walk to. The Night Bazaar if the nightly market is the point and you will ride to the other two.",
          },
          {
            q: "How much is a hotel in Chiang Mai per night in 2026?",
            a: "Published bands: Nimman about ฿1,500–4,500, Old City guesthouses about ฿400–1,500 and boutiques about ฿1,300–3,500, Night Bazaar mid-range about ฿1,200–3,500. January and February cost more than July. Confirm the rate for your dates.",
          },
          {
            q: "Does the hotel button book Nimman only?",
            a: "No. It opens a Chiang Mai-wide Agoda search. Filter there for Nimman, the Old City or Chang Klan. Thai Night does not link to a single hotel.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/chiang-mai/luxury-hotels/", label: "Luxury hotels" },
          { href: "/chiang-mai/boutique-hotels/", label: "Boutique hotels" },
          { href: "/chiang-mai/couples-hotels/", label: "Hotels for couples" },
          { href: "/chiang-mai/nimman-nightlife/", label: "Nimman nightlife" },
          { href: "/chiang-mai/old-city-nightlife/", label: "Old City nightlife" },
          { href: "/chiang-mai/night-markets/", label: "Night markets" },
          { href: "/chiang-mai/", label: "Chiang Mai nightlife" },
        ]}
      />
    </PageShell>
  );
}
