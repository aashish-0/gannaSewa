import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import { projectsData } from "../data/mock";
import { Heart, ArrowRight } from "lucide-react";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projectsData[slug];
  if (!project) return <Navigate to="/projects" replace />;

  const otherProjects = Object.entries(projectsData).filter(([s]) => s !== slug).slice(0, 3);

  return (
    <>
      <PageBanner title={project.title} breadcrumbs={[{ label: "Projects", href: "/projects" }, { label: project.title }]} />

      <section className="py-16 md:py-20">
        <div className="container-x grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <img src={project.image} alt={project.title} className="w-full rounded-lg shadow-lg mb-8" />
            <h2 className="text-2xl md:text-3xl font-bold text-[#ec008c] mb-4">{project.subtitle}</h2>
            {project.body.map((p, i) => (
              <p key={i} className="text-gray-700 leading-relaxed mb-4">{p}</p>
            ))}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {project.stats.map((s, i) => (
                <div key={i} className="bg-[#faf6f2] p-5 rounded-lg text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#ec008c]">{s.value}</div>
                  <div className="text-xs md:text-sm text-gray-600 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-[#ec008c] text-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-3">Support This Program</h3>
              <p className="text-sm text-white/90 mb-4">Your contribution helps us reach more beneficiaries every month.</p>
              <Link to="/donate" className="inline-flex items-center gap-2 bg-white text-[#ec008c] px-5 py-2.5 rounded-full font-semibold text-sm">
                Donate Now <Heart className="w-4 h-4 fill-[#ec008c]" />
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Other Programs</h3>
              <ul className="space-y-3">
                {otherProjects.map(([s, p]) => (
                  <li key={s}>
                    <Link to={`/projects/${s}`} className="flex items-center justify-between text-sm text-gray-700 hover:text-[#ec008c] transition-colors">
                      <span>{p.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default ProjectDetail;
