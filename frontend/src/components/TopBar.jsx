import React from "react";
import { Phone, Mail, ShoppingCart, Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const TopBar = () => {
  return (
    <div className="hidden md:block bg-white py-3 border-b border-gray-100">
      <div className="container-x flex items-center justify-between text-sm">
        <div className="flex items-center gap-6">
          <a href="tel:+919029001618" className="flex items-center gap-2 text-gray-700 hover:text-brand transition-colors">
            <span className="w-8 h-8 rounded-full border border-[#ec008c] flex items-center justify-center">
              <Phone className="w-4 h-4 text-[#ec008c]" />
            </span>
            <span className="font-medium">+91 90290 01618</span>
          </a>
          <a href="mailto:info@shikshaseva.org" className="flex items-center gap-2 text-gray-700 hover:text-brand transition-colors">
            <span className="w-8 h-8 rounded-full border border-[#ec008c] flex items-center justify-center">
              <Mail className="w-4 h-4 text-[#ec008c]" />
            </span>
            <span className="font-medium">info@shikshaseva.org</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-[#ec008c] hover:bg-[#c70074] transition-colors text-white px-5 py-2 rounded-full flex items-center gap-2 font-medium text-sm shadow-md">
            <ShoppingCart className="w-4 h-4" />
            Shop for a Cause
          </button>
          <div className="flex items-center gap-1 text-gray-700">
            <ShoppingCart className="w-5 h-5" />
            <span className="bg-[#ec008c] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">0</span>
          </div>
          <div className="flex items-center gap-2 ml-2">
            {[Facebook, Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-full bg-[#ec008c] hover:bg-[#c70074] transition-colors flex items-center justify-center text-white"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
