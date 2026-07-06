import React from "react";
import { Play, Heart } from "lucide-react";

const AlwaysOpenSection = () => {
  return (
    <section
      className="relative py-20 md:py-28 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://shikshaseva.org/wp-content/uploads/2021/09/Helping-Today-Helping-tomorrow-.jpg')"
      }}
    >
      <div className="container-x grid md:grid-cols-2 gap-10 items-center">
        <div className="text-white">
          <h3 className="text-[#ec008c] uppercase tracking-widest text-sm font-semibold mb-2">Always Open</h3>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Listen, Act, Learn. Repeat</h2>
          <p className="text-white/90 leading-relaxed mb-8 max-w-lg">
            Shiksha Seva Foundation is on a mission to promote girl child education in India providing basic and life-skill education amongst the underprivileged women. Contribute towards building a strong foundation for nation through women empowerment and development programs.
          </p>
          <a
            href="#donate"
            className="inline-flex items-center gap-2 bg-[#ec008c] hover:bg-[#c70074] transition-colors text-white px-8 py-3 rounded-full font-semibold shadow-lg"
          >
            Donate to Girl Child Education
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
