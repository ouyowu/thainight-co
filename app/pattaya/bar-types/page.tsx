import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Pattaya Nightlife Bar Types 2026",
  "Go-go vs beer bar vs club vs open courtyard in Pattaya: Walking Street, Soi 6, LK Metro, Buakhao and Tree Town.",
  "/pattaya/bar-types/",
);

export default function PattayaBarTypesPage() {
  return (
    <PageShell title="Pattaya Nightlife Bar Types 2026">
      <p>
        Walking Street mixes several formats on one pedestrian strip. Soi 6 is mostly open beer
        bars. LK Metro is compact go-go. Buakhao / Tree Town is beer-bar and courtyard. Type
        matters more than memorising every name.
      </p>
      <section>
        <h2 className="text-lg font-semibold text-foreground">The four formats</h2>
        <div className="mt-3">
          <PriceTable
            caption="Pattaya bar types"
            headers={["Type", "What it is", "Where"]}
            rows={[
              [
                "Go-go",
                "Stage shows, hostesses, structured bar fine. Highest cost band on Walking Street.",
                "Walking Street, LK Metro",
              ],
              [
                "Beer bar / open seats",
                "Open-front drinks, more direct, daytime-friendly on Soi 6.",
                "Soi 6, Soi Buakhao, some WS seats",
              ],
              [
                "Club",
                "Dance floors, DJs, later peak. Cover common on busy nights.",
                "Walking Street",
              ],
              [
                "Open courtyard",
                "Several bars + food + live music in one compound. No cover to enter.",
                "Tree Town (Buakhao side)",
              ],
            ]}
          />
        </div>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">How the areas map</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            <Link href="/pattaya/areas/walking-street/" className="text-accent hover:underline">
              Walking Street
            </Link>{" "}
            — spectacle: go-go + clubs. Example rooms:{" "}
            <Link href="/pattaya/areas/walking-street/venues/" className="text-accent hover:underline">
              venues
            </Link>
            .
          </li>
          <li>
            <Link href="/pattaya/areas/soi-6/" className="text-accent hover:underline">
              Soi 6
            </Link>{" "}
            — open beer bars, daytime–evening, more transactional.
          </li>
          <li>
            <Link href="/pattaya/areas/lk-metro/" className="text-accent hover:underline">
              LK Metro
            </Link>{" "}
            — compact go-go, usually less intensity than Walking Street.
          </li>
          <li>
            <Link href="/pattaya/areas/soi-buakhao/" className="text-accent hover:underline">
              Soi Buakhao
            </Link>{" "}
            /{" "}
            <Link href="/pattaya/areas/tree-town/" className="text-accent hover:underline">
              Tree Town
            </Link>{" "}
            — budget beer bars and the open courtyard.
          </li>
        </ul>
      </section>
      <p>
        Related:{" "}
        <Link href="/pattaya/night-activities/" className="text-accent hover:underline">
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
