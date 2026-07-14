import React, { useEffect, useState } from "react";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import { Loader2, Save } from "lucide-react";
import { toast } from "../hooks/use-toast";

/**
 * Single-document editor for site settings/pages.
 * @param {string} docPath - Firestore path e.g. "content/settings"
 * @param {Array} sections - [{ label, fields: [{name, label, type, rows}] }]
 */
const DocumentEditor = ({ title, description, docPath, sections }) => {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    (async () => {
      const [col, id] = docPath.split("/");
      const ref = doc(db, col, id);
      const snap = await getDoc(ref);
      setForm(snap.exists() ? snap.data() : {});
      setLoading(false);
    })();
  }, [docPath]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const [col, id] = docPath.split("/");
      await setDoc(doc(db, col, id), { ...form, updatedAt: serverTimestamp() }, { merge: true });
      toast({ title: "Saved!", description: "Changes will appear on the site immediately." });
    } catch (err) {
      toast({ title: "Save failed", description: err.message });
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-12 flex justify-center"><Loader2 className="w-6 h-6 animate-spin text-[#ec008c]" /></div>;

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
      </div>
      <form onSubmit={onSubmit} className="space-y-6">
        {sections.map((sec, i) => (
          <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            {sec.label && <h2 className="text-lg font-semibold text-gray-900 mb-4">{sec.label}</h2>}
            <div className="grid md:grid-cols-2 gap-4">
              {sec.fields.map((f) => (
                <div key={f.name} className={f.full ? "md:col-span-2" : ""}>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">{f.label}</label>
                  {f.type === "textarea" ? (
                    <textarea rows={f.rows || 4} value={form[f.name] || ""} onChange={(e) => setForm({ ...form, [f.name]: e.target.value })} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#059669] outline-none text-sm" />
                  ) : (
                    <input type={f.type || "text"} value={form[f.name] || ""} onChange={(e) => setForm({ ...form, [f.name]: e.target.value })} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#059669] outline-none text-sm" />
                  )}
                  {f.hint && <p className="text-xs text-gray-500 mt-1">{f.hint}</p>}
                  {f.type === "url" && form[f.name] && <img src={form[f.name]} alt="preview" className="mt-2 max-h-24 rounded border" />}
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="sticky bottom-4 bg-white rounded-lg shadow-lg border border-gray-200 px-4 py-3 flex items-center justify-end">
          <button type="submit" disabled={saving} className="inline-flex items-center gap-2 bg-[#059669] hover:bg-[#047857] text-white px-6 py-2 rounded-md font-medium text-sm disabled:opacity-60">
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DocumentEditor;
