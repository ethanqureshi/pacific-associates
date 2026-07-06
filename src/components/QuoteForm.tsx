"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { PlusCircle, CheckCircle } from "lucide-react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

const BBB_URL =
  "https://www.bbb.org/us/ca/irvine/profile/debt-relief-services/pacific-associates-1126-13132048";
const GOOGLE_URL =
  "https://www.google.com/search?sca_esv=fb6d196bfde403ac&rlz=1C1HKFL_enUS1215US1215&sxsrf=APpeQnuknd6lBpkbggbElPoLk9HulbQ2IA:1782931120860&si=APenkKn5T4YN59srr511wD6k6Pufj9DEzRUvB1XJSwUeeT5afh6cd2YIOS9tqlyvfP2lMBNLRRr-Plqgy3BiG4QlLOrQvlh_f2PaT3pNiwffctqL0A1CyqhOzlxcqR6jMZnF5o21DpL9umuPOSoIpqhRZ6iELFrTHA%3D%3D&q=Pacific+Associates+Corporation+Reviews";
const YELP_URL =
  "https://www.yelp.com/biz/pacific-associates-irvine-3";
const TRUSTLINK_URL =
  "https://www.trustlink.org/Reviews/Pacific-Associates-Corporation-205801920";

const SUBMIT_ENDPOINT = "/api/submit";

interface Creditor {
  name: string;
  balance: string;
}

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [consent, setConsent] = useState(false);
  const [token, setToken] = useState("");
  const turnstileRef = useRef<TurnstileInstance>(null);
  const [creditors, setCreditors] = useState<Creditor[]>([
    { name: "", balance: "" },
    { name: "", balance: "" },
  ]);

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
    if (!token) {
      setError("Please complete the verification check.");
      return;
    }
    setLoading(true);
    setError("");
    const data = new FormData(e.currentTarget);
    const payload: Record<string, unknown> = {};
    data.forEach((v, k) => { payload[k] = v; });
    payload.creditors = creditors.filter((c) => c.name || c.balance);
    payload.turnstileToken = token;
    try {
      const res = await fetch(SUBMIT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        window.fbq?.("track", "Lead");
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please call us at 866-295-7500.");
        turnstileRef.current?.reset();
        setToken("");
      }
    } catch {
      setError("Unable to submit. Please call us at 866-295-7500.");
      turnstileRef.current?.reset();
      setToken("");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="mx-auto mb-4 text-[#C9922A]" size={56} />
        <h3 className="text-2xl font-bold text-ink mb-3" style={{ fontFamily: "var(--font-cormorant)" }}>
          Thank You!
        </h3>
        <p className="text-ink-mid leading-relaxed mb-6">
          We&rsquo;ll be in touch soon. In the meantime, see why clients trust Pacific Associates:
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={BBB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded bg-[#C9922A] text-white font-semibold hover:bg-[#A87820] transition-all"
          >
            BBB reviews
          </a>
          <a
            href={GOOGLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded border border-navy text-navy font-semibold hover:bg-navy hover:text-white transition-all"
          >
            Google reviews
          </a>
          <a
            href={YELP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded border border-navy text-navy font-semibold hover:bg-navy hover:text-white transition-all"
          >
            Yelp reviews
          </a>
          <a
            href={TRUSTLINK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded border border-navy text-navy font-semibold hover:bg-navy hover:text-white transition-all"
          >
            TrustLink reviews
          </a>
          <Link
            href="/videos"
            className="px-5 py-3 rounded bg-navy text-white font-semibold hover:bg-[#243860] transition-all"
          >
            Watch our videos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-ink mb-1">First Name *</label>
          <input name="firstName" type="text" required placeholder="John" className="w-full border border-[#E8E2D9] rounded px-4 py-3 text-ink focus:outline-none focus:border-[#C9922A] transition-colors" />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink mb-1">Last Name *</label>
          <input name="lastName" type="text" required placeholder="Smith" className="w-full border border-[#E8E2D9] rounded px-4 py-3 text-ink focus:outline-none focus:border-[#C9922A] transition-colors" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-ink mb-1">Email Address *</label>
        <input name="email" type="email" required placeholder="john@example.com" className="w-full border border-[#E8E2D9] rounded px-4 py-3 text-ink focus:outline-none focus:border-[#C9922A] transition-colors" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-ink mb-1">Phone Number *</label>
          <input name="phone" type="tel" required placeholder="(555) 000-0000" className="w-full border border-[#E8E2D9] rounded px-4 py-3 text-ink focus:outline-none focus:border-[#C9922A] transition-colors" />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink mb-1">Zip Code *</label>
          <input name="zip" type="text" required placeholder="92612" maxLength={5} className="w-full border border-[#E8E2D9] rounded px-4 py-3 text-ink focus:outline-none focus:border-[#C9922A] transition-colors" />
        </div>
      </div>

      <div className="border-t border-warm-line pt-4">
        <h4 className="font-semibold text-ink mb-3">List all your creditors with the approximate balance</h4>
        <div className="space-y-2">
          {creditors.map((creditor, i) => (
            <div key={i} className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder={`Creditor ${i + 1} Name`}
                value={creditor.name}
                onChange={(e) => updateCreditor(i, "name", e.target.value)}
                className="border border-[#E8E2D9] rounded px-4 py-3 text-ink focus:outline-none focus:border-[#C9922A] transition-colors"
              />
              <input
                type="text"
                placeholder="Balance ($)"
                value={creditor.balance}
                onChange={(e) => updateCreditor(i, "balance", e.target.value)}
                className="border border-[#E8E2D9] rounded px-4 py-3 text-ink focus:outline-none focus:border-[#C9922A] transition-colors"
              />
            </div>
          ))}
        </div>
        {creditors.length < 4 && (
          <button type="button" onClick={addCreditor} className="mt-3 flex items-center gap-2 text-[#C9922A] text-sm font-medium hover:text-[#A87820] transition-colors">
            <PlusCircle size={18} /> Add Creditor
          </button>
        )}
      </div>

      <label className="flex items-start gap-3 text-ink-lt text-xs leading-relaxed cursor-pointer">
        <input
          type="checkbox"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-4 w-4 flex-shrink-0 accent-[#C9922A] cursor-pointer"
        />
        <span>
          By checking this box I provide express written consent for Pacific Associates to contact me via phone or text regarding my debt relief options.
        </span>
      </label>

      <Turnstile
        ref={turnstileRef}
        siteKey={TURNSTILE_SITE_KEY}
        onSuccess={setToken}
        onError={() => setToken("")}
        onExpire={() => setToken("")}
        options={{ theme: "light" }}
      />

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={loading || !consent || !token}
        className="w-full py-3.5 rounded bg-[#C9922A] text-white font-bold text-lg hover:bg-[#A87820] transition-all hover:-translate-y-0.5 shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Submitting..." : "Get My Free Quote"}
      </button>
    </form>
  );
}
