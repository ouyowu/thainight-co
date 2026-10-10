import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { Bullets, CheckedNote, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Phuket Night Markets 2026 – Old Town Sunday Market, Naka, Chillva & Patong",
  "Phuket night markets in 2026: Old Town Sunday Walking Street, Naka Weekend Market, Chillva, Banzaan and Malin Plaza in Patong, Kata and Karon — days, hours and what to eat.",
  "/phuket/night-markets/",
);

export default function PhuketNightMarketsPage() {
  return (
    <PageShell
      path="/phuket/night-markets/"
      title="Phuket Night Markets (2026)"
      lead="Plan around the day: Sunday is Phuket Old Town’s walking street, Saturday–Sunday is Naka, Monday–Saturday is Chillva. In Patong, Banzaan and Malin Plaza run every day."
    >
      <Section title="Markets, days and hours">
        <PriceTable
          caption="Phuket night markets 2026"
          headers={["Market", "Where", "When", "Best for"]}
          rows={[
            ["Sunday Walking Street (Lard Yai)", "Thalang Rd, Old Town", "Sun ~16:00–22:00", "Street food, crafts, old shophouses"],
            ["Naka Weekend Market", "Wirat Hong Yok Rd, Phuket Town", "Sat–Sun ~16:00–22:00", "Big food and clothing market"],
            ["Chillva Market", "Phuket Town", "Mon–Sat ~17:00–23:00", "Container bars, young local crowd"],
            ["Indy Market", "Limelight Ave, Phuket Town", "Wed–Fri ~16:00–22:30", "Young artists, live music"],
            ["Banzaan Market", "Behind Jungceylon, Patong", "Daily, until ~24:00", "Seafood grilled to order"],
            ["Malin Plaza", "Prachanukhro Rd, Patong", "Daily, until ~24:00", "Air-conditioned, souvenirs, crepes"],
            ["Kata Night Market", "Patak Rd, Kata", "Daily, until ~23:00", "Food court-style stalls"],
            ["Karon Temple Market", "Patak Rd, Karon", "Tue & Fri ~16:00–22:00", "Market inside a temple ground"],
            ["Fun Friday Avenue", "Boat Avenue, Bang Tao", "Fri ~16:00–22:30", "West-coast family evening"],
          ]}
        />
        <CheckedNote what="Days and hours" />
      </Section>

      <Section title="Tips">
        <Bullets>
          <li>From Patong, Phuket Town markets are a 25–40 minute Grab — combine with Old Town bars.</li>
          <li>Bring cash; many stalls don’t take cards.</li>
          <li>Pick seafood by weight at Banzaan and confirm the price per kilo before it’s cooked.</li>
          <li>Go early on Sunday — the Old Town street is packed by 19:00.</li>
        </Bullets>
      </Section>

      <FaqList
        items={[
          { q: "What is the best night market in Phuket?", a: "The Sunday Walking Street in Phuket Old Town for atmosphere; Naka Weekend Market for size; Banzaan in Patong if you only have one evening." },
          { q: "Is there a night market in Patong?", a: "Yes — Banzaan Market behind Jungceylon and Malin Plaza both run daily into the late evening." },
        ]}
      />

      <Related
        links={[
          { href: "/phuket/", label: "Phuket nightlife" },
          { href: "/phuket/bangla-road/", label: "Bangla Road" },
          { href: "/cash/", label: "Cash & ATMs" },
        ]}
      />
    </PageShell>
  );
}
