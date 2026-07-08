import React from "react";
import CollectionManager from "../../components/CollectionManager";

const GalleryAdmin = () => (
  <CollectionManager
    title="Gallery"
    description="Manage images shown in the Gallery and Instagram sections."
    collectionName="gallery"
    imageField="url"
    listColumns={["caption"]}
    fields={[
      { name: "url", label: "Image URL", type: "url", required: true, placeholder: "https://..." },
      { name: "caption", label: "Caption (optional)" },
      { name: "order", label: "Display Order", type: "number", default: 0 }
    ]}
  />
);

export default GalleryAdmin;
