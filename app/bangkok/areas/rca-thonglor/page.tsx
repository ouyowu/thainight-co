import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "RCA & Thonglor Nightlife 2026 – Clubs Overview",
  "RCA and Thonglor for club and cocktail nights in Bangkok 2026: cover charges, ID checks, dress code and how to get there.",
  "/bangkok/areas/rca-thonglor/",
);

export default function RcaThonglorPage() {
  return (
    <PageShell title="RCA & Thonglor Nightlife 2026">
      <p>
        For <strong>clubs</strong> and polished bar nights, two names matter: <strong>RCA</strong>{" "}
        (Royal City Avenue) and <strong>Thonglor</strong>.
      </p>

      <section>
        <h2 className="text-lg font-semibold text-foreground">RCA</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Purpose-built club strip: big rooms, EDM / hip-hop / multi-zone venues</li>
          <li>Younger Thai crowd common</li>
          <li>
            Cover often 300–500 THB range (sometimes includes a drink) — confirm on the night
          </li>
          <li>ID checks are real; bring passport or a clear copy</li>
          <li>Transport: MRT + short Grab (no direct BTS into the strip)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Thonglor (Sukhumvit 55 area)</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>More upscale: cocktail bars, design-heavy rooms, some late clubs</li>
          <li>Higher drink prices than RCA or Soi 11</li>
          <li>BTS Thong Lo</li>
          <li>Smart casual is the safe default</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Quick comparison</h2>
        <div className="mt-3">
          <PriceTable
            caption="Quick comparison"
            headers={["", "RCA", "Thonglor"]}
            rows={[
              ["Style", "Big club production", "Upscale bars + selective clubs"],
              ["Crowd", "Young local / student-heavy", "Hi-so + expats + dressed-up visitors"],
              ["Price", "Mid club pricing", "Higher"],
              ["Night", "Festival-style club night", "Polished bar-to-club night"],
            ]}
          />
        </div>
        <p className="mt-3">
          Warm up with a rooftop such as Octave (BTS Thong Lo) before Thonglor bars.
        </p>
      </section>

      <p>
        Links:{" "}
        <Link href="/bangkok/areas/soi-11/" className="text-accent hover:underline">
          Soi 11
        </Link>
        ,{" "}
        <Link href="/bangkok/" className="text-accent hover:underline">
          Bangkok overview
        </Link>
      </p>
    </PageShell>
  );
}
