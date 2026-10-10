import Image from "next/image";
import type { Photo } from "@/lib/photos";

type GuidePhotoProps = Photo & {
  priority?: boolean;
  compact?: boolean;
};

export function GuidePhoto({ src, alt, credit, href, priority, compact }: GuidePhotoProps) {
  return (
    <figure className={compact ? "overflow-hidden" : "overflow-hidden rounded-lg border border-line"}>
      <Image
        src={src}
        alt={alt}
        width={640}
        height={360}
        priority={priority}
        sizes={compact ? "(max-width: 640px) 50vw, 320px" : "(max-width: 768px) 100vw, 720px"}
        className={compact ? "h-28 w-full object-cover sm:h-32" : "h-auto w-full object-cover"}
      />
      <figcaption className={compact ? "mt-1 text-[10px] leading-4 text-muted" : "px-3 py-2 text-xs text-muted"}>
        Photo:{" "}
        {compact ? (
          credit
        ) : (
          <a
            href={href}
            className="underline decoration-line underline-offset-2 hover:text-foreground"
            rel="noreferrer"
          >
            {credit}
          </a>
        )}
      </figcaption>
    </figure>
  );
}
