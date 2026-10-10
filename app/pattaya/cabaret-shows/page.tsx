import { BookingBox } from "@/components/BookingBox";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Pattaya Cabaret Shows 2026 – Tiffany’s vs Alcazar",
  "Tiffany’s Show vs Alcazar Cabaret in Pattaya: location, show length, typical show times, seat types, which to pick and how to book. Plus Calypso in Bangkok.",
  "/pattaya/cabaret-shows/",
);

export default function CabaretShowsPage() {
  return (
    <PageShell
      title="Pattaya Cabaret Shows (2026) – Tiffany’s vs Alcazar"
      lead="Pattaya’s cabaret shows are big-production song-and-dance revues with elaborate costumes. They’re family-friendly, start early, and make a perfect first half of the night."
    >
      <Section title="Tiffany’s vs Alcazar at a glance">
        <PriceTable
          caption="Tiffany’s vs Alcazar"
          headers={["", "Tiffany’s Show", "Alcazar Cabaret"]}
          rows={[
            ["Where", "Pattaya 2nd Road (North)", "Pattaya 2nd Road (North)"],
            ["Length", "About 75 minutes", "About 70 minutes"],
            ["Shows per night", "Usually 3, early to late evening", "Usually 3–4, from late afternoon"],
            ["Style", "Most polished production and costumes", "More musical, playful and story-led"],
            ["Price", "Higher; several VIP tiers", "Generally cheaper"],
          ]}
        />
        <p>Show times and prices change with season. Confirm on the booking page.</p>
      </Section>

      <Section title="Which one?">
        <Bullets>
          <li><strong>Tiffany’s</strong> if you want the classic, most polished show — home of the Miss Tiffany’s Universe pageant.</li>
          <li><strong>Alcazar</strong> if you want the better-value ticket and a lighter, more musical show.</li>
          <li>One is enough for most visitors.</li>
        </Bullets>
      </Section>

      <BookingBox
        title="Book tickets"
        items={[{ label: "Tiffany’s / Alcazar tickets", link: "cabaretPattaya" }]}
      />

      <Section title="Tips">
        <Bullets>
          <li>Book ahead on weekends and holidays; mid-week walk-ins are often fine.</li>
          <li>Arrive 20–30 minutes early to collect tickets and find seats.</li>
          <li>Performers pose for photos outside after the show and expect a tip — agree it first.</li>
          <li>Both are a short baht-bus or Grab ride from Central Pattaya.</li>
        </Bullets>
      </Section>

      <Section title="After the show">
        <p>
          The early slot leaves the whole night free: dinner, then{" "}
          <A href="/pattaya/areas/walking-street/">Walking Street</A> from around 22:00. See{" "}
          <A href="/pattaya/one-night-plan/">one-night plans</A>.
        </p>
      </Section>

      <Section title="In Bangkok instead?">
        <p>
          Calypso Cabaret at Asiatique The Riverfront runs evening shows of about 70 minutes. See{" "}
          <A href="/bangkok/night-activities/">Bangkok night activities</A>.
        </p>
      </Section>

      <FaqList
        items={[
          { q: "Are the cabaret shows suitable for families?", a: "Yes — they are stage revues with music, dance and comedy, and families attend regularly." },
          { q: "Is there a dress code?", a: "No formal dress code. Smart casual is fine." },
          { q: "Can I buy tickets at the door?", a: "Usually yes outside peak dates, but booking ahead is safer and sometimes cheaper." },
        ]}
      />

      <Related
        links={[
          { href: "/pattaya/night-activities/", label: "Night activities" },
          { href: "/pattaya/first-timer/", label: "First-timer" },
          { href: "/pattaya/hotels-walking-street/", label: "Where to stay" },
        ]}
      />
    </PageShell>
  );
}
