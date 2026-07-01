// Pacific Associates brand mark: a navy/gold monogram emblem + serif wordmark.
// variant "dark" = for light backgrounds (navbar); "light" = for navy backgrounds (footer).
export default function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const light = variant === "light";
  const gold = light ? "#E5B04A" : "#C9922A";
  const pacific = light ? "#FFFFFF" : "#1B2B4B";
  const emblemFill = light ? "none" : "#1B2B4B";

  return (
    <span className={`flex items-center gap-3 select-none ${className}`}>
      <svg
        width="44"
        height="44"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect
          x="0.75"
          y="0.75"
          width="46.5"
          height="46.5"
          rx="10"
          fill={emblemFill}
          stroke={gold}
          strokeWidth="1.5"
        />
        <rect
          x="4.5"
          y="4.5"
          width="39"
          height="39"
          rx="7"
          fill="none"
          stroke={gold}
          strokeWidth="0.75"
          strokeOpacity="0.5"
        />
        <text
          x="24"
          y="30"
          textAnchor="middle"
          fill={gold}
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "20px",
            fontWeight: 700,
            letterSpacing: "0.5px",
          }}
        >
          PA
        </text>
        <rect x="18" y="35" width="12" height="1.5" rx="0.75" fill={gold} />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className="font-bold tracking-[0.2em] text-2xl"
          style={{ fontFamily: "var(--font-cormorant)", color: pacific }}
        >
          PACIFIC
        </span>
        <span
          className="font-bold tracking-[0.2em] text-2xl"
          style={{ fontFamily: "var(--font-cormorant)", color: gold }}
        >
          ASSOCIATES
        </span>
      </span>
    </span>
  );
}
