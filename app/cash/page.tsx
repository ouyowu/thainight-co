import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "How Much Cash for Bangkok & Pattaya Nightlife 2026",
  "ATM, hotel safe, and how much cash to carry for Bangkok and Pattaya nightlife. Use published 2026 price and budget bands.",
  "/cash/",
);

export default function CashPage() {
  return (
    <PageShell title="How Much Cash for Bangkok & Pattaya Nightlife 2026">
      <p>
        Carry enough for the night you actually planned, plus a buffer. Don’t flash large stacks.
        Hotel safe for the rest. Many bars are cash-friendly — don’t assume card.
      </p>
      <section>
        <h2 className="text-lg font-semibold text-foreground">ATM and the safe</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Pull what you need for that night. Leave the rest locked.</li>
          <li>Keep small bills (100s and 50s) for drinks paid round by round.</li>
          <li>
            Don’t flash cash on the street or at the table. Same rule on{" "}
            <Link href="/scams/" className="text-accent hover:underline">
              Scams
            </Link>
            .
          </li>
        </ul>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">How much — use the published bands</h2>
        <p className="mt-2">
          No new ranges here. Size the envelope from{" "}
          <Link href="/prices/" className="text-accent hover:underline">
            Prices
          </Link>{" "}
          and{" "}
          <Link href="/budgets/" className="text-accent hover:underline">
            Budgets
          </Link>
          , then add a buffer.
        </p>
        <p className="mt-2">
          Bangkok drinks-only planning band: 500–1,500 THB. Mid night: 2,000–4,000. Full ST night:
          4,000–8,000+.
        </p>
        <p className="mt-2">
          Cowboy street drinks (2026): beer 150–200 · lady drink 220–260 · bar fine often around
          1,000 (800–1,200). Nana lady drinks run 220–280; bar fine 1,000–1,500.
        </p>
        <p className="mt-2">
          Pattaya drinks-only on Walking Street: 1,500–3,500. Walking Street go-go night band:
          4,000–10,000+. Soi 6 ST is widely variable — confirm live. Budget beer-bar / Buakhao
          style: 700–2,000.
        </p>
        <p className="mt-2">
          High season (roughly Nov–Apr) leans to the high end of those bands. Confirm on the spot.
        </p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">Practical</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Pay round by round when you can. That cuts bill surprises and how much you need in one wad.</li>
          <li>Bar fine and her fee are two payments. Budget both if ST is possible.</li>
          <li>
            Bangkok cash FAQ:{" "}
            <Link href="/bangkok/faq/" className="text-accent hover:underline">
              Bangkok FAQ
            </Link>
            . Pattaya spend bands:{" "}
            <Link href="/pattaya/faq/" className="text-accent hover:underline">
              Pattaya FAQ
            </Link>
            .
          </li>
        </ul>
      </section>
      <p>
        Related:{" "}
        <Link href="/bangkok/getting-around/" className="text-accent hover:underline">
          Bangkok getting around
        </Link>
        ,{" "}
        <Link href="/pattaya/getting-around/" className="text-accent hover:underline">
          Pattaya getting around
        </Link>
        ,{" "}
        <Link href="/prices/" className="text-accent hover:underline">
          Prices
        </Link>
        ,{" "}
        <Link href="/budgets/" className="text-accent hover:underline">
          Budgets
        </Link>
      </p>
    </PageShell>
  );
}
