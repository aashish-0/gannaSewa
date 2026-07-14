import React from "react";
import { programs } from "../data/mock";

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-16 md:py-20 bg-white">
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h4 className="text-[#059669] uppercase tracking-widest text-sm font-semibold mb-3">OUR PROGRAMS</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-[#059669] mb-4">
            #HaqBantaHai
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
            Every Girl Child has Right to Nurture her Life.
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We want to enhance their social and economic status. Counsel them and make them independent, to stand on their feet and contribute to our society.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p) => (
            <div key={p.id} className="program-card shadow-lg bg-white">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.image} alt={p.hashtag} className="w-full h-full object-cover" />
              </div>
              <div className="p-5 text-center bg-white">
                <h4 className="text-lg font-bold text-gray-900">{p.hashtag}</h4>
                <p className="text-sm text-gray-600 mt-2">{p.description}</p>
              </div>
              <div className="program-overlay">
                <h4 className="text-2xl font-bold mb-2">{p.hashtag}</h4>
                <p className="text-sm">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
