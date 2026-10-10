import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Bangkok Night Activities 2026 – Muay Thai, Rooftops, Markets",
  "How to sequence Muay Thai evening stadiums, Soi 11 rooftops and night markets with Soi Cowboy or Nana Plaza. Practical 2026 order, not a ticket list.",
  "/bangkok/night-activities/",
);

export default function BangkokNightActivitiesPage() {
  return (
    <PageShell title="Bangkok Night Activities 2026">
      <p>
        You can stack a “normal” Bangkok evening in front of go-go — or skip it. One night: do not
        try stadium + rooftop + Cowboy + Nana at full intensity. Pick a sequence.
      </p>
      <section>
        <h2 className="text-lg font-semibold text-foreground">Muay Thai (evening stadiums)</h2>
        <p className="mt-2">
          Evening fights are a type of night out, not a bar. The two names people use as types are{" "}
          <strong>Rajadamnern</strong> and <strong>Lumpinee</strong> — stadium formats, not a Thai
          Night ranking and not a live card. Confirm the card, start time, and seat class on the
          day. This page does not publish ticket prices.
        </p>
        <p className="mt-2">
          Sequence: stadium earlier, then Grab to Sukhumvit for{" "}
          <Link href="/bangkok/areas/soi-cowboy/" className="text-accent hover:underline">
            Soi Cowboy
          </Link>{" "}
          or{" "}
          <Link href="/bangkok/areas/nana-plaza/" className="text-accent hover:underline">
            Nana Plaza
          </Link>
          . If you only have one night and go-go is the goal, skip the stadium.
        </p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">Soi 11 rooftops and bars</h2>
        <p className="mt-2">
          <Link href="/bangkok/areas/soi-11/" className="text-accent hover:underline">
            Soi 11
          </Link>{" "}
          is the non-go-go strip near BTS Nana: rooftops, cocktail bars, live music, clubs. Useful
          as a contrast night or a warm-up. Drink prices often carry a rooftop/club premium versus
          ordinary street bars. Peak roughly 22:00–02:00, stronger on weekends.
        </p>
        <p className="mt-2">
          Easy combine: Soi 11 early → short ride/walk toward Nana Plaza or Cowboy later (or the
          reverse). Club-heavy nights also live on{" "}
          <Link href="/bangkok/areas/rca-thonglor/" className="text-accent hover:underline">
            RCA & Thonglor
          </Link>
          .
        </p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">Night markets (including Patpong)</h2>
        <p className="mt-2">
          <Link href="/bangkok/areas/patpong/" className="text-accent hover:underline">
            Patpong
          </Link>{" "}
          is market + history + a low-pressure drink — not the main go-go night in 2026. Arrive
          after 19:00 for market atmosphere. Never follow touts upstairs for “cheap shows.” Grab/Bolt
          back to Sukhumvit if that is your hotel.
        </p>
        <p className="mt-2">
          Treat any other night market the same way: food and walking first. Then one go-go sit, not
          a second district.
        </p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">How to sequence with Cowboy / Nana</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>One night, go-go only: Cowboy first (easiest layout), Nana if you still want more.</li>
          <li>One night, mixed: market or Soi 11 early → one strip. Not both stadium and two plazas.</li>
          <li>Two nights: stadium or rooftops on one; Cowboy / Nana on the other.</li>
        </ul>
      </section>
      <p>
        Related:{" "}
        <Link href="/bangkok/first-timer/" className="text-accent hover:underline">
          First-timer
        </Link>
        ,{" "}
        <Link href="/bangkok/one-night-plan/" className="text-accent hover:underline">
          One-night plans
        </Link>
        ,{" "}
        <Link href="/bangkok/bar-types/" className="text-accent hover:underline">
          Bar types
        </Link>
      </p>
    </PageShell>
  );
}
