"use client";
import { track } from "@vercel/analytics";

export default function TrackedCall({
  location,
  className,
  children,
  href = "tel:8662957500",
}: {
  location: string;
  className?: string;
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => track("phone_call_click", { location })}
    >
      {children}
    </a>
  );
}
