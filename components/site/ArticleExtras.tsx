import { HotelCta } from "@/components/HotelCta";
import { HotelBand } from "@/components/demo/HotelBand";
import { GuideCard } from "@/components/site/GuideCard";
import { cityHotelFor, isCityHub, relatedGuides } from "@/lib/city-listings";

export function ArticleExtras({ path }: { path: string }) {
  const related = isCityHub(path) ? [] : relatedGuides(path);
  const hotel = cityHotelFor(path);

  return (
    <>
      {related.length > 0 ? (
        <section className="border-t border-line bg-card">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
            <p className="script-face text-center text-3xl text-accent">more guides</p>
            <h2 className="text-center text-3xl font-bold tracking-tight">Related</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((guide) => (
                <GuideCard key={guide.href} guide={guide} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
      {hotel ? (
        <section className="border-t border-line">
          <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
            <h2 className="text-xl font-semibold">Hotels in {hotel.city}</h2>
            <div className="mt-3">
              <HotelCta label={hotel.label} link={hotel.link} />
            </div>
          </div>
        </section>
      ) : (
        <HotelBand />
      )}
    </>
  );
}
