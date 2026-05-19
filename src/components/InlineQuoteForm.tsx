"use client";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

// TODO (Shain): Replace with your Formspree form ID.
// Same ID as QuoteForm — use one Formspree form for all quote submissions.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/REPLACE_WITH_YOUR_FORMSPREE_ID";

export default function InlineQuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.currentTarget);
    const payload: Record<string, string> = {};
    data.forEach((v, k) => { payload[k] = v as string; });
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) setSubmitted(true);
    } catch { /* fail silently — user still sees call CTA */ }
    finally { setLoading(false); }
  };

  if (submitted) {
    return (
      <div className="text-center py-6">
        <CheckCircle className="mx-auto mb-3 text-[#C9922A]" size={44} />
        <p className="font-bold text-ink text-lg">We'll be in touch within 24 hours.</p>
        <p className="text-ink-mid text-sm mt-1">
          Questions?{" "}
          <a href="tel:8662957500" className="text-[#C9922A] hover:underline font-semibold">Call 866-295-7500</a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <input name="firstName" type="text" required placeholder="First Name" className="border border-[#E8E2D9] rounded px-4 py-3 text-ink text-sm focus:outline-none focus:border-[#C9922A] transition-colors w-full" />
        <input name="lastName" type="text" required placeholder="Last Name" className="border border-[#E8E2D9] rounded px-4 py-3 text-ink text-sm focus:outline-none focus:border-[#C9922A] transition-colors w-full" />
      </div>
      <input name="email" type="email" required placeholder="Email Address" className="w-full border border-[#E8E2D9] rounded px-4 py-3 text-ink text-sm focus:outline-none focus:border-[#C9922A] transition-colors" />
      <input name="phone" type="tel" required placeholder="Phone Number" className="w-full border border-[#E8E2D9] rounded px-4 py-3 text-ink text-sm focus:outline-none focus:border-[#C9922A] transition-colors" />
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 rounded bg-[#C9922A] text-white font-bold text-base hover:bg-[#A87820] transition-all hover:-translate-y-0.5 shadow-md disabled:opacity-60"
      >
        {loading ? "Submitting..." : "Get My Free Quote"}
      </button>
      <p className="text-ink-lt text-xs text-center leading-relaxed">No obligation. No cost. 100% confidential.</p>
    </form>
  );
}
