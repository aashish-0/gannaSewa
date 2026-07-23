import React from "react";
import CollectionManager from "../../components/CollectionManager";

const HeroSlidesAdmin = () => (
  <CollectionManager
    title="Hero Slides"
    description="Manage the top banner slider on the home page."
    collectionName="heroSlides"
    imageField="image"
    listColumns={["alt"]}
    fields={[
      { name: "image", label: "Slide Image", type: "image", folder: "hero", required: true, hint: "Recommended: 1920x800 or wider. JPG/PNG/WebP up to 8 MB." },
      { name: "alt", label: "Alt Text / Internal Label", required: true, placeholder: "e.g. School Kit Drive" },
      { name: "title", label: "Overlay Title (optional)", placeholder: "Leave blank for image-only slide" },
      { name: "subtitle", label: "Overlay Subtitle (optional)", type: "textarea", rows: 2 },
      { name: "cta", label: "Button Text (optional)", placeholder: "e.g. Read more" },
      { name: "link", label: "Button Link (optional)", type: "url" },
      { name: "order", label: "Display Order", type: "number", default: 0 }
    ]}
  />
);

export default HeroSlidesAdmin;
