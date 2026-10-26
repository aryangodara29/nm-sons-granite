
"use client";

import { useEffect, useRef } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      element.classList.remove("translate-y-8", "opacity-0");
      element.classList.add("translate-y-0", "opacity-100");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.remove("translate-y-8", "opacity-0");
          element.classList.add("translate-y-0", "opacity-100");
          observer.unobserve(element);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`translate-y-8 opacity-0 transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 ${className}`}
    >
      {children}
    </div>
  );
}

const services = [
  {
    number: "01",
    title: "Product Selection",
    description:
      "Discuss granite varieties, preferred colours, finishes and intended applications with our team.",
    icon: "◇",
  },
  {
    number: "02",
    title: "Specification & Quantity",
    description:
      "Share your required dimensions, product specifications, estimated quantities and project needs.",
    icon: "▤",
  },
  {
    number: "03",
    title: "Commercial Discussion",
    description:
      "Discuss quotations, order requirements, delivery destination and mutually agreed trade terms.",
    icon: "↗",
  },
  {
    number: "04",
    title: "Shipment Coordination",
    description:
      "Subject to order confirmation, coordinate agreed documentation and shipment arrangements.",
    icon: "⌁",
  },
];

const benefits = [
  {
    title: "Buyer-Focused Enquiries",
    text: "A clear starting point for importers, distributors, wholesalers and project buyers.",
  },
  {
    title: "Product Specifications",
    text: "Discuss dimensions, finish, quantities and other relevant product requirements.",
  },
  {
    title: "Trade Coordination",
    text: "Align commercial discussions, delivery destination and agreed export requirements.",
  },
];

