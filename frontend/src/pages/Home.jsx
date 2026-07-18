import React from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import HeroSlider from "../components/HeroSlider";
import AboutSection from "../components/AboutSection";
import CausesSection from "../components/CausesSection";
import ProfileCTA from "../components/ProfileCTA";
import ProgramsSection from "../components/ProgramsSection";
import AlwaysOpenSection from "../components/AlwaysOpenSection";
import ImpactReport from "../components/ImpactReport";
import StoriesSection from "../components/StoriesSection";
import Footer from "../components/Footer";
// NOTE: CelebrityPartners, InstagramGallery, Accreditations, and CorporatePartners
// were removed from the homepage — the source proposal didn't include real
// celebrity endorsements, gallery photos, accreditation logos, or partner logos.
// Re-add these once Gana Sewa supplies real assets (see src/data/mock.js notes).
import WhatsAppButton from "../components/WhatsAppButton";

const Home = () => {
  return (
    <div className="bg-white text-gray-800">
      <TopBar />
      <Header />
      <HeroSlider />
      <AboutSection />
      <CausesSection />
      <ProfileCTA />
      <ProgramsSection />
      <AlwaysOpenSection />
      <ImpactReport />
      <StoriesSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Home;
