/** Chiang Mai daytime suggestion linking to ThaiEleHub sanctuary tours (tracked with UTM). */
const TOUR_URL =
  "https://thaielehub.com/?utm_source=thainight&utm_medium=referral&utm_campaign=chiang_mai_guides";

export function SisterTour() {
  return (
    <aside className="rounded-lg border border-line bg-card p-4">
      <h2 className="text-base font-semibold text-foreground">Daytime: elephant sanctuary visit</h2>
      <p className="mt-2">
        Before a night out, spend the day at an ethical elephant sanctuary outside Chiang Mai.{" "}
        <strong>ThaiEleHub</strong> runs day tours focused on bathing and feeding — no riding.{" "}
        <a href={TOUR_URL} className="text-accent hover:underline" target="_blank" rel="noopener">
          See ThaiEleHub tours
        </a>
        .
      </p>
    </aside>
  );
}
