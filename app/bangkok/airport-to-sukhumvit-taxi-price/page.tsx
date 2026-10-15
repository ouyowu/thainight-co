import { BookingBox } from "@/components/BookingBox";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { StayNearby } from "@/components/StayNearby";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Suvarnabhumi–Sukhumvit Taxi Price 2026: Nana, Asok, Rail Link",
  "Suvarnabhumi (BKK) to Sukhumvit (Nana, Asok) in 2026: metered taxi, 50 THB surcharge and tolls, Grab, and the 45 THB Airport Rail Link plus BTS.",
  "/bangkok/airport-to-sukhumvit-taxi-price/",
);

export default function AirportSukhumvitPage() {
  return (
    <PageShell
      path="/bangkok/airport-to-sukhumvit-taxi-price/"
      title="Suvarnabhumi Airport to Sukhumvit: Taxi Price (2026)"
      lead="A metered taxi from Suvarnabhumi to Nana or Asok usually totals about 400–700 THB including the 50 THB airport surcharge and tolls. The Airport Rail Link plus BTS costs about 100 THB but stops around midnight."
    >
      <Section title="2026 prices compared">
        <PriceTable
          caption="Suvarnabhumi to Sukhumvit prices 2026"
          headers={["Option", "Total (THB)", "Time"]}
          rows={[
            ["Public metered taxi (official queue)", "about 400–700", "30–60+ min"],
            ["Grab / Bolt", "Live app price", "30–60+ min"],
            ["Airport Rail Link + BTS", "about 70–105", "45–60 min"],
            ["Airport limousine counter", "Fixed price on the counter board; above a metered taxi", "30–60+ min"],
            ["Pre-booked private transfer", "Fixed; usually above taxi", "30–60+ min"],
          ]}
        />
        <Bullets>
          <li>Taxi total = meter + 50 THB airport surcharge + expressway tolls. The airport’s own page says the surcharge follows a Ministry of Transport announcement and that passengers pay the tolls.</li>
          <li>Tolls on this route are usually about 70–75 THB in total, paid in cash at each booth (about 25–50 THB a booth).</li>
          <li>Airport Rail Link: 45 THB to Phaya Thai or Makkasan, then the BTS or MRT. Runs about 05:30 to midnight.</li>
        </Bullets>
        <p className="text-sm text-muted">
          Checked October 2026 against the Suvarnabhumi Airport transport page (taxi stand,
          surcharge, tolls), Grab’s 2026 airport release (pick-up zone), the Bangkok Post (meter
          rates) and recent visitor reports. They change. Confirm before you pay.
        </p>
      </Section>

      <Section title="How the taxi meter adds up">
        <p>
          The meter starts at 35 THB for a standard taxi (40 THB for a larger car), then charges
          by the kilometre in bands: about 6.50 THB per km up to 10 km, 7 THB from 10 to 20 km,
          and 8 THB from 20 to 40 km. A slow-traffic charge of 3 THB a minute runs whenever the
          car moves under 6 km/h.
        </p>
        <PriceTable
          caption="Worked example: about 30 km to Nana or Asok, light traffic"
          headers={["Item", "THB"]}
          rows={[
            ["Meter (35 start + distance bands)", "about 245"],
            ["Slow-traffic minutes", "0 at night; often 50–150+ at rush hour"],
            ["Airport surcharge", "50"],
            ["Expressway tolls", "about 70–75"],
            ["Typical total", "about 365 at night, 450–700 in traffic"],
          ]}
        />
        <p>
          The distance part barely changes between trips. Traffic minutes and whether the driver
          uses the expressway are what move the total. Expect the top of the range on weekday
          evenings and Friday nights.
        </p>
      </Section>

      <Section title="Taking the official taxi, step by step">
        <Bullets>
          <li>Go down to Floor 1 (arrivals hall is Floor 2). The public taxi counter and its ticket machines are between Gate 4 and Gate 7. It runs 24 hours.</li>
          <li>Take a ticket from the machine. It shows the lane for your car. Keep the slip until you arrive: it identifies the taxi if anything goes wrong.</li>
          <li>Show the driver your hotel name in Thai or a map pin. Sukhumvit has dozens of numbered sois, so “Sukhumvit” alone is not an address.</li>
          <li>Check the meter is running when the car moves. The 50 THB surcharge is added at the end, not on the meter.</li>
          <li>Keep small notes for the toll booths. You hand the cash over at each booth.</li>
        </Bullets>
      </Section>

      <BookingBox
        items={[
          { label: "Pre-book an airport transfer", link: "klook" },
          { label: "Thailand eSIM (for Grab on landing)", link: "esim" },
        ]}
      />

      <Section title="Grab or the taxi queue">
        <p>
          Grab’s pick-up zone is on Floor 1 at Gate 4. Grab’s 2026 release says it now has 12
          lanes and a PIN-based queue. You can book anywhere in the terminal, then walk down to
          Gate 4. The app shows the price before you book, so there is no meter to watch.
        </p>
        <p>
          The taxi queue is often cheaper when traffic is light, because the app price already
          assumes a slow trip. Grab is easier when you have no Thai address written down, or you
          want to pay by card. You need mobile data to book, so set up an eSIM before you land.
        </p>
      </Section>

      <Section title="The train: Airport Rail Link">
        <Bullets>
          <li>The station is on the basement level under the terminal. A ticket to Phaya Thai or Makkasan is 45 THB. Since November 2025 you can tap a contactless bank card at the gate.</li>
          <li>For Nana or Asok: change at Phaya Thai to the BTS, or walk from Makkasan to MRT Phetchaburi, one stop from Sukhumvit / Asok.</li>
          <li>Trains run about every 10–15 minutes from about 05:30 to midnight. In July 2026 the line had two disruptions, one with trains about every 30 minutes afterwards. Check the operator’s page if your flight lands late.</li>
          <li>With big suitcases the stairs and crowds at Phaya Thai at rush hour are the hard part, not the price.</li>
        </Bullets>
      </Section>

      <Section title="Landing after midnight">
        <p>
          After the last train, your options are the taxi queue, Grab, or the limousine counters
          in the baggage hall and arrivals hall. Night is when the taxi is cheapest: the
          expressway is clear, so the meter is close to the worked example above.
        </p>
      </Section>

      <StayNearby label="Hotels in Sukhumvit (Nana / Asok)" link="hotelSukhumvit">
        <p>
          Nana, Asok and Phrom Phong are the usual nightlife bases on this route. Pick a hotel
          near a BTS station if you plan to use the train back to the airport.
        </p>
      </StayNearby>

      <Section title="Avoid">
        <Bullets>
          <li>Anyone offering a taxi inside the arrivals hall. Use the Floor 1 queue, the app, or a counter with a printed price.</li>
          <li>Drivers who won’t use the meter from the official queue. Ask for another car; a flat fare instead of the meter is the tell.</li>
          <li>Paying tolls twice. You hand the toll money to the driver at each booth; it is not added again at the hotel.</li>
          <li>Changing large notes at the end. Have 100s and 20s ready.</li>
        </Bullets>
        <p>
          Meter rates and city fares: <A href="/bangkok/taxi-fare/">Bangkok taxi fares 2026</A>.
          From the other airport: <A href="/bangkok/don-mueang-to-sukhumvit-taxi-price/">Don Mueang to Sukhumvit</A>.
        </p>
      </Section>

      <FaqList
        items={[
          {
            q: "How much is a taxi from Suvarnabhumi to Sukhumvit?",
            a: "Usually about 400–700 THB in total including the 50 THB airport surcharge and about 70–75 THB of expressway tolls. Late at night it can be under 400 THB.",
          },
          {
            q: "Is there a Suvarnabhumi airport taxi surcharge?",
            a: "Yes. 50 THB on top of the meter for taxis from the official queue. Tolls are extra and paid by the passenger.",
          },
          {
            q: "Where is the taxi queue at Suvarnabhumi?",
            a: "Floor 1, between Gate 4 and Gate 7, one floor below arrivals. Take a ticket from the machine; it gives your lane.",
          },
          {
            q: "Where do I meet a Grab at Suvarnabhumi?",
            a: "Floor 1, Gate 4. Book from anywhere in the terminal, then go down to the Grab zone.",
          },
          {
            q: "What is the cheapest way from Suvarnabhumi to Nana or Asok?",
            a: "Airport Rail Link (45 THB) to Phaya Thai, then the BTS — about 70–105 THB in total. It runs about 05:30 to midnight.",
          },
          {
            q: "How long does it take?",
            a: "30–60+ minutes by road depending on traffic; about 45–60 minutes by rail including the change.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/bangkok/airport/", label: "Airport to city" },
          { href: "/bangkok/hotels-nana-asok/", label: "Where to stay" },
          { href: "/bangkok/taxi-fare/", label: "Bangkok taxi fares" },
          { href: "/pattaya/bangkok-airport-to-pattaya-taxi-price/", label: "Airport to Pattaya" },
        ]}
      />
    </PageShell>
  );
}
