import { FaqList, type FaqItem } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { Related } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

const faqItems: FaqItem[] = [
  {
    q: "Where should I go on my first night?",
    a: "Sukhumvit Soi 11 is the easiest start: bars, a rooftop and clubs within a short walk of BTS Nana. Thonglor suits a more polished cocktail night; RCA suits a big club night.",
  },
  {
    q: "Which rooftop bar is best?",
    a: "Sky Bar (lebua) and Vertigo (Banyan Tree) are the famous views, at a premium. Octave (Thonglor) and hotel rooftops around Asok are easier on the budget. See the rooftop bars guide for dress codes and hours.",
  },
  {
    q: "Is there a dress code?",
    a: "Rooftops and many clubs refuse shorts, flip-flops, sleeveless tops and sportswear. Long trousers and closed shoes are the safe default.",
  },
  {
    q: "What is the legal drinking age, and do clubs check ID?",
    a: "The legal drinking age in Thailand is 20. Clubs check ID, often strictly. Bring your passport or a clear copy plus another photo ID.",
  },
  {
    q: "What time should I go out?",
    a: "Rooftops are best from sunset (around 18:00). Bars fill from about 21:00. Clubs get busy after 23:00. Closing times depend on the area and licence — some designated zones run later than others, so check the venue.",
  },
  {
    q: "Are there days when bars don’t serve alcohol?",
    a: "Yes. Alcohol sales are restricted on some Buddhist holidays and on election days. Many bars close or serve soft drinks only. Check the calendar before you plan a big night.",
  },
  {
    q: "Is Patpong worth it?",
    a: "For the night market and a short look, yes. Never follow touts upstairs for “cheap shows” — that is a classic overcharge trap.",
  },
  {
    q: "How much cash should I carry?",
    a: "Enough for your planned night plus a buffer. Rooftops and hotel bars take cards; street bars and markets mostly don’t. Leave the rest in the hotel safe.",
  },
  {
    q: "Where should I stay?",
    a: "Near BTS Nana, Asok or Phrom Phong on Sukhumvit keeps transport simple and puts Soi 11, rooftops and Thonglor a short ride away.",
  },
  {
    q: "Is it safe?",
    a: "Use normal big-city caution. The common problems are bills, touts, drink spiking in rare cases and transport overcharges — not random violence. See Scams and Safety.",
  },
];

export const metadata = pageMeta(
  "Bangkok Nightlife FAQ 2026",
  "Common questions about Bangkok nightlife: where to go first, rooftops, dress codes, ID checks, closing times, alcohol ban days and safety.",
  "/bangkok/faq/",
);

export default function BangkokFaqPage() {
  return (
    <PageShell title="Bangkok Nightlife FAQ 2026">
      <FaqList items={faqItems} />
      <Related
        links={[
          { href: "/bangkok/first-timer/", label: "First-timer guide" },
          { href: "/bangkok/rooftop-bars/", label: "Rooftop bars" },
          { href: "/scams/", label: "Scams" },
          { href: "/safety/", label: "Safety" },
        ]}
      />
    </PageShell>
  );
}
