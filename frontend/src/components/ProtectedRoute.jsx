import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Loader2 } from "lucide-react";

const ProtectedRoute = ({ requireSuperAdmin = false }) => {
  const { user, profile, loading, canAccessAdmin, isSuperAdmin } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#faf6f2]">
        <Loader2 className="w-8 h-8 animate-spin text-[#ec008c]" />
      </div>
    );
  }

  if (!user) return <Navigate to="/admin/login" replace />;
  if (!profile) return <Navigate to="/admin/login" replace />;
  if (!canAccessAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4 p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Access Denied</h2>
        <p className="text-gray-600">Your account ({profile.email}) doesn&rsquo;t have admin privileges. Contact a super admin to get access.</p>
      </div>
    );
  }
  if (requireSuperAdmin && !isSuperAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4 p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Super Admin Only</h2>
        <p className="text-gray-600">This page is restricted to super administrators.</p>
      </div>
    );
  }
  return <Outlet />;
};

export default ProtectedRoute;
