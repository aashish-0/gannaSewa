import React from "react";
import CollectionManager from "../../components/CollectionManager";

const CelebritiesAdmin = () => (
  <CollectionManager
    title="Celebrity Partners"
    description="Manage celebrity partners shown on home page."
    collectionName="celebrities"
    imageField="image"
    listColumns={["name"]}
    fields={[
      { name: "name", label: "Name", required: true },
      { name: "image", label: "Photo URL", type: "url", required: true },
      { name: "order", label: "Display Order", type: "number", default: 0 }
    ]}
  />
);

export default CelebritiesAdmin;
