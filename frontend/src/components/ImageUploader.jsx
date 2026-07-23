import React, { useRef, useState } from "react";
import { Upload, Loader2, X, Image as ImageIcon, Link2 } from "lucide-react";
import { uploadImage } from "../lib/storage";
import { toast } from "../hooks/use-toast";

/**
 * Reusable image uploader.
 * - Uploads file directly to Firebase Storage (bucket: gana-seva.firebasestorage.app,
 *   folder /assets/<folder>/...). The resulting public download URL is emitted via `onChange`.
 * - Also supports pasting an external URL as a fallback.
 *
 * Props:
 *   value    - current image URL (string)
 *   onChange - (url: string) => void
 *   folder   - storage sub-folder ("hero", "team", "projects" ...)
 *   label    - visible label
 *   hint     - helper text
 *   required - marks field required
 *   aspect   - preview aspect class ("aspect-video", "aspect-square", ...)
 */
const ImageUploader = ({ value, onChange, folder = "misc", label, hint, required, aspect = "aspect-video" }) => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState("upload"); // "upload" | "url"
  const inputRef = useRef(null);

  const handleFile = async (file) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast({ title: "Invalid file", description: "Please select an image (PNG, JPG, SVG, WebP, ICO)." });
      return;
    }
    if (file.size > 8 * 1024 * 1024) {
      toast({ title: "File too large", description: "Please upload an image under 8 MB." });
      return;
    }
    setUploading(true);
    setProgress(0);
    try {
      const { url } = await uploadImage(file, folder, (p) => setProgress(p));
      onChange(url);
      toast({ title: "Uploaded", description: "Image uploaded successfully." });
    } catch (err) {
      toast({ title: "Upload failed", description: err.message || String(err) });
    } finally {
      setUploading(false);
      setProgress(0);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  const clear = () => onChange("");

  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      {/* Mode toggle */}
      <div className="flex gap-2 mb-2">
        <button
          type="button"
          onClick={() => setMode("upload")}
          data-testid="image-upload-mode-btn"
          className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md border transition-colors ${
            mode === "upload" ? "bg-[#059669] border-[#059669] text-white" : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
          }`}
        >
          <Upload className="w-3.5 h-3.5" /> Upload
        </button>
        <button
          type="button"
          onClick={() => setMode("url")}
          data-testid="image-url-mode-btn"
          className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md border transition-colors ${
            mode === "url" ? "bg-[#059669] border-[#059669] text-white" : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
          }`}
        >
          <Link2 className="w-3.5 h-3.5" /> Paste URL
        </button>
      </div>

      {mode === "upload" ? (
        <div>
          <input
            ref={inputRef}
            type="file"
            accept="image/png,image/jpeg,image/webp,image/svg+xml,image/x-icon,image/vnd.microsoft.icon,image/gif"
            onChange={(e) => handleFile(e.target.files?.[0])}
            className="hidden"
            data-testid="image-file-input"
          />
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            disabled={uploading}
            className="w-full border-2 border-dashed border-gray-300 hover:border-[#059669] hover:bg-[#f0fdf4] transition-colors rounded-md px-4 py-6 text-center text-sm text-gray-600 disabled:opacity-60"
            data-testid="image-upload-trigger"
          >
            {uploading ? (
              <span className="inline-flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" /> Uploading… {progress}%
              </span>
            ) : (
              <span className="inline-flex items-center gap-2">
                <Upload className="w-4 h-4" /> Click to upload an image
              </span>
            )}
          </button>
        </div>
      ) : (
        <input
          type="url"
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder="https://…"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#059669] outline-none text-sm"
          data-testid="image-url-input"
        />
      )}

      {value ? (
        <div className="mt-3 relative inline-block">
          <div className={`${aspect} w-48 rounded-md overflow-hidden bg-gray-100 border border-gray-200`}>
            <img src={value} alt="preview" className="w-full h-full object-cover" />
          </div>
          <button
            type="button"
            onClick={clear}
            className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border border-gray-300 shadow flex items-center justify-center text-gray-500 hover:text-red-600"
            aria-label="Remove image"
            data-testid="image-clear-btn"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ) : (
        <div className={`${aspect} w-48 rounded-md bg-gray-50 border border-dashed border-gray-200 flex items-center justify-center mt-3`}>
          <ImageIcon className="w-6 h-6 text-gray-300" />
        </div>
      )}

      {hint && <p className="text-xs text-gray-500 mt-2">{hint}</p>}
    </div>
  );
};

export default ImageUploader;
