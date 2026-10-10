import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Windmill Walking Street 2026",
  "Windmill on Walking Street Pattaya: long-running, multi-level go-go, high production. Example name, not a ranking.",
  "/pattaya/areas/walking-street/windmill/",
);

export default function WindmillPage() {
  return (
    <PageShell title="Windmill Walking Street 2026">
      <p>
        Windmill is a name that often comes up on Walking Street: long-running, multi-level go-go,
        high production. Example, not a ranking. Names and ownership change.
      </p>
      <p>
        Walk the full pedestrian strip once. Sit where the atmosphere matches. One go-go sit or one
        club on night one — not both at full intensity.
      </p>
      <p>
        No Windmill menu here. Walking Street go-go ranges live on{" "}
        <Link href="/prices/" className="text-accent hover:underline">
          Prices
        </Link>{" "}
        (beer 150–220 · lady drink 180–300 · bar fine 1,000–2,500). Confirm before rounds.
      </p>
      <p>
        Links:{" "}
        <Link href="/pattaya/areas/walking-street/" className="text-accent hover:underline">
          Walking Street guide
        </Link>
        ,{" "}
        <Link href="/pattaya/areas/walking-street/venues/" className="text-accent hover:underline">
          Venues
        </Link>
        ,{" "}
        <Link href="/pattaya/first-timer/" className="text-accent hover:underline">
          First-timer
        </Link>
      </p>
    </PageShell>
  );
}
