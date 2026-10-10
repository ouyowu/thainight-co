import Link from "next/link";
import { HotelsNearBlock } from "@/components/HotelsNearBlock";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { affiliates } from "@/lib/affiliates";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Walking Street Pattaya Guide 2026 – Prices & Clubs",
  "Walking Street complete guide: 2026 prices, go-go and club scene, best arrival time and how to avoid common bill issues.",
  "/pattaya/areas/walking-street/",
);

export default function WalkingStreetPage() {
  return (
    <PageShell title="Walking Street Pattaya Guide 2026 – Prices, Clubs & What to Expect">
      <section>
        <h2 className="text-lg font-semibold text-foreground">Quick Overview</h2>
        <p className="mt-2">
          Walking Street is Pattaya’s most famous nightlife strip — neon, go-go bars, clubs, live
          music, heavy foot traffic. It’s the “big show” version of Pattaya nightlife. Higher prices
          and more intensity than Soi 6 or LK Metro.
        </p>
        <p className="mt-3">
          Best for: First-time visitors who want the classic experience and the full spectacle.
        </p>
        <p className="mt-2">
          Not ideal for: People looking for the cheapest drinks or a low-pressure evening.
        </p>
        <p className="mt-3">
          Venue types and example names:{" "}
          <Link href="/pattaya/areas/walking-street/venues/" className="text-accent hover:underline">
            Walking Street venues
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Location & Timing</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>South end of Pattaya Beach Road</li>
          <li>Becomes pedestrian in the evening</li>
          <li>Best window for first-timers: 21:30–00:00</li>
          <li>Clubs and later venues stay active after midnight</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">2026 Typical Prices</h2>
        <div className="mt-3">
          <PriceTable
            caption="2026 Typical Prices"
            headers={["Item", "Price"]}
            rows={[
              ["Beer (go-go / main venues)", "150–220 THB"],
              ["Lady drink", "180–300 THB"],
              ["Cocktail", "250–400 THB"],
              ["Go-go bar fine", "1,000–2,500 THB"],
              ["Short-time total (bar fine + her fee)", "often 4,000–7,000+ THB"],
              ["Drinks-only casual night", "1,500–3,500 THB"],
              ["Full go-go night", "5,000–10,000+ THB possible"],
            ]}
          />
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Recommended First Approach</h2>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>Eat dinner first</li>
          <li>Arrive around 21:30–22:00</li>
          <li>Walk the full length once without entering every place</li>
          <li>Pick one or two stops</li>
          <li>Decide your spending limit before the second round of drinks</li>
        </ol>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Walking Street vs Other Areas</h2>
        <div className="mt-3">
          <PriceTable
            caption="Walking Street vs Other Areas"
            headers={["Area", "When", "Style", "Cost", "Notes"]}
            rows={[
              ["Walking Street", "Late evening", "Spectacle, clubs, go-go", "Highest", "Good for the classic experience"],
              ["Soi 6", "Afternoon–early evening", "Direct beer bars", "Lower", "Good if you know what you want"],
              ["LK Metro", "Evening", "Compact go-go + music", "Mid", "Often easier / lower pressure"],
            ]}
          />
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Practical Tips</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Confirm lady drink and bar fine prices before ordering rounds</li>
          <li>Watch for padded bills — pay attention to the slip bin</li>
          <li>Clubs may have entry fees on busy nights (sometimes includes a drink)</li>
          <li>Use Grab or baht bus; avoid random high fixed-price offers late at night</li>
        </ul>
      </section>

      <HotelsNearBlock href={affiliates.hotelWalkingStreet} cta="Hotels near Walking Street" />
    </PageShell>
  );
}
