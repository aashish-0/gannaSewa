import React from "react";
import { Link } from "react-router-dom";
import { causes } from "../data/mock";

const CausesSection = () => {
  return (
    <section id="causes" className="py-16 md:py-20 bg-[#faf6f2]">
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h4 className="text-[#059669] uppercase tracking-widest text-sm font-semibold mb-3">What We Do</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-[#059669] mb-4">Building Lives Through Sustainable Development</h2>
          <p className="text-gray-600 leading-relaxed">
            Five focus areas working together to move families from dependency to dignity.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-6 mt-4">
          {causes.map((c) => (
            <Link key={c.id} to={c.link} className="cause-card flex flex-col items-center text-center group">
              <div className="cause-icon w-28 h-28 md:w-32 md:h-32 flex items-center justify-center mb-4">
                <img src={c.icon} alt={c.name} className="w-full h-full object-contain" />
              </div>
              <h4 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-[#059669] transition-colors">{c.name}</h4>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CausesSection;
