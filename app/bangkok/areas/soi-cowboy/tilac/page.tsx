import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Tilac Soi Cowboy 2026",
  "Tilac on Soi Cowboy: big stage, classic energy, mid–high. Large room, multiple stages. Approachable for many first-timers.",
  "/bangkok/areas/soi-cowboy/tilac/",
);

export default function TilacPage() {
  return (
    <PageShell title="Tilac Soi Cowboy 2026">
      <p>
        Tilac is the big-stage, classic-energy room on Cowboy. Mid–high. Large room, multiple
        stages. Often mentioned as approachable for first-timers.
      </p>
      <p>
        Walk the ~150-metre street once. Sit where the vibe fits. No Tilac menu here. Cowboy street
        ranges (2026): beer 150–200 · lady drink 220–260 · bar fine often ~1,000 (800–1,200). Confirm
        live.{" "}
        <Link href="/prices/" className="text-accent hover:underline">
          Prices
        </Link>
        .
      </p>
      <p>
        Links:{" "}
        <Link href="/bangkok/areas/soi-cowboy/" className="text-accent hover:underline">
          Soi Cowboy guide
        </Link>
        ,{" "}
        <Link href="/bangkok/areas/soi-cowboy/bars/" className="text-accent hover:underline">
          Bars list
        </Link>
      </p>
    </PageShell>
  );
}
