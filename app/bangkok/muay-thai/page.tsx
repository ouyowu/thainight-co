import { BookingBox } from "@/components/BookingBox";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, CheckedNote, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Muay Thai Tickets Bangkok 2026 – Rajadamnern & Lumpinee Prices, Seats, Schedule",
  "Muay Thai ticket prices in Bangkok for 2026: Rajadamnern from 1,000 THB and Lumpinee from 1,000 THB, seat classes, weekly fight schedule, how to buy and ticket scams.",
  "/bangkok/muay-thai/",
);

export default function MuayThaiBangkokPage() {
  return (
    <PageShell
      path="/bangkok/muay-thai/"
      title="Muay Thai Tickets in Bangkok (2026) – Rajadamnern vs Lumpinee"
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

      <Section title="2026 ticket prices">
        <PriceTable
          caption="Rajadamnern ticket prices 2026"
          headers={["Rajadamnern seat", "Door price (THB)", "Notes"]}
          rows={[
            ["Third class", "1,000", "Standing/bench, local crowd; not sold in advance"],
            ["Second class (Leo)", "1,500", "Full ring view"],
            ["Club class", "1,800", "Assigned seat; best value for most"],
            ["Singha Ringside", "2,500", "Closest to the ring"],
            ["VIP / lounge (free-flow beer)", "3,500–4,500+", "Balcony and box options on big nights"],
          ]}
        />
        <PriceTable
          caption="Lumpinee ticket prices 2026"
          headers={["Lumpinee event", "Seat", "Door price (THB)"]}
          rows={[
            ["Saturday Super Champ", "Grandstand / Club / Ringside", "1,000 / 1,500 / 2,000"],
            ["ONE Lumpinee (Friday)", "Cat 3 / Cat 2 / Cat 1 / Ringside", "1,000 / 2,000 / 2,750 / 3,500"],
          ]}
        />
        <p>Online booking platforms often sell below door price; the official Rajadamnern site adds a small card fee.</p>
        <CheckedNote />
      </Section>

      <Section title="Rajadamnern weekly schedule">
        <PriceTable
          caption="Rajadamnern weekly schedule"
          headers={["Day", "Event", "Start"]}
          rows={[
            ["Mon, Tue, Fri", "Rajadamnern Knockout", "about 19:00"],
            ["Wed", "Suek Muay Thai Palangmai", "about 18:00"],
            ["Thu", "Suek Petchyindee", "about 18:00"],
            ["Sat", "Rajadamnern World Series", "about 18:15–19:00"],
            ["Sun", "Suek Kiatpetch", "about 18:00"],
          ]}
        />
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
          { q: "How much are Muay Thai tickets in Bangkok in 2026?", a: "Rajadamnern runs from 1,000 THB (third class) to 2,500 THB ringside and more for VIP. Lumpinee Saturday Super Champ is 1,000–2,000 THB; ONE Lumpinee Fridays 1,000–3,500 THB." },
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
