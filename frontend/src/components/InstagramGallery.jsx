import React from "react";
import { Instagram } from "lucide-react";
import { useCollection } from "../hooks/useContent";
import { instagramGallery as fallback } from "../data/mock";

const InstagramGallery = () => {
  const gallery = useCollection("gallery", fallback.map((url, i) => ({ id: `f${i}`, url })));
  const items = [...gallery, ...gallery];

  return (
    <section className="py-6 bg-white overflow-hidden">
      <div className="container-x mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-800 font-semibold">
          <Instagram className="w-5 h-5 text-[#059669]" /> Follow us on Instagram
        </div>
        <a href="#" className="text-sm text-[#059669] font-semibold hover:underline">View More</a>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="marquee-slow gap-2">
          {items.map((g, i) => (
            <a key={i} href="#" className="flex-shrink-0 w-40 h-40 md:w-52 md:h-52 relative group overflow-hidden">
              <img src={g.url} alt={g.caption || "instagram"} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-[#059669]/0 group-hover:bg-[#059669]/60 transition-colors flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
