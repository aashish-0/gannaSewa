import React from "react";
import { FileText, Heart } from "lucide-react";

const ProfileCTA = () => {
  return (
    <section className="py-16 bg-gray-900 text-white text-center">
      <div className="container-x">
        <h3 className="uppercase text-sm tracking-widest text-gray-300 mb-3">Here you can get to know more about</h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Shiksha Seva Foundation Profile</h2>
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-[#ec008c] hover:bg-[#c70074] transition-colors text-white px-8 py-3 rounded-full font-semibold shadow-lg"
        >
          <FileText className="w-4 h-4" />
          Shiksha Seva Foundation Profile
          <Heart className="w-4 h-4 fill-white" />
        </a>
      </div>
    </section>
  );
};

export default ProfileCTA;
