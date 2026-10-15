import { BookingBox } from "@/components/BookingBox";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Bangkok Night Markets 2026 - Asiatique, Jodd Fairs and What Moved",
  "Bangkok night markets in 2026: Jodd Fairs Ratchada, Asiatique, Rot Fai Srinakarin and Patpong. Current locations and usual days.",
  "/bangkok/night-markets/",
);

export default function BangkokNightMarketsPage() {
  return (
    <PageShell path="/bangkok/night-markets/" title="Bangkok Night Markets (2026)" lead="Pick one market, eat, then move on. Locations and days change. Jodd Fairs is now Ratchada, not Rama 9. Confirm the pin and hours on the day.">
      <Section title="The ones worth a night">
        <PriceTable caption="Bangkok night markets 2026" headers={["Market", "Usual days / hours", "Get there", "Best for"]} rows={[["Jodd Fairs Ratchada", "Usually daily, about 17:00-01:00", "MRT Thailand Cultural Centre, Exit 4 (Ratchadaphisek Rd, by Big C)", "Street food, one easy weekday market"], ["Asiatique The Riverfront", "Daily; stalls from late afternoon to about midnight", "BTS Saphan Taksin plus free shuttle boat from Sathorn Pier", "Riverside walk, dinner, Ferris wheel, Calypso"], ["Train Night Market (Rot Fai) Srinakarin", "Usually Thu-Sun evenings", "MRT Yellow Line (Suan Luang Rama IX) or a Grab", "Vintage stalls, longer wander"], ["Patpong night market", "Evenings on Patpong 1, Silom", "BTS Sala Daeng / MRT Silom", "Short tourist market after a Silom dinner"]]} />
        <p>Hours above are the usual published windows as of 2026. Search Jodd Fairs Ratchada, not just Jodd Fairs, so maps do not send you to a closed site.</p>
      </Section>
      <Section title="Jodd Fairs - use Ratchada">
        <p>The Rama 9 Jodd Fairs site closed. The market people mean in 2026 is <strong>Jodd Fairs Ratchada</strong> on Ratchadaphisek Road, a few minutes walk from MRT Thailand Cultural Centre Exit 4. Food-heavy, busy from about 19:00. Bring cash or a Thai QR app. For a head-to-head with the riverfront, see <A href="/bangkok/jodd-fairs-vs-asiatique/">Jodd Fairs vs Asiatique</A>.</p>
      </Section>
      <Section title="Asiatique">
        <p>More riverfront complex than a street market. Pair with a <A href="/bangkok/dinner-cruise/">dinner cruise</A> from the same pier on a different night, not the same evening. Cabaret notes: <A href="/bangkok/night-activities/">night activities</A>.</p>
      </Section>
      <Section title="Patpong and the rest">
        <Bullets>
          <li><A href="/bangkok/areas/patpong/">Patpong</A> is a compact Silom market. Stay on the ground-floor stalls; skip upstairs show offers.</li>
          <li>Train Night Market Ratchada behind Esplanade is a separate site near the same MRT. Confirm it is open before you go.</li>
          <li>Chatuchak weekend day market is not a nightlife stop.</li>
        </Bullets>
      </Section>
      <BookingBox items={[{ label: "Calypso Cabaret at Asiatique", link: "cabaretBangkok" }, { label: "Chao Phraya dinner cruise", link: "dinnerCruise" }]} />
      <Section title="How to fit one in">
        <Bullets>
          <li>Weeknight, Sukhumvit base: Jodd Fairs, then back toward Asok / Soi 11.</li>
          <li>Riverside night: Asiatique or a cruise, not both plus a stadium.</li>
          <li>Leave by 21:30 if you also want clubs.</li>
        </Bullets>
      </Section>
      <FaqList items={[{ q: "Is Jodd Fairs still at Rama 9?", a: "No. Use Jodd Fairs Ratchada by MRT Thailand Cultural Centre. Old pins and videos are leftover." }, { q: "Do I need cash?", a: "Yes as a backup. Many stalls take Thai QR. See the cash guide for ATMs and cards." }, { q: "Which market is best for a first visit?", a: "Jodd Fairs Ratchada for food and simple MRT access; Asiatique if you want river plus a show on another night." }]} />
      <Related links={[{ href: "/bangkok/night-activities/", label: "Night activities" }, { href: "/bangkok/dinner-cruise/", label: "Dinner cruise" }, { href: "/bangkok/areas/patpong/", label: "Patpong" }, { href: "/cash/", label: "Cash" }]} />
    </PageShell>
  );
}
