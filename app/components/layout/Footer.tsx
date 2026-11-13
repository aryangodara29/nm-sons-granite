
"use client";

import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Gallery", href: "/gallery" },
];

const serviceLinks = [
  { name: "Granite Collection", href: "/products" },
  { name: "Visual Gallery", href: "/gallery" },
  { name: "Export Services", href: "/export-services" },
  { name: "Contact Our Team", href: "/contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#151310] text-[#f7f3ec]">

      {/* MAIN FOOTER */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:px-12 lg:py-20">

        {/* BRAND */}
        <div className="lg:col-span-1">
          <Link
            href="/"
            className="inline-block text-2xl font-semibold tracking-[0.12em] transition-colors duration-300 hover:text-[#c9a66b]"
          >
            NM SONS
            <span className="ml-2 font-serif italic text-[#c9a66b]">
              GRANITE
            </span>
          </Link>

          <p className="mt-6 max-w-xs text-xs leading-7 text-[#aaa49b]">
            NM SONS EXIM &amp; TRADING LLP connects buyers
            with Indian natural stone products through
            quality-focused sourcing and dependable service.
          </p>

          <div className="mt-7 flex items-center gap-3">
            <span className="h-px w-10 bg-[#c9a66b]" />
            <span className="text-[9px] tracking-[0.25em] text-[#c9a66b]">
              NATURAL STONE. GLOBAL CONNECTIONS.
            </span>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xs font-semibold tracking-[0.2em] text-[#c9a66b]">
            QUICK LINKS
          </h3>

          <ul className="mt-7 space-y-4">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center gap-2 text-sm text-[#aaa49b] transition-all duration-300 hover:translate-x-1 hover:text-[#c9a66b]"
                >
                  <span className="text-[#c9a66b] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    ↗
                  </span>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-xs font-semibold tracking-[0.2em] text-[#c9a66b]">
            EXPLORE
          </h3>

          <ul className="mt-7 space-y-4">
            {serviceLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center gap-2 text-sm text-[#aaa49b] transition-all duration-300 hover:translate-x-1 hover:text-[#c9a66b]"
                >
                  <span className="text-[#c9a66b] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    ↗
                  </span>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-xs font-semibold tracking-[0.2em] text-[#c9a66b]">
            GET IN TOUCH
          </h3>

          <p className="mt-7 text-xs leading-7 text-[#aaa49b]">
            Have a project or granite requirement?
            Connect with our team to discuss your needs.
          </p>

          <a
            href="mailto:info@nmsonsexim.com"
            className="mt-5 inline-block break-all text-sm text-[#f7f3ec] underline decoration-[#c9a66b]/50 underline-offset-4 transition-colors duration-300 hover:text-[#c9a66b]"
          >
            info@nmsonsexim.com
          </a>

          <Link
            href="/contact"
            className="group mt-7 inline-flex items-center gap-4 rounded-lg bg-[#c9a66b] px-5 py-3 text-[10px] font-bold tracking-wide text-[#151310] transition-all duration-500 hover:-translate-y-1 hover:bg-[#e0c18b] hover:shadow-[0_10px_25px_rgba(201,166,107,0.2)]"
          >
            CONTACT OUR TEAM
            <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </Link>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-7 sm:px-10 md:flex-row lg:px-12">

          <p className="text-center text-[10px] tracking-wide text-[#777168] md:text-left">
            © 2026 NM SONS EXIM &amp; TRADING LLP. ALL RIGHTS RESERVED.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-3 rounded-full border border-[#c9a66b]/40 px-5 py-3 text-[10px] font-semibold tracking-[0.15em] text-[#c9a66b] transition-all duration-500 hover:-translate-y-1 hover:border-[#c9a66b] hover:bg-[#c9a66b] hover:text-[#151310]"
          >
            BACK TO TOP

            <span className="inline-block text-base transition-transform duration-500 group-hover:-translate-y-1">
              ↑
            </span>
          </button>

          <p className="text-[9px] tracking-[0.2em] text-[#777168]">
            CRAFTED WITH PURPOSE.
          </p>
        </div>
      </div>

    </footer>
  );
}
