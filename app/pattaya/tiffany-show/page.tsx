import { BookingBox } from "@/components/BookingBox";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, CheckedNote, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Tiffany’s Show Pattaya 2026 – Ticket Prices, Show Times & Seats",
  "Tiffany’s Show Pattaya in 2026: ticket prices from mezzanine to VIP Diamond, show times, which seat to book, dress code and how to get there.",
  "/pattaya/tiffany-show/",
);

export default function TiffanyShowPage() {
  return (
    <PageShell
      path="/pattaya/tiffany-show/"
      title="Tiffany’s Show Pattaya (2026) – Prices, Times & Seats"
      lead="Pattaya’s best-known cabaret: a 75-minute production on Pattaya 2nd Road with three shows a night. Seats run from about 800 THB to over 2,000 THB."
    >
      <Section title="Ticket prices 2026">
        <PriceTable
          caption="Tiffany’s Show ticket prices 2026"
          headers={["Seat", "Price (THB)", "Worth it?"]}
          rows={[
            ["Mezzanine", "about 800–900", "Fine view from above; best value"],
            ["VIP Silver", "about 1,000–1,100", "Main floor, further back"],
            ["VIP Standard", "about 1,200–1,300", "Good middle seats"],
            ["VIP Gold", "about 1,600–1,800", "Closer, better sightlines"],
            ["VIP Diamond", "about 2,000–2,200", "Front rows"],
            ["Ticket + hotel transfer", "about 1,300–2,500", "Handy outside Central Pattaya"],
          ]}
        />
        <CheckedNote />
      </Section>

      <BookingBox title="Book Tiffany’s" items={[{ label: "Tiffany’s Show tickets", link: "cabaretPattaya" }]} />

      <Section title="Show times & practical">
        <Bullets>
          <li>Shows usually at 18:00, 19:30 and 21:00; box office opens mid-afternoon.</li>
          <li>About 75 minutes, no interval.</li>
          <li>Address: 464 Moo 9, Pattaya 2nd Road, North Pattaya.</li>
          <li>Smart casual recommended; beachwear and flip-flops are frowned on.</li>
          <li>Book 3–5 days ahead from November to February; walk-ins are usually fine March–October.</li>
        </Bullets>
      </Section>

      <Section title="Tiffany’s or Alcazar?">
        <p>
          Tiffany’s is the more polished production; <A href="/pattaya/alcazar-show/">Alcazar</A> is
          cheaper and more musical. Side-by-side: <A href="/pattaya/cabaret-shows/">cabaret show tickets</A>.
        </p>
      </Section>

      <FaqList
        items={[
          { q: "How much is Tiffany’s Show in 2026?", a: "From about 800–900 THB for mezzanine to about 2,000–2,200 THB for VIP Diamond." },
          { q: "What time is Tiffany’s Show?", a: "Usually 18:00, 19:30 and 21:00 daily. Confirm when booking." },
          { q: "Which seat is best value?", a: "Mezzanine or VIP Standard. Diamond is only worth it if you want the front rows." },
        ]}
      />

      <Related
        links={[
          { href: "/pattaya/cabaret-shows/", label: "Cabaret show tickets compared" },
          { href: "/pattaya/one-night-plan/", label: "One-night plans" },
          { href: "/pattaya/baht-bus/", label: "Baht bus" },
        ]}
      />
    </PageShell>
  );
}
