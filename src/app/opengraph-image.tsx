import { ImageResponse } from "next/og";

export const alt = "Pacific Associates — Debt Consolidation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#1B2B4B",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 74,
            fontWeight: 800,
            letterSpacing: 8,
            color: "#C9922A",
          }}
        >
          PACIFIC ASSOCIATES
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 36,
            color: "#ffffff",
          }}
        >
          Secure your financial freedom today.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 22,
            letterSpacing: 3,
            color: "#E5B04A",
          }}
        >
          A+ BBB · 27 YEARS · 4.99/5 RATED · ZERO COMPLAINTS
        </div>
      </div>
    ),
    { ...size },
  );
}
