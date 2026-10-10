import { BookingBox } from "@/components/BookingBox";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, CheckedNote, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Pattaya Cabaret Show Tickets 2026 – Tiffany’s vs Alcazar Prices",
  "Pattaya cabaret show tickets in 2026: Tiffany’s and Alcazar seat prices, show times, which to choose, where to book and the photo-tip and street-ticket traps.",
  "/pattaya/cabaret-shows/",
);

export default function CabaretShowsPage() {
  return (
    <PageShell
      path="/pattaya/cabaret-shows/"
      title="Pattaya Cabaret Show Tickets (2026) – Tiffany’s vs Alcazar"
      lead="Alcazar is the cheaper ticket (VIP about 900 THB); Tiffany’s is the more polished production (from about 800–900 THB mezzanine up to 2,000+ THB Diamond). Both are on Pattaya 2nd Road and run several shows a night."
    >
      <Section title="2026 ticket prices">
        <PriceTable
          caption="Pattaya cabaret ticket prices 2026"
          headers={["Show", "Seat", "Price (THB)"]}
          rows={[
            ["Alcazar", "VIP", "about 900"],
            ["Alcazar", "VVIP", "about 1,800"],
            ["Tiffany’s", "Mezzanine", "about 800–900"],
            ["Tiffany’s", "VIP Silver / Standard", "about 1,000–1,300"],
            ["Tiffany’s", "VIP Gold", "about 1,600–1,800"],
            ["Tiffany’s", "VIP Diamond", "about 2,000–2,200"],
          ]}
        />
        <CheckedNote />
      </Section>

      <Section title="At a glance">
        <PriceTable
          caption="Tiffany’s vs Alcazar"
          headers={["", "Tiffany’s Show", "Alcazar Cabaret"]}
          rows={[
            ["Where", "Pattaya 2nd Road, North Pattaya", "Pattaya 2nd Road (78/14)"],
            ["Length", "About 75 minutes", "About 70 minutes"],
            ["Typical times", "18:00, 19:30, 21:00", "17:00, 18:30, 20:00, 21:30"],
            ["Style", "Most polished costumes and staging", "More musical and playful"],
          ]}
        />
        <p>
          Full details: <A href="/pattaya/tiffany-show/">Tiffany’s Show</A> ·{" "}
          <A href="/pattaya/alcazar-show/">Alcazar Show</A>.
        </p>
      </Section>

      <BookingBox
        title="Book tickets"
        items={[{ label: "Tiffany’s / Alcazar tickets", link: "cabaretPattaya" }]}
      />

      <Section title="Which one?">
        <Bullets>
          <li><strong>Tiffany’s</strong> for the classic, most polished show — home of the Miss Tiffany’s Universe pageant.</li>
          <li><strong>Alcazar</strong> for better value and a lighter, more musical show.</li>
          <li>One is enough for most visitors.</li>
        </Bullets>
      </Section>

      <Section title="Traps to avoid">
        <Bullets>
          <li><strong>Photo tips:</strong> performers pose outside after the show and charge per performer per photo (around 100 THB each at Alcazar). Agree before you raise the camera.</li>
          <li><strong>Street tickets:</strong> “cheap VIP” tickets sold outside are often back-row seats. Buy at the box office or a known platform.</li>
          <li><strong>High season:</strong> November–February shows sell out — book a few days ahead.</li>
        </Bullets>
      </Section>

      <Section title="After the show">
        <p>
          The early slot leaves the whole night free: dinner, then{" "}
          <A href="/pattaya/areas/walking-street/">Walking Street</A> from around 22:00. Both
          theatres are a 15 THB <A href="/pattaya/baht-bus/">baht bus</A> ride up 2nd Road.
        </p>
      </Section>

      <FaqList
        items={[
          { q: "How much are Pattaya cabaret show tickets in 2026?", a: "Alcazar VIP is about 900 THB and VVIP about 1,800 THB. Tiffany’s runs from about 800–900 THB (mezzanine) to 2,000–2,200 THB (VIP Diamond)." },
          { q: "Should I book in advance?", a: "Yes from November to February and on holidays. In low season walk-in tickets are usually available." },
          { q: "Are the shows family-friendly?", a: "Yes — they are stage revues with music, dance and comedy." },
          { q: "Can I take photos during the show?", a: "Alcazar prohibits photos and video during the show; rules at Tiffany’s are similar. Photos with performers outside cost a tip." },
        ]}
      />

      <Related
        links={[
          { href: "/pattaya/night-activities/", label: "Night activities" },
          { href: "/bangkok/calypso-cabaret/", label: "Calypso Cabaret (Bangkok)" },
          { href: "/pattaya/one-night-plan/", label: "One-night plans" },
          { href: "/pattaya/hotels-walking-street/", label: "Where to stay" },
        ]}
      />
    </PageShell>
  );
}
