import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import { storage } from "./firebase";

/**
 * Upload a file to Firebase Storage under /assets/<folder>/<timestamp>-<name>.
 * Returns { url, path } once complete. Progress can be tracked via onProgress(0..100).
 */
export const uploadImage = (file, folder = "misc", onProgress) => {
  return new Promise((resolve, reject) => {
    if (!file) return reject(new Error("No file provided"));
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
    const path = `assets/${folder}/${Date.now()}-${safeName}`;
    const storageRef = ref(storage, path);
    const task = uploadBytesResumable(storageRef, file, { contentType: file.type });

    task.on(
      "state_changed",
      (snap) => {
        if (onProgress) onProgress(Math.round((snap.bytesTransferred / snap.totalBytes) * 100));
      },
      (err) => reject(err),
      async () => {
        const url = await getDownloadURL(task.snapshot.ref);
        resolve({ url, path });
      }
    );
  });
};

/** Delete a Storage object by its full path. Fails silently for legacy/external URLs. */
export const deleteImage = async (path) => {
  if (!path || !path.startsWith("assets/")) return;
  try {
    await deleteObject(ref(storage, path));
  } catch (e) {
    /* ignore missing or permission errors */
  }
};
