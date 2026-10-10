import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Nana Plaza Floors Guide 2026 – Ground, 2nd & 3rd",
  "Floor-by-floor guide to Nana Plaza Bangkok: what each level feels like and how to walk it on a first visit.",
  "/bangkok/areas/nana-plaza/floors/",
);

export default function NanaPlazaFloorsPage() {
  return (
    <PageShell title="Nana Plaza Floors Guide 2026">
      <p>
        Nana Plaza is a three-floor complex off Sukhumvit Soi 4. Free entry to the plaza. Walk all
        three floors once (10–15 minutes) before you sit.
      </p>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Floor overview</h2>
        <div className="mt-3">
          <PriceTable
            caption="Floor overview"
            headers={["Floor", "Feel", "Use"]}
            rows={[
              ["Ground", "Most open, easier to observe, outdoor-style edges", "First look, lower intensity start"],
              ["2nd", "Core go-go activity, busier indoor rooms", "Main session for most visitors"],
              ["3rd", "More venues, mixed energy, some quieter rooms", "Second pass or specific bars"],
            ]}
          />
        </div>
        <p className="mt-3">
          Names and exact lineups change. Treat bar names as{" "}
          <em>examples of the type of room</em>, not permanent rankings.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Practical route (first visit)</h2>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>Enter from Soi 4 (near BTS Nana)</li>
          <li>Walk ground level fully</li>
          <li>Go up to 2nd, walk the corridor once</li>
          <li>Quick look at 3rd</li>
          <li>Return to the floor/bar that felt right</li>
        </ol>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Price reminder (go-go style, 2026)</h2>
        <p className="mt-2">
          Beer 150–200 · Lady drink 220–280 · Bar fine (ST) often 1,000–1,500 · Girl’s fee separate
        </p>
      </section>

      <p>
        Links:{" "}
        <Link href="/bangkok/areas/nana-plaza/" className="text-accent hover:underline">
          Full Nana Plaza guide
        </Link>
        ,{" "}
        <Link href="/scams/" className="text-accent hover:underline">
          Scams
        </Link>
      </p>
    </PageShell>
  );
}
