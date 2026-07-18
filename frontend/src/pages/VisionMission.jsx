import React from "react";
import PageBanner from "../components/PageBanner";
import { Eye, Compass, CheckCircle2, Heart, Users, Shield, Sparkles, Award, Leaf } from "lucide-react";

const missionItems = [
  { title: "Skill Development", text: "Providing industry-relevant vocational training and employability skills that improve livelihood opportunities." },
  { title: "Women Empowerment", text: "Supporting women in achieving economic independence through skills, entrepreneurship and leadership development." },
  { title: "Education & Child Development", text: "Promoting education, life skills and opportunities that help children and youth realize their full potential." },
  { title: "Health & Wellness", text: "Creating awareness about health, nutrition, hygiene and preventive healthcare practices." },
  { title: "Livelihood Promotion", text: "Helping individuals establish sustainable sources of income through employment and self-employment opportunities." },
  { title: "Community Development", text: "Working with local communities to create resilient and self-sustaining social ecosystems." }
];

const coreValues = [
  { Icon: Sparkles, title: "Empowerment", text: "We believe lasting change happens when individuals are empowered to shape their own futures." },
  { Icon: Shield, title: "Integrity", text: "We uphold the highest standards of honesty, transparency and accountability." },
  { Icon: Users, title: "Inclusion", text: "We respect diversity and ensure equal opportunities for all." },
  { Icon: Heart, title: "Compassion", text: "We work with empathy and a deep understanding of community needs." },
  { Icon: Leaf, title: "Sustainability", text: "We focus on solutions that create long-term impact and self-reliance." },
  { Icon: Award, title: "Excellence", text: "We strive for quality and professionalism in every initiative we undertake." }
];

const VisionMission = () => {
  return (
    <>
      <PageBanner title="Vision & Mission" breadcrumbs={[{ label: "About Us" }, { label: "Vision & Mission" }]} />

      {/* Vision & Mission cards */}
      <section className="py-16 md:py-20">
        <div className="container-x grid md:grid-cols-2 gap-8">
          <div className="bg-[#faf6f2] rounded-2xl p-10 shadow-sm">
            <div className="w-14 h-14 rounded-full bg-[#059669] flex items-center justify-center mb-5">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-[#059669] mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              To create an inclusive and empowered society where every woman, youth and child has access to opportunities that enable them to lead healthy, productive and financially independent lives. We envision communities that are self-reliant, educated, skilled and capable of driving their own social and economic progress.
            </p>
          </div>
          <div className="bg-[#faf6f2] rounded-2xl p-10 shadow-sm">
            <div className="w-14 h-14 rounded-full bg-[#059669] flex items-center justify-center mb-5">
              <Compass className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-[#059669] mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Our mission is to empower individuals and communities through skill development, women empowerment, education and child development, health and wellness, livelihood promotion and community development.
            </p>
          </div>
        </div>
      </section>

      {/* Mission focus areas */}
      <section className="py-16 bg-white">
        <div className="container-x">
          <h2 className="section-heading text-3xl md:text-4xl">How We Deliver Our Mission</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 max-w-6xl mx-auto">
            {missionItems.map((m, i) => (
              <div key={i} className="flex items-start gap-4 bg-[#faf6f2] rounded-lg p-6 hover:shadow-md transition-shadow">
                <CheckCircle2 className="w-6 h-6 text-[#059669] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{m.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-[#faf6f2]">
        <div className="container-x">
          <h2 className="section-heading text-3xl md:text-4xl">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {coreValues.map((v, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-xl transition-shadow text-center">
                <v.Icon className="w-10 h-10 text-[#059669] mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2 text-gray-900">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default VisionMission;
