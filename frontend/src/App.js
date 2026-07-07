import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import VisionMission from "./pages/VisionMission";
import Team from "./pages/Team";
import Awards from "./pages/Awards";
import ProjectDetail from "./pages/ProjectDetail";
import ProjectsList from "./pages/ProjectsList";
import Volunteer from "./pages/Volunteer";
import Partner from "./pages/Partner";
import CorporateCSR from "./pages/CorporateCSR";
import Gallery from "./pages/Gallery";
import PressRelease from "./pages/PressRelease";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Donate from "./pages/Donate";
import SiteLayout from "./components/SiteLayout";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "./components/ui/toaster";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLayout from "./components/AdminLayout";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import HeroSlidesAdmin from "./pages/admin/HeroSlidesAdmin";
import SiteSettingsAdmin from "./pages/admin/SiteSettingsAdmin";
import AboutAdmin from "./pages/admin/AboutAdmin";
import ProjectsAdmin from "./pages/admin/ProjectsAdmin";
import ImpactStatsAdmin from "./pages/admin/ImpactStatsAdmin";
import TeamAdmin from "./pages/admin/TeamAdmin";
import BlogAdmin from "./pages/admin/BlogAdmin";
import StoriesAdmin from "./pages/admin/StoriesAdmin";
import PressAdmin from "./pages/admin/PressAdmin";
import AwardsAdmin from "./pages/admin/AwardsAdmin";
import CareersAdmin from "./pages/admin/CareersAdmin";
import GalleryAdmin from "./pages/admin/GalleryAdmin";
import PartnersAdmin from "./pages/admin/PartnersAdmin";
import CelebritiesAdmin from "./pages/admin/CelebritiesAdmin";
import UsersAdmin from "./pages/admin/UsersAdmin";
import SeedAdmin from "./pages/admin/SeedAdmin";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* Public site */}
            <Route path="/" element={<Home />} />
            <Route element={<SiteLayout />}>
              <Route path="/about/our-story" element={<OurStory />} />
              <Route path="/about/vision-mission" element={<VisionMission />} />
              <Route path="/about/team" element={<Team />} />
              <Route path="/about/awards" element={<Awards />} />
              <Route path="/projects" element={<ProjectsList />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="/get-involved/volunteer" element={<Volunteer />} />
              <Route path="/get-involved/partner" element={<Partner />} />
              <Route path="/get-involved/corporate-csr" element={<CorporateCSR />} />
              <Route path="/media/gallery" element={<Gallery />} />
              <Route path="/media/press" element={<PressRelease />} />
              <Route path="/media/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/donate" element={<Donate />} />
            </Route>

            {/* Admin */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="seed" element={<SeedAdmin />} />
                <Route path="hero-slides" element={<HeroSlidesAdmin />} />
                <Route path="settings" element={<SiteSettingsAdmin />} />
                <Route path="about" element={<AboutAdmin />} />
                <Route path="projects" element={<ProjectsAdmin />} />
                <Route path="stats" element={<ImpactStatsAdmin />} />
                <Route path="team" element={<TeamAdmin />} />
                <Route path="blog" element={<BlogAdmin />} />
                <Route path="stories" element={<StoriesAdmin />} />
                <Route path="press" element={<PressAdmin />} />
                <Route path="awards" element={<AwardsAdmin />} />
                <Route path="careers" element={<CareersAdmin />} />
                <Route path="gallery" element={<GalleryAdmin />} />
                <Route path="partners" element={<PartnersAdmin />} />
                <Route path="celebrities" element={<CelebritiesAdmin />} />
              </Route>
            </Route>
            <Route element={<ProtectedRoute requireSuperAdmin />}>
              <Route path="/admin/users" element={<AdminLayout />}>
                <Route index element={<UsersAdmin />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      <Toaster />
    </div>
  );
}

export default App;
