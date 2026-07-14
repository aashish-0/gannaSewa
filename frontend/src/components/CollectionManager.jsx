import React, { useEffect, useState } from "react";
import { collection, onSnapshot, addDoc, updateDoc, deleteDoc, doc, serverTimestamp, orderBy, query } from "firebase/firestore";
import { db } from "../lib/firebase";
import { Plus, Pencil, Trash2, X, Loader2, Image as ImageIcon } from "lucide-react";
import { toast } from "../hooks/use-toast";

/**
 * Generic CRUD manager for any Firestore collection.
 * @param {string} title - Page title
 * @param {string} collectionName - Firestore collection name
 * @param {Array<{name, label, type, placeholder, options, rows}>} fields - Field definitions
 * @param {Array<string>} listColumns - Which fields to show in the list view
 */
const CollectionManager = ({ title, description, collectionName, fields, listColumns, imageField }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    let q;
    try { q = query(collection(db, collectionName), orderBy("createdAt", "desc")); }
    catch { q = collection(db, collectionName); }
    const unsub = onSnapshot(q, (snap) => {
      setItems(snap.docs.map((d) => ({ ...d.data(), id: d.id })));
      setLoading(false);
    }, () => setLoading(false));
    return unsub;
  }, [collectionName]);

  const openNew = () => {
    setEditing(null);
    const initial = {};
    fields.forEach((f) => (initial[f.name] = f.default ?? ""));
    setForm(initial);
    setModalOpen(true);
  };

  const openEdit = (item) => {
    setEditing(item);
    const filled = {};
    fields.forEach((f) => (filled[f.name] = item[f.name] ?? f.default ?? ""));
    setForm(filled);
    setModalOpen(true);
  };

  const closeModal = () => { setModalOpen(false); setEditing(null); setForm({}); };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const payload = { ...form };
      // Convert number fields
      fields.forEach((f) => {
        if (f.type === "number" && payload[f.name] !== "") payload[f.name] = Number(payload[f.name]);
      });
      if (editing) {
        await updateDoc(doc(db, collectionName, editing.id), { ...payload, updatedAt: serverTimestamp() });
        toast({ title: "Updated!", description: `${title} item updated successfully.` });
      } else {
        await addDoc(collection(db, collectionName), { ...payload, createdAt: serverTimestamp() });
        toast({ title: "Created!", description: `New ${title.toLowerCase()} item added.` });
      }
      closeModal();
    } catch (err) {
      toast({ title: "Save failed", description: err.message });
    } finally {
      setSaving(false);
    }
  };

  const onDelete = async (item) => {
    if (!window.confirm(`Delete this item? This cannot be undone.`)) return;
    try {
      await deleteDoc(doc(db, collectionName, item.id));
      toast({ title: "Deleted", description: "Item removed." });
    } catch (err) {
      toast({ title: "Delete failed", description: err.message });
    }
  };

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
        </div>
        <button onClick={openNew} className="inline-flex items-center gap-2 bg-[#059669] hover:bg-[#047857] text-white px-4 py-2 rounded-md text-sm font-medium">
          <Plus className="w-4 h-4" /> Add New
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-12 flex justify-center"><Loader2 className="w-6 h-6 animate-spin text-[#059669]" /></div>
        ) : items.length === 0 ? (
          <div className="p-12 text-center text-gray-500">
            <p>No items yet. Click "Add New" to create your first entry.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-left text-gray-600 text-xs uppercase tracking-wider">
                <tr>
                  {imageField && <th className="px-4 py-3 w-20">Image</th>}
                  {listColumns.map((col) => (
                    <th key={col} className="px-4 py-3">{fields.find((f) => f.name === col)?.label || col}</th>
                  ))}
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {items.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    {imageField && (
                      <td className="px-4 py-3">
                        {item[imageField] ? <img src={item[imageField]} alt="" className="w-12 h-12 rounded object-cover" /> : <div className="w-12 h-12 rounded bg-gray-100 flex items-center justify-center"><ImageIcon className="w-4 h-4 text-gray-400" /></div>}
                      </td>
                    )}
                    {listColumns.map((col) => (
                      <td key={col} className="px-4 py-3 text-gray-700 max-w-xs truncate">{String(item[col] ?? "").slice(0, 100)}</td>
                    ))}
                    <td className="px-4 py-3 text-right">
                      <button onClick={() => openEdit(item)} className="inline-flex items-center gap-1 text-gray-600 hover:text-[#059669] mr-3 text-sm">
                        <Pencil className="w-4 h-4" /> Edit
                      </button>
                      <button onClick={() => onDelete(item)} className="inline-flex items-center gap-1 text-gray-600 hover:text-red-600 text-sm">
                        <Trash2 className="w-4 h-4" /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-bold text-gray-900">{editing ? "Edit" : "Add New"} {title}</h3>
              <button onClick={closeModal} className="text-gray-400 hover:text-gray-600"><X className="w-5 h-5" /></button>
            </div>
            <form onSubmit={onSubmit} className="flex-1 overflow-y-auto">
              <div className="p-6 space-y-4">
                {fields.map((f) => (
                  <div key={f.name}>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      {f.label} {f.required && <span className="text-red-500">*</span>}
                    </label>
                    {f.type === "textarea" ? (
                      <textarea required={f.required} rows={f.rows || 4} value={form[f.name] || ""} onChange={(e) => setForm({ ...form, [f.name]: e.target.value })} placeholder={f.placeholder} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#ec008c] outline-none text-sm" />
                    ) : f.type === "select" ? (
                      <select required={f.required} value={form[f.name] || ""} onChange={(e) => setForm({ ...form, [f.name]: e.target.value })} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#ec008c] outline-none text-sm bg-white">
                        <option value="">Select...</option>
                        {f.options?.map((o) => <option key={o.value || o} value={o.value || o}>{o.label || o}</option>)}
                      </select>
                    ) : (
                      <input required={f.required} type={f.type || "text"} value={form[f.name] || ""} onChange={(e) => setForm({ ...form, [f.name]: e.target.value })} placeholder={f.placeholder} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#059669] outline-none text-sm" />
                    )}
                    {f.hint && <p className="text-xs text-gray-500 mt-1">{f.hint}</p>}
                    {f.name === imageField && form[f.name] && <img src={form[f.name]} alt="preview" className="mt-2 max-h-32 rounded" />}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-200 bg-gray-50">
                <button type="button" onClick={closeModal} className="px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-200">Cancel</button>
                <button type="submit" disabled={saving} className="px-4 py-2 rounded-md text-sm bg-[#059669] hover:bg-[#047857] text-white font-medium disabled:opacity-60 inline-flex items-center gap-2">
                  {saving && <Loader2 className="w-4 h-4 animate-spin" />}
                  {editing ? "Update" : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollectionManager;
