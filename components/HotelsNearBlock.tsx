import { AffiliateCta } from "@/components/AffiliateCta";

type HotelsNearBlockProps = {
  href: string;
  area: string;
};

export function HotelsNearBlock({ href, area }: HotelsNearBlockProps) {
  return (
    <section>
      <p>Staying nearby makes the night simpler.</p>
      <p className="mt-3">
        → <AffiliateCta href={href} label={`Hotels near ${area}`} />
      </p>
    </section>
  );
}
