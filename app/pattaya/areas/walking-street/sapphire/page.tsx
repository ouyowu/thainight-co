import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Sapphire Walking Street 2026",
  "Sapphire on Walking Street Pattaya: frequently cited as more polished / less aggressive. Example name, not a ranking.",
  "/pattaya/areas/walking-street/sapphire/",
);

export default function SapphirePage() {
  return (
    <PageShell title="Sapphire Walking Street 2026">
      <p>
        Sapphire is a name that often comes up on Walking Street: frequently cited as more polished
        / less aggressive. Example, not a ranking. Names and ownership change.
      </p>
      <p>
        Walk the full pedestrian strip once. Sit where the atmosphere matches. No Sapphire menu
        here. Walking Street go-go ranges live on{" "}
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
      </p>
    </PageShell>
  );
}
