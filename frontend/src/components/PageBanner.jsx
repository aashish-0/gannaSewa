import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const PageBanner = ({ title, breadcrumbs = [] }) => {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-r from-[#059669] to-[#d1fae5] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 70% 70%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="container-x relative">
        <h1 className="text-3xl md:text-5xl font-bold mb-3">{title}</h1>
        <div className="flex items-center gap-2 text-sm text-white/90 flex-wrap">
          <Link to="/" className="flex items-center gap-1 hover:text-white"><Home className="w-4 h-4 text-white/90" /> Home</Link>
          {breadcrumbs.map((b, i) => (
            <React.Fragment key={i}>
              <ChevronRight className="w-4 h-4 text-white/90" />
              {b.href ? <Link to={b.href} className="hover:text-white">{b.label}</Link> : <span className="text-white">{b.label}</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
