import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Pattaya Nightlife Guide 2026 – Areas & Prices",
  "Pattaya nightlife overview: Walking Street, Soi 6 and LK Metro compared. 2026 prices, best times and first-timer advice.",
  "/pattaya/",
);

export default function PattayaPage() {
  return (
    <PageShell title="Pattaya Nightlife Guide 2026 – Walking Street, Soi 6 & LK Metro">
      <section>
        <h2 className="text-lg font-semibold text-foreground">Quick Overview</h2>
        <p className="mt-2">
          Pattaya has three main nightlife zones with very different characters. Walking Street is
          the famous neon strip. Soi 6 is the direct, daytime-friendly short-time street. LK Metro
          sits in between — more compact and often less intense than Walking Street.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Main Areas at a Glance</h2>
        <div className="mt-3">
          <PriceTable
            caption="Main Areas at a Glance"
            headers={["Area", "Hours", "Style", "Cost", "Notes"]}
            rows={[
              ["Walking Street", "21:30–01:00", "Go-go, clubs, spectacle", "Higher", "Good for the classic experience"],
              ["Soi 6", "14:00–22:00", "Open beer bars, direct", "Lower", "Good if you know what you want"],
              ["LK Metro", "20:00–01:00", "Compact go-go + music", "Mid", "Often easier / lower pressure"],
            ]}
          />
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Recommended Approach</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>One night only → start with Walking Street for the full atmosphere</li>
          <li>Two or more nights → do Walking Street one night, Soi 6 or LK Metro another</li>
          <li>Want lower pressure first → many people prefer starting at LK Metro</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">2026 Price Snapshot</h2>
        <p className="mt-2">
          Walking Street (go-go style): Beer 150–220 · Lady drink 180–300 · Bar fine 1,000–2,500 ·
          Full ST night often 4,000–7,000+
        </p>
        <p className="mt-3">
          Soi 6: Beer 70–120 · Lady drink 120–220 · Room/bar fee 400–800 · Short-time commonly
          1,500–3,500 all-in range
        </p>
        <p className="mt-3">
          → Full comparison on the{" "}
          <Link href="/prices/" className="text-accent hover:underline">
            Prices page
          </Link>
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Practical Notes</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Eat before you start drinking</li>
          <li>Walk the street once before sitting down</li>
          <li>Confirm all prices before ordering rounds</li>
          <li>Use Grab or baht bus; avoid random high fixed-price transport offers</li>
          <li>Jet-ski rentals on the main beach carry a well-known scam risk</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Quick Links</h2>
        <ul className="mt-2 space-y-1">
          <li>
            <Link href="/pattaya/first-timer/" className="text-accent hover:underline">
              Pattaya First-Timer Guide
            </Link>
          </li>
          <li>
            <Link href="/pattaya/areas/walking-street/" className="text-accent hover:underline">
              Walking Street detailed guide
            </Link>
          </li>
          <li>
            <Link href="/pattaya/areas/soi-6/" className="text-accent hover:underline">
              Soi 6 detailed guide
            </Link>
          </li>
          <li>
            <Link href="/scams/" className="text-accent hover:underline">
              Scams to avoid
            </Link>
          </li>
          <li>
            <Link href="/prices/" className="text-accent hover:underline">
              Current prices
            </Link>
          </li>
        </ul>
      </section>
    </PageShell>
  );
}
