import { BookingBox } from "@/components/BookingBox";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { StayNearby } from "@/components/StayNearby";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "One Night in Pattaya Nightlife – 2026 Sample Plans",
  "Four sample one-night plans for Pattaya with timings and costs: cabaret and Walking Street, a Muay Thai night, budget Tree Town and Soi Buakhao, and a beachfront evening.",
  "/pattaya/one-night-plan/",
);

export default function PattayaOneNightPlanPage() {
  return (
    <PageShell
      path="/pattaya/one-night-plan/"
      title="One Night in Pattaya – Sample Plans (2026)"
      lead="Four shapes for an evening, each costed per person. Pattaya is compact enough that all of them are walkable from a central hotel, so the choice is about what kind of night you want, not logistics."
    >
      <Section title="Which plan">
        <PriceTable
          caption="The four plans compared"
          headers={["Plan", "Best for", "Cost per person"]}
          rows={[
            ["A — Cabaret + Walking Street", "A first night", "about 1,800–3,000 THB"],
            ["B — Muay Thai night", "Something to watch", "about 1,500–2,800 THB"],
            ["C — Budget and relaxed", "Cheap and easy", "about 500–900 THB"],
            ["D — Beachfront evening", "A quiet night", "about 700–1,200 THB"],
          ]}
        />
        <p className="text-sm text-muted">
          Checked October 2026. Tickets and drinks included, hotel not. Full tables:{" "}
          <A href="/pattaya/prices/">Pattaya nightlife prices</A>.
        </p>
      </Section>

      <Section title="Plan A — Cabaret + Walking Street (classic first night)">
        <ol className="list-decimal space-y-1 pl-5">
          <li><strong>18:00</strong> — early show at Tiffany’s or Alcazar; book ahead at weekends — see <A href="/pattaya/cabaret-shows/">cabaret shows</A></li>
          <li><strong>19:30</strong> — dinner, seafood near Walking Street</li>
          <li><strong>22:00</strong> — full walk of <A href="/pattaya/areas/walking-street/">Walking Street</A>, which only fills around then</li>
          <li><strong>23:30</strong> — one live-music bar or club, then a baht bus or Grab home</li>
        </ol>
        <p className="text-sm text-muted">
          Ticket about 600–1,200 THB by seat class, dinner 300–600, drinks 600–1,000.
        </p>
      </Section>

      <Section title="Plan B — Muay Thai night">
        <ol className="list-decimal space-y-1 pl-5">
          <li><strong>19:00</strong> — evening card at a Pattaya stadium — see <A href="/pattaya/night-activities/">night activities</A></li>
          <li><strong>21:30</strong> — late dinner on <A href="/pattaya/areas/soi-buakhao/">Soi Buakhao</A></li>
          <li><strong>22:30</strong> — a beer and a band at <A href="/pattaya/areas/tree-town/">Tree Town</A></li>
        </ol>
        <p className="text-sm text-muted">
          Ticket about 800–1,500 THB by seat class, dinner 150–300, drinks 300–600.
        </p>
      </Section>

      <Section title="Plan C — Budget / relaxed">
        <ol className="list-decimal space-y-1 pl-5">
          <li><strong>19:00</strong> — <A href="/pattaya/areas/soi-buakhao/">Soi Buakhao</A> street food</li>
          <li><strong>20:30</strong> — Tree Town for bands and cheap beer, no entry fee</li>
          <li><strong>23:00</strong> — walk home; skip the Walking Street premium entirely</li>
        </ol>
        <p className="text-sm text-muted">
          Food 100–250 THB, four beers 280–480, no tickets, no rides if you are central.
        </p>
      </Section>

      <Section title="Plan D — Beachfront evening">
        <ol className="list-decimal space-y-1 pl-5">
          <li><strong>17:30</strong> — sunset on Beach Road or a seafront bar</li>
          <li><strong>19:30</strong> — promenade walk south toward Walking Street</li>
          <li><strong>21:00</strong> — short look at the neon, then home. Don’t try to do everything in one night</li>
        </ol>
        <p className="text-sm text-muted">
          Drinks 400–720 THB, plus food. Jomtien instead of Beach Road is quieter and adds a ride.
        </p>
      </Section>

      <Section title="Making any of them work">
        <Bullets>
          <li>Book cabaret tickets online rather than from a street seller, and arrive 30 minutes early.</li>
          <li>Nothing on Walking Street is worth doing before 22:00. Fill the early evening elsewhere.</li>
          <li>Keep cash for beer bars and baht buses; cards work at the theatres and bigger clubs.</li>
          <li>A central hotel makes all four plans walkable: <A href="/pattaya/where-to-stay/">where to stay</A>.</li>
        </Bullets>
      </Section>

      <BookingBox
        items={[
          { label: "Cabaret show tickets", link: "cabaretPattaya" },
          { label: "Muay Thai tickets", link: "muayThaiPattaya" },
        ]}
      />

      <FaqList
        items={[
          {
            q: "What should I do on one night in Pattaya?",
            a: "An early cabaret show, dinner, then Walking Street after 22:00 is the usual first night. A Muay Thai card, or beer bars and Tree Town, are the main alternatives.",
          },
          {
            q: "What time should I go to Walking Street?",
            a: "After about 22:00. Earlier it is mostly touts and empty rooms, so spend the early evening on Soi Buakhao, at Tree Town or on the beach.",
          },
          {
            q: "How much is one night out in Pattaya?",
            a: "About 500–900 THB per person for a beer-bar night, 1,500–2,800 THB for a Muay Thai night, and 1,800–3,000 THB for cabaret plus Walking Street.",
          },
          {
            q: "Can I do a show and Walking Street in the same night?",
            a: "Yes. Take an early show at around 18:00, eat afterwards, and you are on Walking Street by the time it fills.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/pattaya/first-timer/", label: "First-timer" },
          { href: "/pattaya/prices/", label: "Pattaya prices" },
          { href: "/pattaya/areas/", label: "Pattaya areas" },
          { href: "/scams/", label: "Scams" },
        ]}
      />

      <StayNearby label="Hotels near Walking Street / Central Pattaya" link="hotelWalkingStreet">
        <p className="mt-2">Central Pattaya or near Walking Street cuts transport friction.</p>
      </StayNearby>
    </PageShell>
  );
}
