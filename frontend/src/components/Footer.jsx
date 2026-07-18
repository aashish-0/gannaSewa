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

      {/* Updated CTA Banner */}
      <div className="bg-[#059669] py-10 md:py-14 px-4">
        <div className="container-x flex flex-col items-center text-center gap-5 md:gap-6">

          {/* Top Heading - Scales from 18px (mobile) to 22px (tablet) to 28px (desktop) */}
          <h2 className="text-white text-[18px] md:text-[22px] lg:text-[28px] font-bold uppercase leading-snug flex flex-col xl:flex-row items-center justify-center gap-2 xl:gap-3">
            <span>ONE OPPORTUNITY CAN CHANGE A FAMILY</span>
            <span className="hidden xl:block font-light text-white/50 px-1">|</span>
            <span>ONE SKILL CAN CHANGE A LIFE</span>
            <span className="hidden xl:block font-light text-white/50 px-1">|</span>
            <span>ONE DONATION CAN CHANGE A COMMUNITY</span>
          </h2>

          {/* Middle Paragraphs - Scales from 16px (mobile) to 20px (tablet) to 24px (desktop) */}
          <div className="text-white text-[16px] md:text-[20px] lg:text-[24px] space-y-3 mt-2 px-2 md:px-0">
            <p className="font-normal">
              Join us in empowering women, supporting children and creating sustainable livelihoods for those who need it most.
            </p>
            <p className="font-bold">
              Be the reason someone gets a better future today!
            </p>
          </div>

          {/* Button & Tax Note */}
          <div className="flex flex-col items-center gap-3 mt-4 md:mt-6">

            {/* Button - Scales from 16px (mobile) to 18px (desktop), padding adjusts slightly */}
            <Link
              to="/donate"
              className="group bg-white text-[#059669] px-8 py-3 md:px-10 md:py-4 rounded-full font-bold text-[16px] md:text-[18px] shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-1"
            >
              DONATE NOW
              <Heart className="w-5 h-5 fill-[#059669] group-hover:scale-110 transition-transform duration-300" />
            </Link>

            {/* Tax Note - Scales from 12px (text-xs) to 14px (text-sm) */}
            <p className="text-white/90 text-xs md:text-sm italic font-medium mt-1">
              * Donations exempted under 80G of the Income Tax Act 1961
            </p>

          </div>

        </div>
      </div>

      {/* Rest of the original footer */}
      <div className="container-x py-14 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-[#059669] font-bold text-lg">GS</span>
            </div>
            <div>
              <div className="text-white font-bold">Ganna Sewa</div>
              <div className="text-white font-bold">Foundation</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed">
            Gana Sewa Foundation is a registered NGO working to Promote basic and life skill education amongst underprivileged Women & Girl children in India.
          </p>
          <div className="flex gap-2 mt-5">
            {socials.map(({ Icon, href }, i) => (
              <a key={i} href={href} className="w-9 h-9 rounded-full bg-[#059669] hover:bg-[#047857] transition-colors flex items-center justify-center text-white">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about/our-story" className="hover:text-[#059669] transition-colors">Our Story</Link></li>
            <li><Link to="/about/vision-mission" className="hover:text-[#059669] transition-colors">Vision & Mission</Link></li>
            <li><Link to="/about/team" className="hover:text-[#059669] transition-colors">Team</Link></li>
            <li><Link to="/media/gallery" className="hover:text-[#059669] transition-colors">Gallery</Link></li>
            <li><Link to="/media/blog" className="hover:text-[#059669] transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-[#059669] transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Our Programs</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/projects/kanya-shiksha-yojna" className="hover:text-[#059669] transition-colors">Kanya Shiksha Yojna</Link></li>
            <li><Link to="/projects/haq-se-poshan" className="hover:text-[#059669] transition-colors">Haq Se Poshan</Link></li>
            <li><Link to="/projects/swasth-bharath" className="hover:text-[#059669] transition-colors">Swasth Bharath</Link></li>
            <li><Link to="/projects/stree-astitva" className="hover:text-[#059669] transition-colors">Stree Astitva</Link></li>
            <li><Link to="/projects/disaster-relief" className="hover:text-[#059669] transition-colors">Disaster Relief</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#059669] mt-1 flex-shrink-0" />
              <span>{brand.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#059669]" />
              <a href={`tel:${brand.phoneRaw}`} className="hover:text-[#059669] transition-colors">{brand.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#059669]" />
              <a href={`mailto:${brand.email}`} className="hover:text-[#059669] transition-colors">{brand.email}</a>
            </li>
            <li className="flex items-center gap-2 mt-3 text-xs text-gray-400">
              <ShieldCheck className="w-4 h-4 text-green-500" /> Transactions are completely safe and secure
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container-x py-5 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <div>&copy; {new Date().getFullYear()} Gana Sewa Foundation. All rights reserved. | {brand.ngoReg}</div>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-[#059669]">Privacy Policy</a>
            <a href="#" className="hover:text-[#059669]">Terms & Conditions</a>
            <a href="#" className="hover:text-[#059669]">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;