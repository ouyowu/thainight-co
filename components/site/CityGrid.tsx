"use client";

import { useMemo, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { GuideCard } from "@/components/site/GuideCard";
import type { DemoGuide } from "@/lib/demo-guides";

export function CityGrid({ cards }: { cards: DemoGuide[] }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = useMemo(() => [...new Set(cards.map((card) => card.category))], [cards]);
  const filtered = cards.filter((card) => {
    if (category !== "All" && card.category !== category) return false;
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return [card.title, card.city, card.category, card.description].join(" ").toLowerCase().includes(q);
  });

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (filtered.length === 1) router.push(filtered[0].href);
  }

  return (
    <div>
      <form
        onSubmit={onSubmit}
        className="mb-10 grid gap-3 border border-zinc-100 bg-white p-4 shadow-sm sm:grid-cols-[1fr_200px_auto] sm:items-end"
      >
        <label className="block text-sm">
          <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-zinc-500">What</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Rooftops, taxis, markets…"
            className="w-full border border-zinc-200 px-3 py-3 text-base outline-none focus:border-accent"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-zinc-500">Category</span>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="w-full border border-zinc-200 bg-white px-3 py-3 text-base outline-none focus:border-accent"
          >
            <option>All</option>
            {categories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <button type="submit" className="bg-accent px-6 py-3 text-sm font-semibold text-white">
          Search
        </button>
      </form>
      {filtered.length === 0 ? (
        <p className="border border-zinc-200 bg-zinc-50 p-6 text-sm leading-6">
          No guide in this city matches that search. Clear the filter or open another city from the sidebar.
        </p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2">
          {filtered.map((guide) => (
            <GuideCard key={guide.href} guide={guide} />
          ))}
        </div>
      )}
    </div>
  );
}
