import { Crumbs } from "@/components/site/Crumbs";
import { GuideMedia } from "@/components/demo/GuideMedia";
import { demoGuides } from "@/lib/demo-guides";

export function PageTitle({
  path,
  title,
  updated,
}: {
  path: string;
  title: string;
  updated?: string;
}) {
  const guide = demoGuides.find((item) => item.href === path);
  return (
    <section className="relative flex min-h-[280px] items-center justify-center overflow-hidden sm:min-h-[340px]">
      {guide ? (
        <div className="absolute inset-0">
          <GuideMedia guide={guide} className="h-full" sizes="100vw" priority />
        </div>
      ) : (
        <div className="absolute inset-0 bg-[#2a2a2a]" />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 text-center text-white">
        <h1 className="text-3xl font-bold tracking-tight text-pretty sm:text-5xl">{title}</h1>
        <div className="mt-4">
          <Crumbs path={path} onDark />
        </div>
        {updated ? <p className="mt-3 text-sm text-white/80">Last updated: {updated}</p> : null}
      </div>
    </section>
  );
}
