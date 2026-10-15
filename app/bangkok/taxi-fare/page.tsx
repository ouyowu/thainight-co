import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Bangkok Taxi Fare 2026 – Meter Rates, Airport Surcharge & Scams",
  "Bangkok taxi meter rates in 2026: 35 THB flag fall, per-km bands, 3 THB a minute in traffic, airport and app fees, worked fares, and taxi and tuk-tuk scams.",
  "/bangkok/taxi-fare/",
);

export default function TaxiFarePage() {
  return (
    <PageShell
      path="/bangkok/taxi-fare/"
      title="Bangkok Taxi Fares (2026) – Meter Rates & Scams"
      lead="Metered taxis start at 35 THB. A 5 km ride is roughly 60 THB and 10 km about 95 THB in good traffic. Late at night, drivers who refuse the meter are the main problem."
    >
      <Section title="2026 meter rates">
        <PriceTable
          caption="Bangkok taxi meter rates 2026"
          headers={["Item", "Rate (THB)"]}
          rows={[
            ["Flag fall (first 1 km)", "35 (40 for larger taxis)"],
            ["1–10 km", "6.50 per km"],
            ["10–20 km", "7.00 per km"],
            ["20–40 km", "8.00 per km"],
            ["Stuck in traffic (under 6 km/h)", "3 per minute"],
            ["Booked by phone or app", "20 service fee"],
            ["Airport taxi stand surcharge", "50"],
            ["Expressway tolls", "Paid by the passenger, on top"],
          ]}
        />
        <p className="text-sm text-muted">
          These are the rates set in January 2023 (Government Public Relations Department,
          Bangkok Post) and still in use in October 2026. Most taxis also show a rate card inside. They change. Confirm before you pay.
        </p>
      </Section>

      <Section title="What a ride costs on the meter">
        <p>
          The meter is mostly distance plus traffic time. In free-flowing traffic the distance part
          works out as below. Each slow minute adds 3 THB, so 20 minutes of jam on Sukhumvit adds
          about 60 THB.
        </p>
        <PriceTable
          caption="Meter fare by distance, no traffic time (THB)"
          headers={["Distance", "Meter"]}
          rows={[
            ["2 km", "about 42"],
            ["5 km", "about 61"],
            ["10 km", "about 94"],
            ["15 km", "about 129"],
            ["20 km", "about 164"],
          ]}
        />
        <p>
          Most nights out inside Sukhumvit, Silom and Thonglor are under 10 km. If a driver quotes
          a flat price several times these figures, the meter is the cheaper option.
        </p>
      </Section>

      <Section title="Typical night-out fares">
        <Bullets>
          <li>Nana ↔ Thonglor: usually under 150 THB by meter outside rush hour.</li>
          <li>Sukhumvit → RCA: roughly 100–200 THB.</li>
          <li>Sukhumvit → Rajadamnern stadium: roughly 150–250 THB, more with traffic.</li>
          <li>Grab and Bolt show a fixed price upfront; after midnight they’re often similar to or slightly above the meter.</li>
        </Bullets>
      </Section>

      <Section title="Hailing a taxi">
        <Bullets>
          <li>A red light in the windscreen means the taxi is free. Wave it down from the kerb.</li>
          <li>Say the destination before you get in. Drivers can and do say no; just wait for the next car.</li>
          <li>Ask for the meter (“meter, khrap/kha”) and check it starts at 35 or 40 THB as the car moves.</li>
          <li>Carry small notes. A driver may not have change for 1,000 THB at night.</li>
          <li>Outside nightlife strips and big hotels, cars that wait in a line are the ones most likely to quote a flat price. Walk to the main road and flag a moving taxi.</li>
        </Bullets>
      </Section>

      <Section title="Grab, Bolt or a street taxi">
        <p>
          The apps fix the price before you ride, take cards, and record the car and driver.
          That matters most late at night, when meter refusals peak. A metered taxi booked
          through an app adds the 20 THB service fee. A street taxi on the meter is usually the
          cheapest option in light traffic; in a jam, the app’s fixed price can come out lower.
        </p>
      </Section>

      <Section title="Common scams">
        <Bullets>
          <li><strong>“No meter, 300 baht”:</strong> flat high prices outside bars and hotels. Walk on, or use the app.</li>
          <li><strong>Meter “broken”:</strong> get out before the car moves.</li>
          <li><strong>Long way round:</strong> follow on your own map.</li>
          <li><strong>Tuk-tuk detours:</strong> “the palace is closed today”, then a gem or tailor shop.</li>
        </Bullets>
        <p>More: <A href="/scams/">scams</A> · <A href="/bangkok/getting-around/">getting around</A>.</p>
      </Section>

      <Section title="Reporting a driver">
        <p>
          The Department of Land Transport takes taxi complaints on the 1584 hotline. Note the
          plate number, the time and the place. Refusing a passenger and refusing the meter are
          both offences, and drivers can be fined. A photo of the plate and the route on your
          phone is enough to start a report.
        </p>
      </Section>

      <FaqList
        items={[
          { q: "What is the Bangkok taxi starting fare in 2026?", a: "35 THB for the first kilometre in a standard taxi, 40 THB in larger taxis." },
          { q: "How much does a Bangkok taxi charge in traffic?", a: "3 THB a minute whenever the car moves under 6 km/h, on top of the distance charge." },
          { q: "Is there an airport surcharge?", a: "Yes — 50 THB at the airport taxi stand, plus any expressway tolls." },
          { q: "Is there a fee to book a taxi by app?", a: "Yes. A metered taxi booked by phone or app adds a 20 THB service fee. Grab and Bolt car rides show their own fixed price instead." },
          { q: "Taxi or Grab at night?", a: "Grab or Bolt avoids meter refusals and shows the price first. Metered taxis can be cheaper if the driver uses the meter." },
          { q: "How do I complain about a Bangkok taxi?", a: "Call the Department of Land Transport on 1584 with the plate number, time and place." },
        ]}
      />

      <Related
        links={[
          { href: "/bangkok/airport/", label: "Airport to city" },
          { href: "/bangkok/airport-to-sukhumvit-taxi-price/", label: "Suvarnabhumi to Sukhumvit" },
          { href: "/bangkok/don-mueang-to-sukhumvit-taxi-price/", label: "Don Mueang to Sukhumvit" },
          { href: "/pattaya/bangkok-airport-to-pattaya-taxi-price/", label: "Airport to Pattaya taxi price" },
          { href: "/cash/", label: "Cash & payments" },
        ]}
      />
    </PageShell>
  );
}
