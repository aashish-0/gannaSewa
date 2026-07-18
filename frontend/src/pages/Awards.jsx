import React from "react";
import PageBanner from "../components/PageBanner";
import { Trophy } from "lucide-react";
import { useCollection } from "../hooks/useContent";
import { awards as fallback } from "../data/mock";

const Awards = () => {
  const items = useCollection("awards", fallback);
  return (
    <>
      <PageBanner title="Awards & Recognition" breadcrumbs={[{ label: "About Us" }, { label: "Awards" }]} />
      <section className="py-16 md:py-20">
        <div className="container-x max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Recognized for Impact</h2>
            <p className="text-gray-600">Awards are a reflection of the incredible work our teams, partners, and beneficiaries do every day.</p>
          </div>
          <div className="space-y-6">
            {items.length === 0 && (
              <p className="text-center text-gray-500 italic">No awards to display yet — check back soon.</p>
            )}
            {items.map((a) => (
              <div key={a.id} className="flex flex-col md:flex-row gap-6 items-start bg-white p-6 rounded-lg shadow-md border-l-4 border-[#059669] hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#fce4f0] flex items-center justify-center"><Trophy className="w-8 h-8 text-[#059669]" /></div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-[#059669] text-white text-xs font-bold px-3 py-1 rounded-full">{a.year}</span>
                    <h3 className="text-xl font-bold text-gray-900">{a.title}</h3>
                  </div>
                  <p className="text-sm text-[#059669] font-medium mb-2">by {a.org}</p>
                  <p className="text-gray-600 text-sm">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Awards;
