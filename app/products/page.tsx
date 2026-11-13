
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { products } from "../data/products";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categoryScrollRef = useRef<HTMLDivElement>(null);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(products.map((p) => p.category)))],
    []
  );

  const visibleProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  // Scroll reveal animation
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("opacity-100", "translate-y-0");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [activeCategory]);

  // Category horizontal scrolling
  const scrollCategories = (direction: "left" | "right") => {
    categoryScrollRef.current?.scrollBy({
      left: direction === "right" ? 260 : -260,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f3ec] text-[#211c16]">
      <Navbar />

      {/* PAGE INTRODUCTION */}
      <section className="border-b border-[#ded7cb] px-6 py-14 sm:px-10 lg:px-12">
        <div
          data-reveal
          className="mx-auto max-w-7xl translate-y-8 opacity-0 transition-all duration-1000 ease-out"
        >
          <p className="text-[10px] font-semibold tracking-[0.25em] text-[#967448]">
            NM SONS GRANITE COLLECTION
          </p>

          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
            Explore Our Granite
            <span className="font-serif italic text-[#967448]">
              {" "}Collection.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-8 text-[#655e55]">
            Discover a diverse selection of Indian granite varieties
            for residential, commercial and architectural projects.
            Contact our team for product details and export enquiries.
          </p>

          <p className="mt-5 text-xs font-medium text-[#76572e]">
            {products.length} PRODUCTS IN OUR COLLECTION
          </p>
        </div>
      </section>

      {/* CATEGORY FILTERS */}
      <section className="px-4 pt-8 sm:px-10 lg:px-12">
        <div
          data-reveal
          className="mx-auto max-w-7xl translate-y-6 opacity-0 transition-all duration-700 ease-out"
        >
          <div className="flex items-center gap-2 sm:gap-3">

            {/* LEFT ARROW - ALL SCREENS */}
            <button
              type="button"
              onClick={() => scrollCategories("left")}
              aria-label="Scroll categories left"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#cfc5b6] bg-white text-lg text-[#211c16] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#211c16] hover:bg-[#211c16] hover:text-white sm:h-11 sm:w-11"
            >
              ←
            </button>

            {/* CATEGORY BAR */}
            <div
              ref={categoryScrollRef}
              className="flex min-w-0 flex-1 gap-3 overflow-x-auto scroll-smooth pb-3 sm:gap-4"
              style={{ scrollbarWidth: "none" }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                  className={`shrink-0 rounded-full border px-5 py-3 text-xs font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                    activeCategory === category
                      ? "border-[#211c16] bg-[#211c16] text-white"
                      : "border-[#cfc5b6] bg-white text-[#655e55] hover:border-[#c9a66b] hover:text-[#76572e]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* RIGHT ARROW - ALL SCREENS */}
            <button
              type="button"
              onClick={() => scrollCategories("right")}
              aria-label="Scroll categories right"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#cfc5b6] bg-white text-lg text-[#211c16] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#211c16] hover:bg-[#211c16] hover:text-white sm:h-11 sm:w-11"
            >
              →
            </button>

          </div>
        </div>
      </section>

      {/* ALL PRODUCTS */}
      <section className="px-6 pb-16 pt-7 sm:px-10 lg:px-12 lg:pb-24">
        <div className="mx-auto max-w-7xl">

          {/* PRODUCTS HEADING */}
          <div
            data-reveal
            className="mb-7 flex translate-y-6 items-center justify-between border-b border-[#ded7cb] pb-5 opacity-0 transition-all duration-700 ease-out"
          >
            <h2 className="text-lg font-semibold">
              {activeCategory === "All" ? "All Products" : activeCategory}
            </h2>

            <p className="text-xs text-[#82796d]">
              Showing {visibleProducts.length} products
            </p>
          </div>

          {/* PRODUCT CARDS */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProducts.map((product, index) => (
              <article
                key={product.id}
                data-reveal
                style={{ transitionDelay: `${(index % 6) * 80}ms` }}
                className="group translate-y-10 overflow-hidden rounded-xl border border-[#ded7cb] bg-white opacity-0 shadow-sm transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-xl"
              >
                <Link href={`/products/${product.slug}`}>
                  <div className="overflow-hidden bg-[#eae5dc]">
                    <img
                      src={product.images[0]}
                      alt={`${product.name} illustrative sample`}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    />
                  </div>

                  <div className="p-5">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#967448]">
                      {product.category}
                    </p>

                    <h3 className="mt-2 text-lg font-semibold transition-colors duration-300 group-hover:text-[#967448]">
                      {product.name}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-xs leading-6 text-[#655e55]">
                      {product.shortDescription}
                    </p>

                    <p className="mt-5 text-xs font-semibold text-[#76572e] transition-all duration-300 group-hover:translate-x-1">
                      View Details →
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {visibleProducts.length === 0 && (
            <p className="py-16 text-center text-sm text-[#655e55]">
              No products found in this category.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
