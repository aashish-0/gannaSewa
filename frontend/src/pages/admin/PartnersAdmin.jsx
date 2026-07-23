import React from "react";
import CollectionManager from "../../components/CollectionManager";

const PartnersAdmin = () => (
  <CollectionManager
    title="Corporate Partners"
    description="Manage logo carousel of corporate partners."
    collectionName="partners"
    imageField="logo"
    listColumns={["name"]}
    fields={[
      { name: "name", label: "Partner Name", required: true },
      { name: "logo", label: "Logo", type: "image", folder: "partners", aspect: "aspect-video", required: true },
      { name: "link", label: "Website (optional)", type: "url" },
      { name: "order", label: "Display Order", type: "number", default: 0 }
    ]}
  />
);

export default PartnersAdmin;
