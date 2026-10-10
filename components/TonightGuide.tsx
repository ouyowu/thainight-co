import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";

const LAST_CHECKED = "October 2026";

const placeholderEvents = [
  { venue: "—", type: "Club / Live music / Special night / Regular", notes: "—", source: "—" },
  { venue: "—", type: "Club / Live music / Special night / Regular", notes: "—", source: "—" },
  { venue: "—", type: "Club / Live music / Special night / Regular", notes: "—", source: "—" },
  { venue: "—", type: "Club / Live music / Special night / Regular", notes: "—", source: "—" },
] as const;

const weekly = [
  ["Mon–Wed", "Quieter"],
  ["Thu", "Building up"],
  ["Fri–Sat", "Peak"],
  ["Sun", "Mixed"],
];

type TonightGuideProps = {
  city: "Bangkok" | "Pattaya";
};

export function TonightGuide({ city }: TonightGuideProps) {
  const firstTimer =
    city === "Bangkok" ? "/bangkok/first-timer/" : "/pattaya/first-timer/";

  return (
    <PageShell title={`Tonight in ${city}`} showUpdated={false}>
      <p className="text-sm text-muted">Last checked: {LAST_CHECKED}</p>

      <section>
        <h2 className="text-lg font-semibold text-foreground">What’s on this week</h2>
        <div className="mt-3">
          <PriceTable
            caption="What’s on this week"
            headers={["Venue / Area", "Type", "Notes", "Source"]}
            rows={placeholderEvents.map((event) => [
              event.venue,
              event.type,
              event.notes,
              event.source,
            ])}
          />
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Regular weekly patterns</h2>
        <div className="mt-3">
          <PriceTable
            caption="Regular weekly patterns"
            headers={["When", "Pattern"]}
            rows={weekly}
          />
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">How we update this page</h2>
        <p className="mt-2">
          We check major event aggregators, venue social pages, and recent visitor reports.
          Listings are not exhaustive and can change. Always verify on the day.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Quick links</h2>
        <ul className="mt-2 space-y-1">
          <li>
            <Link href={firstTimer} className="text-accent hover:underline">
              {city} First-Timer Guide
            </Link>
          </li>
          <li>
            <Link href="/prices/" className="text-accent hover:underline">
              Current Prices
            </Link>
          </li>
          <li>
            <Link href="/scams/" className="text-accent hover:underline">
              Scams to Avoid
            </Link>
          </li>
        </ul>
      </section>
    </PageShell>
  );
}
