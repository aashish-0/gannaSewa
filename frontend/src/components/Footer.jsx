import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Phone, Mail, MapPin, HandHeart, ShieldCheck } from "lucide-react";
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
      {/* Green CTA banner — matches Figma */}
      <div className="bg-[#059669] py-8 md:py-10 px-4">
        <div className="container-x flex flex-col items-center text-center gap-4 md:gap-5">
          {/* Three taglines separated by vertical dividers */}
          <h2 className="text-white font-extrabold uppercase leading-snug flex flex-col md:flex-row items-center justify-center md:divide-x md:divide-white/40 text-[15px] md:text-[16px] lg:text-[18px]">
            <span className="px-3 py-1 md:py-0 tracking-wide">ONE OPPORTUNITY CAN CHANGE A FAMILY</span>
            <span className="px-3 py-1 md:py-0 tracking-wide">ONE SKILL CAN CHANGE A LIFE</span>
            <span className="px-3 py-1 md:py-0 tracking-wide">ONE DONATION CAN CHANGE A COMMUNITY</span>
          </h2>

          {/* Description */}
          <div className="text-white max-w-4xl space-y-2">
            <p className="text-[14px] md:text-[15px] lg:text-[16px] font-normal leading-relaxed text-white/95">
              Join us in empowering women, supporting children and creating sustainable livelihoods for those who need it most.
            </p>
            <p className="text-[14px] md:text-[15px] lg:text-[16px] font-bold">
              Be the reason someone gets a better future today!
            </p>
          </div>

          {/* Donate Now button */}
          <div className="flex flex-col items-center gap-2 mt-2">
            <Link
              to="/donate"
              className="group inline-flex items-center gap-2 bg-white text-[#059669] px-8 py-2.5 md:px-10 md:py-3 rounded-full font-extrabold tracking-wide text-[14px] md:text-[15px] shadow-md hover:shadow-xl hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              DONATE NOW
              <HandHeart className="w-5 h-5 text-[#059669] group-hover:scale-110 transition-transform duration-300" strokeWidth={2.2} />
            </Link>
            <p className="text-white/90 text-[11px] md:text-xs italic font-medium mt-1">
              Donations exempted under 80G of the Income Tax Act 1961
            </p>
          </div>
        </div>
      </div>

      {/* Main footer body */}
      <div className="container-x py-14 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-[#059669] font-bold text-lg">GS</span>
            </div>
            <div>
              <div className="text-white font-bold">Gana Sewa</div>
              <div className="text-white font-bold">Foundation</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed">
            Skilling Women. Empowering Families. Transforming Communities. A registered non-profit empowering women, youth and underserved communities since 2008.
          </p>
          <p className="text-xs italic text-gray-400 mt-3">
            "When a woman learns, a family thrives. When a family thrives, a community prospers."
          </p>
          <div className="flex gap-2 mt-5">
            {socials.map(({ Icon, href }, i) => (
              <a key={i} href={href} aria-label="social link" className="w-9 h-9 rounded-full bg-[#059669] hover:bg-[#047857] transition-colors flex items-center justify-center text-white">
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
            <li><Link to="/projects/beti-padao-samridhi-lao" className="hover:text-[#059669] transition-colors">Beti Padao, Samridhi Lao</Link></li>
            <li><Link to="/projects/annapurna-seva" className="hover:text-[#059669] transition-colors">Annapurna Seva</Link></li>
            <li><Link to="/projects/jeevan-raksha-abhiyan" className="hover:text-[#059669] transition-colors">Jeevan Raksha Abhiyan</Link></li>
            <li><Link to="/projects/aapda-mitra" className="hover:text-[#059669] transition-colors">Aapda Mitra</Link></li>
            <li><Link to="/projects/saksham-parivar" className="hover:text-[#059669] transition-colors">Saksham Parivar Initiative</Link></li>
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
        <div className="container-x py-5 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-2">
          <div className="text-center md:text-left">&copy; {new Date().getFullYear()} Gana Sewa Foundation. All rights reserved. | {brand.ngoReg}</div>
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
