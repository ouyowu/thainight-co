import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { Bullets, CheckedNote, Related, Section } from "@/components/Prose";
import { StayNearby } from "@/components/StayNearby";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Phuket Beach Clubs 2026 – Minimum Spend, Prices & Which to Choose",
  "Phuket beach clubs compared for 2026: Catch, Café del Mar, XANA, Dream Beach Club and Bimi — minimum spend, cocktail prices, hours and how to book a daybed.",
  "/phuket/beach-clubs/",
);

export default function PhuketBeachClubsPage() {
  return (
    <PageShell
      path="/phuket/beach-clubs/"
      title="Phuket Beach Clubs (2026) – Minimum Spend & Prices"
      lead="Most Phuket beach clubs charge no entry but set a minimum spend for daybeds and sunbeds, credited to food and drinks. Cocktails run about 300–500 THB."
    >
      <Section title="Clubs compared">
        <PriceTable
          caption="Phuket beach clubs 2026"
          headers={["Club", "Area", "Minimum spend (THB)", "Cocktails (THB)"]}
          rows={[
            ["Catch Beach Club", "Bang Tao", "about 6,000–8,000", "350–500"],
            ["Café del Mar", "Kamala", "about 3,000–5,000", "350–500"],
            ["Dream Beach Club", "Layan", "about 3,000–6,000", "350–500"],
            ["XANA Beach Club", "Bang Tao (Angsana)", "about 2,500–4,000", "300–450"],
            ["Bimi Beach Club", "Rawai", "No minimum, walk-in", "250–400"],
          ]}
        />
        <p>Minimum spends are usually per daybed or group, and rise on weekends, holidays and event days.</p>
        <CheckedNote />
      </Section>

      <Section title="Tips">
        <Bullets>
          <li>Book daybeds ahead for weekends and sunset; bar seats are often walk-in.</li>
          <li>Check whether the minimum spend includes service charge and VAT.</li>
          <li>Plan transport back: west-coast clubs are 20–40 minutes from Patong by Grab.</li>
          <li>Go late afternoon for sunset, then dinner, then Bangla Road if you still have energy.</li>
        </Bullets>
      </Section>

      <FaqList
        items={[
          { q: "Do Phuket beach clubs charge entry?", a: "Most don’t charge entry; they set a minimum spend for daybeds or sunbeds that goes toward food and drinks." },
          { q: "Which Phuket beach club is cheapest?", a: "Bimi in Rawai has no minimum spend; XANA has one of the lower minimums among the big clubs." },
        ]}
      />

      <Related
        links={[
          { href: "/phuket/", label: "Phuket nightlife" },
          { href: "/phuket/bangla-road/", label: "Bangla Road" },
          { href: "/phuket/night-markets/", label: "Night markets" },
        ]}
      />

      <StayNearby label="Hotels in Phuket" link="hotelPhuket">
        <p className="mt-2">Staying in Bang Tao or Kamala puts the big beach clubs close by.</p>
      </StayNearby>
    </PageShell>
  );
}
