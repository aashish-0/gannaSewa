import React, { useEffect, useState } from "react";
import { collection, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useAuth } from "../../context/AuthContext";
import { Loader2, UserPlus, Trash2, X, Shield } from "lucide-react";
import { toast } from "../../hooks/use-toast";

const ROLES = [
  { value: "super_admin", label: "Super Admin" },
  { value: "editor", label: "Editor" },
  { value: "viewer", label: "Viewer" }
];

const UsersAdmin = () => {
  const { profile, createUser } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "editor" });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "users"), (snap) => {
      setUsers(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      setLoading(false);
    });
    return unsub;
  }, []);

  const onCreate = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await createUser(form.email, form.password, form.role, form.name);
      toast({ title: "User created!", description: `${form.email} added as ${form.role}` });
      setModalOpen(false);
      setForm({ name: "", email: "", password: "", role: "editor" });
    } catch (err) {
      toast({ title: "Failed", description: err.message });
    } finally { setSaving(false); }
  };

  const changeRole = async (u, newRole) => {
    try {
      await updateDoc(doc(db, "users", u.id), { role: newRole });
      toast({ title: "Role updated", description: `${u.email} is now ${newRole}` });
    } catch (err) { toast({ title: "Failed", description: err.message }); }
  };

  const removeUser = async (u) => {
    if (u.id === profile.id) { toast({ title: "Can't remove yourself" }); return; }
    if (!window.confirm(`Remove ${u.email}? (Note: they'll be removed from users list but may still be able to log in - go to Firebase Console → Auth to fully delete.)`)) return;
    try {
      await deleteDoc(doc(db, "users", u.id));
      toast({ title: "Removed from users list" });
    } catch (err) { toast({ title: "Failed", description: err.message }); }
  };

  return (
    <div>
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Users</h1>
          <p className="text-sm text-gray-500 mt-1">Manage who can access this admin panel and their permissions.</p>
        </div>
        <button onClick={() => setModalOpen(true)} className="inline-flex items-center gap-2 bg-[#059669] hover:bg-[#047857] text-white px-4 py-2 rounded-md text-sm font-medium">
          <UserPlus className="w-4 h-4" /> Add User
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-12 flex justify-center"><Loader2 className="w-6 h-6 animate-spin text-[#059669]" /></div>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left text-gray-600 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {users.map((u) => (
                <tr key={u.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">{u.name}</td>
                  <td className="px-4 py-3 text-gray-700">{u.email}</td>
                  <td className="px-4 py-3">
                    <select value={u.role} onChange={(e) => changeRole(u, e.target.value)} disabled={u.id === profile.id} className="border border-gray-300 rounded px-2 py-1 text-sm bg-white disabled:opacity-60">
                      {ROLES.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)}
                    </select>
                    {u.id === profile.id && <span className="ml-2 text-xs text-gray-400">(you)</span>}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button onClick={() => removeUser(u)} disabled={u.id === profile.id} className="text-gray-600 hover:text-red-600 disabled:opacity-30">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
        <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-blue-900">
          <strong>Roles:</strong> <span className="font-medium">Super Admin</span> — full access (including managing users). <span className="font-medium">Editor</span> — can edit all content but not manage users. <span className="font-medium">Viewer</span> — no admin access.
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setModalOpen(false)}>
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h3 className="text-lg font-bold">Add Admin User</h3>
              <button onClick={() => setModalOpen(false)}><X className="w-5 h-5 text-gray-400" /></button>
            </div>
            <form onSubmit={onCreate} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#059669] text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input required type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#059669] text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input required type="password" minLength={6} value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#059669] text-sm" />
                <p className="text-xs text-gray-500 mt-1">Min 6 characters</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                <select value={form.role} onChange={(e) => setForm({...form, role: e.target.value})} className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none bg-white text-sm">
                  {ROLES.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)}
                </select>
              </div>
              <button type="submit" disabled={saving} className="w-full bg-[#059669] hover:bg-[#047857] text-white py-2.5 rounded-md font-medium disabled:opacity-60 flex items-center justify-center gap-2">
                {saving && <Loader2 className="w-4 h-4 animate-spin" />}
                Create User
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersAdmin;
