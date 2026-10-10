import { BookingBox } from "@/components/BookingBox";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, CheckedNote, LinkList, Section } from "@/components/Prose";
import { SisterTour } from "@/components/SisterTour";
import { chiangMaiGuides } from "@/lib/guides";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Chiang Mai Nightlife Guide 2026 – Nimman, Old City, Night Markets & Prices",
  "Chiang Mai nightlife overview: Nimman bars and clubs, Old City live music, riverside bars and the night markets, with 2026 drink prices, closing times and getting around.",
  "/chiang-mai/",
);

export default function ChiangMaiPage() {
  return (
    <PageShell
      path="/chiang-mai/"
      title="Chiang Mai Nightlife Guide 2026"
      lead="Chiang Mai nights are slower and cheaper than Bangkok: night markets from late afternoon, live music in the Old City, cocktails and clubs on Nimman. Most bars close around 01:00–02:00."
    >
      <Section title="Main areas at a glance">
        <PriceTable
          caption="Chiang Mai nightlife areas"
          headers={["Area", "Best for", "Feel"]}
          rows={[
            ["Nimman (Nimmanhaemin Rd)", "Cocktails, rooftops, clubs", "Young, stylish, students and digital nomads"],
            ["Old City / Tha Phae Gate", "Live jazz and blues, backpacker bars", "Casual, walkable"],
            ["Mae Ping riverside", "Dinner with live music", "Relaxed, couples and groups"],
            ["Night Bazaar / Chang Klan Rd", "Markets and food courts", "Touristy, busy every night"],
          ]}
        />
      </Section>

      <Section title="2026 price snapshot">
        <PriceTable
          caption="Chiang Mai nightlife prices 2026"
          headers={["Item", "Typical (THB)"]}
          rows={[
            ["Beer, Old City bar or market", "80–150"],
            ["Cocktail, backpacker bar", "100–200"],
            ["Cocktail, Nimman club or rooftop", "250–450"],
            ["Club cover on headline nights", "0–400"],
            ["Market dinner (khao soi, grilled meats)", "40–180"],
          ]}
        />
        <CheckedNote />
      </Section>

      <Section title="Practical notes">
        <Bullets>
          <li>Most venues close around 01:00–02:00; a few late spots run later.</li>
          <li>Grab and Bolt work well; red songthaews are shared and negotiated — agree the fare first.</li>
          <li>Many market stalls are cash only; carry 100 THB notes.</li>
          <li>Burning season (roughly Feb–Apr) brings smoke haze; check air quality before outdoor plans.</li>
          <li>Check bills in small bars around Loi Kroh Road — some pad tabs. Pay per round.</li>
        </Bullets>
      </Section>

      <SisterTour />

      <BookingBox items={[{ label: "Hotels in Chiang Mai (Nimman / Old City)", link: "hotelChiangMai" }]} />

      <Section title="Chiang Mai guides">
        <LinkList links={chiangMaiGuides} />
        <p>
          Coming from Bangkok? See <A href="/bangkok/">Bangkok nightlife</A>.
        </p>
      </Section>
    </PageShell>
  );
}
