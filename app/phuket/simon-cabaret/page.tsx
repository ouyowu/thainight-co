import { BookingBox } from "@/components/BookingBox";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, CheckedNote, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Simon Cabaret Phuket Tickets 2026 – Prices, Show Times & Seats",
  "Simon Cabaret in Patong for 2026: ticket prices from about 800 THB, VIP vs regular seats, three nightly show times, transfers and the post-show photo tip.",
  "/phuket/simon-cabaret/",
);

export default function SimonCabaretPage() {
  return (
    <PageShell
      path="/phuket/simon-cabaret/"
      title="Simon Cabaret Phuket Tickets (2026)"
      lead="Phuket’s best-known cabaret: about 70 minutes on Sirirat Road in Patong, with shows at 18:00, 19:30 and 21:00. Online tickets start from about 800 THB."
    >
      <Section title="Tickets and seats">
        <PriceTable
          caption="Simon Cabaret tickets 2026"
          headers={["Seat", "Where", "Price"]}
          rows={[
            ["Regular", "2nd floor", "From about 800 THB online"],
            ["VIP", "1st floor, closer to the stage", "Higher — check the booking page"],
            ["Hotel transfer", "Select areas", "Paid add-on; book at least 3 hours ahead"],
            ["Photos with performers after", "Outside", "About 100 THB per photo"],
          ]}
        />
        <CheckedNote />
      </Section>

      <BookingBox title="Book Simon Cabaret" items={[{ label: "Simon Cabaret tickets", link: "cabaretPhuket" }]} />

      <Section title="Practical">
        <Bullets>
          <li>Shows usually 18:00, 19:30 and 21:00; doors open about 30 minutes before.</li>
          <li>Address: 8 Sirirat Road, Patong — a short Grab from Bangla Road.</li>
          <li>No photos during the show.</li>
          <li>Bookings are often non-refundable and non-changeable — double-check the date.</li>
          <li>Around Songkran (mid-April), road closures can suspend transfers from Patong and Kamala.</li>
        </Bullets>
      </Section>

      <Section title="Make a night of it">
        <p>
          Take the 18:00 or 19:30 show, eat at Banzaan Market, then head to{" "}
          <A href="/phuket/bangla-road/">Bangla Road</A> or the{" "}
          <A href="/phuket/muay-thai/">Bangla Boxing Stadium</A> (first bout around 21:00).
        </p>
      </Section>

      <FaqList
        items={[
          { q: "How much is Simon Cabaret in 2026?", a: "Online tickets start from about 800 THB for regular seats; VIP seats cost more." },
          { q: "What time is Simon Cabaret?", a: "Usually 18:00, 19:30 and 21:00 daily, about 70 minutes each." },
          { q: "VIP or regular?", a: "VIP is on the ground floor near the stage; regular is upstairs with a full view. Regular is fine for most visitors." },
        ]}
      />

      <Related
        links={[
          { href: "/pattaya/cabaret-shows/", label: "Pattaya cabaret shows" },
          { href: "/bangkok/calypso-cabaret/", label: "Calypso Cabaret (Bangkok)" },
          { href: "/phuket/", label: "Phuket nightlife" },
        ]}
      />
    </PageShell>
  );
}
