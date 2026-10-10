type DisclaimerCopyProps = {
  heading?: "h1" | "h2" | "none";
};

export function DisclaimerCopy({ heading = "h2" }: DisclaimerCopyProps) {
  return (
    <section>
      {heading === "h2" ? (
        <h2 className="text-lg font-semibold text-foreground">Disclaimer</h2>
      ) : null}
      <p className={heading === "h2" ? "mt-2" : undefined}>
        Thai Night provides general information about nightlife areas in Bangkok and Pattaya.
        Prices, opening hours, and conditions change frequently. We do not guarantee accuracy and
        are not liable for any loss, injury, or dispute arising from the use of this information.
      </p>
      <p className="mt-3">
        This website is intended for adults. The legal drinking age in Thailand is 20. Please
        drink responsibly and never drink and drive.
      </p>
      <p className="mt-3">
        Affiliate Disclosure: Some links on this site are affiliate links. If you book through them,
        we may earn a commission at no extra cost to you. This does not influence our descriptions
        of areas or practical advice.
      </p>
      <p className="mt-3">
        Always use official transport apps where possible, keep valuables secure, and contact
        Tourist Police (1155) if you need assistance.
      </p>
    </section>
  );
}
