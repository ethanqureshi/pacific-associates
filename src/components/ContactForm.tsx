"use client";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="mx-auto mb-4 text-green-cta" size={48} />
        <h3 className="text-xl font-bold text-ink mb-2" style={{ fontFamily: "var(--font-cormorant)" }}>Message Sent!</h3>
        <p className="text-ink-mid">We’ll be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-ink mb-1">Name *</label>
        <input type="text" required placeholder="Your full name" className="w-full border border-warm-line rounded px-4 py-3 text-ink focus:outline-none focus:border-teal transition-colors" />
      </div>
      <div>
        <label className="block text-sm font-medium text-ink mb-1">Email *</label>
        <input type="email" required placeholder="you@example.com" className="w-full border border-warm-line rounded px-4 py-3 text-ink focus:outline-none focus:border-teal transition-colors" />
      </div>
      <div>
        <label className="block text-sm font-medium text-ink mb-1">Phone</label>
        <input type="tel" placeholder="(555) 000-0000" className="w-full border border-warm-line rounded px-4 py-3 text-ink focus:outline-none focus:border-teal transition-colors" />
      </div>
      <div>
        <label className="block text-sm font-medium text-ink mb-1">Message *</label>
        <textarea required rows={4} placeholder="How can we help you?" className="w-full border border-warm-line rounded px-4 py-3 text-ink focus:outline-none focus:border-teal transition-colors resize-none" />
      </div>
      <button type="submit" className="w-full py-3 rounded bg-teal text-white font-bold hover:bg-teal-lt transition-all hover:-translate-y-0.5 shadow">
        Send Message
      </button>
    </form>
  );
}
