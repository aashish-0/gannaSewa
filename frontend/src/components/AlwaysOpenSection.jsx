import React from "react";
import { Play, Heart } from "lucide-react";

const AlwaysOpenSection = () => {
  return (
    <section
      className="relative py-20 md:py-28 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/images/about/always-open-banner.jpg')"
      }}
    >
      <div className="container-x grid md:grid-cols-2 gap-10 items-center">
        <div className="text-white">
          <h3 className="text-[#059669] uppercase tracking-widest text-sm font-semibold mb-2">Always Open</h3>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Listen, Act, Learn. Repeat</h2>
          <p className="text-white/90 leading-relaxed mb-8 max-w-lg">
            Gana Sewa is on a mission to empower India&rsquo;s underserved communities through accessible skill development and sustainable livelihood opportunities, building pathways to dignified employment and economic independence for all.
          </p>
          <a
            href="#donate"
            className="inline-flex items-center gap-2 bg-[#059669] hover:bg-[#047857] transition-colors text-white px-8 py-3 rounded-full font-semibold shadow-lg"
          >
            Support Our Skill Development Work
            <Heart className="w-4 h-4 fill-white" />
          </a>
        </div>
        <div className="flex justify-center md:justify-end">
          <button
            aria-label="play video"
            className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/50 hover:bg-white/30 transition-colors flex items-center justify-center group"
          >
            <Play className="w-10 h-10 text-white fill-white ml-1 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AlwaysOpenSection;
