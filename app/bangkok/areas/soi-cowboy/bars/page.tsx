import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Soi Cowboy Bars 2026 – Baccara, Dollhouse, Tilac & More",
  "Practical overview of the main go-go bars on Soi Cowboy Bangkok in 2026: vibe, price level and who each place suits.",
  "/bangkok/areas/soi-cowboy/bars/",
);

export default function SoiCowboyBarsPage() {
  return (
    <PageShell title="Soi Cowboy Bars 2026">
      <p>
        Soi Cowboy is only ~150 metres long. Names change, but a core of long-running rooms still
        anchors the strip. Walk end to end once, then sit where the vibe fits you.
      </p>
      <section>
        <h2 className="text-lg font-semibold text-foreground">Bars worth knowing</h2>
        <div className="mt-3">
          <PriceTable
            caption="Bars worth knowing"
            headers={["Bar", "Vibe", "Price level", "Notes"]}
            rows={[
              [
                "Baccara",
                "Glossy, high-energy, two floors",
                "Premium",
                "Flagship at Soi 23 end. Glass floor between levels. Renovated 2025. Busiest reference point on the street.",
              ],
              [
                "Dollhouse",
                "Lower pressure, mainstream",
                "Mid–high",
                "Long reputation for less aggressive lady-drink push. Good first sit.",
              ],
              [
                "Tilac",
                "Big stage, classic energy",
                "Mid–high",
                "Large room, multiple stages. Often mentioned as approachable for first-timers.",
              ],
              [
                "Shark",
                "Modern, high-energy",
                "Mid–high",
                "Renovated / “smart bar” style reports in 2025–26. Transparent feel for many regulars.",
              ],
              [
                "Crazy House",
                "Rowdy, intense",
                "Mid",
                "Stronger, less filtered atmosphere. Better if you already know the format.",
              ],
              [
                "Bad Beach",
                "Smaller, lounge-style",
                "Mid",
                "Newer room (old Lighthouse unit). Sofas, smaller stage.",
              ],
              [
                "Supernova",
                "Louder, modern",
                "Mid–high",
                "Newer addition near Soi 23 corner.",
              ],
            ]}
          />
        </div>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">How to use this list</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            First visit: Start with a walk-past of Baccara and Dollhouse. Sit where you feel
            comfortable after one full pass.
          </li>
          <li>
            Don’t chase “best bar” rankings. Lineups and pressure change night to night. The street
            is short — bar-hop is normal.
          </li>
          <li>Confirm beer, lady drink and bar fine before the second round.</li>
        </ul>
      </section>
      <p>
        Typical Cowboy ranges (2026): beer 150–200 · lady drink 220–260 · bar fine often ~1,000
        (sometimes 800–1,200).
      </p>
      <p>
        Named rooms (notes only):{" "}
        <Link href="/bangkok/areas/soi-cowboy/baccara/" className="text-accent hover:underline">
          Baccara
        </Link>
        {" · "}
        <Link href="/bangkok/areas/soi-cowboy/dollhouse/" className="text-accent hover:underline">
          Dollhouse
        </Link>
        {" · "}
        <Link href="/bangkok/areas/soi-cowboy/tilac/" className="text-accent hover:underline">
          Tilac
        </Link>
        {" · "}
        <Link href="/bangkok/areas/soi-cowboy/shark/" className="text-accent hover:underline">
          Shark
        </Link>
      </p>
      <p>
        Links:{" "}
        <Link href="/bangkok/areas/soi-cowboy/" className="text-accent hover:underline">
          Full Soi Cowboy guide
        </Link>
        ,{" "}
        <Link href="/prices/" className="text-accent hover:underline">
          Prices
        </Link>
        ,{" "}
        <Link href="/bangkok/first-timer/" className="text-accent hover:underline">
          First-timer plan
        </Link>
      </p>
    </PageShell>
  );
}
