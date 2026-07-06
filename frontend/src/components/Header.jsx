import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Heart, Menu, X } from "lucide-react";
import { navigation, brand } from "../data/mock";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileSub, setOpenMobileSub] = useState(null);
  const location = useLocation();

  const isActive = (href) => href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-[#ec008c] shadow-md">
      <div className="container-x flex items-center justify-between h-[70px] relative">
        <Link to="/" className="absolute left-6 -top-1 md:top-2 bg-white rounded-b-2xl px-5 pt-3 pb-4 shadow-lg z-10">
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                <path d="M30 20 Q50 5 70 20 Q65 40 50 45 Q35 40 30 20 Z" fill="#ec008c" />
                <path d="M50 45 Q65 55 60 75 Q50 85 40 75 Q35 55 50 45 Z" fill="#ec008c" />
                <circle cx="50" cy="15" r="5" fill="#ec008c" />
              </svg>
            </div>
            <div className="text-[#ec008c] font-bold text-[13px] leading-tight tracking-tight">Ganna Sewa</div>
            <div className="text-[#ec008c] font-bold text-[13px] leading-tight">Foundation</div>
            <div className="text-[#ec008c] text-[7px] mt-0.5 tracking-wider">{brand.tagline}</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 ml-auto mr-6" style={{ marginLeft: "180px" }}>
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                to={item.href}
                className={`px-4 py-6 text-white font-medium text-sm flex items-center gap-1 hover:text-white/80 transition-colors border-b-2 ${isActive(item.href) ? "border-white" : "border-transparent"} hover:border-white`}
              >
                {item.name}
                {item.children && <ChevronDown className="w-4 h-4" />}
              </Link>
              {item.children && (
                <div className="absolute top-full left-0 min-w-[220px] bg-white shadow-xl rounded-b-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {item.children.map((child) => (
                    <Link key={child.name} to={child.href} className="block px-5 py-2.5 text-gray-700 hover:bg-[#fce4f0] hover:text-[#ec008c] text-sm transition-colors">
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <Link to="/donate" className="hidden lg:flex items-center gap-2 bg-white text-[#ec008c] px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors shadow-md">
          Donate Now <Heart className="w-4 h-4 fill-[#ec008c]" />
        </Link>

        <button className="lg:hidden ml-auto text-white p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="toggle menu">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-[#ec008c] border-t border-white/20 max-h-[80vh] overflow-y-auto">
          <nav className="container-x py-4 flex flex-col">
            {navigation.map((item) => (
              <div key={item.name} className="border-b border-white/20">
                <div className="flex items-center justify-between py-3">
                  <Link to={item.href} onClick={() => setMobileOpen(false)} className="text-white font-medium flex-1">{item.name}</Link>
                  {item.children && (
                    <button onClick={() => setOpenMobileSub(openMobileSub === item.name ? null : item.name)} className="text-white p-1">
                      <ChevronDown className={`w-5 h-5 transition-transform ${openMobileSub === item.name ? "rotate-180" : ""}`} />
                    </button>
                  )}
                </div>
                {item.children && openMobileSub === item.name && (
                  <div className="pl-4 pb-2">
                    {item.children.map((c) => (
                      <Link key={c.name} to={c.href} onClick={() => setMobileOpen(false)} className="block py-2 text-white/80 text-sm">{c.name}</Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/donate" onClick={() => setMobileOpen(false)} className="mt-4 bg-white text-[#ec008c] py-2.5 rounded-full text-center font-semibold">Donate Now</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
