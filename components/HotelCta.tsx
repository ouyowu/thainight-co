type HotelCtaProps = {
  label: string;
  helper?: boolean;
};

export function HotelCta({ label, helper = false }: HotelCtaProps) {
  return (
    <>
      <p>
        →{" "}
        <a href="#" className="text-accent hover:underline" target="_blank" rel="sponsored noopener">
          {label}
        </a>{" "}
        (#)
      </p>
      {helper ? (
        <p className="mt-2 italic">
          <em>(Replace # with your affiliate URL)</em>
        </p>
      ) : null}
    </>
  );
}
