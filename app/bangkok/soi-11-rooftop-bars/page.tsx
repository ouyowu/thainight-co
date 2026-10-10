import { BookingBox } from "@/components/BookingBox";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, CheckedNote, Related, Section } from "@/components/Prose";
import { StayNearby } from "@/components/StayNearby";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Soi 11 Rooftop Bars Bangkok 2026 – Above Eleven, Pastel, Spectrum & Prices",
  "Rooftop bars on and around Sukhumvit Soi 11 near BTS Nana: Above Eleven, Pastel, Spectrum, RedSquare and Belga. Floors, hours, dress codes and 2026 drink prices.",
  "/bangkok/soi-11-rooftop-bars/",
);

export default function Soi11RooftopsPage() {
  return (
    <PageShell
      path="/bangkok/soi-11-rooftop-bars/"
      title="Soi 11 Rooftop Bars, Bangkok (2026)"
      lead="Five rooftops sit within a 10-minute walk of BTS Nana. Do one at sunset, then walk down Soi 11 for bars and clubs."
    >
      <Section title="The rooftops">
        <PriceTable
          caption="Rooftop bars near Sukhumvit Soi 11"
          headers={["Bar", "Where", "Floor · Hours", "Good for"]}
          rows={[
            ["Above Eleven (Fraser Suites)", "Soi 11 · ~6 min from BTS Nana", "33rd–34th · ~18:00–02:00", "Japanese-Peruvian food, cocktails; book ahead"],
            ["Pastel Rooftop (Aira Hotel)", "Soi 11 · ~3 min from BTS Nana", "22nd · ~17:00–01:00", "Pretty sunset spot, easy first stop"],
            ["Spectrum (Hyatt Regency)", "Soi 13 · direct from BTS Nana", "29th–30th · ~17:30–24:00", "Live music, polished"],
            ["RedSquare (Novotel Sukhumvit 4)", "Soi 4 · ~4 min from BTS Nana", "25th · ~18:00–01:00", "More affordable"],
            ["Belga (Sofitel Sukhumvit)", "Sukhumvit Rd, Nana–Asok", "32nd · ~17:00–24:00", "Belgian beers, relaxed"],
          ]}
        />
        <CheckedNote what="Hours and prices" />
      </Section>

      <Section title="What a drink costs">
        <Bullets>
          <li>Draught beer from about 180 THB at Above Eleven; cocktails at hotel rooftops commonly 350–500 THB+.</li>
          <li>Most add ++ (10% service + 7% VAT) to menu prices.</li>
          <li>Happy hours before about 20:00 are the cheapest way in.</li>
          <li>Back on Soi 11 street level, beers drop to roughly 120–220 THB — see <A href="/bangkok/prices/">Bangkok prices</A>.</li>
        </Bullets>
      </Section>

      <Section title="Dress code">
        <p>
          No flip-flops, open shoes for men, sleeveless shirts, sportswear or beachwear at most of
          these. Long trousers and closed shoes are safe everywhere.
        </p>
      </Section>

      <BookingBox items={[{ label: "Rooftop drink packages & reservations", link: "rooftopBangkok" }]} />

      <Section title="A simple Soi 11 night">
        <ol className="list-decimal space-y-1 pl-5">
          <li>17:30 — Pastel or Spectrum for sunset</li>
          <li>19:30 — dinner (Above Eleven if booked, or Soi 11 restaurants)</li>
          <li>21:30 — <A href="/bangkok/areas/soi-11/">Soi 11</A> bars, then a club</li>
        </ol>
      </Section>

      <FaqList
        items={[
          { q: "What is the best rooftop bar on Soi 11?", a: "Above Eleven is the best known, with food and views across Sukhumvit — book ahead. Pastel is the easiest walk-in near BTS Nana." },
          { q: "Do I need to book?", a: "For Above Eleven, yes, especially on weekends. The others usually take walk-ins for drinks." },
          { q: "How much are drinks at Soi 11 rooftops?", a: "Beer from about 180 THB and cocktails commonly 350–500 THB+, often with ++ on top." },
        ]}
      />

      <Related
        links={[
          { href: "/bangkok/rooftop-bars/", label: "All Bangkok rooftop bars" },
          { href: "/bangkok/sky-bar/", label: "Sky Bar (lebua)" },
          { href: "/bangkok/areas/soi-11/", label: "Soi 11 nightlife" },
        ]}
      />

      <StayNearby label="Hotels near BTS Nana / Soi 11" link="hotelSukhumvit">
        <p className="mt-2">Staying on Soi 11 itself puts the rooftops and bars a short walk away.</p>
      </StayNearby>
    </PageShell>
  );
}
