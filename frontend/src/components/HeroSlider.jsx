import React from "react";
import { useCollection } from "../hooks/useContent";
import { heroSlides as fallback } from "../data/mock";

const HeroSection = () => {
  const slides = useCollection("heroSlides", fallback);
  const data = slides.length > 0 ? slides[0] : fallback[0];

  return (
    <section id="home" className="relative w-full flex items-center bg-gray-900" style={{ minHeight: "clamp(450px, 75vw, 800px)" }}>
      {/* Background Image & Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src={data?.image || "/default-hero.jpg"}
          alt={data?.alt || "Women in skill development training"}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Foreground Content */}
      <div className="container-x relative z-20 w-full py-16">
        <div className="max-w-4xl text-white">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight drop-shadow-lg">
            Empowering Women. <br className="hidden md:block" />
            Transforming Families. <br className="hidden md:block" />
            Building Stronger Communities.
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl mb-4 max-w-3xl drop-shadow-md leading-relaxed text-white/95">
            For over 18 years, Gana Sewa has been helping women, youth and vulnerable communities gain the skills, confidence and opportunities they need to build a better future.
          </p>
          <p className="text-base md:text-lg mb-10 max-w-3xl drop-shadow-md leading-relaxed text-white/90 italic">
            Together, we can change lives. <span className="not-italic">Donations exempted under 80G of the Income Tax Act 1961.</span>
          </p>

          {/* Three CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <a href="/donate" className="bg-[#059669] hover:bg-[#047857] text-white px-8 py-3.5 rounded-full font-bold shadow-lg transition-transform hover:-translate-y-1 text-center text-lg">
              Donate Now
            </a>
            <a href="/donate" className="bg-white text-[#059669] hover:bg-gray-100 px-8 py-3.5 rounded-full font-bold shadow-lg transition-transform hover:-translate-y-1 text-center text-lg">
              Sponsor a Woman
            </a>
            <a href="/get-involved/partner" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-bold shadow-lg transition-transform hover:-translate-y-1 text-center text-lg">
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
