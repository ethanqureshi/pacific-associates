import type { Metadata } from "next";
import Link from "next/link";
import { Award, Star, Clock, ShieldCheck, ChevronRight } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import AnimatedCounter from "@/components/AnimatedCounter";
import TestimonialCard from "@/components/TestimonialCard";
import HeroContent from "@/components/HeroContent";

export const metadata: Metadata = {
  title: "Pacific Associates | Debt Consolidation Irvine CA",
  description:
    "One of the nation’s highest rated debt consolidation companies for over two decades. Get out of debt in 24–48 months with payments lower than your current minimums.",
};

const testimonials = [
  { name: "Jennifer W.", source: "TrustLink", text: "The process was easy. Shain and Roger explained every step. Someone was always available to answer my questions." },
  { name: "Tony D.", source: "BBB", text: "Thank you for your help over three and a half years getting me debt free. Very upfront and helpful from the start." },
  { name: "Eddie B.", source: "BBB", text: "Pacific Associates answered my prayers. I have not seen this type of customer service in a long time. They provided a true plan to recover my life." },
  { name: "David G.", source: "TrustLink", text: "From day one they took care of everything. They call you back right away. Best customer service bar none." },
  { name: "Ann M.", source: "BBB", text: "The team supported me in all aspects. I was a basket case emotionally. I am grateful for their help and service." },
  { name: "Melvin B.", source: "BBB", text: "I worked with Roger Yong and had an exemplary time. I have already recommended this company to my family and friends." },
  { name: "Mary K G.", source: "BBB", text: "Pacific Associates has been truly wonderful. They are just a phone call away. A very honest company." },
  { name: "Vic J.", source: "BBB", text: "Excellent company. Any problems with creditors arose was taken care of immediately. I highly recommend them." },
];

export default function HomePage() {
  return (
    <>
      <HeroContent />

      {/* Stats — edge to edge, tight */}
      <section className="bg-navy py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <FadeUp delay={0}>
              <div className="bg-white rounded-xl p-5 text-center shadow-md border-2 border-transparent hover:border-teal transition-all duration-300 hover:-translate-y-1">
                <Award className="mx-auto mb-2 text-teal" size={32} />
                <div className="text-4xl font-bold text-navy mb-0.5" style={{ fontFamily: "var(--font-cormorant)" }}>A+</div>
                <p className="text-ink-mid text-sm font-medium">BBB Rating</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="bg-white rounded-xl p-5 text-center shadow-md border-2 border-transparent hover:border-teal transition-all duration-300 hover:-translate-y-1">
                <div className="flex justify-center gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="fill-yellow-400 text-yellow-400" size={16} />)}
                </div>
                <div className="text-4xl font-bold text-navy mb-0.5" style={{ fontFamily: "var(--font-cormorant)" }}>
                  <AnimatedCounter end={4.99} decimals={2} />
                  <span className="text-xl text-ink-lt">/5</span>
                </div>
                <p className="text-ink-mid text-sm font-medium">Average Review</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="bg-white rounded-xl p-5 text-center shadow-md border-2 border-transparent hover:border-teal transition-all duration-300 hover:-translate-y-1">
                <Clock className="mx-auto mb-2 text-teal" size={32} />
                <div className="text-4xl font-bold text-navy mb-0.5" style={{ fontFamily: "var(--font-cormorant)" }}>
                  <AnimatedCounter end={25} suffix="+" />
                </div>
                <p className="text-ink-mid text-sm font-medium">Years in Business</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="bg-white rounded-xl p-5 text-center shadow-md border-2 border-transparent hover:border-teal transition-all duration-300 hover:-translate-y-1">
                <ShieldCheck className="mx-auto mb-2 text-teal" size={32} />
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
              className="inline-flex items-center gap-2 px-7 py-3 rounded bg-green-cta text-white font-bold hover:bg-[#43a047] transition-all hover:-translate-y-0.5 shadow-md"
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

      {/* Testimonials — 3 col max */}
      <section className="bg-cream py-16 px-4">
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
      <section className="bg-teal py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Take Back Control of Your Finances?
            </h2>
            <p className="text-white/80 text-lg mb-7">
              Start your journey to financial freedom — no obligation, no cost, no pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/free-quote"
                className="w-full sm:w-auto px-8 py-4 rounded bg-green-cta text-white font-bold text-lg hover:bg-[#43a047] transition-all hover:-translate-y-0.5 shadow-lg text-center"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:8662957500"
                className="w-full sm:w-auto px-8 py-4 rounded bg-white text-teal font-bold text-lg hover:bg-cream transition-all hover:-translate-y-0.5 shadow-lg text-center"
              >
                Call 866-295-7500
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
