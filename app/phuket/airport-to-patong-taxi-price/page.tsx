import { BookingBox } from "@/components/BookingBox";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { StayNearby } from "@/components/StayNearby";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Phuket Airport to Patong Price 2026 – Taxi, Grab, Bus, Transfer",
  "Phuket airport (HKT) to Patong in 2026: metered taxi with the 100 THB surcharge, limousine, Grab, transfers, minivan and the 100 THB Smart Bus.",
  "/phuket/airport-to-patong-taxi-price/",
);

export default function PhuketAirportPatongPage() {
  return (
    <PageShell
      path="/phuket/airport-to-patong-taxi-price/"
      title="Phuket Airport to Patong: Taxi Price (2026)"
      lead="Expect about 800–1,000 THB for a taxi or limousine counter car from Phuket airport to Patong, including the 100 THB airport surcharge. Pre-booked sedans can be cheaper; the Smart Bus costs 100 THB."
    >
      <Section title="2026 prices compared">
        <PriceTable
          caption="Phuket airport to Patong prices 2026"
          headers={["Option", "Price (THB)", "Time", "Notes"]}
          rows={[
            ["Metered taxi (official counter)", "about 700–1,000", "45–60 min", "Includes the 100 THB airport surcharge"],
            ["Limousine counter (fixed)", "about 800–1,000", "50–60 min", "Price posted at the counter"],
            ["Grab", "about 750–1,250", "45–60 min", "Fixed in-app; walk to the pickup zone"],
            ["Pre-booked sedan", "about 500–750", "50–60 min", "Name sign, flight tracking"],
            ["Shared minivan", "about 180 per person", "60–90 min", "Waits to fill; drops hotel by hotel"],
            ["Smart Bus", "100 per person", "about 90 min", "Stops on the main road in Patong, not at hotels"],
          ]}
        />
        <p className="text-sm text-muted">
          Checked October 2026 against the Phuket Smart Bus operator page (fare, route, times),
          Phuket101 and Airports Data (taxi surcharge), Grab’s airport guide, booking platforms
          and recent visitor reports. They change. Confirm before you pay.
        </p>
      </Section>

      <Section title="Why Phuket costs more than Bangkok">
        <p>
          Patong is about 40 km from the airport, on the west coast, and the last stretch climbs
          over the hill into town. There is no train. Phuket taxi fares are generally higher than
          Bangkok’s, and every airport taxi adds a 100 THB surcharge to the meter. So the airport run
          to Patong costs more than the longer Suvarnabhumi run into central Bangkok.
        </p>
        <p>
          The meter alone is usually around 600–700 THB to Patong, before the surcharge.
        </p>
      </Section>

      <Section title="At the airport, step by step">
        <Bullets>
          <li>Walk past anyone offering a ride inside arrivals. The official taxi and limousine counters are just outside both the international and domestic terminals.</li>
          <li>At a limousine counter, the price for your area is on a board. You usually pay at the counter and get a slip.</li>
          <li>At the meter taxi counter, confirm the driver will run the meter and that the total is meter plus 100 THB.</li>
          <li>For Grab, book after you collect your bags, then follow the photo and text directions in the app to the pickup zone.</li>
          <li>Have the hotel name and the Patong street (Beach Road, Rat-U-Thit, Nanai) ready. Patong’s one-way streets mean the driver needs to know which side of town.</li>
        </Bullets>
      </Section>

      <BookingBox
        items={[
          { label: "Pre-book a Phuket airport transfer", link: "transferPhuketAirport" },
          { label: "Thailand eSIM (for Grab on landing)", link: "esim" },
        ]}
      />

      <Section title="The Smart Bus">
        <Bullets>
          <li>Flat 100 THB per person, paid to the driver on board. There is no ticket counter.</li>
          <li>The route runs down the west coast: airport, Thalang, Cherngtalay and Laguna, Surin, Kamala, Patong, Karon, Kata, Phromthep and Rawai.</li>
          <li>The operator lists the first bus from the airport at 08:15 and the last airport bus to Patong at 23:30. Timetables have changed over the years; check the Phuket Smart Bus site or Phuket OneMap, which shows live bus positions, on the day.</li>
          <li>About 90 minutes to Patong. It stops on the main road, so add a walk or a short ride to the hotel.</li>
        </Bullets>
        <p>
          It suits a light bag and a daytime landing. Split between two, a pre-booked sedan is
          about 250–375 THB each; between four, about 125–190 THB each. The bus stays the cheapest
          per head, but the car saves half an hour or more and goes to the door.
        </p>
      </Section>

      <Section title="Which option fits">
        <Bullets>
          <li><strong>Solo, light bag, daytime:</strong> the Smart Bus.</li>
          <li><strong>Two to four people:</strong> a pre-booked sedan or Grab. Split, it beats the bus on time and is close on price.</li>
          <li><strong>Late landing:</strong> a pre-booked transfer, so the car is waiting, or the limousine counter.</li>
          <li><strong>Minivan:</strong> cheapest door-to-door, but it waits to fill and drops at every hotel on the way.</li>
        </Bullets>
      </Section>

      <StayNearby label="Hotels in Phuket" link="hotelPhuket">
        <p>
          A Patong base keeps Bangla Road a walk away. Kata and Karon are quieter and add a
          taxi to every night out.
        </p>
      </StayNearby>

      <Section title="Scams to avoid">
        <Bullets>
          <li>Unlicensed drivers approaching you in arrivals — use the official counters or the app.</li>
          <li>A meter that “doesn’t work”: return to the counter.</li>
          <li>Drivers steering you to a “better” hotel or restaurant — they earn commission.</li>
          <li>Quotes far above the ranges above usually mean something is off.</li>
        </Bullets>
        <p>
          More: <A href="/scams/">scams</A> · <A href="/phuket/">Phuket nightlife</A> ·{" "}
          <A href="/phuket/bangla-road/">Bangla Road</A>.
        </p>
      </Section>

      <FaqList
        items={[
          { q: "How much is a taxi from Phuket airport to Patong?", a: "About 800–1,000 THB at the official taxi or limousine counters, including the 100 THB airport surcharge." },
          { q: "Is there a Phuket airport taxi surcharge?", a: "Yes. 100 THB on top of the meter for taxis from the airport." },
          { q: "Is there a bus from Phuket airport to Patong?", a: "Yes. The Smart Bus is a flat 100 THB paid on board and takes around 90 minutes, stopping on the main road in Patong rather than at hotels." },
          { q: "Is Grab available at Phuket airport?", a: "Yes. Prices are fixed in the app (about 750–1,250 THB to Patong). Follow the app’s directions to the pickup zone." },
          { q: "How far is Patong from Phuket airport?", a: "About 40 km. Allow 45–60 minutes by car and about 90 minutes by bus." },
          { q: "What if I land after midnight?", a: "The bus has stopped. Use a pre-booked transfer, the limousine counter, a meter taxi or Grab." },
        ]}
      />

      <Related
        links={[
          { href: "/phuket/bangla-road/", label: "Bangla Road" },
          { href: "/phuket/where-to-stay/", label: "Where to stay in Phuket" },
          { href: "/bangkok/airport-to-sukhumvit-taxi-price/", label: "Bangkok airport to Sukhumvit" },
          { href: "/pattaya/bangkok-airport-to-pattaya-taxi-price/", label: "Bangkok airport to Pattaya" },
        ]}
      />
    </PageShell>
  );
}
