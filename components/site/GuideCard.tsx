import { GuideMedia, PhotoCredit } from "@/components/demo/GuideMedia";
import type { DemoGuide } from "@/lib/demo-guides";

export function GuideCard({ guide }: { guide: DemoGuide }) {
  return (
    <article className="border border-zinc-100 bg-white shadow-sm transition hover:border-accent">
      <a href={guide.href} className="block">
        <div className="relative">
          <GuideMedia guide={guide} className="h-48" sizes="(max-width: 640px) 100vw, 33vw" />
          <span className="absolute left-3 top-3 bg-white/95 px-2 py-1 text-xs font-semibold text-accent">
            {guide.category}
          </span>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold leading-snug">{guide.title}</h3>
          <p className="mt-1 text-sm text-zinc-500">{guide.city}</p>
          {guide.description ? <p className="mt-3 text-sm leading-6 text-zinc-600">{guide.description}</p> : null}
          <p className="mt-3 text-sm font-semibold text-accent">Open guide</p>
        </div>
      </a>
      <div className="px-4 pb-4">
        <PhotoCredit guide={guide} />
      </div>
    </article>
  );
}
