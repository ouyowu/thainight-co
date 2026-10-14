import { BookingBox } from "@/components/BookingBox";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { StayNearby } from "@/components/StayNearby";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Bangkok Airport to Pattaya Taxi Price 2026 – Real Fares & Scams",
  "Suvarnabhumi (BKK) to Pattaya taxi price in 2026: official taxi counter, Grab and Bolt, private transfers and the airport bus compared, plus Motorway 7 tolls, late arrivals and common scams.",
  "/pattaya/bangkok-airport-to-pattaya-taxi-price/",
);

export default function AirportTaxiPricePage() {
  return (
    <PageShell
      path="/pattaya/bangkok-airport-to-pattaya-taxi-price/"
      title="Bangkok Airport to Pattaya Taxi Price (2026)"
      lead="Short answer: expect about 1,200–1,700 THB for a car from Suvarnabhumi (BKK) to Pattaya, plus motorway tolls. The airport bus costs about 120–160 THB but runs only a few times a day."
    >
      <Section title="2026 prices compared">
        <PriceTable
          caption="Suvarnabhumi to Pattaya transport prices 2026"
          headers={["Option", "Price (THB)", "Notes"]}
          rows={[
            ["Official public taxi counter", "From about 1,200 per car", "Agree the fare at the counter before leaving"],
            ["Grab / Bolt", "About 1,200–1,500", "Live app price; rises with demand and rain"],
            ["Pre-booked private transfer", "From about 1,500", "Driver meets you with a sign; fixed price to the hotel door"],
            ["Driver offers inside arrivals", "Usually 1,500+", "Negotiable; check the car is licensed"],
            ["Airport bus", "About 120–160 per person", "A few departures a day; about 2 hours"],
          ]}
        />
        <p className="text-sm text-muted">
          Checked October 2026 against the Suvarnabhumi Airport transport page (taxi pricing
          beyond 20 km), Bangkok Post and recent guides (airport bus), Thairath (Motorway 7
          tolls), booking platforms and visitor reports. They change. Confirm before you pay.
        </p>
      </Section>

      <BookingBox
        title="Fixed-price options"
        items={[
          { label: "Book a BKK → Pattaya private transfer", link: "transferBangkokPattaya" },
          { label: "Compare airport transfers to Pattaya", link: "klook" },
        ]}
      />

      <Section title="Why the taxi is a flat fare, not the meter">
        <p>
          Pattaya is about 127 km from Suvarnabhumi by road, almost all of it on Motorway 7. The
          airport’s own taxi page says the meter applies to short trips around the airport, up to
          about 20 km. Longer trips are priced by agreement between passenger and driver. So for
          Pattaya, the counter or driver quotes a flat fare. Agree it, and whether tolls are
          included, before the car leaves.
        </p>
        <p>
          The taxi queue is on Floor 1 between Gate 4 and Gate 7. Tell the counter staff
          “Pattaya” and your area (North, Central, Jomtien or Pratumnak) so the fare quoted
          matches the drop-off.
        </p>
      </Section>

      <Section title="Tolls on Motorway 7">
        <Bullets>
          <li>Tolls are extra and paid by the passenger unless the quoted fare says otherwise.</li>
          <li>Since March 2026 Motorway 7 uses number-plate recognition in its cash lanes: you pay once, in cash, at the exit booth, instead of at booths along the way.</li>
          <li>Keep some small notes for the booth and ask the driver to show the amount. A private transfer or Grab quote normally covers the route already; check the booking.</li>
        </Bullets>
      </Section>

      <Section title="Which one should you pick?">
        <Bullets>
          <li><strong>Solo, light bags, daytime</strong> → the airport bus, if a departure fits your landing time.</li>
          <li><strong>Two or more people, or luggage</strong> → taxi or Grab; split, it costs little more than the bus.</li>
          <li><strong>Late landing, kids, or no haggling</strong> → pre-booked transfer with a fixed price.</li>
        </Bullets>
        <p>
          Split four ways, a 1,200–1,500 THB car is about 300–375 THB each and goes to the hotel
          door. The bus is cheaper per head but leaves you on Sukhumvit Road with a second ride
          to the hotel.
        </p>
      </Section>

      <Section title="Airport bus details">
        <Bullets>
          <li>The state-run airport bus to Pattaya started in 2025. Recent guides put the fare at about 135 THB to North Pattaya and about 158 THB to Jomtien.</li>
          <li>It leaves from Level 1, Gate 8. A few departures a day; published timetables differ between sources, so check the current one before you plan around it.</li>
          <li>Drop-offs are on Sukhumvit Road at North, Central and South Pattaya and Thepprasit; take a baht bus or Grab to your hotel.</li>
          <li>Private coach lines also run from the airport to Jomtien. Their timetables change; book or confirm the day before.</li>
        </Bullets>
      </Section>

      <Section title="Landing late at night">
        <p>
          After the last bus, it is the taxi counter, Grab or a pre-booked car. A pre-booked
          transfer tracks the flight, so a delay does not cost extra. Allow 1.5–2 hours on the
          road; late at night it is usually at the fast end.
        </p>
      </Section>

      <StayNearby label="Hotels in Pattaya" link="hotelPattaya">
        <p>
          Central Pattaya puts Walking Street and Beach Road a short ride away. Jomtien is
          quieter and a baht bus or Grab from the nightlife.
        </p>
      </StayNearby>

      <Section title="Scams to avoid">
        <Bullets>
          <li>Unofficial drivers who approach you before the taxi counter, then add “toll” or “luggage” charges.</li>
          <li>Quoting one price, then claiming it was per person.</li>
          <li>Being dropped on Sukhumvit Road instead of your hotel — confirm the hotel address in the app or on paper.</li>
          <li>Tolls “not included” after you agreed a price that the driver said was all-in. Settle it at the counter.</li>
        </Bullets>
        <p>More: <A href="/scams/">nightlife & transport scams</A>.</p>
      </Section>

      <FaqList
        items={[
          { q: "How much is a taxi from Bangkok airport to Pattaya in 2026?", a: "Roughly 1,200–1,700 THB per car depending on how you book, plus Motorway 7 tolls paid at the exit booth." },
          { q: "Do Suvarnabhumi taxis use the meter to Pattaya?", a: "Usually not. The airport’s rules use the meter for short trips; longer trips like Pattaya are priced by agreement. Agree the fare before the car leaves." },
          { q: "Is Grab cheaper than a taxi to Pattaya?", a: "Often similar — about 1,200–1,500 THB — but Grab shows the price upfront, which avoids haggling." },
          { q: "Is there a bus from Suvarnabhumi to Pattaya?", a: "Yes. The airport bus costs about 120–160 THB depending on the drop-off and takes about two hours, with only a few departures a day. It leaves from Level 1, Gate 8." },
          { q: "How far is Pattaya from Suvarnabhumi?", a: "About 127 km by road, mostly on Motorway 7." },
          { q: "How long does it take?", a: "About 1.5–2 hours by car in normal traffic; Friday evenings and holidays are slower." },
        ]}
      />

      <Related
        links={[
          { href: "/pattaya/airport/", label: "All Bangkok → Pattaya options" },
          { href: "/pattaya/bangkok-to-pattaya/", label: "Bangkok city to Pattaya" },
          { href: "/pattaya/baht-bus/", label: "Pattaya baht bus prices" },
          { href: "/pattaya/hotels-walking-street/", label: "Where to stay in Pattaya" },
        ]}
      />
    </PageShell>
  );
}
