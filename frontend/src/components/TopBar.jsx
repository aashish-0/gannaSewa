import React from "react";
import { Phone, Mail, ShoppingCart, Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { brand, social } from "../data/mock";

const TopBar = () => {
  const socials = [
    { Icon: Facebook, href: social.facebook },
    { Icon: Instagram, href: social.instagram },
    { Icon: Twitter, href: social.twitter },
    { Icon: Linkedin, href: social.linkedin },
    { Icon: Youtube, href: social.youtube }
  ];
  return (
    <div className="hidden md:block bg-white py-3 border-b border-gray-100">
      <div className="container-x flex items-center justify-between text-sm">
        <div className="flex items-center gap-6">
          <a href={`tel:${brand.phoneRaw}`} className="flex items-center gap-2 text-gray-700 hover:text-[#059669] transition-colors">
            <span className="w-8 h-8 rounded-full border border-[#059669] flex items-center justify-center">
              <Phone className="w-4 h-4 text-[#059669]" />
            </span>
            <span className="font-medium">{brand.phone}</span>
          </a>
          <a href={`mailto:${brand.email}`} className="flex items-center gap-2 text-gray-700 hover:text-[#059669] transition-colors">
            <span className="w-8 h-8 rounded-full border border-[#059669] flex items-center justify-center">
              <Mail className="w-4 h-4 text-[#059669]" />
            </span>
            <span className="font-medium">{brand.email}</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 ml-2">
            {socials.map(({ Icon, href }, i) => (
              <a key={i} href={href} className="w-8 h-8 rounded-full bg-[#059669] hover:bg-[#047857] transition-colors flex items-center justify-center text-white">
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
