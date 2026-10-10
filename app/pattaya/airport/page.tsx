import { BookingBox } from "@/components/BookingBox";
import { PageShell } from "@/components/PageShell";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Bangkok to Pattaya Transfer 2026 – BKK, Bangkok City & U-Tapao",
  "Getting to Pattaya from Suvarnabhumi (BKK), central Bangkok and U-Tapao (UTP): airport coach, bus from Ekkamai, private transfer and Grab — no fake baht quotes.",
  "/pattaya/airport/",
);

export default function PattayaAirportPage() {
  return (
    <PageShell path="/pattaya/airport/" title="Bangkok to Pattaya Transfer (2026) – BKK, City & U-Tapao">
      <p>
        Most visitors reach Pattaya by road from Bangkok Suvarnabhumi (BKK) or from the city. The
        drive is usually around two hours, longer at rush hour and on Friday evenings. Mode-by-mode comparison: <A href="/pattaya/bangkok-to-pattaya/">Bangkok to Pattaya transfer</A>.
      </p>

      <Section title="From Suvarnabhumi (BKK)">
        <Bullets>
          <li><strong>Airport coach</strong> — scheduled buses to Pattaya leave from the arrivals building. Confirm the drop point (North, Central or Jomtien) against your hotel.</li>
          <li><strong>Private transfer</strong> — best with luggage, a group or a late landing. Pre-book or use an official desk, not the first person in arrivals.</li>
          <li><strong>Grab</strong> — works, but it’s a long intercity ride. Check the live fare in the app.</li>
        </Bullets>
      </Section>

      <Section title="From central Bangkok">
        <Bullets>
          <li>Buses to Pattaya run from Ekkamai (Eastern) bus terminal, next to BTS Ekkamai.</li>
          <li>A private car or Grab from your hotel is simplest with bags.</li>
        </Bullets>
      </Section>

      <Section title="From U-Tapao (UTP)">
        <p>
          Closer to Pattaya than BKK. Grab or a booked transfer into Central Pattaya is the usual
          choice. No opaque fixed prices from a tout at the door.
        </p>
      </Section>

      <BookingBox
        items={[
          { label: "Book a Bangkok → Pattaya transfer", link: "transferBangkokPattaya" },
          { label: "Thailand eSIM", link: "esim" },
        ]}
      />

      <Section title="Where to get dropped">
        <p>
          Central Pattaya keeps the night simple. Walking Street is pedestrian in the evening — get
          dropped at the end and walk. Once in town, see{" "}
          <A href="/pattaya/getting-around/">getting around Pattaya</A>.
        </p>
      </Section>

      <Related
        links={[
          { href: "/pattaya/bangkok-to-pattaya/", label: "Bus vs car vs Grab" },
          { href: "/pattaya/first-timer/", label: "First-timer" },
          { href: "/pattaya/hotels-walking-street/", label: "Where to stay" },
          { href: "/scams/", label: "Scams" },
        ]}
      />
    </PageShell>
  );
}
