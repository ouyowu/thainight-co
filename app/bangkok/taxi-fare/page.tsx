import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, CheckedNote, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Bangkok Taxi Fare 2026 – Meter Rates, Airport Surcharge & Scams",
  "Bangkok taxi meter rates in 2026: 35 THB flag fall, per-km rates, airport surcharge and tolls, Grab vs taxi at night, and the common taxi and tuk-tuk scams.",
  "/bangkok/taxi-fare/",
);

export default function TaxiFarePage() {
  return (
    <PageShell
      title="Bangkok Taxi Fares (2026) – Meter Rates & Scams"
      lead="Metered taxis start at 35 THB. A 5 km ride is roughly 60 THB and 10 km about 95 THB in good traffic. Late at night, drivers who refuse the meter are the main problem."
    >
      <Section title="2026 meter rates">
        <PriceTable
          caption="Bangkok taxi meter rates 2026"
          headers={["Item", "Rate (THB)"]}
          rows={[
            ["Flag fall (first 1 km)", "35 (40 for SUV / MPV taxis)"],
            ["1–10 km", "6.50 per km"],
            ["10–20 km", "7.00 per km"],
            ["20–40 km", "8.00 per km"],
            ["Stuck in traffic (<6 km/h)", "3 per minute"],
            ["Airport taxi stand surcharge", "50"],
            ["Expressway tolls", "Paid by the passenger, on top"],
          ]}
        />
        <CheckedNote what="Rates" />
      </Section>

      <Section title="Typical night-out fares">
        <Bullets>
          <li>Nana ↔ Thonglor: usually under 150 THB by meter outside rush hour.</li>
          <li>Sukhumvit → RCA: roughly 100–200 THB.</li>
          <li>Sukhumvit → Rajadamnern stadium: roughly 150–250 THB, more with traffic.</li>
          <li>Grab and Bolt show a fixed price upfront; after midnight they’re often similar to or slightly above the meter.</li>
        </Bullets>
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

      <FaqList
        items={[
          { q: "What is the Bangkok taxi starting fare in 2026?", a: "35 THB for the first kilometre in a standard taxi, 40 THB in larger SUV/MPV taxis." },
          { q: "Is there an airport surcharge?", a: "Yes — 50 THB at the airport taxi stand, plus any expressway tolls." },
          { q: "Taxi or Grab at night?", a: "Grab or Bolt avoids meter refusals and shows the price first. Metered taxis can be cheaper if the driver uses the meter." },
        ]}
      />

      <Related
        links={[
          { href: "/bangkok/airport/", label: "Airport to city" },
          { href: "/pattaya/bangkok-airport-to-pattaya-taxi-price/", label: "Airport to Pattaya taxi price" },
          { href: "/cash/", label: "Cash & payments" },
        ]}
      />
    </PageShell>
  );
}
