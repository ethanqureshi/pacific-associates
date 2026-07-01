"use client";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mojokkrd";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const data = new FormData(e.currentTarget);
    const payload: Record<string, string> = {};
    data.forEach((v, k) => { payload[k] = v as string; });
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please call us at 949-250-6700.");
      }
    } catch {
      setError("Unable to submit. Please call us at 949-250-6700.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="mx-auto mb-4 text-[#C9922A]" size={48} />
        <h3 className="text-xl font-bold text-ink mb-2" style={{ fontFamily: "var(--font-cormorant)" }}>Message Sent!</h3>
        <p className="text-ink-mid">We’ll be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-ink mb-1">Name *</label>
        <input name="name" type="text" required placeholder="Your full name" className="w-full border border-[#E8E2D9] rounded px-4 py-3 text-ink focus:outline-none focus:border-[#C9922A] transition-colors" />
      </div>
      <div>
        <label className="block text-sm font-medium text-ink mb-1">Email *</label>
        <input name="email" type="email" required placeholder="you@example.com" className="w-full border border-[#E8E2D9] rounded px-4 py-3 text-ink focus:outline-none focus:border-[#C9922A] transition-colors" />
      </div>
      <div>
        <label className="block text-sm font-medium text-ink mb-1">Phone</label>
        <input name="phone" type="tel" placeholder="(555) 000-0000" className="w-full border border-[#E8E2D9] rounded px-4 py-3 text-ink focus:outline-none focus:border-[#C9922A] transition-colors" />
      </div>
      <div>
        <label className="block text-sm font-medium text-ink mb-1">Message *</label>
        <textarea name="message" required rows={4} placeholder="How can we help you?" className="w-full border border-[#E8E2D9] rounded px-4 py-3 text-ink focus:outline-none focus:border-[#C9922A] transition-colors resize-none" />
      </div>
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded bg-[#C9922A] text-white font-bold hover:bg-[#A87820] transition-all hover:-translate-y-0.5 shadow disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
