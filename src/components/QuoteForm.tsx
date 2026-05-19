"use client";
import { useState } from "react";
import { PlusCircle, CheckCircle } from "lucide-react";

// TODO (Shain): Replace with your Formspree form ID.
// Steps: go to https://formspree.io, create a free account,
// create a new form, copy the ID from the endpoint URL, and paste it below.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/REPLACE_WITH_YOUR_FORMSPREE_ID";

interface Creditor {
  name: string;
  balance: string;
}

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [creditors, setCreditors] = useState<Creditor[]>([{ name: "", balance: "" }]);

  const addCreditor = () => {
    if (creditors.length < 4) setCreditors([...creditors, { name: "", balance: "" }]);
  };

  const updateCreditor = (i: number, field: keyof Creditor, value: string) => {
    const updated = [...creditors];
    updated[i][field] = value;
    setCreditors(updated);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const data = new FormData(e.currentTarget);
    const payload: Record<string, unknown> = {};
    data.forEach((v, k) => { payload[k] = v; });
    payload.creditors = creditors.filter((c) => c.name || c.balance);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please call us at 866-295-7500.");
      }
    } catch {
      setError("Unable to submit. Please call us at 866-295-7500.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="mx-auto mb-4 text-green-cta" size={56} />
        <h3 className="text-2xl font-bold text-ink mb-3" style={{ fontFamily: "var(--font-cormorant)" }}>
          Thank You!
        </h3>
        <p className="text-ink-mid mb-6 leading-relaxed">
          You will be receiving your quote within the next 24 hours.
        </p>
        <p className="text-ink font-semibold">
          Call now to receive $100 off your first payment:{" "}
          <a href="tel:8662957500" className="text-teal-lt hover:underline">866-295-7500</a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-ink mb-1">First Name *</label>
          <input name="firstName" type="text" required placeholder="John" className="w-full border border-warm-line rounded px-4 py-3 text-ink focus:outline-none focus:border-teal transition-colors" />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink mb-1">Last Name *</label>
          <input name="lastName" type="text" required placeholder="Smith" className="w-full border border-warm-line rounded px-4 py-3 text-ink focus:outline-none focus:border-teal transition-colors" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-ink mb-1">Email Address *</label>
        <input name="email" type="email" required placeholder="john@example.com" className="w-full border border-warm-line rounded px-4 py-3 text-ink focus:outline-none focus:border-teal transition-colors" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-ink mb-1">Phone Number *</label>
          <input name="phone" type="tel" required placeholder="(555) 000-0000" className="w-full border border-warm-line rounded px-4 py-3 text-ink focus:outline-none focus:border-teal transition-colors" />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink mb-1">Zip Code *</label>
          <input name="zip" type="text" required placeholder="92612" maxLength={5} className="w-full border border-warm-line rounded px-4 py-3 text-ink focus:outline-none focus:border-teal transition-colors" />
        </div>
      </div>

      <div className="border-t border-warm-line pt-5">
        <h4 className="font-semibold text-ink mb-4">Your Creditors</h4>
        <div className="space-y-3">
          {creditors.map((creditor, i) => (
            <div key={i} className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder={`Creditor ${i + 1} Name`}
                value={creditor.name}
                onChange={(e) => updateCreditor(i, "name", e.target.value)}
                className="border border-warm-line rounded px-4 py-3 text-ink focus:outline-none focus:border-teal transition-colors"
              />
              <input
                type="text"
                placeholder="Balance ($)"
                value={creditor.balance}
                onChange={(e) => updateCreditor(i, "balance", e.target.value)}
                className="border border-warm-line rounded px-4 py-3 text-ink focus:outline-none focus:border-teal transition-colors"
              />
            </div>
          ))}
        </div>
        {creditors.length < 4 && (
          <button type="button" onClick={addCreditor} className="mt-3 flex items-center gap-2 text-teal text-sm font-medium hover:text-teal-lt transition-colors">
            <PlusCircle size={18} /> Add Another Creditor
          </button>
        )}
      </div>

      <p className="text-ink-lt text-xs leading-relaxed">
        By providing my contact information and clicking on the button above, I acknowledge, agree, and provide express written consent to share my information with Pacific Associates, in order to deliver calls or text messages to me.
      </p>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 rounded bg-green-cta text-white font-bold text-lg hover:bg-[#43a047] transition-all hover:-translate-y-0.5 shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Submitting..." : "Get My Quote"}
      </button>
    </form>
  );
}
