
"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const showElement = () => {
      element.classList.remove("translate-y-6", "opacity-0");
      element.classList.add("translate-y-0", "opacity-100");
    };

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      showElement();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          showElement();
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{ transitionDelay: `${delay}ms` }}
      ref={ref}
      className={`translate-y-6 opacity-0 transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 ${className}`}
    >
      {children}
    </div>
  );
}

const initialForm = {
  name: "",
  company: "",
  email: "",
  country: "",
  product: "",
  quantity: "",
  message: "",
};

const fieldClass =
  "mt-2 w-full rounded-sm border border-white/15 bg-[#171511] px-4 py-3.5 text-sm text-white outline-none transition-colors duration-300 placeholder:text-[#777168] focus:border-[#c9a66b]";

const mapUrl =
  "https://www.google.com/maps/place/Shyam+Status/@23.1162147,72.6619756,17z";

const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=23.1162147%2C72.6619756";

const embedUrl =
  "https://maps.google.com/maps?q=23.1162147,72.6619756&z=16&output=embed";

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");

  function updateField(field: keyof typeof initialForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setStatus("");
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = `Granite Enquiry - ${form.product || "General Enquiry"}`;

    const body = [
      "NM SONS GRANITE ENQUIRY",
      "",
      `Name: ${form.name}`,
      `Company: ${form.company || "Not provided"}`,
      `Email: ${form.email}`,
      `Country: ${form.country}`,
      `Product: ${form.product || "Not specified"}`,
      `Estimated Quantity: ${form.quantity || "Not specified"}`,
      "",
      "Requirements:",
      form.message,
    ].join("\n");

    const mailto = `mailto:info@nmsonsexim.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setStatus(
      "Your email application should open with your enquiry details. Please review and send the email to complete your enquiry."
    );

    window.location.href = mailto;
  }

  return (
    <main className="min-h-screen overflow-x-clip bg-[#151310] text-[#f7f3ec]">
      <Navbar />

      {/* Contact information and enquiry form — no hero banner */}
      <section className="px-5 py-10 sm:px-8 sm:py-14 lg:px-[9%] lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Contact information */}
          <Reveal>
            <p className="text-[10px] font-semibold tracking-[0.25em] text-[#c9a66b]">
              CONTACT INFORMATION
            </p>

            <h1 className="mt-4 text-2xl font-medium leading-tight sm:text-3xl">
              Get in touch.
              <span className="mt-1 block font-serif italic text-[#c9a66b]">
                Explore possibilities.
              </span>
            </h1>

            <p className="mt-4 text-sm leading-7 text-[#aaa49b]">
              Contact our team about granite products, project specifications,
              quantities and international export enquiries.
            </p>

            <div className="mt-8">
              <div className="border-t border-white/10 py-5">
                <p className="text-[10px] tracking-[0.2em] text-[#c9a66b]">
                  EMAIL
                </p>

                <a
                  href="mailto:info@nmsonsexim.com"
                  className="mt-3 inline-block break-all text-sm text-white transition-colors duration-300 hover:text-[#c9a66b]"
                >
                  info@nmsonsexim.com
                </a>
              </div>

              <div className="border-t border-white/10 py-5">
                <p className="text-[10px] tracking-[0.2em] text-[#c9a66b]">
                  COMPANY
                </p>

                <p className="mt-3 text-sm leading-7 text-[#e5dfd5]">
                  NM SONS EXIM &amp; TRADING LLP
                </p>
              </div>

              <div className="border-y border-white/10 py-5">
                <p className="text-[10px] tracking-[0.2em] text-[#c9a66b]">
                  ENQUIRIES
                </p>

                <p className="mt-3 text-sm leading-7 text-[#aaa49b]">
                  Granite products, specifications, quantities and
                  export-related discussions.
                </p>
              </div>
            </div>

            {/* Office map */}
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-[10px] font-semibold tracking-[0.2em] text-[#c9a66b]">
                OUR LOCATION
              </p>

              <h2 className="mt-3 text-xl font-medium text-white">
                Find Us on the Map
              </h2>

              <p className="mt-2 text-sm leading-7 text-[#aaa49b]">
                View the shared location and get directions using your
                preferred navigation app.
              </p>

              <div className="mt-5 overflow-hidden border border-white/10">
                <iframe
                  title="Shared office location on Google Maps"
                  src={embedUrl}
                  className="h-56 w-full sm:h-64"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex min-h-12 items-center justify-center gap-3 border border-[#c9a66b]/50 px-5 py-3 text-sm text-white transition-colors duration-300 hover:border-[#c9a66b] hover:text-[#c9a66b]"
              >
                Open Google Maps <span>↗</span>
              </a>

              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex min-h-12 items-center justify-center gap-3 bg-[#c9a66b] px-5 py-3 text-xs font-bold text-[#17130e] transition-colors duration-300 hover:bg-[#e0c18b]"
              >
                Get Directions <span className="text-base">↗</span>
              </a>
            </div>
          </Reveal>

          {/* Enquiry form */}
          <Reveal delay={120}>
            <div className="border border-white/10 bg-[#1c1914] p-5 sm:p-8 lg:p-10">
              <p className="text-[10px] font-semibold tracking-[0.25em] text-[#c9a66b]">
                GRANITE ENQUIRY FORM
              </p>

              <h2 className="mt-3 text-2xl font-medium sm:text-3xl">
                Tell us what you need
              </h2>

              <p className="mt-3 text-xs leading-6 text-[#aaa49b]">
                Fields marked with * are required.
              </p>

              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-xs text-[#d8d1c7]">
                    Full Name *
                    <input
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      placeholder="Your full name"
                      className={fieldClass}
                    />
                  </label>

                  <label className="block text-xs text-[#d8d1c7]">
                    Company Name
                    <input
                      autoComplete="organization"
                      value={form.company}
                      onChange={(e) => updateField("company", e.target.value)}
                      placeholder="Your company"
                      className={fieldClass}
                    />
                  </label>

                  <label className="block text-xs text-[#d8d1c7]">
                    Business Email *
                    <input
                      required
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="you@company.com"
                      className={fieldClass}
                    />
                  </label>

                  <label className="block text-xs text-[#d8d1c7]">
                    Country *
                    <input
                      required
                      autoComplete="country-name"
                      value={form.country}
                      onChange={(e) => updateField("country", e.target.value)}
                      placeholder="Your country"
                      className={fieldClass}
                    />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-xs text-[#d8d1c7]">
                    Granite Type
                    <select
                      value={form.product}
                      onChange={(e) => updateField("product", e.target.value)}
                      className={fieldClass}
                    >
                      <option value="" className="bg-[#171511]">
                        Select a product
                      </option>
                      <option value="GD Brown Granite">GD Brown Granite</option>
                      <option value="Black Galaxy Granite">
                        Black Galaxy Granite
                      </option>
                      <option value="Tan Brown Granite">Tan Brown Granite</option>
                      <option value="River White Granite">
                        River White Granite
                      </option>
                      <option value="Other Granite">Other / Not sure</option>
                    </select>
                  </label>

                  <label className="block text-xs text-[#d8d1c7]">
                    Estimated Quantity
                    <input
                      value={form.quantity}
                      onChange={(e) => updateField("quantity", e.target.value)}
                      placeholder="e.g. 500 sq. metres"
                      className={fieldClass}
                    />
                  </label>
                </div>

                <label className="block text-xs text-[#d8d1c7]">
                  Tell Us About Your Requirements *
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    placeholder="Product specifications, dimensions, finish, destination and other details..."
                    className={`${fieldClass} resize-y`}
                  />
                </label>

                <button
                  type="submit"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-4 bg-[#c9a66b] px-6 py-4 text-xs font-bold text-[#17130e] transition duration-300 hover:-translate-y-0.5 hover:bg-[#e0c18b] motion-reduce:transform-none sm:w-auto"
                >
                  Prepare Email Enquiry <span className="text-lg">↗</span>
                </button>

                {status && (
                  <p
                    role="status"
                    className="border border-[#c9a66b]/30 bg-[#c9a66b]/10 p-4 text-xs leading-6 text-[#e8d3ad]"
                  >
                    {status}
                  </p>
                )}

                <p className="text-[10px] leading-6 text-[#888177]">
                  This form opens your configured email application. Your
                  enquiry is not sent automatically; you must review and send
                  the email.
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Closing message */}
      <section className="border-t border-white/10 bg-[#1d1914] px-5 py-10 text-center sm:px-8 sm:py-12">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="text-xl font-medium sm:text-2xl md:text-3xl">
            Every great project starts with a conversation.
          </h2>

          <p className="mt-3 text-sm leading-7 text-[#aaa49b]">
            We look forward to learning more about your requirements.
          </p>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
