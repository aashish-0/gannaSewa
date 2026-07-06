import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

const SiteLayout = () => (
  <div className="bg-white text-gray-800 min-h-screen flex flex-col">
    <TopBar />
    <Header />
    <main className="flex-1"><Outlet /></main>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default SiteLayout;
