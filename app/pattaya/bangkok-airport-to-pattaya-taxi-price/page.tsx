import { BookingBox } from "@/components/BookingBox";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, CheckedNote, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Bangkok Airport to Pattaya Taxi Price 2026 – Real Fares & Scams",
  "Suvarnabhumi (BKK) to Pattaya taxi price in 2026: official taxi counter, Grab and Bolt, private transfers and the 139 THB airport bus compared, plus tolls and common scams.",
  "/pattaya/bangkok-airport-to-pattaya-taxi-price/",
);

export default function AirportTaxiPricePage() {
  return (
    <PageShell
      path="/pattaya/bangkok-airport-to-pattaya-taxi-price/"
      title="Bangkok Airport to Pattaya Taxi Price (2026)"
      lead="Short answer: expect about 1,200–1,700 THB for a car from Suvarnabhumi (BKK) to Pattaya, plus expressway tolls. The airport bus costs 139 THB but runs only a few times a day."
    >
      <Section title="2026 prices compared">
        <PriceTable
          caption="Suvarnabhumi to Pattaya transport prices 2026"
          headers={["Option", "Price (THB)", "Notes"]}
          rows={[
            ["Official public taxi counter", "From about 1,200 per car", "Queue at the taxi counter on arrivals; agree the fare before leaving"],
            ["Grab / Bolt", "About 1,200–1,500", "Live app price; rises with demand and rain"],
            ["Pre-booked private transfer", "From about 1,500", "Driver meets you with a sign; fixed price to the hotel door"],
            ["Driver offers inside arrivals", "Usually 1,500+", "Negotiable; check the car is licensed"],
            ["Airport bus (Bus 999)", "139 per person", "About 4 departures a day; ~2 hours"],
          ]}
        />
        <Bullets>
          <li>Expressway tolls: expect roughly two tolls of about 30 THB each; the driver may ask you to pay them.</li>
          <li>Taxi stands at the airport add a 50 THB airport surcharge on metered city trips. For Pattaya, drivers normally quote a flat fare instead of the meter.</li>
          <li>Journey time: about 1.5–2 hours without heavy traffic; Friday evenings and holidays are slower.</li>
        </Bullets>
        <CheckedNote />
      </Section>

      <BookingBox
        title="Fixed-price options"
        items={[
          { label: "Book a BKK → Pattaya private transfer", link: "transferBangkokPattaya" },
          { label: "Book the airport bus seat", link: "klook" },
        ]}
      />

      <Section title="Which one should you pick?">
        <Bullets>
          <li><strong>Solo, light bags, daytime</strong> → the 139 THB bus, if a departure fits your landing time.</li>
          <li><strong>Two or more people, or luggage</strong> → taxi or Grab; split, it costs little more than the bus.</li>
          <li><strong>Late landing, kids, or no haggling</strong> → pre-booked transfer with a fixed price.</li>
        </Bullets>
      </Section>

      <Section title="Airport bus details">
        <Bullets>
          <li>Government-run Bus 999 route, introduced in 2025; fare 139 THB in 2026.</li>
          <li>Departures from BKK reported at 07:30, 11:30, 13:30 and 17:30 — check the current timetable.</li>
          <li>Tickets at the counter on the 1st floor (Gate 8) or the airport bus terminal; online booking guarantees a seat.</li>
          <li>Drop-offs on Sukhumvit Road at North, Central and South Pattaya and Thepprasit; take a baht bus or Grab to your hotel.</li>
        </Bullets>
      </Section>

      <Section title="Scams to avoid">
        <Bullets>
          <li>Unofficial drivers who approach you before the taxi counter, then add “toll” or “luggage” charges.</li>
          <li>Quoting one price, then claiming it was per person.</li>
          <li>Being dropped on Sukhumvit Road instead of your hotel — confirm the hotel address in the app or on paper.</li>
        </Bullets>
        <p>More: <A href="/scams/">nightlife & transport scams</A>.</p>
      </Section>

      <FaqList
        items={[
          { q: "How much is a taxi from Bangkok airport to Pattaya in 2026?", a: "Roughly 1,200–1,700 THB per car depending on how you book, plus expressway tolls of around 60 THB." },
          { q: "Is Grab cheaper than a taxi to Pattaya?", a: "Often similar — about 1,200–1,500 THB — but Grab shows the price upfront, which avoids haggling." },
          { q: "Is there a bus from Suvarnabhumi to Pattaya?", a: "Yes. Bus 999 costs 139 THB and takes about two hours, with only a few departures a day." },
          { q: "How long does it take?", a: "About 1.5–2 hours by car in normal traffic." },
        ]}
      />

      <Related
        links={[
          { href: "/pattaya/airport/", label: "All Bangkok → Pattaya options" },
          { href: "/pattaya/baht-bus/", label: "Pattaya baht bus prices" },
          { href: "/pattaya/hotels-walking-street/", label: "Where to stay in Pattaya" },
        ]}
      />
    </PageShell>
  );
}
