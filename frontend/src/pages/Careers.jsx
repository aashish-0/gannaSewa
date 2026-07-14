import React from "react";
import PageBanner from "../components/PageBanner";
import { MapPin, Briefcase, Send } from "lucide-react";
import { toast } from "../hooks/use-toast";
import { useCollection } from "../hooks/useContent";
import { openPositions as fallback } from "../data/mock";

const Careers = () => {
  const jobs = useCollection("careers", fallback);
  const apply = (title) => toast({ title: `Application initiated for ${title}`, description: "Please share your CV at careers@gannasewa.in" });
  return (
    <>
      <PageBanner title="Careers" breadcrumbs={[{ label: "Careers" }]} />
      <section className="py-16">
        <div className="container-x max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Work With Purpose</h2>
            <p className="text-gray-600">Join a team that goes to work every day with the goal of changing lives. We're always looking for passionate, mission-driven people.</p>
          </div>
          <div className="space-y-5">
            {jobs.map((j) => (
              <div key={j.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-l-4 border-[#059669] hover:shadow-xl transition-shadow">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{j.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-2">
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-[#059669]" /> {j.location}</span>
                    <span className="flex items-center gap-1"><Briefcase className="w-4 h-4 text-[#059669]" /> {j.type}</span>
                  </div>
                  <p className="text-sm text-gray-600">{j.desc}</p>
                </div>
                <button onClick={() => apply(j.title)} className="flex-shrink-0 inline-flex items-center gap-2 bg-[#059669] hover:bg-[#047857] text-white px-6 py-2.5 rounded-full font-semibold text-sm">
                  Apply Now <Send className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-[#faf6f2] rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Don&rsquo;t see the right role?</h3>
            <p className="text-gray-600 mb-4">We're always keen to hear from talented people. Send us your CV.</p>
            <a href="mailto:careers@gannasewa.in" className="inline-block bg-[#059669] hover:bg-[#047857] text-white px-8 py-3 rounded-full font-semibold">careers@gannasewa.in</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
