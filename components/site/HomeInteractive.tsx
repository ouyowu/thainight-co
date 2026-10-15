"use client";

import { useSearchParams } from "next/navigation";
import { GuideMedia, PhotoCredit } from "@/components/demo/GuideMedia";
import { HotelBand } from "@/components/demo/HotelBand";
import { useGuideFilter } from "@/components/demo/useGuideFilter";
import { GuideCard } from "@/components/site/GuideCard";
import { demoCategories, demoCities, demoGuides, guidesIn, type DemoCity, type DemoGuide } from "@/lib/demo-guides";
import { LAST_UPDATED } from "@/lib/site";

const teal = "#2bbbad";

const iconCategories = ["Rooftops", "Shows", "Night markets", "Taxis", "First-timer", "Safety", "Areas"] as const;

const cityHub: Record<DemoCity, string> = {
  Bangkok: "/bangkok/",
  Pattaya: "/pattaya/",
  Phuket: "/phuket/",
  "Chiang Mai": "/chiang-mai/",
};

export function HomeInteractive() {
  const params = useSearchParams();
  const query = params.get("q") ?? "";
  const city = params.get("city") ?? "All";
  const category = params.get("category") ?? "All";
  return <HomeFilter key={`${query}|${city}|${category}`} query={query} city={city} category={category} />;
}

