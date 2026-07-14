import React from "react";
import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import { Target, Heart, Users, Award } from "lucide-react";

const OurStory = () => {
  return (
    <>
      <PageBanner title="Our Story" breadcrumbs={[{ label: "About Us" }, { label: "Our Story" }]} />
      <section className="py-16 md:py-20">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-[#059669] font-bold uppercase text-sm tracking-widest mb-3">Since 2012</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">A Journey of Compassion and Change</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Gana Sewa Foundation was born from a simple yet powerful belief: every girl child deserves the right to education, health, and a life of dignity. Founded in 2012 by a small group of committed volunteers in Mumbai, we started with just 15 children in a Dharavi community center.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Today, over a decade later, we work across 8 states, serving hundreds of thousands of women and girls. What began as a weekend teaching initiative has grown into a full-fledged NGO with programs spanning education, nutrition, healthcare, women empowerment, and disaster relief.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our journey has been powered by ordinary people doing extraordinary things &mdash; teachers, volunteers, donors, celebrities, and corporate partners who believe that when you educate a girl, you transform a nation.
            </p>
          </div>
          <div>
            <img src="https://shikshaseva.org/wp-content/uploads/2021/09/Helping-Today-Helping-tomorrow-.jpg" alt="Our story" className="rounded-lg shadow-xl w-full" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#faf6f2]">
        <div className="container-x">
          <h2 className="section-heading text-3xl md:text-4xl">What Drives Us</h2>
          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {[
              { Icon: Heart, title: "Compassion", text: "We serve every beneficiary with dignity and respect." },
              { Icon: Target, title: "Purpose", text: "Clear focus on measurable, sustainable impact." },
              { Icon: Users, title: "Community", text: "Grassroots partnerships that create lasting change." },
              { Icon: Award, title: "Excellence", text: "Accountability and transparency in everything we do." }
            ].map((v, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-md text-center hover:shadow-xl transition-shadow">
                <v.Icon className="w-10 h-10 text-[#059669] mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#059669] text-center text-white">
        <div className="container-x">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Be Part of Our Next Chapter</h2>
          <p className="max-w-2xl mx-auto mb-6 text-white/90">Join thousands of supporters who are helping us build a more equitable future for girls in India.</p>
          <Link to="/donate" className="inline-block bg-white text-[#059669] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">Donate Now</Link>
        </div>
      </section>
    </>
  );
};

export default OurStory;
