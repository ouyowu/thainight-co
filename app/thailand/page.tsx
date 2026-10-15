import { PageShell } from "@/components/PageShell";
import { LinkList, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Thailand Visitor Guides 2026",
  "Thailand notes for a night out: alcohol-ban dates, a tourist eSIM, Songkran 2027, and where to stay on Koh Samui.",
  "/thailand/",
);

export default function ThailandPage() {
  return (
    <PageShell
      path="/thailand/"
      title="Thailand Visitor Guides"
      lead="Country notes for a night out: days when alcohol sales stop, a tourist eSIM, the Songkran 2027 holiday, and which Koh Samui beach matches the night you want."
    >
      <Section title="Guides">
        <LinkList
          links={[
            { href: "/thailand/alcohol-ban-days-2026/", label: "Alcohol ban days 2026" },
            { href: "/bangkok/songkran/", label: "Songkran nightlife 2027" },
            { href: "/koh-samui/where-to-stay/", label: "Koh Samui where to stay" },
            { href: "/thailand/esim-for-tourists/", label: "eSIM for tourists" },
            { href: "/cash/", label: "Cash and payments" },
            { href: "/safety/", label: "Safety" },
          ]}
        />
      </Section>
    </PageShell>
  );
}