function HomeFilter({ query, city, category }: { query: string; city: string; category: string }) {
  const filter = useGuideFilter(demoGuides, { query, city, category });
  const cards = filter.filtered.slice(0, 9);
  const posts = demoGuides.filter((guide) =>
    ["/bangkok/first-timer/", "/pattaya/cabaret-shows/", "/bangkok/night-markets/"].includes(guide.href),
  );

  function pickCategory(category: string) {
    filter.setCategory(category);
    filter.setCity("All");
    document.getElementById("listings")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div>
        <form
          onSubmit={filter.applySearch}
          className="relative z-20 mx-auto -mt-16 grid max-w-5xl gap-3 bg-white p-4 shadow-xl sm:-mt-20 sm:grid-cols-[1fr_180px_180px_auto] sm:items-end sm:px-5"
        >
          <label className="block text-sm">
            <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-zinc-500">What</span>
            <input
              value={filter.query}
              onChange={(event) => filter.setQuery(event.target.value)}
              placeholder="Rooftops, taxis, cabaret…"
              className="w-full border border-zinc-200 px-3 py-3 text-base outline-none focus:border-accent"
            />
          </label>
          <label className="block text-sm">
            <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-zinc-500">City</span>
            <select
              value={filter.city}
              onChange={(event) => filter.setCity(event.target.value)}
              className="w-full border border-zinc-200 bg-white px-3 py-3 text-base outline-none focus:border-accent"
            >
              <option>All</option>
              {demoCities.map((city) => (
                <option key={city}>{city}</option>
              ))}
            </select>
          </label>
          <label className="block text-sm">
            <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-zinc-500">Category</span>
            <select
              value={filter.category}
              onChange={(event) => filter.setCategory(event.target.value)}
              className="w-full border border-zinc-200 bg-white px-3 py-3 text-base outline-none focus:border-accent"
            >
              <option>All</option>
              {demoCategories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </label>
          <button type="submit" className="bg-accent px-6 py-3 text-sm font-semibold tracking-wide text-white">
            Search
          </button>
          <p className="text-sm text-zinc-500 sm:col-span-4">Search opens a guide when there is one match. Otherwise the cards below update.</p>
        </form>

      <div className="relative z-20 mx-auto -mt-2 max-w-5xl bg-white px-2 py-4 shadow-md sm:px-4">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
          {iconCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => pickCategory(category)}
              className="flex flex-col items-center gap-2 px-2 py-3 text-sm text-zinc-700 hover:text-accent"
            >
              <CategoryIcon name={category} />
              <span>{category}</span>
            </button>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <p className="script-face text-center text-3xl text-accent">discover</p>
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">Most popular categories</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categoryCards.map((card) => (
            <a key={card.href} href={card.href} className="group block">
              <div className="relative h-52 overflow-hidden sm:h-56">
                <div className="absolute inset-0">
                  <GuideMedia guide={card} className="h-full" sizes="(max-width: 640px) 100vw, 25vw" />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4 text-white">
                  <p className="text-lg font-semibold">{card.title}</p>
                  <p className="text-sm text-white/85">{card.city}</p>
                </div>
              </div>
              <PhotoCredit guide={card} />
            </a>
          ))}
        </div>
      </section>

      <section className="bg-card py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="script-face text-center text-3xl text-accent">find out</p>
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">How it works</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <article key={step.n} className="relative bg-white px-6 pb-8 pt-10 text-center shadow-sm">
                <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-lg font-semibold text-accent">
                  {step.n}.
                </span>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-500">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[280px]">
        <div className="absolute inset-0">
          <GuideMedia guide={walking} className="h-full" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col justify-center px-4 py-16 text-white sm:px-6 sm:py-20">
          <h2 className="max-w-xl text-3xl font-bold leading-tight sm:text-5xl">Walking Street, shows and how to get there</h2>
          <a href="/pattaya/areas/walking-street/" className="mt-6 inline-flex w-fit bg-accent px-5 py-3 text-sm font-semibold text-white">
            View guide
          </a>
        </div>
      </section>

      <section id="listings" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-16 sm:px-6">
        <p className="script-face text-center text-3xl text-accent">checkout</p>
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">Guides to open</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-zinc-500 sm:text-base">
          Published Thai Night guides. No phone numbers or review scores.
        </p>
        {filter.filtered.length === 0 ? (
          <EmptyGuides />
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((guide) => (
              <GuideCard key={guide.href} guide={guide} />
            ))}
          </div>
        )}
        {filter.filtered.length > cards.length ? (
          <p className="mt-6 text-center text-sm text-zinc-500">
            Showing {cards.length} of {filter.filtered.length}. Narrow the search to open one guide.
          </p>
        ) : null}
      </section>

      <section className="bg-[#f7f7f7]">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 sm:px-6 md:grid-cols-2">
          <GuideMedia guide={soi} className="h-72" sizes="(max-width: 768px) 100vw, 50vw" />
          <div>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Know before you go.</h2>
            <p className="mt-4 text-sm leading-7 text-zinc-600 sm:text-base">
              Free guides for first-timers and returning visitors. No paid rankings. Confirm prices, hours and dress codes on the spot.
            </p>
            <a href="/bangkok/first-timer/" className="mt-6 inline-flex bg-accent px-5 py-3 text-sm font-semibold text-white">
              View guide
            </a>
            <PhotoCredit guide={soi} />
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="absolute inset-0">
          <GuideMedia guide={cabaret} className="h-full" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 px-4 py-16 text-center text-white sm:py-20">
          <p className="script-face text-3xl">plan the night</p>
          <h2 className="mt-1 text-3xl font-bold sm:text-5xl">Shows, markets and taxi prices</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/85 sm:text-base">
            Cabaret tickets, night-market days and airport taxi ranges are already written up. Open the guide, then confirm on the day.
          </p>
          <a href="/prices/" className="mt-6 inline-flex px-6 py-3 text-sm font-semibold text-white" style={{ background: teal }}>
            Open prices
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="script-face text-center text-3xl text-accent">read our</p>
        <h2 className="text-center text-3xl font-bold sm:text-4xl">Latest guides</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {posts.map((guide) => (
            <article key={guide.href}>
              <a href={guide.href} className="block">
                <div className="relative">
                  <GuideMedia guide={guide} className="h-52" sizes="(max-width: 768px) 100vw, 33vw" />
                  <span className="absolute left-3 top-3 bg-accent px-2 py-1 text-center text-xs font-bold leading-tight text-white">
                    {LAST_UPDATED}
                  </span>
                </div>
                <p className="mt-3 text-sm text-zinc-500">
                  {guide.city} · {guide.category}
                </p>
                <h3 className="mt-1 text-xl font-semibold">{guide.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{guide.description}</p>
              </a>
              <PhotoCredit guide={guide} />
            </article>
          ))}
        </div>
      </section>

      <section className="bg-card py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold">Cities</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {demoCities.map((city) => {
              const sample = guidesIn(city)[0];
              return (
                <a key={city} href={cityHub[city]} className="relative block h-48 overflow-hidden text-white">
                  <div className="absolute inset-0">
                    <GuideMedia guide={sample} className="h-full" sizes="(max-width: 640px) 100vw, 25vw" />
                  </div>
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="relative flex h-full flex-col justify-end p-4">
                    <p className="script-face text-2xl">guides in</p>
                    <p className="text-2xl font-bold">{city}</p>
                    <p className="text-sm">{guidesIn(city).length} guides</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <HotelBand />
    </div>
  );
}

function EmptyGuides() {
  return (
    <div className="mt-8 border border-zinc-200 bg-zinc-50 p-6 text-sm leading-6">
      <p>No guide matches that search. Open a city hub:</p>
      <ul className="mt-3 space-y-1">
        {demoCities.map((city) => (
          <li key={city}>
            <a href={cityHub[city]} className="font-semibold text-accent underline">
              {city} nightlife guide
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CategoryIcon({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      {name === "Rooftops" ? <path d="M6 20 L16 8 L26 20 M10 20 V26 H22 V20" /> : null}
      {name === "Shows" ? <path d="M8 22 L16 10 L24 22 M12 22 H20" /> : null}
      {name === "Night markets" ? <path d="M6 22 H26 M8 22 V12 H24 V22 M12 12 V22 M20 12 V22" /> : null}
      {name === "Taxis" ? <path d="M7 20 H25 L23 14 H11 L7 20 Z M10 20 V23 M22 20 V23 M12 14 L14 10 H20 L22 14" /> : null}
      {name === "First-timer" ? <path d="M16 6 V18 M16 24 V25 M10 12 H22" /> : null}
      {name === "Safety" ? <path d="M16 6 L24 10 V16 C24 21 16 26 16 26 C16 26 8 21 8 16 V10 Z" /> : null}
      {name === "Areas" ? <path d="M16 6 C16 6 8 14 8 18 A8 8 0 0 0 24 18 C24 14 16 6 16 6 Z" /> : null}
    </svg>
  );
}

const byHref = (href: string): DemoGuide => {
  const guide = demoGuides.find((item) => item.href === href);
  if (!guide) throw new Error(href);
  return guide;
};

const categoryCards = [
  byHref("/bangkok/rooftop-bars/"),
  byHref("/pattaya/cabaret-shows/"),
  byHref("/bangkok/night-markets/"),
  byHref("/bangkok/muay-thai/"),
  byHref("/pattaya/areas/walking-street/"),
  byHref("/bangkok/areas/soi-11/"),
  byHref("/bangkok/airport-to-sukhumvit-taxi-price/"),
  byHref("/chiang-mai/night-markets/"),
];

const walking = byHref("/pattaya/areas/walking-street/");
const soi = byHref("/bangkok/areas/soi-11/");
const cabaret = byHref("/pattaya/cabaret-shows/");

const steps = [
  {
    n: "1",
    title: "Pick a city",
    body: "Bangkok, Pattaya, Phuket or Chiang Mai. Each card on this page links to a guide that is already on the site.",
  },
  {
    n: "2",
    title: "Open the guide",
    body: "Rooftops, cabaret and show prices, taxi ranges, night markets, safety and first-timer plans.",
  },
  {
    n: "3",
    title: "Confirm on the spot",
    body: "Prices, hours and dress codes move. The guides say what to check before you order or book.",
  },
];
