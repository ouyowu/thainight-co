import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Nightlife Safety Tips – Bangkok & Pattaya",
  "Safety for Bangkok and Pattaya nightlife in 2026: what to carry, bar bills, drink safety, getting home, emergency numbers and what to do if something happens.",
  "/safety/",
);

export default function SafetyPage() {
  return (
    <PageShell
      path="/safety/"
      title="Nightlife Safety Tips (Bangkok & Pattaya)"
      lead="Thailand's nightlife is not dangerous for most visitors. What goes wrong is usually money: an inflated bill, a taxi that won't use the meter, or a decision made six drinks in. Plan for those and the rest takes care of itself."
    >
      <Section title="Before you go out">
        <Bullets>
          <li>Carry only what you need. Leave the passport in the hotel safe and take a photo of the photo page on your phone.</li>
          <li>Note the hotel name in Thai and a nearby landmark. A street name alone is not enough for a driver.</li>
          <li>Set a spending limit before the first drink, and take that much in cash.</li>
          <li>Charge your phone. No battery means no Grab, no map and no way to call anyone.</li>
          <li>Tell someone where you are going if you are alone.</li>
        </Bullets>
      </Section>

      <Section title="On the street and in bars">
        <Bullets>
          <li>Check menu prices before ordering. If a bar has no prices on display, ask or walk.</li>
          <li>Pay round by round where you can, and watch the slip bin on your table.</li>
          <li>Watch your drink being made, and do not leave it unattended.</li>
          <li>Do not follow street touts upstairs for a cheap show. That is the single most common way visitors get a bill they cannot argue with.</li>
          <li>Keep your phone and wallet in a front pocket. Crowded strips at closing time are where things disappear.</li>
          <li>Some bars add items the menu does not list, such as a drink bought for a staff member. Ask the price before agreeing.</li>
        </Bullets>
      </Section>

      <Section title="Getting home">
        <Bullets>
          <li>Grab or Bolt over a random taxi or tuk-tuk late at night. The price is fixed and the ride is recorded.</li>
          <li>The BTS and MRT in Bangkok stop around midnight, well before the clubs close. Plan the ride home before you need it.</li>
          <li>In Pattaya, a baht bus on the fixed loop is 10–20 THB. A driver who asks where you want to go first is quoting a charter.</li>
          <li>Share your live location with someone if you are alone.</li>
          <li>If a situation feels wrong, leave. There is always another bar.</li>
        </Bullets>
        <p>
          Fares: <A href="/bangkok/taxi-fare/">Bangkok taxi fares</A> ·{" "}
          <A href="/pattaya/baht-bus/">Pattaya baht bus</A>.
        </p>
      </Section>

      <Section title="Drinking">
        <Bullets>
          <li>The legal drinking age in Thailand is 20, and clubs check ID.</li>
          <li>Buckets and towers hold more than they look like. Count the drinks, not the containers.</li>
          <li>Thai beer and spirits are often stronger than the equivalent at home, and the heat makes it worse.</li>
          <li>Drink water between rounds. Most bad nights here start as dehydration.</li>
        </Bullets>
      </Section>

      <Section title="If something goes wrong">
        <PriceTable
          caption="Emergency numbers in Thailand"
          headers={["Who", "Number"]}
          rows={[
            ["Tourist Police (English spoken)", "1155"],
            ["Police", "191"],
            ["Ambulance / medical", "1669"],
            ["Department of Land Transport (taxi complaints)", "1584"],
          ]}
        />
        <Bullets>
          <li>Move to a well-lit public area first, then call. A 7-Eleven or a hotel lobby works.</li>
          <li>For a disputed bill, ask for an itemised slip and call the Tourist Police rather than arguing. Do not let it become a physical confrontation over money.</li>
          <li>For a lost passport, contact your embassy and get a police report; your hotel can help with both.</li>
          <li>Keep your travel insurance number saved offline on your phone.</li>
        </Bullets>
      </Section>

      <FaqList
        items={[
          {
            q: "Is Bangkok nightlife safe for tourists?",
            a: "For most visitors, yes. The common problems are financial — inflated bills, taxis refusing the meter, touts — rather than violence. Watch the bill, use an app for rides, and avoid being led somewhere by a stranger.",
          },
          {
            q: "Is Pattaya safe at night?",
            a: "The central nightlife areas are busy and policed. Keep valuables in a front pocket, use baht buses on their fixed loops, and treat jet-ski rentals on the main beach with caution.",
          },
          {
            q: "What is the emergency number in Thailand?",
            a: "191 for police, 1669 for an ambulance, and 1155 for the Tourist Police, who speak English.",
          },
          {
            q: "What should I do about an inflated bar bill?",
            a: "Ask for an itemised slip. If it is still wrong, call the Tourist Police on 1155 rather than arguing it out.",
          },
          {
            q: "What is the legal drinking age in Thailand?",
            a: "20. Clubs check ID at the door, so carry a passport photo page or a card showing your date of birth.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/scams/", label: "Common scams" },
          { href: "/prices/", label: "Prices" },
          { href: "/cash/", label: "Cash & payments" },
          { href: "/budgets/", label: "Budgets" },
        ]}
      />
    </PageShell>
  );
}
