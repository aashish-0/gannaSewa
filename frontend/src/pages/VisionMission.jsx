import React from "react";
import PageBanner from "../components/PageBanner";
import { Eye, Compass, CheckCircle2 } from "lucide-react";

const VisionMission = () => {
  const values = [
    "Empower every girl child with quality education",
    "Ensure nutritional security for underprivileged families",
    "Advocate for women's economic independence",
    "Respond swiftly during natural disasters",
    "Build sustainable community partnerships",
    "Maintain complete transparency in operations"
  ];
  return (
    <>
      <PageBanner title="Vision & Mission" breadcrumbs={[{ label: "About Us" }, { label: "Vision & Mission" }]} />
      <section className="py-16 md:py-20">
        <div className="container-x grid md:grid-cols-2 gap-8">
          <div className="bg-[#faf6f2] rounded-2xl p-10 shadow-sm">
            <div className="w-14 h-14 rounded-full bg-[#059669] flex items-center justify-center mb-5">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-[#059669] mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed text-lg">A society where every girl child is educated, empowered, and equipped with equal opportunities to build the life she dreams of &mdash; regardless of her circumstances.</p>
          </div>
          <div className="bg-[#faf6f2] rounded-2xl p-10 shadow-sm">
            <div className="w-14 h-14 rounded-full bg-[#059669] flex items-center justify-center mb-5">
              <Compass className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-[#059669] mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed text-lg">To promote basic and life-skill education amongst underprivileged women and girl children in India by delivering focused programs in education, nutrition, health, and empowerment across communities that need them most.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-x">
          <h2 className="section-heading text-3xl md:text-4xl">Our Core Commitments</h2>
          <div className="grid md:grid-cols-2 gap-4 mt-8 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <div key={i} className="flex items-start gap-3 bg-[#faf6f2] rounded-lg p-5">
                <CheckCircle2 className="w-6 h-6 text-[#059669] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default VisionMission;
