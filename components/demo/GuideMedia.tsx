import Image from "next/image";
import { guidePhoto, type DemoGuide } from "@/lib/demo-guides";

type GuideMediaProps = {
  guide: DemoGuide;
  className?: string;
  sizes: string;
  priority?: boolean;
};

export function GuideMedia({ guide, className = "", sizes, priority }: GuideMediaProps) {
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
      ) : (
        <span className="absolute inset-0 flex items-end p-3 text-sm font-semibold text-white">{guide.city}</span>
      )}
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
