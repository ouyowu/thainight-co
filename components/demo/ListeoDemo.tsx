"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { GuideMedia, PhotoCredit } from "@/components/demo/GuideMedia";
import { HotelBand } from "@/components/demo/HotelBand";
import { useGuideFilter } from "@/components/demo/useGuideFilter";
import { demoCategories, demoCities, demoGuides, guidesIn, type DemoGuide } from "@/lib/demo-guides";

const red = "#f91942";

const headerLinks = [
  { href: "/prices/", label: "Prices" },
  { href: "/safety/", label: "Safety" },
  { href: "/demo/urbango/", label: "Other layout" },
];

const spotlight: { category: string; href: string; points: string[] }[] = [
  {
    category: "Rooftops",
    href: "/bangkok/rooftop-bars/",
    points: ["Sky Bar, Vertigo, Sky Beach, Octave and Spectrum", "Nearest BTS, dress codes and hours", "What a drink costs, then confirm on the spot"],
  },
  {
    category: "Shows",
    href: "/pattaya/cabaret-shows/",
    points: ["Tiffany’s and Alcazar seat prices", "Calypso at Asiatique and Simon Cabaret in Patong", "Show times and where to book"],
  },
  {
    category: "Night markets",
    href: "/bangkok/night-markets/",
    points: ["Jodd Fairs, Asiatique, Rot Fai and Patpong", "Chiang Mai Sunday and Saturday walking streets", "Phuket Old Town, Naka and Chillva"],
  },
  {
    category: "Taxis",
    href: "/bangkok/airport-to-sukhumvit-taxi-price/",
    points: ["Airport to Sukhumvit meter, surcharge and tolls", "Suvarnabhumi to Pattaya, including the 139 THB bus", "Phuket airport to Patong"],
  },
];

