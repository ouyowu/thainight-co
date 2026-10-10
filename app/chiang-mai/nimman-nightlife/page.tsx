import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { Bullets, CheckedNote, Related, Section } from "@/components/Prose";
import { StayNearby } from "@/components/StayNearby";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Nimman Nightlife Chiang Mai 2026 – Bars, Clubs, Rooftops & Prices",
  "Nimmanhaemin (Nimman) nightlife in Chiang Mai for 2026: Warm Up Cafe, Mojo, rooftop cocktails, cover charges, dress codes, closing times and prices.",
  "/chiang-mai/nimman-nightlife/",
);

export default function NimmanPage() {
  return (
    <PageShell
      path="/chiang-mai/nimman-nightlife/"
      title="Nimman Nightlife, Chiang Mai (2026)"
      lead="Nimman is Chiang Mai’s trendy strip: cocktail bars in the sois, rooftops facing Doi Suthep and the city’s biggest clubs. Expect Bangkok-style cocktail prices, Chiang Mai-style closing times."
    >
      <Section title="Where to go">
        <PriceTable
          caption="Nimman nightlife venues"
          headers={["Venue", "Type", "Notes"]}
          rows={[
            ["Warm Up Cafe", "Big club, live band + DJs", "Usually free entry; cover on headline nights"],
            ["Mojo (Soi 9)", "Upscale cocktail club", "Dress code; cover sometimes charged"],
            ["Soi 11–13 rooftops", "Cocktails with a view", "Go at sunset for Doi Suthep"],
            ["Small bars in Soi 7–9", "Craft beer, cocktails", "Easy bar-hopping on foot"],
          ]}
        />
      </Section>

      <Section title="2026 prices">
        <Bullets>
          <li>Cocktails commonly 250–450 THB at clubs and rooftops.</li>
          <li>Club cover usually free, around 200–400 THB on big DJ nights.</li>
          <li>Beer in small Nimman bars roughly 100–180 THB.</li>
        </Bullets>
        <CheckedNote />
      </Section>

      <Section title="Practical">
        <Bullets>
          <li>Most venues close around 01:00–02:00; order your Grab before the rush.</li>
          <li>Smart casual for Mojo and rooftops; bring ID — the legal drinking age is 20.</li>
          <li>Nimman is a 10–15 minute Grab from the Old City.</li>
        </Bullets>
      </Section>

      <FaqList
        items={[
          { q: "What time do Nimman bars close?", a: "Most close around 01:00–02:00; a few late spots run later." },
          { q: "Is there a cover charge at Warm Up Cafe?", a: "Usually no; expect a cover on headline DJ nights." },
        ]}
      />

      <Related
        links={[
          { href: "/chiang-mai/", label: "Chiang Mai nightlife" },
          { href: "/chiang-mai/old-city-nightlife/", label: "Old City bars" },
          { href: "/chiang-mai/night-markets/", label: "Night markets" },
        ]}
      />

      <StayNearby label="Hotels in Nimman" link="hotelChiangMai">
        <p className="mt-2">Staying in Nimman means walking home from the bars.</p>
      </StayNearby>
    </PageShell>
  );
}
