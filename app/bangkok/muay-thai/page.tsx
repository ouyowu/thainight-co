import { BookingBox } from "@/components/BookingBox";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Muay Thai in Bangkok 2026 – Rajadamnern vs Lumpinee, Tickets & Seats",
  "How to watch Muay Thai in Bangkok: Rajadamnern and Lumpinee stadiums compared, fight nights, seat classes, how to buy tickets and how to fit it into a night out.",
  "/bangkok/muay-thai/",
);

export default function MuayThaiBangkokPage() {
  return (
    <PageShell
      title="Muay Thai in Bangkok (2026) – Rajadamnern vs Lumpinee"
      lead="A live fight card is one of the best nights out in Bangkok. Pick the stadium by night and location, pick the seat by how close you want to be."
    >
      <Section title="The two big stadiums">
        <PriceTable
          caption="Rajadamnern vs Lumpinee"
          headers={["", "Rajadamnern", "Lumpinee"]}
          rows={[
            ["Where", "Ratchadamnoen Nok Rd, old town", "Ram Inthra Rd, north Bangkok"],
            ["Getting there", "Short Grab from Khao San / old town", "MRT Pink Line (Ram Inthra 3) or ~30 min by car"],
            ["Fight nights", "Most nights of the week", "Strongest on Fri and Sat"],
            ["Start", "Usually 18:00–19:00", "Usually evening; check the card"],
            ["Best for", "First-timers, easy combo with Khao San", "Big weekend cards"],
          ]}
        />
        <p>Schedules change with promotions and holidays. Confirm the card and start time on the day.</p>
      </Section>

      <Section title="Seat classes">
        <Bullets>
          <li><strong>Ringside</strong> — closest, priciest, best photos.</li>
          <li><strong>Club / 2nd class</strong> — good full-ring view, the best value for most visitors.</li>
          <li><strong>3rd class</strong> — highest and loudest, where local fans and gamblers sit; often not reservable in advance.</li>
          <li>Rajadamnern also sells premium VIP and balcony options on big nights.</li>
        </Bullets>
      </Section>

      <BookingBox
        title="Buy tickets"
        items={[{ label: "Rajadamnern / Lumpinee tickets", link: "muayThaiBangkok" }]}
      />

      <Section title="How to buy">
        <Bullets>
          <li>Online in advance — sometimes cheaper, and safe on busy nights.</li>
          <li>At the stadium box office on the day.</li>
          <li>Never from street sellers near the gates — fake and inflated tickets are common.</li>
        </Bullets>
      </Section>

      <Section title="Fit it into the night">
        <p>
          Fights early, drinks later. From Rajadamnern, Khao San Road is a short ride; from Lumpinee
          budget the trip back to Sukhumvit. Sample routes in{" "}
          <A href="/bangkok/one-night-plan/">one-night plans</A>.
        </p>
      </Section>

      <FaqList
        items={[
          { q: "Which stadium is better for a first visit?", a: "Rajadamnern: central, fights most nights, easy to combine with the old town and Khao San." },
          { q: "How long does a card last?", a: "Usually three to four hours. Main events come later in the evening; you don’t need to stay for every fight." },
          { q: "Can I take photos?", a: "Generally yes without flash. Video rules vary — ask staff." },
        ]}
      />

      <Related
        links={[
          { href: "/bangkok/night-activities/", label: "Night activities" },
          { href: "/scams/", label: "Ticket scams" },
          { href: "/pattaya/night-activities/", label: "Muay Thai in Pattaya" },
        ]}
      />
    </PageShell>
  );
}
