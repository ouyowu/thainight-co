import Link from "next/link";
import { HotelCta } from "@/components/HotelCta";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Pattaya Nightlife First-Timer Guide 2026",
  "First night plan for Pattaya. Walking Street vs Soi 6 vs LK Metro, current prices and practical rules for 2026.",
  "/pattaya/first-timer/",
);

export default function PattayaFirstTimerPage() {
  return (
    <PageShell title="Pattaya Nightlife First-Timer Guide (2026)">
      <section>
        <h2 className="text-lg font-semibold text-foreground">Quick Answer</h2>
        <p className="mt-2">
          Want the classic big neon experience → Walking Street; Want cheaper, faster, more direct
          → Soi 6; Want a middle ground with live music → LK Metro. Many people do Walking Street
          one night and Soi 6 the next.
        </p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">Main Areas Compared</h2>
        <div className="mt-3">
          <PriceTable
            caption="Main Areas Compared"
            headers={["Area", "Hours", "Style", "Cost", "Notes"]}
            rows={[
              ["Walking Street", "21:30–01:00", "Go-go, clubs, spectacle", "Higher", "Good for seeing the famous strip"],
              ["Soi 6", "14:00–22:00", "Open beer bars, short-time focused", "Lower", "Good if you know what you want"],
              ["LK Metro", "20:00–01:00", "Go-go, slightly calmer", "Mid", "Often recommended as easier start"],
            ]}
          />
        </div>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">Recommended First Night Plan</h2>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>Eat dinner first</li>
          <li>Go to Walking Street around 21:30–22:00</li>
          <li>Walk the full length once without entering every place</li>
          <li>Pick one or two venues to sit in</li>
          <li>Decide early how much you are willing to spend</li>
        </ol>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">2026 Price Range Walking Street</h2>
        <div className="mt-3">
          <PriceTable
            caption="2026 Price Range Walking Street"
            headers={["Item", "Price"]}
            rows={[
              ["Beer", "150–220 THB"],
              ["Lady drink", "180–300 THB"],
              ["Bar fine", "1,000–2,500 THB"],
              ["Short-time total (bar fine + her fee)", "often 4,000–7,000+ THB"],
            ]}
          />
        </div>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">Soi 6</h2>
        <div className="mt-3">
          <PriceTable
            caption="Soi 6 prices"
            headers={["Item", "Price"]}
            rows={[
              ["Beer", "70–120 THB"],
              ["Lady drink", "120–220 THB"],
              ["Room / bar fee", "400–800 THB"],
              ["Short-time arrangement", "commonly 1,500–3,000 THB all-in"],
            ]}
          />
        </div>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">Simple Rules</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Walk the street first, sit second</li>
          <li>Confirm lady drink and any fine before ordering rounds</li>
          <li>Soi 6 is more direct and daytime-oriented — different energy from Walking Street</li>
          <li>Keep small bills (100s and 50s)</li>
        </ul>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">Next steps</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            <Link href="/pattaya/areas/walking-street/" className="text-accent hover:underline">
              Walking Street guide
            </Link>{" "}
            — classic neon strip
          </li>
          <li>
            <Link href="/pattaya/areas/soi-6/" className="text-accent hover:underline">
              Soi 6 guide
            </Link>{" "}
            — direct, daytime-friendly
          </li>
          <li>
            <Link href="/pattaya/areas/lk-metro/" className="text-accent hover:underline">
              LK Metro
            </Link>{" "}
            ·{" "}
            <Link href="/pattaya/areas/soi-buakhao/" className="text-accent hover:underline">
              Soi Buakhao
            </Link>{" "}
            — lower pressure / lower spend
          </li>
          <li>
            <Link href="/pattaya/faq/" className="text-accent hover:underline">
              FAQ
            </Link>
          </li>
          <li>
            <Link href="/pattaya/getting-around/" className="text-accent hover:underline">
              Getting around
            </Link>{" "}
            ·{" "}
            <Link href="/pattaya/airport/" className="text-accent hover:underline">
              Airport
            </Link>
          </li>
          <li>
            <Link href="/pattaya/night-activities/" className="text-accent hover:underline">
              Night activities
            </Link>{" "}
            ·{" "}
            <Link href="/pattaya/bar-types/" className="text-accent hover:underline">
              Bar types
            </Link>
          </li>
          <li>
            <Link href="/cash/" className="text-accent hover:underline">
              Cash
            </Link>
          </li>
          <li>
            <Link href="/pattaya/one-night-plan/" className="text-accent hover:underline">
              One-night plans
            </Link>
          </li>
          <li>
            <Link href="/pattaya/tonight/" className="text-accent hover:underline">
              Recent notes
            </Link>{" "}
            — drink-minimum updates
          </li>
          <li>
            <Link href="/prices/" className="text-accent hover:underline">
              2026 prices
            </Link>{" "}
            ·{" "}
            <Link href="/budgets/" className="text-accent hover:underline">
              Budget bands
            </Link>
          </li>
          <li>
            <Link href="/scams/" className="text-accent hover:underline">
              Scams to avoid
            </Link>
          </li>
        </ul>
        <h3 className="mt-5 text-base font-semibold text-foreground">Stay nearby</h3>
        <p className="mt-2">
          Central Pattaya or near Walking Street cuts transport friction. Area notes:{" "}
          <Link href="/pattaya/hotels-walking-street/" className="text-accent hover:underline">
            Where to stay near Walking Street
          </Link>
          .
        </p>
        <div className="mt-3">
          <HotelCta label="Hotels near Walking Street / Central Pattaya" link="hotelWalkingStreet" />
        </div>
      </section>
    </PageShell>
  );
}
