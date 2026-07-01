import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Watch videos from Pacific Associates to learn how our debt consolidation program works and how we help clients get out of debt in 24–48 months.",
};

// Videos from the Pacific Associates YouTube channel
// (https://www.youtube.com/@pacificassociates3045/videos).
const videos = [
  { id: "OwU-QsXMgaM", title: "Pacific Associates Intro" },
  { id: "1wt_mX4IjdY", title: "Why Pacific Associates is Different" },
  { id: "QnsbXE-x9R4", title: "How We Make Money at Pacific Associates" },
  { id: "BPYN2wr4jow", title: "Credit Score - Pacific Associates" },
  { id: "lCHbJW7bHqA", title: "Closing Cards - Pacific Associates" },
  { id: "oTMgI_bAIUQ", title: "Hardship Program Overview" },
  { id: "qi9Hq3uUnP8", title: "Happy Customers!" },
  { id: "cqBwXE_91-s", title: "Brian Testimonial - Pacific Associates" },
  { id: "JRblC23lHzI", title: "Barb Testimonial - Pacific Associates" },
];

export default function VideosPage() {
  return (
    <>
      <section className="bg-navy py-14 sm:py-20 px-4 text-center">
        <FadeUp>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Learn How Pacific Associates Works
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            Watch our videos to understand how our debt consolidation program helps you achieve financial freedom.
          </p>
        </FadeUp>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {videos.map((v, i) => (
              <FadeUp key={v.id} delay={(i % 3) * 0.1}>
                <div className="rounded-xl overflow-hidden shadow-lg border border-[#E8E2D9] bg-white h-full">
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${v.id}?rel=0`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-navy text-sm leading-snug">{v.title}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

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
