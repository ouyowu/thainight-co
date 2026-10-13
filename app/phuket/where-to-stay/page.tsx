import { HotelCta } from "@/components/HotelCta";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Where to Stay in Phuket 2026 – Patong, Kata, Karon, Old Town",
  "Which Phuket area to sleep in for nightlife: Patong, Kata and Karon, or Phuket Old Town. Nightly ranges to confirm on the spot, plus a city-wide hotel search.",
  "/phuket/where-to-stay/",
);

export default function PhuketWhereToStayPage() {
  return (
    <PageShell
      path="/phuket/where-to-stay/"
      title="Where to Stay in Phuket (2026)"
      lead="Stay in Patong if the night is Bangla Road. Stay in Kata or Karon if the beach is the trip and Bangla is one taxi away. Stay in Phuket Old Town for the Sunday market and a cheaper room, with the west-coast beaches as a ride. There is no ranked winner."
    >
      <Section title="Which area?">
        <PriceTable
          caption="Phuket areas for a nightlife trip"
          headers={["Area", "Suits", "Nightlife already on this site", "Nightly range"]}
          rows={[
            [
              "Patong",
              "Bangla Road on foot",
              "Bangla clubs, Muay Thai, Simon Cabaret",
              "Mid-range about ฿1,500–5,000",
            ],
            [
              "Kata / Karon",
              "Beach days, an earlier night",
              "Kata and Karon markets; Bangla by taxi",
              "High-season mid-range about ฿1,800–5,000",
            ],
            [
              "Phuket Old Town",
              "Food, Sunday market, a lower rate",
              "Old Town night markets",
              "Private rooms about ฿900–3,000",
            ],
          ]}
        />
        <p className="text-sm text-muted">
          Ranges checked 13 October 2026. High season (roughly December–February) sits at the top
          of these bands. Confirm on the spot. Thai Night does not rank hotels and does not take
          payment for placement. Each button below searches Agoda for the whole of Phuket (city
          16056), not one beach and not one hotel.
        </p>
        <Bullets>
          <li>
            <strong>Patong.</strong> A 2026 area guide lists a high-season mid-range double at
            about ฿1,500–3,500 (Thailand Explorer). Another 2026 guide lists Patong budget rooms
            at about ฿600–1,500 and mid-range rooms at about ฿2,000–5,000 (Travel Guides Tip).
          </li>
          <li>
            <strong>Kata / Karon.</strong> Thailand Explorer lists a high-season mid-range double
            at about ฿2,000–4,500 in Kata and about ฿1,800–4,000 in Karon. Travel Guides Tip lists
            Kata mid-range at about ฿2,000–4,500 and Karon mid-range at about ฿2,500–5,000.
          </li>
          <li>
            <strong>Old Town.</strong> Thailand Explorer lists a mid-range double at about
            ฿900–2,500, and boutique guesthouses in restored shophouses from about ฿900–2,000.
            Travel Guides Tip lists Old Town budget rooms at about ฿400–1,000 and mid-range rooms
            at about ฿1,200–3,000.
          </li>
        </Bullets>
      </Section>

      <Section title="Patong">
        <p>
          This suits anyone whose plan is Bangla Road. The beach is there in the morning; the
          street is loud until late. Sleep a few blocks off the main road if you want the walk
          without a speaker under the window.
        </p>
        <p>
          Nights on this site: <A href="/phuket/bangla-road/">Bangla Road</A> clubs and prices,{" "}
          <A href="/phuket/muay-thai/">Muay Thai</A> at the Patong stadiums, and{" "}
          <A href="/phuket/simon-cabaret/">Simon Cabaret</A>. Parts of Bangla include
          adult-entertainment venues, which Thai Night does not cover. For food after the clubs,{" "}
          <A href="/phuket/night-markets/">Banzaan and Malin Plaza</A> are in Patong.
        </p>
        <p>
          Mid-range rooms are published at about ฿1,500–5,000 a night across the two 2026 guides,
          with budget rooms from about ฿600. Confirm on the spot.
        </p>
        <HotelCta label="Search hotels in Phuket" link="hotelPhuket" />
      </Section>

      <Section title="Kata / Karon">
        <p>
          This suits a beach base when Bangla is optional. Kata is the tighter bay. Karon is the
          longer, calmer beach just north. Both are a taxi from Patong, not a walk.
        </p>
        <p>
          Evenings here are the <A href="/phuket/night-markets/">Kata Night Market</A> (most days)
          and the Karon Temple Market (Tuesday and Friday). For clubs, ride to{" "}
          <A href="/phuket/bangla-road/">Bangla Road</A> and book the Grab before you are tired.
          West-coast <A href="/phuket/beach-clubs/">beach clubs</A> are a separate daytime plan,
          mostly further north.
        </p>
        <p>
          High-season mid-range doubles are listed at about ฿1,800–5,000 across Kata and Karon in
          the two 2026 guides. Confirm on the spot.
        </p>
        <HotelCta label="Search hotels in Phuket" link="hotelPhuket" />
      </Section>

      <Section title="Phuket Old Town">
        <p>
          This suits food, the Sunday walking street, and a lower rate than the beaches. There is
          no beach on the doorstep. Patong, Kata and the airport are Grab rides of roughly half an
          hour, depending on traffic.
        </p>
        <p>
          The night on this site is the <A href="/phuket/night-markets/">Old Town markets</A>:
          Sunday Walking Street on Thalang Road, Naka at the weekend, and Chillva on other
          evenings. Bangla is a planned outing, not a stroll.
        </p>
        <p>
          Private rooms are published at about ฿900–3,000, with some budget rooms from about ฿400.
          Confirm on the spot.
        </p>
        <HotelCta label="Search hotels in Phuket" link="hotelPhuket" />
      </Section>

      <FaqList
        items={[
          {
            q: "Where should I stay in Phuket for nightlife?",
            a: "Patong, if you want Bangla Road on foot. Kata or Karon if the beach comes first and you will taxi to Bangla. Phuket Old Town if the Sunday market and a lower rate matter more than the beach.",
          },
          {
            q: "How much is a hotel in Phuket per night in 2026?",
            a: "Published mid-range bands: Patong about ฿1,500–5,000, Kata and Karon about ฿1,800–5,000 in high season, and Old Town private rooms about ฿900–3,000. Budget rooms start lower. Confirm the rate for your dates.",
          },
          {
            q: "Does the hotel button book Patong only?",
            a: "No. It opens a Phuket-wide Agoda search. Filter there for Patong, Kata, Karon or Phuket Town. Thai Night does not link to a single hotel.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/phuket/bangla-road/", label: "Bangla Road" },
          { href: "/phuket/night-markets/", label: "Night markets" },
          { href: "/phuket/airport-to-patong-taxi-price/", label: "Airport to Patong taxi" },
          { href: "/phuket/beach-clubs/", label: "Beach clubs" },
        ]}
      />
    </PageShell>
  );
}