export default function ExportServicesPage() {
  return (
    <main className="overflow-hidden bg-[#151310] text-[#f7f3ec]">
      <Navbar />

      {/* HERO */}
      <section className="relative isolate flex min-h-[520px] items-center bg-[#211c16] px-6 py-24 sm:px-10 lg:min-h-[650px] lg:px-[9%]">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85"
          alt="Contemporary architectural interior with stone-inspired finishes"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#100e0b]/95 via-[#100e0b]/75 to-[#100e0b]/25" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#100e0b]/40 to-transparent" />

        <Reveal className="max-w-4xl">
          <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.25em] text-[#c9a66b] sm:text-xs">
            <span className="h-px w-9 bg-[#c9a66b]" />
            EXPORT SERVICES
          </p>

          <h1 className="mt-7 text-5xl font-medium leading-[1.08] tracking-tight sm:text-6xl lg:text-8xl">
            Indian stone.
            <br />
            <span className="font-serif italic text-[#c9a66b]">
              Global possibilities.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-8 text-[#d0cbc3] sm:text-base">
            Exploring granite export opportunities? Let&apos;s
            discuss your product specifications, quantities
            and international buying requirements.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-7 bg-[#c9a66b] px-6 py-4 text-xs font-bold text-[#17130e] transition duration-300 hover:-translate-y-1 hover:bg-[#e0c18b] hover:shadow-lg hover:shadow-[#c9a66b]/20"
          >
            Discuss Your Requirements
            <span className="text-lg">↗</span>
          </a>
        </Reveal>
      </section>

      {/* INTRODUCTION */}
      <section className="grid gap-7 border-b border-white/10 px-6 py-16 sm:px-10 md:grid-cols-2 md:items-end lg:px-[9%] lg:py-24">
        <Reveal>
          <p className="text-[10px] font-semibold tracking-[0.25em] text-[#c9a66b]">
            YOUR TRADE ENQUIRY
          </p>

          <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-4xl">
            From product interest
            <br />
            <span className="font-serif italic text-[#c9a66b]">
              to export discussion.
            </span>
          </h2>
        </Reveal>

        <Reveal>
          <p className="max-w-xl text-sm leading-8 text-[#aaa49b] md:justify-self-end">
            Every requirement is different. We welcome enquiries
            from international buyers looking to explore Indian
            granite options and discuss potential trade arrangements.
          </p>
        </Reveal>
      </section>

      {/* PROCESS */}
      <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-[9%] lg:py-32">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-[10px] font-semibold tracking-[0.25em] text-[#c9a66b]">
            HOW WE WORK
          </p>

          <h2 className="mt-5 text-4xl font-medium leading-tight sm:text-5xl">
            A clear path to
            <br />
            <span className="font-serif italic text-[#c9a66b]">
              your next enquiry.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-[#aaa49b]">
            An illustrative process for discussing a potential
            order. Exact steps depend on the product, agreement
            and destination requirements.
          </p>
        </Reveal>

        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Reveal key={service.number}>
              <article className="group relative h-full min-h-64 border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#c9a66b]/60 hover:bg-white/[0.05] sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.2em] text-[#c9a66b]">
                    STEP / {service.number}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center border border-[#c9a66b]/40 text-xl text-[#c9a66b] transition duration-300 group-hover:rotate-6 group-hover:bg-[#c9a66b] group-hover:text-[#151310]">
                    {service.icon}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-medium">
                  {service.title}
                </h3>

                <p className="mt-4 text-xs leading-7 text-[#aaa49b]">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* IMAGE + BUYER SUPPORT */}
      <section className="bg-[#eae5dc] px-6 py-20 text-[#211d17] sm:px-10 sm:py-24 lg:px-[9%] lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="group overflow-hidden bg-[#d6cec0]">
              <img
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85"
                alt="Stone-inspired contemporary architectural space"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
            </div>
          </Reveal>

          <Reveal>
            <p className="text-[10px] font-semibold tracking-[0.25em] text-[#967448]">
              BUILT AROUND YOUR REQUIREMENTS
            </p>

            <h2 className="mt-5 text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
              Trade conversations
              <br />
              <span className="font-serif italic text-[#967448]">
                made clearer.
              </span>
            </h2>

            <p className="mt-6 text-sm leading-8 text-[#706a61]">
              Share the details that matter to your purchase.
              This helps us understand your needs and discuss
              suitable next steps.
            </p>

            <div className="mt-8 space-y-6">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="flex gap-4 border-b border-[#d5ccbe] pb-5"
                >
                  <span className="mt-1 text-sm text-[#967448]">
                    0{index + 1}
                  </span>

                  <div>
                    <h3 className="text-base font-semibold">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-xs leading-7 text-[#706a61]">
                      {benefit.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* BUYER CHECKLIST */}
      <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-[9%]">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="text-[10px] font-semibold tracking-[0.25em] text-[#c9a66b]">
            PREPARE YOUR ENQUIRY
          </p>

          <h2 className="mt-5 text-4xl font-medium leading-tight sm:text-5xl">
            What should you
            <br />
            <span className="font-serif italic text-[#c9a66b]">
              share with us?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-[#aaa49b]">
            These details can help us understand your request.
            You can still contact us if you have only some of them.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl gap-3 sm:grid-cols-2">
          {[
            "Granite variety or preferred colour",
            "Required dimensions and finish",
            "Estimated quantity",
            "Destination country and city",
            "Intended application or project",
            "Target delivery timeline",
          ].map((item, index) => (
            <Reveal key={item}>
              <div className="flex items-center gap-4 border border-white/10 px-5 py-5 transition-colors duration-300 hover:border-[#c9a66b]/60">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#c9a66b]/50 text-xs text-[#c9a66b]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-sm text-[#e5dfd5]">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-7 bg-[#c9a66b] px-6 py-4 text-xs font-bold text-[#17130e] transition duration-300 hover:-translate-y-1 hover:bg-[#e0c18b]"
          >
            Start Your Enquiry <span className="text-lg">↗</span>
          </a>
        </Reveal>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-white/10 bg-[#1d1914] px-6 py-20 text-center sm:px-10 sm:py-24">
        <Reveal className="mx-auto max-w-3xl">
          <p className="text-[10px] font-semibold tracking-[0.25em] text-[#c9a66b]">
            NM SONS EXIM &amp; TRADING LLP
          </p>

          <h2 className="mt-5 text-4xl font-medium leading-tight sm:text-5xl">
            Let&apos;s explore
            <br />
            <span className="font-serif italic text-[#c9a66b]">
              global opportunities.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-[#aaa49b]">
            Contact our team to discuss your granite requirements
            and potential export opportunities.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-7 bg-[#c9a66b] px-6 py-4 text-xs font-bold text-[#17130e] transition duration-300 hover:-translate-y-1 hover:bg-[#e0c18b]"
          >
            Contact NM SONS <span className="text-lg">↗</span>
          </a>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
