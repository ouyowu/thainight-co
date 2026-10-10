import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { GuidePhoto } from "@/components/GuidePhoto";
import { photos } from "@/lib/photos";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Patpong Bangkok 2026 – Market, Bars & What to Skip",
  "Patpong in 2026: the Silom night market, casual bars, nearby sky bars and the upstairs show scam to avoid.",
  "/bangkok/areas/patpong/",
);

export default function PatpongPage() {
  return (
    <PageShell path="/bangkok/areas/patpong/" title="Patpong Bangkok 2026">
      <GuidePhoto {...photos.patpong} />
      <p>
        Patpong is two short lanes off Silom, near Sala Daeng BTS / Silom MRT, best known today
        for its <strong>night market</strong>. Treat it as market + history + a casual drink, and
        pair it with a Silom dinner or a nearby sky bar.
      </p>

      <section>
        <h2 className="text-lg font-semibold text-foreground">What’s there</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Night market down the middle of Patpong 1 (souvenirs, street food, tourist goods)</li>
          <li>Casual ground-floor bars and pubs around the market</li>
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
          <strong>No, if:</strong> you only have one night — a{" "}
          <Link href="/bangkok/rooftop-bars/" className="text-accent hover:underline">
            rooftop
          </Link>{" "}
          plus Soi 11 is a stronger first night.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Critical rule</h2>
        <p className="mt-2">
          <strong>Never follow touts upstairs for “cheap shows.”</strong>
        </p>
        <p className="mt-2">
          Confirm any drink price before you sit. Pay round by round. Upstairs rooms are where
          the classic bill scams concentrate; Thai Night does not cover them.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Practical tips</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Arrive after 19:00 for market atmosphere</li>
          <li>Sky Bar (lebua) and Vertigo (Banyan Tree) are a short Grab away for a view first</li>
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
