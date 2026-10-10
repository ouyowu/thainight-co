import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Bangkok Airport to Nightlife 2026 – BKK & DMK",
  "Suvarnabhumi (BKK) and Don Mueang (DMK) to Nana, Asok and Sukhumvit nightlife. Airport rail/BTS vs Grab, late arrivals, no tout taxis.",
  "/bangkok/airport/",
);

export default function BangkokAirportPage() {
  return (
    <PageShell title="Bangkok Airport to Nightlife 2026 – BKK & DMK">
      <p>
        For Cowboy and Nana Plaza, land and go to the Sukhumvit corridor —{" "}
        <Link href="/bangkok/hotels-nana-asok/" className="text-accent hover:underline">
          Nana or Asok
        </Link>
        . Two airports: Suvarnabhumi (BKK) and Don Mueang (DMK). Same nightlife cluster. Different
        first hop.
      </p>
      <section>
        <h2 className="text-lg font-semibold text-foreground">Suvarnabhumi (BKK)</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Main international airport. Most long-haul flights.</li>
          <li>
            Daytime / early evening: Airport Rail Link toward the city, then BTS to Nana or Asok.
            That is the clean public-rail path — no curb negotiation.
          </li>
          <li>
            If you are tired or bags are heavy: Grab from the official pickup. Same destination —
            Sukhumvit Nana/Asok.
          </li>
        </ul>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">Don Mueang (DMK)</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Second Bangkok airport. Many regional / low-cost flights.</li>
          <li>
            No one-seat rail into Nana Plaza. Grab (or a booked transfer) to BTS Nana / Asok is the
            practical default.
          </li>
          <li>Do not invent a “cheap taxi deal” with the first person at arrivals.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">Late-night arrival</h2>
        <p className="mt-2">
          Rail and BTS stop. After that, Grab or Bolt — not a random taxi tout. Meter “broken” or a
          fixed high price is a known pattern. See{" "}
          <Link href="/scams/" className="text-accent hover:underline">
            Scams
          </Link>
          .
        </p>
        <p className="mt-2">
          If you land after midnight, check in first. Do not start Cowboy or Nana the same hour
          unless you already know the format. First-night timing lives on the{" "}
          <Link href="/bangkok/first-timer/" className="text-accent hover:underline">
            first-timer guide
          </Link>
          .
        </p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">Don’t take tout taxis</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Official app pickup or the posted public rail. Not a laminated card in the hall.</li>
          <li>Once you are on Sukhumvit, the same rule applies late: Grab/Bolt, not curb haggling.</li>
          <li>
            How the last mile works after you are in town:{" "}
            <Link href="/bangkok/getting-around/" className="text-accent hover:underline">
              Getting around Bangkok nightlife
            </Link>
            .
          </li>
        </ul>
      </section>
      <p>
        Related:{" "}
        <Link href="/bangkok/getting-around/" className="text-accent hover:underline">
          Getting around
        </Link>
        ,{" "}
        <Link href="/bangkok/first-timer/" className="text-accent hover:underline">
          First-timer
        </Link>
        ,{" "}
        <Link href="/bangkok/hotels-nana-asok/" className="text-accent hover:underline">
          Stay near Nana & Asok
        </Link>
      </p>
    </PageShell>
  );
}
