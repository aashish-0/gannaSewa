import React from "react";
import CollectionManager from "../../components/CollectionManager";

const ProjectsAdmin = () => (
  <CollectionManager
    title="Projects / Programs"
    description="Manage the 5 program details shown on /projects pages."
    collectionName="projects"
    imageField="image"
    listColumns={["title", "slug"]}
    fields={[
      { name: "slug", label: "URL Slug (unique)", required: true, placeholder: "e.g. kanya-shiksha-yojna", hint: "lowercase, hyphens only. Used in URL: /projects/{slug}" },
      { name: "title", label: "Project Title", required: true },
      { name: "subtitle", label: "Subtitle / Tagline", required: true },
      { name: "image", label: "Main Image URL", type: "url", required: true },
      { name: "body", label: "Description (each line = one paragraph)", type: "textarea", rows: 8, required: true, hint: "Separate paragraphs with a blank line." },
      { name: "stat1_label", label: "Stat 1 Label", placeholder: "e.g. Girls Supported" },
      { name: "stat1_value", label: "Stat 1 Value", placeholder: "e.g. 2,11,172+" },
      { name: "stat2_label", label: "Stat 2 Label" },
      { name: "stat2_value", label: "Stat 2 Value" },
      { name: "stat3_label", label: "Stat 3 Label" },
      { name: "stat3_value", label: "Stat 3 Value" },
      { name: "order", label: "Display Order", type: "number", default: 0 }
    ]}
  />
);

export default ProjectsAdmin;
