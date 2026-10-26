
"use client";

import { useEffect, useRef } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const products = [
  {
    name: "GD Brown Granite",
    category: "Brown Granite",
    description:
      "A warm, earthy stone option for distinctive architectural and interior applications.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
    number: "01",
  },
  {
    name: "Black Galaxy Granite",
    category: "Black Granite",
    description:
      "Explore a bold, dark stone aesthetic for contemporary spaces and design projects.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
    number: "02",
  },
  {
    name: "Absolute Black Granite",
    category: "Black Granite",
    description:
      "A timeless dark-stone style to consider for a range of architectural applications.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
    number: "03",
  },
  {
    name: "Tan Brown Granite",
    category: "Brown Granite",
    description:
      "Rich brown tones offer a grounded look for residential and commercial projects.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
    number: "04",
  },
  {
    name: "River White Granite",
    category: "Light Granite",
    description:
      "A light-toned stone style for spaces seeking a clean and airy visual character.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
    number: "05",
  },
  {
    name: "Colonial White Granite",
    category: "Light Granite",
    description:
      "A neutral stone aesthetic worth exploring for elegant interiors and design schemes.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",
    number: "06",
  },
];

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

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
      reducedMotion ||
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

export default function ProductsPage() {
  return (
    <main className="overflow-hidden bg-[#151310] text-[#f7f3ec]">
      <Navbar />

      {/* HERO */}
      <section className="relative isolate flex min-h-[480px] items-center bg-[#211c16] px-6 py-24 sm:px-10 lg:min-h-[560px] lg:px-[9%]">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85"
          alt="Contemporary architectural interior with stone-inspired finishes"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#100e0b]/95 via-[#100e0b]/75 to-[#100e0b]/30" />

        <Reveal className="max-w-4xl">
          <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.25em] text-[#c9a66b] sm:text-xs">
            <span className="h-px w-9 bg-[#c9a66b]" />
            THE GRANITE COLLECTION
          </p>

          <h1 className="mt-7 text-5xl font-medium leading-[1.08] tracking-tight sm:text-6xl lg:text-8xl">
            Stone with
            <br />
            <span className="font-serif italic text-[#c9a66b]">
              a distinct character.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-8 text-[#d0cbc3] sm:text-base">
            Explore granite styles for architectural projects,
            interiors and commercial requirements. Connect with
            our team to discuss your product specifications.
          </p>

          <a
            href="#granite-collection"
            className="mt-8 inline-flex min-h-13 items-center gap-7 bg-[#c9a66b] px-6 py-4 text-xs font-bold text-[#17130e] transition duration-300 hover:-translate-y-1 hover:bg-[#e0c18b]"
          >
            Explore Collection <span className="text-lg">↗</span>
          </a>
        </Reveal>
      </section>

      {/* INTRODUCTION */}
      <section className="grid gap-5 border-b border-white/10 px-6 py-12 sm:px-10 md:grid-cols-2 md:items-end lg:px-[9%]">
        <Reveal>
          <p className="text-[10px] font-semibold tracking-[0.25em] text-[#c9a66b]">
            OUR PRODUCTS
          </p>
          <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-4xl">
            Find the right stone
            <br />
            <span className="font-serif italic text-[#c9a66b]">
              for your next project.
            </span>
          </h2>
        </Reveal>

        <Reveal>
          <p className="max-w-xl text-sm leading-8 text-[#aaa49b] md:justify-self-end">
            Browse our sample collection and contact us for
            available varieties, slab dimensions, finishes,
            quantities and export enquiries.
          </p>
        </Reveal>
      </section>

      {/* PRODUCT GRID */}
      <section
        id="granite-collection"
        className="px-6 py-16 sm:px-10 sm:py-20 lg:px-[9%] lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {products.map((product) => (
            <Reveal key={product.number}>
              <article className="group h-full">
                <a
                  href={`/contact?product=${encodeURIComponent(product.name)}`}
                  aria-label={`Enquire about ${product.name}`}
                  className="relative block overflow-hidden bg-[#252019]"
                >
                  <div className="overflow-hidden">
                    <img
                      src={product.image}
                      alt={`${product.name} collection preview`}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  <span className="absolute left-4 top-4 bg-[#151310]/85 px-3 py-2 text-[9px] tracking-[0.15em] text-[#e8d3ad]">
                    {product.category.toUpperCase()}
                  </span>

                  <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center border border-white/50 bg-[#151310]/70 text-xl text-white transition-all duration-300 group-hover:border-[#c9a66b] group-hover:bg-[#c9a66b] group-hover:text-[#151310]">
                    ↗
                  </span>
                </a>

                <div className="flex items-start justify-between gap-4 border-b border-white/15 py-5">
                  <div>
                    <p className="mb-2 text-[9px] tracking-[0.2em] text-[#c9a66b]">
                      COLLECTION / {product.number}
                    </p>

                    <h3 className="text-xl font-medium transition-colors duration-300 group-hover:text-[#c9a66b]">
                      {product.name}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-xs leading-7 text-[#aaa49b]">
                  {product.description}
                </p>

                <a
                  href={`/contact?product=${encodeURIComponent(product.name)}`}
                  className="mt-5 inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.15em] text-[#c9a66b]"
                >
                  ENQUIRE ABOUT THIS STONE
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ENQUIRY BANNER */}
      <section className="bg-[#eae5dc] px-6 py-16 text-[#211d17] sm:px-10 sm:py-20 lg:px-[9%]">
        <Reveal className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold tracking-[0.25em] text-[#967448]">
              LOOKING FOR SOMETHING SPECIFIC?
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-4xl">
              Let&apos;s discuss your
              <span className="font-serif italic text-[#967448]">
                {" "}granite requirements.
              </span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#706a61]">
              Contact us with your preferred variety, quantity
              and project specifications.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-6 bg-[#211d17] px-6 py-4 text-xs font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#9b7944]"
          >
            Send an Enquiry <span className="text-lg">↗</span>
          </a>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
