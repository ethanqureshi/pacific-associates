"use client";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function InlineQuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="text-center py-6">
        <CheckCircle className="mx-auto mb-3 text-green-cta" size={44} />
        <p className="font-bold text-ink text-lg">We'll be in touch within 24 hours.</p>
        <p className="text-ink-mid text-sm mt-1">
          Questions?{" "}
          <a href="tel:8662957500" className="text-teal-lt hover:underline font-semibold">Call 866-295-7500</a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <input type="text" required placeholder="First Name" className="border border-warm-line rounded px-4 py-3 text-ink text-sm focus:outline-none focus:border-teal transition-colors w-full" />
        <input type="text" required placeholder="Last Name" className="border border-warm-line rounded px-4 py-3 text-ink text-sm focus:outline-none focus:border-teal transition-colors w-full" />
      </div>
      <input type="email" required placeholder="Email Address" className="w-full border border-warm-line rounded px-4 py-3 text-ink text-sm focus:outline-none focus:border-teal transition-colors" />
      <input type="tel" required placeholder="Phone Number" className="w-full border border-warm-line rounded px-4 py-3 text-ink text-sm focus:outline-none focus:border-teal transition-colors" />
      <button type="submit" className="w-full py-3.5 rounded bg-green-cta text-white font-bold text-base hover:bg-[#43a047] transition-all hover:-translate-y-0.5 shadow-md">
        Get My Free Quote
      </button>
      <p className="text-ink-lt text-xs text-center leading-relaxed">
        No obligation. No cost. 100% confidential.
      </p>
    </form>
  );
}
