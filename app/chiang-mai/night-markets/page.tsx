import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { Bullets, CheckedNote, Related, Section } from "@/components/Prose";
import { SisterTour } from "@/components/SisterTour";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Chiang Mai 2026: Sunday & Saturday Streets, Night Bazaar",
  "Chiang Mai night markets in 2026: Sunday Walking Street, Wualai Saturday, Night Bazaar, Chang Phueak and Chiang Mai Gate — days, hours and bargaining.",
  "/chiang-mai/night-markets/",
);

export default function ChiangMaiNightMarketsPage() {
  return (
    <PageShell
      path="/chiang-mai/night-markets/"
      title="Chiang Mai Night Markets (2026)"
      lead="Do the Sunday Walking Street if your dates allow — it’s the biggest. Saturday is Wualai for silver and crafts. Every night, the Night Bazaar covers souvenirs and Chang Phueak covers food."
    >
      <Section title="Markets, days and hours">
        <PriceTable
          caption="Chiang Mai night markets 2026"
          headers={["Market", "When", "Best for"]}
          rows={[
            ["Sunday Walking Street (Ratchadamnoen Rd, from Tha Phae Gate)", "Sun ~16:00–23:00", "Biggest: crafts, food, street music"],
            ["Wualai Saturday Walking Street (south of the moat)", "Sat ~16:00–22:30", "Silverwork, ceramics, textiles"],
            ["Night Bazaar (Chang Klan Rd)", "Daily ~17:00–24:00", "Souvenirs, food courts"],
            ["Anusarn Market (south end of Chang Klan)", "Daily ~17:00–24:00", "Seafood and Thai food court"],
            ["Chang Phueak Gate market", "Daily ~17:00–24:00", "Local food; famous khao soi"],
            ["Chiang Mai Gate market", "Daily, morning and ~18:00–24:00", "Cheap local dinners"],
          ]}
        />
        <CheckedNote what="Days and hours" />
      </Section>

      <Section title="What things cost">
        <Bullets>
          <li>Market dishes mostly 40–180 THB; khao soi around 40–60 THB.</li>
          <li>Hand-painted umbrellas and crafts: opening prices often ~1.5× what stalls accept.</li>
          <li>Night Bazaar souvenirs: openers can be 2× the closing price — compare stalls first.</li>
          <li>Silver at Wualai: everyday jewellery roughly 800–3,000 THB; 10–15% off is realistic.</li>
        </Bullets>
      </Section>

      <Section title="Tips">
        <Bullets>
          <li>Arrive before 18:00 on Sunday — by 19:30 the street is shoulder to shoulder.</li>
          <li>Bring cash in 100 THB notes; foreign-card ATM withdrawals cost about 220 THB each.</li>
          <li>Food prices are fixed; bargain only on goods, and smile.</li>
          <li>Grab home: the walking streets close to traffic, so walk to a main road for pickup.</li>
        </Bullets>
      </Section>

      <SisterTour />

      <FaqList
        items={[
          { q: "Which night market in Chiang Mai is best?", a: "The Sunday Walking Street is the biggest and best overall. Wualai on Saturday is better for silver and crafts; the Night Bazaar runs every night." },
          { q: "What day is the Chiang Mai walking street?", a: "Sunday on Ratchadamnoen Road from Tha Phae Gate, and Saturday on Wualai Road south of the Old City." },
          { q: "Can I bargain at Chiang Mai night markets?", a: "Yes for goods, especially at the Night Bazaar. Food prices are fixed." },
        ]}
      />

      <Related
        links={[
          { href: "/chiang-mai/", label: "Chiang Mai nightlife" },
          { href: "/chiang-mai/old-city-nightlife/", label: "Old City bars" },
          { href: "/cash/", label: "Cash & ATMs" },
        ]}
      />
    </PageShell>
  );
}
