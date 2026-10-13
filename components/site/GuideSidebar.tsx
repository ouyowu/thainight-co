"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { HotelCta } from "@/components/HotelCta";
import { cityHotelFor, relatedGuides } from "@/lib/city-listings";
import { demoCategories, demoCities, searchGuides, type DemoCity } from "@/lib/demo-guides";
import type { AffiliateKey } from "@/lib/affiliates";

const cityHub: Record<DemoCity, string> = {
  Bangkok: "/bangkok/",
  Pattaya: "/pattaya/",
  Phuket: "/phuket/",
  "Chiang Mai": "/chiang-mai/",
};

const allHotels: { label: string; link: AffiliateKey }[] = [
  { label: "Search Bangkok hotels", link: "hotelBangkok" },
  { label: "Search Pattaya hotels", link: "hotelPattaya" },
  { label: "Search Phuket hotels", link: "hotelPhuket" },
  { label: "Search Chiang Mai hotels", link: "hotelChiangMai" },
];

export function GuideSidebar({ path }: { path: string }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const hotel = cityHotelFor(path);
  const related = relatedGuides(path);

  function onSearch(event: FormEvent) {
    event.preventDefault();
    const q = query.trim();
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
    <aside className="space-y-10">
      <Widget title="Search">
        <form onSubmit={onSearch} className="flex" role="search">
          <label className="sr-only" htmlFor="sidebar-search">
            Search guides
          </label>
          <input
            id="sidebar-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search guides"
            className="min-w-0 flex-1 border border-zinc-200 px-3 py-2 text-sm outline-none focus:border-accent"
          />
          <button type="submit" className="bg-accent px-3 py-2 text-sm font-semibold text-white">
            Search
          </button>
        </form>
      </Widget>

      <Widget title="Cities">
        <ul className="space-y-2 text-sm">
          {demoCities.map((city) => (
            <li key={city}>
              <a href={cityHub[city]} className="hover:text-accent">
                {city}
              </a>
            </li>
          ))}
        </ul>
      </Widget>

      <Widget title="Categories">
        <ul className="space-y-2 text-sm">
          {demoCategories.map((category) => (
            <li key={category}>
              <a href={`/?category=${encodeURIComponent(category)}#listings`} className="hover:text-accent">
                {category}
              </a>
            </li>
          ))}
        </ul>
      </Widget>

      {related.length > 0 ? (
        <Widget title="Related">
          <ul className="space-y-3 text-sm">
            {related.map((guide) => (
              <li key={guide.href}>
                <a href={guide.href} className="font-semibold leading-5 hover:text-accent">
                  {guide.title}
                </a>
                <p className="text-zinc-500">{guide.city}</p>
              </li>
            ))}
          </ul>
        </Widget>
      ) : null}

      <Widget title={hotel ? `Hotels in ${hotel.city}` : "Hotels"}>
        {hotel ? (
          <HotelCta label={hotel.label} link={hotel.link} />
        ) : (
          <ul className="space-y-2 text-sm">
            {allHotels.map((item) => (
              <li key={item.link}>
                <HotelCta label={item.label} link={item.link} />
              </li>
            ))}
          </ul>
        )}
      </Widget>
    </aside>
  );
}

function Widget({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="widget-title">{title}</h2>
      {children}
    </section>
  );
}
