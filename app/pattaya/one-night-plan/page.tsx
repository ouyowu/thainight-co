import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "One Night in Pattaya Nightlife – 2026 Sample Plans",
  "Sample one-night plans for Pattaya: Walking Street first-timer, Soi 6 day-to-evening, and budget Buakhao routes.",
  "/pattaya/one-night-plan/",
);

export default function PattayaOneNightPlanPage() {
  return (
    <PageShell title="One Night in Pattaya – Sample Plans (2026)">
      <section>
        <h2 className="text-lg font-semibold text-foreground">
          Plan A — Classic first night (Walking Street)
        </h2>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>Dinner before 21:00</li>
          <li>21:30–22:00 enter Walking Street, full walk</li>
          <li>
            One go-go <strong>or</strong> one club sit
          </li>
          <li>Hard stop; Grab home</li>
        </ol>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Plan B — Soi 6 focused</h2>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>Arrive mid/late afternoon</li>
          <li>Full street walk first</li>
          <li>
            Confirm room fee + girl’s fee + any drink minimum <strong>before</strong> sitting
          </li>
          <li>Keep first stop short so you can compare</li>
        </ol>
        <p className="mt-3">
          See also: recent notes on drink minimums →{" "}
          <Link href="/pattaya/tonight/" className="text-accent hover:underline">
            Pattaya Tonight
          </Link>
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Plan C — Budget / lower pressure</h2>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>Soi Buakhao or Tree Town for food + beer</li>
          <li>Optional: LK Metro for compact go-go look</li>
          <li>Skip Walking Street premium pricing</li>
        </ol>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Plan D — Two-zone night</h2>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>Early: Buakhao / Tree Town</li>
          <li>Later: short look at Walking Street for the spectacle</li>
          <li>Don’t try to “do everything” fully in one night</li>
        </ol>
      </section>

      <p>
        Links:{" "}
        <Link href="/pattaya/first-timer/" className="text-accent hover:underline">
          First-timer
        </Link>
        ,{" "}
        <Link href="/prices/" className="text-accent hover:underline">
          Prices
        </Link>
        ,{" "}
        <Link href="/scams/" className="text-accent hover:underline">
          Scams
        </Link>
      </p>
    </PageShell>
  );
}
