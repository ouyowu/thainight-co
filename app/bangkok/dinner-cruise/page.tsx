import { BookingBox } from "@/components/BookingBox";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Bangkok Dinner Cruise 2026 - Chao Phraya Piers, Dress and How to Book",
  "Chao Phraya dinner cruises from Asiatique, ICONSIAM and River City: what to expect, dress and how to book.",
  "/bangkok/dinner-cruise/",
);

export default function BangkokDinnerCruisePage() {
  return (
    <PageShell
      path="/bangkok/dinner-cruise/"
      title="Bangkok Dinner Cruise (2026) - Chao Phraya from Asiatique, ICONSIAM and River City"
      lead="A two-hour river cruise past the lit-up temples and Grand Palace is the easiest extra night in Bangkok. Pick the pier by where you stay, then book the boat."
    >
      <Section title="Which pier">
        <PriceTable
          caption="Dinner cruise piers"
          headers={["Pier", "Best if you are near", "How you get there"]}
          rows={[
            ["Asiatique The Riverfront", "Silom, Sathorn, riverside hotels", "BTS Saphan Taksin, then the free shuttle boat from Sathorn Pier"],
            ["ICONSIAM", "Sathorn, Khlong San, BTS Charoen Nakhon", "BTS Gold Line to Charoen Nakhon, or a boat to ICONSIAM pier"],
            ["River City / Si Phraya", "Bang Rak, River City hotels, old-town Grab", "Short Grab from Silom or a Chao Phraya express boat"],
          ]}
        />
        <p>Operators publish their own pier and boarding time. Confirm both on the booking, then arrive 30-45 minutes early.</p>
      </Section>
      <Section title="What to expect">
        <Bullets>
          <li>Most sailings last about two hours: buffet or set menu, a live band or a short show, and a slow loop past Wat Arun and the Grand Palace lights.</li>
          <li>Upper deck is for photos and breeze; indoor decks are air-conditioned and better if it rains.</li>
          <li>Good for couples and groups. Most boats are back at the pier by about 21:00-22:00.</li>
          <li>Drinks are often extra. Confirm whether water, soft drinks or a welcome drink are included.</li>
        </Bullets>
      </Section>
      <Section title="Dress">
        <p>Smart casual is enough: closed shoes, no beachwear, no football shirts on the nicer boats. A light layer helps on the upper deck.</p>
      </Section>
      <BookingBox title="Book a cruise" items={[{ label: "Chao Phraya dinner cruise", link: "dinnerCruise" }]} />
      <Section title="How to book">
        <Bullets>
          <li>Book online the same day or a day ahead on weekends and holidays.</li>
          <li>Use the official operator or a known reseller. Ignore pier touts quoting a special price in baht.</li>
          <li>Read the meeting point twice. Some tickets say ICONSIAM when the boat boards at a nearby pontoon.</li>
        </Bullets>
      </Section>
      <Section title="Fit it into the night">
        <p>
          Cruise first, drinks later. From Asiatique you can stay for the market or <A href="/bangkok/night-activities/">Calypso Cabaret</A> on another night. After River City or ICONSIAM, Silom bars or a <A href="/bangkok/rooftop-bars/">rooftop</A> are the short hop. Full list: <A href="/bangkok/night-activities/">night activities</A>.
        </p>
      </Section>
      <FaqList
        items={[
          { q: "Which pier is easiest for a first visit?", a: "Asiatique: one BTS stop (Saphan Taksin) plus a free shuttle boat, and you can eat or walk the market if you arrive early." },
          { q: "Do I need to book?", a: "Weeknights you can sometimes walk up. Weekends and holidays sell out. Book ahead and keep the boarding time." },
          { q: "Can I combine it with Muay Thai the same night?", a: "Usually no. Rajadamnern is on the other side of the old town and cards start early. Pick one." },
        ]}
      />
      <Related
        links={[
          { href: "/bangkok/night-activities/", label: "Night activities" },
          { href: "/bangkok/night-markets/", label: "Night markets" },
          { href: "/bangkok/one-night-plan/", label: "One-night plans" },
        ]}
      />
    </PageShell>
  );
}
