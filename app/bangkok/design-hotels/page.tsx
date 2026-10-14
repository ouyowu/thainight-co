import { HotelCta } from "@/components/HotelCta";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Bangkok Design Hotels 2026 – Sukhumvit Suites",
  "Design and boutique suites on Sukhumvit in 2026, with a published nightly band for 137 Pillars Suites. Confirm on the spot. City-wide hotel search.",
  "/bangkok/design-hotels/",
);

export default function BangkokDesignHotelsPage() {
  return (
    <PageShell
      path="/bangkok/design-hotels/"
      title="Bangkok Design Hotels on Sukhumvit (2026)"
      lead="Sukhumvit’s design stays are suite hotels and small residences around Thong Lo and the sois near Phrom Phong, not the famous river palaces. One property has two current published rates. Thai Night does not rank the rest."
    >
      <Section title="A verified nightly band">
        <PriceTable
          caption="Sukhumvit design suites with two 2026 sources"
          headers={["Hotel", "Where", "Nightly range"]}
          rows={[
            [
              "137 Pillars Suites & Residences",
              "Sukhumvit Soi 39, Thong Lo side",
              "About ฿9,000–12,500",
            ],
          ]}
        />
        <p className="text-sm text-muted">
          Ranges checked 14 October 2026. Confirm on the spot. Thai Night does not rank hotels
          and does not take payment for placement. The button searches Agoda for the whole of
          Bangkok (city 9395), not this hotel and not Thong Lo alone.
        </p>
        <Bullets>
          <li>
            <strong>137 Pillars Suites.</strong> An August 2026 all-in guide puts entry at about
            ฿9,000 in low season and about ฿12,500 in the cool season, and places the hotel in
            Thong Lo (Destination Thailand). A separate note dated 27 January 2026 put a one-night
            stay for two from about ฿11,076 (Fine Hotels Guide). The hotel’s own site describes
            suites from about 70 square metres on Sukhumvit Soi 39.
          </li>
          <li>
            Other design hotels in the same 2026 guides sit in Sathorn, Lang Suan, or on the
            river. Those are a different base. This page does not copy their rates onto Sukhumvit.
          </li>
        </Bullets>
      </Section>

      <Section title="Why this stretch">
        <p>
          Soi 39 is a walk to Phrom Phong and a short ride to Thong Lo. You get malls, restaurants,
          and the BTS without sleeping under a club. It is a calmer Sukhumvit than the Nana end,
          and still on the same train line as{" "}
          <A href="/bangkok/areas/soi-11/">Soi 11</A> and{" "}
          <A href="/bangkok/areas/rca-thonglor/">Thong Lo</A>.
        </p>
        <p>
          The stop-by-stop nightlife map is the{" "}
          <A href="/bangkok/hotels-nana-asok/">Sukhumvit hotels page</A>. Neighbourhoods outside
          this soi are on <A href="/bangkok/where-to-stay/">where to stay</A>. A river design
          hotel is a different trip: see{" "}
          <A href="/bangkok/luxury-hotels/">luxury hotels</A> for the priced riverside names.
        </p>
        <p>
          For this suite hotel, the two sources above land about ฿9,000–12,500 a night. Confirm
          on the spot.
        </p>
        <HotelCta label="Search hotels in Bangkok" link="hotelSukhumvit" />
      </Section>

      <FaqList
        items={[
          {
            q: "How much is a design hotel on Sukhumvit per night in 2026?",
            a: "For 137 Pillars Suites on Sukhumvit Soi 39, published figures run about ฿9,000–12,500, with a January 2026 snapshot from about ฿11,100. Other Sukhumvit design hotels are not given a second rate here. Confirm your dates.",
          },
          {
            q: "Are Sukhumvit design hotels the same as the river luxury hotels?",
            a: "No. The famous river hotels are a higher band, about ฿14,000–30,000 in the October 2026 guide. Sukhumvit Soi 39 is a suite hotel near the BTS.",
          },
          {
            q: "Does the button book Sukhumvit Soi 39?",
            a: "No. It opens a Bangkok-wide Agoda search. Filter there for Thong Lo or Sukhumvit. Thai Night does not link to a single hotel.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/bangkok/where-to-stay/", label: "Where to stay" },
          { href: "/bangkok/luxury-hotels/", label: "Luxury hotels" },
          { href: "/bangkok/couples-hotels/", label: "Hotels for couples" },
          { href: "/bangkok/hotels-nana-asok/", label: "Sukhumvit area guide" },
        ]}
      />
    </PageShell>
  );
}
