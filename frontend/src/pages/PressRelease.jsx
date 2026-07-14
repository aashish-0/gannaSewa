import React from "react";
import PageBanner from "../components/PageBanner";
import { Newspaper, ExternalLink, Calendar } from "lucide-react";
import { useCollection } from "../hooks/useContent";
import { pressReleases as fallback } from "../data/mock";

const PressRelease = () => {
  const items = useCollection("press", fallback);
  return (
    <>
      <PageBanner title="Press Release" breadcrumbs={[{ label: "Media" }, { label: "Press" }]} />
      <section className="py-16">
        <div className="container-x max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">In The News</h2>
            <p className="text-gray-600">Media coverage of our programs, impact stories, and initiatives.</p>
          </div>
          <div className="space-y-4">
            {items.map((p) => (
              <a key={p.id} href={p.link || "#"} target={p.link ? "_blank" : undefined} rel="noreferrer" className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-[#059669] group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#fce4f0] flex items-center justify-center"><Newspaper className="w-6 h-6 text-[#059669]" /></div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                    <Calendar className="w-3.5 h-3.5" /> <span>{p.date}</span>
                    <span>&bull;</span>
                    <span className="text-[#059669] font-semibold">{p.source}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#059669] transition-colors">{p.title}</h3>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#059669] transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PressRelease;
