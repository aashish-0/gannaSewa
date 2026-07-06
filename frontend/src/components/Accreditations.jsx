import React from "react";
import { accreditations } from "../data/mock";

const Accreditations = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-x grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#ec008c] mb-4">Accreditations</h2>
          <div className="w-16 h-0.5 bg-[#ec008c] mb-6" />
          <p className="text-gray-600 leading-relaxed max-w-md">
            We adhere to strict standards at all our facilities, as accredited by independent organisations.
            We are audited regularly by the following accreditation bodies, as well as some of the world&rsquo;s
            biggest brands, multiple times a year.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 items-center">
          {accreditations.map((a, i) => (
            <div key={i} className="bg-white p-4 rounded shadow-sm border border-gray-100 flex items-center justify-center h-28">
              <img src={a} alt="accreditation" className="max-h-full max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accreditations;
