import { BookingBox } from "@/components/BookingBox";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, CheckedNote, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Muay Thai Phuket 2026 – Bangla Boxing Stadium & Patong Stadium Tickets",
  "Watching Muay Thai in Patong in 2026: Bangla Boxing Stadium vs Patong Boxing Stadium, fight nights, start times, ticket prices (about 1,500–1,900 THB) and how to book.",
  "/phuket/muay-thai/",
);

export default function PhuketMuayThaiPage() {
  return (
    <PageShell
      path="/phuket/muay-thai/"
      title="Muay Thai in Phuket (2026) – Bangla & Patong Stadiums"
      lead="Two stadiums in Patong run tourist-friendly fight nights with the first bout around 21:00 — late enough to fit after dinner or a cabaret show. Stadium seats are about 1,500 THB, ringside about 1,800–1,900 THB."
    >
      <Section title="The two stadiums">
        <PriceTable
          caption="Phuket Muay Thai stadiums 2026"
          headers={["", "Bangla Boxing Stadium", "Patong Boxing Stadium"]}
          rows={[
            ["Where", "Soi Banzaan, behind Jungceylon", "Sainamyen Road, Patong"],
            ["Fight nights", "Most nights — confirm your date", "Monday to Saturday"],
            ["First bout", "About 21:00 (doors ~20:00–20:30)", "About 21:00"],
            ["Stadium seat", "About 1,500 THB", "About 1,500 THB"],
            ["VIP / ringside", "About 1,900 THB", "About 1,800 THB"],
          ]}
        />
        <p>Some Patong Stadium tickets include a free shuttle from Patong, Kata and Karon hotels.</p>
        <CheckedNote />
      </Section>

      <BookingBox title="Buy tickets" items={[{ label: "Bangla / Patong stadium tickets", link: "muayThaiPhuket" }]} />

      <Section title="Tips">
        <Bullets>
          <li>Prices come mostly from booking platforms; door prices can differ.</li>
          <li>Bangla’s fight nights vary between listings — check the date on your ticket.</li>
          <li>Ringside is worth it for photos; stadium seats see everything.</li>
          <li>Ignore street sellers and promo trucks offering “discount” tickets.</li>
        </Bullets>
        <p>
          Bigger cards and history: <A href="/bangkok/muay-thai/">Rajadamnern and Lumpinee in Bangkok</A>.
        </p>
      </Section>

      <FaqList
        items={[
          { q: "How much are Muay Thai tickets in Phuket?", a: "About 1,500 THB for a stadium seat and about 1,800–1,900 THB for VIP or ringside at the Patong stadiums." },
          { q: "What time do fights start at Bangla Boxing Stadium?", a: "The first bout is usually around 21:00, with doors around 20:00–20:30." },
        ]}
      />

      <Related
        links={[
          { href: "/phuket/bangla-road/", label: "Bangla Road" },
          { href: "/phuket/simon-cabaret/", label: "Simon Cabaret" },
          { href: "/phuket/", label: "Phuket nightlife" },
        ]}
      />
    </PageShell>
  );
}
