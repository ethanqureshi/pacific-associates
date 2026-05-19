import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Videos",
  description: "Watch videos to learn how Pacific Associates debt consolidation program works and how we can help you get out of debt in 24–48 months.",
};

export default function VideosPage() {
  return (
    <>
      <section className="bg-navy py-20 px-4 text-center">
        <FadeUp>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Learn How Pacific Associates Works
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            Watch our video to understand how our debt consolidation program helps you achieve financial freedom.
          </p>
        </FadeUp>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl mb-12">
              <iframe
                src="https://www.youtube.com/embed/OwU-QsXMgaM?rel=0"
                title="How Pacific Associates Works"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </FadeUp>

          <FadeUp delay={0.2} className="text-center">
            <p className="text-ink-mid text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Our program is designed to help people eliminate high-interest credit card debt in 24–48 months. With one lower monthly payment and expert negotiators working on your behalf, financial freedom is within reach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/free-quote"
                className="px-8 py-4 rounded bg-[#C9922A] text-white font-bold text-lg hover:bg-[#A87820] transition-all hover:-translate-y-0.5 shadow-lg"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:8662957500"
                className="px-8 py-4 rounded bg-navy text-white font-bold text-lg hover:bg-[#243860] transition-all hover:-translate-y-0.5 shadow-lg inline-flex items-center gap-2 justify-center"
              >
                <Phone size={20} />
                Call 866-295-7500
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
