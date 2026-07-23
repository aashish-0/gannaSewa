import React from "react";
import { Link } from "react-router-dom";
import { useCollection, useDoc } from "../hooks/useContent";
import { heroSlides as heroFallback } from "../data/mock";

/**
 * Redesigned Hero — tighter typography, generous whitespace, three restrained CTAs.
 * Background image is pulled from content/settings.heroBg (managed in Site Settings admin).
 * Overlay copy is pulled from content/home (managed in Home Content admin).
 * All fields fall back gracefully.
 */
const HeroSection = () => {
  const slides = useCollection("heroSlides", heroFallback);
  const settings = useDoc("content/settings", {});
  const home = useDoc("content/home", {});

  const slide = slides.length > 0 ? slides[0] : heroFallback[0];
  // const bg = settings.heroBg || slide?.image || "/default-hero.jpg";

  const headline = home.heroHeadline || "Empowering Women. Transforming Families. Building Stronger Communities.";
  const subtitle = home.heroSubtitle ||
    "For over 18 years, Gana Sewa has been helping women, youth and vulnerable communities gain the skills, confidence and opportunities they need to build a better future.";
  const taxNote = home.heroTaxNote || "Donations exempted under 80G of the Income Tax Act 1961.";

  const primaryLabel = home.heroPrimaryLabel || "Donate Now";
  const primaryLink = home.heroPrimaryLink || "/donate";
  const secondaryLabel = home.heroSecondaryLabel || "Sponsor a Woman";
  const secondaryLink = home.heroSecondaryLink || "/donate";
  const tertiaryLabel = home.heroTertiaryLabel || "Partner With Us";
  const tertiaryLink = home.heroTertiaryLink || "/get-involved/partner";

  // Split headline on the periods so each phrase appears on its own line on larger screens
  const headlineLines = headline.split(/(?<=\.)\s+/);

  return (
    <section
      id="home"
      className="relative w-full flex items-center bg-gray-900"
      style={{ minHeight: "clamp(420px, 62vw, 640px)" }}
      data-testid="home-hero"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 z-10" />
        <img src="/images/hero/tree-plantation.jpg" alt="" className="w-full h-full object-cover object-center" />
      </div>

      <div className="container-x relative z-20 w-full py-14 md:py-20">
        <div className="max-w-3xl text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.15] tracking-tight drop-shadow-lg">
            {headlineLines.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h1>

          <p className="mt-5 text-sm sm:text-base md:text-lg leading-relaxed text-white/95 max-w-2xl">
            {subtitle}
          </p>

          {taxNote && (
            <p className="mt-3 text-xs md:text-sm text-white/80 italic max-w-2xl">
              {taxNote}
            </p>
          )}

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to={primaryLink}
              data-testid="hero-cta-primary"
              className="bg-[#059669] hover:bg-[#047857] text-white px-6 py-2.5 rounded-full font-semibold text-sm md:text-base shadow-lg transition-transform hover:-translate-y-0.5"
            >
              {primaryLabel}
            </Link>
            <Link
              to={secondaryLink}
              data-testid="hero-cta-secondary"
              className="bg-white text-[#059669] hover:bg-gray-100 px-6 py-2.5 rounded-full font-semibold text-sm md:text-base shadow-lg transition-transform hover:-translate-y-0.5"
            >
              {secondaryLabel}
            </Link>
            <Link
              to={tertiaryLink}
              data-testid="hero-cta-tertiary"
              className="bg-transparent border border-white/70 text-white hover:bg-white/10 px-6 py-2.5 rounded-full font-semibold text-sm md:text-base transition-colors"
            >
              {tertiaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
