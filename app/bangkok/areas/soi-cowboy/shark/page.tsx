import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Shark Soi Cowboy 2026",
  "Shark on Soi Cowboy: modern, high-energy, mid–high. Renovated / smart-bar style reports in 2025–26.",
  "/bangkok/areas/soi-cowboy/shark/",
);

export default function SharkPage() {
  return (
    <PageShell title="Shark Soi Cowboy 2026">
      <p>
        Shark is the modern, high-energy room on Cowboy. Mid–high. Renovated / “smart bar” style
        reports in 2025–26. Transparent feel for many regulars.
      </p>
      <p>
        Names and fit change night to night. Walk past, then sit if it matches. No Shark menu here.
        Cowboy street ranges (2026): beer 150–200 · lady drink 220–260 · bar fine often ~1,000
        (800–1,200). Confirm on the spot.{" "}
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
