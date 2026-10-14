import { PageShell } from "@/components/PageShell";
import { LinkList, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Thailand Visitor Guides 2026",
  "Practical Thailand notes for a night out: 2026 alcohol-ban dates from official and news sources, and tourist eSIM price ranges.",
  "/thailand/",
);

export default function ThailandPage() {
  return (
    <PageShell
      path="/thailand/"
      title="Thailand Visitor Guides"
      lead="Two country-wide notes that apply in Bangkok, Pattaya, Phuket and Chiang Mai: days when alcohol sales stop, and how to get a tourist eSIM before you land."
    >
      <Section title="Guides">
        <LinkList
          links={[
            { href: "/thailand/alcohol-ban-days-2026/", label: "Alcohol ban days 2026" },
            { href: "/thailand/esim-for-tourists/", label: "eSIM for tourists" },
            { href: "/cash/", label: "Cash and payments" },
            { href: "/safety/", label: "Safety" },
          ]}
        />
      </Section>
    </PageShell>
  );
}
