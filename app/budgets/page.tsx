import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Nightlife Budgets 2026 – Bangkok & Pattaya",
  "Realistic nightlife budget bands for Bangkok and Pattaya in 2026: drinks-only, mid nights and full go-go evenings.",
  "/budgets/",
);

export default function BudgetsPage() {
  return (
    <PageShell title="Nightlife Budgets 2026">
      <p>
        These are <strong>planning bands</strong>, not promises. Confirm prices on the spot. High
        season (roughly Nov–Apr) leans higher.
      </p>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Bangkok</h2>
        <div className="mt-3">
          <PriceTable
            caption="Bangkok budgets"
            headers={["Band", "THB", "What it covers"]}
            rows={[
              ["Drinks only", "500–1,500", "3–6 beers on Cowboy/Nana, no bar fine"],
              [
                "Mid night",
                "2,000–4,000",
                "Drinks + some lady drinks, maybe one bar fine without ST",
              ],
              ["Full ST night", "4,000–8,000+", "Drinks + bar fine + girl’s ST fee"],
            ]}
          />
        </div>
        <p className="mt-3">
          Easiest control: start on{" "}
          <Link href="/bangkok/areas/soi-cowboy/" className="text-accent hover:underline">
            <strong>Soi Cowboy</strong>
          </Link>
          , pay round by round.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Pattaya</h2>
        <div className="mt-3">
          <PriceTable
            caption="Pattaya budgets"
            headers={["Band", "THB", "What it covers"]}
            rows={[
              ["Budget beer-bar", "700–2,000", "Buakhao / Tree Town / casual LK drinks"],
              [
                "Soi 6 short-time",
                "2,500–5,000+",
                "Depends heavily on minimums and negotiation — confirm first",
              ],
              [
                "Walking Street go-go",
                "4,000–10,000+",
                "Easy to climb with lady drinks + fine + ST",
              ],
              ["Club add-on", "+300–1,000", "Cover + extra drinks"],
            ]}
          />
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Rules that save money</h2>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>Eat first</li>
          <li>Set a number before the first lady drink</li>
          <li>Ask every price out loud</li>
          <li>One “main” venue is enough on night one</li>
          <li>Walking Street is a premium zone by default</li>
        </ol>
      </section>

      <p>
        Sleep in the same cluster you drink in. Hotel rates are not listed here — pick the block:{" "}
        <Link href="/bangkok/hotels-nana-asok/" className="text-accent hover:underline">
          Nana & Asok
        </Link>
        ,{" "}
        <Link href="/bangkok/hotels-soi-cowboy/" className="text-accent hover:underline">
          Soi Cowboy
        </Link>
        ,{" "}
        <Link href="/pattaya/hotels-walking-street/" className="text-accent hover:underline">
          Walking Street / Central
        </Link>
        .
      </p>

      <p>
        Links:{" "}
        <Link href="/prices/" className="text-accent hover:underline">
          Full price tables
        </Link>
        ,{" "}
        <Link href="/scams/" className="text-accent hover:underline">
          Scams
        </Link>
      </p>
    </PageShell>
  );
}
