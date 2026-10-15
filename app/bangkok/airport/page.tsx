import { BookingBox } from "@/components/BookingBox";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Bangkok Airport to City 2026 – BKK & DMK to Sukhumvit",
  "Suvarnabhumi (BKK) and Don Mueang (DMK) to Sukhumvit, Silom and the riverside in 2026: Rail Link, Red Line, BTS, MRT, taxi and Grab, with prices.",
  "/bangkok/airport/",
);

export default function BangkokAirportPage() {
  return (
    <PageShell path="/bangkok/airport/" title="Bangkok Airport to City (2026) – BKK & DMK">
      <p>
        Two airports: Suvarnabhumi (BKK) and Don Mueang (DMK). Most nightlife visitors stay on
        Sukhumvit — see <A href="/bangkok/hotels-nana-asok/">where to stay</A>.
      </p>

      <Section title="Suvarnabhumi (BKK)">
        <Bullets>
          <li>Main international airport.</li>
          <li>Airport Rail Link to Makkasan (walk to MRT Phetchaburi → Sukhumvit) or to Phaya Thai (BTS). Clean, cheap, no negotiating.</li>
          <li>Tired or heavy bags: Grab from the official pickup point, or the public taxi queue with the meter — see <A href="/bangkok/airport-to-sukhumvit-taxi-price/">taxi price to Sukhumvit</A>.</li>
        </Bullets>
      </Section>

      <Section title="Don Mueang (DMK)">
        <Bullets>
          <li>Many regional and low-cost flights.</li>
          <li>SRT Red Line to Bang Sue, then MRT toward Sukhumvit — or Grab / the taxi queue straight to the hotel. Fares: <A href="/bangkok/don-mueang-to-sukhumvit-taxi-price/">Don Mueang to Sukhumvit taxi price</A>.</li>
        </Bullets>
      </Section>

      <Section title="Which airport are you at?">
        <p>
          Check the booking: BKK is Suvarnabhumi, DMK is Don Mueang. They are on opposite sides
          of the city, about 45 km apart, and nothing about the journey is the same. Most
          long-haul and full-service flights use BKK; AirAsia, Nok Air and most Thai Lion flights
          use DMK.
        </p>
      </Section>

      <Section title="The options compared">
        <PriceTable
          caption="Airport to Sukhumvit 2026"
          headers={["From", "Train", "Taxi", "Time by road"]}
          rows={[
            ["Suvarnabhumi (BKK)", "Rail Link 45 THB + BTS/MRT, about 70–105 total", "about 400–700 THB all in", "30–60+ min"],
            ["Don Mueang (DMK)", "Red Line + MRT, about 75 total", "about 220–400 THB plus tolls", "35–90 min"],
          ]}
        />
        <p className="text-sm text-muted">
          Taxi totals include the 50 THB airport surcharge. Tolls are paid by the passenger.
          Checked October 2026. Breakdowns:{" "}
          <A href="/bangkok/airport-to-sukhumvit-taxi-price/">BKK to Sukhumvit</A> ·{" "}
          <A href="/bangkok/don-mueang-to-sukhumvit-taxi-price/">DMK to Sukhumvit</A>.
        </p>
      </Section>

      <Section title="Which to take">
        <Bullets>
          <li><strong>Light bag, daytime, staying near a station.</strong> The train. It skips the traffic and costs a fraction of a taxi.</li>
          <li><strong>Two or more people, or heavy bags.</strong> A taxi or Grab. Split between two, it is close to the train and goes to the door.</li>
          <li><strong>Rush hour.</strong> The train. A road trip into Sukhumvit at 18:00 can double.</li>
          <li><strong>After midnight.</strong> No train. Taxi queue, Grab or a pre-booked car.</li>
        </Bullets>
      </Section>

      <Section title="Late-night arrival">
        <p>
          Trains stop around midnight. After that use Grab, Bolt, the official taxi queue or a
          pre-booked transfer — not someone approaching you in the arrivals hall. Night is when
          a metered taxi is cheapest, because the roads are clear and the meter stops adding
          traffic minutes.
        </p>
      </Section>

      <Section title="Getting a SIM and cash">
        <Bullets>
          <li>Arrange an eSIM before you fly, or buy a tourist SIM at a carrier counter in arrivals. You need data to book a Grab.</li>
          <li>Airport ATMs charge a withdrawal fee per transaction, so take out a larger amount once rather than small amounts often.</li>
          <li>Keep 100 and 20 THB notes for toll booths and the train. More: <A href="/cash/">cash and payments</A>.</li>
        </Bullets>
      </Section>

      <BookingBox
        items={[
          { label: "Pre-book an airport transfer", link: "klook" },
          { label: "Thailand eSIM (works on landing)", link: "esim" },
        ]}
      />

      <FaqList
        items={[
          {
            q: "Which Bangkok airport will I land at?",
            a: "BKK is Suvarnabhumi, used by most long-haul and full-service flights. DMK is Don Mueang, used by AirAsia, Nok Air and most Thai Lion flights. They are about 45 km apart.",
          },
          {
            q: "What is the cheapest way from the airport to Sukhumvit?",
            a: "The train. About 70–105 THB from Suvarnabhumi via the Airport Rail Link and BTS, and about 75 THB from Don Mueang via the Red Line and MRT.",
          },
          {
            q: "How late do the airport trains run?",
            a: "Around midnight from both airports. After that it is a taxi, Grab or a pre-booked car.",
          },
          {
            q: "Is there a taxi surcharge at Bangkok airports?",
            a: "Yes, 50 THB on top of the meter from the official queue at either airport. Expressway tolls are extra and paid by the passenger.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/bangkok/getting-around/", label: "Getting around" },
          { href: "/bangkok/airport-to-sukhumvit-taxi-price/", label: "BKK to Sukhumvit price" },
          { href: "/bangkok/don-mueang-to-sukhumvit-taxi-price/", label: "DMK to Sukhumvit price" },
          { href: "/bangkok/first-timer/", label: "First-timer" },
          { href: "/pattaya/airport/", label: "Bangkok → Pattaya" },
        ]}
      />
    </PageShell>
  );
}
