"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT US" },
  { href: "/videos", label: "VIDEOS" },
  { href: "/contact", label: "CONTACT US" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Announcement bar */}
      <div className="bg-navy py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-end items-center gap-2 sm:gap-8">
          <p className="text-white/80 text-xs sm:text-sm">
            Call to get $100 off your first payment:{" "}
            <a href="tel:8662957500" className="text-teal-lt font-bold hover:underline">
              866-295-7500
            </a>
          </p>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs tracking-widest font-medium transition-colors hover:text-teal-lt ${
                  pathname === link.href ? "text-teal-lt" : "text-white/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`bg-white transition-all duration-300 ${
          scrolled ? "shadow-lg" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex flex-col leading-none select-none">
            <span
              className="font-bold tracking-[0.18em] text-xl text-navy"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              PACIFIC
            </span>
            <span
              className="font-bold tracking-[0.18em] text-xl text-teal"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              ASSOCIATES
            </span>
          </Link>

          <div className="hidden md:flex items-center">
            <Link
              href="/free-quote"
              className="px-6 py-3 rounded bg-green-cta text-white font-semibold text-sm tracking-wide hover:bg-[#43a047] transition-all hover:-translate-y-0.5 shadow hover:shadow-md"
            >
              Free Quote
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-navy"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-warm-line shadow-lg"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`py-3 text-sm font-medium tracking-wider border-b border-warm-line ${
                    pathname === link.href ? "text-teal" : "text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/free-quote"
                onClick={() => setOpen(false)}
                className="mt-3 px-6 py-3 rounded bg-green-cta text-white font-semibold text-sm text-center"
              >
                Free Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
