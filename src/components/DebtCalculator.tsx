"use client";
import { useState, useMemo } from "react";
import Link from "next/link";

function formatCurrency(n: number) {
  if (!isFinite(n)) return "—";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

function formatMonths(n: number) {
  if (!isFinite(n) || n > 600) return "Never";
  const years = Math.floor(n / 12);
  const months = Math.round(n % 12);
  if (years === 0) return `${months} mo`;
  if (months === 0) return `${years} yr`;
  return `${years} yr ${months} mo`;
}

const DEBT_MIN = 5000;
const DEBT_MAX = 100000;
const RATE_MIN = 5;
const RATE_MAX = 30;

// Industry debt-settlement model (à la Freedom Debt Relief / Americor):
// enrolled debt is resolved for ~60% of the balance over a 24–48 month term.
const PAYBACK_RATE = 0.6;

export default function DebtCalculator() {
  const [debt, setDebt] = useState(25000);
  const [rate, setRate] = useState(22);

  const results = useMemo(() => {
    // Path 1: paying only the minimum (est. 2% of balance, fixed).
    const monthlyRate = rate / 100 / 12;
    const minPayment = Math.max(Math.round(debt * 0.02), 25);
    const interest = monthlyRate * debt;
    let minMonths: number;
    if (monthlyRate === 0) minMonths = debt / minPayment;
    else if (minPayment <= interest) minMonths = Infinity;
    else
      minMonths =
        Math.log(minPayment / (minPayment - interest)) /
        Math.log(1 + monthlyRate);
    const minTotalPaid = isFinite(minMonths) ? minPayment * minMonths : Infinity;

    // Path 2: Pacific Associates program.
    const programMonths = Math.round(
      Math.min(48, Math.max(24, 24 + ((debt - 20000) / 80000) * 24)),
    );
    const programTotal = debt * PAYBACK_RATE;
    const paMonthly = Math.round(programTotal / programMonths);
    const savings = Math.round(debt - programTotal);

    return { minMonths, minTotalPaid, programMonths, paMonthly, savings };
  }, [debt, rate]);

  const debtPct = ((debt - DEBT_MIN) / (DEBT_MAX - DEBT_MIN)) * 100;
  const ratePct = ((rate - RATE_MIN) / (RATE_MAX - RATE_MIN)) * 100;
  const fill = (pct: number) =>
    `linear-gradient(to right, #C9922A 0%, #C9922A ${pct}%, #E8E2D9 ${pct}%, #E8E2D9 100%)`;

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto flex flex-col">
        <div className="text-center mb-6">
          <h2
            className="text-4xl font-bold text-navy mb-3"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            See How Much You Could Save
          </h2>
          <p className="text-ink-mid text-lg">
            Slide to your total debt and see your estimated Pacific Associates program.
          </p>
        </div>

        {/* Sliders */}
        <div className="bg-[#FAFAF8] rounded-2xl border border-[#E8E2D9] p-8 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-semibold text-navy uppercase tracking-wider">
                  Total Debt Amount
                </label>
                <span className="text-2xl font-bold text-[#C9922A]">{formatCurrency(debt)}</span>
              </div>
              <input
                type="range"
                min={DEBT_MIN}
                max={DEBT_MAX}
                step={1000}
                value={debt}
                onChange={(e) => setDebt(Number(e.target.value))}
                className="pa-slider cursor-pointer"
                style={{ background: fill(debtPct) }}
                aria-label="Total debt amount"
              />
              <div className="flex justify-between text-xs text-[#888888] mt-2">
                <span>$5,000</span>
                <span>$100,000+</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-semibold text-navy uppercase tracking-wider">
                  Current Interest Rate
                </label>
                <span className="text-2xl font-bold text-[#C9922A]">{rate}%</span>
              </div>
              <input
                type="range"
                min={RATE_MIN}
                max={RATE_MAX}
                step={0.5}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="pa-slider cursor-pointer"
                style={{ background: fill(ratePct) }}
                aria-label="Current interest rate"
              />
              <div className="flex justify-between text-xs text-[#888888] mt-2">
                <span>5%</span>
                <span>30%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Result cards — ordered last so the CTA stays high on the page */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 order-last mt-8">
          <div className="bg-white rounded-xl p-6 border border-[#E8E2D9] shadow-sm text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#4A4A4A] mb-2">
              Paying Only Minimums
            </p>
            <p
              className="text-4xl font-bold text-navy mb-1"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {formatMonths(results.minMonths)}
            </p>
            <p className="text-xs text-[#888888]">
              {isFinite(results.minTotalPaid)
                ? `${formatCurrency(results.minTotalPaid)} paid in total`
                : "balance may never clear"}
            </p>
          </div>
          <div className="bg-[#FDF6E9] rounded-xl p-6 border border-[#C9922A]/30 shadow-sm text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#C9922A] mb-2">
              PA Program Payment
            </p>
            <p
              className="text-4xl font-bold text-[#C9922A] mb-1"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {formatCurrency(results.paMonthly)}
            </p>
            <p className="text-xs text-[#888888]">
              per month for {results.programMonths} months
            </p>
          </div>
          <div className="bg-navy rounded-xl p-6 shadow-sm text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#E5B04A] mb-2">
              Estimated Savings
            </p>
            <p
              className="text-4xl font-bold text-white mb-1"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {formatCurrency(results.savings)}
            </p>
            <p className="text-xs text-white/55">
              debt-free in ~{results.programMonths} months
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/free-quote"
            className="inline-block px-8 py-4 rounded bg-[#C9922A] text-white font-bold text-lg hover:bg-[#A87820] transition-all hover:-translate-y-0.5 shadow-md"
          >
            Get Your Free Quote
          </Link>
          <p className="text-[#888888] text-xs mt-3">
            No obligation. No cost. Results are estimates for illustrative purposes.
          </p>
        </div>
      </div>
    </section>
  );
}
