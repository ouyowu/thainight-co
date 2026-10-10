import { HotelsNearBlock } from "@/components/HotelsNearBlock";
import { PageShell } from "@/components/PageShell";
import { affiliates } from "@/lib/affiliates";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "LK Metro Pattaya Guide 2026",
  "LK Metro overview: compact go-go area, mid-range prices and why many visitors find it easier than Walking Street.",
  "/pattaya/areas/lk-metro/",
);

export default function LkMetroPage() {
  return (
    <PageShell title="LK Metro Pattaya Guide 2026">
      <section>
        <h2 className="text-lg font-semibold text-foreground">Quick Overview</h2>
        <p className="mt-2">
          LK Metro is a compact go-go / bar area off Soi Diana / Soi Buakhao side. Smaller and
          generally less tourist-heavy than Walking Street. Many visitors find it more manageable
          for a first or second night.
        </p>
        <p className="mt-3">Typical 2026 ranges:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Beer: 80–150 THB</li>
          <li>Lady drink: roughly 150–220 THB</li>
          <li>Bar fine: often lower than Walking Street (commonly mid-range)</li>
        </ul>
        <p className="mt-3">
          Good for: People who want go-go style without the full Walking Street intensity and price
          premium.
        </p>
      </section>

      <HotelsNearBlock href={affiliates.hotelLkMetro} area="LK Metro" />
    </PageShell>
  );
}
