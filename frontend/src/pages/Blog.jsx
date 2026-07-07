import React from "react";
import PageBanner from "../components/PageBanner";
import { Calendar, User, ArrowRight } from "lucide-react";
import { useCollection } from "../hooks/useContent";
import { blogPosts as fallback } from "../data/mock";

const Blog = () => {
  const posts = useCollection("blog", fallback);
  return (
    <>
      <PageBanner title="Blog" breadcrumbs={[{ label: "Media" }, { label: "Blog" }]} />
      <section className="py-16">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Stories From The Ground</h2>
            <p className="text-gray-600">Reflections, insights, and updates from our team, volunteers, and beneficiaries.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((p) => (
              <article key={p.id} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-2xl transition-shadow">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {p.date}</span>
                    <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {p.author}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#ec008c] transition-colors line-clamp-2">{p.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{p.excerpt}</p>
                  <a href="#" className="inline-flex items-center gap-2 text-[#ec008c] font-semibold text-sm">Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
