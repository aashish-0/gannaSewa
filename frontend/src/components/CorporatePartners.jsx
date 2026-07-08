import React from "react";
import { useCollection } from "../hooks/useContent";
import { corporatePartners as fallback } from "../data/mock";

const CorporatePartners = () => {
  const partners = useCollection("partners", fallback.map((logo, i) => ({ id: `f${i}`, name: `Partner ${i + 1}`, logo })));
  const items = [...partners, ...partners];

  return (
    <section className="py-16 md:py-20 bg-[#faf6f2]">
      <div className="container-x mb-10">
        <h2 className="section-heading text-3xl md:text-4xl">Corporate Partners</h2>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="marquee-track gap-8">
          {items.map((p, i) => (
            <div key={i} className="flex-shrink-0 w-40 md:w-52 h-24 flex items-center justify-center bg-white rounded-md shadow-sm px-4">
              <img src={p.logo} alt={p.name || "partner"} className="max-h-full max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporatePartners;
