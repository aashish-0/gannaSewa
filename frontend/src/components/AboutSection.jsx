import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container-x grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <h3 className="text-[#059669] font-bold uppercase text-sm tracking-widest mb-3">Who We Are</h3>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">Creating Opportunities Since 2008</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Gana Sewa is a registered non-profit organization committed to empowering women, youth and underserved communities through skill development, education, health awareness and livelihood promotion. Founded in Assam in 2008, we have worked with government agencies, development organizations and community stakeholders to help individuals acquire practical skills, secure employment and become financially independent.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            We believe that talent is everywhere, but opportunity is not. Our mission is to bridge that gap.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/about/our-story" className="bg-[#059669] hover:bg-[#047857] transition-colors text-white px-7 py-3 rounded-full font-semibold shadow-md">Read More</Link>
            <Link to="/donate" className="bg-[#059669] hover:bg-[#047857] transition-colors text-white px-7 py-3 rounded-full font-semibold shadow-md flex items-center gap-2">
              Donate for a Better Future <Heart className="w-4 h-4 fill-white" />
            </Link>
          </div>
        </div>
        <div className="relative">
          <img src="/images/about/office-front.jpg" alt="Gana Sewa community empowerment" className="rounded-lg shadow-xl w-full" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
