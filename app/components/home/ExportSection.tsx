
"use client";

import { useEffect, useRef } from "react";

const benefits = [
  {
    number: "01",
    title: "Quality-Focused Sourcing",
    text: "Stone selected with attention to appearance, finish and consistency.",
  },
  {
    number: "02",
    title: "Export-Oriented Service",
    text: "Enquiry support for international buyers and bulk requirements.",
  },
  {
    number: "03",
    title: "Buyer-Focused Communication",
    text: "Discuss specifications, dimensions, quantities and shipping needs.",
  },
];

export default function ExportSection() {
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
      className="export-section"
      id="export"
    >
      <div className="section-wrap export-layout">
        <div data-reveal>
          <span className="section-number">
            03 / WHY NM SONS
          </span>

          <h2>
            Your requirements.
            <br />
            <em>Our attention.</em>
          </h2>

          <p className="export-intro">
            Every project has different needs. Let’s discuss the right stone,
            specifications and export requirements for yours.
          </p>
        </div>

        <div className="benefits">
          {benefits.map((benefit, index) => (
            <div
              className="benefit group transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-x-3"
              key={benefit.number}
              data-reveal
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <span className="transition-colors duration-300 group-hover:text-[#c9a66b]">
                {benefit.number}
              </span>

              <div>
                <h3 className="transition-colors duration-300 group-hover:text-[#c9a66b]">
                  {benefit.title}
                </h3>

                <p>{benefit.text}</p>
              </div>

              <span className="benefit-arrow transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#c9a66b]">
                ↗
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
