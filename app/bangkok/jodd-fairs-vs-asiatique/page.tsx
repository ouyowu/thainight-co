import { BookingBox } from "@/components/BookingBox";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

const sources = [
  {
    href: "https://www.thailandtravel.or.jp/jodd-fairs/",
    label: "Tourism Authority of Thailand, Japan office: Jodd Fairs Ratchada hours and address",
  },
  {
    href: "https://www.discoverythailand.com/jodd-fairs",
    label: "Discovery Thailand: Jodd Fairs daily hours and MRT Thailand Cultural Centre",
  },
  {
    href: "https://www.asiatiquethailand.com/contact-us",
    label: "Asiatique The Riverfront contact page: daily hours, address and shuttle directions",
  },
  {
    href: "https://www.timeout.com/bangkok/shopping/asiatique-the-riverfront",
    label: "Time Out Bangkok, 10 March 2025: Asiatique open daily 11:00–00:00",
  },
];

export const metadata = pageMeta(
  "Jodd Fairs vs Asiatique (2026)",
  "Choose one Bangkok night: Jodd Fairs Ratchada for street food until 01:00, or Asiatique for the river until midnight. Hours and how to get there.",
  "/bangkok/jodd-fairs-vs-asiatique/",
);

export default function JoddFairsVsAsiatiquePage() {
  return (
    <PageShell
      path="/bangkok/jodd-fairs-vs-asiatique/"
      title="Jodd Fairs vs Asiatique (2026)"
      lead="For one food-first night, go to Jodd Fairs Ratchada. It runs daily from 17:00 to 01:00 beside MRT Thailand Cultural Centre. For a river walk that ends at midnight, go to Asiatique The Riverfront. The wider night-market list is on the Bangkok night markets page."
    >
      <Section title="The choice">
        <PriceTable
          caption="Jodd Fairs Ratchada and Asiatique compared"
          headers={["", "Jodd Fairs Ratchada", "Asiatique The Riverfront"]}
          rows={[
            ["Best for", "Street food on a weeknight", "River walk, dinner, a show"],
            ["Hours", "Daily 17:00–01:00", "Daily 11:00–00:00"],
            ["Get there", "MRT Thailand Cultural Centre", "BTS Saphan Taksin, then the Sathorn pier boat"],
            ["Address", "129 Ratchadaphisek Rd, Din Daeng", "2194 Charoenkrung Rd, Bang Kho Laem"],
          ]}
        />
        <p className="text-sm text-muted">
          Hours and addresses checked 15 October 2026. Jodd hours and the Ratchadaphisek address
          are on the Tourism Authority of Thailand Japan page; Discovery Thailand publishes the
          same daily 17:00–01:00 window. Asiatique’s own contact page and Time Out Bangkok both
          list daily 11:00–00:00 at the Charoenkrung address. Confirm the day you go.
        </p>
      </Section>

      <Section title="Jodd Fairs Ratchada">
        <p>
          This is the market to search for. The Tourism Authority of Thailand Japan office lists{" "}
          <strong>Jodd Fairs Ratchada</strong> at 129 Ratchadaphisek Road, Din Daeng, open every day
          from 17:00 to 01:00, about a two-minute walk from MRT Blue Line Thailand Cultural Centre.
          Discovery Thailand publishes the same daily hours and tells visitors to use that station.
        </p>
        <p>
          The night is stalls and food, then a train back toward Sukhumvit. It suits a weeknight
          before <A href="/bangkok/areas/soi-11/">Soi 11</A>. Search the full name so a map pin does
          not send you to an older Jodd Fairs site.
        </p>
      </Section>

      <Section title="Asiatique">
        <p>
          Asiatique is a riverfront complex on Charoenkrung Road, open daily from 11:00 to 00:00 on
          both the operator’s contact page and the Time Out Bangkok listing. Time Out describes a
          boardwalk and a Ferris wheel. The night ends at midnight, earlier than Jodd.
        </p>
        <p>
          Asiatique’s contact page sends BTS Saphan Taksin passengers to Exit 2 for the boat at
          Sathorn Pier. The same page publishes an evening timetable for that boat. A second
          publisher for the boat clock was not found, so the clock is left off this page. Check it
          on the day. Pair the complex with{" "}
          <A href="/bangkok/calypso-cabaret/">Calypso Cabaret</A> when you want a show on site. A{" "}
          <A href="/bangkok/dinner-cruise/">dinner cruise</A> is a different evening.
        </p>
      </Section>

      <Section title="How to pick">
        <Bullets>
          <li>Food, then a bar near Asok: Jodd Fairs, then the MRT.</li>
          <li>Sunset on the river, or a cabaret: Asiatique, and leave time for the boat back.</li>
          <li>One market in a night. The other can wait.</li>
          <li>
            Bring cash as a backup. See <A href="/cash/">cash and payments</A>.
          </li>
        </Bullets>
      </Section>

      <BookingBox
        items={[
          { label: "Calypso Cabaret at Asiatique", link: "cabaretBangkok" },
          { label: "Chao Phraya dinner cruise", link: "dinnerCruise" },
        ]}
      />

      <Section title="Sources">
        <ul className="list-disc space-y-1 pl-5">
          {sources.map((source) => (
            <li key={source.href}>
              <a href={source.href} className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                {source.label}
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <FaqList
        items={[
          {
            q: "Is Jodd Fairs or Asiatique better for one night?",
            a: "Jodd Fairs Ratchada for street food and a later finish, daily 17:00–01:00 by MRT Thailand Cultural Centre. Asiatique for the river, daily 11:00–00:00, with the Sathorn pier boat from BTS Saphan Taksin.",
          },
          {
            q: "What time does Jodd Fairs Ratchada close?",
            a: "The Tourism Authority of Thailand Japan page and Discovery Thailand both list every day from 17:00 to 01:00. Confirm on the day.",
          },
          {
            q: "What time does Asiatique close?",
            a: "Asiatique’s contact page and Time Out Bangkok both list every day from 11:00 to midnight. The operator’s shuttle timetable is separate and should be checked that day.",
          },
          {
            q: "Can I do both markets and a club?",
            a: "Pick one market. Jodd leaves more of the evening for Sukhumvit. Asiatique’s published close is midnight.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/bangkok/night-markets/", label: "Bangkok night markets" },
          { href: "/bangkok/calypso-cabaret/", label: "Calypso Cabaret" },
          { href: "/bangkok/dinner-cruise/", label: "Dinner cruise" },
          { href: "/bangkok/areas/soi-11/", label: "Soi 11" },
          { href: "/cash/", label: "Cash" },
        ]}
      />
    </PageShell>
  );
}
