import React from "react";
import CollectionManager from "../../components/CollectionManager";

const TeamAdmin = () => (
  <CollectionManager
    title="Team Members"
    description="Manage team members shown on the /about/team page."
    collectionName="team"
    imageField="image"
    listColumns={["name", "role"]}
    fields={[
      { name: "name", label: "Full Name", required: true, placeholder: "e.g. Anjali Verma" },
      { name: "role", label: "Role / Position", required: true, placeholder: "e.g. Founder & President" },
      { name: "image", label: "Photo", type: "image", folder: "team", aspect: "aspect-square", hint: "Square headshot works best." },
      { name: "bio", label: "Short Bio", type: "textarea", rows: 3, placeholder: "One or two sentences about the person." },
      { name: "order", label: "Display Order", type: "number", default: 0, hint: "Lower numbers appear first (0, 1, 2, ...)" }
    ]}
  />
);

export default TeamAdmin;
