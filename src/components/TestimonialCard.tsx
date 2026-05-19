"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Props {
  name: string;
  source: string;
  text: string;
  index: number;
}

export default function TestimonialCard({ name, source, text, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-xl p-7 shadow-sm border-2 border-warm-line hover:border-teal transition-all duration-300 flex flex-col gap-4"
    >
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={15} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-ink-mid text-sm leading-relaxed flex-1">“{text}”</p>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-ink text-sm">{name}</p>
          <p className="text-ink-lt text-xs">{source}</p>
        </div>
        {source.includes("BBB") && (
          <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded font-semibold">BBB</span>
        )}
        {source.includes("TrustLink") && (
          <span className="text-xs bg-teal-pale text-teal px-2 py-1 rounded font-semibold">TrustLink</span>
        )}
      </div>
    </motion.div>
  );
}
