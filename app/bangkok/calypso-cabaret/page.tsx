import { BookingBox } from "@/components/BookingBox";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, CheckedNote, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Calypso Cabaret Bangkok 2026 – Prices, Show Times & Getting There",
  "Calypso Cabaret at Asiatique in 2026: online vs walk-up ticket prices, dinner and cruise combos, show times, the free shuttle boat and the photo-tip trap.",
  "/bangkok/calypso-cabaret/",
);

export default function CalypsoPage() {
  return (
    <PageShell
      path="/bangkok/calypso-cabaret/"
      title="Calypso Cabaret Bangkok Tickets (2026)"
      lead="Booked online, a Calypso ticket is about 900 THB with a reserved seat; walk-up at the box office is about 1,200 THB with first-come seating. The show runs roughly an hour at Warehouse 3, Asiatique."
    >
      <Section title="2026 ticket prices">
        <PriceTable
          caption="Calypso Cabaret ticket prices 2026"
          headers={["Option", "Price (THB)", "Includes"]}
          rows={[
            ["Show only, booked ahead", "about 900", "Reserved seat + soft drink"],
            ["Show only, walk-up", "about 1,200", "First-come seating"],
            ["VIP seating", "a few hundred more", "Front rows, alcoholic drink, snack"],
            ["Thai dinner + classical dance + cabaret", "from about 1,500", "Set dinner before the show"],
            ["Dinner cruise + cabaret", "from about 1,650–1,850", "Chao Phraya cruise and show"],
            ["Photos with performers after", "about 100–200 each", "Cash only — agree first"],
          ]}
        />
        <CheckedNote />
      </Section>

      <BookingBox
        title="Book ahead (cheaper than the door)"
        items={[
          { label: "Calypso Cabaret tickets", link: "cabaretBangkok" },
          { label: "Dinner cruise + cabaret combo", link: "dinnerCruise" },
        ]}
      />

      <Section title="Show times">
        <p>
          Evening shows, with an early show around 19:15–19:45 and, in most months, a later show
          around 21:00–21:45. The schedule changes by season — go by the time on your confirmation.
          Latecomers can enter but can’t switch shows.
        </p>
      </Section>

      <Section title="Getting there">
        <Bullets>
          <li>BTS Saphan Taksin (exit 2) → Sathorn Pier → free Asiatique shuttle boat, roughly every 25–30 minutes until about 23:30.</li>
          <li>Grab or taxi to the Charoen Krung Road entrance — slow in evening traffic.</li>
          <li>Collect tickets at the Warehouse 3 counter, not the main Asiatique entrance. Allow 30 minutes.</li>
        </Bullets>
      </Section>

      <Section title="Make an evening of it">
        <p>
          Sunset at <A href="/bangkok/sky-bar/">Sky Bar</A> (near Saphan Taksin), then the boat to
          Asiatique for the show and dinner — or combine with a{" "}
          <A href="/bangkok/dinner-cruise/">dinner cruise</A>.
        </p>
      </Section>

      <FaqList
        items={[
          { q: "How much is Calypso Cabaret in 2026?", a: "About 900 THB booked online with a reserved seat, about 1,200 THB walk-up. Dinner and cruise combos start around 1,500–1,850 THB." },
          { q: "Where is Calypso Cabaret?", a: "Warehouse 3 at Asiatique The Riverfront, reached by free shuttle boat from Sathorn Pier." },
          { q: "Can I take photos during the show?", a: "Photos without flash are generally allowed; video and flash are not. Photos with performers afterwards cost a tip." },
        ]}
      />

      <Related
        links={[
          { href: "/pattaya/cabaret-shows/", label: "Pattaya cabaret shows" },
          { href: "/bangkok/night-activities/", label: "Bangkok night activities" },
          { href: "/bangkok/one-night-plan/", label: "One-night plans" },
        ]}
      />
    </PageShell>
  );
}
