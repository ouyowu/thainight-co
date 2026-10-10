import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { GuidePhoto } from "@/components/GuidePhoto";
import { photos } from "@/lib/photos";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Tree Town Pattaya 2026 – Open-Air Bars & Food",
  "Tree Town on Soi Buakhao: open-air bar complex with food and live music — practical 2026 overview.",
  "/pattaya/areas/tree-town/",
);

export default function TreeTownPage() {
  return (
    <PageShell path="/pattaya/areas/tree-town/" title="Tree Town Pattaya 2026">
      <GuidePhoto {...photos.centralPattaya} />
      <p className="text-sm text-muted">No licensed courtyard photo of Tree Town is in this set. The photo is CentralFestival on Beach Road; Tree Town is inland on/near Soi Buakhao.</p>
      <p>
        Tree Town is an <strong>open-air bar and food complex</strong> on/near Soi Buakhao. Multiple
        bars, street food, live music overlapping in one compound — more “festival courtyard” than
        a single bar street.
      </p>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Best for</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Casual evening with food + beer</li>
          <li>Groups with mixed interests</li>
          <li>Lower spend than Walking Street</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Atmosphere</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Lively, noisy (several bars play music at once)</li>
          <li>Peak roughly early evening into late night</li>
          <li>No cover to enter the complex; pay only what you order</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Price feel (2026)</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            Beer commonly in the <strong>budget beer-bar range</strong> (often cited around 60–130
            THB depending on spot)
          </li>
          <li>Food is a real reason to come, not an afterthought</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Tips</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Walk the whole complex once before sitting</li>
          <li>
            Good as a <strong>start</strong> to the night; move to Walking Street later if you want clubs
          </li>
          <li>Combine with Soi Buakhao on the same evening</li>
        </ul>
      </section>

      <p>
        Links:{" "}
        <Link href="/pattaya/areas/soi-buakhao/" className="text-accent hover:underline">
          Soi Buakhao
        </Link>
        ,{" "}
        <Link href="/pattaya/" className="text-accent hover:underline">
          Pattaya overview
        </Link>
      </p>
    </PageShell>
  );
}
