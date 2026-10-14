import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Thailand Alcohol Ban Days 2026",
  "2026 Thailand alcohol-ban dates we could confirm: Makha Bucha, Visakha Bucha, Asalha Bucha, Buddhist Lent and the February election window. Recheck before you travel.",
  "/thailand/alcohol-ban-days-2026/",
);

const sources = [
  {
    href: "https://www.bot.or.th/content/dam/bot/fipcs/documents/FPG/2568/EngPDF/25680162.pdf",
    label: "Bank of Thailand notification No. 31/2568, 2026 financial-institution holidays",
  },
  {
    href: "https://www.nationthailand.com/blogs/news/general/40062977",
    label: "The Nation, 25 February 2026, Makha Bucha alcohol-sales rules",
  },
  {
    href: "https://www.nationthailand.com/blogs/news/general/40066883",
    label: "The Nation, 31 May 2026, Visakha Bucha alcohol-sales rules",
  },
  {
    href: "https://www.nationthailand.com/news/general/40069132",
    label: "The Nation, 28 July 2026, Asalha Bucha and Buddhist Lent sales ban",
  },
  {
    href: "https://www.nationthailand.com/news/general/40062222",
    label: "The Nation, 7 February 2026, Election Commission alcohol ban",
  },
];

export default function AlcoholBanDaysPage() {
  return (
    <PageShell
      path="/thailand/alcohol-ban-days-2026/"
      title="Thailand Alcohol Ban Days 2026"
      lead="Recheck this list before you travel. It includes only dates confirmed by the Bank of Thailand or by The Nation’s reporting of official notices. A later election, or a notice we have not seen, can add a day."
    >
      <Section title="Dates we could confirm">
        <PriceTable
          caption="Confirmed 2026 alcohol-ban windows"
          headers={["When", "Occasion", "What the sources say"]}
          rows={[
            [
              "Tuesday 3 March 2026",
              "Makha Bucha",
              "Bank holiday, and a sales-ban day under the alcohol-control rules",
            ],
            [
              "Sunday 31 May 2026",
              "Visakha Bucha",
              "24-hour sales ban on the observance day, midnight to midnight",
            ],
            [
              "Wednesday 29 July through Thursday 30 July 2026",
              "Asalha Bucha and Buddhist Lent (Khao Phansa)",
              "Sales ban from 12:01am on 29 July until midnight at the end of 30 July",
            ],
            [
              "18:00 Saturday 7 February to 18:00 Sunday 8 February 2026",
              "House of Representatives election",
              "Sale, distribution or serving banned inside electoral districts",
            ],
          ]}
        />
        <p className="text-sm text-muted">
          Checked 14 October 2026. Most of these days have already passed. This page does not list
          2027 dates.
        </p>
      </Section>

      <Section title="What the ban covers">
        <p>
          On the Buddhist days, the restriction is on selling. The Nation’s February and July
          reports of the Prime Minister’s Office notification describe five exemptions: passenger
          terminals at airports with international flights, licensed hotels, licensed entertainment
          venues, similar venues in tourist areas designated for this purpose, and certain large
          national or international events. Shops, convenience stores and ordinary restaurants are
          not automatically exempt.
        </p>
        <p>
          The February election order is worded more tightly. The Nation reported an Election
          Commission ban on sale, distribution or serving inside electoral districts, and that
          story does not list the Buddhist-day venue exemptions. Do not assume a bar that served
          on Makha Bucha could serve during that election window.
        </p>
        <Bullets>
          <li>
            Visakha Bucha fell on Sunday 31 May. The Bank of Thailand moved the bank holiday to
            Monday 1 June. The Nation’s sales story applies the 24-hour ban to 31 May, not to the
            substitute Monday.
          </li>
          <li>
            The Bank of Thailand spells the July full-moon day “Asarnha Bucha” and lists it on
            Wednesday 29 July. The Nation uses “Asalha Bucha” for the same day and pairs it with
            Buddhist Lent on Thursday 30 July.
          </li>
          <li>
            Penalties reported for sellers who break a ban are up to six months in prison, a fine
            of up to 10,000 baht, or both. That is a seller penalty, not a rule about drinking
            alcohol you already have at home.
          </li>
        </Bullets>
      </Section>

      <Section title="Left off on purpose">
        <p>
          The alcohol-control rules also name Ok Phansa (the end of Buddhist Lent) as a sales-ban
          day. No Bank of Thailand holiday notice and no Nation report we checked stated the 2026
          calendar date, so it is not in the table. Ask locally or look for a fresh government or
          news notice before you plan around late October.
        </p>
        <p>
          Ordinary daily sale hours are a separate rule and are not listed here. Local elections
          after 8 February 2026 are not listed either: none showed up in the sources above.
        </p>
      </Section>

      <Section title="Sources">
        <ul className="list-disc space-y-1 pl-5">
          {sources.map((source) => (
            <li key={source.href}>
              <a
                href={source.href}
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {source.label}
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <FaqList
        items={[
          {
            q: "Can I buy beer at a 7-Eleven on Makha Bucha?",
            a: "No. Shops and convenience stores are the places the ban is aimed at. The confirmed 2026 Makha Bucha date was Tuesday 3 March.",
          },
          {
            q: "Do bars in Patong and Sukhumvit close on Buddhist ban days?",
            a: "Not automatically. The Nation’s reports of the 2025 Prime Minister’s Office notification exempt licensed hotels and licensed entertainment venues, plus similar venues in designated tourist areas. Confirm with the venue. The February 2026 election window was reported as a ban on serving as well as selling.",
          },
          {
            q: "Was alcohol banned on the Visakha substitute holiday, 1 June 2026?",
            a: "The Bank of Thailand lists Monday 1 June as the substitute bank holiday because Visakha Bucha was Sunday 31 May. The Nation’s sales story bans sales on 31 May, not on 1 June.",
          },
          {
            q: "Is this the full 2026 list?",
            a: "No. Ok Phansa is a named ban day and its 2026 date is omitted here because we could not confirm it. Recheck before you travel.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/thailand/esim-for-tourists/", label: "Tourist eSIM" },
          { href: "/bangkok/faq/", label: "Bangkok FAQ" },
          { href: "/phuket/", label: "Phuket nightlife" },
          { href: "/safety/", label: "Safety" },
        ]}
      />
    </PageShell>
  );
}
