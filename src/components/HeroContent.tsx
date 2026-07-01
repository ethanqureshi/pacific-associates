"use client";
import { motion } from "framer-motion";

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
      <div className="relative w-full max-w-4xl mx-auto px-6 py-20">
        {/* Headline + subtext */}
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
      </div>
    </section>
  );
}
