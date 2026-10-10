import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Pattaya Night Activities 2026 – Walking Street to Buakhao",
  "Walking Street spectacle, Soi 6 daytime-evening, LK Metro, Buakhao and Tree Town — and when not to do jet-ski. Practical 2026 order.",
  "/pattaya/night-activities/",
);

export default function PattayaNightActivitiesPage() {
  return (
    <PageShell title="Pattaya Night Activities 2026">
      <p>
        Pattaya nights are area choices, not a checklist. One night: pick a spectacle or a simpler
        street. Do not stack Walking Street clubs and Soi 6 at full intensity, then add a beach toy.
      </p>
      <section>
        <h2 className="text-lg font-semibold text-foreground">Walking Street spectacle</h2>
        <p className="mt-2">
          <Link href="/pattaya/areas/walking-street/" className="text-accent hover:underline">
            Walking Street
          </Link>{" "}
          is the neon strip: go-go, clubs, live music, heavy foot traffic. Pedestrian in the
          evening. First-timers: 21:30–22:00, full walk once, then one sit. Clubs stay active after
          midnight. Higher prices and more intensity than Soi 6 or LK Metro.
        </p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">Soi 6 daytime–evening</h2>
        <p className="mt-2">
          <Link href="/pattaya/areas/soi-6/" className="text-accent hover:underline">
            Soi 6
          </Link>{" "}
          is daytime-friendly and more direct. Peak usually 14:00–22:00. Quieter late versus Walking
          Street. Different energy — not a club strip. Confirm room fee, girl’s fee, and any drink
          minimum before you sit.
        </p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">LK Metro</h2>
        <p className="mt-2">
          <Link href="/pattaya/areas/lk-metro/" className="text-accent hover:underline">
            LK Metro
          </Link>{" "}
          is compact go-go off the Soi Diana / Buakhao side. Smaller and generally less
          tourist-heavy than Walking Street. Many visitors find it more manageable for a first or
          second night.
        </p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">Buakhao / Tree Town</h2>
        <p className="mt-2">
          <Link href="/pattaya/areas/soi-buakhao/" className="text-accent hover:underline">
            Soi Buakhao
          </Link>{" "}
          is the budget beer-bar corridor.{" "}
          <Link href="/pattaya/areas/tree-town/" className="text-accent hover:underline">
            Tree Town
          </Link>{" "}
          is the open courtyard: food, live music, several bars in one compound. Good start or
          drinks-only night. Not the classic neon spectacle.
        </p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">When NOT to do jet-ski</h2>
        <p className="mt-2">
          Main beach jet-ski rentals have a long-running damage-claim scam. Do not add this to a
          nightlife day. Avoid, or photograph everything if you still rent. Details:{" "}
          <Link href="/scams/" className="text-accent hover:underline">
            Scams
          </Link>
          .
        </p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">Simple sequences</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>One night only → Walking Street for the full atmosphere.</li>
          <li>Two nights → Walking Street one night; Soi 6 or LK Metro another.</li>
          <li>Lower pressure first → LK Metro, or Buakhao / Tree Town then decide.</li>
        </ul>
      </section>
      <p>
        Related:{" "}
        <Link href="/pattaya/first-timer/" className="text-accent hover:underline">
          First-timer
        </Link>
        ,{" "}
        <Link href="/pattaya/bar-types/" className="text-accent hover:underline">
          Bar types
        </Link>
        ,{" "}
        <Link href="/pattaya/walking-street-vs-soi-6/" className="text-accent hover:underline">
          Walking Street vs Soi 6
        </Link>
      </p>
    </PageShell>
  );
}
