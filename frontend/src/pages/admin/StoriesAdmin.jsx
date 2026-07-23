import React from "react";
import CollectionManager from "../../components/CollectionManager";

const StoriesAdmin = () => (
  <CollectionManager
    title="Stories & Updates"
    description="Manage stories shown on the home page carousel."
    collectionName="stories"
    imageField="image"
    listColumns={["title"]}
    fields={[
      { name: "title", label: "Title", required: true },
      { name: "image", label: "Image", type: "image", folder: "stories" },
      { name: "description", label: "Description", type: "textarea", rows: 5, required: true },
      { name: "order", label: "Display Order", type: "number", default: 0 }
    ]}
  />
);

export default StoriesAdmin;
