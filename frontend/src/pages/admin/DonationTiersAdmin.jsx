import React from "react";
import CollectionManager from "../../components/CollectionManager";

const DonationTiersAdmin = () => (
  <CollectionManager
    title="Donation Impact Tiers"
    description="Tiers shown in the 'Featured Impact' section on /projects."
    collectionName="donationTiers"
    listColumns={["amount", "description"]}
    fields={[
      { name: "amount", label: "Amount (with currency)", required: true, placeholder: "e.g. ₹5,000" },
      { name: "description", label: "Impact Description", type: "textarea", rows: 2, required: true, placeholder: "e.g. Supports educational assistance for a girl child." },
      { name: "order", label: "Display Order", type: "number", default: 0 }
    ]}
  />
);

export default DonationTiersAdmin;
