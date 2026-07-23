import React from "react";
import CollectionManager from "../../components/CollectionManager";

const BlogAdmin = () => (
  <CollectionManager
    title="Blog Posts"
    description="Manage articles shown on the /media/blog page."
    collectionName="blog"
    imageField="image"
    listColumns={["title", "author", "date"]}
    fields={[
      { name: "title", label: "Title", required: true },
      { name: "author", label: "Author", required: true, placeholder: "e.g. Anjali Verma" },
      { name: "date", label: "Publish Date", placeholder: "e.g. March 15, 2025" },
      { name: "image", label: "Cover Image", type: "image", folder: "blog" },
      { name: "excerpt", label: "Excerpt / Short Summary", type: "textarea", rows: 3, required: true },
      { name: "content", label: "Full Content (optional)", type: "textarea", rows: 8, placeholder: "Full blog content here..." }
    ]}
  />
);

export default BlogAdmin;
