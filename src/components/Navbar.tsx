"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT US" },
  { href: "/blog", label: "BLOG" },
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
      {/* Clean consultation strip */}
      <div className="bg-white border-b border-[#E8E2D9] py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex justify-end">
          <a
            href="tel:8662957500"
            className="text-[#C9922A] text-xs font-semibold tracking-wide hover:underline"
          >
            Free Consultation: 866-295-7500
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className={`bg-white transition-all duration-300 ${scrolled ? "shadow-lg" : "shadow-sm border-b border-[#E8E2D9]"}`}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex flex-col leading-none select-none">
            <span
              className="font-bold tracking-[0.18em] text-xl text-navy"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              PACIFIC
            </span>
            <span
              className="font-bold tracking-[0.18em] text-xl text-[#C9922A]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              ASSOCIATES
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs tracking-widest font-medium transition-colors hover:text-[#C9922A] ${
                  pathname === link.href ? "text-[#C9922A]" : "text-ink-mid"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Link
              href="/free-quote"
              className="px-5 py-2.5 rounded bg-[#C9922A] text-white font-semibold text-sm tracking-wide hover:bg-[#A87820] transition-all hover:-translate-y-0.5 shadow hover:shadow-md"
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
            className="md:hidden bg-white border-t border-[#E8E2D9] shadow-lg"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`py-3 text-sm font-medium tracking-wider border-b border-[#E8E2D9] ${
                    pathname === link.href ? "text-[#C9922A]" : "text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/free-quote"
                onClick={() => setOpen(false)}
                className="mt-3 px-6 py-3 rounded bg-[#C9922A] text-white font-semibold text-sm text-center hover:bg-[#A87820]"
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
