import React from "react";
import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import { corporatePartners } from "../data/mock";
import { Briefcase, FileText, BarChart3, CheckCircle2 } from "lucide-react";

const CorporateCSR = () => {
  const features = [
    { Icon: Briefcase, title: "CSR Compliance", text: "Support Schedule VII compliant projects under Companies Act 2013." },
    { Icon: FileText, title: "Utilization Certificate", text: "Timely UCs and 80G receipts for all contributions." },
    { Icon: BarChart3, title: "Impact Dashboard", text: "Real-time reporting and monthly impact updates." },
    { Icon: CheckCircle2, title: "Third-party Audit", text: "Annual audits by leading independent auditors." }
  ];
  return (
    <>
      <PageBanner title="Corporate CSR" breadcrumbs={[{ label: "Get Involved" }, { label: "Corporate CSR" }]} />
      <section className="py-16">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Your CSR, Amplified</h2>
            <p className="text-gray-600">Deploy your CSR investments into vetted, scalable programs with proven outcomes. We handle execution, compliance, and reporting so you can focus on impact.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-md text-center hover:shadow-xl transition-shadow border-t-4 border-[#ec008c]">
                <f.Icon className="w-10 h-10 text-[#ec008c] mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#faf6f2]">
        <div className="container-x">
          <h2 className="section-heading text-3xl md:text-4xl">Some of Our Corporate Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-10 items-center">
            {corporatePartners.slice(0, 11).map((src, i) => (
              <div key={i} className="bg-white h-24 flex items-center justify-center rounded-md shadow-sm p-3">
                <img src={src} alt="partner" className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/contact" className="inline-block bg-[#ec008c] hover:bg-[#c70074] text-white px-8 py-3 rounded-full font-semibold">Discuss CSR Partnership</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CorporateCSR;
