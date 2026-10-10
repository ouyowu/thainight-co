import Link from "next/link";
import { AreaSketch } from "@/components/AreaSketch";
import { StayNearby } from "@/components/StayNearby";
import { PageShell } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Where to Stay Near Nana & Asok 2026",
  "Hotels and hostels near BTS Nana and Asok for Soi Cowboy and Nana Plaza. Pick the area and stay type, not a branded list.",
  "/bangkok/hotels-nana-asok/",
);

export default function HotelsNanaAsokPage() {
  return (
    <PageShell title="Where to Stay Near Nana & Asok 2026">
      <p>
        For a Cowboy + Nana Plaza night, the useful move is the <strong>area</strong>, not a
        “best hotel” list. Stay on the Sukhumvit corridor between BTS Nana and BTS Asok. You walk
        or take a 5–10 minute ride to both strips. That is the whole point.
      </p>

      <section>
        <h2 className="text-lg font-semibold text-foreground">The cluster</h2>
        <div className="mt-3">
          <AreaSketch
            caption="Schematic: Sukhumvit between BTS Nana and BTS Asok. Not a street-accurate map."
            items={[
              { label: "BTS Nana", note: "Soi 4 / Plaza side", accent: true },
              { label: "Sukhumvit Rd", note: "Main corridor" },
              { label: "BTS Asok", note: "Soi 21–23 / Cowboy", accent: true },
              { label: "Nana Plaza", note: "Sukhumvit Soi 4" },
              { label: "Soi Cowboy", note: "Between Soi 21 and 23" },
              { label: "MRT Sukhumvit", note: "Under Asok" },
            ]}
          />
        </div>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>
            <Link href="/bangkok/areas/nana-plaza/" className="text-accent hover:underline">
              Nana Plaza
            </Link>{" "}
            sits on Sukhumvit Soi 4. BTS Nana, Exit 2 or 4, is about a 2–3 minute walk.
          </li>
          <li>
            <Link href="/bangkok/areas/soi-cowboy/" className="text-accent hover:underline">
              Soi Cowboy
            </Link>{" "}
            sits between Sukhumvit Soi 21 and Soi 23. Nearest BTS is Asok. MRT Sukhumvit works too.
          </li>
          <li>Asok / Terminal 21 is also an easy hop to Nana Plaza if you don’t want to walk Soi 4.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Which end first?</h2>
        <p className="mt-2">
          First night default on this site is Cowboy, then Nana if you want more venues. That still
          means one hotel in this cluster — don’t split Nana one night and Asok the next unless you
          like packing.
        </p>
        <p className="mt-2">
          Closer to Nana if your main sit is the plaza. Closer to Asok if Cowboy is the plan and you
          want the shortest walk home. Either BTS works for both.
        </p>
        <p className="mt-2">
          Area comparison:{" "}
          <Link href="/bangkok/cowboy-vs-nana/" className="text-accent hover:underline">
            Soi Cowboy vs Nana Plaza
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Stay types (not a ranking)</h2>
        <p className="mt-2">
          These are types. Names and nightly rates move. Check live listings. Do not treat any
          figure on a booking site as a 2026 “standard hotel price” for this guide.
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            <strong>Walkable 3-star / mid hotel on Sukhumvit.</strong> Elevator, front desk after
            02:00, AC that works. This is the default for most first-timers.
          </li>
          <li>
            <strong>Quieter room one soi back.</strong> Same BTS, less street noise. Useful if you
            sleep late and don’t need the lobby to face Sukhumvit.
          </li>
          <li>
            <strong>Hostel / capsule near the BTS.</strong> Fine for drinks-only nights. Lockers
            matter more than décor.
          </li>
          <li>
            <strong>Higher-rise near Asok / Terminal 21.</strong> Same cluster, more insulation from
            the soi. Still a short ride, not a different neighbourhood.
          </li>
        </ul>
        <p className="mt-3">
          Bring-back reality: many mid hotels on this strip are used to late check-in. A “quiet
          family” property one soi back may not be. If ST is possible, pick a type that will not
          argue at the door. Confirm the house rule yourself — this page does not name properties.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">What to skip</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Silom / Patpong as a base for Cowboy and Nana. Extra transit for no gain.</li>
          <li>Thonglor / RCA as a “nightlife hotel” if go-go is the plan. Different night.</li>
          <li>Chasing a specific brand because a list called it the best. The BTS stop matters more.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Practical</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Late return: Grab or Bolt. Don’t haggle random taxis on Sukhumvit at 02:00.</li>
          <li>Hotel safe for the cash you are not spending that night.</li>
          <li>
            Night spend is the bar tab, not the room. See{" "}
            <Link href="/prices/" className="text-accent hover:underline">
              Prices
            </Link>{" "}
            and{" "}
            <Link href="/budgets/" className="text-accent hover:underline">
              Budgets
            </Link>
            .
          </li>
        </ul>
      </section>

      <p>
        Related:{" "}
        <Link href="/bangkok/first-timer/" className="text-accent hover:underline">
          First-timer
        </Link>
        ,{" "}
        <Link href="/bangkok/hotels-soi-cowboy/" className="text-accent hover:underline">
          Stay near Soi Cowboy
        </Link>
        ,{" "}
        <Link href="/bangkok/faq/" className="text-accent hover:underline">
          FAQ
        </Link>
      </p>

      <StayNearby label="Check hotels near Nana / Asok" link="hotelBangkok">
        <p className="mt-2">Search the Nana–Asok corridor. One listing filter is enough.</p>
      </StayNearby>
    </PageShell>
  );
}
