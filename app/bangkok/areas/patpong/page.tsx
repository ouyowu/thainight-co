import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Patpong Bangkok 2026 – Market, Bars & What to Skip",
  "Honest 2026 take on Patpong: night market, remaining go-go bars, and the upstairs show scam to avoid.",
  "/bangkok/areas/patpong/",
);

export default function PatpongPage() {
  return (
    <PageShell title="Patpong Bangkok 2026">
      <p>
        Patpong is Bangkok’s original red-light district (two short lanes off Silom, near Sala Daeng
        BTS / Silom MRT). In 2026 it is <strong>much smaller</strong> than Nana or Soi Cowboy for
        go-go — better treated as market + history + a low-pressure drink, not the main go-go night.
      </p>

      <section>
        <h2 className="text-lg font-semibold text-foreground">What’s there</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Night market down the middle of Patpong 1 (souvenirs, street food, tourist goods)</li>
          <li>
            A reduced number of ground-floor go-go bars (roughly a dozen or fewer, down from decades
            ago)
          </li>
          <li>
            Upstairs “show” rooms heavily associated with <strong>padded bills</strong>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Is it worth going?</h2>
        <p className="mt-2">
          <strong>Yes, if:</strong> you want the market, the story, or a short look after dinner in
          Silom.
        </p>
        <p className="mt-2">
          <strong>No, if:</strong> you only have one night and want the strongest current go-go
          scene → go{" "}
          <Link href="/bangkok/areas/soi-cowboy/" className="text-accent hover:underline">
            <strong>Soi Cowboy</strong>
          </Link>{" "}
          or{" "}
          <Link href="/bangkok/areas/nana-plaza/" className="text-accent hover:underline">
            <strong>Nana Plaza</strong>
          </Link>{" "}
          instead.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Critical rule</h2>
        <p className="mt-2">
          <strong>Never follow touts upstairs for “ping-pong / cheap show.”</strong>
        </p>
        <p className="mt-2">
          Confirm any drink price before you sit. Pay round by round. Ground-floor bars are
          generally the safer read; upstairs is where classic bill scams concentrate.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Practical tips</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Arrive after 19:00 for market atmosphere</li>
          <li>Keep expectations modest on bar scale</li>
          <li>Use Grab/Bolt back to Sukhumvit if that’s where you’re staying</li>
        </ul>
      </section>

      <p>
        Links:{" "}
        <Link href="/scams/" className="text-accent hover:underline">
          Scams
        </Link>
        ,{" "}
        <Link href="/bangkok/" className="text-accent hover:underline">
          Bangkok overview
        </Link>
        ,{" "}
        <Link href="/bangkok/first-timer/" className="text-accent hover:underline">
          First-timer guide
        </Link>
      </p>
    </PageShell>
  );
}
