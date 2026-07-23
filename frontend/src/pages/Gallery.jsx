import React, { useState, useRef } from "react";
import PageBanner from "../components/PageBanner";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "../data/galleryData";

// Define as a constant outside the component to prevent reallocation
const IMAGES_PER_PAGE = 12;

const Gallery = () => {
  const [preview, setPreview] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  
  // Reference to scroll back to the top of the grid on page change
  const galleryTopRef = useRef(null);

  // Pagination Logic
  const totalPages = Math.ceil(galleryImages.length / IMAGES_PER_PAGE);
  const indexOfLastImage = currentPage * IMAGES_PER_PAGE;
  const indexOfFirstImage = indexOfLastImage - IMAGES_PER_PAGE;
  
  // Only the images for the current page
  const currentImages = galleryImages.slice(indexOfFirstImage, indexOfLastImage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      // UX Enhancement: Smoothly scroll to the top of the gallery section
      galleryTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Fallback for broken image links
  const handleImageError = (e) => {
    e.target.src = "/assets/images/fallback-image.jpg"; 
  };

  return (
    <>
      <PageBanner title="Gallery" breadcrumbs={[{ label: "Media" }, { label: "Gallery" }]} />
      
      {/* Added ref here to act as the scroll anchor */}
      <section className="py-16 scroll-mt-20" ref={galleryTopRef}>
        <div className="container-x">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Moments from the Field</h2>
            <p className="text-gray-600">Photos from our programs, events, community outreach, and celebrations.</p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {currentImages.map((item) => (
              <button 
                key={item.id} 
                onClick={() => setPreview(item.url)} 
                className="aspect-square overflow-hidden rounded-lg shadow-sm group bg-gray-100 relative focus:outline-none focus:ring-2 focus:ring-[#059669] focus:ring-offset-2"
                aria-label={`View larger image of ${item.caption}`}
              >
                <img 
                  src={item.url} 
                  alt={item.alt || item.caption} 
                  loading="lazy" 
                  onError={handleImageError} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </button>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 md:gap-4 border-t border-gray-200 pt-8">
              
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center gap-1 px-4 py-2 rounded-full font-medium text-gray-600 hover:text-[#059669] hover:bg-green-50 disabled:opacity-50 disabled:pointer-events-none transition-colors"
                aria-label="Go to previous page"
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="hidden sm:inline">Previous</span>
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    aria-current={currentPage === page ? "page" : undefined}
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#059669] focus:ring-offset-1 ${
                      currentPage === page 
                        ? "bg-[#059669] text-white" 
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center gap-1 px-4 py-2 rounded-full font-medium text-gray-600 hover:text-[#059669] hover:bg-green-50 disabled:opacity-50 disabled:pointer-events-none transition-colors"
                aria-label="Go to next page"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-5 h-5" />
              </button>
              
            </div>
          )}

        </div>
      </section>

      {/* Lightbox Modal */}
      {preview && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm transition-opacity" 
          onClick={() => setPreview(null)}
          role="dialog"
          aria-modal="true"
        >
          <button 
            className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white focus:outline-none focus:ring-2 focus:ring-white" 
            onClick={() => setPreview(null)}
            aria-label="Close gallery preview"
          >
            <X className="w-6 h-6" />
          </button>
          
          <img 
            src={preview} 
            alt="Expanded gallery view" 
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain" 
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </>
  );
};

export default Gallery;