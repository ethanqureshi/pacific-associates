import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/free-quote", label: "Free Quote" },
  { href: "/videos", label: "Videos" },
  { href: "/contact", label: "Contact Us" },
  { href: "/privacy", label: "Privacy Policy" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="mb-4">
              <span
                className="block font-bold tracking-[0.18em] text-xl text-white"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                PACIFIC
              </span>
              <span
                className="block font-bold tracking-[0.18em] text-xl text-teal-lt"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                ASSOCIATES
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              One of the nation’s highest rated debt consolidation companies for over two decades.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wider uppercase text-white/60 mb-4">Navigation</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/50 hover:text-teal-lt text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wider uppercase text-white/60 mb-4">Contact</h4>
            <address className="not-italic text-sm text-white/50 leading-relaxed space-y-2">
              <p>19900 MacArthur Blvd Suite 890<br />Irvine, CA 92612</p>
              <p>
                <a href="tel:9492506700" className="hover:text-teal-lt transition-colors">
                  949-250-6700
                </a>
              </p>
              <p>
                <a href="mailto:info@pacificassociates.com" className="hover:text-teal-lt transition-colors break-all">
                  info@pacificassociates.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-white/30 text-xs leading-relaxed mb-4">
            Not all debts are eligible for program enrollment. Not all clients are able to complete our program for various reasons, including their ability to save sufficient funds. Clients who have made all program payments have completed and realized an average savings of 50% before our fees of 20% to 30% with our fees, over a period of 24 to 48 months. We do not guarantee your debt will be resolved by a specific amount or percentage or within a specific range of time. Pacific Associates assists with unsecured debt only. We do not provide tax, bankruptcy, legal advice or credit repair services. Not available in Hawaii, Kansas, Oregon, New Jersey, New Mexico, New York, North Carolina, Washington, or Wyoming.
          </p>
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Pacific Associates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
