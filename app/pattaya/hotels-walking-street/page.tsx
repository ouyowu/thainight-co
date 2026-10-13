import Link from "next/link";
import { AreaSketch } from "@/components/AreaSketch";
import { StayNearby } from "@/components/StayNearby";
import { PageShell } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Where to Stay Near Walking Street Pattaya 2026",
  "Central Pattaya, Beach Road or Second Road for Walking Street, shows and Tree Town. Pick the block, not a hotel list.",
  "/pattaya/hotels-walking-street/",
);

export default function HotelsWalkingStreetPage() {
  return (
    <PageShell path="/pattaya/hotels-walking-street/" title="Where to Stay Near Walking Street Pattaya 2026">
      <p>
        Walking Street is the south end of Pattaya Beach Road. It turns pedestrian at night. The
        hotel decision is Central vs Beach Road vs Second Road — not which neon tower a blog ranked
        first. Jomtien and Pratumnak are on the{" "}
        <Link href="/pattaya/where-to-stay/" className="text-accent hover:underline">
          Pattaya where-to-stay guide
        </Link>
        .
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
              { label: "Soi Buakhao", note: "Inland, budget bars & food" },
            ]}
          />
        </div>
        <p className="mt-3">
          One hotel in this cluster covers{" "}
          <Link href="/pattaya/areas/walking-street/" className="text-accent hover:underline">
            Walking Street
          </Link>
          , the cabaret theatres on Second Road and{" "}
          <Link href="/pattaya/areas/tree-town/" className="text-accent hover:underline">
            Tree Town
          </Link>{" "}
          as short hops. Don’t split the trip across two distant bases.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Central vs Beach Road vs Second Road</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            <strong>Central Pattaya.</strong> Default. Between Beach Road and Second Road. Food,
            Grab, 7-Eleven, short ride to the Walking Street gate. Also the easiest base for Soi Buakhao and the cabaret
            shows on another night.
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
          Types only. Example of type: a mid hotel a few sois off Beach Road with a 24-hour desk.
          No brand, no invented rate.
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Central mid hotel — default for a first Walking Street night.</li>
          <li>Beach Road high-rise — walk, noise, sea on one side.</li>
          <li>Second Road / one soi in — sleep and a short hop.</li>
        </ul>
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
        <Link href="/pattaya/cabaret-shows/" className="text-accent hover:underline">
          Cabaret shows
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

      <StayNearby label="Check hotels near Walking Street / Central Pattaya" link="hotelWalkingStreet">
        <p className="mt-2">
          One search: Walking Street / Central Pattaya. Beach Road or Second Road is a filter, not
          a second booking.
        </p>
      </StayNearby>
    </PageShell>
  );
}
