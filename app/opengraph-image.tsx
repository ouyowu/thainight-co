import { ImageResponse } from "next/og";

export const alt = "Thai Night – Practical Nightlife Guides for Bangkok & Pattaya";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "#0b0b10",
          color: "#f4f4f5",
        }}
      >
        <div style={{ fontSize: 28, color: "#f5c14a" }}>Thai Night</div>
        <div style={{ fontSize: 64, fontWeight: 700, marginTop: 16 }}>Know before you go.</div>
        <div style={{ fontSize: 32, marginTop: 20, color: "#d4d4d8" }}>
          Real prices, real areas, real scams — updated for 2026.
        </div>
      </div>
    ),
    size,
  );
}
