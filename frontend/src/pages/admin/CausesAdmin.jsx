import React from "react";
import CollectionManager from "../../components/CollectionManager";

const CausesAdmin = () => (
  <CollectionManager
    title="Causes (What We Do)"
    description="Icons + labels displayed in the 'What We Do' grid on the home page."
    collectionName="causes"
    imageField="icon"
    listColumns={["name", "link"]}
    fields={[
      { name: "name", label: "Cause Name", required: true, placeholder: "e.g. Skill Development" },
      { name: "icon", label: "Icon Image", type: "image", folder: "causes", aspect: "aspect-square", required: true, hint: "PNG with transparency preferred, 128×128 or larger." },
      { name: "link", label: "Link (URL or /path)", required: true, placeholder: "/projects/saksham-parivar" },
      { name: "order", label: "Display Order", type: "number", default: 0 }
    ]}
  />
);

export default CausesAdmin;
