import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { Bullets, CheckedNote, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Old City & Riverside Nightlife 2026 – Chiang Mai Bars & Prices",
  "Old City and riverside nightlife in Chiang Mai for 2026: North Gate Jazz Co-Op, bars near Tha Phae Gate, riverside live music, prices and bill tips.",
  "/chiang-mai/old-city-nightlife/",
);

export default function OldCityPage() {
  return (
    <PageShell
      path="/chiang-mai/old-city-nightlife/"
      title="Chiang Mai Old City & Riverside Nightlife (2026)"
      lead="The Old City is the cheapest, most walkable night out in Chiang Mai: live jazz at the North Gate, backpacker bars near Tha Phae Gate, and riverside restaurants with bands a short ride east."
    >
      <Section title="Where to go">
        <PriceTable
          caption="Old City and riverside venues"
          headers={["Venue / area", "What it is", "Price feel"]}
          rows={[
            ["North Gate Jazz Co-Op (Chang Phueak Gate)", "Live jazz from about 21:00, local + expat crowd", "Beer about 80–120 THB"],
            ["Backpacker bars near Tha Phae Gate", "Cheap cocktails, Top 40, late-ish", "Cocktails about 100–200 THB"],
            ["Small bars in the Old City sois", "Quiet drinks, mixed crowd", "Drinks about 100–180 THB"],
            ["Riverside restaurants (Charoen Prathet Rd)", "Dinner with live Thai and Western covers", "Dinner + drinks about 800–1,500 THB pp"],
          ]}
        />
        <CheckedNote />
      </Section>

      <Section title="Bill tips">
        <Bullets>
          <li>Small bars around Loi Kroh Road are where padded bills get reported. Check the printed menu and pay per round.</li>
          <li>Live-music venues rarely charge cover; tip the band jar if you stay.</li>
        </Bullets>
      </Section>

      <Section title="Pair it with">
        <Bullets>
          <li>Sunday Walking Street from 16:00, then North Gate jazz.</li>
          <li>Riverside dinner, then a Grab back to the Old City.</li>
        </Bullets>
      </Section>

      <FaqList
        items={[
          { q: "Where is live music in Chiang Mai?", a: "North Gate Jazz Co-Op in the Old City for jazz, and the riverside restaurants on Charoen Prathet Road for bands with dinner." },
          { q: "Is Chiang Mai nightlife cheap?", a: "Cheaper than Bangkok: beers about 80–150 THB in Old City bars and markets." },
        ]}
      />

      <Related
        links={[
          { href: "/chiang-mai/", label: "Chiang Mai nightlife" },
          { href: "/chiang-mai/nimman-nightlife/", label: "Nimman" },
          { href: "/chiang-mai/night-markets/", label: "Night markets" },
        ]}
      />
    </PageShell>
  );
}
