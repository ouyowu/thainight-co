import { FaqJsonLd } from "@/components/FaqJsonLd";

export type FaqItem = { q: string; a: string };

/** Renders FAQ items and their FAQPage JSON-LD from one source, so they never drift. */
export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <>
      <FaqJsonLd items={items} />
      {items.map((item) => (
        <section key={item.q}>
          <h2 className="text-lg font-semibold text-foreground">{item.q}</h2>
          <p className="mt-2">{item.a}</p>
        </section>
      ))}
    </>
  );
}
