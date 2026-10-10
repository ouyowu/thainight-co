import { BookingBox } from "@/components/BookingBox";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { StayNearby } from "@/components/StayNearby";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Walking Street Pattaya Guide 2026 – Prices, Clubs & Live Music",
  "Walking Street guide: 2026 drink prices, clubs and live music, best arrival time, seafood, and how to avoid common bill and tout issues.",
  "/pattaya/areas/walking-street/",
);

export default function WalkingStreetPage() {
  return (
    <PageShell title="Walking Street Pattaya Guide 2026 – Prices, Clubs & What to Expect">
      <Section title="Quick overview">
        <p>
          Walking Street is Pattaya’s famous nightlife strip — neon, clubs, live-music bars,
          seafood restaurants and heavy foot traffic. It is worth seeing once even if you don’t
          stay long. Prices are higher than elsewhere in town.
        </p>
        <p>
          Best for: first-time visitors who want the spectacle. Not ideal for: the cheapest drinks
          or a quiet evening — try <A href="/pattaya/areas/tree-town/">Tree Town</A> for that.
        </p>
        <p className="text-sm text-muted">
          Parts of the street include adult-entertainment venues, which Thai Night does not cover.
        </p>
      </Section>

      <Section title="Location & timing">
        <Bullets>
          <li>South end of Pattaya Beach Road, running toward Bali Hai pier</li>
          <li>Closes to traffic and becomes pedestrian in the evening</li>
          <li>Best window for a first walk: 21:30–00:00</li>
          <li>Clubs peak after midnight</li>
        </Bullets>
      </Section>

      <Section title="2026 typical prices">
        <PriceTable
          caption="2026 typical prices"
          headers={["Item", "Price"]}
          rows={[
            ["Beer, bar or club", "150–250 THB"],
            ["Cocktail", "250–400 THB"],
            ["Club entry, busy nights", "Sometimes charged; may include a drink"],
            ["Drinks-only night", "1,500–3,500 THB"],
          ]}
        />
      </Section>

      <Section title="Recommended first approach">
        <ol className="list-decimal space-y-1 pl-5">
          <li>Eat first — seafood on the street, or cheaper food inland</li>
          <li>Arrive around 21:30–22:00</li>
          <li>Walk the full length once before sitting anywhere</li>
          <li>Pick one live-music bar, then a club if you want</li>
          <li>Set a spending limit before the second round</li>
        </ol>
      </Section>

      <Section title="Practical tips">
        <Bullets>
          <li>Check the menu price before ordering; watch the bill tab</li>
          <li>Ignore touts offering “free shows” on side sois</li>
          <li>Keep phones and wallets in front pockets in crowds</li>
          <li>Use Grab or a baht bus; avoid high fixed-price offers at the street ends</li>
        </Bullets>
      </Section>

      <BookingBox
        items={[
          { label: "Cabaret show before Walking Street", link: "cabaretPattaya" },
          { label: "Muay Thai tickets", link: "muayThaiPattaya" },
        ]}
      />

      <Related
        links={[
          { href: "/pattaya/first-timer/", label: "First-timer" },
          { href: "/pattaya/areas/tree-town/", label: "Tree Town" },
          { href: "/prices/", label: "Prices" },
          { href: "/pattaya/hotels-walking-street/", label: "Where to stay" },
        ]}
      />

      <StayNearby label="Hotels near Walking Street" link="hotelWalkingStreet">
        <p className="mt-2">Central Pattaya or southern Beach Road keeps the walk home short.</p>
      </StayNearby>
    </PageShell>
  );
}
