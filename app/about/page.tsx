
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const images = {
  stone:
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1100&q=85",
  interior:
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
};

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

    const revealElement = () => {
      element.classList.remove("translate-y-8", "opacity-0");
      element.classList.add("translate-y-0", "opacity-100");
    };

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      revealElement();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          revealElement();
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
      style={{ transitionDelay: `${delay}ms` }}
      className={`translate-y-8 opacity-0 transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 ${className}`}
    >
      {children}
    </div>
  );
}

const values = [
  {
    number: "01",
    icon: "✦",
    title: "Quality Focus",
    description:
      "We focus on understanding product specifications and buyer requirements before moving forward with an enquiry.",
  },
  {
    number: "02",
    icon: "◇",
    title: "Transparency",
    description:
      "Clear communication helps buyers discuss material choices, quantities and expectations with confidence.",
  },
  {
    number: "03",
    icon: "↗",
    title: "Global Outlook",
    description:
      "We welcome enquiries from international buyers exploring Indian granite and export opportunities.",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-x-clip bg-[#151310] text-[#f7f3ec]">
      <Navbar />

      {/* OUR STORY — page starts here, no top hero banner */}
      <section
        id="our-story"
        className="grid gap-10 bg-[#f3efe8] px-6 py-20 text-[#211d17] sm:px-10 sm:py-24 lg:grid-cols-[0.8fr_1.4fr] lg:gap-[10%] lg:px-[12%] lg:py-32"
      >
        <Reveal>
          <p className="flex items-center gap-4 text-[10px] tracking-[0.2em] text-[#8a7657]">
            01 / WHO WE ARE
            <span className="h-px w-10 bg-[#c9a66b]" />
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            Bringing the character of natural stone to
            <span className="font-serif italic text-[#9b7944]">
              {" "}the world.
            </span>
          </h1>

          <p className="mt-7 text-sm leading-8 text-[#706a61]">
            NM SONS EXIM &amp; TRADING LLP focuses on connecting
            quality Indian products with international markets.
            Our granite collection is presented for businesses,
            distributors, importers and project requirements
            seeking distinctive natural stone.
          </p>

          <p className="mt-4 text-sm leading-8 text-[#706a61]">
            From exploring stone varieties to discussing
            specifications and export requirements, we aim to
            make every business enquiry clear, professional
            and dependable.
          </p>

          <Link
            href="/contact"
            className="group mt-7 inline-flex items-center gap-4 text-[10px] font-bold tracking-[0.17em] text-[#5d472a] transition-colors duration-300 hover:text-[#9b7944]"
          >
            LET&apos;S WORK TOGETHER
            <span className="text-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
              ↗
            </span>
          </Link>
        </Reveal>
      </section>

      {/* VISUAL STORY */}
      <section className="bg-[#191713] px-6 py-20 sm:px-10 sm:py-24 lg:px-[9%] lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.88fr] lg:gap-[9%]">
          <Reveal>
            <div className="group relative overflow-hidden bg-[#2b251e]">
              <img
                src={images.stone}
                alt="Stone-inspired contemporary architectural interior"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 motion-reduce:transform-none sm:aspect-[5/4] lg:aspect-[4/5]"
              />

              <span className="absolute bottom-5 left-5 bg-[#14110dcc] px-4 py-3 text-[9px] tracking-[0.2em] text-white">
                TIMELESS MATERIALS
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-[10px] font-semibold tracking-[0.25em] text-[#c9a66b]">
              OUR APPROACH
            </p>

            <h2 className="mt-6 text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
              Every stone has a story.
              <br />
              <span className="font-serif italic text-[#c9a66b]">
                Let yours begin here.
              </span>
            </h2>

            <p className="mt-6 text-sm leading-8 text-[#aaa49b]">
              Natural stone brings depth, individuality and lasting
              visual appeal to architectural and interior spaces.
              We help buyers explore suitable granite options for
              their intended applications and business needs.
            </p>

            <div className="mt-8 border-t border-[#39342c]">
              {[
                "Distinctive stone varieties",
                "Business-focused communication",
                "International trade enquiries",
              ].map((item, index) => (
                <div
                  key={item}
                  className="group flex items-center gap-6 border-b border-[#39342c] py-5 transition-all duration-300 hover:pl-2"
                >
                  <span className="text-[10px] text-[#c9a66b]">
                    0{index + 1}
                  </span>

                  <p className="text-sm text-[#e5dfd5] transition-colors duration-300 group-hover:text-[#c9a66b]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="bg-[#eae5dc] px-6 py-20 text-[#211d17] sm:px-10 sm:py-24 lg:px-[9%] lg:py-32">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-[10px] font-semibold tracking-[0.25em] text-[#967448]">
            WHAT GUIDES US
          </p>

          <h2 className="mt-6 text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            Built on purpose.
            <br />
            <span className="font-serif italic text-[#967448]">
              Driven by possibilities.
            </span>
          </h2>
        </Reveal>

        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <Reveal key={value.number} delay={index * 100}>
              <article className="group relative h-full min-h-64 border border-[#d7cec0] bg-white/25 p-7 transition-all duration-300 hover:-translate-y-2 hover:bg-[#f6f2eb] hover:shadow-xl hover:shadow-[#342919]/10 motion-reduce:transform-none sm:p-8">
                <span className="absolute right-7 top-7 text-[11px] text-[#a49a89]">
                  {value.number}
                </span>

                <div className="mb-7 mt-4 flex h-12 w-12 items-center justify-center border border-[#c9a66b] text-2xl text-[#8b6c3d] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 motion-reduce:transform-none">
                  {value.icon}
                </div>

                <h3 className="text-xl font-medium">{value.title}</h3>

                <p className="mt-3 text-xs leading-7 text-[#716b62]">
                  {value.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ORIGINAL IMAGE CTA — restored */}
      <section className="relative isolate flex min-h-[480px] items-center overflow-hidden bg-[#191713] px-6 py-20 sm:px-10 lg:min-h-[540px] lg:px-[9%]">
        <div className="absolute inset-0 -z-20">
          <img
            src={images.interior}
            alt="Contemporary interior with elegant stone finishes"
            loading="lazy"
            className="h-full w-full object-cover opacity-45 transition-transform duration-1000 hover:scale-105 motion-reduce:transform-none"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#17140f] via-[#17140f]/85 to-[#17140f]/30" />

        <Reveal className="max-w-2xl">
          <p className="text-[10px] font-semibold tracking-[0.25em] text-[#c9a66b]">
            YOUR NEXT PROJECT STARTS HERE
          </p>

          <h2 className="mt-6 text-5xl font-medium leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Let&apos;s create
            <br />
            <span className="font-serif italic text-[#c9a66b]">
              something lasting.
            </span>
          </h2>

          <p className="mt-5 max-w-lg text-sm leading-8 text-[#d0c9bf]">
            Tell us about your granite requirements and let&apos;s
            explore the right options for your business.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-7 bg-[#c9a66b] px-6 py-4 text-xs font-bold text-[#17130e] transition duration-300 hover:-translate-y-1 hover:bg-[#e0c18b] hover:shadow-lg motion-reduce:transform-none"
          >
            Contact Our Team <span className="text-lg">↗</span>
          </Link>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
