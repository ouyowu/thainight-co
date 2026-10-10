import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Thailand Nightlife Prices 2026 – Bangkok & Pattaya",
  "2026 price reference for Bangkok and Pattaya: beer, lady drinks, bar fines and short-time ranges by area.",
  "/prices/",
);

export default function PricesPage() {
  return (
    <PageShell title="Thailand Nightlife Prices 2026 – Bangkok & Pattaya Quick Reference">
      <p>
        Prices are approximate ranges based on recent visitor reports. Always confirm on the spot.
        High season (Nov–Apr) tends toward the higher end.
      </p>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Bangkok</h2>
        <div className="mt-3">
          <PriceTable
            caption="Bangkok nightlife prices"
            headers={["Item", "Soi Cowboy", "Nana Plaza", "Notes"]}
            rows={[
              ["Beer", "150–200", "150–200", "—"],
              ["Lady drink", "220–260", "220–280", "Confirm before ordering"],
              ["Bar fine (ST)", "800–1,200", "1,000–1,500", "Paid to the bar"],
              ["Girl’s ST fee", "2,500–4,000", "2,500–4,000", "Negotiated with her"],
              ["Casual night (drinks only)", "500–1,000", "500–1,200", "—"],
              ["Full ST night", "4,000–7,000+", "5,000–8,000+", "—"],
            ]}
          />
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Pattaya</h2>
        <div className="mt-3">
          <PriceTable
            caption="Pattaya nightlife prices"
            headers={["Item", "Soi 6", "Walking Street (Go-Go)", "LK Metro (approx.)"]}
            rows={[
              ["Beer", "70–120", "150–220", "80–150"],
              ["Lady drink", "120–220", "180–300", "150–220"],
              ["Bar / room fee", "400–800", "1,000–2,500", "800–1,500"],
              ["Short-time total", "1,500–3,500", "4,000–7,000+", "3,000–5,500"],
              ["Drinks-only night", "700–1,500", "1,500–3,500", "1,000–2,500"],
            ]}
          />
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Key Reminders</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Bar fine ≠ girl’s fee. Two separate payments.</li>
          <li>Lady drinks add up faster than most people expect.</li>
          <li>Paying round-by-round reduces bill surprises.</li>
          <li>Low season (roughly May–Oct) can be 10–30% cheaper in some places.</li>
        </ul>
      </section>
    </PageShell>
  );
}
