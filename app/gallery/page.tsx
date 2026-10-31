
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
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90",
    description: "Warm tones for distinctive architectural spaces.",
  },
  {
    name: "Black Galaxy",
    category: "Black Granite",
    number: "02",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=90",
    description: "A bold, dark aesthetic for modern projects.",
  },
  {
    name: "Tan Brown",
    category: "Brown Granite",
    number: "03",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90",
    description: "Earthy tones with a timeless visual appeal.",
  },
  {
    name: "Light Stone",
    category: "Light Granite",
    number: "04",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90",
    description: "Light, understated styles for elegant interiors.",
  },
  {
    name: "Premium Finish",
    category: "Stone Finishes",
    number: "05",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=90",
    description: "Explore finishes suited to different design needs.",
  },
  {
    name: "Modern Surfaces",
    category: "Stone Applications",
    number: "06",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90",
    description: "Stone-inspired surfaces for contemporary spaces.",
  },
  {
    name: "Natural Elegance",
    category: "Stone Applications",
    number: "07",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=90",
    description: "Natural textures for individual project concepts.",
  },
  {
    name: "Architectural Stone",
    category: "Stone Finishes",
    number: "08",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90",
    description: "Explore stone aesthetics for architectural spaces.",
  },
  {
    name: "Contemporary Living",
    category: "Stone Applications",
    number: "09",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90",
    description: "Natural-inspired materials for modern living.",
  },
  {
    name: "Timeless Interiors",
    category: "Premium Collection",
    number: "10",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=90",
    description: "A refined visual approach to timeless interiors.",
  },
];

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
      style={{ transitionDelay: `${delay}ms` }}
      className={`translate-y-8 opacity-0 transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 ${className}`}
    >
      {children}
    </div>
  );
}

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const [selectedItem, setSelectedItem] = useState<
    (typeof galleryItems)[number] | null
  >(null);

  const touchStartX = useRef(0);

  const activeItem = galleryItems[activeIndex];

  const nextSlide = () => {
    setActiveIndex(
      (current) => (current + 1) % galleryItems.length
    );
  };

  const previousSlide = () => {
    setActiveIndex(
      (current) =>
        (current - 1 + galleryItems.length) % galleryItems.length
    );
  };

  // FULLSCREEN KEYBOARD CONTROLS
  useEffect(() => {
    if (!selectedItem) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedItem(null);
      }

      if (event.key === "ArrowRight") {
        nextSlide();
      }

      if (event.key === "ArrowLeft") {
        previousSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedItem]);

  // AUTOMATIC SLIDESHOW
  useEffect(() => {
    // Pause autoplay while fullscreen preview is open
    if (selectedItem) return;

    const slideInterval = window.setInterval(() => {
      setActiveIndex(
        (current) => (current + 1) % galleryItems.length
      );
    }, 3000);

    return () => window.clearInterval(slideInterval);
  }, [selectedItem]);

  return (
    <main className="overflow-hidden bg-[#151310] text-[#f7f3ec]">
      <Navbar />

      {/* CINEMATIC HERO */}
      <section className="relative isolate flex min-h-[650px] items-center overflow-hidden bg-[#211c16] px-6 py-24 sm:px-10 lg:min-h-[760px] lg:px-[9%]">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=90"
          alt="Architectural interior featuring natural stone finishes"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#100e0b]/95 via-[#100e0b]/70 to-[#100e0b]/20" />

        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#151310]/70 via-transparent to-transparent" />

        <Reveal className="relative z-10 max-w-5xl">
          <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#c9a66b] sm:text-xs">
            <span className="h-px w-10 bg-[#c9a66b]" />
            NM SONS / VISUAL ARCHIVE
          </p>

          <h1 className="mt-8 text-5xl font-medium leading-[1.08] tracking-tight sm:text-7xl lg:text-[100px]">
            Stone is
            <br />
            more than
            <br />
            <span className="font-serif italic text-[#c9a66b]">
              a surface.
            </span>
          </h1>

          <p className="mt-7 max-w-lg text-sm leading-8 text-[#ded8ce] sm:text-base">
            Discover the textures, tones and architectural
            possibilities of natural stone through our visual
            collection.
          </p>

          <a
            href="#gallery-carousel"
            className="mt-9 inline-flex items-center gap-8 rounded-lg bg-[#c9a66b] px-7 py-4 text-xs font-bold tracking-wide text-[#17130e] transition-all duration-700 ease-in-out hover:-translate-y-2 hover:bg-[#e0c18b] hover:shadow-[0_15px_35px_rgba(201,166,107,0.25)]"
          >
            EXPLORE THE GALLERY
            <span className="text-lg">↗</span>
          </a>
        </Reveal>

        <div className="absolute bottom-9 right-6 hidden items-center gap-4 text-[9px] tracking-[0.2em] text-white/65 sm:flex lg:right-[9%]">
          <span className="h-px w-12 bg-[#c9a66b]" />
          NATURAL MATERIALS / TIMELESS DESIGN
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="border-b border-white/10 px-6 py-20 sm:px-10 lg:px-[9%] lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-end">
          <Reveal>
            <p className="text-[10px] font-semibold tracking-[0.3em] text-[#c9a66b]">
              01 / THE ART OF NATURAL STONE
            </p>

            <h2 className="mt-6 text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
              Every surface
              <br />
              <span className="font-serif italic text-[#c9a66b]">
                tells a story.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={180}>
            <p className="max-w-lg text-sm leading-8 text-[#aaa49b] md:justify-self-end">
              From distinctive natural patterns to refined
              architectural applications, explore a visual
              collection that celebrates the character of stone.
              Browse our gallery and connect with our team for
              product details and availability.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 10 IMAGE CAROUSEL */}
      <section
        id="gallery-carousel"
        className="px-6 py-20 sm:px-10 lg:px-[9%] lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.3em] text-[#c9a66b]">
                  02 / VISUAL COLLECTION
                </p>

                <h2 className="mt-4 text-3xl font-medium sm:text-5xl">
                  A world of natural beauty.
                </h2>
              </div>

              <p className="text-xs tracking-wide text-[#aaa49b]">
                {activeItem.number} / 10
              </p>
            </div>
          </Reveal>

          {/* MAIN SLIDE */}
          <Reveal delay={120}>
            <div
              className="group relative overflow-hidden bg-[#211c16]"
              onTouchStart={(event) => {
                touchStartX.current = event.touches[0].clientX;
              }}
              onTouchEnd={(event) => {
                const difference =
                  touchStartX.current -
                  event.changedTouches[0].clientX;

                if (Math.abs(difference) > 50) {
                  if (difference > 0) {
                    nextSlide();
                  } else {
                    previousSlide();
                  }
                }
              }}
            >
              <button
                type="button"
                onClick={() => setSelectedItem(activeItem)}
                aria-label={`Open large preview of ${activeItem.name}`}
                className="relative block aspect-[4/3] w-full overflow-hidden text-left sm:aspect-[16/8] lg:aspect-[16/7]"
              >
                <img
                  key={activeItem.number}
                  src={activeItem.image}
                  alt={`${activeItem.name} gallery image`}
                  className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/10" />

                <div className="absolute left-5 top-5 flex items-center gap-3 sm:left-9 sm:top-9">
                  <span className="text-[10px] tracking-[0.2em] text-[#e5c995]">
                    COLLECTION / {activeItem.number}
                  </span>

                  <span className="h-px w-8 bg-[#c9a66b]" />

                  <span className="text-[9px] tracking-[0.16em] text-white/80">
                    {activeItem.category.toUpperCase()}
                  </span>
                </div>

                <div className="absolute bottom-7 left-5 right-5 flex items-end justify-between gap-4 sm:bottom-12 sm:left-10 sm:right-10">
                  <div>
                    <h3 className="text-3xl font-medium sm:text-5xl lg:text-6xl">
                      {activeItem.name}
                    </h3>

                    <p className="mt-3 max-w-lg text-xs leading-6 text-white/75 sm:text-sm">
                      {activeItem.description}
                    </p>
                  </div>

                  <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/60 text-xl transition-all duration-500 group-hover:border-[#c9a66b] group-hover:bg-[#c9a66b] group-hover:text-[#151310] sm:flex">
                    ↗
                  </span>
                </div>
              </button>

              {/* DESKTOP AND TABLET ARROWS - HIDDEN ON MOBILE */}
              <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 gap-2 sm:flex sm:right-8">
                <button
                  type="button"
                  onClick={previousSlide}
                  aria-label="Previous gallery image"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-black/40 text-white backdrop-blur-sm transition-all duration-500 hover:border-[#c9a66b] hover:bg-[#c9a66b] hover:text-[#151310] sm:h-12 sm:w-12"
                >
                  ←
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next gallery image"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-black/40 text-white backdrop-blur-sm transition-all duration-500 hover:border-[#c9a66b] hover:bg-[#c9a66b] hover:text-[#151310] sm:h-12 sm:w-12"
                >
                  →
                </button>
              </div>
            </div>
          </Reveal>

          {/* SLIDE INDICATORS */}
          <Reveal delay={180}>
            <div className="mt-7 flex flex-col gap-5 border-b border-white/15 pb-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center gap-2">
                {galleryItems.map((item, index) => (
                  <button
                    key={item.number}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to image ${item.number}`}
                    aria-current={activeIndex === index ? "true" : undefined}
                    className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === index ? "w-10 bg-[#c9a66b]" : "w-4 bg-white/25 hover:bg-white/60"}`}
                  />
                ))}
              </div>

              <p className="text-[10px] tracking-[0.2em] text-[#aaa49b]">
                SELECT A SLIDE TO EXPLORE
              </p>
            </div>
          </Reveal>

          {/* THUMBNAILS */}
          <Reveal delay={220}>
            <div className="mt-8 grid grid-cols-5 gap-2 sm:grid-cols-10 sm:gap-3">
              {galleryItems.map((item, index) => (
                <button
                  key={item.number}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Select ${item.name}`}
                  aria-pressed={activeIndex === index}
                  className={`group relative overflow-hidden border transition-all duration-500 ${activeIndex === index ? "border-[#c9a66b] opacity-100" : "border-white/10 opacity-50 hover:border-white/50 hover:opacity-100"}`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <span className="absolute bottom-1 right-1 text-[8px] text-white drop-shadow-md sm:bottom-2 sm:right-2">
                    {item.number}
                  </span>
                </button>
              ))}
            </div>
          </Reveal>

          <p className="mt-8 text-[10px] leading-6 text-[#777168]">
            Featured imagery is illustrative. Actual stone appearance,
            finishes and availability should be confirmed with our team.
          </p>
        </div>
      </section>

      {/* EDITORIAL QUOTE */}
      <section className="border-y border-white/10 bg-[#1c1914] px-6 py-16 sm:px-10 lg:px-[9%] lg:py-20">
        <Reveal className="mx-auto max-w-7xl text-center">
          <p className="text-[10px] font-semibold tracking-[0.3em] text-[#c9a66b]">
            THE NM SONS PERSPECTIVE
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-medium leading-tight sm:text-5xl">
            Nature creates the pattern.
            <br />
            <span className="font-serif italic text-[#c9a66b]">
              Design gives it a place.
            </span>
          </h2>
        </Reveal>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-[#eae5dc] px-6 py-16 text-[#211d17] sm:px-10 sm:py-20 lg:px-[9%]">
        <Reveal className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold tracking-[0.25em] text-[#967448]">
              03 / LET&apos;S CREATE SOMETHING
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-5xl">
              Have a project in mind?
              <br />
              <span className="font-serif italic text-[#967448]">
                Let&apos;s talk stone.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#706a61]">
              Share your preferred granite variety, quantity
              and project requirements.
            </p>
          </div>

          <a
            href="/contact"
            className="group inline-flex shrink-0 items-center justify-center gap-7 rounded-lg bg-[#c9a66b] px-7 py-4 text-xs font-bold text-[#17130e] transition-all duration-700 ease-in-out hover:-translate-y-2 hover:scale-[1.03] hover:bg-[#e0c18b] hover:shadow-[0_14px_30px_rgba(150,116,72,0.25)]"
          >
            CONTACT OUR TEAM
            <span className="text-lg transition-transform duration-500 group-hover:translate-x-2">
              ↗
            </span>
          </a>
        </Reveal>
      </section>

      <Footer />

      {/* FULLSCREEN IMAGE PREVIEW */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#090807]/95 p-4 backdrop-blur-md sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedItem.name} image preview`}
          onClick={() => setSelectedItem(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedItem(null)}
            aria-label="Close image preview"
            className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/40 text-2xl text-white transition-all duration-300 hover:rotate-90 hover:border-[#c9a66b] hover:bg-[#c9a66b] hover:text-[#151310]"
          >
            ×
          </button>

          <div
            className="w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedItem.image}
              alt={`${selectedItem.name} enlarged gallery preview`}
              className="max-h-[75vh] w-full object-contain"
            />

            <div className="mt-5 flex flex-col justify-between gap-4 border-t border-white/20 pt-5 sm:flex-row sm:items-center">
              <div>
                <p className="text-[10px] tracking-[0.2em] text-[#c9a66b]">
                  {selectedItem.category.toUpperCase()} / {selectedItem.number}
                </p>

                <h3 className="mt-2 text-2xl font-medium text-white">
                  {selectedItem.name}
                </h3>
              </div>

              <a
                href={`/contact?product=${encodeURIComponent(selectedItem.name)}`}
                className="inline-flex items-center gap-5 self-start rounded-lg bg-[#c9a66b] px-6 py-4 text-xs font-bold text-[#151310] transition-all duration-500 hover:-translate-y-1 hover:bg-[#e0c18b] sm:self-auto"
              >
                ENQUIRE ABOUT THIS ITEM
                <span className="text-lg">↗</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
