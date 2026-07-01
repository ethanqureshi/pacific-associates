import type { Metadata } from "next";
import Link from "next/link";
import { Phone, UserCheck, Handshake, DollarSign, CheckCircle2 } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "How It Works",
  description: "Learn how Pacific Associates debt consolidation works in 5 simple steps. Get out of debt in 24–48 months with one lower monthly payment.",
};

const steps = [
  { icon: Phone, title: "Call or Request a Quote", description: "Contact us for a free, no-obligation consultation. We’ll gather basic information about your debt situation at no cost to you." },
  { icon: UserCheck, title: "We Review Your Situation", description: "A personal case manager is assigned to your account to review your debts and create a customized plan tailored to your needs." },
  { icon: Handshake, title: "We Contact Your Creditors", description: "All negotiations are handled entirely by us. You don’t have to deal with creditors or collectors — we take over completely." },
  { icon: DollarSign, title: "You Make One Monthly Payment", description: "Make a single monthly payment — lower than your current minimum payments combined — into a dedicated account we manage for you." },
  { icon: CheckCircle2, title: "Debt Free in 24–48 Months", description: "A clear timeline with a real end date. Most clients complete the program in 2 to 4 years and walk away completely debt free." },
];

const faqs = [
  { question: "Will this affect my credit score?", answer: "There may be a short-term impact on your credit score when you enroll. However, most clients see significant improvement after completing the program, as their debt is resolved and their debt-to-income ratio improves substantially." },
  { question: "What types of debt qualify?", answer: "Our program primarily handles unsecured debt, such as credit card balances. Mortgages, auto loans, and student loans are not eligible for our program." },
  { question: "How much does it cost?", answer: "Our fees range from 20% to 30% of the enrolled debt. Importantly, these fees are charged only after we successfully settle a debt — there are no upfront fees whatsoever." },
  { question: "How long does it take?", answer: "Most clients complete the program in 24 to 48 months, depending on the total amount of debt enrolled. Your case manager will provide a personalized timeline at no obligation." },
  { question: "What states are excluded?", answer: "Our program is not currently available in Hawaii, Kansas, Oregon, New Jersey, New Mexico, New York, North Carolina, Washington, or Wyoming." },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-navy py-14 sm:py-20 px-4 text-center">
        <FadeUp>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">How It Works</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            Our simple 5-step process gets you out of debt in 24–48 months.
          </p>
        </FadeUp>
      </section>

      <section className="bg-white py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {steps.map((step, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#C9922A] flex items-center justify-center shadow-lg">
                    <step.icon className="text-white" size={28} />
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-[#C9922A] text-xs font-bold uppercase tracking-widest mb-1">Step {i + 1}</p>
                    <h3 className="text-2xl font-bold text-navy mb-2">{step.title}</h3>
                    <p className="text-ink-mid leading-relaxed text-lg">{step.description}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <h2 className="text-4xl font-bold text-navy mb-8">Watch How Our Program Works</h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/OwU-QsXMgaM?rel=0"
                title="How Pacific Associates Works"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <FadeUp className="mb-10">
            <h2 className="text-4xl font-bold text-navy">Frequently Asked Questions</h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <FaqAccordion items={faqs} />
          </FadeUp>
        </div>
      </section>

      <section className="bg-[#FDF6E9] py-16 px-4 text-center border-t border-[#E8E2D9]">
        <FadeUp>
          <h2 className="text-4xl font-bold text-navy mb-6">Ready to Start Your Journey?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-quote" className="px-8 py-4 rounded bg-[#C9922A] text-white font-bold text-lg hover:bg-[#A87820] transition-all hover:-translate-y-0.5 shadow-lg">
              Get Free Quote
            </Link>
            <a href="tel:8662957500" className="px-8 py-4 rounded bg-navy text-white font-bold text-lg hover:bg-[#243860] transition-all hover:-translate-y-0.5 shadow-lg">
              Call 866-295-7500
            </a>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
