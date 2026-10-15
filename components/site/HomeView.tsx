import { Suspense } from "react";
import { GuideMedia } from "@/components/demo/GuideMedia";
import { HomeInteractive } from "@/components/site/HomeInteractive";
import { demoGuides } from "@/lib/demo-guides";

const cityIntros = [
  {
    href: "/bangkok/",
    name: "Bangkok",
    text: "Rooftop bars, Muay Thai and night markets.",
  },
  {
    href: "/pattaya/",
    name: "Pattaya",
    text: "Cabaret shows and Walking Street.",
  },
  {
    href: "/chiang-mai/",
    name: "Chiang Mai",
    text: "Night markets.",
  },
  {
    href: "/phuket/",
    name: "Phuket",
    text: "Nightlife guides.",
  },
] as const;

export function HomeView() {
  return (
    <div>
      <section className="relative">
        <div className="relative min-h-[520px] sm:min-h-[600px]">
          <div className="absolute inset-0">
            <GuideMedia guide={demoGuides[0]} className="h-full" sizes="100vw" priority />
          </div>
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative z-10 mx-auto max-w-4xl px-4 pb-28 pt-16 text-center text-white sm:pb-32 sm:pt-20">
            <p className="script-face text-3xl text-white/90 sm:text-5xl">explore</p>
            <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Thailand Nightlife Guides 2026: Bangkok, Pattaya, Chiang Mai and Phuket
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-white/90 sm:text-base">
              Practical nightlife guides for Bangkok, Pattaya, Chiang Mai and Phuket: rooftop bars, clubs, Muay Thai,
              cabaret shows, night markets, real 2026 prices and common scams.
            </p>
            <ul className="mx-auto mt-6 grid max-w-3xl gap-3 text-left sm:grid-cols-2">
              {cityIntros.map((city) => (
                <li key={city.href} className="bg-black/40 px-3 py-2 text-sm leading-5">
                  <a href={city.href} className="font-semibold underline">
                    {city.name}
                  </a>
                  <span> — {city.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Suspense fallback={null}>
        <HomeInteractive />
      </Suspense>
    </div>
  );
}
