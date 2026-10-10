import { PageShell } from "@/components/PageShell";
import { A, Bullets, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Nightlife Scams in Bangkok & Pattaya 2026",
  "Common nightlife scams and how to avoid them: tout shows, padded bills, taxi and tuk-tuk overcharges, fake tickets, jet-ski damage claims and more.",
  "/scams/",
);

const scams = [
  {
    title: "“Cheap show” tout trap (Patpong, side sois in Pattaya)",
    body: "Someone offers a cheap or free show upstairs. Inside, the drinks bill becomes thousands of baht and the door is blocked.",
    rule: "Never follow street touts upstairs or down side alleys.",
  },
  {
    title: "Padded bar bill",
    body: "Extra drinks or inflated prices appear on the final bill.",
    rule: "Check the menu, pay round by round, and keep the bill tab in view.",
  },
  {
    title: "Taxi / tuk-tuk overcharge",
    body: "Meter “broken”, a fixed high price, or a tuk-tuk detour to a gem shop or tailor.",
    rule: "Use Grab or Bolt, or insist on the meter. Ignore “the temple is closed today”.",
  },
  {
    title: "Fake or inflated tickets",
    body: "Street sellers near stadiums and show venues sell overpriced or fake seats.",
    rule: "Buy at the official box office or a known booking platform.",
  },
  {
    title: "Jet-ski damage claim (Pattaya beach)",
    body: "The operator claims pre-existing damage after you return the jet-ski and demands cash.",
    rule: "Avoid main-beach jet-ski rentals, or photograph and film everything beforehand.",
  },
  {
    title: "Drink spiking",
    body: "Rare, but reported in crowded bars and clubs.",
    rule: "Watch your drink being made, don’t leave it unattended, and leave with friends if you feel unwell.",
  },
  {
    title: "Phone and bag snatching",
    body: "Motorbike snatches and pickpocketing in crowds and at the end of the night.",
    rule: "Phone in a front pocket, bag on the wall side, valuables in the hotel safe.",
  },
];

export default function ScamsPage() {
  return (
    <PageShell path="/scams/" title="Common Nightlife Scams in Bangkok & Pattaya (2026)">
      <ol className="list-decimal space-y-5 pl-5">
        {scams.map((scam) => (
          <li key={scam.title}>
            <p className="font-semibold text-foreground">{scam.title}</p>
            <p className="mt-1">{scam.body}</p>
            <p className="mt-1">
              <strong>Rule:</strong> {scam.rule}
            </p>
          </li>
        ))}
      </ol>

      <Section title="General safety habits">
        <Bullets>
          <li>Don’t flash large amounts of cash</li>
          <li>Tell someone roughly where you’re going if you’re alone</li>
          <li>Tourist Police: 1155 (English-speaking)</li>
        </Bullets>
        <p>
          More: <A href="/safety/">safety tips</A> · <A href="/cash/">cash & payments</A>.
        </p>
      </Section>
    </PageShell>
  );
}
