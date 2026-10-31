
"use client";

import { useEffect, useState } from "react";

const heroImage =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=90";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setIsVisible(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      className="relative isolate flex min-h-[590px] min-h-[min(82svh,900px)] items-center overflow-hidden bg-[#30241d] text-[#fffdf8] sm:min-h-[650px] lg:min-h-[680px]"
      id="home"
    >
      {/* BACKGROUND IMAGE */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 -z-20 scale-110 bg-cover bg-[position:60%_55%] transition-transform duration-[2000ms] ease-out motion-reduce:transform-none motion-reduce:transition-none ${
          isVisible ? "scale-100" : ""
        }`}
        style={{ backgroundImage: `url("${heroImage}")` }}
      />

      {/* DARK OVERLAY */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#120f0c]/95 via-[#18130f]/80 to-[#18130f]/25"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-[#15130f]/45 via-transparent to-[#15130f]/15"
        aria-hidden="true"
      />

      {/* HERO CONTENT */}
      <div className="mx-auto w-[90%] max-w-[1180px] py-24 sm:py-28 lg:py-32">
        <div className="max-w-[780px]">

          {/* EYEBROW */}
          <p
            className={`flex items-center gap-3 text-[9px] font-semibold leading-relaxed tracking-[0.2em] text-[#c9a66b] transition-all duration-700 ease-out sm:text-xs sm:tracking-[0.25em] motion-reduce:transition-none ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            <span className="h-px w-8 shrink-0 bg-[#c9a66b] sm:w-10" />
            NATURAL STONE · TIMELESS CHARACTER
          </p>

          {/* MAIN HEADING */}
          <h1
            className={`mt-7 font-serif text-[clamp(42px,7vw,82px)] font-normal leading-[1.08] tracking-[-0.045em] transition-all delay-150 duration-1000 ease-out sm:mt-8 sm:leading-[1.06] motion-reduce:transition-none ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Nature’s Finest
            <br />
            Stone.{" "}
            <em className="font-normal text-[#c9a66b]">
              Made to Last.
            </em>
          </h1>

          {/* DESCRIPTION */}
          <p
            className={`mt-6 max-w-[470px] text-[13px] leading-[1.9] text-[#ddd4c8] transition-all delay-300 duration-1000 ease-out sm:mt-7 sm:text-sm motion-reduce:transition-none ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            Discover premium Indian granite selected for its natural beauty,
            distinctive character and possibilities across architectural
            and commercial projects.
          </p>

          {/* BUTTONS */}
          <div
            className={`mt-8 flex max-w-[420px] flex-col items-stretch gap-3 transition-all delay-500 duration-1000 ease-out sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 motion-reduce:transition-none ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            <a
              href="#products"
              className="group inline-flex min-h-12 items-center justify-center gap-5 border border-[#c9a66b] bg-[#c9a66b] px-6 py-3 text-xs font-bold text-[#201910] shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-[#e4c994] hover:bg-[#e4c994] hover:shadow-xl hover:shadow-[#c9a66b]/20 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9a66b] motion-reduce:transform-none"
            >
              Explore Collection

              <span className="text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>

            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center border border-white/55 bg-white/[0.03] px-6 py-3 text-xs font-medium text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a66b] hover:bg-[#c9a66b]/15 hover:text-[#e5c995] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9a66b] motion-reduce:transform-none"
            >
              Discuss Your Requirements
            </a>
          </div>

          {/* HERO NOTE */}
          <div
            className={`mt-12 flex items-center gap-3 text-[8px] tracking-[0.15em] text-[#c8bfb3] transition-all delay-700 duration-1000 ease-out sm:mt-16 sm:text-[9px] sm:tracking-[0.18em] motion-reduce:transition-none ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            <span className="h-px w-8 shrink-0 bg-[#c9a66b] sm:w-10" />
            STONE WITH CHARACTER. SERVICE WITH PURPOSE.
          </div>
        </div>
      </div>

      {/* HERO INDEX */}
      <div
        className={`absolute bottom-7 right-[5%] flex items-center gap-2 text-[10px] tracking-[0.2em] text-[#d7c8b1] transition-opacity delay-1000 duration-1000 sm:bottom-9 sm:right-[6%] sm:text-xs motion-reduce:transition-none ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="font-semibold text-[#c9a66b]">01</span>
        <span>/ 03</span>
      </div>

      {/* BOTTOM DECORATIVE LINE */}
      <div
        className={`absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-[#c9a66b]/60 to-transparent transition-all delay-700 duration-[1500ms] ${
          isVisible ? "w-full" : "w-0"
        }`}
        aria-hidden="true"
      />
    </section>
  );
}
