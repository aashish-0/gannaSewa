import React, { useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Loader2, Lock, Mail, Heart } from "lucide-react";
import { toast } from "../../hooks/use-toast";

const AdminLogin = () => {
  const { user, canAccessAdmin, login, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-[#faf6f2]"><Loader2 className="w-8 h-8 animate-spin text-[#ec008c]" /></div>;
  }
  if (user && canAccessAdmin) return <Navigate to="/admin" replace />;

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await login(email, password);
      toast({ title: "Welcome back!", description: "You are now logged in." });
      navigate("/admin");
    } catch (err) {
      toast({ title: "Login failed", description: err.message || "Invalid credentials" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#faf6f2] to-[#fce4f0] p-4">
      <div className="w-full max-w-md">
        <Link to="/" className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-full bg-[#ec008c] flex items-center justify-center text-white font-bold text-xl shadow-lg">GS</div>
          <h1 className="mt-3 text-2xl font-bold text-gray-900">Ganna Sewa Foundation</h1>
          <p className="text-sm text-gray-600">Admin Panel</p>
        </Link>

        <div className="bg-white rounded-xl shadow-xl p-8">
          <div className="text-center mb-6">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#fce4f0] flex items-center justify-center mb-3">
              <Lock className="w-6 h-6 text-[#ec008c]" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Sign In</h2>
            <p className="text-sm text-gray-500 mt-1">Enter your credentials to access the admin panel</p>
          </div>
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ec008c] focus:border-transparent outline-none" placeholder="you@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ec008c] focus:border-transparent outline-none" placeholder="••••••••" />
              </div>
            </div>
            <button type="submit" disabled={submitting} className="w-full bg-[#ec008c] hover:bg-[#c70074] disabled:opacity-60 transition-colors text-white py-2.5 rounded-md font-semibold flex items-center justify-center gap-2">
              {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Heart className="w-4 h-4 fill-white" />}
              {submitting ? "Signing in..." : "Sign In"}
            </button>
          </form>
          <p className="text-xs text-gray-500 text-center mt-6">Admin access only. Contact your super admin for an account.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
