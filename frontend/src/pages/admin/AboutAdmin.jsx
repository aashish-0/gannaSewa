import React from "react";
import DocumentEditor from "../../components/DocumentEditor";

const AboutAdmin = () => (
  <DocumentEditor
    title="About Page Content"
    description="Content shown on Home page 'About' section and /about pages."
    docPath="content/about"
    sections={[
      {
        label: "Home About Section",
        fields: [
          { name: "heading", label: "Heading", full: true, hint: "e.g. Creating Opportunities Since 2008" },
          { name: "eyebrow", label: "Eyebrow Text", hint: "Small uppercase label above the heading, e.g. Who We Are" },
          { name: "description", label: "Description Paragraph", type: "textarea", full: true, rows: 5 },
          { name: "description2", label: "Description Paragraph 2 (optional)", type: "textarea", full: true, rows: 3 },
          { name: "image", label: "Section Image", type: "image", folder: "about", full: true }
        ]
      },
      {
        label: "Our Story Page",
        fields: [
          { name: "storyHeading", label: "Story Heading", full: true },
          { name: "storyPara1", label: "Paragraph 1", type: "textarea", full: true, rows: 4 },
          { name: "storyPara2", label: "Paragraph 2", type: "textarea", full: true, rows: 4 },
          { name: "storyPara3", label: "Paragraph 3", type: "textarea", full: true, rows: 4 },
          { name: "storyImage", label: "Story Image", type: "image", folder: "about", full: true }
        ]
      },
      {
        label: "Vision & Mission Page",
        fields: [
          { name: "vision", label: "Vision Text", type: "textarea", full: true, rows: 4 },
          { name: "mission", label: "Mission Text", type: "textarea", full: true, rows: 4 }
        ]
      }
    ]}
  />
);

export default AboutAdmin;
