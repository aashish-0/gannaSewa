import React from "react";
import DocumentEditor from "../../components/DocumentEditor";

const SiteSettingsAdmin = () => (
  <DocumentEditor
    title="Site Settings"
    description="Brand info, contact details, and social media links used across the site."
    docPath="content/settings"
    sections={[
      {
        label: "Brand & Contact",
        fields: [
          { name: "name", label: "Organization Name" },
          { name: "fullName", label: "Full Name" },
          { name: "tagline", label: "Tagline", hint: "e.g. EMPOWERING GIRLS AND WOMEN" },
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
          { name: "upiQrImage", label: "UPI QR Image URL", type: "url", full: true }
        ]
      }
    ]}
  />
);

export default SiteSettingsAdmin;
