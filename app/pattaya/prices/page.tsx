import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Related } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

const lead =
  "Typical 2026 ranges for a night out in Pattaya, from open beer bars to Walking Street clubs. Confirm before you order.";

export const metadata = pageMeta("Pattaya Nightlife Prices (2026)", lead, "/pattaya/prices/");

export default function PattayaPricesPage() {
  return (
    <PageShell path="/pattaya/prices/" title="Pattaya Nightlife Prices (2026)" lead={lead}>
      <PriceTable
        caption="Pattaya 2026 nightlife prices"
        headers={["Item", "Typical range"]}
        rows={[
          ["Beer, open beer bar", "60–130 THB"],
          ["Beer, Walking Street bar / club", "150–250 THB"],
          ["Cocktail, club", "250–400 THB"],
          ["Bucket / tower deals", "Varies — count the drinks"],
          ["Baht bus, fixed route", "10–20 THB per person"],
        ]}
      />
      <p>
        Cabaret and Muay Thai tickets depend on seat class: see{" "}
        <A href="/pattaya/cabaret-shows/">cabaret shows</A> and{" "}
        <A href="/pattaya/night-activities/">night activities</A>.
      </p>
      <Related
        links={[
          { href: "/prices/", label: "All prices" },
          { href: "/budgets/", label: "Budgets" },
          { href: "/pattaya/first-timer/", label: "First-timer guide" },
        ]}
      />
    </PageShell>
  );
}
