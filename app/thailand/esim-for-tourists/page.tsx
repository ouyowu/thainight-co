import { BookingBox } from "@/components/BookingBox";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Thailand eSIM for Tourists 2026",
  "Tourist eSIM options for Thailand: Airalo and Nomad price ranges checked in October 2026, plus the existing Klook Thailand eSIM. Confirm the price on the seller page.",
  "/thailand/esim-for-tourists/",
);

export default function TouristEsimPage() {
  return (
    <PageShell
      path="/thailand/esim-for-tourists/"
      title="Thailand eSIM for Tourists (2026)"
      lead="Buy a travel eSIM before you fly, install it on Wi-Fi, and turn it on when you land. You need data for Grab, maps and hotel messages. Prices below are the sellers’ own USD lists on 14 October 2026."
    >
      <Section title="What to buy">
        <p>
          A Thailand-only travel eSIM is the straightforward choice for this trip. It is data for
          your phone, not a new phone number, and you keep your home SIM in the phone for calls and
          bank texts. Set the travel line as the data line, and turn data roaming on for that line
          only.
        </p>
        <Bullets>
          <li>The phone has to be unlocked and eSIM-compatible. Check that on the seller’s device list before you pay.</li>
          <li>Install the QR code while you still have Wi-Fi. Airport arrivals are a bad place to discover the install failed.</li>
          <li>A small plan covers maps, chat and ride-hailing. Video and hotspot use burn a 1 GB plan quickly; step up to a 10 GB plan if that is your habit.</li>
          <li>Regional Asia plans exist if you are continuing past Thailand. They are a different product from the Thailand prices in the table.</li>
        </Bullets>
      </Section>

      <Section title="Published prices, 14 October 2026">
        <PriceTable
          caption="Airalo and Nomad Thailand eSIM prices"
          headers={["Plan", "Airalo", "Nomad"]}
          rows={[
            ["Small short plan", "1 GB / 3 days, US$4", "1 GB / 7 days, US$5"],
            ["A few gigabytes", "3 GB / 7 days, US$6; 5 GB / 7 days, US$7", "3 GB / 30 days, US$6; 5 GB / 30 days, US$8"],
            ["10 GB", "US$10 for 7 days; US$10.50 for 15 days; US$11 for 30 days", "US$10 for 30 days"],
            ["Unlimited, 10 days", "US$31", "US$15, marked on sale"],
            ["Larger bundle", "50 GB / 30 days, US$27.50", "50 GB / 10 days, US$15"],
          ]}
        />
        <p className="text-sm text-muted">
          Airalo figures are from the Thailand eSIM store (fixed-data list and the unlimited list)
          at airalo.com/thailand-esim. Nomad figures are from the Thailand plan list at
          nomadesim.com/thailand-eSIM. Both change. Confirm on the seller page before you pay.
          Airalo’s unlimited 3-day plan was US$9.50 on the same page; it is left out of the table
          because Nomad did not list a matching 3-day unlimited price.
        </p>
      </Section>

      <BookingBox
        title="Klook Thailand eSIM"
        items={[{ label: "Thailand eSIM on Klook", link: "esim" }]}
      />
      <p>
        That button uses the Klook Thailand eSIM already configured on this site. We did not copy a
        Klook dollar price into the table, because the public activity page did not show a stable
        figure in this check. Read the price on Klook and compare it with the Airalo and Nomad
        rows above.
      </p>

      <Section title="At the airport">
        <p>
          A carrier counter in arrivals still sells a physical tourist SIM. This page has no price
          for that, so compare the board with your eSIM rather than guessing. You need the data
          line working before you request a Grab. Airport rides:{" "}
          <A href="/bangkok/airport/">Bangkok</A>, <A href="/pattaya/airport/">Pattaya</A>,{" "}
          <A href="/phuket/airport-to-patong-taxi-price/">Phuket</A>.
        </p>
      </Section>

      <Section title="Avoid">
        <Bullets>
          <li>Leaving the home SIM as the data line. That is how a roaming bill happens.</li>
          <li>Buying a second eSIM at the curb because the first one is “not working” before you have toggled the line and data roaming.</li>
          <li>Assuming hotspot is included. Neither price list we used stated a hotspot allowance, so check the plan page.</li>
        </Bullets>
      </Section>

      <FaqList
        items={[
          {
            q: "How much is a Thailand eSIM in 2026?",
            a: "On 14 October 2026, Airalo listed 1 GB for 3 days at US$4 and 10 GB for 30 days at US$11. Nomad listed 1 GB for 7 days at US$5 and 10 GB for 30 days at US$10. Confirm on the seller page.",
          },
          {
            q: "Should I buy the eSIM before I fly?",
            a: "Yes. Install it on Wi-Fi at home or in the departure airport, then turn the line on after you land.",
          },
          {
            q: "Can I keep my normal phone number?",
            a: "Yes. Leave the home SIM installed for calls and texts, and set the travel eSIM as the line used for mobile data.",
          },
          {
            q: "Is there a Klook eSIM?",
            a: "Yes. Thai Night already links a Klook Thailand eSIM. Compare that checkout price with Airalo and Nomad before you pay.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/cash/", label: "Cash and payments" },
          { href: "/bangkok/airport/", label: "Bangkok airport" },
          { href: "/phuket/getting-around/", label: "Getting around Phuket" },
          { href: "/thailand/alcohol-ban-days-2026/", label: "Alcohol ban days 2026" },
        ]}
      />
    </PageShell>
  );
}
