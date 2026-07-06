import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container-x grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <h3 className="text-[#ec008c] font-bold uppercase text-sm tracking-widest mb-3">Ganna Sewa Foundation</h3>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">Helping Today. Helping Tomorrow</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            We nurture underprivileged girl child section of the society, help needy child, work upon women
            empowerment for a strong nation building, get the right medical aid, outreach to outskirts and
            make education available for literacy & organize special need based program&rsquo;s&hellip;we at
            Ganna Sewa Foundation want to seek all round development and well being of a girl child,
            regardless of circumstances they belong too.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/about/our-story" className="bg-[#ec008c] hover:bg-[#c70074] transition-colors text-white px-7 py-3 rounded-full font-semibold shadow-md">Read More</Link>
            <Link to="/donate" className="bg-[#ec008c] hover:bg-[#c70074] transition-colors text-white px-7 py-3 rounded-full font-semibold shadow-md flex items-center gap-2">
              Donate for better Future <Heart className="w-4 h-4 fill-white" />
            </Link>
          </div>
        </div>
        <div className="relative">
          <img src="https://shikshaseva.org/wp-content/uploads/2021/09/Helping-Today-Helping-tomorrow-.jpg" alt="Helping Today. Helping Tomorrow" className="rounded-lg shadow-xl w-full" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
