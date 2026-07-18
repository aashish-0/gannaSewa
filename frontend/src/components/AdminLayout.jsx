import React, { useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { LayoutDashboard, Image, FileText, Users, Newspaper, Award, Briefcase, Camera, Building2, Star, Settings, LogOut, Menu, ExternalLink, Home, BookOpen, Heart } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const navGroups = [
  {
    label: "Overview",
    items: [
      { name: "Dashboard", to: "/admin", Icon: LayoutDashboard, end: true },
      { name: "View Site", to: "/", Icon: ExternalLink, external: true }
    ]
  },
  {
    label: "Content",
    items: [
      { name: "Hero Slides", to: "/admin/hero-slides", Icon: Image },
      { name: "Site Settings", to: "/admin/settings", Icon: Settings },
      { name: "About Page", to: "/admin/about", Icon: FileText },
      { name: "Projects", to: "/admin/projects", Icon: BookOpen },
      { name: "Impact Stats", to: "/admin/stats", Icon: Award }
    ]
  },
  {
    label: "Collections",
    items: [
      { name: "Team", to: "/admin/team", Icon: Users },
      { name: "Blog Posts", to: "/admin/blog", Icon: FileText },
      { name: "Stories", to: "/admin/stories", Icon: Heart },
      { name: "Press Release", to: "/admin/press", Icon: Newspaper },
      { name: "Awards", to: "/admin/awards", Icon: Award },
      { name: "Careers", to: "/admin/careers", Icon: Briefcase },
      { name: "Gallery", to: "/admin/gallery", Icon: Camera },
      { name: "Partners", to: "/admin/partners", Icon: Building2 },
      { name: "Celebrities", to: "/admin/celebrities", Icon: Star }
    ]
  },
  {
    label: "System",
    items: [
      { name: "Admin Users", to: "/admin/users", Icon: Users, superOnly: true }
    ]
  }
];

const AdminLayout = () => {
  const { profile, logout, isSuperAdmin } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-[#f7f7fa] flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 fixed lg:sticky top-0 left-0 h-screen w-64 bg-white border-r border-gray-200 z-40 flex flex-col transition-transform`}>
        <div className="p-5 border-b border-gray-200">
          <Link to="/admin" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#059669] flex items-center justify-center text-white font-bold">GS</div>
            <div>
              <div className="font-bold text-gray-900 text-sm">Gana Sewa</div>
              <div className="text-xs text-gray-500">Admin Panel</div>
            </div>
          </Link>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-6">
          {navGroups.map((g) => (
            <div key={g.label}>
              <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">{g.label}</div>
              <div className="space-y-0.5">
                {g.items.map((item) => {
                  if (item.superOnly && !isSuperAdmin) return null;
                  if (item.external) {
                    return (
                      <a key={item.name} href={item.to} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                        <item.Icon className="w-4 h-4" /> {item.name}
                      </a>
                    );
                  }
                  return (
                    <NavLink
                      key={item.name}
                      to={item.to}
                      end={item.end}
                      onClick={() => setSidebarOpen(false)}
                      className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${isActive ? "bg-[#059669] text-white font-medium" : "text-gray-700 hover:bg-gray-100"}`}
                    >
                      <item.Icon className="w-4 h-4" /> {item.name}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-[#f0fdf4] flex items-center justify-center text-[#059669] font-bold text-sm">
              {profile?.email?.[0]?.toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-900 truncate">{profile?.name}</div>
              <div className="text-xs text-gray-500 truncate">{profile?.role?.replace("_", " ")}</div>
            </div>
          </div>
          <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm bg-[#faf6f2] hover:bg-[#f0fdf4] text-gray-700 transition-colors">
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </aside>

      {sidebarOpen && <div className="fixed inset-0 bg-black/40 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* Main */}
      <div className="flex-1 min-w-0 flex flex-col">
        <header className="sticky top-0 z-20 bg-white border-b border-gray-200 flex items-center justify-between px-6 py-3">
          <button className="lg:hidden text-gray-700" onClick={() => setSidebarOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-4 ml-auto">
            <Link to="/" target="_blank" className="hidden sm:flex items-center gap-1 text-sm text-gray-600 hover:text-[#059669] transition-colors">
              <Home className="w-4 h-4" /> View Live Site
            </Link>
          </div>
        </header>
        <main className="flex-1 p-6 md:p-8"><Outlet /></main>
      </div>
    </div>
  );
};

export default AdminLayout;
