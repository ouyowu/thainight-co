import Link from "next/link";
import { AreaSketch } from "@/components/AreaSketch";
import { HotelCta } from "@/components/HotelCta";
import { PageShell } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Where to Stay Near Walking Street Pattaya 2026",
  "Central Pattaya, Beach Road and Second Road tradeoffs for a Walking Street night. Pick the block, not a hotel list.",
  "/pattaya/hotels-walking-street/",
);

export default function HotelsWalkingStreetPage() {
  return (
    <PageShell title="Where to Stay Near Walking Street Pattaya 2026">
      <p>
        Walking Street is the south end of Pattaya Beach Road. It turns pedestrian at night. The
        hotel decision is Central vs Beach Road vs Second Road — not which neon tower a blog ranked
        first.
      </p>

      <section>
        <h2 className="text-lg font-semibold text-foreground">The layout</h2>
        <div className="mt-3">
          <AreaSketch
            caption="Schematic: beach, Beach Road, Walking Street at the south end, Second Road inland, Central between them."
            items={[
              { label: "Beach", note: "West" },
              { label: "Beach Road", note: "Seafront strip" },
              { label: "Walking Street", note: "South end, night", accent: true },
              { label: "Central Pattaya", note: "Between the roads", accent: true },
              { label: "Second Road", note: "Inland, cheaper hop" },
              { label: "Soi 6", note: "Short hop, not the same night" },
            ]}
          />
        </div>
        <p className="mt-3">
          One hotel in this cluster covers{" "}
          <Link href="/pattaya/areas/walking-street/" className="text-accent hover:underline">
            Walking Street
          </Link>{" "}
          and keeps{" "}
          <Link href="/pattaya/areas/soi-6/" className="text-accent hover:underline">
            Soi 6
          </Link>{" "}
          a short hop. Don’t split the trip across two distant bases.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Central vs Beach Road vs Second Road</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            <strong>Central Pattaya.</strong> Default. Between Beach Road and Second Road. Food,
            Grab, 7-Eleven, short ride to the Walking Street gate. Also the least stupid base if you
            do Soi 6 or LK Metro on another day.
          </li>
          <li>
            <strong>Beach Road, nearer the south end.</strong> Shortest walk to the strip. More
            noise, more touts at the door, more “hotel next to the party.” Fine if you want to walk
            home at 01:00 and do not care about a quiet morning.
          </li>
          <li>
            <strong>Second Road.</strong> Inland, usually easier vehicle access, often a calmer
            sleep. You add a short baht-bus or Grab hop to Walking Street. Worth it if Beach Road
            rooms look like they sit on a speaker.
          </li>
        </ul>
        <p className="mt-3">
          North Pattaya / Wongamat / Jomtien as a “Walking Street hotel” means you are commuting
          for the main night. Skip that unless the beach stay is the trip and nightlife is a side
          errand.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Stay types</h2>
        <p className="mt-2">
          Types only. Example of type: a mid hotel a few sois off Walking Street with a late desk.
          No brand, no invented rate.
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Central mid hotel — default for a first Walking Street night.</li>
          <li>Beach Road high-rise — walk, noise, sea on one side.</li>
          <li>Second Road / one soi in — sleep and a short hop.</li>
        </ul>
        <p className="mt-3">
          Guest policy is not uniform. If ST is on the table, ask before you book. Paying a Walking
          Street bar fine and then losing the argument at reception is a wasted night.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Timing and transport</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            First-timers: arrive Walking Street 21:30–22:00, full walk once, one sit. Details:{" "}
            <Link href="/pattaya/first-timer/" className="text-accent hover:underline">
              First-timer
            </Link>
            .
          </li>
          <li>Prefer Grab/Bolt. Baht bus is fine on the main roads if you know the route.</li>
          <li>Avoid opaque fixed prices from random touts at the Walking Street ends.</li>
          <li>
            Jet-ski rentals on the main beach are a known damage-claim pattern. See{" "}
            <Link href="/scams/" className="text-accent hover:underline">
              Scams
            </Link>
            . Don’t pick a hotel for “easy jet-ski access.”
          </li>
        </ul>
      </section>

      <p>
        Related:{" "}
        <Link href="/pattaya/walking-street-vs-soi-6/" className="text-accent hover:underline">
          Walking Street vs Soi 6
        </Link>
        ,{" "}
        <Link href="/pattaya/one-night-plan/" className="text-accent hover:underline">
          One-night plans
        </Link>
        ,{" "}
        <Link href="/prices/" className="text-accent hover:underline">
          Prices
        </Link>
        ,{" "}
        <Link href="/budgets/" className="text-accent hover:underline">
          Budgets
        </Link>
      </p>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Stay nearby</h2>
        <p className="mt-2">
          One search: Walking Street / Central Pattaya. Beach Road or Second Road is a filter, not
          a second booking.
        </p>
        <div className="mt-3">
          <HotelCta label="Check hotels near Walking Street / Central Pattaya" />
        </div>
      </section>
    </PageShell>
  );
}
