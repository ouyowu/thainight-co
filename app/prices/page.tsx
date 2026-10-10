import { BookingBox } from "@/components/BookingBox";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Thailand Nightlife Prices 2026 – Bangkok & Pattaya",
  "2026 price reference for Bangkok and Pattaya nightlife: beer, cocktails, rooftop bars, club entry, shows and late-night transport.",
  "/prices/",
);

export default function PricesPage() {
  return (
    <PageShell title="Thailand Nightlife Prices 2026 – Bangkok & Pattaya Quick Reference">
      <p>
        Prices are approximate ranges in Thai baht, based on venue menus and recent visitor
        reports. Always confirm on the spot. High season (Nov–Apr) leans to the higher end. Many
        hotel bars add 10% service charge and 7% VAT on top of menu prices (shown as “++”).
      </p>

      <Section title="Bangkok">
        <PriceTable
          caption="Bangkok nightlife prices"
          headers={["Item", "Typical range (THB)", "Notes"]}
          rows={[
            ["Beer, street or open bar", "80–150", "Cheapest on Khao San and in markets"],
            ["Beer, Sukhumvit / Soi 11 bar", "120–220", "Happy hours common before 21:00"],
            ["Cocktail, cocktail bar", "250–450", "Thonglor / Ekkamai range"],
            ["Cocktail, hotel rooftop", "400–900+", "Often ++ on top"],
            ["Club entry (RCA etc.)", "300–500", "Sometimes includes a drink"],
            ["Grab across Sukhumvit", "80–200", "Surge late at night"],
          ]}
        />
        <p>
          City detail: <A href="/bangkok/prices/">Bangkok prices</A>.
        </p>
      </Section>

      <Section title="Pattaya">
        <PriceTable
          caption="Pattaya nightlife prices"
          headers={["Item", "Typical range (THB)", "Notes"]}
          rows={[
            ["Beer, open beer bar", "60–130", "Soi Buakhao, Tree Town"],
            ["Beer, Walking Street bar / club", "150–250", "Premium zone"],
            ["Cocktail, club", "250–400", "—"],
            ["Baht bus, fixed route", "10–20 per person", "Private hire costs much more — agree first"],
          ]}
        />
        <p>
          City detail: <A href="/pattaya/prices/">Pattaya prices</A>.
        </p>
      </Section>

      <Section title="Shows and activities">
        <p>
          Ticket prices for <A href="/bangkok/muay-thai/">Muay Thai</A> and{" "}
          <A href="/pattaya/cabaret-shows/">cabaret shows</A> vary by seat class and date. Check
          the live price on the booking page rather than trusting a fixed number.
        </p>
      </Section>

      <BookingBox
        items={[
          { label: "Airport & city transfers", link: "klook" },
          { label: "Bangkok → Pattaya transfer", link: "transferBangkokPattaya" },
          { label: "Thailand eSIM", link: "esim" },
        ]}
      />

      <Section title="Key reminders">
        <Bullets>
          <li>Check the menu price before you order, especially in bars without a printed menu.</li>
          <li>Paying round by round reduces bill surprises.</li>
          <li>Look for “++” — it adds about 17% to hotel-bar prices.</li>
          <li>Low season (roughly May–Oct) can be cheaper, with more promotions.</li>
        </Bullets>
        <p>
          Plan the whole night: <A href="/budgets/">budget bands</A> · <A href="/cash/">cash</A>.
        </p>
      </Section>
    </PageShell>
  );
}
