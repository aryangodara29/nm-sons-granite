
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import ProductCard from "../products/ProductCard";

const products = [
  {
    name: "GD Brown Granite",
    slug: "gd-brown-granite",
    category: "NATURAL GRANITE",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
    description:
      "Rich brown tones with a distinctive natural character.",
  },
  {
    name: "Black Galaxy Granite",
    slug: "black-galaxy-granite",
    category: "DARK STONE COLLECTION",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
    description:
      "A bold, timeless look for contemporary spaces.",
  },
  {
    name: "Kashmiri Gold Granite",
    slug: "kashmiri-gold-granite",
    category: "PREMIUM SELECTION",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
    description:
      "Warm golden tones for distinctive architectural spaces.",
  },
];

export default function ProductsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements =
      section.querySelectorAll<HTMLElement>("[data-reveal]");

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    elements.forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(35px)";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const index = Array.from(elements).indexOf(element);

            element.animate(
              [
                {
                  opacity: 0,
                  transform: "translateY(35px)",
                },
                {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              ],
              {
                duration: 900,
                delay: index * 180,
                easing: "cubic-bezier(0.22, 1, 0.36, 1)",
                fill: "forwards",
              }
            );

            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="products-section"
      id="products"
    >
      <div className="section-wrap">
        <div className="section-heading">
          <div data-reveal>
            <span className="section-number">
              02 / OUR COLLECTION
            </span>

            <h2>
              Stone that speaks
              <br />
              <em>for itself.</em>
            </h2>
          </div>

          <p data-reveal>
            Explore our featured stone collections. Contact us
            to confirm available varieties, finishes, dimensions
            and current stock.
          </p>
        </div>

        {/* FEATURED PRODUCTS */}
        <div className="product-grid">
          {products.map((product, index) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              aria-label={`View ${product.name} details`}
              data-reveal
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
              className="group relative z-0 block rounded-sm transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:z-10 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_22px_45px_rgba(0,0,0,0.18)] hover:ring-1 hover:ring-[#c9a66b]/60"
            >
              <ProductCard
                name={product.name}
                category={product.category}
                image={product.image}
                description={product.description}
              />
            </Link>
          ))}
        </div>

        {/* IMAGE DISCLAIMER */}
        <p className="image-disclaimer" data-reveal>
          Featured imagery is illustrative. Actual stone appearance
          and availability must be confirmed with our team.
        </p>

        {/* ALL PRODUCTS BUTTON */}
        <div
          data-reveal
          className="mt-10 flex justify-center"
        >
          <Link
            href="/products"
            className="group inline-flex items-center justify-center gap-5 rounded-full border border-[#c9a66b] bg-[#c9a66b] px-9 py-4 text-xs font-semibold tracking-[0.12em] text-[#211c16] transition-all duration-700 hover:-translate-y-1 hover:bg-transparent hover:text-[#c9a66b]"
          >
            ALL PRODUCTS
            <span className="text-base transition-transform duration-500 group-hover:translate-x-2">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
