import React from "react";
import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import { Users, Briefcase, GraduationCap, HeartHandshake, Heart } from "lucide-react";
import { useCollection } from "../hooks/useContent";
import { teamMembers as fallback } from "../data/mock";

const leadershipIcons = {
  "Governing Body": Briefcase,
  "Program Team": Users,
  "Trainers & Mentors": GraduationCap,
  "Volunteers & Supporters": HeartHandshake
};

const Team = () => {
  const members = useCollection("team", fallback);

  return (
    <>
      <PageBanner title="Our Team" breadcrumbs={[{ label: "About Us" }, { label: "Team" }]} />

      {/* Team intro */}
      <section className="py-16 md:py-20">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-[#059669] font-bold uppercase text-sm tracking-widest mb-3">Our Team</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The People Behind Gana Sewa</h2>
            <p className="text-gray-600 leading-relaxed">
              Gana Sewa is driven by a dedicated team of social development professionals, trainers, volunteers, community leaders and advisors who share a common commitment to creating positive social change. Our team brings together expertise from skill development, education, health, community mobilization, project management and grassroots development.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Together, we work closely with beneficiaries, local communities, government agencies, corporate partners and development institutions to deliver impactful programs that improve lives. What unites our team is a shared belief that every individual deserves the opportunity to learn, grow and succeed.
            </p>
          </div>

          {/* Leadership pillars */}
          <h3 className="section-heading text-2xl md:text-3xl">Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {members.map((m) => {
              const Icon = leadershipIcons[m.name] || Users;
              return (
                <div key={m.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-shadow p-8 flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-[#059669] flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{m.name}</h4>
                    <p className="text-[#059669] font-medium text-sm mb-3">{m.role}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{m.bio}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join Our Mission */}
      <section className="py-16 bg-[#faf6f2]">
        <div className="container-x max-w-4xl mx-auto text-center">
          <h2 className="section-heading text-3xl md:text-4xl">Join Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            We believe meaningful change is possible when communities, institutions and individuals work together. Whether you are a volunteer, donor, corporate partner or development professional, we invite you to join us in our journey of empowering lives and transforming communities. Together, we can build a future where opportunity, dignity and hope reach every individual.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/get-involved/volunteer" className="bg-[#059669] hover:bg-[#047857] transition-colors text-white px-7 py-3 rounded-full font-semibold shadow-md">Volunteer With Us</Link>
            <Link to="/get-involved/partner" className="bg-white border-2 border-[#059669] hover:bg-[#059669] hover:text-white transition-colors text-[#059669] px-7 py-3 rounded-full font-semibold">Become a Partner</Link>
            <Link to="/donate" className="bg-[#059669] hover:bg-[#047857] transition-colors text-white px-7 py-3 rounded-full font-semibold shadow-md flex items-center gap-2">
              Donate Now <Heart className="w-4 h-4 fill-white" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
