"use client";
import Link from "next/link";
import { Phone } from "lucide-react";
import { track } from "@vercel/analytics";

export default function StickyMobileBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 grid grid-cols-2 gap-px bg-[#E8E2D9] border-t border-[#E8E2D9] shadow-[0_-2px_10px_rgba(0,0,0,0.08)]">
      <a
        href="tel:8662957500"
        onClick={() => track("phone_call_click", { location: "sticky_bar" })}
        className="flex items-center justify-center gap-2 py-3.5 bg-navy text-white font-semibold text-sm"
      >
        <Phone size={16} /> Call Now
      </a>
      <Link
        href="/free-quote"
        className="flex items-center justify-center py-3.5 bg-[#C9922A] text-white font-semibold text-sm"
      >
        Free Quote
      </Link>
    </div>
  );
}
