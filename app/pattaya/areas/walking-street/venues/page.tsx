import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Walking Street Pattaya Venues 2026 – Go-Go, Clubs & Beer Bars",
  "Types of venues on Walking Street Pattaya in 2026: go-go bars, nightclubs and casual stops — what each costs and who they suit.",
  "/pattaya/areas/walking-street/venues/",
);

export default function WalkingStreetVenuesPage() {
  return (
    <PageShell title="Walking Street Venues 2026">
      <p>
        Walking Street mixes several formats on one pedestrian strip. Knowing the type of venue
        matters more than memorising every name.
      </p>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Venue types</h2>
        <div className="mt-3">
          <PriceTable
            caption="Venue types"
            headers={["Type", "What it is", "Cost", "Who it suits"]}
            rows={[
              [
                "Go-go bars",
                "Stage shows, hostesses, structured bar fine system",
                "Highest",
                "Core adult nightlife draw. Confirm lady drink + bar fine before rounds.",
              ],
              [
                "Nightclubs",
                "Dance floors, DJs, later peak",
                "High",
                "Cover common on busy nights (often includes a drink). Peak after midnight.",
              ],
              [
                "Beer bars / open seats",
                "Simpler drinks, street energy",
                "Mid",
                "Easier for a first walk-through drink.",
              ],
              [
                "Restaurants / live music",
                "Food + bands",
                "Mid",
                "Useful for dinner before the main strip energy.",
              ],
            ]}
          />
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          Names that often come up (examples, not rankings)
        </h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Windmill — long-running, multi-level go-go, high production</li>
          <li>Sapphire — frequently cited as more polished / less aggressive</li>
          <li>Insomnia / major clubs — big-room club energy, later hours</li>
        </ul>
        <p className="mt-3">
          Names and ownership change. Walk the street once; sit where the atmosphere matches what
          you want.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Practical order for a first night</h2>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>Walk full length without committing</li>
          <li>
            One go-go sit <strong>or</strong> one club — not both at full intensity on night one
          </li>
          <li>Hard spending limit set before the second lady drink</li>
        </ol>
      </section>

      <p>
        Links:{" "}
        <Link href="/pattaya/areas/walking-street/" className="text-accent hover:underline">
          Full Walking Street guide
        </Link>
        ,{" "}
        <Link href="/prices/" className="text-accent hover:underline">
          Prices
        </Link>
        ,{" "}
        <Link href="/pattaya/first-timer/" className="text-accent hover:underline">
          First-timer
        </Link>
      </p>
    </PageShell>
  );
}
