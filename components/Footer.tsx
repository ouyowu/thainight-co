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
  { href: "/bangkok/tonight/", label: "Tonight Bangkok" },
  { href: "/pattaya/tonight/", label: "Tonight Pattaya" },
];

const legal = [
  { href: "/about/", label: "About" },
  { href: "/disclaimer/", label: "Disclaimer" },
  { href: "/affiliate-disclosure/", label: "Affiliate disclosure" },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-[#1c1c1c] text-zinc-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold text-white">Thai Night</p>
          <p className="mt-2 text-sm leading-6">
            Practical nightlife guides for Bangkok, Pattaya, Phuket and Chiang Mai.
          </p>
        </div>
        <div className="text-sm leading-7">
          {cities.map((item) => (
            <Link key={item.href} href={item.href} className="block hover:text-white">
              {item.label}
            </Link>
          ))}
          {guides.map((item) => (
            <Link key={item.href} href={item.href} className="block hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="text-sm leading-7">
          {legal.map((item) => (
            <Link key={item.href} href={item.href} className="block hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-6 text-sm leading-6 text-zinc-400 sm:px-6">
          © Thai Night. Legal drinking age in Thailand is 20. Information is for general guidance only and may change.
          Confirm prices and conditions locally. We are not responsible for third-party venues or services.
        </p>
      </div>
    </footer>
  );
}
