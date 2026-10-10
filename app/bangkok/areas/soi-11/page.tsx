import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Sukhumvit Soi 11 Nightlife 2026 – Bars & Clubs",
  "Soi 11 Bangkok nightlife for people who want bars, rooftops and clubs rather than go-go: what to expect and how it fits a Bangkok night.",
  "/bangkok/areas/soi-11/",
);

export default function Soi11Page() {
  return (
    <PageShell title="Sukhumvit Soi 11 Nightlife 2026">
      <p>
        Soi 11 is the main <strong>non-go-go</strong> nightlife strip near BTS Nana. Rooftops,
        cocktail bars, live music and clubs — mixed tourist and local crowds. Useful if you want a
        normal night out without the go-go format.
      </p>

      <section>
        <h2 className="text-lg font-semibold text-foreground">What it’s for</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Bar-hopping and clubs</li>
          <li>Groups and couples</li>
          <li>A contrast night after Cowboy / Nana</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">What it’s not</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Not a substitute for Soi Cowboy or Nana Plaza if go-go is the goal</li>
          <li>Drink prices are often higher than ordinary street bars (rooftop/club premium)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Practical notes</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            Nearest BTS: <strong>Nana</strong>
          </li>
          <li>Peak roughly 22:00–02:00, stronger on weekends</li>
          <li>Dress a step smarter for clubs (smart casual)</li>
          <li>
            Easy to combine: Soi 11 early → short ride/walk toward Nana Plaza or Cowboy later (or
            the reverse)
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">How it fits your trip</h2>
        <div className="mt-3">
          <PriceTable
            caption="How it fits your trip"
            headers={["Goal", "Area"]}
            rows={[
              ["Easiest first go-go night", "Soi Cowboy"],
              ["Max go-go variety", "Nana Plaza"],
              ["Bars / clubs / rooftops", "Soi 11"],
              ["Market + history", "Patpong"],
            ]}
          />
        </div>
      </section>

      <p>
        Links:{" "}
        <Link href="/bangkok/" className="text-accent hover:underline">
          Bangkok overview
        </Link>
        ,{" "}
        <Link href="/bangkok/first-timer/" className="text-accent hover:underline">
          First-timer
        </Link>
      </p>
    </PageShell>
  );
}
