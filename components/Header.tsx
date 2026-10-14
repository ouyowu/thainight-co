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
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  function onSearch(event: FormEvent) {
    event.preventDefault();
    const q = query.trim();
    setMenuOpen(false);
    setSearchOpen(false);
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
      <div className="border-b border-zinc-100 text-xs text-zinc-500">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 sm:px-6">
          <p>Practical nightlife guides · English</p>
          <Link href="/about/" className="hover:text-foreground">
            About
          </Link>
        </div>
      </div>
      <header className="border-b border-zinc-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
          <Link href="/" className="shrink-0 leading-none">
            <span className="text-2xl font-bold tracking-tight text-foreground">Thai Night</span>
            <span className="script-face ml-1 text-xl text-accent">guides</span>
          </Link>
          <nav aria-label="Primary" className="hidden items-center gap-6 text-[13px] font-medium tracking-wide xl:flex">
            {nav.map((item) => {
              const here = pathname.endsWith("/") ? pathname : `${pathname}/`;
              const active = item.href === "/" ? here === "/" : here === item.href || here.startsWith(item.href);
              return (
                <Link key={item.href} href={item.href} className={active ? "text-accent" : "hover:text-accent"}>
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="border border-zinc-200 px-3 py-2 text-sm"
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen((open) => !open)}
            >
              Search
            </button>
            <Link href="/bangkok/first-timer/" className="hidden bg-accent px-4 py-2 text-sm font-semibold text-white sm:inline-block">
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
        {searchOpen ? (
          <form onSubmit={onSearch} className="border-t border-zinc-100 px-4 py-3 sm:px-6" role="search">
            <div className="mx-auto flex max-w-6xl">
              <label className="sr-only" htmlFor="site-search">
                Search guides
              </label>
              <input
                id="site-search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search guides"
                className="min-w-0 flex-1 border border-zinc-200 px-3 py-3 text-base outline-none focus:border-accent"
              />
              <button type="submit" className="bg-accent px-5 py-3 text-sm font-semibold text-white">
                Search
              </button>
            </div>
          </form>
        ) : null}
        {menuOpen ? (
          <nav aria-label="Mobile" className="grid gap-1 border-t border-zinc-100 px-4 py-3 text-sm xl:hidden">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="py-2" onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/bangkok/first-timer/" className="py-2 font-semibold text-accent" onClick={() => setMenuOpen(false)}>
              First-timer guide
            </Link>
          </nav>
        ) : null}
      </header>
    </div>
  );
}
