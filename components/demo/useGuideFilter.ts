"use client";

import { useMemo, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import type { DemoGuide } from "@/lib/demo-guides";

export function useGuideFilter(listings: DemoGuide[]) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("All");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return listings.filter((item) => {
      if (city !== "All" && item.city !== city) return false;
      if (category !== "All" && item.category !== category) return false;
      if (!q) return true;
      return [item.title, item.city, item.category, item.description].join(" ").toLowerCase().includes(q);
    });
  }, [listings, query, city, category]);

  function applySearch(event: FormEvent) {
    event.preventDefault();
    if (filtered.length === 1) router.push(filtered[0].href);
  }

  return { query, setQuery, city, setCity, category, setCategory, filtered, applySearch };
}
