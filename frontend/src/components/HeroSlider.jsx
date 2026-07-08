import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCollection } from "../hooks/useContent";
import { heroSlides as fallback } from "../data/mock";

const HeroSlider = () => {
  const slides = useCollection("heroSlides", fallback);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const t = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, [slides.length]);

  useEffect(() => { if (current >= slides.length) setCurrent(0); }, [slides.length, current]);

  const goPrev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const goNext = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section id="home" className="relative w-full overflow-hidden bg-gray-100" style={{ height: "clamp(320px, 55vw, 720px)" }}>
      {slides.map((s, i) => (
        <div key={s.id || i} className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
          <img src={s.image} alt={s.alt || ""} className="w-full h-full object-cover object-center" />
          {s.title && i === current && (
            <div className="absolute inset-0 flex items-center">
              <div className="container-x">
                <div className="max-w-xl text-white slide-fade">
                  <h2 className="text-4xl md:text-6xl font-bold mb-4 capitalize drop-shadow-lg">{s.title}</h2>
                  {s.subtitle && <p className="text-lg md:text-2xl mb-6 drop-shadow-md">{s.subtitle}</p>}
                  {s.cta && <a href={s.link || "#"} className="inline-block bg-[#ec008c] hover:bg-[#c70074] transition-colors text-white px-8 py-3 rounded-full font-semibold shadow-lg">{s.cta}</a>}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
      <button onClick={goPrev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/70 hover:bg-white text-gray-700 flex items-center justify-center shadow-md transition-colors"><ChevronLeft className="w-6 h-6" /></button>
      <button onClick={goNext} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/70 hover:bg-white text-gray-700 flex items-center justify-center shadow-md transition-colors"><ChevronRight className="w-6 h-6" /></button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-[#ec008c] w-8" : "bg-white/80"}`} />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
