import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Pattaya Nightlife FAQ 2026",
  "Common questions about Pattaya nightlife: Walking Street vs Soi 6, prices, drink minimums, budgets and first-timer tips.",
  "/pattaya/faq/",
);

export default function PattayaFaqPage() {
  return (
    <PageShell title="Pattaya Nightlife FAQ 2026">
      <section>
        <h2 className="text-lg font-semibold text-foreground">Walking Street or Soi 6 first?</h2>
        <p className="mt-2">
          <strong>Walking Street</strong> for the classic neon / go-go / club spectacle.
        </p>
        <p className="mt-2">
          <strong>Soi 6</strong> for a more direct, often daytime-to-evening short-time street.
        </p>
        <p className="mt-2">Different energy — many visitors do both on different days.</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">What about LK Metro and Soi Buakhao?</h2>
        <p className="mt-2">
          <strong>LK Metro</strong> — compact go-go, often less intense than Walking Street.
        </p>
        <p className="mt-2">
          <strong>Soi Buakhao / Tree Town</strong> — cheaper beer bars and food; good for a
          lower-spend night.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          Are drink minimums a real thing on Soi 6?
        </h2>
        <p className="mt-2">
          Some bars have been reported to require a minimum number of lady drinks before ST/upstairs.
        </p>
        <p className="mt-2">
          <strong>Always ask before you sit:</strong> room fee, girl’s fee, any drink minimum.
        </p>
        <p className="mt-2">If the total doesn’t work, walk to another bar.</p>
        <p className="mt-2">
          Details:{" "}
          <Link href="/pattaya/tonight/" className="text-accent hover:underline">
            Pattaya Tonight
          </Link>
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">How much is a normal night?</h2>
        <p className="mt-2">Rough planning bands:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Beer-bar / Buakhao style: often under a few thousand THB drinks-only</li>
          <li>Soi 6 ST: widely variable — confirm live</li>
          <li>Walking Street go-go night: can climb fast with lady drinks + fine + ST</li>
        </ul>
        <p className="mt-3">
          See{" "}
          <Link href="/prices/" className="text-accent hover:underline">
            Prices
          </Link>{" "}
          and{" "}
          <Link href="/budgets/" className="text-accent hover:underline">
            Budgets
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">What time for Walking Street?</h2>
        <p className="mt-2">
          First-timers often do well arriving <strong>21:30–22:00</strong>, full walk once, then
          one sit.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Jet-skis?</h2>
        <p className="mt-2">
          Main beach jet-ski rentals have a long-running <strong>damage claim</strong> scam
          pattern. Avoid or photograph everything extensively. See{" "}
          <Link href="/scams/" className="text-accent hover:underline">
            Scams
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Transport at night?</h2>
        <p className="mt-2">
          Prefer <strong>Grab/Bolt</strong>. Baht bus is fine on main roads if you know the route;
          avoid opaque fixed prices from random touts.
        </p>
      </section>

      <p>
        Related:{" "}
        <Link href="/pattaya/first-timer/" className="text-accent hover:underline">
          First-timer guide
        </Link>
        ,{" "}
        <Link href="/pattaya/one-night-plan/" className="text-accent hover:underline">
          One-night plans
        </Link>
        ,{" "}
        <Link href="/scams/" className="text-accent hover:underline">
          Scams
        </Link>
        ,{" "}
        <Link href="/safety/" className="text-accent hover:underline">
          Safety
        </Link>
      </p>
    </PageShell>
  );
}
