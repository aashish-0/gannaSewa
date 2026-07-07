import React from "react";
import CollectionManager from "../../components/CollectionManager";

const PressAdmin = () => (
  <CollectionManager
    title="Press Releases"
    description="Manage press mentions shown on the /media/press page."
    collectionName="press"
    listColumns={["date", "title", "source"]}
    fields={[
      { name: "date", label: "Date", required: true, placeholder: "e.g. March 10, 2025" },
      { name: "title", label: "Headline", type: "textarea", rows: 2, required: true },
      { name: "source", label: "Publication / Source", required: true, placeholder: "e.g. Times of India" },
      { name: "link", label: "External Link (optional)", type: "url" }
    ]}
  />
);

export default PressAdmin;
