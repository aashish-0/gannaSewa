import React from "react";
import { Link } from "react-router-dom";
import { useCollection, useDoc } from "../hooks/useContent";
import { programs as fallback } from "../data/mock";

const ProgramsSection = () => {
  const items = useCollection("homePrograms", fallback);
  const home = useDoc("content/home", {});
  const eyebrow = home.programsEyebrow || "Our Programs";
  const heading = home.programsHeading || "Building Lives Through Sustainable Development";
  const subtitle = home.programsSubtitle || "Focused initiatives that turn skills into livelihoods, education into aspirations and healthcare into stronger, self-reliant communities.";

  return (
    <section id="programs" className="py-16 md:py-20 bg-white">
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h4 className="text-[#059669] uppercase tracking-widest text-sm font-semibold mb-3">{eyebrow}</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-[#059669] mb-4">{heading}</h2>
          <p className="text-gray-600 leading-relaxed">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((p) => (
            <Link to={p.slug ? `/projects/${p.slug}` : "/projects"} key={p.id} className="program-card shadow-lg bg-white block">
              <div className="aspect-[4/5] overflow-hidden">
                {p.image && <img src={p.image} alt={p.hashtag} className="w-full h-full object-cover" />}
              </div>
              <div className="p-5 text-center bg-white">
                <h4 className="text-lg font-bold text-gray-900">{p.hashtag}</h4>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">{p.description}</p>
              </div>
              <div className="program-overlay">
                <h4 className="text-2xl font-bold mb-2">{p.hashtag}</h4>
                <p className="text-sm">{p.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/projects" className="inline-block bg-[#059669] hover:bg-[#047857] transition-colors text-white px-8 py-3 rounded-full font-semibold shadow-md">
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
