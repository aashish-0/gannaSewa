import React from "react";
import { Link } from "react-router-dom";
import { Heart, CheckCircle2 } from "lucide-react";

const bullets = [
  "Skill Development Training",
  "Entrepreneurship Support",
  "Health Awareness Programs",
  "Education Support",
  "Digital Literacy Training",
  "Sustainable Livelihood Opportunities"
];

const AlwaysOpenSection = () => {
  return (
    <section
      className="relative py-20 md:py-28 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/about/always-open-banner.jpg')"
      }}
    >
      <div className="container-x grid md:grid-cols-2 gap-10 items-center">
        <div className="text-white">
          <h3 className="text-[#059669] uppercase tracking-widest text-sm font-semibold mb-2">A Small Donation. A Big Change.</h3>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            When you support one person, you transform an entire family.
          </h2>
          <p className="text-white/90 leading-relaxed mb-8 max-w-lg">
            Imagine being a woman eager to work, support your family and educate your children, but lacking the skills and opportunities to earn a livelihood. This is the reality faced by thousands of women and young people across India. Your donation helps us provide:
          </p>
          <Link
            to="/donate"
            className="inline-flex items-center gap-2 bg-[#059669] hover:bg-[#047857] transition-colors text-white px-8 py-3 rounded-full font-semibold shadow-lg"
          >
            Donate Now
            <Heart className="w-4 h-4 fill-white" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {bullets.map((b, i) => (
            <div key={i} className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <CheckCircle2 className="w-5 h-5 text-[#34d399] flex-shrink-0 mt-0.5" />
              <span className="text-white text-sm md:text-base">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlwaysOpenSection;
