import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Pacific Associates. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <section className="bg-cream min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-navy mb-2">Privacy Policy</h1>
        <p className="text-ink-lt text-sm mb-10">Last updated: May 2026</p>

        <div className="bg-white rounded-xl border border-warm-line p-8 space-y-8 text-ink-mid leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-navy mb-3">Information We Collect</h2>
            <p>
              Pacific Associates collects personal information you voluntarily provide through our quote and contact forms, including:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Zip code</li>
              <li>Creditor and debt balance information (quote form only)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-3">How We Use Your Information</h2>
            <p>
              Information submitted through this website is shared with Pacific Associates Corp. solely for the purpose of delivering debt relief consultations and program information. We use your contact details to respond to your inquiry, provide a personalized debt relief quote, and follow up regarding our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-3">We Do Not Sell Your Data</h2>
            <p>
              Pacific Associates does not sell, rent, or trade your personal information to third parties for marketing purposes. Your information is used exclusively to deliver the services you requested.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-3">Data Retention</h2>
            <p>
              We retain your information for as long as necessary to fulfill the purpose for which it was collected, or as required by law. You may request deletion of your data at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-3">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal data</li>
              <li>Opt out of future communications</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:info@pacificassociates.com" className="text-teal-lt hover:underline font-medium">
                info@pacificassociates.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-3">Security</h2>
            <p>
              We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, or misuse. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-3">Contact Us</h2>
            <p>
              For privacy-related questions or data deletion requests, contact Pacific Associates Corp.:
            </p>
            <address className="not-italic mt-3 space-y-1">
              <p>19900 MacArthur Blvd Suite 890, Irvine, CA 92612</p>
              <p><a href="tel:9492506700" className="text-teal-lt hover:underline">949-250-6700</a></p>
              <p><a href="mailto:info@pacificassociates.com" className="text-teal-lt hover:underline">info@pacificassociates.com</a></p>
            </address>
          </section>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-teal hover:underline text-sm">&larr; Back to Home</Link>
        </div>
      </div>
    </section>
  );
}
