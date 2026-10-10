import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "LK Metro Pattaya Guide",
  "Mid-priced Pattaya go-go area with live music. Slightly calmer than Walking Street; often an easier start.",
  "/pattaya/areas/lk-metro/",
);

export default function LkMetroPage() {
  return (
    <PageShell
      title="LK Metro"
      lead="Go-go, slightly calmer than Walking Street. Mid cost. Live music. Often recommended as an easier start if the main strip feels like too much on night one."
    >
      <p>
        Hours are roughly 20:00–01:00. You still walk first and sit second. You still confirm lady
        drink and any fine before ordering rounds. Prices sit between Soi 6 and Walking Street —
        expect more than a Soi 6 beer, less circus than the neon strip.
      </p>
      <p>
        If you want the classic big neon experience, do Walking Street. If you want cheaper, faster,
        more direct, do Soi 6. LK Metro is the middle ground.
      </p>
      <p>
        Same rules: bar fine is paid to the bar; her fee is separate; do not follow touts upstairs
        anywhere in town.
      </p>
      <p>
        <Link href="/pattaya/first-timer/" className="text-accent hover:underline">
          First-timer guide
        </Link>
        {" · "}
        <Link href="/pattaya/areas/" className="text-accent hover:underline">
          All Pattaya areas
        </Link>
      </p>
    </PageShell>
  );
}
