import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Bangkok Ladies Night 2026 – Promo Nights for Visitors",
  "What “ladies night” and club promo nights mean on Soi 11 and club strips. No fake venue calendar — verify on the day.",
  "/bangkok/ladies-night/",
);

export default function BangkokLadiesNightPage() {
  return (
    <PageShell title="Bangkok Ladies Night 2026">
      <p>
        “Ladies night” here means a <strong>club or rooftop promo</strong> — free or cheaper entry
        or drinks for women on a named night — not a go-go format and not a dating plan. It shows up
        on{" "}
        <Link href="/bangkok/areas/soi-11/" className="text-accent hover:underline">
          Soi 11
        </Link>{" "}
        and on club strips like{" "}
        <Link href="/bangkok/areas/rca-thonglor/" className="text-accent hover:underline">
          RCA and Thonglor
        </Link>
        . Cowboy and Nana Plaza are a different night.
      </p>
      <section>
        <h2 className="text-lg font-semibold text-foreground">Treat it as a visitor concept</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Useful if you want a normal bar/club evening, groups, or couples.</li>
          <li>Not a substitute for Soi Cowboy or Nana Plaza if go-go is the goal.</li>
          <li>
            Drink prices on Soi 11 often carry a rooftop/club premium versus ordinary street bars —
            a promo night does not automatically make the bill cheap.
          </li>
          <li>
            RCA cover is often in the 300–500 THB range (sometimes includes a drink). Confirm on the
            night. ID checks are real.
          </li>
        </ul>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">No calendar on this page</h2>
        <p className="mt-2">
          We do not publish a venue-by-venue ladies-night timetable. Names, nights, and “free drink”
          rules move. Verify on the day — venue social, the door, or{" "}
          <Link href="/bangkok/tonight/" className="text-accent hover:underline">
            Tonight in Bangkok
          </Link>{" "}
          (always verify listings; they are not exhaustive).
        </p>
        <p className="mt-2">
          Weekly pattern on this site: Mon–Wed quieter · Thu building · Fri–Sat peak · Sun mixed.
          Promo nights cluster on the busier end. Still check that night.
        </p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">How to use it</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Soi 11 early if you want rooftops / mixed bars; clubs later (smart casual).</li>
          <li>RCA if you want a purpose-built club strip. Thonglor if you want upscale bars.</li>
          <li>Go-go visitors usually do not need a ladies-night hop unless they specifically want a club night.</li>
        </ul>
      </section>
      <p>
        Related:{" "}
        <Link href="/bangkok/tonight/" className="text-accent hover:underline">
          Tonight
        </Link>
        ,{" "}
        <Link href="/bangkok/areas/soi-11/" className="text-accent hover:underline">
          Soi 11
        </Link>
        ,{" "}
        <Link href="/bangkok/areas/rca-thonglor/" className="text-accent hover:underline">
          RCA & Thonglor
        </Link>
        ,{" "}
        <Link href="/bangkok/bar-types/" className="text-accent hover:underline">
          Bar types
        </Link>
      </p>
    </PageShell>
  );
}
