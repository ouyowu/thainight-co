import { AffiliateCta } from "@/components/AffiliateCta";

type HotelsNearBlockProps = {
  href: string;
  cta: string;
};

export function HotelsNearBlock({ href, cta }: HotelsNearBlockProps) {
  return (
    <section>
      <p>Staying nearby makes the night simpler.</p>
      <p className="mt-3">
        <AffiliateCta href={href} label={cta} />
      </p>
    </section>
  );
}
