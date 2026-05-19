"use client";
import { motion } from "framer-motion";
import { Award, Star, ShieldCheck } from "lucide-react";
import InlineQuoteForm from "@/components/InlineQuoteForm";

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

export default function HeroContent() {
  return (
    <section
      className="relative overflow-hidden min-h-[70vh] flex items-center"
      style={{ background: "radial-gradient(ellipse at 60% 50%, #112240 0%, #0a1628 65%)" }}
    >
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #1a6b6b 0, #1a6b6b 1px, transparent 0, transparent 50%)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left: headline + subtext + phone */}
        <div>
          <motion.div custom={0} initial="hidden" animate="visible" variants={item}>
            <span className="inline-block text-teal-lt text-xs font-semibold uppercase tracking-widest mb-5 border border-teal/30 rounded-full px-4 py-1.5">
              A+ BBB Rated &middot; 25+ Years in Business
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={item}
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Secure your financial freedom today.
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={item}
            className="text-lg text-white/70 leading-relaxed mb-7"
          >
            We&apos;ve been one of the nation&apos;s highest rated debt consolidation companies for over two decades.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={item}
            className="flex flex-wrap items-center gap-5"
          >
            <div className="flex items-center gap-2">
              <Award size={18} className="text-teal-lt" />
              <span className="text-white/60 text-sm">A+ BBB Rating</span>
            </div>
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />)}
              <span className="text-white/60 text-sm ml-1">4.99/5</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-teal-lt" />
              <span className="text-white/60 text-sm">0 Complaints</span>
            </div>
          </motion.div>

          <motion.div custom={4} initial="hidden" animate="visible" variants={item} className="mt-6">
            <a
              href="tel:8662957500"
              className="text-teal-lt font-semibold hover:underline text-base"
            >
              Questions? Call 866-295-7500
            </a>
          </motion.div>
        </div>

        {/* Right: quote form card */}
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={item}
          className="bg-white rounded-2xl shadow-2xl p-7"
        >
          <h2 className="text-2xl font-bold text-navy mb-1" style={{ fontFamily: "var(--font-cormorant)" }}>
            Get a Free Quote Today
          </h2>
          <p className="text-ink-lt text-sm mb-5">Personalized quote within 24 hours.</p>
          <InlineQuoteForm />
        </motion.div>
      </div>
    </section>
  );
}
