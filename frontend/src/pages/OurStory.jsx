import React from "react";
import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import { Heart, Target, Users, Sparkles } from "lucide-react";

const OurStory = () => {
  return (
    <>
      <PageBanner title="About Gana Sewa" breadcrumbs={[{ label: "About Us" }, { label: "Our Story" }]} />

      {/* Intro — About Gana Sewa */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-[#059669] font-bold uppercase text-sm tracking-widest mb-3">About Gana Sewa</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Empowering Lives Since 2008</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Gana Sewa is a non-profit organization committed to creating opportunities for women, youth and underserved communities through skill development, livelihood promotion, education and health awareness initiatives. Established on 2nd February 2008 in Assam, Gana Sewa was founded with a simple yet powerful belief: every individual deserves an opportunity to learn, grow and live with dignity.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Over the years, we have worked with communities across India to bridge the gap between potential and opportunity. Through vocational training, entrepreneurship support, health awareness programs and community development initiatives, we help individuals build sustainable livelihoods and become active contributors to society.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, Gana Sewa works with women, youth, self-help groups, community organizations and institutional partners to create meaningful and lasting social impact.
            </p>
          </div>
          <div>
            <img src="/images/about/our-story.jpg" alt="Gana Sewa community empowerment" className="rounded-lg shadow-xl w-full" />
          </div>
        </div>
      </section>

      {/* Our Story — From Hope to Opportunity */}
      <section className="py-16 bg-[#faf6f2]">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-[#059669] font-bold uppercase text-sm tracking-widest mb-3">Our Story</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">From Hope to Opportunity</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-5 text-gray-700 leading-relaxed">
            <p>
              The journey of Gana Sewa began in 2008 with a vision to create a society where no individual is held back by poverty, lack of education or absence of opportunities. As we interacted with communities across villages and towns, one challenge became increasingly evident: thousands of capable women and young people possessed the determination to succeed, but lacked access to proper training, employment opportunities and guidance. We realized that sustainable change could only happen when people are empowered to become self-reliant. This belief shaped the foundation of Gana Sewa.
            </p>
            <p>
              What started as a small initiative has grown into a dedicated organization working across multiple states to support skill development, women's empowerment, education, health awareness and livelihood generation. Over the years, we have successfully implemented various skill development and community empowerment programs, helping beneficiaries acquire employable skills, gain confidence and create better futures for themselves and their families.
            </p>
            <p>
              Every individual trained, every woman empowered and every family supported reinforces our belief that social transformation is possible when opportunities are made accessible to those who need them most. Our story continues to be written every day through the lives we touch and the communities we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-16 bg-white">
        <div className="container-x">
          <h2 className="section-heading text-3xl md:text-4xl">Our Promise</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto">
            {[
              { Icon: Sparkles, title: "We build confidence", text: "We do not simply train individuals — we help them believe in themselves." },
              { Icon: Users, title: "We create self-reliance", text: "We do not merely support communities — we help them become self-reliant." },
              { Icon: Target, title: "We create lasting change", text: "We do not just create programs — we create opportunities for lasting change." }
            ].map((v, i) => (
              <div key={i} className="bg-[#faf6f2] rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                <v.Icon className="w-10 h-10 text-[#059669] mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-3 text-gray-900">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-lg italic text-[#059669] font-semibold max-w-2xl mx-auto">
            Gana Sewa — Skilling Women. Empowering Families. Transforming Communities.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#059669] text-center text-white">
        <div className="container-x">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Be Part of Our Next Chapter</h2>
          <p className="max-w-2xl mx-auto mb-6 text-white/90">Join thousands of supporters who are helping us build a more equitable future for women, youth and underserved communities across India.</p>
          <Link to="/donate" className="inline-flex items-center gap-2 bg-white text-[#059669] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
            Donate Now <Heart className="w-4 h-4 fill-[#059669]" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default OurStory;
