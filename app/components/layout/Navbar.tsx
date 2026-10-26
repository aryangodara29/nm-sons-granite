
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "Export Services", href: "/export-services" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Escape key se mobile menu close hoga.
  useEffect(() => {
    if (!menuOpen) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  function isActive(href: string) {
    return pathname === href;
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
<div className="sticky top-0 z-50">      {/* Top information bar */}
      <div className="hidden items-center justify-between border-b border-white/10 bg-[#100f0d] px-5 py-3 text-[9px] tracking-[0.18em] text-[#e8dfd0] sm:flex sm:px-8 lg:px-[7%]">
        <span>NM SONS EXIM &amp; TRADING LLP</span>
        <span>INDIAN STONE · GLOBAL POSSIBILITIES</span>
      </div>

      {/* Main navbar */}
      <header className="relative border-b border-white/10 bg-[#171511]">
        <div className="mx-auto flex min-h-[82px] max-w-[1600px] items-center justify-between gap-4 px-4 sm:px-8 lg:px-[4%]">
          {/* Logo */}
          <Link
            href="/"
            aria-label="NM SONS Granite Home"
            onClick={closeMenu}
            className="group flex shrink-0 items-center gap-3"
          >
            <img
              src="/logo.png"
              alt="NM SONS logo"
              className="h-10 w-auto max-w-[85px] object-contain transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:max-w-[95px]"
            />

            <span className="h-10 w-px bg-[#c9a66b]/60" />

            <span className="flex flex-col">
              <strong className="text-sm font-bold tracking-[0.13em] !text-white sm:text-base">
                GRANITE
              </strong>
              <span className="mt-1 whitespace-nowrap text-[8px] tracking-[0.15em] !text-[#d6b477] sm:text-[9px]">
                STONE COLLECTION
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-4 xl:flex 2xl:gap-6"
          >
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative whitespace-nowrap py-3 text-[11px] font-medium transition-colors duration-300 ${
                    active
                      ? "!text-[#d6b477]"
                      : "!text-[#f0ece5] hover:!text-[#d6b477]"
                  }`}
                >
                  {link.label}

                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#d6b477] transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop quote button */}
          <Link
            href="/contact"
            onClick={closeMenu}
            className="hidden shrink-0 items-center gap-3 bg-[#c9a66b] px-4 py-3 text-[10px] font-bold !text-[#17130e] transition duration-300 hover:-translate-y-0.5 hover:bg-[#e0c18b] lg:inline-flex xl:px-5"
          >
            Get a Quote
            <span className="text-base">↗</span>
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-[6px] border border-white/25 !text-white transition-colors duration-300 hover:border-[#d6b477] hover:!text-[#d6b477] xl:hidden"
          >
            <span
              className={`h-px w-5 bg-current transition-all duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-5 bg-current transition-all duration-300 ${
                menuOpen ? "scale-x-0 opacity-0" : ""
              }`}
            />
            <span
              className={`h-px w-5 bg-current transition-all duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile and tablet dropdown */}
        <div
          id="mobile-navigation"
          aria-hidden={!menuOpen}
          className={`absolute left-0 right-0 top-full overflow-hidden border-b border-[#c9a66b]/30 bg-[#171511] shadow-2xl shadow-black/40 transition-all duration-300 ease-in-out xl:hidden ${
            menuOpen
              ? "visible max-h-[85vh] translate-y-0 opacity-100"
              : "invisible max-h-0 -translate-y-2 opacity-0"
          }`}
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto max-h-[85vh] max-w-2xl overflow-y-auto px-5 py-4 sm:px-8"
          >
            {navLinks.map((link, index) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  tabIndex={menuOpen ? 0 : -1}
                  aria-current={active ? "page" : undefined}
                  onClick={closeMenu}
                  className={`group flex items-center justify-between border-b border-white/10 py-4 transition-all duration-300 hover:pl-2 ${
                    active
                      ? "!text-[#d6b477]"
                      : "!text-[#f0ece5] hover:!text-[#d6b477]"
                  }`}
                  style={{
                    transitionDelay: menuOpen ? `${index * 35}ms` : "0ms",
                  }}
                >
                  <span className="text-sm">{link.label}</span>
                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              );
            })}

            <Link
              href="/contact"
              tabIndex={menuOpen ? 0 : -1}
              onClick={closeMenu}
              className="mt-5 flex items-center justify-center gap-3 bg-[#c9a66b] px-5 py-4 text-xs font-bold !text-[#17130e] transition duration-300 hover:bg-[#e0c18b]"
            >
              Get a Quote
              <span className="text-lg">↗</span>
            </Link>

            <p className="pb-2 pt-5 text-center text-[9px] tracking-[0.16em] !text-[#b8afa0]">
              NM SONS EXIM &amp; TRADING LLP
            </p>
          </nav>
        </div>
      </header>
    </div>
  );
}
