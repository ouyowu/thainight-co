import { HotelCta } from "@/components/HotelCta";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

const sources = [
  {
    href: "https://www.bot.or.th/content/dam/bot/fipcs/documents/FPG/2569/EngPDF/25690175.pdf",
    label: "Bank of Thailand notification No. 37/2569, financial-institution holidays for 2027",
  },
  {
    href: "https://www.set.or.th/en/about/event-calendar/holiday?year=2027",
    label: "Stock Exchange of Thailand holiday calendar for 2027",
  },
  {
    href: "https://thestandard.co/silom-songkran-festival-official-opening/",
    label: "The Standard, 12 April 2026, official opening of Songkran on Silom",
  },
  {
    href: "https://thainewsroom.com/2026/04/12/chadchart-launches-songkran-fun-at-silom/",
    label: "Thai Newsroom, 12 April 2026, Bangkok governor opens Songkran on Silom",
  },
  {
    href: "https://www.nationthailand.com/news/general/40064997",
    label: "The Nation, 13 April 2026, Khao San water-play rules quoted from local police",
  },
];

export const metadata = pageMeta(
  "Bangkok Songkran Nightlife (2027)",
  "Songkran 2027 falls on 13–15 April. How a Bangkok night fits the water streets, and which 2026 hours this page leaves out.",
  "/bangkok/songkran/",
);

export default function BangkokSongkranPage() {
  return (
    <PageShell
      path="/bangkok/songkran/"
      title="Bangkok Songkran Nightlife (2027)"
      lead="Songkran 2027 runs Tuesday 13 April through Thursday 15 April. Those three days are Songkran Festival on the Bank of Thailand’s 2027 holiday list and on the Stock Exchange of Thailand calendar. The night in Bangkok is the water street. The 2027 street map is not in those holiday notices."
    >
      <Section title="The 2027 dates">
        <PriceTable
          caption="Songkran 2027 on the bank and exchange calendars"
          headers={["Date", "Weekday", "What the notices call it"]}
          rows={[
            ["13 April 2027", "Tuesday", "Songkran Festival"],
            ["14 April 2027", "Wednesday", "Songkran Festival"],
            ["15 April 2027", "Thursday", "Songkran Festival"],
          ]}
        />
        <p className="text-sm text-muted">
          Bank of Thailand notification No. 37/2569 lists these as financial-institution holidays
          for B.E. 2570 (2027). The Stock Exchange of Thailand’s 2027 holiday calendar lists the
          same three days, Tuesday through Thursday. Checked 15 October 2026. A later Cabinet
          notice can add a bridge day. This page does not add one.
        </p>
      </Section>

      <Section title="What the night is">
        <p>
          People spend the afternoon and evening on a closed street, soaked, then decide whether
          they still want a bar. Plan the street first. A rooftop or{" "}
          <A href="/bangkok/areas/soi-11/">Soi 11</A> is a second plan, after a change of clothes.
        </p>
        <p>
          In 2026 the city ran an official water zone on Silom. The Standard and Thai Newsroom both
          reported the opening on 12 April 2026, with the Bangkok governor on Silom. The Standard
          described the closed stretch as the Sala Daeng intersection to the Naradhiwas intersection
          (นรารมย์). Those two stories do not agree on the clock, so this page does not print a 2026
          hour. The 2027 hours are not in the Bank of Thailand notice. Recheck a Bangkok
          Metropolitan Administration announcement closer to April.
        </p>
        <p>
          The Nation, on 13 April 2026, quoted Chana Songkhram Police on a managed water window at{" "}
          <A href="/bangkok/areas/khao-san/">Khao San Road</A>. That story is one paper’s account of
          2026. It is not a 2027 timetable, and this page does not copy its hours.
        </p>
      </Section>

      <Section title="Where to base yourself">
        <Bullets>
          <li>
            Silom or Sathorn if the Silom zone is the plan. See{" "}
            <A href="/bangkok/areas/patpong/">Patpong and Silom</A> and{" "}
            <A href="/bangkok/where-to-stay/">where to stay in Bangkok</A>.
          </li>
          <li>
            The old town if Khao San is the plan. The hotel search below is the whole of Bangkok.
          </li>
          <li>
            Sukhumvit still works when the water street is a taxi ride and the late night is Soi 11.
          </li>
        </Bullets>
        <p>
          When a road is closed, set the car pin on a street that is still open. Book the room
          before April. This page has no 2027 rate to quote.
        </p>
        <HotelCta label="Search hotels in Bangkok" link="hotelBangkok" />
      </Section>

      <Section title="Alcohol, age and the ride home">
        <p>
          Songkran is not on the{" "}
          <A href="/thailand/alcohol-ban-days-2026/">confirmed alcohol-ban list</A>. The Nation’s
          Khao San story said sales to minors are prohibited and that alcohol may not be sold
          outside the hours the law already allows. That is the ordinary rule. The legal drinking
          age in Thailand is 20. Carry ID.
        </p>
        <Bullets>
          <li>Keep the phone in a dry bag before you reach the water.</li>
          <li>Leave the zone on foot, then call the ride from an open street.</li>
          <li>
            Read <A href="/safety/">safety</A> and <A href="/scams/">scams</A> before a packed street
            night. Watch the bag and the bill.
          </li>
        </Bullets>
      </Section>

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
            q: "When is Songkran 2027?",
            a: "Tuesday 13 April, Wednesday 14 April and Thursday 15 April 2027. The Bank of Thailand’s notification No. 37/2569 and the Stock Exchange of Thailand’s 2027 calendar both list those three days as Songkran Festival.",
          },
          {
            q: "Is alcohol banned during Songkran?",
            a: "Songkran is not on Thai Night’s confirmed alcohol-ban list. The legal drinking age is 20, and The Nation’s 2026 Khao San report said sales still have to follow ordinary legal hours.",
          },
          {
            q: "Where was Bangkok’s water street in 2026?",
            a: "Silom. The Standard and Thai Newsroom both reported an official opening there on 12 April 2026. Their clocks do not match, and the 2027 map is not in the holiday notices, so recheck closer to April. The Nation separately reported a police-managed window on Khao San in 2026.",
          },
          {
            q: "Can I still go to a bar that night?",
            a: "The street is the event. Soi 11 or a rooftop can follow, after you change, with the ride booked from outside any closed road.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/bangkok/areas/khao-san/", label: "Khao San Road" },
          { href: "/bangkok/areas/patpong/", label: "Patpong and Silom" },
          { href: "/bangkok/where-to-stay/", label: "Where to stay in Bangkok" },
          { href: "/bangkok/areas/soi-11/", label: "Soi 11" },
          { href: "/thailand/alcohol-ban-days-2026/", label: "Alcohol ban days" },
          { href: "/safety/", label: "Safety" },
        ]}
      />
    </PageShell>
  );
}
