import { BookingBox } from "@/components/BookingBox";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, LinkList, Section } from "@/components/Prose";
import { pattayaAreas, pattayaGuides } from "@/lib/guides";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Pattaya Nightlife Guide 2026 – Areas, Shows & Prices",
  "Pattaya nightlife overview: Walking Street, Soi Buakhao and Tree Town, cabaret shows, Muay Thai and night markets. 2026 prices and first-timer advice.",
  "/pattaya/",
);

export default function PattayaPage() {
  return (
    <PageShell
      path="/pattaya/"
      title="Pattaya Nightlife Guide 2026 – Areas, Shows & Prices"
      belowTitle={
        <p className="mt-3 text-base leading-7 text-foreground">
          New here? Start with the <A href="/pattaya/first-timer/">first-timer guide</A> or a{" "}
          <A href="/pattaya/one-night-plan/">one-night plan</A>.
        </p>
      }
    >
      <Section title="Quick overview">
        <p>
          Pattaya packs a lot into a small grid. Walking Street is the neon strip with clubs, live
          music and seafood. Soi Buakhao and Tree Town are the cheaper, more local side: open-air
          beer bars, food and bands. Add a cabaret show or a Muay Thai card early in the evening and
          you have a full night.
        </p>
      </Section>

      <Section title="Main areas at a glance">
        <PriceTable
          caption="Main areas at a glance"
          headers={["Area", "Peak hours", "Style", "Cost"]}
          rows={[
            ["Walking Street", "21:30–02:00", "Clubs, live music, spectacle", "Higher"],
            ["Soi Buakhao", "19:00–late", "Beer bars, food, locals & expats", "Lower"],
            ["Tree Town", "18:00–late", "Open-air bars, bands, street food", "Lower"],
            ["Beach Road", "Sunset–late", "Seafront bars, promenade", "Mid"],
          ]}
        />
      </Section>

      <Section title="Recommended approach">
        <Bullets>
          <li>One night only → a cabaret show early, then Walking Street for the atmosphere</li>
          <li>Two or more nights → Walking Street one night, Tree Town / Soi Buakhao another</li>
          <li>Lower budget → Soi Buakhao and Tree Town give the most for the money</li>
        </Bullets>
      </Section>

      <BookingBox
        items={[
          { label: "Cabaret show tickets (Tiffany’s / Alcazar)", link: "cabaretPattaya" },
          { label: "Muay Thai tickets in Pattaya", link: "muayThaiPattaya" },
          { label: "Bangkok → Pattaya transfer", link: "transferBangkokPattaya" },
          { label: "Hotels near Walking Street", link: "hotelWalkingStreet" },
        ]}
      />
      <p>
        Compare neighbourhoods first: <A href="/pattaya/where-to-stay/">where to stay in Pattaya</A>.
        The hotel button searches Agoda for the whole city.
      </p>

      <Section title="2026 price snapshot">
        <Bullets>
          <li>Beer in an open beer bar (Soi Buakhao / Tree Town): roughly 60–130 THB</li>
          <li>Beer on Walking Street bars and clubs: commonly 150–250 THB</li>
          <li>Cabaret show standard seat: check the booking page; VIP costs noticeably more</li>
        </Bullets>
        <p>
          → Full comparison on the <A href="/prices/">prices page</A>.
        </p>
      </Section>

      <Section title="Practical notes">
        <Bullets>
          <li>Eat before you start drinking — Soi Buakhao food is cheap and good</li>
          <li>Walk the street once before sitting down</li>
          <li>Check the drinks menu and pay round by round</li>
          <li>Use Grab, Bolt or a baht bus; agree the fare before you get in a private ride</li>
          <li>Jet-ski rentals on the main beach carry a well-known damage-claim scam risk</li>
        </Bullets>
      </Section>

      <Section title="Pattaya guides">
        <LinkList links={pattayaGuides} />
      </Section>

      <Section title="Pattaya areas">
        <LinkList links={pattayaAreas} />
        <p className="text-sm text-muted">
          Thai Night does not cover adult-entertainment venues.
        </p>
      </Section>
    </PageShell>
  );
}
