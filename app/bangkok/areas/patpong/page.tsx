import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { StayNearby } from "@/components/StayNearby";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { GuidePhoto } from "@/components/GuidePhoto";
import { photos } from "@/lib/photos";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Patpong Bangkok 2026 – Market, Bars & What to Skip",
  "Patpong in 2026: the Silom night market, casual bars, haggling, the sky bars nearby, how to get there, and the upstairs show scam to avoid.",
  "/bangkok/areas/patpong/",
);

export default function PatpongPage() {
  return (
    <PageShell
      path="/bangkok/areas/patpong/"
      title="Patpong Bangkok 2026"
      lead="Patpong is two short lanes off Silom, near Sala Daeng BTS and Silom MRT, best known today for its night market. Treat it as market, history and a casual drink, paired with a Silom dinner or a nearby sky bar."
    >
      <GuidePhoto {...photos.patpong} />

      <Section title="What’s there">
        <Bullets>
          <li>A night market down the middle of Patpong 1: souvenirs, copy goods, street food and T-shirts.</li>
          <li>Casual ground-floor bars and pubs around the market, plus Irish pubs and restaurants on Silom itself.</li>
          <li>Upstairs “show” rooms heavily associated with padded bills. Thai Night does not cover them.</li>
          <li>Silom Soi 4 and the surrounding lanes, a separate and more relaxed bar strip a short walk away.</li>
        </Bullets>
      </Section>

      <Section title="Is it worth going?">
        <p>
          <strong>Yes, if:</strong> you want the market, the story, or a short look after dinner in
          Silom. The market itself is genuinely busy and the lanes are easy to walk.
        </p>
        <p>
          <strong>No, if:</strong> you only have one night — a{" "}
          <A href="/bangkok/rooftop-bars/">rooftop</A> plus{" "}
          <A href="/bangkok/areas/soi-11/">Soi 11</A> is a stronger first night, and
          Patpong is a twenty-minute stop rather than an evening.
        </p>
      </Section>

      <Section title="Critical rule">
        <p>
          <strong>Never follow touts upstairs for “cheap shows.”</strong>
        </p>
        <p>
          The pattern is always the same: a flyer with a low price, a room upstairs, then a bill
          many times what was quoted and a doorway you have to pay to leave through. Confirm any
          drink price before you sit, pay round by round, and keep the slip. If a bill is wrong,
          call the Tourist Police on 1155 rather than arguing it out.
        </p>
      </Section>

      <Section title="What things cost">
        <PriceTable
          caption="Patpong and Silom 2026"
          headers={["Item", "Typical range"]}
          rows={[
            ["Beer, ground-floor bar", "120–220 THB"],
            ["Market T-shirt after haggling", "150–300 THB"],
            ["Street food plate", "60–150 THB"],
            ["Cocktail at a nearby sky bar", "500–900+ THB, plus ++"],
            ["Grab back to Sukhumvit", "100–200 THB"],
          ]}
        />
        <p className="text-sm text-muted">
          Checked October 2026 against venue listings and recent visitor reports. “++” adds 10%
          service and 7% VAT. Full table: <A href="/bangkok/prices/">Bangkok nightlife prices</A>.
        </p>
      </Section>

      <Section title="Haggling at the market">
        <Bullets>
          <li>First prices are high. Starting around half and settling near two-thirds is normal.</li>
          <li>Walking away genuinely works, and often produces a better price before you reach the next stall.</li>
          <li>Cash only, and small notes. Vendors are slow to change a 1,000.</li>
          <li>Everything here is sold elsewhere too. If the price is not right, nothing is lost.</li>
        </Bullets>
      </Section>

      <Section title="Getting there and home">
        <Bullets>
          <li>BTS Sala Daeng and MRT Silom are both at the top of the lanes, connected to each other.</li>
          <li>Arrive after 19:00 for market atmosphere; the stalls build through the evening.</li>
          <li>Sky Bar at lebua and Vertigo at Banyan Tree are a short Grab away for a view first.</li>
          <li>The trains stop around midnight. Use Grab or Bolt back to Sukhumvit if that is where you are staying.</li>
        </Bullets>
        <p>
          Fares: <A href="/bangkok/taxi-fare/">Bangkok taxi fares</A>.
        </p>
      </Section>

      <StayNearby label="Hotels in Bangkok" link="hotelBangkok">
        <p>
          Silom and Sathorn suit a market-and-rooftop night and sit on both train lines. Most
          nightlife visitors still base themselves on Sukhumvit.
        </p>
      </StayNearby>

      <FaqList
        items={[
          {
            q: "Is Patpong worth visiting in 2026?",
            a: "For the night market and a short look after dinner in Silom, yes. As a whole evening, Soi 11 or Thonglor is a better use of one night.",
          },
          {
            q: "What time does Patpong night market open?",
            a: "Stalls build through the evening; after 19:00 is when it feels busy.",
          },
          {
            q: "Is Patpong safe?",
            a: "The market and ground-floor bars are fine. The risk is financial: never follow a tout upstairs for a cheap show, and confirm drink prices before you sit.",
          },
          {
            q: "How do I get to Patpong?",
            a: "BTS Sala Daeng or MRT Silom, both at the top of the lanes. The trains stop around midnight, so plan a Grab home.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/bangkok/", label: "Bangkok" },
          { href: "/bangkok/areas/", label: "All Bangkok areas" },
          { href: "/bangkok/rooftop-bars/", label: "Rooftop bars" },
          { href: "/bangkok/night-markets/", label: "Night markets" },
          { href: "/scams/", label: "Common scams" },
        ]}
      />
    </PageShell>
  );
}
