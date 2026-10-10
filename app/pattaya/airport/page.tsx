import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Pattaya Airport Transfer 2026 – BKK & U-Tapao",
  "Bangkok Suvarnabhumi (BKK) and U-Tapao (UTP) to Walking Street, Central Pattaya and Soi 6. Shared bus, private transfer, Grab — no fake baht quotes.",
  "/pattaya/airport/",
);

export default function PattayaAirportPage() {
  return (
    <PageShell title="Pattaya Airport Transfer 2026 – BKK & U-Tapao">
      <p>
        Most visitors still arrive via Bangkok Suvarnabhumi (BKK), then road to central Pattaya.
        U-Tapao (UTP) is the closer regional airport when your ticket actually lands there. Aim for
        one base: Walking Street / Central / Soi 6 — not two hotels.
      </p>
      <section>
        <h2 className="text-lg font-semibold text-foreground">From Suvarnabhumi (BKK)</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            Shared bus / coach: common daytime option from the airport toward Pattaya. Confirm the
            drop point (North, Central, or South) against your hotel — not a street-corner “special
            van.”
          </li>
          <li>
            Private transfer: useful with luggage or a late landing. Book before you exit, or use
            the official desk — not the first laminated card in arrivals.
          </li>
          <li>
            Grab exists on this route. It is a long intercity hop, not a Sukhumvit five-minute ride.
            Check the live app fare. This page does not invent a baht number.
          </li>
        </ul>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">From U-Tapao (UTP)</h2>
        <p className="mt-2">
          Closer to Pattaya than BKK. Grab or a booked transfer into Central / Walking Street is the
          usual read. Same rule: no opaque fixed price from a tout at the door.
        </p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">Where to get dropped</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            <Link href="/pattaya/hotels-walking-street/" className="text-accent hover:underline">
              Central / near Walking Street
            </Link>{" "}
            keeps the night simple. Walking Street is pedestrian in the evening — drop at the gate,
            then walk.
          </li>
          <li>
            <Link href="/pattaya/areas/soi-6/" className="text-accent hover:underline">
              Soi 6
            </Link>{" "}
            sits between Beach Road and Second Road. Second Road is usually easier for vehicle
            access.
          </li>
          <li>
            After you are in town:{" "}
            <Link href="/pattaya/getting-around/" className="text-accent hover:underline">
              Getting around Pattaya nightlife
            </Link>{" "}
            (Grab/Bolt, baht bus if you know the route).
          </li>
        </ul>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">Taxi scams</h2>
        <p className="mt-2">
          Meter “broken” or a fixed high price is the same pattern as Bangkok. Use the app or a
          booked transfer. Details:{" "}
          <Link href="/scams/" className="text-accent hover:underline">
            Scams
          </Link>{" "}
          (taxi / tuk-tuk overcharge).
        </p>
        <p className="mt-2">
          Landing late? Check in first. First-night timing is on the{" "}
          <Link href="/pattaya/first-timer/" className="text-accent hover:underline">
            first-timer guide
          </Link>
          .
        </p>
      </section>
      <p>
        Related:{" "}
        <Link href="/pattaya/getting-around/" className="text-accent hover:underline">
          Getting around
        </Link>
        ,{" "}
        <Link href="/pattaya/first-timer/" className="text-accent hover:underline">
          First-timer
        </Link>
        ,{" "}
        <Link href="/pattaya/hotels-walking-street/" className="text-accent hover:underline">
          Stay near Walking Street
        </Link>
      </p>
    </PageShell>
  );
}
