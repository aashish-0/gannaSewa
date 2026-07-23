import React from "react";
import DocumentEditor from "../../components/DocumentEditor";

const HomeContentAdmin = () => (
  <DocumentEditor
    title="Home Page Content"
    description="Hero copy, CTAs and section headings shown on the home page banner and support strip."
    docPath="content/home"
    sections={[
      {
        label: "Hero Banner Text",
        fields: [
          { name: "heroHeadline", label: "Headline", type: "textarea", full: true, rows: 2, hint: "e.g. Empowering Women. Transforming Families. Building Stronger Communities." },
          { name: "heroSubtitle", label: "Subtitle", type: "textarea", full: true, rows: 3 },
          { name: "heroTaxNote", label: "Tax note (optional)", full: true, hint: "Small line under the subtitle." },
          { name: "heroPrimaryLabel", label: "Primary Button Label", placeholder: "Donate Now" },
          { name: "heroPrimaryLink", label: "Primary Button Link", placeholder: "/donate" },
          { name: "heroSecondaryLabel", label: "Secondary Button Label", placeholder: "Sponsor a Woman" },
          { name: "heroSecondaryLink", label: "Secondary Button Link", placeholder: "/donate" },
          { name: "heroTertiaryLabel", label: "Tertiary Button Label", placeholder: "Partner With Us" },
          { name: "heroTertiaryLink", label: "Tertiary Button Link", placeholder: "/get-involved/partner" }
        ]
      },
      {
        label: "Causes / What We Do Heading",
        fields: [
          { name: "causesEyebrow", label: "Eyebrow", placeholder: "What We Do" },
          { name: "causesHeading", label: "Heading", full: true, placeholder: "Building Lives Through Sustainable Development" },
          { name: "causesSubtitle", label: "Subtitle", type: "textarea", full: true, rows: 2 }
        ]
      },
      {
        label: "Programs Section Heading",
        fields: [
          { name: "programsEyebrow", label: "Eyebrow", placeholder: "Our Programs" },
          { name: "programsHeading", label: "Heading", full: true, placeholder: "Building Lives Through Sustainable Development" },
          { name: "programsSubtitle", label: "Subtitle", type: "textarea", full: true, rows: 2 }
        ]
      },
      {
        label: "'A Small Donation' Support Strip",
        fields: [
          { name: "supportEyebrow", label: "Eyebrow", placeholder: "A Small Donation. A Big Change." },
          { name: "supportHeading", label: "Heading", type: "textarea", full: true, rows: 2, placeholder: "When you support one person, you transform an entire family." },
          { name: "supportDescription", label: "Description", type: "textarea", full: true, rows: 3 },
          { name: "supportBg", label: "Background Image", type: "image", folder: "hero", full: true, hint: "Wide banner image behind the support strip." }
        ]
      },
      {
        label: "Footer CTA Banner",
        fields: [
          { name: "footerTag1", label: "Tagline 1", placeholder: "ONE OPPORTUNITY CAN CHANGE A FAMILY" },
          { name: "footerTag2", label: "Tagline 2", placeholder: "ONE SKILL CAN CHANGE A LIFE" },
          { name: "footerTag3", label: "Tagline 3", placeholder: "ONE DONATION CAN CHANGE A COMMUNITY" },
          { name: "footerCtaDescription", label: "Description", type: "textarea", full: true, rows: 2 },
          { name: "footerCtaBold", label: "Bold sub-line", full: true, placeholder: "Be the reason someone gets a better future today!" },
          { name: "footerCtaButton", label: "CTA Button Label", placeholder: "DONATE NOW" },
          { name: "footerCtaLink", label: "CTA Button Link", placeholder: "/donate" }
        ]
      }
    ]}
  />
);

export default HomeContentAdmin;
