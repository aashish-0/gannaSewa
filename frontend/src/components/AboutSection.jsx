import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container-x grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <h3 className="text-[#059669] font-bold uppercase text-sm tracking-widest mb-3">Gana Sewa</h3>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">Bridging Potential and Prosperity</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Gana Sewa is a registered society working since 2008 to empower India&rsquo;s underserved
            communities through accessible skill development and sustainable livelihood opportunities.
            We mobilize resources from those who want to give back, building pathways to dignified
            employment, economic independence, and social inclusion &mdash; across women and child welfare,
            skill development, education and literacy, environment and forests, rural and urban
            development, minority welfare, and self-help group formation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/about/our-story" className="bg-[#059669] hover:bg-[#047857] transition-colors text-white px-7 py-3 rounded-full font-semibold shadow-md">Read More</Link>
            <Link to="/donate" className="bg-[#059669] hover:bg-[#047857] transition-colors text-white px-7 py-3 rounded-full font-semibold shadow-md flex items-center gap-2">
              Donate for better Future <Heart className="w-4 h-4 fill-white" />
            </Link>
          </div>
        </div>
        <div className="relative">
          <img src="/images/about/office-front.jpg" alt="Gana Sewa skill development training" className="rounded-lg shadow-xl w-full" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
