import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Related } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

const lead =
  "Typical 2026 ranges for a night out in Bangkok, from street bars to hotel rooftops. Individual venues sit inside the band. Confirm before you order.";

export const metadata = pageMeta("Bangkok Nightlife Prices (2026)", lead, "/bangkok/prices/");

export default function BangkokPricesPage() {
  return (
    <PageShell title="Bangkok Nightlife Prices (2026)" lead={lead}>
      <PriceTable
        caption="Bangkok 2026 nightlife prices"
        headers={["Item", "Typical range"]}
        rows={[
          ["Beer, street / Khao San", "80–150 THB"],
          ["Beer, Sukhumvit bar", "120–220 THB"],
          ["Craft beer", "250–400 THB"],
          ["Cocktail, cocktail bar", "250–450 THB"],
          ["Cocktail, hotel rooftop", "400–900+ THB (often ++)"],
          ["Club entry", "300–500 THB"],
          ["Grab across Sukhumvit", "80–200 THB"],
        ]}
      />
      <p>
        “++” means 10% service charge plus 7% VAT are added to the menu price. Hotel bars and most
        rooftops use it; street bars usually don’t.
      </p>
      <p>
        Sky bars with an entry fee: some, such as the observation-deck style bars, charge entry that
        includes one drink. Details on <A href="/bangkok/rooftop-bars/">rooftop bars</A>.
      </p>
      <Related
        links={[
          { href: "/prices/", label: "All prices" },
          { href: "/budgets/", label: "Budgets" },
          { href: "/bangkok/first-timer/", label: "First-timer guide" },
        ]}
      />
    </PageShell>
  );
}
