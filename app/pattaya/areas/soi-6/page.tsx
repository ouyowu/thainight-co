import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Soi 6 Pattaya Guide 2026 – Prices, Bars & First-Timer Tips",
  "Soi 6 is Pattaya’s most direct short-time street. Open-front beer bars, daytime-active, 2026 prices and first-timer tips.",
  "/pattaya/areas/soi-6/",
);

export default function Soi6Page() {
  return (
    <PageShell title="Soi 6 Pattaya Guide 2026 – Prices, Bars & First-Timer Tips">
      <section>
        <h2 className="text-lg font-semibold text-foreground">Quick Overview</h2>
        <p className="mt-2">
          Soi 6 is Pattaya’s most direct short-time street. Open-front beer bars on both sides,
          daytime-active, faster pace than Walking Street. No big stage shows — more transactional
          and straightforward.
        </p>
        <p className="mt-3">
          Best for: People who want lower prices and a clear, no-frills experience.
        </p>
        <p className="mt-2">
          Not ideal for: Visitors looking for clubs, big productions, or a late-night party
          atmosphere.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Location & Hours</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Between Beach Road and Second Road</li>
          <li>Roughly 400 metres long, ~90–100 bars</li>
          <li>Active from early afternoon; peak usually 14:00–22:00</li>
          <li>Quieter late at night compared with Walking Street</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">2026 Typical Prices</h2>
        <div className="mt-3">
          <PriceTable
            caption="2026 Typical Prices"
            headers={["Item", "Price"]}
            rows={[
              ["Beer", "70–120 THB (happy hour often lower)"],
              ["Lady drink", "120–220 THB"],
              ["Room / bar fee", "400–800 THB"],
              ["Short-time arrangement", "1,500–3,000 THB (common range)"],
              ["Light visit (drinks only)", "700–1,500 THB"],
              ["Full short-time visit", "often 2,500–5,000+ THB all-in"],
            ]}
          />
        </div>
        <p className="mt-3">
          Note: Soi 6 is mainly short-time focused. Long-time deals are less common and often poorer
          value here.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">How It Works</h2>
        <p className="mt-2">Unlike Walking Street go-gos, many Soi 6 bars operate more directly:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>You walk in</li>
          <li>Sit / talk</li>
          <li>Agree the arrangement and room fee</li>
          <li>Go upstairs (or to a nearby short-time hotel)</li>
        </ul>
        <p className="mt-3">Always confirm the total numbers before anything starts.</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">First-Timer Tips</h2>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>Walk the entire street once before choosing a bar</li>
          <li>Start earlier (afternoon or early evening) for a less intense atmosphere</li>
          <li>Carry small bills (50s and 100s)</li>
          <li>Don’t feel pressured to sit at the first place that pulls you in</li>
          <li>Keep the first stop short so you can compare</li>
        </ol>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Soi 6 vs Walking Street (Quick)</h2>
        <div className="mt-3">
          <PriceTable
            caption="Soi 6 vs Walking Street"
            headers={["", "Soi 6", "Walking Street"]}
            rows={[
              ["Hours", "Afternoon–early evening", "Late evening"],
              ["Style", "beer bars, direct", "go-go, clubs, spectacle"],
              ["Price", "lower price", "higher price"],
              ["Feel", "fast, compact", "loud, neon, tourist-heavy"],
            ]}
          />
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Safety</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            Same basic rules as elsewhere: watch your belongings, confirm prices, use Grab if needed
          </li>
          <li>The street is busy and well-lit during peak hours</li>
        </ul>
      </section>
    </PageShell>
  );
}
