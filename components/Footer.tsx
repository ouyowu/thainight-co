import Link from "next/link";

const cities = [
  { href: "/bangkok/", label: "Bangkok" },
  { href: "/pattaya/", label: "Pattaya" },
  { href: "/phuket/", label: "Phuket" },
  { href: "/chiang-mai/", label: "Chiang Mai" },
];

const guides = [
  { href: "/prices/", label: "Prices" },
  { href: "/budgets/", label: "Budgets" },
  { href: "/cash/", label: "Cash" },
  { href: "/safety/", label: "Safety" },
  { href: "/scams/", label: "Scams" },
];

const legal = [
  { href: "/about/", label: "About" },
  { href: "/disclaimer/", label: "Disclaimer" },
  { href: "/affiliate-disclosure/", label: "Affiliate disclosure" },
  { href: "/bangkok/hotels-nana-asok/", label: "Where to stay" },
  { href: "/bangkok/tonight/", label: "Tonight Bangkok" },
  { href: "/pattaya/tonight/", label: "Tonight Pattaya" },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-[#1b1b1b] text-zinc-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-lg font-semibold text-white">
            Thai Night <span className="script-face text-accent">guides</span>
          </p>
          <p className="mt-4 text-sm leading-7">
            Practical nightlife guides for Bangkok, Pattaya, Phuket and Chiang Mai.
          </p>
        </div>
        <LinkColumn title="Cities" links={cities} />
        <LinkColumn title="Guides" links={guides} />
        <LinkColumn title="About" links={legal} />
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-sm leading-6 text-zinc-400 sm:px-6">
          © Thai Night. Legal drinking age in Thailand is 20. Information is for general guidance only and may change.
          Confirm prices and conditions locally. We are not responsible for third-party venues or services.
        </p>
      </div>
    </footer>
  );
}

function LinkColumn({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h2 className="mb-4 border-b border-white/15 pb-2 text-base font-semibold text-white">{title}</h2>
      <ul className="space-y-2 text-sm">
        {links.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
