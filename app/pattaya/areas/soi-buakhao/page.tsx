import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Soi Buakhao Pattaya 2026 – Budget Nightlife Guide",
  "Soi Buakhao nightlife in 2026: cheaper beer bars, relaxed pace, and how it compares to Walking Street and Soi 6.",
  "/pattaya/areas/soi-buakhao/",
);

export default function SoiBuakhaoPage() {
  return (
    <PageShell title="Soi Buakhao Pattaya 2026">
      <p>
        Soi Buakhao is central Pattaya’s <strong>budget-friendly</strong> nightlife corridor
        (between Second and Third Road). Beer bars, sports pubs, casual food — lower prices and
        lower pressure than Walking Street.
      </p>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Best for</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Drinks-only nights without go-go pricing</li>
          <li>Expats / long-stay visitors</li>
          <li>Warm-up before LK Metro or a later move elsewhere</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Not ideal for</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>The classic neon “Walking Street spectacle”</li>
          <li>People who only want Soi 6-style short-time street energy</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">2026 price feel</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            Local beer often <strong>70–120 THB</strong> (happy hour can be lower)
          </li>
          <li>Lady drinks lower than Walking Street go-gos when present</li>
          <li>
            A simple drinks + food night can stay in the <strong>1,000–3,000 THB</strong> planning
            range if you stay in beer bars
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">How it connects</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            <Link href="/pattaya/areas/lk-metro/" className="text-accent hover:underline">
              <strong>LK Metro</strong>
            </Link>{" "}
            sits off the Buakhao side — compact go-go option without full Walking Street prices
          </li>
          <li>
            <Link href="/pattaya/areas/tree-town/" className="text-accent hover:underline">
              <strong>Tree Town</strong>
            </Link>{" "}
            (open complex on/near Buakhao) — bars + food + live music in one open area
          </li>
          <li>Easy base if your hotel is central</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">First approach</h2>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>Start with food</li>
          <li>One or two beer bars</li>
          <li>Decide whether to continue to LK Metro, Tree Town, or head home</li>
        </ol>
      </section>

      <p>
        Links:{" "}
        <Link href="/pattaya/areas/lk-metro/" className="text-accent hover:underline">
          LK Metro
        </Link>
        ,{" "}
        <Link href="/pattaya/" className="text-accent hover:underline">
          Pattaya overview
        </Link>
        ,{" "}
        <Link href="/prices/" className="text-accent hover:underline">
          Prices
        </Link>
      </p>
    </PageShell>
  );
}
