import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { Users, FileText, Camera, BookOpen, TrendingUp, ArrowRight } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const StatCard = ({ icon: Icon, label, value, color, to }) => (
  <Link to={to} className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#ec008c]/30 transition-all block">
    <div className="flex items-center justify-between">
      <div>
        <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">{label}</div>
        <div className="text-2xl font-bold text-gray-900 mt-1">{value}</div>
      </div>
      <div className={`w-11 h-11 rounded-lg flex items-center justify-center ${color}`}>
        <Icon className="w-5 h-5" />
      </div>
    </div>
  </Link>
);

const AdminDashboard = () => {
  const { profile } = useAuth();
  const [counts, setCounts] = useState({ team: 0, blog: 0, gallery: 0, projects: 0, careers: 0, stories: 0 });

  useEffect(() => {
    (async () => {
      try {
        const collections = ["team", "blog", "gallery", "projects", "careers", "stories"];
        const results = await Promise.all(collections.map((c) => getDocs(collection(db, c))));
        const obj = {};
        collections.forEach((c, i) => (obj[c] = results[i].size));
        setCounts(obj);
      } catch (e) { /* ignore */ }
    })();
  }, []);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, {profile?.name || "Admin"}</h1>
        <p className="text-gray-500 mt-1">Here&rsquo;s an overview of your site content.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <StatCard icon={Users} label="Team Members" value={counts.team} color="bg-blue-50 text-blue-600" to="/admin/team" />
        <StatCard icon={FileText} label="Blog Posts" value={counts.blog} color="bg-purple-50 text-purple-600" to="/admin/blog" />
        <StatCard icon={Camera} label="Gallery Items" value={counts.gallery} color="bg-orange-50 text-orange-600" to="/admin/gallery" />
        <StatCard icon={BookOpen} label="Projects" value={counts.projects} color="bg-green-50 text-green-600" to="/admin/projects" />
        <StatCard icon={FileText} label="Stories" value={counts.stories} color="bg-pink-50 text-[#ec008c]" to="/admin/stories" />
        <StatCard icon={TrendingUp} label="Job Openings" value={counts.careers} color="bg-teal-50 text-teal-600" to="/admin/careers" />
      </div>

      <div className="bg-gradient-to-r from-[#ec008c] to-[#f062ad] rounded-lg p-6 text-white">
        <h2 className="text-xl font-bold mb-2">Quick Setup</h2>
        <p className="text-white/90 mb-4 text-sm">If this is your first time, click below to populate initial content from the current live site.</p>
        <Link to="/admin/seed" className="inline-flex items-center gap-2 bg-white text-[#ec008c] px-5 py-2 rounded-md font-semibold text-sm hover:bg-gray-100">
          Seed Initial Content <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