export function ListeoDemo() {
  const filter = useGuideFilter(demoGuides);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [spot, setSpot] = useState(0);
  const row = useRef<HTMLDivElement>(null);
  const active = spotlight[spot];
  const activeGuide = demoGuides.find((guide) => guide.href === active.href) as DemoGuide;
  const featured = [
    demoGuides.find((guide) => guide.href === "/bangkok/rooftop-bars/"),
    demoGuides.find((guide) => guide.href === "/pattaya/cabaret-shows/"),
    demoGuides.find((guide) => guide.href === "/bangkok/muay-thai/"),
  ].filter((guide): guide is DemoGuide => Boolean(guide));

  function scrollRow(direction: number) {
    row.current?.scrollBy({ left: direction * 280, behavior: "smooth" });
  }

  return (
    <div className="bg-white text-[#222]">
      <header className="sticky top-0 z-40 border-b border-zinc-100 bg-white">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
          <a href="/demo/listeo/" className="flex shrink-0 items-center gap-2">
            <Pin />
            <span className="text-lg font-semibold tracking-tight">Thai Night</span>
          </a>
          <form onSubmit={filter.applySearch} className="ml-auto hidden min-w-0 flex-1 items-center rounded-full border border-zinc-200 bg-zinc-50 pl-2 pr-1 lg:flex">
            <SearchFields filter={filter} />
            <button type="submit" className="my-1 rounded-full px-5 py-2 text-sm font-semibold text-white" style={{ background: red }}>
              Search
            </button>
          </form>
          <div className="ml-auto flex items-center gap-2 lg:ml-3">
            <a href="/prices/" className="hidden rounded-full border border-zinc-200 px-4 py-2 text-sm sm:inline-block">
              Prices
            </a>
            <a href="/safety/" className="hidden rounded-full px-4 py-2 text-sm font-semibold text-white sm:inline-block" style={{ background: red }}>
              Safety
            </a>
            <button
              type="button"
              className="rounded-full border border-zinc-200 p-2 lg:hidden"
              aria-label="Open search"
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen((open) => !open)}
            >
              <SearchIcon />
            </button>
            <button
              type="button"
              className="rounded-full border border-zinc-200 px-3 py-2 text-sm lg:hidden"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              Menu
            </button>
          </div>
        </div>
        {searchOpen ? (
          <form onSubmit={filter.applySearch} className="grid gap-2 border-t border-zinc-100 px-4 py-3 lg:hidden">
            <input
              value={filter.query}
              onChange={(event) => filter.setQuery(event.target.value)}
              placeholder="Search guides"
              className="w-full rounded-full border border-zinc-200 px-4 py-3 text-base"
            />
            <div className="grid grid-cols-2 gap-2">
              <CitySelect filter={filter} />
              <CategorySelect filter={filter} />
            </div>
            <button type="submit" className="rounded-full py-3 text-sm font-semibold text-white" style={{ background: red }}>
              Search
            </button>
          </form>
        ) : null}
        {menuOpen ? (
          <nav aria-label="Demo" className="grid border-t border-zinc-100 px-4 py-2 text-sm lg:hidden">
            {headerLinks.map((item) => (
              <a key={item.href} href={item.href} className="py-2">
                {item.label}
              </a>
            ))}
            <Link href="/" className="py-2">
              Live homepage
            </Link>
          </nav>
        ) : null}
      </header>

      <section className="relative overflow-hidden px-4 pb-8 pt-12 sm:pt-16">
        <div className="pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full bg-zinc-100" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Your guide to <span className="underline decoration-[#f91942] decoration-4 underline-offset-4" style={{ color: red }}>nightlife</span>
          </h1>
          <p className="mt-3 text-2xl text-zinc-500 sm:text-4xl">Bangkok, Pattaya, Phuket, Chiang Mai</p>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-zinc-500">
            Rooftops, cabaret and show prices, taxi ranges, night markets, safety and first-timer plans. Real pages already on Thai Night.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="/bangkok/first-timer/" className="rounded-full px-6 py-3 text-sm font-semibold text-white" style={{ background: red }}>
              Bangkok first-timer
            </a>
            <a href="/pattaya/first-timer/" className="rounded-full bg-[#ffe8ee] px-6 py-3 text-sm font-semibold" style={{ color: red }}>
              Pattaya first-timer
            </a>
          </div>
        </div>
        <div className="relative mx-auto mt-10 max-w-6xl">
        <div ref={row} className="flex gap-3 overflow-x-auto pb-2">
          {demoGuides
            .filter((guide) => guide.image)
            .slice(0, 8)
            .map((guide) => (
              <a key={guide.href} href={guide.href} className="relative h-36 w-44 shrink-0 overflow-hidden rounded-2xl sm:h-40 sm:w-52">
                <div className="absolute inset-0">
                  <GuideMedia guide={guide} className="h-full" sizes="208px" />
                </div>
                <span className="absolute bottom-3 left-3 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white">{guide.title}</span>
              </a>
            ))}
        </div>
          <button
            type="button"
            aria-label="Show more guide photos"
            onClick={() => scrollRow(1)}
            className="absolute right-0 top-1/2 hidden h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-zinc-200 bg-white shadow sm:grid"
          >
            →
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="text-center text-3xl font-semibold">Browse by category</h2>
        <div className="mx-auto mt-3 h-0.5 w-10" style={{ background: red }} />
        <p className="mt-3 text-center text-zinc-500">Guides already published for each topic</p>
        <div className="mt-8">
          <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {["Rooftops", "Shows", "Night markets", "Taxis"].map((category) => {
              const count = demoGuides.filter((guide) => guide.category === category).length;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    filter.setCategory(category);
                    document.getElementById("listings")?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="flex items-center justify-between rounded-xl border border-zinc-100 px-4 py-3 text-left hover:border-[#f91942]"
                >
                  <span>
                    <span className="block font-semibold">{category}</span>
                    <span className="text-sm text-zinc-500">
                      {count} {count === 1 ? "guide" : "guides"}
                    </span>
                  </span>
                  <span className="grid h-8 w-8 place-items-center rounded-md border border-zinc-200 text-zinc-500">→</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fa] py-12">
        <div className="mx-auto grid max-w-6xl gap-3 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {demoCities.map((city) => {
            const sample = guidesIn(city)[0];
            return (
              <a key={city} href={sample.href} className="relative h-40 overflow-hidden rounded-2xl text-white">
                <div className="absolute inset-0">
                  <GuideMedia guide={sample} className="h-full" sizes="(max-width: 640px) 100vw, 25vw" />
                </div>
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative flex h-full flex-col justify-end p-4">
                  <p className="text-xl font-semibold">{city}</p>
                  <p className="text-sm">{guidesIn(city).length} guides</p>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-3xl font-semibold">Everything you need before you go</h2>
        <div className="mx-auto mt-3 h-0.5 w-10" style={{ background: red }} />
        <p className="mt-3 text-center text-zinc-500">City, category and the short description from the guide itself.</p>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {prep.map((item) => (
            <a key={item.href} href={item.href} className="rounded-2xl border border-zinc-100 p-5 hover:border-[#f91942]">
              <span className="grid h-12 w-12 place-items-center rounded-full text-lg" style={{ background: item.tint }}>
                {item.mark}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">{item.body}</p>
            </a>
          ))}
        </div>
      </section>

      <section id="listings" className="scroll-mt-24 bg-[#fafafa] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-semibold">Guides to open</h2>
          <div className="mx-auto mt-3 h-0.5 w-10" style={{ background: red }} />
          <p className="mt-3 text-center text-zinc-500">A guide site, not a merchant directory.</p>
          {filter.filtered.length === 0 ? (
            <div className="mx-auto mt-8 max-w-xl rounded-2xl bg-white p-6 text-sm leading-6 shadow-sm">
              <p>No guide matches that search. Open a city instead:</p>
              <ul className="mt-3 space-y-1">
                {demoCities.map((city) => (
                  <li key={city}>
                    <a href={guidesIn(city)[0].href} className="font-semibold underline" style={{ color: red }}>
                      {city}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filter.filtered.map((guide) => (
                <article key={guide.href} className="overflow-hidden rounded-2xl bg-white shadow-sm">
                  <a href={guide.href} className="block">
                    <div className="relative">
                      <GuideMedia guide={guide} className="h-48" sizes="(max-width: 768px) 100vw, 33vw" />
                      <span className="absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ background: red }}>
                        {guide.category}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold leading-snug">{guide.title}</h3>
                      <p className="mt-1 text-sm text-zinc-500">{guide.city}</p>
                      <p className="mt-3 text-sm leading-6 text-zinc-600">{guide.description}</p>
                      <p className="mt-4 text-sm font-semibold" style={{ color: red }}>
                        Open guide
                      </p>
                    </div>
                  </a>
                  <div className="px-4 pb-4">
                    <PhotoCredit guide={guide} />
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl font-semibold leading-tight">
            Start with a plan,{" "}
            <span className="underline decoration-[#f91942] decoration-4 underline-offset-4" style={{ color: red }}>
              then confirm it
            </span>
          </h2>
          <p className="mt-4 text-zinc-500">
            The live homepage stays as it is. This page only restyles links to guides that already exist.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {["Confirm the price before you order", "Use a meter, Grab or the published bus fare", "Read the first-timer guide for the city you land in"].map(
              (item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#ffe8ee] text-xs" style={{ color: red }}>
                    ✓
                  </span>
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>
        <div>
          <div className="overflow-hidden rounded-[40%_60%_55%_45%] bg-zinc-100">
            <GuideMedia guide={activeGuide} className="h-80" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
          <PhotoCredit guide={activeGuide} />
        </div>
      </section>

      <section className="bg-[#fff8f2] py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex gap-2 overflow-x-auto pb-4">
            {spotlight.map((item, index) => (
              <button
                key={item.category}
                type="button"
                onClick={() => setSpot(index)}
                className="shrink-0 rounded-xl px-4 py-3 text-sm font-semibold"
                style={index === spot ? { background: "#ffe8ee", color: red } : { color: "#666" }}
              >
                {item.category}
              </button>
            ))}
          </div>
          <div className="grid items-center gap-6 overflow-hidden rounded-3xl bg-[#fff1e4] p-4 md:grid-cols-2 md:p-6">
            <div className="rounded-2xl bg-white p-6">
              <h3 className="text-3xl font-semibold">{active.category}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">{activeGuide.description}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {active.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span style={{ color: red }}>✓</span>
                    {point}
                  </li>
                ))}
              </ul>
              <a href={active.href} className="mt-5 inline-flex rounded-full px-5 py-2 text-sm font-semibold text-white" style={{ background: red }}>
                Open guide
              </a>
            </div>
            <GuideMedia guide={activeGuide} className="h-64 rounded-2xl md:h-80" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <PhotoCredit guide={activeGuide} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-3xl font-semibold">Start here</h2>
        <div className="mx-auto mt-3 h-0.5 w-10" style={{ background: red }} />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {featured.map((guide) => (
            <a key={guide.href} href={guide.href} className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm hover:border-[#f91942]">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">{guide.category}</p>
              <h3 className="mt-2 text-lg font-semibold">{guide.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">{guide.description}</p>
              <p className="mt-4 text-sm text-zinc-400">{guide.city}</p>
            </a>
          ))}
        </div>
      </section>

      <HotelBand />

      <footer className="border-t border-zinc-100">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 text-sm sm:px-6 md:grid-cols-3">
          <div>
            <p className="flex items-center gap-2 text-base font-semibold text-[#222]">
              <Pin /> Thai Night
            </p>
            <p className="mt-2 leading-6 text-zinc-500">Directory-style demo. Listings are existing guides.</p>
          </div>
          <div className="leading-7">
            {demoCities.map((city) => (
              <a key={city} href={guidesIn(city)[0].href} className="block hover:underline">
                {city}
              </a>
            ))}
          </div>
          <div className="leading-7">
            <Link href="/" className="block hover:underline">
              Live homepage
            </Link>
            <a href="/demo/urbango/" className="block hover:underline">
              Other layout demo
            </a>
            <a href="/disclaimer/" className="block hover:underline">
              Disclaimer
            </a>
            <a href="/affiliate-disclosure/" className="block hover:underline">
              Affiliate disclosure
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

type Filter = ReturnType<typeof useGuideFilter>;

function SearchFields({ filter }: { filter: Filter }) {
  return (
    <>
      <label className="flex min-w-0 flex-1 items-center gap-2 px-2 text-sm text-zinc-500">
        <span aria-hidden>✦</span>
        <input
          value={filter.query}
          onChange={(event) => filter.setQuery(event.target.value)}
          placeholder="Search guides"
          className="w-full bg-transparent py-3 text-base text-[#222] outline-none"
        />
      </label>
      <span className="hidden h-6 w-px bg-zinc-200 sm:block" />
      <label className="hidden items-center gap-2 px-3 text-sm text-zinc-500 xl:flex">
        <Pin small />
        <CitySelect filter={filter} bare />
      </label>
      <span className="hidden h-6 w-px bg-zinc-200 xl:block" />
      <label className="hidden min-w-[140px] px-3 xl:block">
        <CategorySelect filter={filter} bare />
      </label>
    </>
  );
}

function CitySelect({ filter, bare = false }: { filter: Filter; bare?: boolean }) {
  return (
    <select
      aria-label="City"
      value={filter.city}
      onChange={(event) => filter.setCity(event.target.value)}
      className={bare ? "bg-transparent py-3 text-base text-[#222] outline-none" : "w-full rounded-full border border-zinc-200 bg-white px-3 py-3 text-base"}
    >
      <option value="All">All cities</option>
      {demoCities.map((city) => (
        <option key={city}>{city}</option>
      ))}
    </select>
  );
}

function CategorySelect({ filter, bare = false }: { filter: Filter; bare?: boolean }) {
  return (
    <select
      aria-label="Category"
      value={filter.category}
      onChange={(event) => filter.setCategory(event.target.value)}
      className={bare ? "w-full bg-transparent py-3 text-base text-[#222] outline-none" : "w-full rounded-full border border-zinc-200 bg-white px-3 py-3 text-base"}
    >
      <option value="All">All categories</option>
      {demoCategories.map((category) => (
        <option key={category}>{category}</option>
      ))}
    </select>
  );
}

function Pin({ small = false }: { small?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={small ? "h-4 w-4" : "h-6 w-6"} aria-hidden>
      <path fill={red} d="M12 2c-4 0-7 3.1-7 7.1C5 14.2 12 22 12 22s7-7.8 7-12.9C19 5.1 16 2 12 2zm0 9.5a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8z" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <circle cx="11" cy="11" r="6" />
      <path d="M16 16 L20 20" />
    </svg>
  );
}

const prep = [
  {
    href: "/bangkok/first-timer/",
    title: "First night",
    body: "Step-by-step first night in Bangkok, plus a Pattaya first-timer plan for shows and Walking Street.",
    tint: "#ffe8ee",
    mark: "1",
  },
  {
    href: "/prices/",
    title: "Prices",
    body: "Beer, cocktails, rooftop drinks, club entry, shows and late-night transport, as published for 2026.",
    tint: "#eee8ff",
    mark: "2",
  },
  {
    href: "/safety/",
    title: "Safety",
    body: "Transport, valuables, bills and when to leave — plus the scams page for touts and padded checks.",
    tint: "#e7f8ee",
    mark: "3",
  },
];
