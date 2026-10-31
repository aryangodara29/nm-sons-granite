
"use client";

import { useEffect, useRef } from "react";

export default function ContactSection() {
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
      className="contact-section"
      id="contact"
    >
      <div className="contact-inner">
        <p className="eyebrow" data-reveal>
          <span /> START A CONVERSATION
        </p>

        <h2 data-reveal>
          Looking for the
          <br />
          <em>right stone?</em>
        </h2>

        <p data-reveal>
          Tell us about your product, quantity and destination market.
          Our team can discuss the next steps with you.
        </p>

        <a
className="button-gold inline-block rounded-lg transition-all duration-700 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-[0_14px_30px_rgba(201,166,107,0.3)]"          href="mailto:info@nmsonsexim.com?subject=Granite%20Product%20Enquiry"
          data-reveal
        >
          Send an Enquiry <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">↗</span>
        </a>
      </div>
    </section>
  );
}
