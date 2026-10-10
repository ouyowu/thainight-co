import Link from "next/link";

export function PattayaTonightNotes() {
  return (
    <section>
      <h2 className="text-lg font-semibold text-foreground">Recent notes (visitor discussions)</h2>
      <p className="mt-2 text-sm text-muted">
        <span className="font-semibold text-foreground">Last checked:</span> October 2026
      </p>
      <p className="mt-3">
        Based on recent public discussions (mainly r/Pattaya). Not a complete survey — treat as
        signals, then confirm on the ground.
      </p>

      <h3 className="mt-6 text-base font-semibold text-foreground">
        Soi 6: drink minimums at some bars
      </h3>
      <p className="mt-2">
        Several reports mention certain bar groups on Soi 6 asking for a{" "}
        <strong>minimum number of lady drinks</strong> before a short-time / upstairs arrangement
        (examples cited include 5+ drinks, and in some cases higher).
      </p>
      <p className="mt-3">
        <strong>Practical takeaway:</strong>
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-5">
        <li>
          Ask clearly <em>before</em> sitting down or ordering rounds: room fee, girl’s fee, and
          whether there is any drink minimum.
        </li>
        <li>
          If the total doesn’t make sense, walk to another bar. Open-front bars without minimums are
          still commonly mentioned as the simpler option.
        </li>
        <li>
          Typical “no-minimum” style numbers still quoted by experienced visitors: room fee often in
          the low hundreds of baht range, girl’s ST fee often discussed around 1,000–2,000 THB
          depending on the person and situation — but always confirm live.
        </li>
      </ul>

      <h3 className="mt-6 text-base font-semibold text-foreground">Why this matters</h3>
      <p className="mt-2">
        Soi 6 used to be widely described as the most straightforward, low-drama short-time street.
        Some ownership groups appear to be pushing more aggressive drink rules. That doesn’t mean
        the whole street is the same — it means{" "}
        <strong>you should verify the rules of the specific bar</strong> instead of assuming old
        averages.
      </p>

      <h3 className="mt-6 text-base font-semibold text-foreground">Still valid general rules</h3>
      <ul className="mt-2 list-disc space-y-1 pl-5">
        <li>Confirm every number out loud before anything starts.</li>
        <li>Pay round by round when possible.</li>
        <li>
          Walking Street remains the higher-price, higher-spectacle option; Soi 6 remains the more
          direct daytime/early-evening option <em>if</em> you pick the right bar.
        </li>
      </ul>

      <p className="mt-3">
        <Link href="/pattaya/areas/soi-6/" className="text-accent hover:underline">
          Full Soi 6 guide
        </Link>
        {" ; "}
        <Link href="/prices/" className="text-accent hover:underline">
          Full prices page
        </Link>
        {" ; "}
        <Link href="/scams/" className="text-accent hover:underline">
          Scams & pitfalls
        </Link>
      </p>
    </section>
  );
}
