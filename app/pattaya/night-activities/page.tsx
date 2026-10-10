import { BookingBox } from "@/components/BookingBox";
import { PageShell } from "@/components/PageShell";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Pattaya Night Activities 2026 – Cabaret, Muay Thai, Markets, Bars",
  "Things to do in Pattaya at night: cabaret shows, Muay Thai at Max Muay Thai Stadium, night markets, Walking Street and Tree Town — and how to sequence them.",
  "/pattaya/night-activities/",
);

export default function PattayaNightActivitiesPage() {
  return (
    <PageShell title="Pattaya Night Activities 2026">
      <p>
        Pick one anchor for the evening, then a bar area. Shows and fights start early, so they fit
        neatly before Walking Street.
      </p>

      <Section title="Cabaret shows">
        <p>
          Tiffany’s and Alcazar on Pattaya 2nd Road run several shows a night, each a little over an
          hour. Full comparison: <A href="/pattaya/cabaret-shows/">cabaret shows</A>.
        </p>
      </Section>

      <Section title="Muay Thai">
        <p>
          Max Muay Thai Stadium, on Sukhumvit Road next to King Power Pattaya, holds regular
          evening cards, typically starting around 19:00. Check the card and seat options on the
          day; VIP seats cost noticeably more than standard ones.
        </p>
      </Section>

      <Section title="Walking Street">
        <p>
          The neon strip with clubs and live music — best after 21:30. See the{" "}
          <A href="/pattaya/areas/walking-street/">Walking Street guide</A>.
        </p>
      </Section>

      <Section title="Tree Town & Soi Buakhao">
        <p>
          <A href="/pattaya/areas/tree-town/">Tree Town</A> is an open courtyard of bars, bands and
          food; <A href="/pattaya/areas/soi-buakhao/">Soi Buakhao</A> is the budget beer-bar and
          street-food strip. Good for a relaxed night or a cheap start.
        </p>
      </Section>

      <Section title="Night markets">
        <p>
          Pattaya has several evening markets for street food and shopping, some only on certain
          days of the week. Check the current days before you go and eat early — food stalls sell
          out.
        </p>
      </Section>

      <BookingBox
        items={[
          { label: "Cabaret show tickets", link: "cabaretPattaya" },
          { label: "Muay Thai tickets", link: "muayThaiPattaya" },
        ]}
      />

      <Section title="When NOT to do jet-ski">
        <p>
          Main-beach jet-ski rentals have a long-running damage-claim scam. Avoid, or photograph
          everything if you still rent. Details: <A href="/scams/">scams</A>.
        </p>
      </Section>

      <Section title="Simple sequences">
        <Bullets>
          <li>One night → cabaret early, then Walking Street.</li>
          <li>Two nights → show + Walking Street one night; Muay Thai + Tree Town the other.</li>
          <li>Budget → Soi Buakhao food, Tree Town bands.</li>
        </Bullets>
      </Section>

      <Related
        links={[
          { href: "/pattaya/first-timer/", label: "First-timer" },
          { href: "/pattaya/bar-types/", label: "Bar types" },
          { href: "/pattaya/one-night-plan/", label: "One-night plans" },
        ]}
      />
    </PageShell>
  );
}
