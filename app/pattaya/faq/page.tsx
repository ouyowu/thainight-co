import { FaqList, type FaqItem } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { Related } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

const faqItems: FaqItem[] = [
  {
    q: "Walking Street or Tree Town for the first night?",
    a: "Walking Street for the famous neon atmosphere, clubs and live music. Tree Town and Soi Buakhao for a cheaper, more relaxed night with food and bands. Many people do one of each.",
  },
  {
    q: "What time does Walking Street get busy?",
    a: "The street closes to traffic in the evening and gets busy from around 21:30–22:00. Clubs peak after midnight.",
  },
  {
    q: "Tiffany’s or Alcazar?",
    a: "Both are long-running cabaret shows on Pattaya 2nd Road with several shows a night. Tiffany’s is known for more elaborate production; Alcazar is usually cheaper and more musical. See the cabaret shows guide.",
  },
  {
    q: "How do I get around at night?",
    a: "Baht buses (songthaews) run fixed loops on Beach Road and 2nd Road for a small flat fare. Grab and Bolt work well. Agree the price before any private ride.",
  },
  {
    q: "Do I need to book shows in advance?",
    a: "For cabaret on weekends and holidays, booking ahead is safer and sometimes cheaper. Muay Thai cards can usually be bought at the door, but check the night.",
  },
  {
    q: "Is there a dress code?",
    a: "Walking Street bars are casual. Bigger clubs may refuse flip-flops or sleeveless tops. ID checks happen; the legal drinking age is 20.",
  },
  {
    q: "How much should I budget?",
    a: "A beer-bar night can be 500–1,500 THB; a Walking Street night 1,500–3,500 THB before shows. See Budgets.",
  },
  {
    q: "Is it safe?",
    a: "Generally yes with normal caution. Watch bills, keep valuables close in crowds, avoid jet-ski rentals with damage-claim history, and use Grab or agreed fares late at night.",
  },
];

export const metadata = pageMeta(
  "Pattaya Nightlife FAQ 2026",
  "Common questions about Pattaya nightlife: Walking Street vs Tree Town, cabaret shows, getting around, budgets, dress codes and safety.",
  "/pattaya/faq/",
);

export default function PattayaFaqPage() {
  return (
    <PageShell path="/pattaya/faq/" title="Pattaya Nightlife FAQ 2026">
      <FaqList items={faqItems} />
      <Related
        links={[
          { href: "/pattaya/first-timer/", label: "First-timer guide" },
          { href: "/pattaya/cabaret-shows/", label: "Cabaret shows" },
          { href: "/budgets/", label: "Budgets" },
          { href: "/scams/", label: "Scams" },
        ]}
      />
    </PageShell>
  );
}
