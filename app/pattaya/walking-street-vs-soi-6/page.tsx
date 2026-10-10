import Link from "next/link";
import { StayNearby } from "@/components/StayNearby";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Walking Street vs Soi 6 2026 – Which First?",
  "Walking Street vs Soi 6 Pattaya: timing, style, prices and drink-minimum caution.",
  "/pattaya/walking-street-vs-soi-6/",
);

export default function WalkingStreetVsSoi6Page() {
  return (
    <PageShell title="Walking Street vs Soi 6 2026 – Which First?">
      <p>
        Different energy. Different hours. Don’t treat them as the same night with a cheaper
        version of the same product.
      </p>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Side by side</h2>
        <div className="mt-3">
          <PriceTable
            caption="Walking Street vs Soi 6"
            headers={["", "Walking Street", "Soi 6"]}
            rows={[
              ["Hours", "21:30–01:00 (late evening)", "14:00–22:00 (afternoon–early evening)"],
              ["Style", "Go-go, clubs, spectacle", "Open beer bars, short-time focused"],
              ["Cost", "Higher", "Lower"],
              ["Beer", "150–220 THB", "70–120 THB"],
              ["Lady drink", "180–300 THB", "120–220 THB"],
              ["Bar / room fee", "1,000–2,500 THB", "400–800 THB"],
              ["Short-time total", "often 4,000–7,000+ THB", "1,500–3,500 THB (confirm live)"],
            ]}
          />
        </div>
        <p className="mt-3">
          Ranges from the{" "}
          <Link href="/prices/" className="text-accent hover:underline">
            2026 prices
          </Link>{" "}
          page and the area guides. Confirm on the spot.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Which first?</h2>
        <p className="mt-2">
          <Link href="/pattaya/areas/walking-street/" className="text-accent hover:underline">
            Walking Street
          </Link>{" "}
          for the classic neon / go-go / club spectacle. Arrive 21:30–22:00, walk the full length
          once, then one sit.
        </p>
        <p className="mt-2">
          <Link href="/pattaya/areas/soi-6/" className="text-accent hover:underline">
            Soi 6
          </Link>{" "}
          for a more direct, daytime-to-evening short-time street. No big stage shows. Walk the
          street first. Confirm totals before you sit.
        </p>
        <p className="mt-2">Many visitors do both on different days.</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Drink minimums on Soi 6</h2>
        <p className="mt-2">
          Some bars have been reported to require a minimum number of lady drinks before ST/upstairs.
          Always ask before you sit: room fee, girl’s fee, any drink minimum. If the total doesn’t
          work, walk to another bar.
        </p>
        <p className="mt-2">
          Details:{" "}
          <Link href="/pattaya/tonight/" className="text-accent hover:underline">
            Pattaya Tonight
          </Link>
        </p>
      </section>

      <p>
        Related:{" "}
        <Link href="/pattaya/first-timer/" className="text-accent hover:underline">
          First-timer guide
        </Link>
        ,{" "}
        <Link href="/pattaya/faq/" className="text-accent hover:underline">
          FAQ
        </Link>
        ,{" "}
        <Link href="/prices/" className="text-accent hover:underline">
          Prices
        </Link>
      </p>

      <StayNearby label="Hotels near Walking Street / Central Pattaya" link="hotelWalkingStreet">
        <p className="mt-2">
          Central Pattaya covers Walking Street and keeps Soi 6 a short hop. One hotel search is
          enough — don’t split the night across two distant bases.
        </p>
      </StayNearby>
    </PageShell>
  );
}
