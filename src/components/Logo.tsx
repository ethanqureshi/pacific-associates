// Pacific Associates brand mark: the PA emblem image + serif wordmark.
// variant "dark" = for light backgrounds (navbar); "light" = for navy backgrounds (footer).
import Image from "next/image";

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

  return (
    <span className={`flex items-center gap-3 select-none ${className}`}>
      <Image
        src="/logo.png"
        alt="Pacific Associates"
        width={52}
        height={52}
        priority
        className="shrink-0 rounded-lg"
      />
      <span className="flex flex-col leading-none">
        <span
          className="font-bold tracking-[0.2em] text-2xl sm:text-3xl"
          style={{ fontFamily: "var(--font-cormorant)", color: pacific }}
        >
          PACIFIC
        </span>
        <span
          className="font-bold tracking-[0.2em] text-2xl sm:text-3xl"
          style={{ fontFamily: "var(--font-cormorant)", color: gold }}
        >
          ASSOCIATES
        </span>
      </span>
    </span>
  );
}
