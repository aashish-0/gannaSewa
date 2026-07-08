import React from "react";
import CollectionManager from "../../components/CollectionManager";

const ImpactStatsAdmin = () => (
  <CollectionManager
    title="Impact Stats"
    description="Manage the animated numbers on the home page Impact Report section."
    collectionName="impactStats"
    listColumns={["label", "value", "suffix"]}
    fields={[
      { name: "label", label: "Label", required: true, placeholder: "e.g. YEARS OF FOUNDATION" },
      { name: "value", label: "Number", type: "number", required: true, placeholder: "e.g. 13" },
      { name: "suffix", label: "Suffix (e.g. +, %)", default: "+" },
      { name: "order", label: "Display Order", type: "number", default: 0 }
    ]}
  />
);

export default ImpactStatsAdmin;
