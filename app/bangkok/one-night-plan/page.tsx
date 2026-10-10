import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "One Night in Bangkok Nightlife – 2026 Sample Plans",
  "Sample one-night plans for Bangkok: first-timer go-go route, mixed bars+go-go, and club-focused options.",
  "/bangkok/one-night-plan/",
);

export default function OneNightPlanPage() {
  return (
    <PageShell title="One Night in Bangkok – Sample Plans (2026)">
      <section>
        <h2 className="text-lg font-semibold text-foreground">
          Plan A — First-timer go-go (recommended default)
        </h2>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>Dinner near Asok / Nana</li>
          <li>
            21:30 – Walk{" "}
            <Link href="/bangkok/areas/soi-cowboy/" className="text-accent hover:underline">
              <strong>Soi Cowboy</strong>
            </Link>{" "}
            end to end
          </li>
          <li>One or two bars max (e.g. observe Baccara, sit somewhere that feels calmer)</li>
          <li>
            Optional: short move to{" "}
            <Link href="/bangkok/areas/nana-plaza/" className="text-accent hover:underline">
              <strong>Nana Plaza</strong>
            </Link>
            , walk three floors, one sit
          </li>
          <li>Grab/Bolt home</li>
        </ol>
        <p className="mt-3">
          Budget mindset: drinks-only 500–1,500 THB · full ST night much higher (see{" "}
          <Link href="/prices/" className="text-accent hover:underline">
            Prices
          </Link>
          ).
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Plan B — Bars first, go-go second</h2>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>Soi 11 for 1–2 normal bars / rooftop</li>
          <li>23:00 – Nana Plaza or Cowboy for a look</li>
          <li>Hard stop time set in advance</li>
        </ol>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Plan C — Club night (no go-go)</h2>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>Thonglor or Soi 11 warm-up</li>
          <li>RCA for the main room (Fri/Sat)</li>
          <li>Bring ID, expect cover</li>
        </ol>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Plan D — Market curiosity only</h2>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>Silom dinner</li>
          <li>Patpong market walk</li>
          <li>
            <strong>Skip upstairs shows</strong>
          </li>
          <li>One ground-floor drink max, then leave</li>
        </ol>
      </section>

      <p>
        Links:{" "}
        <Link href="/bangkok/first-timer/" className="text-accent hover:underline">
          First-timer guide
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
