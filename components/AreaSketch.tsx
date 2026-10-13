type SketchItem = {
  label: string;
  note?: string;
  accent?: boolean;
};

type AreaSketchProps = {
  caption: string;
  items: SketchItem[];
};

export function AreaSketch({ caption, items }: AreaSketchProps) {
  return (
    <figure className="rounded-lg border border-line bg-card p-3 sm:p-4">
      <div
        role="img"
        aria-label={caption}
        className="grid grid-cols-2 gap-2 sm:grid-cols-3"
      >
        {items.map((item) => (
          <div
            key={item.label}
            className={`rounded-md border px-2 py-2 text-sm leading-5 ${
              item.accent
                ? "border-accent/50 bg-accent/10 text-foreground"
                : "border-line bg-background text-foreground"
            }`}
          >
            <div className="font-semibold">{item.label}</div>
            {item.note ? <div className="mt-0.5 text-xs text-muted">{item.note}</div> : null}
          </div>
        ))}
      </div>
      <figcaption className="mt-2 text-xs text-muted">{caption}</figcaption>
    </figure>
  );
}
