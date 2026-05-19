"use client";
import { motion } from "framer-motion";
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
    <section className="relative overflow-hidden bg-white min-h-[75vh] flex items-center">
      <div className="relative w-full max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: headline + subtext */}
        <div>
          <motion.div custom={0} initial="hidden" animate="visible" variants={item}>
            <span className="inline-block text-[#C9922A] text-xs font-semibold uppercase tracking-widest mb-6">
              A+ BBB Rated &middot; 27 Years in Business
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={item}
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-navy leading-tight mb-5"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Secure your{" "}
            <span className="relative inline-block">
              financial freedom
              <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#C9922A] rounded-full" />
            </span>
            {" "}today.
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={item}
            className="text-lg text-ink-mid leading-relaxed mb-8"
          >
            We&apos;ve been one of the nation&apos;s highest rated debt consolidation companies for over two decades.
          </motion.p>

          <motion.div custom={3} initial="hidden" animate="visible" variants={item}>
            <a href="tel:8662957500" className="text-[#C9922A] font-semibold hover:underline text-base">
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
          className="bg-[#F3F0EB] rounded-2xl border border-[#E8E2D9] p-7 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-navy mb-1" style={{ fontFamily: "var(--font-cormorant)" }}>
            Get a Free Quote Today
          </h2>
          <p className="text-ink-mid text-sm mb-5">Personalized quote within 24 hours.</p>
          <InlineQuoteForm />
        </motion.div>
      </div>
    </section>
  );
}
