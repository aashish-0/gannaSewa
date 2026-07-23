import React from "react";
import DocumentEditor from "../../components/DocumentEditor";

const SiteSettingsAdmin = () => (
  <DocumentEditor
    title="Site Settings"
    description="Brand, contact, favicon, meta and social settings used across the site."
    docPath="content/settings"
    sections={[
      {
        label: "Site Identity",
        fields: [
          { name: "favicon", label: "Favicon", type: "image", folder: "site", aspect: "aspect-square", full: true, hint: "PNG/ICO/SVG, 32x32 or 64x64 recommended. Applies live to every page (browser tab icon)." },
          { name: "siteTitle", label: "Browser Tab Title", full: true, hint: "Shown in the browser tab and search results." },
          { name: "metaDescription", label: "Meta Description", type: "textarea", full: true, rows: 2, hint: "Shown by Google & social previews. Keep under ~160 chars." },
          { name: "themeColor", label: "Theme Color (hex)", hint: "e.g. #059669 — used by mobile browsers for the address bar." }
        ]
      },
      {
        label: "Homepage Hero (Banner)",
        fields: [
          { name: "heroBg", label: "Banner Background Image", type: "image", folder: "hero", full: true, hint: "1920×1000 recommended. Overrides the default homepage hero background." }
        ]
      },
      {
        label: "Brand & Contact",
        fields: [
          { name: "name", label: "Organization Name" },
          { name: "fullName", label: "Full Name" },
          { name: "tagline", label: "Tagline", hint: "e.g. SKILLING WOMEN. EMPOWERING FAMILIES." },
          { name: "phone", label: "Phone (display)" },
          { name: "phoneRaw", label: "Phone (raw, for tel: link)", hint: "e.g. +919876543210" },
          { name: "email", label: "Email", type: "email" },
          { name: "whatsapp", label: "WhatsApp Number", hint: "With country code, no + sign" },
          { name: "ngoReg", label: "NGO Registration No." },
          { name: "address", label: "Full Address", type: "textarea", full: true, rows: 2 },
          { name: "taxNote", label: "Tax exemption note", full: true, hint: "e.g. Donations exempted under 80G..." }
        ]
      },
      {
        label: "Social Media Links",
        fields: [
          { name: "facebook", label: "Facebook URL", type: "url" },
          { name: "instagram", label: "Instagram URL", type: "url" },
          { name: "twitter", label: "Twitter/X URL", type: "url" },
          { name: "linkedin", label: "LinkedIn URL", type: "url" },
          { name: "youtube", label: "YouTube URL", type: "url" }
        ]
      },
      {
        label: "UPI / Donation",
        fields: [
          { name: "upiId", label: "UPI ID", hint: "e.g. gannasewa@upi" },
          { name: "upiPayeeName", label: "Payee Name (as on UPI)" },
          { name: "upiQrImage", label: "UPI QR Image", type: "image", folder: "site", aspect: "aspect-square", full: true }
        ]
      }
    ]}
  />
);

export default SiteSettingsAdmin;
