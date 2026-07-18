import React, { useState } from "react";
import { collection, addDoc, setDoc, doc, getDocs, serverTimestamp } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { Loader2, Database, CheckCircle2, AlertTriangle } from "lucide-react";
import { toast } from "../../hooks/use-toast";
import * as mock from "../../data/mock";

const SEED_TASKS = [
  { key: "settings", label: "Site Settings (brand, contact, socials, UPI)", type: "doc", path: "content/settings", data: () => ({ ...mock.brand, ...mock.social, upiId: "gannasewa@upi", upiPayeeName: mock.brand.fullName, upiQrImage: "" }) },
  { key: "about", label: "About Page Content", type: "doc", path: "content/about", data: () => ({
    heading: "Helping Today. Helping Tomorrow",
    description: "We nurture underprivileged girl child section of the society, help needy child, work upon women empowerment for a strong nation building, get the right medical aid, outreach to outskirts and make education available for literacy & organize special need based programs. We at Gana Sewa Foundation want to seek all round development and well being of a girl child, regardless of circumstances they belong too.",
    image: "https://shikshaseva.org/wp-content/uploads/2021/09/Helping-Today-Helping-tomorrow-.jpg",
    storyHeading: "A Journey of Compassion and Change",
    storyPara1: "Gana Sewa Foundation was born from a simple yet powerful belief: every girl child deserves the right to education, health, and a life of dignity. Founded in 2012 by a small group of committed volunteers in Mumbai, we started with just 15 children in a Dharavi community center.",
    storyPara2: "Today, over a decade later, we work across 8 states, serving hundreds of thousands of women and girls.",
    storyPara3: "Our journey has been powered by ordinary people doing extraordinary things.",
    vision: "A society where every girl child is educated, empowered, and equipped with equal opportunities to build the life she dreams of.",
    mission: "To promote basic and life-skill education amongst underprivileged women and girl children in India by delivering focused programs in education, nutrition, health, and empowerment."
  }) },
  { key: "heroSlides", label: "Hero Slider Images", type: "collection", collectionName: "heroSlides", items: () => mock.heroSlides.map((s, i) => ({ ...s, order: i })) },
  { key: "team", label: "Team Members", type: "collection", collectionName: "team", items: () => mock.teamMembers.map((m, i) => ({ ...m, order: i })) },
  { key: "blog", label: "Blog Posts", type: "collection", collectionName: "blog", items: () => mock.blogPosts.map((p, i) => ({ ...p, order: i })) },
  { key: "stories", label: "Stories & Updates", type: "collection", collectionName: "stories", items: () => mock.stories.map((s, i) => ({ ...s, order: i })) },
  { key: "press", label: "Press Releases", type: "collection", collectionName: "press", items: () => mock.pressReleases },
  { key: "awards", label: "Awards", type: "collection", collectionName: "awards", items: () => mock.awards },
  { key: "careers", label: "Job Openings", type: "collection", collectionName: "careers", items: () => mock.openPositions },
  { key: "gallery", label: "Gallery Images", type: "collection", collectionName: "gallery", items: () => mock.instagramGallery.map((url, i) => ({ url, caption: "", order: i })) },
  { key: "partners", label: "Corporate Partners", type: "collection", collectionName: "partners", items: () => mock.corporatePartners.map((logo, i) => ({ name: `Partner ${i + 1}`, logo, order: i })) },
  { key: "celebrities", label: "Celebrity Partners", type: "collection", collectionName: "celebrities", items: () => mock.celebrities.map((c, i) => ({ ...c, order: i })) },
  { key: "impactStats", label: "Impact Stats", type: "collection", collectionName: "impactStats", items: () => mock.impactStats.map((s, i) => ({ ...s, order: i })) },
  { key: "projects", label: "Projects (5 programs)", type: "collection", collectionName: "projects", items: () => Object.entries(mock.projectsData).map(([slug, p], i) => ({
    slug, title: p.title, subtitle: p.subtitle, image: p.image,
    body: p.body.join("\n\n"),
    stat1_label: p.stats[0]?.label, stat1_value: p.stats[0]?.value,
    stat2_label: p.stats[1]?.label, stat2_value: p.stats[1]?.value,
    stat3_label: p.stats[2]?.label, stat3_value: p.stats[2]?.value,
    order: i
  })) }
];

const SeedAdmin = () => {
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState({});
  const [errors, setErrors] = useState({});

  const runSeed = async () => {
    if (!window.confirm("This will populate Firestore with initial content from the existing site. Run only ONCE. Continue?")) return;
    setRunning(true);
    setDone({});
    setErrors({});
    for (const task of SEED_TASKS) {
      try {
        if (task.type === "doc") {
          const [col, id] = task.path.split("/");
          await setDoc(doc(db, col, id), { ...task.data(), updatedAt: serverTimestamp() }, { merge: true });
        } else {
          // Check if collection has data already
          const existing = await getDocs(collection(db, task.collectionName));
          if (existing.size > 0) {
            setDone((p) => ({ ...p, [task.key]: "skipped (already has data)" }));
            continue;
          }
          const items = task.items();
          for (const item of items) {
            await addDoc(collection(db, task.collectionName), { ...item, createdAt: serverTimestamp() });
          }
        }
        setDone((p) => ({ ...p, [task.key]: "ok" }));
      } catch (err) {
        setErrors((p) => ({ ...p, [task.key]: err.message }));
      }
    }
    setRunning(false);
    toast({ title: "Seed complete!", description: "Your admin panel is now populated. Explore the sidebar." });
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Seed Initial Content</h1>
        <p className="text-sm text-gray-500 mt-1">Populate your Firestore database with the current content shown on the live site. Run this ONCE on setup.</p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 flex gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-amber-900">
          <strong>Note:</strong> This will only add items to empty collections. If a collection already has data, it will be skipped (safe to re-run).
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-[#059669]" />
            <span className="font-semibold text-gray-900">Content to be seeded</span>
          </div>
          <button onClick={runSeed} disabled={running} className="inline-flex items-center gap-2 bg-[#059669] hover:bg-[#047857] text-white px-5 py-2 rounded-md text-sm font-medium disabled:opacity-60">
            {running ? <Loader2 className="w-4 h-4 animate-spin" /> : <Database className="w-4 h-4" />}
            {running ? "Seeding..." : "Run Seed"}
          </button>
        </div>
        <ul className="divide-y divide-gray-100">
          {SEED_TASKS.map((t) => (
            <li key={t.key} className="px-6 py-3 flex items-center justify-between text-sm">
              <span className="text-gray-700">{t.label}</span>
              <span>
                {errors[t.key] ? (
                  <span className="text-red-600 text-xs">Error: {errors[t.key]}</span>
                ) : done[t.key] ? (
                  <span className="inline-flex items-center gap-1 text-green-600 text-xs font-medium"><CheckCircle2 className="w-4 h-4" /> {done[t.key]}</span>
                ) : running ? (
                  <Loader2 className="w-4 h-4 animate-spin text-gray-400" />
                ) : (
                  <span className="text-gray-400 text-xs">Pending</span>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SeedAdmin;
