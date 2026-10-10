import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { Bullets, CheckedNote, Related, Section } from "@/components/Prose";
import { StayNearby } from "@/components/StayNearby";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Bangla Road Phuket 2026 – Clubs, Cover Charges, Drink Prices & Scams",
  "Bangla Road in Patong for 2026: Illuzion and the main clubs, cover charges, drink prices, opening hours, the best nights to go and how to avoid tab and taxi overcharges.",
  "/phuket/bangla-road/",
);

export default function BanglaRoadPage() {
  return (
    <PageShell
      path="/phuket/bangla-road/"
      title="Bangla Road, Patong (2026) – Clubs, Prices & Tips"
      lead="Bangla Road turns pedestrian around 18:00 and peaks from 23:00 to 01:00. The big clubs run until about 04:00. Expect a 500 THB cover at Illuzion; most others are free to enter."
    >
      <Section title="The main clubs">
        <PriceTable
          caption="Bangla Road clubs 2026"
          headers={["Club", "Cover (THB)", "Drinks (THB)", "Music · Hours"]}
          rows={[
            ["Illuzion", "about 500", "Cocktails 350–500", "EDM, house, hip-hop · ~20:30–04:00"],
            ["Sugar Club", "Free most nights", "Cocktails 250–400", "Hip-hop · ~21:00–04:00"],
            ["Seduction", "Free most nights", "Cocktails 200–350", "EDM, Top 40 · ~22:00–04:00"],
            ["Tiger", "Free", "Beer 100–150", "Mixed, sports screens · ~20:00–04:00"],
            ["Hollywood", "Free", "Cocktails 200–300", "Pop, EDM · ~21:00–03:00"],
          ]}
        />
        <p>Illuzion holds about 5,000 people; VIP tables with bottle service run roughly 5,000–15,000 THB.</p>
        <CheckedNote />
      </Section>

      <Section title="When to go">
        <Bullets>
          <li>Bars open around 19:00–20:00; the street fills from about 21:00.</li>
          <li>Friday and Saturday are busiest and priciest; Tuesday–Wednesday have more 2-for-1 deals.</li>
          <li>Eat first at Banzaan Market behind Jungceylon — cheap grilled seafood.</li>
        </Bullets>
      </Section>

      <Section title="Avoid overpaying">
        <Bullets>
          <li>Check the menu price before ordering and photograph your tab near closing.</li>
          <li>Ignore touts handing out “free show” flyers on side sois.</li>
          <li>Never leave a drink unattended; don’t accept drinks from strangers.</li>
          <li>Walk two or three blocks off Bangla before ordering Grab; budget 150–300 THB within Patong.</li>
          <li>Tourist Police patrol nightly; hotline 1155.</li>
        </Bullets>
        <p className="text-sm text-muted">
          Parts of the street include adult-entertainment venues, which Thai Night does not cover.
        </p>
      </Section>

      <FaqList
        items={[
          { q: "What time does Bangla Road get busy?", a: "It closes to traffic around 18:00, fills from about 21:00 and peaks between 23:00 and 01:00." },
          { q: "How much is entry to Illuzion Phuket?", a: "About 500 THB cover on most nights; other big Bangla clubs are usually free to enter." },
          { q: "What time do Bangla Road clubs close?", a: "Big clubs run until about 04:00; many bars close around 02:00." },
        ]}
      />

      <Related
        links={[
          { href: "/phuket/", label: "Phuket nightlife" },
          { href: "/phuket/muay-thai/", label: "Bangla Boxing Stadium" },
          { href: "/phuket/simon-cabaret/", label: "Simon Cabaret" },
        ]}
      />

      <StayNearby label="Hotels in Patong" link="hotelPhuket">
        <p className="mt-2">A hotel a few streets back from Bangla is walkable and much quieter.</p>
      </StayNearby>
    </PageShell>
  );
}
