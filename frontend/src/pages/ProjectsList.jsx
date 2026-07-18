import React from "react";
import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import { ArrowRight, Heart } from "lucide-react";
import { useCollection } from "../hooks/useContent";
import { projectsData, donationTiers } from "../data/mock";

const fallbackProjects = Object.entries(projectsData).map(([slug, p], i) => ({
  id: slug,
  slug,
  title: p.title,
  subtitle: p.subtitle,
  image: p.image,
  order: i
}));

const ProjectsList = () => {
  const projects = useCollection("projects", fallbackProjects);

  return (
    <>
      <PageBanner title="Our Programs" breadcrumbs={[{ label: "Our Programs" }]} />

      {/* Programs grid */}
      <section className="py-16 md:py-20">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-[#059669] font-bold uppercase text-sm tracking-widest mb-3">Our Projects</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Programs That Change Lives</h2>
            <p className="text-gray-600">Focused, measurable initiatives designed to create sustainable impact across communities.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <Link key={p.id} to={`/projects/${p.slug}`} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-2xl transition-shadow flex flex-col">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#059669] transition-colors">{p.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-1">{p.subtitle}</p>
                  <span className="inline-flex items-center gap-2 text-[#059669] font-semibold text-sm">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Impact Section — donation tiers */}
      <section className="py-16 bg-[#faf6f2]">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h3 className="text-[#059669] font-bold uppercase text-sm tracking-widest mb-3">Featured Impact</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose the Change You Want to Create</h2>
            <p className="text-gray-600">Every donation, regardless of its size, creates a lasting impact in someone's life.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
            {donationTiers.map((t, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow p-6 text-center border-t-4 border-[#059669]">
                <div className="text-2xl md:text-3xl font-bold text-[#059669] mb-3">{t.amount}</div>
                <p className="text-sm text-gray-600 leading-relaxed">{t.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center mt-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Together, We Can Build a More Caring and Empowered India</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Education gives hope. Food provides dignity. Healthcare saves lives. Relief restores communities. Skills create prosperity. Be the reason someone gets a better future today.
            </p>
            <Link to="/donate" className="inline-flex items-center gap-2 bg-[#059669] hover:bg-[#047857] transition-colors text-white px-8 py-3 rounded-full font-semibold shadow-md">
              Donate Now <Heart className="w-4 h-4 fill-white" />
            </Link>
            <p className="text-xs md:text-sm text-gray-500 italic mt-4">
              ❤ Donations exempted under 80G of the Income Tax Act 1961
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsList;
