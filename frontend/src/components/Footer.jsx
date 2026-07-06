import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Phone, Mail, MapPin, Heart, ShieldCheck } from "lucide-react";
import { brand, social } from "../data/mock";

const Footer = () => {
  const socials = [
    { Icon: Facebook, href: social.facebook },
    { Icon: Instagram, href: social.instagram },
    { Icon: Twitter, href: social.twitter },
    { Icon: Linkedin, href: social.linkedin },
    { Icon: Youtube, href: social.youtube }
  ];

  return (
    <footer className="bg-[#1a1a1a] text-gray-300">
      <div className="bg-[#ec008c] py-10">
        <div className="container-x flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-1">Make a Difference Today</h3>
            <p className="text-white/90">{brand.taxNote}</p>
          </div>
          <Link to="/donate" className="bg-white text-[#ec008c] px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
            Donate Now <Heart className="w-4 h-4 fill-[#ec008c]" />
          </Link>
        </div>
      </div>

      <div className="container-x py-14 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-[#ec008c] font-bold text-lg">GS</span>
            </div>
            <div>
              <div className="text-white font-bold">Ganna Sewa</div>
              <div className="text-white font-bold">Foundation</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed">
            Ganna Sewa Foundation is a registered NGO working to Promote basic and life skill education amongst underprivileged Women & Girl children in India.
          </p>
          <div className="flex gap-2 mt-5">
            {socials.map(({ Icon, href }, i) => (
              <a key={i} href={href} className="w-9 h-9 rounded-full bg-[#ec008c] hover:bg-[#c70074] transition-colors flex items-center justify-center text-white">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about/our-story" className="hover:text-[#ec008c] transition-colors">Our Story</Link></li>
            <li><Link to="/about/vision-mission" className="hover:text-[#ec008c] transition-colors">Vision & Mission</Link></li>
            <li><Link to="/about/team" className="hover:text-[#ec008c] transition-colors">Team</Link></li>
            <li><Link to="/media/gallery" className="hover:text-[#ec008c] transition-colors">Gallery</Link></li>
            <li><Link to="/media/blog" className="hover:text-[#ec008c] transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-[#ec008c] transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Our Programs</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/projects/kanya-shiksha-yojna" className="hover:text-[#ec008c] transition-colors">Kanya Shiksha Yojna</Link></li>
            <li><Link to="/projects/haq-se-poshan" className="hover:text-[#ec008c] transition-colors">Haq Se Poshan</Link></li>
            <li><Link to="/projects/swasth-bharath" className="hover:text-[#ec008c] transition-colors">Swasth Bharath</Link></li>
            <li><Link to="/projects/stree-astitva" className="hover:text-[#ec008c] transition-colors">Stree Astitva</Link></li>
            <li><Link to="/projects/disaster-relief" className="hover:text-[#ec008c] transition-colors">Disaster Relief</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#ec008c] mt-1 flex-shrink-0" />
              <span>{brand.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#ec008c]" />
              <a href={`tel:${brand.phoneRaw}`} className="hover:text-[#ec008c] transition-colors">{brand.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#ec008c]" />
              <a href={`mailto:${brand.email}`} className="hover:text-[#ec008c] transition-colors">{brand.email}</a>
            </li>
            <li className="flex items-center gap-2 mt-3 text-xs text-gray-400">
              <ShieldCheck className="w-4 h-4 text-green-500" /> Transactions are completely safe and secure
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container-x py-5 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <div>&copy; {new Date().getFullYear()} Ganna Sewa Foundation. All rights reserved. | {brand.ngoReg}</div>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-[#ec008c]">Privacy Policy</a>
            <a href="#" className="hover:text-[#ec008c]">Terms & Conditions</a>
            <a href="#" className="hover:text-[#ec008c]">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
