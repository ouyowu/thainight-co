import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Nightlife Safety",
  "Practical safety habits for Bangkok and Pattaya nightlife: money, phones, taxis, rooms, and Tourist Police 1155.",
  "/safety/",
);

export default function SafetyPage() {
  return (
    <PageShell
      title="Nightlife Safety"
      lead="Most nights are uneventful if you treat this like a cash business: price things out loud, do not get herded, and do not leave valuables on a bed."
    >
      <ul className="list-disc space-y-2 pl-5">
        <li>Don’t flash large amounts of cash.</li>
        <li>Keep your phone in a front pocket or secure place.</li>
        <li>Tell someone roughly where you are going if you’re alone.</li>
        <li>Pay round by round when possible. Watch the slips in the table bin.</li>
        <li>Ask the exact lady-drink price before the first one is ordered.</li>
        <li>Bar fine is paid to the bar. Her fee is separate. Confirm both before you leave.</li>
        <li>Never follow street touts upstairs for “cheap shows.”</li>
        <li>Use Grab or Bolt. Or insist on the meter. Do not accept a “broken” meter.</li>
        <li>Use the hotel safe. Don’t leave valuables out during a short-time visit.</li>
        <li>
          Pattaya Beach jet-skis: operators claim pre-existing damage after you return. Avoid the
          main beach rentals, or photograph everything first.
        </li>
        <li>Tourist Police: 1155</li>
      </ul>
      <p>
        Full list:{" "}
        <Link href="/scams/" className="text-accent hover:underline">
          common nightlife scams
        </Link>
        .
      </p>
    </PageShell>
  );
}
