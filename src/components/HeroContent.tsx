"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Award, Star, Clock, ShieldCheck } from "lucide-react";
import TrackedCall from "@/components/TrackedCall";

const BBB_URL =
  "https://www.bbb.org/us/ca/irvine/profile/debt-relief-services/pacific-associates-1126-13132048";

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
      <div className="relative w-full max-w-7xl mx-auto px-6 py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* Left: headline + subtext */}
        <div>
          <motion.div custom={0} initial="hidden" animate="visible" variants={item}>
            <span className="inline-block text-[#C9922A] text-sm font-bold uppercase tracking-widest mb-6">
              See why we&rsquo;re different!
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

          <motion.div custom={3} initial="hidden" animate="visible" variants={item} className="mb-6">
            <Link
              href="/free-quote"
              className="inline-block px-8 py-4 rounded bg-[#C9922A] text-white font-bold text-lg hover:bg-[#A87820] transition-all hover:-translate-y-0.5 shadow-lg"
            >
              Get a Free Quote
            </Link>
          </motion.div>

          <motion.div custom={4} initial="hidden" animate="visible" variants={item}>
            <TrackedCall location="hero" className="text-[#C9922A] font-semibold hover:underline text-base">
              Questions? Call 866-295-7500
            </TrackedCall>
          </motion.div>
        </div>

        {/* Right: trust info */}
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={item}
          className="bg-navy rounded-2xl p-8 text-white shadow-lg space-y-6"
        >
          <div className="flex items-center gap-3">
            <Clock className="text-[#E5B04A] flex-shrink-0" size={30} />
            <div>
              <p className="text-2xl font-bold">27 Years in Business</p>
              <p className="text-white/55 text-sm">Trusted since 1998</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Award className="text-[#E5B04A] flex-shrink-0" size={30} />
            <div>
              <p className="text-2xl font-bold">A+ BBB Rating</p>
              <a
                href={BBB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E5B04A] text-sm hover:underline"
              >
                Read our BBB reviews →
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex gap-0.5 flex-shrink-0">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="fill-[#E5B04A] text-[#E5B04A]" size={18} />
              ))}
            </div>
            <div>
              <p className="text-2xl font-bold">4.99 / 5 Stars</p>
              <p className="text-white/55 text-sm">Average from 150+ reviews</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-[#E5B04A] flex-shrink-0" size={30} />
            <div>
              <p className="text-2xl font-bold">Zero Complaints</p>
              <p className="text-white/55 text-sm">Customer satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
