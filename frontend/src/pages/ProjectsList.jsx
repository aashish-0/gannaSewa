import React from "react";
import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import { causes, projectsData } from "../data/mock";
import { ArrowRight } from "lucide-react";

const ProjectsList = () => {
  return (
    <>
      <PageBanner title="Our Projects" breadcrumbs={[{ label: "Projects" }]} />
      <section className="py-16 md:py-20">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Programs That Change Lives</h2>
            <p className="text-gray-600">Focused, measurable initiatives designed to create sustainable impact across communities.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {causes.map((c) => {
              const p = projectsData[c.slug];
              if (!p) return null;
              return (
                <Link key={c.id} to={c.link} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-2xl transition-shadow">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#ec008c] transition-colors">{p.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{p.subtitle}</p>
                    <span className="inline-flex items-center gap-2 text-[#ec008c] font-semibold text-sm">
                      Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsList;
