import React from "react";
import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import { Target, Heart, Users, Award } from "lucide-react";

const OurStory = () => {
  return (
    <>
      <PageBanner title="Our Story" breadcrumbs={[{ label: "About Us" }, { label: "Our Story" }]} />
      <section className="py-16 md:py-20">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-[#059669] font-bold uppercase text-sm tracking-widest mb-3">Since 2008</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">A Journey Rooted in Assam, Reaching Across India</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Gana Sewa was registered as a society in 2008, with its registered office in Guwahati, Assam. What began as grassroots work in the state has grown into a track record of State and Central Government projects, averaging roughly &#8377;75 lakhs in annual turnover over the last three years.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Today, our work spans women and child welfare, skill development, education and literacy, environment and forests, rural and urban development, minority welfare, and self-help group (SHG) formation &mdash; with active project proposals reaching communities in Assam, Punjab, Gujarat, Madhya Pradesh, and Himachal Pradesh.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our current portfolio includes mobile health outreach, tree plantation and ecological restoration, vocational skill training for youth and women, community disaster preparedness, solar energy access for schools and hospitals, and dignified cremation infrastructure &mdash; each designed with the communities we serve, not just for them.
            </p>
          </div>
          <div>
           <img src="/images/about/our-story.jpg" alt="Gana Sewa skill training in session" className="rounded-lg shadow-xl w-full" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#faf6f2]">
        <div className="container-x">
          <h2 className="section-heading text-3xl md:text-4xl">What Drives Us</h2>
          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {[
              { Icon: Heart, title: "Compassion", text: "We serve every beneficiary with dignity and respect." },
              { Icon: Target, title: "Purpose", text: "Clear focus on measurable, sustainable impact." },
              { Icon: Users, title: "Community", text: "Grassroots partnerships that create lasting change." },
              { Icon: Award, title: "Excellence", text: "Accountability and transparency in everything we do." }
            ].map((v, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-md text-center hover:shadow-xl transition-shadow">
                <v.Icon className="w-10 h-10 text-[#059669] mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#059669] text-center text-white">
        <div className="container-x">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Be Part of Our Next Chapter</h2>
          <p className="max-w-2xl mx-auto mb-6 text-white/90">Join thousands of supporters who are helping us build a more equitable future for girls in India.</p>
          <Link to="/donate" className="inline-block bg-white text-[#059669] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">Donate Now</Link>
        </div>
      </section>
    </>
  );
};

export default OurStory;
