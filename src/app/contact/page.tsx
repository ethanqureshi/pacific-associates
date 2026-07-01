import type { Metadata } from "next";
import { MapPin, Phone, Printer, Mail } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Pacific Associates in Irvine, CA. Phone: 949-250-6700. Email: info@pacificassociates.com. 19900 MacArthur Blvd Suite 890 Irvine CA 92612.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy py-14 sm:py-20 px-4 text-center">
        <FadeUp>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Call or Visit Us</h1>
          <p className="text-white/70 text-xl">Our team is ready to help you get started on the path to financial freedom.</p>
        </FadeUp>
      </section>

      <section className="bg-[#F3F0EB] py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <FadeUp>
            <div className="bg-white rounded-xl shadow-sm border border-[#E8E2D9] p-8 h-full">
              <h2 className="text-3xl font-bold text-navy mb-7">Corporate Headquarters</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="text-[#C9922A] flex-shrink-0 mt-0.5" size={22} />
                  <div>
                    <p className="font-semibold text-ink mb-1">Address</p>
                    <address className="not-italic text-ink-mid leading-relaxed">
                      19900 MacArthur Blvd Suite 890<br />Irvine, CA 92612
                    </address>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="text-[#C9922A] flex-shrink-0 mt-0.5" size={22} />
                  <div>
                    <p className="font-semibold text-ink mb-1">Telephone</p>
                    <a href="tel:9492506700" className="text-[#C9922A] hover:underline">949-250-6700</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Printer className="text-[#C9922A] flex-shrink-0 mt-0.5" size={22} />
                  <div>
                    <p className="font-semibold text-ink mb-1">Fax</p>
                    <p className="text-ink-mid">949-250-1768</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="text-[#C9922A] flex-shrink-0 mt-0.5" size={22} />
                  <div>
                    <p className="font-semibold text-ink mb-1">Email</p>
                    <a href="mailto:info@pacificassociates.com" className="text-[#C9922A] hover:underline break-all">
                      info@pacificassociates.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="bg-white rounded-xl shadow-sm border border-warm-line p-8 h-full">
              <h2 className="text-3xl font-bold text-navy mb-7">Send a Message</h2>
              <ContactForm />
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
