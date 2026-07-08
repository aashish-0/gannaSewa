import { useEffect, useState } from "react";
import { collection, onSnapshot, doc, query, orderBy } from "firebase/firestore";
import { db } from "../lib/firebase";

/**
 * Live listener for a Firestore collection.
 * Returns items array; falls back to `fallback` if empty/loading.
 */
export const useCollection = (collectionName, fallback = [], orderField = "order") => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    let q;
    try { q = query(collection(db, collectionName), orderBy(orderField)); }
    catch { q = collection(db, collectionName); }
    const unsub = onSnapshot(q, (snap) => {
      const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setItems(list);
    }, () => setItems([]));
    return unsub;
  }, [collectionName, orderField]);

  if (items === null) return fallback; // still loading -> show fallback
  if (items.length === 0) return fallback; // no data yet -> show fallback
  return items;
};

/** Live listener for a single Firestore document. */
export const useDoc = (docPath, fallback = {}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const [col, id] = docPath.split("/");
    const unsub = onSnapshot(doc(db, col, id), (snap) => {
      setData(snap.exists() ? snap.data() : {});
    }, () => setData({}));
    return unsub;
  }, [docPath]);

  if (data === null) return fallback;
  if (Object.keys(data).length === 0) return fallback;
  return { ...fallback, ...data }; // merge so missing fields default to fallback
};
