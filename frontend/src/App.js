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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
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
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
