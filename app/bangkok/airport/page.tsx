import { BookingBox } from "@/components/BookingBox";
import { PageShell } from "@/components/PageShell";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Bangkok Airport to City 2026 – BKK & DMK to Sukhumvit",
  "Suvarnabhumi (BKK) and Don Mueang (DMK) to Sukhumvit, Silom and the riverside: Airport Rail Link, BTS, MRT and Grab, late arrivals and tout taxis.",
  "/bangkok/airport/",
);

export default function BangkokAirportPage() {
  return (
    <PageShell
      path="/bangkok/airport/" title="Bangkok Airport to City (2026) – BKK & DMK">
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
          <li>SRT Red Line to Bang Sue, then MRT toward Sukhumvit — or Grab / the taxi queue straight to the hotel.</li>
        </Bullets>
      </Section>

      <Section title="Late-night arrival">
        <p>
          Trains stop around midnight. After that use Grab, Bolt, the official taxi queue or a
          pre-booked transfer — not someone approaching you in the arrivals hall.
        </p>
      </Section>

      <BookingBox
        items={[
          { label: "Pre-book an airport transfer", link: "klook" },
          { label: "Thailand eSIM (works on landing)", link: "esim" },
        ]}
      />

      <Related
        links={[
          { href: "/bangkok/getting-around/", label: "Getting around" },
          { href: "/bangkok/first-timer/", label: "First-timer" },
          { href: "/pattaya/airport/", label: "Bangkok → Pattaya" },
        ]}
      />
    </PageShell>
  );
}
