import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { HotelsNearBlock } from "@/components/HotelsNearBlock";
import { affiliates } from "@/lib/affiliates";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Bangkok Nightlife First-Timer Guide 2026",
  "Step-by-step first night plan for Bangkok. Soi Cowboy vs Nana Plaza, current prices, bar fine rules and practical tips for 2026.",
  "/bangkok/first-timer/",
);

export default function BangkokFirstTimerPage() {
  return (
    <PageShell title="Bangkok Nightlife First-Timer Guide (2026)">
      <section>
        <h2 className="text-lg font-semibold text-foreground">Quick Answer</h2>
        <p className="mt-2">
          If it’s your first night and you want the easiest start → Soi Cowboy. If you want more
          variety and bigger shows → Nana Plaza. Do both on different nights if you have time.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">The Three Main Areas</h2>
        <div className="mt-3">
          <PriceTable
            caption="The Three Main Areas"
            headers={["Area", "Best for", "What it is", "First-timer"]}
            rows={[
              ["Soi Cowboy", "First night, low stress", "Open-air street, easy to walk", "★★★★★"],
              ["Nana Plaza", "Variety & shows", "3-floor complex, denser", "★★★★"],
              ["Patpong", "Curiosity only", "Tourist market + older bars", "★★"],
            ]}
          />
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Recommended First Night Plan</h2>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>Arrive around 21:00–21:30</li>
          <li>Start on Soi Cowboy (between Sukhumvit Soi 21–23, near BTS Asok)</li>
          <li>Walk the whole street once before sitting down</li>
          <li>Have 1–2 beers, watch the scene</li>
          <li>
            If you like it, stay. If you want more options, take a short taxi or walk to Nana Plaza
            (Sukhumvit Soi 4)
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">2026 Price Range (Go-Go Bars)</h2>
        <div className="mt-3">
          <PriceTable
            caption="2026 Price Range (Go-Go Bars)"
            headers={["Item", "Price"]}
            rows={[
              ["Beer", "150–200 THB"],
              ["Lady drink", "200–260 THB"],
              ["Bar fine (ST)", "800–1,200 THB"],
              ["Girl’s short-time fee", "2,500–4,000 THB"],
              ["Full night (drinks + bar fine + ST)", "4,000–7,000+ THB"],
            ]}
          />
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Important</h2>
        <p className="mt-2">
          Bar fine = paid to the bar so she can leave. Her fee = negotiated directly with her.
          Always confirm both numbers before you leave the bar.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Simple Rules</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Pay round by round when possible</li>
          <li>Never follow street touts upstairs for “cheap shows”</li>
          <li>Agree prices out loud</li>
          <li>Keep your phone and wallet secure</li>
          <li>Use Grab or Bolt instead of random taxis late at night</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Where to Stay</h2>
        <p className="mt-2">
          Stay near BTS Nana or BTS Asok. You can walk or take a 5–10 minute ride to the main areas.
        </p>
      </section>

      <HotelsNearBlock href={affiliates.hotelBangkok} cta="Check hotels near BTS Nana / Asok" />
    </PageShell>
  );
}
