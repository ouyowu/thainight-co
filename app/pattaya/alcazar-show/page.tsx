import { BookingBox } from "@/components/BookingBox";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, CheckedNote, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Alcazar Show Pattaya 2026 – Ticket Prices, Show Times & Tips",
  "Alcazar Cabaret Pattaya in 2026: VIP vs VVIP ticket prices, four daily show times, where to book without markup, and the photo-tip trap after the show.",
  "/pattaya/alcazar-show/",
);

export default function AlcazarShowPage() {
  return (
    <PageShell
      path="/pattaya/alcazar-show/"
      title="Alcazar Show Pattaya (2026) – Prices, Times & Tips"
      lead="Alcazar is Pattaya’s better-value cabaret: about 70 minutes, four shows a day, VIP seats around 900 THB."
    >
      <Section title="Ticket prices 2026">
        <PriceTable
          caption="Alcazar ticket prices 2026"
          headers={["Seat", "Price (THB)", "Notes"]}
          rows={[
            ["VIP", "about 900", "Good view even a few rows back"],
            ["VVIP", "about 1,800", "Front section; the only type on the official site"],
            ["“VIP” sold on the street", "as low as 700", "Often far-back seats — avoid"],
          ]}
        />
        <CheckedNote />
      </Section>

      <BookingBox title="Book Alcazar" items={[{ label: "Alcazar tickets (VIP / VVIP)", link: "alcazarPattaya" }]} />

      <Section title="Show times & practical">
        <Bullets>
          <li>Usually 17:00, 18:30, 20:00 and 21:30.</li>
          <li>About 70 minutes, 15+ numbers.</li>
          <li>Address: 78/14 Pattaya 2nd Road. Northbound 2nd Road baht buses pass the door (about 15 THB).</li>
          <li>Booking platforms let you pick VIP or VVIP; swap the voucher for paper tickets at the box office.</li>
          <li>No food or drink inside; no photos or video during the show.</li>
        </Bullets>
      </Section>

      <Section title="The photo-tip trap">
        <p>
          After the show, performers line up outside for photos and charge around 100 THB per
          performer per photo. Two photos with three performers is 600 THB. Agree first, or watch
          from a distance.
        </p>
      </Section>

      <Section title="Alcazar or Tiffany’s?">
        <p>
          Alcazar is cheaper and more playful; <A href="/pattaya/tiffany-show/">Tiffany’s</A> is the
          more polished production. Compare: <A href="/pattaya/cabaret-shows/">cabaret show tickets</A>.
        </p>
      </Section>

      <FaqList
        items={[
          { q: "How much is the Alcazar show in 2026?", a: "About 900 THB for VIP and about 1,800 THB for VVIP." },
          { q: "What time is the Alcazar show?", a: "Usually four shows: 17:00, 18:30, 20:00 and 21:30." },
          { q: "Are street-sold Alcazar tickets OK?", a: "They can be cheaper but are often far-back seats sold as VIP. Buy at the box office or a known platform." },
        ]}
      />

      <Related
        links={[
          { href: "/pattaya/cabaret-shows/", label: "Cabaret show tickets compared" },
          { href: "/pattaya/areas/walking-street/", label: "Walking Street after the show" },
          { href: "/pattaya/baht-bus/", label: "Baht bus" },
        ]}
      />
    </PageShell>
  );
}
