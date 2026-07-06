import React from "react";
import { Link } from "react-router-dom";
import { causes } from "../data/mock";

const CausesSection = () => {
  return (
    <section id="causes" className="py-16 md:py-20 bg-[#faf6f2]">
      <div className="container-x">
        <h2 className="section-heading text-3xl md:text-4xl">Cause you can Support</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6 mt-12">
          {causes.map((c) => (
            <Link key={c.id} to={c.link} className="cause-card flex flex-col items-center text-center group">
              <div className="cause-icon w-28 h-28 md:w-32 md:h-32 flex items-center justify-center mb-4">
                <img src={c.icon} alt={c.name} className="w-full h-full object-contain" />
              </div>
              <h4 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-[#ec008c] transition-colors">{c.name}</h4>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CausesSection;
