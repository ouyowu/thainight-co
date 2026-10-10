import Link from "next/link";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { PageShell } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

const faqItems = [
  {
    q: "Walking Street or Soi 6 first?",
    a: "Walking Street for the classic neon / go-go / club spectacle. Soi 6 for a more direct, often daytime-to-evening short-time street. Different energy — many visitors do both on different days.",
  },
  {
    q: "What about LK Metro and Soi Buakhao?",
    a: "LK Metro — compact go-go, often less intense than Walking Street. Soi Buakhao / Tree Town — cheaper beer bars and food; good for a lower-spend night.",
  },
  {
    q: "Are drink minimums a real thing on Soi 6?",
    a: "Some bars have been reported to require a minimum number of lady drinks before ST/upstairs. Always ask before you sit: room fee, girl’s fee, any drink minimum. If the total doesn’t work, walk to another bar. Details: Pattaya Tonight.",
  },
  {
    q: "How much is a normal night?",
    a: "Rough planning bands: Beer-bar / Buakhao style: often under a few thousand THB drinks-oney. Soi 6 ST: widely variable — confirm live. Walking Street go-go night: can climb fast with lady drinks + fine + ST. See Prices and Budgets.",
  },
  {
    q: "What time for Walking Street?",
    a: "First-timers often do well arriving 21:30–22:00, full walk once, then one sit.",
  },
  {
    q: "Jet-skis?",
    a: "Main beach jet-ski rentals have a long-running damage claim scam pattern. Avoid or photograph everything extensively. See Scams.",
  },
  {
    q: "Transport at night?",
    a: "Prefer Grab/Bolt. Baht bus is fine on main roads if you know the route; avoid opaque fixed prices from random touts.",
  },
];

export const metadata = pageMeta(
  "Pattaya Nightlife FAQ 2026",
  "Common questions about Pattaya nightlife: Walking Street vs Soi 6, prices, drink minimums, budgets and first-timer tips.",
  "/pattaya/faq/",
);

export default function PattayaFaqPage() {
  return (
    <PageShell title="Pattaya Nightlife FAQ 2026">
      <FaqJsonLd items={faqItems} />
      <section>
        <h2 className="text-lg font-semibold text-foreground">Walking Street or Soi 6 first?</h2>
        <p className="mt-2">
          <strong>Walking Street</strong> for the classic neon / go-go / club spectacle.
        </p>
        <p className="mt-2">
          <strong>Soi 6</strong> for a more direct, often daytime-to-evening short-time street.
        </p>
        <p className="mt-2">Different energy — many visitors do both on different days.</p>
        <p className="mt-2">
          Full comparison:{" "}
          <Link href="/pattaya/walking-street-vs-soi-6/" className="text-accent hover:underline">
            Walking Street vs Soi 6
          </Link>
        </p>
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
          </Link>
          ,{" "}
          <Link href="/budgets/" className="text-accent hover:underline">
            Budgets
          </Link>
          , and{" "}
          <Link href="/cash/" className="text-accent hover:underline">
            Cash
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
          avoid opaque fixed prices from random touts.{" "}
          <Link href="/pattaya/getting-around/" className="text-accent hover:underline">
            Getting around
          </Link>
          {" · "}
          <Link href="/pattaya/airport/" className="text-accent hover:underline">
            Airport
          </Link>
          .
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
        ,{" "}
        <Link href="/pattaya/walking-street-vs-soi-6/" className="text-accent hover:underline">
          Walking Street vs Soi 6
        </Link>
        ,{" "}
        <Link href="/pattaya/getting-around/" className="text-accent hover:underline">
          Getting around
        </Link>
        ,{" "}
        <Link href="/pattaya/airport/" className="text-accent hover:underline">
          Airport
        </Link>
        ,{" "}
        <Link href="/pattaya/night-activities/" className="text-accent hover:underline">
          Night activities
        </Link>
        ,{" "}
        <Link href="/pattaya/bar-types/" className="text-accent hover:underline">
          Bar types
        </Link>
        ,{" "}
        <Link href="/cash/" className="text-accent hover:underline">
          Cash
        </Link>
      </p>
      <p className="mt-2">
        Stay nearby / hotel notes:{" "}
        <Link href="/pattaya/first-timer/" className="text-accent hover:underline">
          First-timer guide
        </Link>{" "}
        (Stay nearby).
      </p>
    </PageShell>
  );
}
