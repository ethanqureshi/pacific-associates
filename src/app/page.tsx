import type { Metadata } from "next";
import Link from "next/link";
import { Award, Star, Clock, ShieldCheck, ChevronRight } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import AnimatedCounter from "@/components/AnimatedCounter";
import TestimonialCard from "@/components/TestimonialCard";
import HeroContent from "@/components/HeroContent";
import TrackedCall from "@/components/TrackedCall";

export const metadata: Metadata = {
  title: "Pacific Associates | Debt Consolidation Irvine CA",
  description:
    "One of the nation's highest rated debt consolidation companies for over two decades. Get out of debt in 24–48 months with payments lower than your current minimums.",
};

const testimonials = [
  { name: "Jennifer W.", source: "TrustLink", text: "After being introduced to Pacific Associates, I was able to eliminate over $30,000 in credit card debt. Shain and Roger explained every step clearly and someone was always available when I had questions." },
  { name: "Tony D.", source: "BBB", text: "Pacific Associates helped me eliminate my credit card debt completely over three and a half years. Everyone was upfront and helpful from day one. I'd recommend them to anyone." },
  { name: "Eddie B.", source: "BBB", text: "I came to Pacific Associates with debt that felt impossible. They gave me a real plan and real results. I have not seen this level of customer service anywhere else." },
  { name: "David G.", source: "TrustLink", text: "From day one they handled everything. They called back immediately and kept me updated throughout. The best customer service I have ever experienced." },
  { name: "Ann M.", source: "BBB", text: "The team supported me in all aspects. I was a basket case emotionally. I am grateful for their help and service." },
  { name: "Melvin B.", source: "BBB", text: "I worked with Roger Yong and had an exemplary time. I have already recommended this company to my family and friends." },
  { name: "Mary K G.", source: "BBB", text: "Pacific Associates has been truly wonderful. They are just a phone call away. A very honest company." },
  { name: "Vic J.", source: "BBB", text: "Excellent company. Any problems with creditors arose was taken care of immediately. I highly recommend them." },
];

export default function HomePage() {
  return (
    <>
      <HeroContent />

      {/* Social proof strip */}
      <div className="bg-[#F3F0EB] border-y border-[#E8E2D9] py-4 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-0 divide-x divide-[#C9922A]/40">
            {[
              "A+ BBB Rating for 20+ Years",
              "4.99/5 Average Review Score",
              "27 Years in Business",
              "Zero Customer Complaints",
            ].map((item) => (
              <span
                key={item}
                className="px-6 py-1 text-xs font-semibold tracking-widest uppercase text-navy first:pl-0 last:pr-0"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Stats — stone background */}
      <section className="bg-[#F3F0EB] py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <FadeUp delay={0}>
              <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-[#E8E2D9] hover:border-[#C9922A] hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <Award className="mx-auto mb-2 text-[#C9922A]" size={28} />
                <div className="text-4xl font-bold text-navy mb-0.5" style={{ fontFamily: "var(--font-cormorant)" }}>A+</div>
                <p className="text-ink-mid text-sm font-medium">BBB Rating</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-[#E8E2D9] hover:border-[#C9922A] hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="flex justify-center gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="fill-[#C9922A] text-[#C9922A]" size={16} />)}
                </div>
                <div className="text-4xl font-bold text-navy mb-0.5" style={{ fontFamily: "var(--font-cormorant)" }}>
                  <AnimatedCounter end={4.99} decimals={2} />
                  <span className="text-xl text-[#888888]">/5</span>
                </div>
                <p className="text-ink-mid text-sm font-medium">Average Review</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-[#E8E2D9] hover:border-[#C9922A] hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <Clock className="mx-auto mb-2 text-[#C9922A]" size={28} />
                <div className="text-4xl font-bold text-navy mb-0.5" style={{ fontFamily: "var(--font-cormorant)" }}>
                  <AnimatedCounter end={27} suffix="+" />
                </div>
                <p className="text-ink-mid text-sm font-medium">Years in Business</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-[#E8E2D9] hover:border-[#C9922A] hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <ShieldCheck className="mx-auto mb-2 text-[#C9922A]" size={28} />
                <div className="text-4xl font-bold text-navy mb-0.5" style={{ fontFamily: "var(--font-cormorant)" }}>0</div>
                <p className="text-ink-mid text-sm font-medium">Customer Complaints</p>
              </div>
            </FadeUp>
          </div>
          <FadeUp delay={0.35} className="text-center mt-6">
            <a
              href="https://www.bbb.org/us/ca/irvine/profile/debt-relief-services/pacific-associates-1126-13132048"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded bg-[#C9922A] text-white font-bold hover:bg-[#A87820] transition-all hover:-translate-y-0.5 shadow-md"
            >
              Read Our BBB Reviews <ChevronRight size={18} />
            </a>
          </FadeUp>
        </div>
      </section>

      {/* How It Works + Video */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <h2 className="text-4xl font-bold text-navy mb-3">How It Works</h2>
            <p className="text-ink-mid text-lg mb-8">
              Watch this short video to see how Pacific Associates can help you get out of debt.
            </p>
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

      {/* Testimonials */}
      <section className="bg-[#F3F0EB] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeUp className="text-center mb-10">
            <h2 className="text-4xl font-bold text-navy mb-3">What Our Clients Say</h2>
            <p className="text-ink-mid text-lg max-w-2xl mx-auto">
              Thousands of Americans have trusted Pacific Associates to achieve financial freedom.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#FDF6E9] py-16 px-4 border-y border-[#E8E2D9]">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <h2 className="text-4xl font-bold text-navy mb-4">
              Ready to Take Back Control of Your Finances?
            </h2>
            <p className="text-ink-mid text-lg mb-7">
              Start your journey to financial freedom — no obligation, no cost, no pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/free-quote"
                className="w-full sm:w-auto px-8 py-4 rounded bg-[#C9922A] text-white font-bold text-lg hover:bg-[#A87820] transition-all hover:-translate-y-0.5 shadow-lg text-center"
              >
                Get Free Quote
              </Link>
              <TrackedCall
                location="home_cta_banner"
                className="w-full sm:w-auto px-8 py-4 rounded bg-navy text-white font-bold text-lg hover:bg-[#243860] transition-all hover:-translate-y-0.5 shadow-lg text-center"
              >
                Call 866-295-7500
              </TrackedCall>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
