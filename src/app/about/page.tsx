import type { Metadata } from "next";
import Link from "next/link";
import { TrendingDown, HeartHandshake, ThumbsUp, Award } from "lucide-react";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "About Us",
  description: "Pacific Associates — A+ BBB rated debt consolidation company with over 20 years helping clients achieve financial freedom in 24–48 months.",
};

const valueProps = [
  {
    icon: TrendingDown,
    title: "Say Goodbye to High Interest Rates",
    text: "Our debt assistance program offers relief from high interest rate credit card debt, helping you break free from the cycle of minimum payments that never seem to end.",
  },
  {
    icon: HeartHandshake,
    title: "We Provide Help When You Need It Most",
    text: "Our client service team is here for you 24/7. You’ll always have a dedicated case manager who knows your situation and is ready to assist.",
  },
  {
    icon: ThumbsUp,
    title: "Customer Satisfaction Guaranteed",
    text: "We genuinely care about our clients. Our zero complaint record with the BBB reflects our unwavering commitment to doing right by every person we serve.",
  },
];

const pullQuotes = [
  { name: "Tony D.", text: "Thank you for your help over three and a half years." },
  { name: "Ann M.", text: "The team was extremely helpful. I was a basket case emotionally. I highly recommend this company." },
  { name: "Eddie B.", text: "Pacific Associates answered my prayers. Enormous respect for Shain and Roger who provided a true plan to recover my life." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Get Out of Debt Today
            </h1>
            <p className="text-xl text-white/75 leading-relaxed">
              Our program will get you completely out of debt within 24–48 months with payments lower than your current minimums.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <p className="text-ink-mid text-lg leading-relaxed mb-5">
              Credit card companies can legally charge interest rates from 7–10% to 25–30% for any reason, leaving hard-working individuals in financial distress. These high interest rates prevent investment in businesses, retirement plans, and basic family needs.
            </p>
            <p className="text-ink-mid text-lg leading-relaxed mb-8">
              We work with all major credit card companies and can eliminate these high interest rates to get you back on track.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex items-center gap-3 bg-[#FDF6E9] rounded-lg px-5 py-4">
                <Award className="text-[#C9922A] flex-shrink-0" size={30} />
                <div>
                  <p className="font-bold text-navy text-lg">A+ BBB Rating</p>
                  <p className="text-[#888888] text-sm">For Over 20 Years</p>
                </div>
              </div>
              <a href="tel:9492506700" className="text-[#C9922A] font-bold text-lg hover:underline">
                Call 949-250-6700
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="bg-cream py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeUp className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy">Why Pacific Associates?</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProps.map((prop, i) => (
              <FadeUp key={i} delay={i * 0.15}>
                <div className="bg-white rounded-xl p-8 shadow-sm border border-[#E8E2D9] hover:border-[#C9922A] hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 rounded-lg bg-[#FDF6E9] flex items-center justify-center mb-5">
                    <prop.icon className="text-[#C9922A]" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{prop.title}</h3>
                  <p className="text-ink-mid leading-relaxed">{prop.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {pullQuotes.map((q, i) => (
              <FadeUp key={i} delay={i * 0.15}>
                <div className="text-center px-4">
                  <div className="text-[#E5B04A] text-7xl leading-none mb-3" style={{ fontFamily: "var(--font-cormorant)" }}>&ldquo;</div>
                  <p className="text-white/85 text-lg italic leading-relaxed mb-4">{q.text}</p>
                  <p className="text-[#E5B04A] font-semibold">— {q.name}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FDF6E9] py-16 px-4 text-center border-t border-[#E8E2D9]">
        <FadeUp>
          <h2 className="text-4xl font-bold text-navy mb-6">Ready to Get Started?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-quote" className="px-8 py-4 rounded bg-[#C9922A] text-white font-bold text-lg hover:bg-[#A87820] transition-all hover:-translate-y-0.5 shadow-lg">
              Get Free Quote
            </Link>
            <a href="tel:9492506700" className="px-8 py-4 rounded bg-navy text-white font-bold text-lg hover:bg-[#243860] transition-all hover:-translate-y-0.5 shadow-lg">
              Call 949-250-6700
            </a>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
