import { BookingBox } from "@/components/BookingBox";
import { PageShell } from "@/components/PageShell";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Cash & Payments for Bangkok & Pattaya Nightlife 2026",
  "ATM fees, cards vs cash, QR payments and how much to carry for a night out in Bangkok and Pattaya in 2026.",
  "/cash/",
);

export default function CashPage() {
  return (
    <PageShell path="/cash/" title="Cash & Payments for a Night Out (2026)">
      <p>
        Carry enough for the night you planned, plus a buffer. Leave the rest in the hotel safe.
        Hotel bars and rooftops take cards; street bars, markets and small bars are mostly cash.
      </p>

      <Section title="ATMs">
        <Bullets>
          <li>Thai ATMs charge foreign cards a flat fee per withdrawal (commonly around 220–250 THB). Fewer, larger withdrawals cost less.</li>
          <li>Decline the ATM’s own currency conversion — choose to be charged in baht.</li>
          <li>Use ATMs inside banks or malls rather than dark street machines.</li>
        </Bullets>
      </Section>

      <Section title="Cards and QR">
        <Bullets>
          <li>Rooftops, hotel bars and clubs generally accept Visa / Mastercard.</li>
          <li>Thai QR (PromptPay) is everywhere, but usually needs a Thai bank app or a travel app that supports it.</li>
          <li>When paying by card, choose baht, not your home currency.</li>
        </Bullets>
      </Section>

      <Section title="How much to carry">
        <p>
          Size it from the <A href="/budgets/">budget bands</A>, then add a buffer for a late Grab
          or an extra round. Keep 100 and 50 baht notes for smaller bars and baht buses.
        </p>
      </Section>

      <BookingBox items={[{ label: "Thailand eSIM (for Grab and maps)", link: "esim" }]} />

      <Section title="Practical">
        <Bullets>
          <li>Don’t flash cash on the street or at the table. See <A href="/scams/">scams</A>.</li>
          <li>Pay round by round in smaller bars — fewer bill surprises.</li>
          <li>Photograph your card details? No. Keep a backup card in the hotel safe instead.</li>
        </Bullets>
      </Section>

      <Related
        links={[
          { href: "/prices/", label: "Prices" },
          { href: "/bangkok/getting-around/", label: "Bangkok getting around" },
          { href: "/pattaya/getting-around/", label: "Pattaya getting around" },
        ]}
      />
    </PageShell>
  );
}
