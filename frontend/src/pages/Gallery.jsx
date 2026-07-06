import React, { useState } from "react";
import PageBanner from "../components/PageBanner";
import { instagramGallery } from "../data/mock";
import { X } from "lucide-react";

const Gallery = () => {
  const [preview, setPreview] = useState(null);
  const all = [...instagramGallery, ...instagramGallery.slice(0, 6)];
  return (
    <>
      <PageBanner title="Gallery" breadcrumbs={[{ label: "Media" }, { label: "Gallery" }]} />
      <section className="py-16">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Moments from the Field</h2>
            <p className="text-gray-600">Photos from our programs, events, community outreach, and celebrations.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {all.map((src, i) => (
              <button key={i} onClick={() => setPreview(src)} className="aspect-square overflow-hidden rounded-lg shadow-sm group">
                <img src={src} alt={`gallery ${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </button>
            ))}
          </div>
        </div>
      </section>
      {preview && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setPreview(null)}>
          <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center" onClick={() => setPreview(null)}>
            <X className="w-5 h-5" />
          </button>
          <img src={preview} alt="preview" className="max-w-full max-h-[90vh] rounded-lg" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
};

export default Gallery;
