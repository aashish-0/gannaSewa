import React from "react";
import CollectionManager from "../../components/CollectionManager";

const HomeProgramsAdmin = () => (
  <CollectionManager
    title="Home Programs Grid"
    description="Program cards on the homepage 'Our Programs' section. Each links to a project detail page."
    collectionName="homePrograms"
    imageField="image"
    listColumns={["hashtag", "slug"]}
    fields={[
      { name: "hashtag", label: "Program Title", required: true, placeholder: "e.g. Beti Padao, Samridhi Lao" },
      { name: "image", label: "Card Image", type: "image", folder: "homePrograms", required: true },
      { name: "description", label: "Short Description", type: "textarea", rows: 3, required: true },
      { name: "slug", label: "Links to Project Slug", required: true, placeholder: "e.g. beti-padao-samridhi-lao", hint: "Should match a slug in the Projects collection." },
      { name: "order", label: "Display Order", type: "number", default: 0 }
    ]}
  />
);

export default HomeProgramsAdmin;
