import Link from "next/link";
import { HotelCta } from "@/components/HotelCta";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Soi Cowboy Bangkok Guide 2026 – Prices & Tips",
  "Soi Cowboy explained: 2026 drink and bar fine prices, layout, best for first-timers, and how a night on the strip actually works.",
  "/bangkok/areas/soi-cowboy/",
);

export default function SoiCowboyPage() {
  return (
    <PageShell title="Soi Cowboy Bangkok Guide 2026 – Prices, Bars & First-Timer Tips">
      <section>
        <h2 className="text-lg font-semibold text-foreground">Quick Overview</h2>
        <p className="mt-2">
          Soi Cowboy is Bangkok’s most beginner-friendly go-go strip. One open-air pedestrian lane
          (about 150 metres) between Sukhumvit Soi 21 and Soi 23. Easy to walk end-to-end in a few
          minutes. What you see from the street is what you get — no multi-floor maze.
        </p>
        <p className="mt-3">
          Best for: First-timers, people who want a simple layout and lower pressure.
        </p>
        <p className="mt-2">
          Compared with Nana Plaza: Less dense, more predictable prices, easier to leave if you
          don’t like a bar.
        </p>
        <p className="mt-3">
          Bar names and room notes:{" "}
          <Link href="/bangkok/areas/soi-cowboy/bars/" className="text-accent hover:underline">
            Soi Cowboy bars
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Location & Access</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Between Sukhumvit Soi 21–23</li>
          <li>Nearest BTS: Asok (very short walk)</li>
          <li>Also reachable from MRT Sukhumvit</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">2026 Typical Prices</h2>
        <div className="mt-3">
          <PriceTable
            caption="2026 Typical Prices"
            headers={["Item", "Price"]}
            rows={[
              ["Beer", "150–200 THB"],
              ["Lady drink", "220–260 THB"],
              ["Bar fine (ST)", "800–1,200 THB (many around 1,000)"],
              ["Girl’s short-time fee", "2,500–4,000 THB"],
              ["Casual drinks-only night", "500–1,000 THB"],
              ["Full ST night", "roughly 4,000–7,000+ THB"],
            ]}
          />
        </div>
        <p className="mt-3">
          Bar fines on Cowboy are relatively consistent compared with Nana Plaza.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">How a Night Works</h2>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>Walk the full street once before sitting</li>
          <li>Choose a bar and order your own drink</li>
          <li>Lady drink if someone sits with you</li>
          <li>
            If you want to leave with her → pay bar fine to the bar + negotiate her fee separately
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Practical Tips</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Peak hours roughly 21:00–01:00</li>
          <li>Most venues close around 02:00 (outside the later-closing zones)</li>
          <li>Ground-level, open-front bars make it easy to size up the atmosphere from outside</li>
          <li>Confirm lady drink and bar fine prices before committing</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Safety</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            Same rules as elsewhere: watch slips, pay round by round when possible, use Grab/Bolt
            late at night
          </li>
          <li>Less “upstairs tout” pressure than some other areas</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Next steps</h2>
        <p className="mt-2">
          <Link href="/bangkok/areas/soi-cowboy/bars/" className="text-accent hover:underline">
            Bars on Soi Cowboy
          </Link>{" "}
          ·{" "}
          <Link href="/bangkok/areas/nana-plaza/" className="text-accent hover:underline">
            Nana Plaza
          </Link>{" "}
          ·{" "}
          <Link href="/bangkok/first-timer/" className="text-accent hover:underline">
            First-timer
          </Link>{" "}
          ·{" "}
          <Link href="/prices/" className="text-accent hover:underline">
            Prices
          </Link>
        </p>
        <p className="mt-3">
          Staying nearby makes the night simpler.{" "}
          <Link href="/bangkok/hotels-soi-cowboy/" className="text-accent hover:underline">
            Where to stay near Soi Cowboy
          </Link>
          .
        </p>
        <div className="mt-3">
          <HotelCta label="Hotels near Soi Cowboy / Asok" link="hotelSoiCowboy" />
        </div>
      </section>
    </PageShell>
  );
}
