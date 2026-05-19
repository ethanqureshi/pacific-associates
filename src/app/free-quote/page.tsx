import type { Metadata } from "next";
import { Award, Star, Clock, ShieldCheck } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description:
    "Get your free, no-obligation debt consolidation quote from Pacific Associates. Personalized quote within 24 hours. No pressure, no cost.",
};

export default function FreeQuotePage() {
  return (
    <section className="bg-[#F3F0EB] min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeUp className="text-center mb-12">
          <h1 className="text-5xl font-bold text-navy mb-4">Let’s get your free quote</h1>
          <p className="text-ink-mid text-xl max-w-2xl mx-auto">
            Fill out the form below and receive your personalized quote within 24 hours. No obligation, no cost, no pressure.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <FadeUp>
              <div className="bg-white rounded-xl shadow-sm border border-[#E8E2D9] p-8">
                <QuoteForm />
              </div>
            </FadeUp>
          </div>

          <div className="lg:col-span-1">
            <FadeUp delay={0.2}>
              <div className="bg-navy rounded-xl p-8 text-white sticky top-28 space-y-6">
                <div className="flex items-center gap-3">
                  <Award className="text-[#E5B04A] flex-shrink-0" size={32} />
                  <div>
                    <p className="text-2xl font-bold">A+ Rating</p>
                    <p className="text-white/55 text-sm">BBB Accredited Business</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex gap-0.5 flex-shrink-0">
                    {[...Array(5)].map((_, i) => <Star key={i} className="fill-yellow-400 text-yellow-400" size={16} />)}
                  </div>
                  <div>
                    <p className="font-bold">4.99 / 5 Stars</p>
                    <p className="text-white/55 text-sm">Average Review Rating</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="text-[#E5B04A] flex-shrink-0" size={28} />
                  <div>
                    <p className="font-bold">25+ Years</p>
                    <p className="text-white/55 text-sm">In Business</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-[#E5B04A] flex-shrink-0" size={28} />
                  <div>
                    <p className="font-bold">Zero Complaints</p>
                    <p className="text-white/55 text-sm">Customer Satisfaction</p>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <p className="text-white/55 text-sm mb-2">Talk to an expert now</p>
                  <a href="tel:8662957500" className="text-2xl font-bold text-[#E5B04A] hover:underline block mb-4">
                    866-295-7500
                  </a>
                  <a
                    href="tel:8662957500"
                    className="w-full block text-center py-3 rounded bg-[#C9922A] text-white font-bold hover:bg-[#A87820] transition-all"
                  >
                    Call Me Now
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
