import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";
import { Analytics } from "@vercel/analytics/next";

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const SITE_URL = "https://www.pacificassoc.com";
const SITE_DESCRIPTION =
  "Pacific Associates is one of the nation's highest rated debt consolidation companies, helping clients get out of debt in 24–48 months with payments lower than current minimums.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Pacific Associates | Debt Consolidation Irvine CA",
    template: "%s | Pacific Associates",
  },
  description: SITE_DESCRIPTION,
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: "Pacific Associates",
    url: SITE_URL,
    title: "Pacific Associates | Debt Consolidation Irvine CA",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Pacific Associates | Debt Consolidation Irvine CA",
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Pacific Associates",
    url: SITE_URL,
    telephone: "+1-866-295-7500",
    areaServed: "US",
    description: "Debt consolidation and debt relief services.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Irvine",
      addressRegion: "CA",
      addressCountry: "US",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.99",
      bestRating: "5",
      ratingCount: "150",
    },
  };

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
        <StickyMobileBar />
        <Analytics />
      </body>
    </html>
  );
}
