import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCollection } from "../hooks/useContent";
import { stories as fallback } from "../data/mock";

const StoriesSection = () => {
  const items = useCollection("stories", fallback);
  const [current, setCurrent] = useState(0);
  const perView = 3;
  const prev = () => setCurrent((c) => (c - 1 + items.length) % items.length);
  const next = () => setCurrent((c) => (c + 1) % items.length);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-x">
        <h2 className="section-heading text-3xl md:text-4xl">Stories &amp; Updates</h2>
        <div className="relative mt-10">
          <button onClick={prev} className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#ec008c] hover:text-white transition-colors"><ChevronLeft className="w-5 h-5" /></button>
          <div className="overflow-hidden mx-10">
            <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${current * (100 / perView)}%)` }}>
              {items.map((s) => (
                <div key={s.id} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col group">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#ec008c] transition-colors">{s.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-6">{s.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button onClick={next} className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#ec008c] hover:text-white transition-colors"><ChevronRight className="w-5 h-5" /></button>
        </div>
        <div className="flex justify-center mt-10">
          <a href="#" className="bg-[#ec008c] hover:bg-[#c70074] transition-colors text-white px-7 py-2.5 rounded-full font-semibold shadow-md">View More</a>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
