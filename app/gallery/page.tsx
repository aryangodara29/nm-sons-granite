
"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const galleryItems = [
  {
    name: "GD Brown",
    category: "Brown Granite",
    number: "01",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=85",
    description: "Warm tones for distinctive architectural spaces.",
  },
  {
    name: "Black Galaxy",
    category: "Black Granite",
    number: "02",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1100&q=85",
    description: "A bold, dark aesthetic for modern projects.",
  },
  {
    name: "Tan Brown",
    category: "Brown Granite",
    number: "03",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1100&q=85",
    description: "Earthy tones with a timeless visual appeal.",
  },
  {
    name: "Light Stone",
    category: "Light Granite",
    number: "04",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1100&q=85",
    description: "Light, understated styles for elegant interiors.",
  },
  {
    name: "Premium Finish",
    category: "Stone Finishes",
    number: "05",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1100&q=85",
    description: "Explore finishes suited to different design needs.",
  },
  {
    name: "Modern Surfaces",
    category: "Stone Applications",
    number: "06",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=85",
    description: "Stone-inspired surfaces for contemporary spaces.",
  },
  {
    name: "Natural Elegance",
    category: "Stone Applications",
    number: "07",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1100&q=85",
    description: "Natural textures for individual project concepts.",
  },
  {
    name: "Architectural Stone",
    category: "Stone Finishes",
    number: "08",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1100&q=85",
    description: "Explore stone aesthetics for architectural spaces.",
  },
];

const filters = [
  "All",
  "Brown Granite",
  "Black Granite",
  "Light Granite",
  "Stone Finishes",
  "Stone Applications",
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

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeFilter
        );

  return (
    <main className="overflow-hidden bg-[#151310] text-[#f7f3ec]">
      <Navbar />

      {/* HERO */}
      <section className="relative isolate flex min-h-[470px] items-center bg-[#211c16] px-6 py-24 sm:px-10 lg:min-h-[560px] lg:px-[9%]">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85"
          alt="Architectural interior with refined stone-inspired finishes"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#100e0b]/95 via-[#100e0b]/75 to-[#100e0b]/30" />

        <Reveal className="max-w-4xl">
          <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.25em] text-[#c9a66b] sm:text-xs">
            <span className="h-px w-9 bg-[#c9a66b]" />
            THE VISUAL COLLECTION
          </p>

          <h1 className="mt-7 text-5xl font-medium leading-[1.08] tracking-tight sm:text-6xl lg:text-8xl">
            A closer look at
            <br />
            <span className="font-serif italic text-[#c9a66b]">
              natural beauty.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-8 text-[#d0cbc3] sm:text-base">
            Explore stone-inspired visuals, architectural
            applications and design ideas for your next project.
          </p>

          <a
            href="#gallery-collection"
            className="mt-8 inline-flex items-center gap-7 bg-[#c9a66b] px-6 py-4 text-xs font-bold text-[#17130e] transition duration-300 hover:-translate-y-1 hover:bg-[#e0c18b]"
          >
            Explore Gallery <span className="text-lg">↗</span>
          </a>
        </Reveal>
      </section>

      {/* INTRODUCTION */}
      <section className="grid gap-5 border-b border-white/10 px-6 py-12 sm:px-10 md:grid-cols-2 md:items-end lg:px-[9%]">
        <Reveal>
          <p className="text-[10px] font-semibold tracking-[0.25em] text-[#c9a66b]">
            STONE · TEXTURE · DESIGN
          </p>
          <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-4xl">
            Discover the details.
            <br />
            <span className="font-serif italic text-[#c9a66b]">
              Find your inspiration.
            </span>
          </h2>
        </Reveal>

        <Reveal>
          <p className="max-w-xl text-sm leading-8 text-[#aaa49b] md:justify-self-end">
            Browse our visual collection and contact our team
            to discuss granite varieties, finishes and
            product availability for your requirements.
          </p>
        </Reveal>
      </section>

      {/* FILTERS AND GALLERY */}
      <section
        id="gallery-collection"
        className="px-6 py-16 sm:px-10 sm:py-20 lg:px-[9%] lg:py-24"
      >
        <Reveal>
          <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.25em] text-[#c9a66b]">
                OUR GALLERY
              </p>
              <h2 className="mt-3 text-3xl font-medium sm:text-4xl">
                Visual stories in stone
              </h2>
            </div>

            <p className="text-xs text-[#aaa49b]">
              Showing {visibleItems.length} collection{" "}
              {visibleItems.length === 1 ? "item" : "items"}
            </p>
          </div>
        </Reveal>

        {/* FILTER BUTTONS */}
        <div className="mb-10 flex gap-2 overflow-x-auto pb-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`shrink-0 border px-4 py-3 text-[10px] font-medium transition-all duration-300 sm:text-xs ${
                activeFilter === filter
                  ? "border-[#c9a66b] bg-[#c9a66b] text-[#151310]"
                  : "border-white/15 text-[#c7c0b5] hover:border-[#c9a66b] hover:text-[#c9a66b]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* RESPONSIVE IMAGE GRID */}
        <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-12">
          {visibleItems.map((item) => (
            <Reveal key={item.number}>
              <article className="group">
                <a
                  href={`/contact?product=${encodeURIComponent(item.name)}`}
                  aria-label={`Enquire about ${item.name}`}
                  className="relative block overflow-hidden bg-[#252019]"
                >
                  <img
                    src={item.image}
                    alt={`${item.name} — sample architectural gallery image`}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                  <span className="absolute left-4 top-4 border border-white/30 bg-black/40 px-3 py-2 text-[9px] tracking-[0.15em] text-white backdrop-blur-sm">
                    {item.category.toUpperCase()}
                  </span>

                  <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center border border-white/60 bg-black/30 text-xl text-white transition-all duration-300 group-hover:border-[#c9a66b] group-hover:bg-[#c9a66b] group-hover:text-[#151310]">
                    ↗
                  </span>

                  <span className="absolute bottom-5 left-5 text-[10px] tracking-[0.2em] text-white/80">
                    COLLECTION / {item.number}
                  </span>
                </a>

                <div className="mt-5 flex items-start justify-between gap-3">
                  <h3 className="text-lg font-medium transition-colors duration-300 group-hover:text-[#c9a66b] sm:text-xl">
                    {item.name}
                  </h3>
                </div>

                <p className="mt-3 text-xs leading-7 text-[#aaa49b]">
                  {item.description}
                </p>

                <a
                  href={`/contact?product=${encodeURIComponent(item.name)}`}
                  className="mt-4 inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.12em] text-[#c9a66b]"
                >
                  ENQUIRE ABOUT THIS ITEM
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-[#eae5dc] px-6 py-16 text-[#211d17] sm:px-10 sm:py-20 lg:px-[9%]">
        <Reveal className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold tracking-[0.25em] text-[#967448]">
              HAVE A PROJECT IN MIND?
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-4xl">
              Let&apos;s find the right
              <span className="font-serif italic text-[#967448]">
                {" "}stone for you.
              </span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#706a61]">
              Tell us about your project, preferred granite
              and quantity requirements.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-6 bg-[#211d17] px-6 py-4 text-xs font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#967448]"
          >
            Contact Our Team <span className="text-lg">↗</span>
          </a>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
