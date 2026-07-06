import React from "react";
import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import { Handshake, Users, TrendingUp, Award } from "lucide-react";

const Partner = () => {
  const benefits = [
    { Icon: Handshake, title: "Long-term Partnership", text: "Build lasting relationships with communities that need it most." },
    { Icon: TrendingUp, title: "Measurable Impact", text: "Detailed impact reports for every partnership." },
    { Icon: Users, title: "Employee Engagement", text: "Volunteering opportunities for your team members." },
    { Icon: Award, title: "Brand Recognition", text: "Co-branded initiatives and public recognition." }
  ];
  return (
    <>
      <PageBanner title="Partner With Us" breadcrumbs={[{ label: "Get Involved" }, { label: "Partner" }]} />
      <section className="py-16">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-[#ec008c] font-bold uppercase text-sm tracking-widest mb-3">Collaborate for Change</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Build Impactful Partnerships</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Whether you're a foundation, corporation, or fellow non-profit, we welcome partnerships that amplify impact and reach more girls and women.</p>
            <p className="text-gray-600 leading-relaxed mb-6">Our partnership models are flexible &mdash; from program sponsorship and cause marketing to skill-based collaborations and joint initiatives.</p>
            <Link to="/contact" className="inline-block bg-[#ec008c] hover:bg-[#c70074] text-white px-8 py-3 rounded-full font-semibold">Start a Conversation</Link>
          </div>
          <div>
            <img src="https://shikshaseva.org/wp-content/uploads/2021/09/story-3.jpg" alt="partnership" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#faf6f2]">
        <div className="container-x">
          <h2 className="section-heading text-3xl md:text-4xl">Why Partner With Us</h2>
          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-md text-center hover:shadow-xl transition-shadow">
                <b.Icon className="w-10 h-10 text-[#ec008c] mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">{b.title}</h3>
                <p className="text-sm text-gray-600">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Partner;
