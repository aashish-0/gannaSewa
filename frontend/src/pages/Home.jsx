import React from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import HeroSlider from "../components/HeroSlider";
import AboutSection from "../components/AboutSection";
import CausesSection from "../components/CausesSection";
import ProfileCTA from "../components/ProfileCTA";
import ProgramsSection from "../components/ProgramsSection";
import CelebrityPartners from "../components/CelebrityPartners";
import AlwaysOpenSection from "../components/AlwaysOpenSection";
import ImpactReport from "../components/ImpactReport";
import StoriesSection from "../components/StoriesSection";
import InstagramGallery from "../components/InstagramGallery";
import Accreditations from "../components/Accreditations";
import CorporatePartners from "../components/CorporatePartners";
import Footer from "../components/Footer";
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
      <CelebrityPartners />
      <AlwaysOpenSection />
      <ImpactReport />
      <StoriesSection />
      <InstagramGallery />
      <Accreditations />
      <CorporatePartners />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Home;
