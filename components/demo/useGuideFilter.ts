"use client";

import { useMemo, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { searchGuides, type DemoGuide } from "@/lib/demo-guides";

type FilterStart = {
  query?: string;
  city?: string;
  category?: string;
};

export function useGuideFilter(listings: DemoGuide[], initial: FilterStart = {}) {
  const router = useRouter();
  const [query, setQuery] = useState(initial.query ?? "");
  const [city, setCity] = useState(initial.city ?? "All");
  const [category, setCategory] = useState(initial.category ?? "All");

  const filtered = useMemo(() => {
    const hits = new Set(searchGuides(query, city, category).map((guide) => guide.href));
    return listings.filter((item) => hits.has(item.href));
  }, [listings, query, city, category]);

  function applySearch(event: FormEvent) {
    event.preventDefault();
    if (filtered.length === 1) {
      router.push(filtered[0].href);
      return;
    }
    const params = new URLSearchParams();
    const q = query.trim();
    if (q) params.set("q", q);
    if (city !== "All") params.set("city", city);
    if (category !== "All") params.set("category", category);
    const search = params.toString();
    router.push(search ? `/?${search}#listings` : "/#listings");
    document.getElementById("listings")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return { query, setQuery, city, setCity, category, setCategory, filtered, applySearch };
}
