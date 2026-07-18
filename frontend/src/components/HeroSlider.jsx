import React from "react";
import { useCollection } from "../hooks/useContent";
import { heroSlides as fallback } from "../data/mock";

const HeroSection = () => {
  // Grab your data, but we only use the first item since it is no longer a slider
  const slides = useCollection("heroSlides", fallback);
  const data = slides.length > 0 ? slides[0] : fallback[0];

  return (
    <section id="home" className="relative w-full flex items-center bg-gray-900" style={{ minHeight: "clamp(450px, 75vw, 800px)" }}>

      {/* Background Image & Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src={data?.image || "/default-hero.jpg"}
          alt={data?.alt || "Women in training"}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Foreground Content */}
      <div className="container-x relative z-20 w-full py-16">
        <div className="max-w-4xl text-white">

          {/* Main Headline */}
          <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight drop-shadow-lg">
            Empowering Women. <br className="hidden md:block" />
            Transforming Families. <br className="hidden md:block" />
            Building Stronger Communities.
          </p>

          {/* 2-Line Description */}
          <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-2xl drop-shadow-md leading-relaxed text-white/95">
            Join us in providing essential skills, resources, and opportunities to create sustainable livelihoods for those who need it most.
          </p>

          {/* Three High-Converting Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">

            {/* Primary Button */}
            <a href="/donate" className="bg-[#059669] hover:bg-[#047857] text-white px-8 py-3.5 rounded-full font-bold shadow-lg transition-transform hover:-translate-y-1 text-center text-lg">
              Donate Now
            </a>

            {/* Secondary Button */}
            <a href="/sponsor" className="bg-white text-[#ec008c] hover:bg-gray-100 px-8 py-3.5 rounded-full font-bold shadow-lg transition-transform hover:-translate-y-1 text-center text-lg">
              Sponsor a Woman
            </a>

            {/* Tertiary Button */}
            <a href="/impact" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-bold shadow-lg transition-transform hover:-translate-y-1 text-center text-lg">
              View Our Impact
            </a>

          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;