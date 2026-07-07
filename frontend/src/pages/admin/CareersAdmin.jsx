import React from "react";
import CollectionManager from "../../components/CollectionManager";

const CareersAdmin = () => (
  <CollectionManager
    title="Job Openings"
    description="Manage open positions on the /careers page."
    collectionName="careers"
    listColumns={["title", "location", "type"]}
    fields={[
      { name: "title", label: "Job Title", required: true },
      { name: "location", label: "Location", required: true, placeholder: "e.g. Mumbai" },
      { name: "type", label: "Employment Type", type: "select", required: true, options: ["Full-time", "Part-time", "Contract", "Internship", "Remote"] },
      { name: "desc", label: "Description", type: "textarea", rows: 4, required: true }
    ]}
  />
);

export default CareersAdmin;
