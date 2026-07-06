import React, { useState } from "react";
import PageBanner from "../components/PageBanner";
import { HandHeart, Send, Users, Calendar, MapPin } from "lucide-react";
import { toast } from "../hooks/use-toast";

const Volunteer = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", city: "", interests: "", message: "" });
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    toast({ title: "Thank you!", description: "We've received your volunteer application. Our team will reach out soon." });
    setForm({ name: "", email: "", phone: "", city: "", interests: "", message: "" });
  };

  const perks = [
    { Icon: HandHeart, title: "Make Real Impact", text: "Directly touch lives of underprivileged girls and women." },
    { Icon: Users, title: "Meet Like-minded People", text: "Join a passionate community of changemakers." },
    { Icon: Calendar, title: "Flexible Commitment", text: "Weekly, monthly, or one-time engagements." },
    { Icon: MapPin, title: "On-Ground & Remote", text: "Contribute from the field or your home." }
  ];

  return (
    <>
      <PageBanner title="Volunteer With Us" breadcrumbs={[{ label: "Get Involved" }, { label: "Volunteer" }]} />

      <section className="py-16">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Give Time, Change Lives</h2>
            <p className="text-gray-600">Every hour you volunteer creates a ripple effect that reaches families, communities, and future generations.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {perks.map((p, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-md text-center hover:shadow-xl transition-shadow">
                <p.Icon className="w-10 h-10 text-[#ec008c] mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#faf6f2]">
        <div className="container-x max-w-3xl">
          <h2 className="section-heading text-3xl">Apply to Volunteer</h2>
          <form onSubmit={onSubmit} className="bg-white rounded-lg shadow-md p-8 mt-8 space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input required name="name" value={form.name} onChange={onChange} className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:ring-2 focus:ring-[#ec008c] focus:border-transparent outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input required type="email" name="email" value={form.email} onChange={onChange} className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:ring-2 focus:ring-[#ec008c] focus:border-transparent outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                <input required name="phone" value={form.phone} onChange={onChange} className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:ring-2 focus:ring-[#ec008c] focus:border-transparent outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input name="city" value={form.city} onChange={onChange} className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:ring-2 focus:ring-[#ec008c] focus:border-transparent outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Areas of Interest</label>
              <select name="interests" value={form.interests} onChange={onChange} className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:ring-2 focus:ring-[#ec008c] outline-none bg-white">
                <option value="">Select an area</option>
                <option>Teaching / Tutoring</option>
                <option>Field Operations</option>
                <option>Fundraising</option>
                <option>Content & Social Media</option>
                <option>Medical / Healthcare</option>
                <option>Event Management</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tell us about yourself</label>
              <textarea rows={4} name="message" value={form.message} onChange={onChange} className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:ring-2 focus:ring-[#ec008c] outline-none" />
            </div>
            <button type="submit" className="inline-flex items-center gap-2 bg-[#ec008c] hover:bg-[#c70074] transition-colors text-white px-8 py-3 rounded-full font-semibold shadow-md">
              Submit Application <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Volunteer;
