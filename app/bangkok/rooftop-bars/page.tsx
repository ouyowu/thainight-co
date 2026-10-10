import { BookingBox } from "@/components/BookingBox";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { StayNearby } from "@/components/StayNearby";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Best Rooftop Bars in Bangkok 2026 – By Area, Budget & Dress Code",
  "Bangkok rooftop bars compared: Sky Bar, Vertigo, Sky Beach, Octave, Spectrum and value picks near Asok and Nana. Nearest BTS, dress codes, hours and what a drink costs.",
  "/bangkok/rooftop-bars/",
);

const famous = [
  ["Sky Bar / Sirocco (lebua at State Tower)", "Silom · BTS Saphan Taksin", "The famous one; 63rd floor, river view, strict dress code"],
  ["Vertigo & Moon Bar (Banyan Tree)", "Sathorn · MRT Lumphini", "Open-air 61st floor; Vertigo is dining, Moon Bar is drinks"],
  ["Sky Beach (The Standard, Mahanakhon)", "Silom · BTS Chong Nonsi", "78th floor; entry fee includes one drink"],
];

const sukhumvit = [
  ["Spectrum (Hyatt Regency Sukhumvit)", "BTS Nana, direct access", "Live music; closest big rooftop to Soi 11"],
  ["Octave (Bangkok Marriott Sukhumvit)", "BTS Thong Lo, 2-min walk", "Multi-level terrace; great warm-up for Thonglor"],
  ["Tichuca (T-One Building)", "BTS Thong Lo", "Tropical theme, 46th floor, busy on weekends"],
  ["Cooling Tower (Carlton Hotel)", "BTS Asok", "Tapas and draft beer deals"],
  ["Sky on 20 (Novotel Sukhumvit 20)", "BTS Asok / MRT Sukhumvit", "Casual, good value"],
];

export default function RooftopBarsPage() {
  return (
    <PageShell
      path="/bangkok/rooftop-bars/"
      title="Best Rooftop Bars in Bangkok (2026)"
      lead="Pick the rooftop by where you’ll be that night, not by the most famous name. Go for sunset, dress smart casual, and expect hotel pricing."
    >
      <Section title="The famous views (Silom / Sathorn)">
        <PriceTable caption="Famous Bangkok rooftops" headers={["Bar", "Area · Transit", "Why go"]} rows={famous} />
        <p>
          Best done as a sunset drink before a riverside evening or dinner in Silom. These are the
          most expensive drinks in the city. Dress code and booking:{" "}
          <A href="/bangkok/sky-bar/">Sky Bar guide</A>.
        </p>
      </Section>

      <Section title="Sukhumvit rooftops (easy before Soi 11 or Thonglor)">
        <PriceTable caption="Sukhumvit rooftops" headers={["Bar", "Transit", "Notes"]} rows={sukhumvit} />
        <p>
          Five more within walking distance of BTS Nana:{" "}
          <A href="/bangkok/soi-11-rooftop-bars/">Soi 11 rooftop bars</A>.
        </p>
      </Section>

      <Section title="Riverside">
        <Bullets>
          <li><strong>Three Sixty (Millennium Hilton)</strong> — jazz and river views.</li>
          <li><strong>SEEN (AVANI+ Riverside)</strong> — faces Asiatique; reach it by the hotel shuttle boat from Sathorn Pier.</li>
        </Bullets>
      </Section>

      <BookingBox
        title="Rooftop deals & tickets"
        items={[
          { label: "Rooftop bar drink packages", link: "rooftopBangkok" },
          { label: "Chao Phraya dinner cruise (riverside evening)", link: "dinnerCruise" },
        ]}
      />

      <Section title="What it costs">
        <Bullets>
          <li>Cocktails commonly 400–900 THB+, often with ++ (service charge + VAT) on top.</li>
          <li>Beer usually from about 250–400 THB at hotel rooftops.</li>
          <li>Some rooftops charge entry that includes a drink; others need a minimum spend at peak.</li>
          <li>Happy hours and sunset deals are the cheapest way in — check before you go.</li>
        </Bullets>
      </Section>

      <Section title="Dress code and timing">
        <Bullets>
          <li>No shorts, flip-flops, sleeveless tops or sportswear at most rooftops; long trousers and closed shoes are safe.</li>
          <li>Arrive 30–45 minutes before sunset for a spot at the rail.</li>
          <li>Rain and wind close outdoor decks at short notice, especially May–October.</li>
          <li>Hours change — check the venue’s page on the day.</li>
        </Bullets>
      </Section>

      <Related
        links={[
          { href: "/bangkok/first-timer/", label: "First-timer guide" },
          { href: "/bangkok/areas/soi-11/", label: "Soi 11" },
          { href: "/bangkok/areas/rca-thonglor/", label: "Thonglor" },
          { href: "/bangkok/prices/", label: "Bangkok prices" },
        ]}
      />

      <StayNearby label="Hotels in Sukhumvit" link="hotelBangkok">
        <p className="mt-2">Several Sukhumvit hotels have their own rooftop bar — worth filtering for.</p>
      </StayNearby>
    </PageShell>
  );
}
