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
      { name: "image", label: "Slide Image URL", type: "url", required: true, hint: "Recommended: wide banner image (1920x800 or similar)" },
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
