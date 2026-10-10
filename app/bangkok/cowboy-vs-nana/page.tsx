import Link from "next/link";
import { StayNearby } from "@/components/StayNearby";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Soi Cowboy vs Nana Plaza 2026 – Which First?",
  "Soi Cowboy vs Nana Plaza for a first Bangkok nightlife night: layout, prices, who each suits.",
  "/bangkok/cowboy-vs-nana/",
);

export default function CowboyVsNanaPage() {
  return (
    <PageShell title="Soi Cowboy vs Nana Plaza 2026 – Which First?">
      <p>
        Same Sukhumvit cluster. Different layout. Use this if you only have one first night and
        need a default.
      </p>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Side by side</h2>
        <div className="mt-3">
          <PriceTable
            caption="Soi Cowboy vs Nana Plaza"
            headers={["", "Soi Cowboy", "Nana Plaza"]}
            rows={[
              ["Layout", "One open-air street, ~150 metres", "3-floor complex, 40+ venues"],
              ["Vibe", "Lower pressure, easy to leave a bar", "Denser, more shows, wider swings"],
              ["First-timer fit", "Easiest first night", "Better once you want variety"],
              ["Beer", "150–200 THB", "150–200 THB"],
              ["Lady drink", "220–260 THB", "220–280 THB"],
              ["Bar fine (ST)", "800–1,200 THB", "1,000–1,500 THB"],
            ]}
          />
        </div>
        <p className="mt-3">
          Ranges from the{" "}
          <Link href="/prices/" className="text-accent hover:underline">
            2026 prices
          </Link>{" "}
          page. Confirm on the spot.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Which first?</h2>
        <p className="mt-2">
          Start on{" "}
          <Link href="/bangkok/areas/soi-cowboy/" className="text-accent hover:underline">
            Soi Cowboy
          </Link>
          . Linear street. What you see is what you get. Bar fines are relatively consistent.
        </p>
        <p className="mt-2">
          Use{" "}
          <Link href="/bangkok/areas/nana-plaza/" className="text-accent hover:underline">
            Nana Plaza
          </Link>{" "}
          when you want more venues in one building — three floors, bigger productions, slightly
          higher pressure. Free entry to the plaza. Walk all three floors before sitting.
        </p>
        <p className="mt-2">Many people do Cowboy first, Nana on another night.</p>
      </section>

      <p>
        Related:{" "}
        <Link href="/bangkok/first-timer/" className="text-accent hover:underline">
          First-timer guide
        </Link>
        ,{" "}
        <Link href="/prices/" className="text-accent hover:underline">
          Prices
        </Link>
        ,{" "}
        <Link href="/bangkok/faq/" className="text-accent hover:underline">
          FAQ
        </Link>
      </p>

      <StayNearby label="Hotels near Nana / Asok" link="hotelBangkok">
        <p className="mt-2">Near BTS Nana or Asok keeps transport simple.</p>
      </StayNearby>
    </PageShell>
  );
}
