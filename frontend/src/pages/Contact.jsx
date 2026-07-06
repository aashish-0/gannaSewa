import React, { useState } from "react";
import PageBanner from "../components/PageBanner";
import { brand } from "../data/mock";
import { MapPin, Phone, Mail, Send, Clock } from "lucide-react";
import { toast } from "../hooks/use-toast";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thanks for reaching out. We'll respond within 2 business days." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <PageBanner title="Contact Us" breadcrumbs={[{ label: "Contact" }]} />

      <section className="py-16">
        <div className="container-x grid md:grid-cols-3 gap-8">
          <div className="bg-[#ec008c] text-white rounded-lg p-6 shadow-md">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">Visit Us</h3>
            <p className="text-white/90 text-sm leading-relaxed">{brand.address}</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-[#ec008c]">
            <div className="w-12 h-12 rounded-full bg-[#fce4f0] flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-[#ec008c]" />
            </div>
            <h3 className="font-bold text-lg mb-2">Call Us</h3>
            <a href={`tel:${brand.phoneRaw}`} className="text-gray-700 hover:text-[#ec008c] text-sm">{brand.phone}</a>
            <p className="text-gray-500 text-xs mt-1">Mon &ndash; Sat, 10 AM &ndash; 6 PM</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-[#ec008c]">
            <div className="w-12 h-12 rounded-full bg-[#fce4f0] flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-[#ec008c]" />
            </div>
            <h3 className="font-bold text-lg mb-2">Email Us</h3>
            <a href={`mailto:${brand.email}`} className="text-gray-700 hover:text-[#ec008c] text-sm break-all">{brand.email}</a>
            <p className="text-gray-500 text-xs mt-1">Response within 48 hours</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#faf6f2]">
        <div className="container-x grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
            <p className="text-gray-600 mb-6">Have a question about our programs, want to partner, or need help? We'd love to hear from you.</p>
            <form onSubmit={onSubmit} className="space-y-4">
              <input required name="name" value={form.name} onChange={onChange} placeholder="Your Name" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#ec008c] focus:border-transparent outline-none bg-white" />
              <input required type="email" name="email" value={form.email} onChange={onChange} placeholder="Your Email" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#ec008c] outline-none bg-white" />
              <input required name="subject" value={form.subject} onChange={onChange} placeholder="Subject" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#ec008c] outline-none bg-white" />
              <textarea required rows={5} name="message" value={form.message} onChange={onChange} placeholder="Your Message" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#ec008c] outline-none bg-white" />
              <button type="submit" className="inline-flex items-center gap-2 bg-[#ec008c] hover:bg-[#c70074] transition-colors text-white px-8 py-3 rounded-full font-semibold shadow-md">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
          <div className="space-y-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <iframe title="Our location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15087.6!2d72.8347!3d19.1197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAndheri%20West!5e0!3m2!1sen!2sin!4v1700000000000" width="100%" height="350" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md flex items-start gap-3">
              <Clock className="w-6 h-6 text-[#ec008c] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-gray-900">Office Hours</h4>
                <p className="text-sm text-gray-600">Monday &ndash; Saturday: 10:00 AM &ndash; 6:00 PM</p>
                <p className="text-sm text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
