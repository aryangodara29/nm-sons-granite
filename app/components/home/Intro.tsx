
"use client";

import { useEffect, useRef } from "react";

export default function Intro() {
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

    // Prepare elements for reveal animation
    elements.forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(35px)";
    });

    // Animate when elements enter the screen
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
      className="intro section-wrap"
      id="about"
    >
      <div className="intro-label" data-reveal>
        <span className="section-number">01 / ABOUT US</span>
        <span className="gold-line" />
      </div>

      <div className="intro-copy" data-reveal>
        <p className="eyebrow dark-eyebrow">
          THE NM SONS APPROACH
        </p>

        <h2>
          Natural beauty.
          <br />
          <em>Considered quality.</em>
        </h2>

        <p>
          At NM SONS EXIM &amp; TRADING LLP, we aim to connect
          buyers with Indian stone products suited to their
          project requirements. From product selection to
          export enquiries, our focus is on clear communication
          and dependable service.
        </p>

        <a
          className="text-link transition-all duration-300 hover:translate-x-2"
          href="#contact"
        >
          Get to know us <span>↗</span>
        </a>
      </div>

      <div
        className="intro-visual overflow-hidden"
        data-reveal
      >
        <img
          className="transition-transform duration-700 ease-out hover:scale-105"
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1100&q=85"
          alt="Premium stone finishes in an architectural interior"
        />

        <div className="visual-caption">
          <span>THE BEAUTY OF NATURAL MATERIALS</span>
          <span>NM / STONE</span>
        </div>
      </div>
    </section>
  );
}
