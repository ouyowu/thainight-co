import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Getting Around Pattaya Nightlife 2026",
  "Grab/Bolt, baht bus, Walking Street pedestrian hours, and the jet-ski scam to skip.",
  "/pattaya/getting-around/",
);

export default function PattayaGettingAroundPage() {
  return (
    <PageShell title="Getting Around Pattaya Nightlife 2026">
      <p>
        Prefer Grab or Bolt. Baht bus is fine on the main roads if you know the route. Avoid opaque
        fixed prices from random touts — especially at the Walking Street ends.
      </p>
      <section>
        <h2 className="text-lg font-semibold text-foreground">Grab / Bolt first</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Default late at night. One-night plans on this site end with Grab home.</li>
          <li>
            Central Pattaya keeps{" "}
            <Link href="/pattaya/areas/walking-street/" className="text-accent hover:underline">
              Walking Street
            </Link>{" "}
            and{" "}
            <Link href="/pattaya/areas/soi-6/" className="text-accent hover:underline">
              Soi 6
            </Link>{" "}
            a short hop. Don’t split the trip across two distant bases.
          </li>
          <li>
            Second Road is usually easier for vehicle access than Beach Road. A short baht-bus or
            Grab hop to Walking Street is normal.
          </li>
        </ul>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">Baht bus</h2>
        <p className="mt-2">
          Fine on Beach Road / Second Road if you already know the route. Not a negotiation sport
          with a stranger at the gate quoting a “special” price.
        </p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">Walking Street pedestrian hours</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>South end of Pattaya Beach Road.</li>
          <li>Becomes pedestrian in the evening. Plan to arrive on foot or get dropped at the gate.</li>
          <li>
            First-timers: 21:30–22:00, full walk once, then one sit. Clubs stay active after
            midnight.
          </li>
        </ul>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">Jet-skis</h2>
        <p className="mt-2">
          Main beach jet-ski rentals have a long-running damage-claim scam pattern. Avoid or
          photograph everything. Details:{" "}
          <Link href="/scams/" className="text-accent hover:underline">
            Scams
          </Link>
          .
        </p>
      </section>
      <p>
        Related:{" "}
        <Link href="/pattaya/first-timer/" className="text-accent hover:underline">
          First-timer
        </Link>
        ,{" "}
        <Link href="/pattaya/faq/" className="text-accent hover:underline">
          FAQ
        </Link>
        ,{" "}
        <Link href="/pattaya/hotels-walking-street/" className="text-accent hover:underline">
          Stay near Walking Street
        </Link>
        ,{" "}
        <Link href="/cash/" className="text-accent hover:underline">
          Cash
        </Link>
      </p>
    </PageShell>
  );
}
