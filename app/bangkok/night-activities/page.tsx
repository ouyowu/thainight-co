import { BookingBox } from "@/components/BookingBox";
import { PageShell } from "@/components/PageShell";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Bangkok Night Activities 2026 – Muay Thai, Cabaret, Cruises, Markets",
  "Things to do in Bangkok at night: Muay Thai stadiums, Calypso Cabaret, Chao Phraya dinner cruises, rooftops and night markets — and how to sequence them.",
  "/bangkok/night-activities/",
);

export default function BangkokNightActivitiesPage() {
  return (
    <PageShell title="Bangkok Night Activities 2026">
      <p>
        One anchor activity plus drinks makes a better night than four rushed ones. Pick one from
        below, then finish on <A href="/bangkok/areas/soi-11/">Soi 11</A> or near your hotel.
      </p>

      <Section title="Muay Thai">
        <p>
          Rajadamnern (old town) runs fights most nights; Lumpinee (Ram Inthra, north Bangkok) is
          strongest on Friday and Saturday. Seat class matters more than the venue for a first
          visit. Full guide: <A href="/bangkok/muay-thai/">Muay Thai in Bangkok</A>.
        </p>
      </Section>

      <Section title="Cabaret: Calypso at Asiatique">
        <p>
          Calypso Cabaret is Bangkok’s long-running cabaret show at Asiatique The Riverfront, with
          evening shows of about 70 minutes. Book ahead on weekends. Get there via BTS Saphan Taksin
          and the free shuttle boat from Sathorn Pier, then eat at Asiatique before or after.
        </p>
      </Section>

      <Section title="Chao Phraya dinner cruise">
        <p>
          Two-hour buffet or set-menu cruises leave from Asiatique, ICONSIAM and River City past the
          lit-up temples and Grand Palace. Good for couples and groups; dress smart casual. Full pier and booking notes: <A href="/bangkok/dinner-cruise/">dinner cruise</A>.
        </p>
      </Section>

      <Section title="Rooftop bars">
        <p>
          Sunset is the best hour. Sky Bar, Vertigo and Sky Beach for the big views; Octave and
          Sukhumvit hotel rooftops for value. See <A href="/bangkok/rooftop-bars/">rooftop bars</A>.
        </p>
      </Section>

      <Section title="Night markets">
        <Bullets>
          <li><A href="/bangkok/areas/patpong/">Patpong</A> — Silom night market; skip any upstairs “show” offers.</li>
          <li>Asiatique — riverside market, restaurants and the big wheel.</li>
          <li>Jodd Fairs Ratchada and other markets — food first; locations move. See <A href="/bangkok/night-markets/">night markets</A>.</li>
        </Bullets>
      </Section>

      <BookingBox
        items={[
          { label: "Muay Thai tickets", link: "muayThaiBangkok" },
          { label: "Calypso Cabaret tickets", link: "cabaretBangkok" },
          { label: "Chao Phraya dinner cruise", link: "dinnerCruise" },
        ]}
      />

      <Section title="How to sequence">
        <Bullets>
          <li>One night: activity early (18:00–21:00) → drinks on Soi 11 or near the hotel.</li>
          <li>Two nights: riverside (cruise or Calypso) one night; rooftop + Soi 11 the other.</li>
          <li>Don’t combine a stadium and a dinner cruise — they’re on opposite sides of town.</li>
        </Bullets>
      </Section>

      <Related
        links={[
          { href: "/bangkok/first-timer/", label: "First-timer" },
          { href: "/bangkok/one-night-plan/", label: "One-night plans" },
          { href: "/bangkok/bar-types/", label: "Bar types" },
        ]}
      />
    </PageShell>
  );
}
