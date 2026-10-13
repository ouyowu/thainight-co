import { GuideCard } from "@/components/site/GuideCard";
import { relatedGuides } from "@/lib/city-listings";

export function RelatedPosts({ path }: { path: string }) {
  const related = relatedGuides(path);
  if (related.length === 0) return null;
  return (
    <section className="mt-14 border-t border-line pt-10">
      <h2 className="text-2xl font-semibold">Related posts</h2>
      <div className="mt-6 grid gap-8 sm:grid-cols-2">
        {related.map((guide) => (
          <GuideCard key={guide.href} guide={guide} />
        ))}
      </div>
    </section>
  );
}
