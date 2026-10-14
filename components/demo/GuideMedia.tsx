import Image from "next/image";
import { guidePhoto, type DemoGuide } from "@/lib/demo-guides";

type GuideMediaProps = {
  guide: DemoGuide;
  className?: string;
  sizes: string;
  priority?: boolean;
  /** When there is no photo, show the guide title on the color panel. */
  caption?: boolean;
};

export function GuideMedia({ guide, className = "", sizes, priority, caption = false }: GuideMediaProps) {
  const photo = guidePhoto(guide);
  return (
    <div className={`relative overflow-hidden bg-zinc-200 ${className}`} style={photo ? undefined : { background: guide.tone }}>
      {photo ? (
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      ) : caption ? (
        <div className="absolute inset-0 flex flex-col justify-start p-4 pr-6 pt-5 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/80">{guide.city}</p>
          <p className="mt-2 max-w-[16rem] text-xl font-semibold leading-tight">{guide.title}</p>
        </div>
      ) : null}
    </div>
  );
}

export function PhotoCredit({ guide }: { guide: DemoGuide }) {
  const photo = guidePhoto(guide);
  if (!photo) return null;
  return (
    <p className="mt-1 text-xs leading-4 text-zinc-500">
      Photo:{" "}
      <a href={photo.href} className="underline underline-offset-2 hover:text-zinc-800" rel="noreferrer">
        {photo.credit}
      </a>
    </p>
  );
}
