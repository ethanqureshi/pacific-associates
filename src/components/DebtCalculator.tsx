"use client";
import { useState, useMemo } from "react";
import Link from "next/link";

function formatCurrency(n: number) {
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

export default function DebtCalculator() {
  const [debt, setDebt] = useState(35000);
  const [rate, setRate] = useState(18);

  const results = useMemo(() => {
    const monthlyRate = rate / 100 / 12;
    const minPayment = Math.max(Math.round(debt * 0.02), 25);
    let payoffMonths: number;
    if (monthlyRate === 0) {
      payoffMonths = debt / minPayment;
    } else {
      const interest = monthlyRate * debt;
      if (minPayment <= interest) {
        payoffMonths = Infinity;
      } else {
        payoffMonths =
          Math.log(minPayment / (minPayment - interest)) /
          Math.log(1 + monthlyRate);
      }
    }
    const paMonthly = Math.round(minPayment * 0.5);
    return { minPayment, payoffMonths, paMonthly };
  }, [debt, rate]);

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2
            className="text-4xl font-bold text-navy mb-3"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            See How Much You Could Save
          </h2>
          <p className="text-ink-mid text-lg">
            Adjust the sliders to see your estimated savings with Pacific Associates.
          </p>
        </div>

        {/* Sliders */}
        <div className="bg-[#FAFAF8] rounded-2xl border border-[#E8E2D9] p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold text-navy uppercase tracking-wider">
                  Total Debt Amount
                </label>
                <span className="text-xl font-bold text-[#C9922A]">{formatCurrency(debt)}</span>
              </div>
              <input
                type="range"
                min={5000}
                max={150000}
                step={1000}
                value={debt}
                onChange={(e) => setDebt(Number(e.target.value))}
                className="w-full h-2 bg-[#E8E2D9] rounded-full appearance-none cursor-pointer accent-[#C9922A]"
              />
              <div className="flex justify-between text-xs text-[#888888] mt-1.5">
                <span>$5,000</span>
                <span>$150,000</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold text-navy uppercase tracking-wider">
                  Current Interest Rate
                </label>
                <span className="text-xl font-bold text-[#C9922A]">{rate}%</span>
              </div>
              <input
                type="range"
                min={5}
                max={30}
                step={0.5}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full h-2 bg-[#E8E2D9] rounded-full appearance-none cursor-pointer accent-[#C9922A]"
              />
              <div className="flex justify-between text-xs text-[#888888] mt-1.5">
                <span>5%</span>
                <span>30%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Result cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 border border-[#E8E2D9] shadow-sm text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#4A4A4A] mb-2">
              Current Monthly Minimum
            </p>
            <p
              className="text-4xl font-bold text-navy mb-1"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {formatCurrency(results.minPayment)}
            </p>
            <p className="text-xs text-[#888888]">est. 2% of balance</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-[#E8E2D9] shadow-sm text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#4A4A4A] mb-2">
              Payoff Time at Minimum
            </p>
            <p
              className="text-4xl font-bold text-navy mb-1"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {formatMonths(results.payoffMonths)}
            </p>
            <p className="text-xs text-[#888888]">paying minimum only</p>
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
            <p className="text-xs text-[#888888]">estimated monthly payment</p>
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
