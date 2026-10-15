import { BookingBox } from "@/components/BookingBox";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, CheckedNote, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Chao Phraya Dinner Cruise Price 2026 – Bangkok Cruises Compared",
  "Bangkok dinner cruise prices in 2026: buffet cruises from about 1,200 THB to luxury set menus over 3,000 THB, piers at Asiatique, ICONSIAM and River City.",
  "/bangkok/dinner-cruise/",
);

export default function DinnerCruisePage() {
  return (
    <PageShell
      path="/bangkok/dinner-cruise/"
      title="Chao Phraya Dinner Cruise Prices (2026)"
      lead="Buffet cruises cost about 1,200–2,000 THB per person at walk-in prices; luxury set-menu cruises run 2,800–3,800 THB. Online prices are often lower."
    >
      <Section title="Popular cruises and walk-in prices">
        <PriceTable
          caption="Bangkok dinner cruise prices 2026"
          headers={["Cruise", "Pier · Departs", "Meal", "Walk-in (THB)"]}
          rows={[
            ["Royal Princess", "Asiatique · 19:30", "Buffet, 2 h", "about 1,190"],
            ["Chao Phraya Princess", "ICONSIAM · 19:30/20:00", "Buffet, 2 h", "about 1,500"],
            ["Bangkok Chaophraya Cruise", "Asiatique · 20:00", "Buffet, 2 h", "about 1,550"],
            ["White Orchid", "Asiatique or ICONSIAM · 19:45", "Buffet, 2 h", "about 1,600"],
            ["Wonderful Pearl", "River City · 19:30", "Buffet, 2 h", "about 1,800"],
            ["Horizon (Shangri-La)", "NEXT2 pier · 19:15", "Buffet, ~2 h 45", "about 2,900"],
            ["Saffron (Banyan Tree)", "ICONSIAM · 19:00", "4-course set, 3 h", "about 3,300"],
            ["Manohra (Anantara)", "Anantara Riverside · 18:00/19:00", "5-course set, 2 h", "from about 3,500"],
            ["Apsara (Banyan Tree)", "River City · 18:45", "4-course set, 3 h", "about 3,800"],
          ]}
        />
        <CheckedNote />
      </Section>

      <BookingBox title="Book online" items={[{ label: "Compare Chao Phraya dinner cruise deals", link: "dinnerCruise" }]} />

      <Section title="How to choose">
        <Bullets>
          <li><strong>Budget, groups:</strong> a big buffet boat from Asiatique or ICONSIAM.</li>
          <li><strong>Couples, special occasion:</strong> a small set-menu boat (Saffron, Manohra, Apsara).</li>
          <li><strong>Want drinks included?</strong> Check the package — many include only soft drinks.</li>
          <li>Prices rise on Loy Krathong, Christmas, New Year and Valentine’s Day; boats pause for annual dry-dock.</li>
        </Bullets>
      </Section>

      <Section title="Getting to the piers">
        <Bullets>
          <li><strong>Asiatique / River City / ICONSIAM:</strong> BTS Saphan Taksin, then the river shuttle from Sathorn Pier (ICONSIAM also has the Gold Line).</li>
          <li>Hotel transfers are often extra — check before booking.</li>
          <li>Arrive 30 minutes early to check in and pick a window table on buffet boats.</li>
        </Bullets>
      </Section>

      <Section title="Traps">
        <Bullets>
          <li>Touts at Sathorn Pier selling “cruise tickets” for unknown boats — buy from the operator or a known platform.</li>
          <li>Drinks and service charges added on board — read the package inclusions.</li>
        </Bullets>
        <p>Pair it with a sunset drink: <A href="/bangkok/sky-bar/">Sky Bar</A> is a short walk from Saphan Taksin.</p>
      </Section>

      <FaqList
        items={[
          { q: "How much is a Chao Phraya dinner cruise in 2026?", a: "About 1,200–2,000 THB for buffet cruises at walk-in prices, and 2,800–3,800 THB for luxury set-menu cruises." },
          { q: "Which pier do dinner cruises leave from?", a: "Mostly Asiatique, ICONSIAM and River City, plus a few hotel piers." },
          { q: "Is there a dress code?", a: "Smart casual for most; some luxury boats ask for more formal dress." },
        ]}
      />

      <Related
        links={[
          { href: "/bangkok/night-activities/", label: "Night activities" },
          { href: "/bangkok/one-night-plan/", label: "One-night plans" },
          { href: "/bangkok/night-markets/", label: "Night markets" },
          { href: "/bangkok/sky-bar/", label: "Sky Bar" },
        ]}
      />
    </PageShell>
  );
}
