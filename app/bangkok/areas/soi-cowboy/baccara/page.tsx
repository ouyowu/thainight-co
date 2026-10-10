import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Baccara Soi Cowboy 2026",
  "Baccara on Soi Cowboy: glossy two-floor go-go, glass floor, Soi 23 end. Premium, busy. No menu prices.",
  "/bangkok/areas/soi-cowboy/baccara/",
);

export default function BaccaraPage() {
  return (
    <PageShell title="Baccara Soi Cowboy 2026">
      <p>
        Baccara is the flagship at the Soi 23 end of Cowboy. Glossy, high-energy, two floors. Glass
        floor between levels. Renovated 2025. Premium. Busiest reference point on the street.
      </p>
      <section>
        <h2 className="text-lg font-semibold text-foreground">What that means in practice</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Walk past it on the first full pass. You will not miss it.</li>
          <li>Two floors — look from the street, then decide if you sit.</li>
          <li>Premium vs the rest of the ~150-metre strip. Confirm drinks and any fine before the second round. This page does not list a Baccara menu.</li>
          <li>
            First visit on this site: walk-past of Baccara and{" "}
            <Link href="/bangkok/areas/soi-cowboy/dollhouse/" className="text-accent hover:underline">
              Dollhouse
            </Link>
            . Sit where the vibe fits after one full pass.
          </li>
        </ul>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">Cowboy ranges (street, not this bar’s menu)</h2>
        <p className="mt-2">
          Typical Cowboy 2026: beer 150–200 · lady drink 220–260 · bar fine often ~1,000 (sometimes
          800–1,200). Confirm live. Full tables:{" "}
          <Link href="/prices/" className="text-accent hover:underline">
            Prices
          </Link>
          .
        </p>
      </section>
      <p>
        Links:{" "}
        <Link href="/bangkok/areas/soi-cowboy/" className="text-accent hover:underline">
          Soi Cowboy guide
        </Link>
        ,{" "}
        <Link href="/bangkok/areas/soi-cowboy/bars/" className="text-accent hover:underline">
          Bars list
        </Link>
        ,{" "}
        <Link href="/bangkok/first-timer/" className="text-accent hover:underline">
          First-timer
        </Link>
      </p>
    </PageShell>
  );
}
