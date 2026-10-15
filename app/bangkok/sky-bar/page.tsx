import { BookingBox } from "@/components/BookingBox";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Sky Bar Bangkok 2026 – Dress Code, Prices, Booking & Value",
  "Sky Bar at lebua (State Tower) in 2026: dress code, reservation deposits, price expectations, best time to go and cheaper rooftops with similar views.",
  "/bangkok/sky-bar/",
);

export default function SkyBarPage() {
  return (
    <PageShell
      path="/bangkok/sky-bar/"
      title="Sky Bar Bangkok (2026) – Dress Code, Prices & Booking"
      lead="Sky Bar at lebua, State Tower, is Bangkok’s most famous rooftop: river views from about 247 m up, made famous by The Hangover Part II. It’s also one of the most expensive drinks in the city."
    >
      <Section title="Dress code (enforced)">
        <Bullets>
          <li><strong>Not allowed:</strong> athletic wear, swimwear, sleeveless shirts for men, flip-flops and beach slippers.</li>
          <li><strong>Men:</strong> collared shirt or smart T-shirt, long trousers or tailored shorts, closed shoes or smart sandals.</li>
          <li><strong>Women:</strong> dresses, skirts, blouses or tailored shorts; dress sandals are fine.</li>
          <li>If in doubt, long trousers and closed shoes — refusals at the lift are common.</li>
        </Bullets>
      </Section>

      <Section title="Price and booking">
        <Bullets>
          <li>Cocktails are priced at the top of the Bangkok range and carry ++. Check the current drink list before you go.</li>
          <li>Reservations need a deposit, deducted from your bill; free changes up to 72 hours before.</li>
          <li>Special dates (New Year’s Eve, Christmas Eve, Valentine’s Day) need a 100% non-refundable deposit.</li>
          <li>Children 7+ are welcome with an adult at Sky Bar; some neighbouring lebua bars are 20+.</li>
        </Bullets>
      </Section>

      <Section title="When to go">
        <p>
          Arrive 30–45 minutes before sunset for a spot at the rail. Rain and wind can close the
          outdoor deck at short notice, especially May–October. Getting there: BTS Saphan Taksin,
          then a short walk to State Tower on Silom Road.
        </p>
      </Section>

      <BookingBox items={[{ label: "Bangkok rooftop packages", link: "rooftopBangkok" }, { label: "Chao Phraya dinner cruise after", link: "dinnerCruise" }]} />

      <Section title="Better-value alternatives">
        <Bullets>
          <li><strong>Vertigo & Moon Bar</strong> (Banyan Tree, Sathorn) — open-air 61st floor.</li>
          <li><strong>Sky Beach</strong> (Mahanakhon) — 78th floor; entry includes one drink.</li>
          <li><strong>Octave</strong> (Thonglor) — multi-level terrace, cheaper drinks.</li>
          <li><strong>Soi 11 rooftops</strong> — see <A href="/bangkok/soi-11-rooftop-bars/">Soi 11 rooftop bars</A>.</li>
        </Bullets>
      </Section>

      <FaqList
        items={[
          { q: "What is the Sky Bar Bangkok dress code?", a: "Smart casual. No athletic wear, swimwear, sleeveless shirts for men, flip-flops or beach slippers." },
          { q: "Do I need a reservation for Sky Bar?", a: "Not always for drinks, but a reservation with a deposit guarantees a spot, especially at sunset and on special dates." },
          { q: "Is Sky Bar worth it?", a: "For the view and the story, once. For value, Octave, Vertigo or the Soi 11 rooftops are better." },
        ]}
      />

      <Related
        links={[
          { href: "/bangkok/rooftop-bars/", label: "All rooftop bars" },
          { href: "/bangkok/dinner-cruise/", label: "Dinner cruise prices" },
          { href: "/bangkok/one-night-plan/", label: "One-night plans" },
        ]}
      />
    </PageShell>
  );
}
