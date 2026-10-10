import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Nightlife Budgets 2026 – Bangkok & Pattaya",
  "Realistic nightlife budget bands for Bangkok and Pattaya in 2026: casual bar nights, rooftop evenings, club nights and show nights.",
  "/budgets/",
);

export default function BudgetsPage() {
  return (
    <PageShell
      path="/budgets/" title="Nightlife Budgets 2026">
      <p>
        These are <strong>planning bands per person</strong>, not promises. They exclude your
        hotel. High season (roughly Nov–Apr) leans higher.
      </p>

      <Section title="Bangkok">
        <PriceTable
          caption="Bangkok budgets"
          headers={["Night", "THB", "What it covers"]}
          rows={[
            ["Casual bars", "500–1,500", "4–6 beers on Soi 11 or Khao San, Grab home"],
            ["Rooftop + bars", "1,500–3,000", "2 rooftop cocktails, dinner, a few bar drinks"],
            ["Club night", "2,000–4,000", "Entry, drinks, late Grab"],
            ["Show night", "1,500–4,000+", "Muay Thai or cabaret ticket plus drinks"],
          ]}
        />
      </Section>

      <Section title="Pattaya">
        <PriceTable
          caption="Pattaya budgets"
          headers={["Night", "THB", "What it covers"]}
          rows={[
            ["Beer-bar night", "500–1,500", "Tree Town / Soi Buakhao drinks and food"],
            ["Walking Street", "1,500–3,500", "Bar and club drinks, cover where charged"],
            ["Show night", "1,000–3,000+", "Cabaret or Muay Thai ticket plus drinks"],
          ]}
        />
      </Section>

      <Section title="Rules that save money">
        <ol className="list-decimal space-y-1 pl-5">
          <li>Eat first</li>
          <li>Use happy hours — most bars run them before 21:00</li>
          <li>Check for “++” on hotel-bar menus</li>
          <li>One rooftop is enough; finish the night somewhere cheaper</li>
          <li>Book shows online in advance when it’s cheaper than the door</li>
        </ol>
      </Section>

      <p>
        Sleep in the same area you go out in:{" "}
        <A href="/bangkok/hotels-nana-asok/">Bangkok (Sukhumvit)</A>,{" "}
        <A href="/pattaya/hotels-walking-street/">Pattaya (Walking Street / Central)</A>.
      </p>
      <Related
        links={[
          { href: "/prices/", label: "Full price tables" },
          { href: "/cash/", label: "Cash" },
          { href: "/scams/", label: "Scams" },
        ]}
      />
    </PageShell>
  );
}
