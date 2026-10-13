import { GuideMedia, PhotoCredit } from "@/components/demo/GuideMedia";
import type { DemoGuide } from "@/lib/demo-guides";

export function GuideCard({ guide }: { guide: DemoGuide }) {
  return (
    <article className="bg-white">
      <a href={guide.href} className="group block">
        <div className="relative">
          <GuideMedia guide={guide} className="h-56" sizes="(max-width: 640px) 100vw, 33vw" />
          <span className="absolute bottom-3 left-3 bg-white px-2 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
            {guide.category}
          </span>
        </div>
        <h3 className="mt-4 text-xl font-semibold leading-snug group-hover:text-accent">{guide.title}</h3>
        <p className="mt-1 text-sm text-zinc-500">{guide.city}</p>
        {guide.description ? <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-600">{guide.description}</p> : null}
        <p className="mt-3 text-sm font-semibold text-accent">Open guide</p>
      </a>
      <PhotoCredit guide={guide} />
    </article>
  );
}
