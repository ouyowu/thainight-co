import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Pattaya Nightlife Bar Types 2026",
  "Beer bar vs live music vs club vs open courtyard vs beach bar in Pattaya: what each format costs, when it fills, how the bill works, and where to find it.",
  "/pattaya/bar-types/",
);

export default function PattayaBarTypesPage() {
  return (
    <PageShell path="/pattaya/bar-types/" title="Pattaya Nightlife Bar Types 2026">
      <p>Type matters more than memorising every name. Pick the format, then the street.</p>

      <Section title="The formats">
        <PriceTable
          caption="Pattaya bar types"
          headers={["Type", "What it is", "Where"]}
          rows={[
            ["Open beer bar", "Open-front, cheap drinks, pool tables, easy to leave.", "Soi Buakhao, side sois"],
            ["Live music bar", "House bands, covers, rock and blues.", "Walking Street, Soi Buakhao"],
            ["Club", "DJs, later peak, cover on busy nights.", "Walking Street"],
            ["Open courtyard", "Several bars + food + bands in one compound. No entry fee.", "Tree Town"],
            ["Beach bar", "Sunset drinks, sea breeze.", "Beach Road, Jomtien"],
          ]}
        />
      </Section>

      <Section title="What each format costs and when it fills">
        <PriceTable
          caption="A beer, the busy hours and the door"
          headers={["Type", "A beer", "Busy from", "Door"]}
          rows={[
            ["Open beer bar", "60–130 THB", "Early, all evening", "None"],
            ["Live music bar", "120–200 THB", "Band time, usually 21:00+", "Usually none"],
            ["Club", "150–250 THB", "After midnight", "Cover on busy nights; ID checked"],
            ["Open courtyard", "80–150 THB", "20:00 onward", "No entry fee"],
            ["Beach bar", "100–180 THB", "Sunset", "None"],
          ]}
        />
        <p className="text-sm text-muted">
          Checked October 2026 against venue listings and recent visitor reports. Full table:{" "}
          <A href="/pattaya/prices/">Pattaya nightlife prices</A>.
        </p>
      </Section>

      <Section title="How the bill works">
        <Bullets>
          <li>Beer bars keep a slip in a cup on your table and add each round to it. Read it before you pay.</li>
          <li>Most beer bars and courtyards are cash. Bigger clubs and hotel bars take cards.</li>
          <li>Some bars add items the menu does not list, such as a drink bought for a staff member, usually 150–250 THB each time. Ask the price before agreeing.</li>
          <li>Tipping is not required. Rounding up, or 20–50 THB at a bar you liked, is normal.</li>
        </Bullets>
      </Section>

      <Section title="Putting a night together">
        <Bullets>
          <li>Start on Soi Buakhao or in Tree Town, where beer is half the Walking Street price, then walk down late.</li>
          <li>Walking Street is a late street. Before 22:00 it is mostly touts and empty rooms.</li>
          <li>A beach bar at sunset is the cheapest good hour of the evening.</li>
          <li>Thai Night covers mainstream nightlife. Walking Street also has adult-entertainment venues, which this site does not cover.</li>
        </Bullets>
        <p>
          A planned version of this: <A href="/pattaya/one-night-plan/">one night in Pattaya</A>.
        </p>
      </Section>

      <Section title="How the areas map">
        <Bullets>
          <li><A href="/pattaya/areas/walking-street/">Walking Street</A> — spectacle: clubs, live music, seafood.</li>
          <li><A href="/pattaya/areas/soi-buakhao/">Soi Buakhao</A> — budget beer bars and food.</li>
          <li><A href="/pattaya/areas/tree-town/">Tree Town</A> — the open courtyard with bands.</li>
        </Bullets>
      </Section>

      <FaqList
        items={[
          {
            q: "What is the cheapest kind of bar in Pattaya?",
            a: "Open beer bars, at about 60–130 THB a beer, mostly on Soi Buakhao and the side sois. Walking Street bars and clubs are roughly double.",
          },
          {
            q: "What time does Walking Street get busy?",
            a: "After about 22:00, and clubs peak after midnight. Earlier in the evening the beer bars and Tree Town are livelier.",
          },
          {
            q: "Is there a dress code in Pattaya?",
            a: "Beer bars, courtyards and beach bars have none. Clubs check ID and may turn away shorts and sandals on busy nights. The legal drinking age in Thailand is 20.",
          },
          {
            q: "What is an open courtyard bar?",
            a: "A compound holding several bars, food stalls and a band stage, with no entry fee — Tree Town is the main one.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/pattaya/night-activities/", label: "Night activities" },
          { href: "/pattaya/prices/", label: "Pattaya prices" },
          { href: "/pattaya/one-night-plan/", label: "One night in Pattaya" },
          { href: "/pattaya/areas/", label: "Pattaya areas" },
        ]}
      />
    </PageShell>
  );
}
