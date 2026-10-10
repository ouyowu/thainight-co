import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Dollhouse Soi Cowboy 2026",
  "Dollhouse on Soi Cowboy: lower-pressure mainstream go-go, mid–high. Long reputation for a less aggressive lady-drink push.",
  "/bangkok/areas/soi-cowboy/dollhouse/",
);

export default function DollhousePage() {
  return (
    <PageShell title="Dollhouse Soi Cowboy 2026">
      <p>
        Dollhouse is the lower-pressure, mainstream room on Cowboy. Mid–high. Long reputation for a
        less aggressive lady-drink push. Good first sit.
      </p>
      <p>
        First visit on this site: walk-past of{" "}
        <Link href="/bangkok/areas/soi-cowboy/baccara/" className="text-accent hover:underline">
          Baccara
        </Link>{" "}
        and Dollhouse. Sit where you feel comfortable after one full pass of the ~150-metre street.
      </p>
      <p>
        No Dollhouse menu here. Cowboy street ranges (2026): beer 150–200 · lady drink 220–260 · bar
        fine often ~1,000 (800–1,200). Confirm on the spot.{" "}
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
