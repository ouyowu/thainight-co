import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Nightlife Safety Tips – Bangkok & Pattaya",
  "Practical safety tips for Bangkok and Pattaya nightlife: transport, valuables, bills and when to leave.",
  "/safety/",
);

export default function SafetyPage() {
  return (
    <PageShell path="/safety/" title="Nightlife Safety Tips (Bangkok & Pattaya)">
      <section>
        <h2 className="text-lg font-semibold text-foreground">Before you go out</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Carry only what you need; leave passport in the hotel safe when possible</li>
          <li>Note your hotel name and a nearby landmark</li>
          <li>Set a spending limit for the night before the first drink</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">On the street and in bars</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Pay round by round when you can; watch the slip bin</li>
          <li>Check menu prices before ordering</li>
          <li>Watch your drink being made; don’t leave it unattended</li>
          <li>Don’t follow street touts upstairs for “cheap shows”</li>
          <li>Keep your phone and wallet in a front pocket or secure place</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Getting home</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Prefer Grab or Bolt over random taxis/tuk-tuks late at night</li>
          <li>Share your live location with someone if you’re alone</li>
          <li>If a situation feels wrong, leave — there is always another bar</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">If something goes wrong</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            Tourist Police: <strong>1155</strong> · Police: <strong>191</strong> · Ambulance: <strong>1669</strong>
          </li>
          <li>Stay calm, move to a well-lit public area, and contact your hotel if needed</li>
        </ul>
      </section>

      <p>
        See also:{" "}
        <Link href="/scams/" className="text-accent hover:underline">
          Common scams
        </Link>{" "}
        → /scams ·{" "}
        <Link href="/prices/" className="text-accent hover:underline">
          Prices
        </Link>{" "}
        → /prices
      </p>
    </PageShell>
  );
}
