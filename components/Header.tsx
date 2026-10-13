"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
import { searchGuides } from "@/lib/demo-guides";

const nav = [
  { href: "/", label: "Home" },
  { href: "/bangkok/", label: "Bangkok" },
  { href: "/pattaya/", label: "Pattaya" },
  { href: "/phuket/", label: "Phuket" },
  { href: "/chiang-mai/", label: "Chiang Mai" },
  { href: "/prices/", label: "Prices" },
  { href: "/safety/", label: "Safety" },
  { href: "/scams/", label: "Scams" },
];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");

  function onSearch(event: FormEvent) {
    event.preventDefault();
    const q = query.trim();
    setMenuOpen(false);
    if (!q) {
      router.push("/#listings");
      return;
    }
    const hits = searchGuides(q);
    if (hits.length === 1) {
      router.push(hits[0].href);
      return;
    }
    router.push(`/?q=${encodeURIComponent(q)}#listings`);
  }

  return (
    <div className="sticky top-0 z-40 bg-white">
      <div className="border-b border-zinc-100 text-xs text-zinc-500 sm:text-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 sm:px-6">
          <p>Practical nightlife guides · English</p>
          <Link href="/about/" className="hover:text-foreground">
            About
          </Link>
        </div>
      </div>
      <header className="border-b border-zinc-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/" className="leading-none">
            <span className="text-xl font-bold tracking-tight text-foreground">Thai Night</span>
            <span className="script-face ml-1 text-lg text-accent">guides</span>
          </Link>
          <nav aria-label="Primary" className="hidden items-center gap-5 text-sm xl:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-accent"
                style={pathname === item.href ? { color: "#ff4b6e" } : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <form onSubmit={onSearch} className="hidden items-center sm:flex" role="search">
              <label className="sr-only" htmlFor="site-search">
                Search guides
              </label>
              <input
                id="site-search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search guides"
                className="w-36 border border-zinc-200 px-3 py-2 text-sm outline-none focus:border-accent lg:w-44"
              />
              <button type="submit" className="bg-accent px-3 py-2 text-sm font-semibold text-white">
                Search
              </button>
            </form>
            <Link href="/bangkok/first-timer/" className="hidden bg-accent px-4 py-2 text-sm font-semibold text-white lg:inline-block">
              First-timer guide
            </Link>
            <button
              type="button"
              className="border border-zinc-200 px-3 py-2 text-sm xl:hidden"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              Menu
            </button>
          </div>
        </div>
        {menuOpen ? (
          <div className="border-t border-zinc-100 px-4 py-3 xl:hidden">
            <form onSubmit={onSearch} className="mb-3 flex sm:hidden" role="search">
              <label className="sr-only" htmlFor="site-search-mobile">
                Search guides
              </label>
              <input
                id="site-search-mobile"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search guides"
                className="min-w-0 flex-1 border border-zinc-200 px-3 py-2 text-sm outline-none focus:border-accent"
              />
              <button type="submit" className="bg-accent px-3 py-2 text-sm font-semibold text-white">
                Search
              </button>
            </form>
            <nav aria-label="Mobile" className="grid gap-1 text-sm">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} className="py-2" onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
              ))}
              <Link href="/bangkok/first-timer/" className="py-2 font-semibold text-accent" onClick={() => setMenuOpen(false)}>
                First-timer guide
              </Link>
            </nav>
          </div>
        ) : null}
      </header>
    </div>
  );
}
