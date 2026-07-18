import React from "react";
import PageBanner from "../components/PageBanner";
import { Eye, Compass, CheckCircle2 } from "lucide-react";

const VisionMission = () => {
  const values = [
    "Mobilize resources from those with abundance, or who want to give back",
    "Deliver accessible, region-specific skill development and vocational training",
    "Advance women and child welfare, education, and literacy",
    "Protect the environment through afforestation and sustainable practices",
    "Support rural and urban development and minority welfare",
    "Build Self-Help Groups (SHGs) for lasting economic independence",
    "Respond to disasters with community-based preparedness and resilience",
    "Maintain complete transparency and accountability in our operations"
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
            <p className="text-gray-700 leading-relaxed text-lg">A future where dignified employment, economic independence, and social inclusion are within reach for every underserved community in India &mdash; regardless of geography, gender, or circumstance.</p>
          </div>
          <div className="bg-[#faf6f2] rounded-2xl p-10 shadow-sm">
            <div className="w-14 h-14 rounded-full bg-[#059669] flex items-center justify-center mb-5">
              <Compass className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-[#059669] mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed text-lg">Empowering India&rsquo;s underserved communities through accessible skill development and sustainable livelihood opportunities. We bridge the gap between potential and prosperity by mobilizing resources from those who have in abundance, or want to pay back to society, to create pathways to dignified employment, economic independence, and social inclusion for all.</p>
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
