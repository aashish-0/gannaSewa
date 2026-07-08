import React from "react";
import CollectionManager from "../../components/CollectionManager";

const AwardsAdmin = () => (
  <CollectionManager
    title="Awards"
    description="Manage awards & recognitions shown on the /about/awards page."
    collectionName="awards"
    listColumns={["year", "title", "org"]}
    fields={[
      { name: "year", label: "Year", required: true, placeholder: "e.g. 2024" },
      { name: "title", label: "Award Title", required: true },
      { name: "org", label: "Awarded By", required: true },
      { name: "desc", label: "Description", type: "textarea", rows: 3 }
    ]}
  />
);

export default AwardsAdmin;
