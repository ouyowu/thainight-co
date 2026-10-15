import { BookingBox } from "@/components/BookingBox";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, LinkList, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Chiang Mai Nightlife First-Timer Guide 2026",
  "First night in Chiang Mai: Nimman cocktails and clubs, Old City live music, or a night market. Where to stay and how the evening usually ends.",
  "/chiang-mai/first-timer/",
);

export default function ChiangMaiFirstTimerPage() {
  return (
    <PageShell
      path="/chiang-mai/first-timer/"
      title="Chiang Mai Nightlife First-Timer Guide (2026)"
      lead="For a first night in Chiang Mai, pick one area: Nimman for cocktails and clubs, or the Old City for live music you can walk to. Add a night market when the day matches. Most bars close around 01:00–02:00."
    >
      <Section title="Quick answer">
        <p>
          Easiest first night: one area, not a tour of the city.{" "}
          <A href="/chiang-mai/nimman-nightlife/">Nimman</A> is cocktails, rooftops and the bigger
          clubs. The <A href="/chiang-mai/old-city-nightlife/">Old City</A> is live jazz and
          backpacker bars you can walk between. A{" "}
          <A href="/chiang-mai/night-markets/">night market</A> fits before either, when your dates
          match the market.
        </p>
      </Section>

      <Section title="The main areas">
        <PriceTable
          caption="The main areas"
          headers={["Area", "Best for", "What it is", "First-timer"]}
          rows={[
            ["Nimman", "Cocktails and a club", "Bars, rooftops and the city’s bigger rooms", "★★★★★"],
            ["Old City / Tha Phae Gate", "Live music on foot", "Jazz, backpacker bars, a walkable moat", "★★★★★"],
            ["Night markets", "Food before the bars", "Sunday Walking Street, Saturday Wualai, Night Bazaar nightly", "★★★★"],
            ["Mae Ping riverside", "Dinner with a band", "Restaurants east of the Old City", "★★★★"],
          ]}
        />
      </Section>

      <Section title="Recommended first night plan">
        <ol className="list-decimal space-y-1 pl-5">
          <li>
            Late afternoon — the <A href="/chiang-mai/night-markets/">night market</A> that matches
            the day: Sunday Walking Street, Wualai on Saturday, or the Night Bazaar any evening
          </li>
          <li>
            About 21:00 — live jazz at the North Gate, or backpacker bars near Tha Phae Gate, both
            on the <A href="/chiang-mai/old-city-nightlife/">Old City</A> page
          </li>
          <li>
            Or skip the Old City and go to <A href="/chiang-mai/nimman-nightlife/">Nimman</A> for
            cocktails and a club. It is a 10–15 minute Grab from the Old City
          </li>
          <li>Home by Grab or Bolt. Most rooms close around 01:00–02:00</li>
        </ol>
        <p>
          Sunday is the easy combination already on the Old City page: Walking Street from 16:00,
          then North Gate jazz. A riverside dinner is a short ride east, then a Grab back.
        </p>
      </Section>

      <BookingBox items={[{ label: "Hotels in Chiang Mai", link: "hotelChiangMai" }]} />

      <Section title="Simple rules">
        <Bullets>
          <li>Most venues close around 01:00–02:00. Order the ride before the rush.</li>
          <li>Grab and Bolt work. On a red songthaew, agree the fare before you sit down.</li>
          <li>Many market stalls are cash only. Carry 100 THB notes.</li>
          <li>Around Loi Kroh Road, check the bill and pay per round.</li>
          <li>Bring ID. The legal drinking age in Thailand is 20.</li>
        </Bullets>
      </Section>

      <Section title="Where to stay">
        <p>
          Stay in Nimman if the night is cocktails and clubs. Stay inside the Old City if you want
          to walk to live music and the Sunday market. Stay by the Night Bazaar if you want a
          market every evening. There is no ranked winner. See{" "}
          <A href="/chiang-mai/where-to-stay/">where to stay in Chiang Mai</A>, then{" "}
          <A href="/chiang-mai/boutique-hotels/">boutique hotels</A> and{" "}
          <A href="/chiang-mai/luxury-hotels/">luxury hotels</A> if you want a smaller design stay
          or a valley resort. The hotel button searches Agoda for the whole city.
        </p>
      </Section>

      <FaqList
        items={[
          {
            q: "Where should I go on my first night out in Chiang Mai?",
            a: "Pick one area. Nimman for cocktails and clubs, or the Old City for live music you can walk to. Add a night market first when the day matches.",
          },
          {
            q: "What time do Chiang Mai bars close?",
            a: "Most venues close around 01:00–02:00.",
          },
          {
            q: "Where should I stay for a first Chiang Mai nightlife trip?",
            a: "Nimman if the night is cocktails and clubs. The Old City if you want to walk to live music and the Sunday market. The Night Bazaar if you want a market every evening.",
          },
          {
            q: "How do I get between the Old City and Nimman at night?",
            a: "Grab or Bolt. Nimman is a 10–15 minute ride from the Old City. Agree a red songthaew fare before you sit down.",
          },
        ]}
      />

      <Section title="Next steps">
        <LinkList
          links={[
            { href: "/chiang-mai/", label: "Chiang Mai nightlife" },
            { href: "/chiang-mai/night-markets/", label: "Night markets" },
            { href: "/chiang-mai/nimman-nightlife/", label: "Nimman bars and clubs" },
            { href: "/chiang-mai/old-city-nightlife/", label: "Old City and riverside" },
            { href: "/chiang-mai/where-to-stay/", label: "Where to stay" },
            { href: "/chiang-mai/boutique-hotels/", label: "Boutique hotels" },
            { href: "/chiang-mai/luxury-hotels/", label: "Luxury hotels" },
          ]}
        />
      </Section>
    </PageShell>
  );
}
