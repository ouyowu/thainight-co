import { BookingBox } from "@/components/BookingBox";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { StayNearby } from "@/components/StayNearby";
import { A, Bullets, CheckedNote, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Max Muay Thai Stadium Pattaya 2026 – Ticket Price, Times & Seats",
  "Max Muay Thai Stadium Pattaya tickets in 2026: the published VIP seat is 1,500 THB, fights most nights, and how to avoid gate sellers.",
  "/pattaya/max-muay-thai-stadium/",
);

export default function MaxMuayThaiPage() {
  return (
    <PageShell
      path="/pattaya/max-muay-thai-stadium/"
      title="Max Muay Thai Stadium Pattaya (2026) – Ticket Price"
      lead="A visitor ticket at Max Muay Thai Stadium is 1,500 THB for a VIP seat. That is the only published price. Front-row seats exist but are limited — ask which seat you are actually getting before you pay."
    >
      <Section title="Ticket price 2026">
        <PriceTable
          caption="Max Muay Thai Stadium ticket prices 2026"
          headers={["Seat", "Price (THB)", "Notes"]}
          rows={[
            ["VIP (the published visitor ticket)", "1,500", "One seat class on the stadium’s ticket page"],
            ["Front row / front section", "Confirm when you book", "Limited. Not a separate published price"],
            ["Thai passport", "Confirm on the day", "Sometimes listed lower on a specific card. Do not assume a discount"],
          ]}
        />
        <p>
          Buy at the stadium ticket counter or a known booking page, then swap an e-ticket for paper
          at the box office if the voucher says so. Bangkok stadium prices are a different card:{" "}
          <A href="/bangkok/muay-thai/">Muay Thai tickets in Bangkok</A>.
        </p>
        <CheckedNote />
      </Section>

      <BookingBox
        title="Book Max Muay Thai"
        items={[{ label: "Max Muay Thai tickets", link: "muayThaiPattaya" }]}
      />

      <Section title="When and where">
        <Bullets>
          <li>Fights are usually every night. Weekday cards often start around 19:00; Saturday and Sunday often around 19:45. Doors are about an hour before. Confirm the card that day.</li>
          <li>A card is short: often four or five fights, roughly 90 minutes, not a four-hour Bangkok stadium night.</li>
          <li>Address used by booking pages: 42/108 Moo 9, Sukhumvit Road, next to King Power Pattaya (between South Pattaya Road and Central Road). Check the pin; one older write-up still shows a different house number.</li>
          <li>Taxi, Grab or a baht bus along Sukhumvit. It gets busy just before the first fight.</li>
        </Bullets>
      </Section>

      <StayNearby label="Hotels in Pattaya" link="hotelPattaya">
        <p>
          Central Pattaya and South Pattaya are a short ride along Sukhumvit. Pair the fights with
          a later stop, not a second show the same evening.
        </p>
      </StayNearby>

      <Section title="Scams and bad tickets">
        <Bullets>
          <li>
            <strong>Sellers outside the gate.</strong> The published price is 1,500 THB at the
            counter. A “cheaper VIP” or a much higher “ringside only” pitch from someone on the
            pavement is the usual markup.
          </li>
          <li>
            <strong>Front row with no seat number.</strong> If a reseller cannot say which row,
            buy the standard 1,500 THB ticket at the counter instead.
          </li>
          <li>
            <strong>Hotel desks that bundle a transfer.</strong> Fine if the ticket price is still
            1,500 THB and the car is itemised. Walk away if the bundle hides the fare.
          </li>
        </Bullets>
      </Section>

      <FaqList
        items={[
          {
            q: "How much are Max Muay Thai tickets in Pattaya in 2026?",
            a: "1,500 THB for the published VIP seat. That is the only visitor price the stadium lists. Confirm front-row availability when you book.",
          },
          {
            q: "What time does Max Muay Thai start?",
            a: "Usually every night. Weekday first fights are often around 19:00, and weekend cards often around 19:45. Doors open about an hour before. Check the card on the day.",
          },
          {
            q: "Where is Max Muay Thai Stadium?",
            a: "On Sukhumvit Road next to King Power Pattaya, listed as 42/108 Moo 9. A taxi, Grab or baht bus along Sukhumvit is the simple way there.",
          },
          {
            q: "Can I buy tickets at the door?",
            a: "Yes, at the stadium counter, when the night is not sold out. Booking ahead is safer on weekends. Skip people selling tickets outside the gate.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/pattaya/night-activities/", label: "Pattaya night activities" },
          { href: "/pattaya/cabaret-shows/", label: "Cabaret shows the same evening" },
          { href: "/bangkok/muay-thai/", label: "Bangkok stadium prices" },
          { href: "/pattaya/baht-bus/", label: "Baht bus" },
        ]}
      />
    </PageShell>
  );
}
