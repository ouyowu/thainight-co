import { HotelCta } from "@/components/HotelCta";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Phuket Luxury Hotels 2026 – Keemala Nightly Rates",
  "What a Phuket luxury hotel costs in 2026, using Keemala in Kamala as the hotel two sources both price. Confirm on the spot. City-wide hotel search.",
  "/phuket/luxury-hotels/",
);

export default function PhuketLuxuryHotelsPage() {
  return (
    <PageShell
      path="/phuket/luxury-hotels/"
      title="Phuket Luxury Hotels (2026)"
      lead="Phuket luxury is a hillside or a beach estate, and the rate almost doubles between the rainy months and December. One Kamala hotel has a nightly band from more than one 2026 source. Thai Night does not rank the others."
    >
      <Section title="What a night costs">
        <PriceTable
          caption="A Phuket luxury hotel with more than one 2026 source"
          headers={["Hotel", "Setting", "Nightly range"]}
          rows={[
            [
              "Keemala",
              "Pool villas on a Kamala hillside",
              "About ฿15,000–25,000; about US$565–1,182",
            ],
          ]}
        />
        <p className="text-sm text-muted">
          Ranges checked 14 October 2026. The baht band and the dollar band come from different
          sites and do not convert into each other on this page. Confirm on the spot. Thai Night
          does not rank hotels and does not take payment for placement. The button searches Agoda
          for the whole of Phuket (city 16056), not Kamala and not this hotel.
        </p>
        <Bullets>
          <li>
            <strong>Baht.</strong> An August 2026 all-in guide puts Keemala from about ฿15,000 in
            low season to about ฿25,000 in the cool season, and describes tree-pool villas in the
            Kamala hills (Destination Thailand).
          </li>
          <li>
            <strong>US dollars.</strong> Kayak lists a June average near US$565 and a December
            average near US$912. Tripadvisor’s band for a standard room is US$623–1,182. Klook’s
            cheapest night in a 30-day window was US$628.34.
          </li>
        </Bullets>
      </Section>

      <Section title="A villa night, not Bangla">
        <p>
          Keemala is a small hillside resort above Kamala, with pool houses set into the slope.
          It is a taxi from Patong. You are buying the villa and the view, then riding to{" "}
          <A href="/phuket/bangla-road/">Bangla Road</A> if you want the clubs.
        </p>
        <p>
          Other west-coast luxury resorts exist. This page leaves out any nightly figure that
          only one guide states. Pool-villa rates at Trisara, which do have two sources, are on{" "}
          <A href="/phuket/pool-villas/">pool villas</A>. Areas for a normal hotel budget are on{" "}
          <A href="/phuket/where-to-stay/">where to stay</A>.
        </p>
        <p>
          High season is roughly November to April. The top of these bands is the December stay.
          Confirm on the spot.
        </p>
        <HotelCta label="Search hotels in Phuket" link="hotelPhuket" />
      </Section>

      <FaqList
        items={[
          {
            q: "How much is a luxury hotel in Phuket per night in 2026?",
            a: "For Keemala, an August 2026 guide says about ฿15,000–25,000 all-in. Kayak’s monthly averages run about US$565–912, and Tripadvisor’s standard-room band is US$623–1,182. Confirm your dates. Other resorts are not given a second rate here.",
          },
          {
            q: "Where is Keemala?",
            a: "In the hills above Kamala, on Phuket’s west coast. Patong and Bangla Road are a taxi, not a walk.",
          },
          {
            q: "Does the button book Keemala?",
            a: "No. It opens a Phuket-wide Agoda search. Thai Night does not link to a single hotel.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/phuket/where-to-stay/", label: "Where to stay" },
          { href: "/phuket/pool-villas/", label: "Pool villas" },
          { href: "/phuket/couples-hotels/", label: "Hotels for couples" },
          { href: "/phuket/bangla-road/", label: "Bangla Road" },
        ]}
      />
    </PageShell>
  );
}
