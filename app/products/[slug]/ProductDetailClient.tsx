
"use client";

import { useState } from "react";
import Link from "next/link";
import type { GraniteProduct } from "../../data/products";
import { products } from "../../data/products";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function ProductDetailClient({
  product,
}: {
  product: GraniteProduct;
}) {
  const [activeImage, setActiveImage] = useState(0);

  const otherProducts = products
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f3ec] text-[#211c16]">
      <Navbar />

      {/* PRODUCT DETAILS */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-16">

        {/* PRODUCT IMAGE */}
        <div>
          <div className="overflow-hidden rounded-xl bg-[#eae5dc]">
            <img
              src={product.images[activeImage]}
              alt={`${product.name} - illustrative sample image`}
              className="aspect-[5/4] w-full object-cover"
            />
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            {product.images.map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setActiveImage(index)}
                className={`overflow-hidden rounded-lg border-2 transition-all duration-500 ${
                  activeImage === index
                    ? "border-[#c9a66b]"
                    : "border-transparent"
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} sample view ${index + 1}`}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </button>
            ))}
          </div>

          <p className="mt-3 text-[10px] leading-5 text-[#82796d]">
            Illustrative sample images only. Actual granite colour and
            pattern may vary. Original product photographs will be added
            after confirmation.
          </p>
        </div>

        {/* PRODUCT INFORMATION */}
        <div className="lg:pt-2">
          <span className="inline-flex rounded-full border border-[#c9a66b]/60 bg-[#c9a66b]/10 px-4 py-2 text-[10px] font-medium text-[#76572e]">
            {product.category}
          </span>

          <h1 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            {product.name}
          </h1>

          <p className="mt-4 text-sm leading-7 text-[#655e55]">
            {product.shortDescription}
          </p>

          <div className="my-7 border-t border-[#d9d1c5]" />

          <h2 className="text-lg font-semibold">
            Product Overview
          </h2>

          <p className="mt-3 text-sm leading-7 text-[#655e55]">
            {product.description}
          </p>

          {/* PRODUCT FEATURES */}
          <div className="mt-7 rounded-xl border border-[#ded7cb] bg-white p-5">
            <h3 className="font-semibold">
              Product Features
            </h3>

            <ul className="mt-4 space-y-3">
              {product.features.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-3 text-sm text-[#655e55]"
                >
                  <span className="text-[#a17b42]">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <p className="mt-4 text-[10px] leading-5 text-[#82796d]">
              Product characteristics and availability should be
              confirmed with our team before ordering.
            </p>
          </div>

          {/* ENQUIRY BUTTONS */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`/contact?product=${encodeURIComponent(product.name)}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#211c16] px-6 py-3.5 text-xs font-semibold text-white transition-all duration-500 hover:-translate-y-1 hover:bg-[#3a3025]"
            >
              Contact Our Team ↗
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-[#c9a66b] px-6 py-3.5 text-xs font-semibold text-[#211c16] transition-all duration-500 hover:-translate-y-1 hover:bg-[#c9a66b]/15"
            >
              Send an Enquiry
            </Link>
          </div>

          <p className="mt-4 text-[10px] leading-5 text-[#82796d]">
            Contact us for product details, bulk enquiries and export
            requirements.
          </p>
        </div>
      </section>

      {/* ADDITIONAL PRODUCT INFORMATION */}
      <section className="border-t border-[#ded7cb] bg-white px-6 py-12 sm:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">

          <div>
            <h2 className="text-xl font-semibold">
              Available Finish Options
            </h2>

            <div className="mt-5 flex flex-wrap gap-3">
              {product.finishes.map((finish) => (
                <span
                  key={finish}
                  className="rounded-full border border-[#ded7cb] bg-[#f7f3ec] px-4 py-2 text-xs text-[#655e55]"
                >
                  {finish}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              Applications
            </h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {product.applications.map((application) => (
                <p
                  key={application}
                  className="text-sm text-[#655e55]"
                >
                  <span className="mr-2 text-[#a17b42]">✓</span>
                  {application}
                </p>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* EXPLORE OTHER PRODUCTS */}
      <section className="px-6 py-14 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.2em] text-[#967448]">
                DISCOVER MORE
              </p>

              <h2 className="mt-3 text-2xl font-semibold">
                Explore Other Products
              </h2>
            </div>

            <Link
              href="/products"
              className="text-xs font-semibold text-[#76572e] hover:underline"
            >
              View All Products →
            </Link>
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherProducts.map((item) => (
              <Link
                key={item.id}
                href={`/products/${item.slug}`}
                className="group overflow-hidden rounded-xl border border-[#ded7cb] bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src={item.images[0]}
                  alt={`${item.name} illustrative sample`}
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="p-5">
                  <p className="text-[9px] font-semibold uppercase tracking-wider text-[#967448]">
                    {item.category}
                  </p>

                  <h3 className="mt-2 text-base font-semibold">
                    {item.name}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-xs leading-6 text-[#655e55]">
                    {item.shortDescription}
                  </p>

                  <p className="mt-4 text-xs font-semibold text-[#76572e]">
                    View Details →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
