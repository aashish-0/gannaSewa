import React from "react";
import { Instagram } from "lucide-react";
import { instagramGallery } from "../data/mock";

const InstagramGallery = () => {
  const items = [...instagramGallery, ...instagramGallery];

  return (
    <section className="py-6 bg-white overflow-hidden">
      <div className="container-x mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-800 font-semibold">
          <Instagram className="w-5 h-5 text-[#ec008c]" />
          Follow us on Instagram
        </div>
        <a
          href="https://www.instagram.com/shiksha_seva_foundation_/"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-[#ec008c] font-semibold hover:underline"
        >
          View More
        </a>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="marquee-slow gap-2">
          {items.map((src, i) => (
            <a
              key={i}
              href="#"
              className="flex-shrink-0 w-40 h-40 md:w-52 md:h-52 relative group overflow-hidden"
            >
              <img
                src={src}
                alt="instagram post"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#ec008c]/0 group-hover:bg-[#ec008c]/60 transition-colors flex items-center justify-center">
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
