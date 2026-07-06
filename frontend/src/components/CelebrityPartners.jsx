import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { celebrities } from "../data/mock";

const CelebrityPartners = () => {
  const [start, setStart] = useState(0);
  const perView = 4;
  const max = Math.max(0, celebrities.length - perView);

  const prev = () => setStart((s) => Math.max(0, s - 1));
  const next = () => setStart((s) => Math.min(max, s + 1));

  return (
    <section className="py-16 md:py-20 bg-[#faf6f2] relative">
      <div className="container-x">
        <h2 className="section-heading text-3xl md:text-4xl">Celebrity Partners</h2>
        <div className="relative mt-8">
          <button
            onClick={prev}
            aria-label="prev"
            className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#ec008c] hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="overflow-hidden mx-10">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${start * (100 / perView)}%)` }}
            >
              {celebrities.map((c) => (
                <div key={c.id} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-3">
                  <div className="rounded-lg overflow-hidden shadow-md group">
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={c.image}
                        alt={c.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={next}
            aria-label="next"
            className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#ec008c] hover:text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CelebrityPartners;
