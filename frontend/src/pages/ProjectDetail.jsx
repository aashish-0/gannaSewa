import React, { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import { projectsData } from "../data/mock";
import { Heart, ArrowRight } from "lucide-react";

const ProjectDetail = () => {
  const { slug } = useParams();

  // Fetch project directly from our local data file
  const project = projectsData[slug];

  // Scroll to top whenever the URL (slug) changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // If the URL slug is invalid or doesn't exist, redirect back to the projects page
  if (!project) return <Navigate to="/projects" replace />;

  // Get up to 3 other projects to display in the sidebar
  const others = Object.entries(projectsData)
    .filter(([s]) => s !== slug)
    .map(([s, p]) => ({ ...p, slug: s }))
    .slice(0, 3);

  return (
    <>
      <PageBanner title={project.title} breadcrumbs={[{ label: "Projects", href: "/projects" }, { label: project.title }]} />
      
      <section className="py-16 md:py-20">
        <div className="container-x grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <img src={project.image} alt={project.title} className="w-full rounded-lg shadow-lg mb-8" />
            
            <h2 className="text-2xl md:text-3xl font-bold text-[#059669] mb-4">{project.subtitle}</h2>
            
            {project.body.map((paragraph, i) => (
              <p key={i} className="text-gray-700 leading-relaxed mb-4">{paragraph}</p>
            ))}
            
            {project.stats && project.stats.length > 0 && (
              <div className="grid grid-cols-3 gap-4 mt-8">
                {project.stats.map((s, i) => (
                  <div key={i} className="bg-[#faf6f2] p-5 rounded-lg text-center border-b-2 border-[#059669]">
                    <div className="text-2xl md:text-3xl font-bold text-[#059669]">{s.value}</div>
                    <div className="text-xs md:text-sm text-gray-600 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <aside className="space-y-6">
            <div className="bg-[#059669] text-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-3">Support This Program</h3>
              <p className="text-sm text-white/90 mb-4">Your contribution helps us reach more beneficiaries every month.</p>
              <Link to="/donate" className="inline-flex items-center gap-2 bg-white text-[#059669] px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors">
                Donate Now <Heart className="w-4 h-4 fill-[#059669]" />
              </Link>
            </div>
            
            {others.length > 0 && (
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Other Programs</h3>
                <ul className="space-y-3">
                  {others.map((p) => (
                    <li key={p.slug}>
                      <Link to={`/projects/${p.slug}`} className="flex items-center justify-between text-sm text-gray-700 hover:text-[#059669] transition-colors">
                        <span>{p.title}</span> <ArrowRight className="w-4 h-4" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </section>
    </>
  );
};

export default ProjectDetail;