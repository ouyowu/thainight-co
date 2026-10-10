import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Nana Plaza Bangkok Guide 2026 – Bars, Prices & What to Expect",
  "Nana Plaza is Bangkok’s largest and most concentrated go-go complex. Three floors, 40+ venues, 2026 prices, and what to expect.",
  "/bangkok/areas/nana-plaza/",
);

export default function NanaPlazaPage() {
  return (
    <PageShell title="Nana Plaza Bangkok Guide 2026 – Bars, Prices & What to Expect">
      <section>
        <h2 className="text-lg font-semibold text-foreground">Quick Overview</h2>
        <p className="mt-2">
          Nana Plaza is Bangkok’s largest and most concentrated go-go complex. Three floors, 40+
          venues, free entry to the plaza itself. It’s denser and more intense than Soi Cowboy.
          Better for variety and shows; slightly higher pressure and wider price swings.
        </p>
        <p className="mt-3">
          Best for: Visitors who want options and don’t mind a busier, more commercial atmosphere.
        </p>
        <p className="mt-2">
          Not ideal for: Absolute first-timers who want the calmest possible start (Soi Cowboy is
          usually easier).
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Location & How to Get There</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Address area: Sukhumvit Soi 4 (Nana)</li>
          <li>Nearest BTS: Nana (Exit 2 or 4) — about 2–3 minutes walk</li>
          <li>Also easy from Asok / Terminal 21</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Layout</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Ground floor: More open, outdoor-style bars, easier to walk and observe</li>
          <li>2nd floor: Indoor go-gos, busier</li>
          <li>3rd floor: More venues, some niche/LGBTQ-friendly options</li>
        </ul>
        <p className="mt-3">
          Walk all three floors once before sitting down. It only takes 10–15 minutes.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">2026 Typical Prices (Go-Go style)</h2>
        <div className="mt-3">
          <PriceTable
            caption="2026 Typical Prices (Go-Go style)"
            headers={["Item", "Price"]}
            rows={[
              ["Beer", "150–200 THB"],
              ["Lady drink", "220–280 THB"],
              ["Bar fine (ST)", "1,000–1,500 THB"],
              ["Girl’s short-time fee", "2,500–4,000 THB"],
              ["Full night estimate", "5,000–8,000+ THB"],
            ]}
          />
        </div>
        <p className="mt-3">
          Prices vary by bar and time. Confirm lady drink and bar fine before ordering.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">How a Night Usually Works</h2>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>Enter the plaza (no cover)</li>
          <li>Walk around and look into bars</li>
          <li>Sit down → order your own drink</li>
          <li>If a girl sits with you, lady drink is expected</li>
          <li>
            If you want her to leave with you → pay bar fine to the bar + negotiate her fee
            separately
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Practical Tips</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Pay round by round when possible</li>
          <li>Watch the plastic slip bin on the table</li>
          <li>Ground floor is usually less intense for first visits</li>
          <li>Peak hours roughly 22:00–01:00</li>
          <li>Many bars wind down after 02:00</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Safety Notes</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Keep phone and wallet secure</li>
          <li>Don’t follow anyone to “special shows” outside the main plaza</li>
          <li>Use Grab/Bolt for the ride back</li>
        </ul>
      </section>
    </PageShell>
  );
}
