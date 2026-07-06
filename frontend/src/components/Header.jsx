import React, { useState } from "react";
import { ChevronDown, Heart, Menu, X } from "lucide-react";
import { navigation } from "../data/mock";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#ec008c] shadow-md">
      <div className="container-x flex items-center justify-between h-[70px] relative">
        {/* Logo */}
        <a href="#home" className="absolute left-6 -top-1 md:top-2 bg-white rounded-b-2xl px-5 pt-3 pb-4 shadow-lg">
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                <path d="M30 20 Q50 5 70 20 Q65 40 50 45 Q35 40 30 20 Z" fill="#ec008c" />
                <path d="M50 45 Q65 55 60 75 Q50 85 40 75 Q35 55 50 45 Z" fill="#ec008c" />
                <circle cx="50" cy="15" r="5" fill="#ec008c" />
              </svg>
            </div>
            <div className="text-[#ec008c] font-bold text-[13px] leading-tight tracking-tight">Shiksha Seva</div>
            <div className="text-[#ec008c] font-bold text-[13px] leading-tight">Foundation</div>
            <div className="text-[#ec008c] text-[7px] mt-0.5 tracking-wider">EMPOWERING GIRLS AND WOMEN</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 ml-auto mr-6" style={{ marginLeft: "180px" }}>
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              <a
                href={item.href}
                className="px-4 py-6 text-white font-medium text-sm flex items-center gap-1 hover:text-white/80 transition-colors border-b-2 border-transparent hover:border-white"
              >
                {item.name}
                {item.children && <ChevronDown className="w-4 h-4" />}
              </a>
              {item.children && (
                <div className="absolute top-full left-0 min-w-[220px] bg-white shadow-xl rounded-b-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {item.children.map((child) => (
                    <a
                      key={child.name}
                      href={child.href}
                      className="block px-5 py-2.5 text-gray-700 hover:bg-[#fce4f0] hover:text-[#ec008c] text-sm transition-colors"
                    >
                      {child.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Donate button */}
        <a
          href="#donate"
          className="hidden lg:flex items-center gap-2 bg-white text-[#ec008c] px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors shadow-md"
        >
          Donate Now
          <Heart className="w-4 h-4 fill-[#ec008c]" />
        </a>

        {/* Mobile toggler */}
        <button
          className="lg:hidden ml-auto text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#ec008c] border-t border-white/20">
          <nav className="container-x py-4 flex flex-col">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="py-3 border-b border-white/20 text-white font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a href="#donate" className="mt-4 bg-white text-[#ec008c] py-2.5 rounded-full text-center font-semibold">
              Donate Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
