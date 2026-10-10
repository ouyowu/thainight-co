import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Bangkok Nightlife Bar Types 2026",
  "Go-go vs beer bar vs rooftop vs club in Bangkok: Soi Cowboy, Nana Plaza, Soi 11 and RCA. What each format is for.",
  "/bangkok/bar-types/",
);

export default function BangkokBarTypesPage() {
  return (
    <PageShell title="Bangkok Nightlife Bar Types 2026">
      <p>
        Pick the format first, then the street. Cowboy and Nana are go-go. Soi 11 is rooftops and
        clubs. RCA is a club strip. Mixing all four on night one is how people get tired and
        overspend.
      </p>
      <section>
        <h2 className="text-lg font-semibold text-foreground">The four formats</h2>
        <div className="mt-3">
          <PriceTable
            caption="Bangkok bar types"
            headers={["Type", "What it is", "Where"]}
            rows={[
              [
                "Go-go",
                "Stage shows, hostesses, lady drink + bar fine. Confirm both before rounds.",
                "Soi Cowboy, Nana Plaza",
              ],
              [
                "Beer bar / open seats",
                "Simpler drinks, street energy, easier to leave. Not a show room.",
                "Edges of Cowboy / Nana; some Soi 11 spots",
              ],
              [
                "Rooftop / cocktail",
                "Views, mixed crowds, rooftop/club premium on drinks.",
                "Soi 11, Thonglor",
              ],
              [
                "Club",
                "Dance floors, DJs, later peak. Cover common; ID checks real.",
                "Soi 11, RCA, some Thonglor",
              ],
            ]}
          />
        </div>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">How the areas map</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            <Link href="/bangkok/areas/soi-cowboy/" className="text-accent hover:underline">
              Soi Cowboy
            </Link>{" "}
            — open-air go-go street. Easiest first sit. Bar names:{" "}
            <Link href="/bangkok/areas/soi-cowboy/bars/" className="text-accent hover:underline">
              bars list
            </Link>
            .
          </li>
          <li>
            <Link href="/bangkok/areas/nana-plaza/" className="text-accent hover:underline">
              Nana Plaza
            </Link>{" "}
            — three-floor go-go complex. More variety, denser.
          </li>
          <li>
            <Link href="/bangkok/areas/soi-11/" className="text-accent hover:underline">
              Soi 11
            </Link>{" "}
            — bars, rooftops, clubs. Contrast night.{" "}
            <Link href="/bangkok/ladies-night/" className="text-accent hover:underline">
              Ladies night / promos
            </Link>{" "}
            live here as a visitor concept.
          </li>
          <li>
            <Link href="/bangkok/areas/rca-thonglor/" className="text-accent hover:underline">
              RCA
            </Link>{" "}
            — purpose-built club strip. Thonglor — upscale bars + selective clubs. Go-go visitors
            usually skip unless they want a club night.
          </li>
        </ul>
      </section>
      <p>
        Related:{" "}
        <Link href="/bangkok/night-activities/" className="text-accent hover:underline">
          Night activities
        </Link>
        ,{" "}
        <Link href="/prices/" className="text-accent hover:underline">
          Prices
        </Link>
      </p>
    </PageShell>
  );
}
