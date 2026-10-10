import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Sukhumvit Soi 11 Nightlife 2026 – Bars & Clubs",
  "Sukhumvit Soi 11 nightlife: bars, a rooftop, live music and clubs near BTS Nana — what to expect, prices and how it fits a Bangkok night.",
  "/bangkok/areas/soi-11/",
);

export default function Soi11Page() {
  return (
    <PageShell title="Sukhumvit Soi 11 Nightlife 2026">
      <p>
        Soi 11 is the easiest all-round nightlife strip in Bangkok, right by BTS Nana. Rooftops,
        cocktail bars, live music and clubs — mixed tourist and local crowds. The best first-night
        base for most visitors.
      </p>

      <section>
        <h2 className="text-lg font-semibold text-foreground">What it’s for</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Bar-hopping and clubs</li>
          <li>Groups and couples</li>
          <li>A first night when you don’t know the city yet</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">What it’s not</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Not the cheapest — Khao San and street bars cost less</li>
          <li>Drink prices are often higher than ordinary street bars (rooftop/club premium)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Practical notes</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            Nearest BTS: <strong>Nana</strong>. Rooftops nearby:{" "}
            <Link href="/bangkok/soi-11-rooftop-bars/" className="text-accent hover:underline">
              Soi 11 rooftop bars
            </Link>
          </li>
          <li>Peak roughly 22:00–02:00, stronger on weekends</li>
          <li>Dress a step smarter for clubs (smart casual)</li>
          <li>
            Easy to combine: rooftop sunset elsewhere → dinner → Soi 11 bars and clubs
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
              ["Upscale cocktails, live music", "Thonglor"],
              ["Big club night", "RCA"],
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
