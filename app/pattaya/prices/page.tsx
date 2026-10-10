import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Pattaya Nightlife Prices (2026)",
  "Walking Street costs more. Soi 6 is cheaper and more all-in. LK Metro sits in the middle. Confirm the number before the first lady drink.",
  "/pattaya/prices/",
);

export default function PattayaPricesPage() {
  return (
    <PageShell
      title="Pattaya Nightlife Prices (2026)"
      lead="Walking Street costs more. Soi 6 is cheaper and more all-in. LK Metro sits in the middle. Confirm the number before the first lady drink."
    >
      <h2 className="text-lg font-semibold text-foreground">Walking Street</h2>
      <PriceTable
        caption="Walking Street prices"
        headers={["Item", "Price"]}
        rows={[
          ["Beer", "150–220 THB"],
          ["Lady drink", "180–300 THB"],
          ["Bar fine", "1,000–2,500 THB"],
          ["Short-time total (bar fine + her fee)", "often 4,000–7,000+ THB"],
        ]}
      />
      <h2 className="text-lg font-semibold text-foreground">Soi 6</h2>
      <PriceTable
        caption="Soi 6 prices"
        headers={["Item", "Price"]}
        rows={[
          ["Beer", "70–120 THB"],
          ["Lady drink", "120–220 THB"],
          ["Room / bar fee", "400–800 THB"],
          ["Short-time arrangement", "commonly 1,500–3,000 THB all-in"],
        ]}
      />
      <p>
        Bar fine = paid to the bar. Her fee is separate and must be agreed with her. Soi 6 room /
        bar fees are a different structure — ask what is included.
      </p>
      <p>
        <Link href="/prices/" className="text-accent hover:underline">
          National price lookup
        </Link>
      </p>
    </PageShell>
  );
}
