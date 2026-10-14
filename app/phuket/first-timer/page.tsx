import { BookingBox } from "@/components/BookingBox";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, LinkList, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Phuket Nightlife First-Timer Guide 2026",
  "First night in Phuket: Simon Cabaret or Muay Thai, then Bangla Road in Patong. Beach clubs and Old Town if you want a quieter evening.",
  "/phuket/first-timer/",
);

export default function PhuketFirstTimerPage() {
  return (
    <PageShell path="/phuket/first-timer/" title="Phuket Nightlife First-Timer Guide (2026)">
      <Section title="Quick answer">
        <p>
          Easiest first night: stay in Patong, see{" "}
          <A href="/phuket/simon-cabaret/">Simon Cabaret</A> or a{" "}
          <A href="/phuket/muay-thai/">Muay Thai</A> fight early, eat, then walk{" "}
          <A href="/phuket/bangla-road/">Bangla Road</A>. Want sunset and a pool instead of a club
          strip → a west-coast <A href="/phuket/beach-clubs/">beach club</A>, then an early night.
          Want a local bar, not a club → Phuket Old Town.
        </p>
      </Section>

      <Section title="The main areas">
        <PriceTable
          caption="The main areas"
          headers={["Area", "Best for", "What it is", "First-timer"]}
          rows={[
            ["Patong – Bangla Road", "First night, on foot", "Clubs and bar-hopping after the street closes to cars", "★★★★★"],
            ["West-coast beach clubs", "Daytime into sunset", "Pools and DJs at Bang Tao, Kamala and nearby", "★★★★"],
            ["Phuket Old Town", "Cocktails, Sunday market", "Quieter bars, a local crowd", "★★★★"],
            ["Kata and Karon", "A calm beach evening", "Beach bars and pubs that thin out late", "★★★"],
          ]}
        />
      </Section>

      <Section title="Recommended first night plan">
        <ol className="list-decimal space-y-1 pl-5">
          <li>Late afternoon — beach time, or a sunset stop if you are already on the west coast</li>
          <li>18:00–20:30 — <A href="/phuket/simon-cabaret/">Simon Cabaret</A> or <A href="/phuket/muay-thai/">Muay Thai</A></li>
          <li>Dinner in Patong, or at a <A href="/phuket/night-markets/">night market</A> if the night is a market night</li>
          <li>21:00 onward — walk <A href="/phuket/bangla-road/">Bangla Road</A> once before you pick a club</li>
          <li>Home by Grab or Bolt, booked a couple of blocks off the pedestrian street</li>
        </ol>
        <p>
          Ticket prices live on the cabaret and Muay Thai pages. Drink and cover prices live on the
          Bangla Road page. This guide does not repeat a number unless that page has already
          published it.
        </p>
      </Section>

      <BookingBox
        items={[
          { label: "Simon Cabaret tickets", link: "cabaretPhuket" },
          { label: "Bangla Boxing Stadium tickets", link: "muayThaiPhuket" },
          { label: "Hotels in Phuket", link: "hotelPhuket" },
        ]}
      />

      <Section title="Simple rules">
        <Bullets>
          <li>Check the menu price before you order, and pay as you go in smaller bars</li>
          <li>Ignore flyers for a free show on the side sois</li>
          <li>Bring your passport. Clubs check ID, and the legal drinking age is 20</li>
          <li>Use Grab or Bolt. Agree a tuk-tuk fare before you sit down, or skip it</li>
          <li>Parts of Bangla Road are adult-entertainment venues. Thai Night does not cover them</li>
        </Bullets>
      </Section>

      <Section title="Where to stay">
        <p>
          A Patong hotel keeps Bangla Road, Simon Cabaret and the stadiums on foot or a short ride.
          Kata and Karon are quieter and add a car to every night out. See{" "}
          <A href="/phuket/where-to-stay/">where to stay in Phuket</A>. The hotel button searches
          Agoda for the whole island.
        </p>
      </Section>

      <Section title="Next steps">
        <LinkList
          links={[
            { href: "/phuket/bangla-road/", label: "Bangla Road clubs and prices" },
            { href: "/phuket/beach-clubs/", label: "Beach clubs" },
            { href: "/phuket/getting-around/", label: "Getting around" },
            { href: "/phuket/airport-to-patong-taxi-price/", label: "Airport to Patong" },
            { href: "/thailand/alcohol-ban-days-2026/", label: "Alcohol ban days 2026" },
            { href: "/scams/", label: "Scams to avoid" },
          ]}
        />
      </Section>
    </PageShell>
  );
}
