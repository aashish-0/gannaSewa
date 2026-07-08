import React from "react";
import PageBanner from "../components/PageBanner";
import { Linkedin, Mail } from "lucide-react";
import { useCollection } from "../hooks/useContent";
import { teamMembers as fallback } from "../data/mock";

const Team = () => {
  const members = useCollection("team", fallback);
  return (
    <>
      <PageBanner title="Our Team" breadcrumbs={[{ label: "About Us" }, { label: "Team" }]} />
      <section className="py-16 md:py-20">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Meet the People Behind the Mission</h2>
            <p className="text-gray-600">Passionate leaders, dedicated field workers, and committed volunteers &mdash; our team is what makes Ganna Sewa possible.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((m) => (
              <div key={m.id} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-2xl transition-shadow">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900">{m.name}</h3>
                  <p className="text-[#ec008c] font-medium text-sm mb-3">{m.role}</p>
                  <p className="text-sm text-gray-600 mb-4">{m.bio}</p>
                  <div className="flex justify-center gap-2">
                    <a href="#" className="w-9 h-9 rounded-full bg-[#faf6f2] hover:bg-[#ec008c] hover:text-white transition-colors flex items-center justify-center text-[#ec008c]"><Linkedin className="w-4 h-4" /></a>
                    <a href="#" className="w-9 h-9 rounded-full bg-[#faf6f2] hover:bg-[#ec008c] hover:text-white transition-colors flex items-center justify-center text-[#ec008c]"><Mail className="w-4 h-4" /></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
