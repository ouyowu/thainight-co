import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Bangkok Nightlife Prices 2026",
  "2026 Bangkok go-go ranges: beer, lady drink, bar fine, short-time fee, and a typical full-night total.",
  "/bangkok/prices/",
);

export default function BangkokPricesPage() {
  return (
    <PageShell
      title="Bangkok Nightlife Prices (2026)"
      lead="These are go-go ranges for Soi Cowboy and Nana Plaza. Individual bars sit inside the band. Confirm the number before you order."
    >
      <PriceTable
        caption="Bangkok 2026 go-go prices"
        headers={["Item", "Typical range"]}
        rows={[
          ["Beer", "150–200 THB"],
          ["Lady drink", "200–260 THB"],
          ["Bar fine (ST)", "800–1,200 THB"],
          ["Girl’s short-time fee", "2,500–4,000 THB"],
          ["Full night (drinks + bar fine + ST)", "4,000–7,000+ THB"],
        ]}
      />
      <p>
        Bar fine = paid to the bar so she can leave. Her fee = negotiated directly with her. Always
        confirm both numbers before you leave the bar.
      </p>
      <p>
        Pay round by round when possible. A padded bill is easier when everything sits on one tab.
        Watch the slips that go into the plastic bin on your table.
      </p>
      <p>
        National lookup:{" "}
        <Link href="/prices/" className="text-accent hover:underline">
          current prices (2026)
        </Link>
        . Scam list:{" "}
        <Link href="/scams/" className="text-accent hover:underline">
          common scams
        </Link>
        .
      </p>
    </PageShell>
  );
}
