// Content data for Gana Sewa website
// Sourced from the "Gana Sewa" organizational profile and CSR project proposal (EAPL / NIXI).
// NOTE: Fields marked "PLACEHOLDER" below are not covered by the source proposal and should
// be replaced with verified information before publishing (see accompanying content notes).

export const brand = {
  name: "Gana Sewa",
  fullName: "Gana Sewa",
  tagline: "SKILLING COMMUNITIES. BUILDING LIVELIHOODS.",
  hashtag: "#HaqBantaHai",
  phone: "+91 81469 26643",
  phoneRaw: "+918146926643",
  email: "ganasewa.india@gmail.com",
  whatsapp: "918146926643",
  address: "Gana Sewa, Guwahati, Assam, India",
  ngoReg: "Registered under the Societies Registration Act, 1860 | Reg. No. RS/DBR/250/G/05 OF 2008 | UBIN: 618/10193/AABAG4599A/11/2024",
  taxNote: "Registered society since 2008 | Average annual turnover ~₹75 lakhs from State/Central Government projects",
  establishedYear: 2008,
  projectManager: "Sachin Bhardwaj"
};

export const social = {
  facebook: "#",
  instagram: "#",
  twitter: "#",
  linkedin: "#",
  youtube: "#"
};

// PLACEHOLDER: Hero images are generic stock/placeholder art. Replace with real
// photos of Gana Sewa's own project sites (Baddi, Assam, Punjab, Gujarat, MP) once available.
export const heroSlides = [
  { id: 1, image: "/images/hero/certificate-ceremony.jpg", alt: "Trainees receiving skill certificates at a Gana Sewa PMKVY centre", title: "Skilling Our Communities", subtitle: "Celebrating trainees at our PMKVY skill development centres", cta: "Explore Projects" },
  { id: 2, image: "/images/hero/tree-plantation.jpg", alt: "Volunteers holding saplings at a Gana Sewa plantation drive", title: "Pran Vayu", subtitle: "Planting native trees for a greener, healthier environment", cta: "Read more" },
  { id: 3, image: "/images/hero/yoga-wellness.jpg", alt: "Schoolchildren in a yoga and wellness session", title: "Swasthya Saathi", subtitle: "Wellness and health outreach for our communities", cta: "Read more" },
  { id: 4, image: "/images/hero/flood-relief.jpg", alt: "Gana Sewa volunteers distributing relief supplies during the Assam floods", title: "Disaster Relief", subtitle: "Standing with communities during the Assam floods", cta: "Read more" },
  { id: 5, image: "/images/hero/mobilization.jpg", alt: "Gana Sewa team members engaging with the community during outreach", title: "Community Mobilization", subtitle: "Reaching every doorstep to bring our programs to those who need them", cta: "Read more" }
];

export const causes = [
  { id: 1, name: "Health & Wellbeing", icon: "https://cdn-icons-png.flaticon.com/512/2966/2966327.png", link: "/projects/swasthya-saathi", slug: "swasthya-saathi" },
  { id: 2, name: "Environment", icon: "https://cdn-icons-png.flaticon.com/512/489/489969.png", link: "/projects/pran-vayu", slug: "pran-vayu" },
  { id: 3, name: "Skill Development", icon: "https://cdn-icons-png.flaticon.com/512/2942/2942909.png", link: "/projects/udyamita-saathi", slug: "udyamita-saathi" },
  { id: 4, name: "Women Empowerment", icon: "https://cdn-icons-png.flaticon.com/512/2065/2065169.png", link: "/projects/she-stitches-she-soars", slug: "she-stitches-she-soars" },
  { id: 5, name: "Disaster Management", icon: "https://cdn-icons-png.flaticon.com/512/1163/1163694.png", link: "/projects/suraksha-saathi", slug: "suraksha-saathi" },
  { id: 6, name: "Solar Energy", icon: "https://cdn-icons-png.flaticon.com/512/942/942799.png", link: "/projects/surya-saathi", slug: "surya-saathi" },
  { id: 7, name: "Dignified Last Rites", icon: "https://cdn-icons-png.flaticon.com/512/2913/2913465.png", link: "/projects/mukti-dham", slug: "mukti-dham" }
];

export const programs = [
  { id: 1, hashtag: "#SwasthyaSaathi", description: "Mobile health clinics and screenings bringing preventive healthcare to remote communities in Himachal Pradesh and Assam.", image: "/images/projects/swasthya-saathi.jpg" },
  { id: 2, hashtag: "#PranVayu", description: "Planting 10,000 native and climate-resilient trees to restore ecological balance around Baddi.", image: "/images/projects/pran-vayu.jpg" },
  { id: 3, hashtag: "#UdyamitaSaathi", description: "Market-aligned vocational and entrepreneurial skill training for underserved youth.", image: "/images/projects/udyamita-saathi.jpg" },
  { id: 4, hashtag: "#SheStitchesSheSoars", description: "Tailoring and fashion design training helping women build their own micro-enterprises.", image: "/images/projects/she-stitches-she-soars.jpg" }
];

// PLACEHOLDER: The proposal does not include celebrity/brand ambassadors.
// Remove this section from the site unless Gana Sewa has real, confirmed public supporters.
export const celebrities = [];

// Impact figures grounded in the proposal's stated project targets/backgrounds.
export const impactStats = [
  { id: 1, value: 18, suffix: "+", label: "YEARS SINCE ESTABLISHMENT (2008)" },
  { id: 2, value: 1000, suffix: "+", label: "PEOPLE TARGETED FOR SKILL TRAINING" },
  { id: 3, value: 5000, suffix: "+", label: "INDIVIDUALS SCREENED (SWASTHYA SAATHI)" },
  { id: 4, value: 10000, suffix: "+", label: "NATIVE TREES PLANTED (PRAN VAYU)" },
  { id: 5, value: 500, suffix: "+", label: "RESIDENTS TRAINED IN DISASTER PREPAREDNESS" },
  { id: 6, value: 4, suffix: "", label: "STATES OF OPERATION: ASSAM, PUNJAB, GUJARAT, MP" }
];

// Project highlight snapshots for the homepage "stories" section, grounded in the proposal.
export const stories = [
  { id: 1, title: "Standing With Communities During the Assam Floods", image: "/images/stories/flood-relief-assam.jpg", description: "Gana Sewa volunteers have mobilized relief supplies - food, water, and essentials - directly to flood-affected communities in Assam." },
  { id: 2, title: "Community Cleanliness & Plantation Drives", image: "/images/stories/tree-plantation-drive.jpg", description: "Under campaigns like Swachhata Hi Seva, Gana Sewa volunteers have led community clean-up and tree plantation drives to build cleaner, greener neighborhoods." },
  { id: 3, title: "Skill Training in Action", image: "/images/stories/skill-training.jpg", description: "At our skill development centres, trainees build job-ready capabilities through structured, hands-on classroom instruction." },
  { id: 4, title: "Celebrating Our Trainees' Success", image: "/images/stories/certificate-success.jpg", description: "Graduation day at our skill centres - trainees receive their certificates and take their next step toward independent livelihoods." }
];

// PLACEHOLDER: No real gallery photos were provided. Replace with actual field photography.
export const instagramGallery = [];

// PLACEHOLDER: No accreditation logos were provided in the source material.
export const accreditations = [];

// PLACEHOLDER: No confirmed corporate partner logos were provided.
export const corporatePartners = [];

export const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About Us", href: "/about", children: [
      { name: "Our Story", href: "/about/our-story" },
      { name: "Vision & Mission", href: "/about/vision-mission" },
      { name: "Team", href: "/about/team" },
      { name: "Awards", href: "/about/awards" }
    ]
  },
  {
    name: "Projects", href: "/projects", children: [
      { name: "Swasthya Saathi", href: "/projects/swasthya-saathi" },
      { name: "Pran Vayu", href: "/projects/pran-vayu" },
      { name: "Udyamita Saathi", href: "/projects/udyamita-saathi" },
      { name: "She Stitches, She Soars", href: "/projects/she-stitches-she-soars" },
      { name: "Suraksha Saathi", href: "/projects/suraksha-saathi" },
      { name: "Surya Saathi", href: "/projects/surya-saathi" },
      { name: "Mukti Dham", href: "/projects/mukti-dham" }
    ]
  },
  {
    name: "Get Involved", href: "/get-involved", children: [
      { name: "Volunteer", href: "/get-involved/volunteer" },
      { name: "Partner With Us", href: "/get-involved/partner" },
      { name: "Corporate CSR", href: "/get-involved/corporate-csr" }
    ]
  },
  {
    name: "Media", href: "/media", children: [
      { name: "Gallery", href: "/media/gallery" },
      { name: "Press Release", href: "/media/press" },
      { name: "Blog", href: "/media/blog" }
    ]
  },
  {
    name: "Contacts", href: "/contact", children: [
      { name: "Contact Us", href: "/contact" },
      { name: "Careers", href: "/careers" }
    ]
  }
];

export const projectsData = {
  "swasthya-saathi": {
    title: "Swasthya Saathi",
    subtitle: "Mobile Health & Wellness Outreach for Remote Communities",
    image: "/images/projects/swasthya-saathi.jpg",
    body: [
      "Swasthya Saathi addresses critical healthcare gaps in remote areas of Himachal Pradesh and Assam. Remote regions of Himachal Pradesh face geographical barriers to healthcare access, while Assam continues to struggle with high rates of anemia, malnutrition, and vector-borne disease — both states suffer from limited preventive healthcare and awareness.",
      "The project deploys two mobile health units, equipped with diagnostic tools and staffed with medical personnel, making monthly visits to 10 villages in each state. Beyond screening for non-communicable diseases and nutritional deficiencies, the program builds community awareness and strengthens the capacity of local ASHAs and volunteers.",
      "Component activities include health screening & referral to government facilities, community health & wellness education sessions, and structured monitoring through baseline and endline surveys."
    ],
    stats: [
      { label: "People to be Screened", value: "5,000+" },
      { label: "Mobile Health Units", value: "2" },
      { label: "Villages per State (Monthly)", value: "10" }
    ],
    budget: "₹30,00,000"
  },
  "pran-vayu": {
    title: "Pran Vayu",
    subtitle: "Greening Baddi: A Sustainable Tree Plantation Drive for Ecological Restoration",
    image: "/images/projects/pran-vayu.jpg",
    body: [
      "Baddi, in Himachal Pradesh's Solan district, is a major industrial hub. While it drives significant economic growth, the region faces real environmental strain — deforestation, air pollution, and soil erosion. Pran Vayu is a focused plantation initiative to restore ecological balance, improve air quality, and enhance biodiversity.",
      "The drive will plant 10,000 native and climate-resilient trees — including mango, peepul, ashoka, kachnar, and shahtoot — across industrial buffer zones, roadside corridors, community and institutional lands, and degraded plots identified in consultation with local authorities and forest departments.",
      "Implementation runs in five phases: site identification, sapling procurement, the plantation drive itself with community and employee participation, a year of maintenance (watering, mulching, protection), and ongoing monitoring, including geo-tagging and quarterly survival audits targeting an 80%+ survival rate."
    ],
    stats: [
      { label: "Trees to be Planted", value: "10,000" },
      { label: "Native Species Used", value: "5" },
      { label: "Target Survival Rate", value: "80%+" }
    ],
    budget: "₹10,00,000"
  },
  "udyamita-saathi": {
    title: "Udyamita Saathi",
    subtitle: "Skill Development for Sustainable Livelihoods",
    image: "/images/projects/udyamita-saathi.jpg",
    body: [
      "Youth in rural and tribal regions of Assam and Himachal Pradesh face significant barriers to quality skill development. Despite real opportunity in sectors like pharmaceuticals, healthcare, and agro-processing, a lack of trained manpower and awareness keeps many young people from participating.",
      "Udyamita Saathi trains 100+ youth in market-aligned vocational and entrepreneurial skills across four tracks: pharmaceutical packaging & quality control, basic healthcare & geriatric care assistance, food processing & preservation, and digital literacy & e-commerce for rural entrepreneurs — with placement support in pharma hubs like Baddi.",
      "The goal is to bridge the skill gap, enhance employability, and support at least 60% of trained youth into jobs or micro-enterprises, reducing migration and building lasting local capacity."
    ],
    stats: [
      { label: "Youth to be Trained", value: "100+" },
      { label: "Training Tracks", value: "4" },
      { label: "Target Placement Rate", value: "60%+" }
    ],
    budget: "₹8,00,000"
  },
  "she-stitches-she-soars": {
    title: "She Stitches, She Soars",
    subtitle: "Empowering Women through Tailoring & Fashion Design",
    image: "/images/projects/she-stitches-she-soars.jpg",
    body: [
      "The industrial belt of Baddi, Nalagarh, and Barotiwala offers plenty of industrial employment, but many women here have limited access to formal education or vocational skills, leading to underemployment and economic dependence — even as local demand for skilled tailoring and customized fashion keeps growing.",
      "She Stitches, She Soars trains 50 women in advanced tailoring and basic fashion design over six months, then supports them through an entrepreneurship and business-support phase, helping at least 20 establish their own tailoring units or small group enterprises within three months of course completion.",
      "The program also connects trained women to local markets — industrial worker uniforms, local boutiques, and online platforms — while building their financial literacy and entrepreneurial mindset."
    ],
    stats: [
      { label: "Women to be Trained", value: "50" },
      { label: "Target New Ventures", value: "20+" },
      { label: "Training Duration", value: "6 months" }
    ],
    budget: "₹7,00,000"
  },
  "suraksha-saathi": {
    title: "Suraksha Saathi",
    subtitle: "Community-Based Disaster Preparedness & Resilience Program",
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1200&q=80",
    body: [
      "Himachal Pradesh, and Baddi in particular, has faced repeated natural disasters in recent years — cloudbursts and flash floods in Kullu, Mandi, and Shimla caused significant loss of life and infrastructure damage, underlining the urgent need for community-based preparedness and response.",
      "Suraksha Saathi trains 500+ residents — including youth, women, and schoolchildren — in earthquake safety, landslide response, flood evacuation, and fire safety, and forms Village Disaster Response Teams (VDRTs) equipped with rescue kits and trained through mock drills.",
      "The program also runs a school safety program across 10 schools, installs basic early warning infrastructure (sirens, signage, safe-zone markers), and runs a digital awareness campaign using WhatsApp, local radio, and posters."
    ],
    stats: [
      { label: "Residents to be Trained", value: "500+" },
      { label: "Schools Covered", value: "10" },
      { label: "Village Response Teams", value: "Formed" }
    ],
    budget: "₹10,00,000 – ₹25,00,000"
  },
  "surya-saathi": {
    title: "Surya Saathi",
    subtitle: "Solar Energy for Sustainable Health and Education",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&q=80",
    body: [
      "Frequent power outages and voltage fluctuations in industrial towns like Baddi disrupt essential services — hospitals operating critical equipment around the clock, and schools that depend on reliable electricity for digital learning.",
      "Surya Saathi installs 10–25 kW solar power systems, with battery backup of 100–200 kWh for hospitals, across selected hospitals and schools, following a site assessment and feasibility study. Local staff are trained in basic maintenance, and energy meters with remote monitoring support quarterly performance reporting.",
      "The aim is reliable electricity for 4+ institutions, a meaningful cut in electricity bills, and a working demonstration of renewable energy adoption for semi-urban areas."
    ],
    stats: [
      { label: "Institutions Covered", value: "4+" },
      { label: "System Capacity", value: "10–25 kW" },
      { label: "Expected Bill Reduction", value: "30–50%" }
    ],
    budget: "₹10,00,000 – ₹25,00,000"
  },
  "mukti-dham": {
    title: "Mukti Dham",
    subtitle: "Eco-Friendly and Dignified Cremation Infrastructure",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80",
    body: [
      "Many cremation grounds in rural and semi-urban areas lack basic sanitation and amenities, adding logistical and emotional strain on grieving families — and traditional wood-based pyres contribute to deforestation and air pollution.",
      "Mukti Dham introduces eco-friendly, smokeless pyres, solar lighting for safe nighttime use, clean water facilities, and shaded waiting areas for families, along with landscaping, accessible pathways, and a proper waste management system for ritual waste.",
      "The project also includes planting around 100 flowering trees for shade and beauty, creating a model that can be replicated at other cremation grounds in the region."
    ],
    stats: [
      { label: "Flowering Trees Planted", value: "~100" },
      { label: "Core Facilities Added", value: "6" },
      { label: "Model For Replication", value: "Yes" }
    ],
    budget: "₹22,50,000"
  }
};

// PLACEHOLDER: The source proposal only confirms one named contact (Project Manager).
// Replace the roles below with real team members and bios before publishing.
export const teamMembers = [
  { id: 1, name: "Sachin Bhardwaj", role: "Project Manager", image: "", bio: "Primary point of contact for Gana Sewa's project proposals and CSR partnerships." }
  // Additional team members: PLACEHOLDER — add real names, roles, and bios here.
];

// PLACEHOLDER: No awards were included in the source proposal. Add only verified,
// real awards Gana Sewa has actually received.
export const awards = [];

// PLACEHOLDER: No blog content was provided. These are suggested topics based on
// Gana Sewa's real projects — write and verify actual posts before publishing.
export const blogPosts = [
  { id: 1, title: "Inside Our Mobile Health Clinics: A Day in the Field", date: "", image: "/images/hero/yoga-wellness.jpg", excerpt: "PLACEHOLDER - draft a real field update once Swasthya Saathi launches.", author: "" },
  { id: 2, title: "Why We're Planting 10,000 Trees Around Baddi", date: "", image: "/images/projects/pran-vayu.jpg", excerpt: "PLACEHOLDER - draft a real update on the Pran Vayu plantation drive.", author: "" },
  { id: 3, title: "Meet the Women Behind She Stitches, She Soars", date: "", image: "/images/projects/she-stitches-she-soars.jpg", excerpt: "PLACEHOLDER - feature real participant stories once training begins.", author: "" }
];

// PLACEHOLDER: No real press coverage was provided. Do not publish fabricated
// news attributions — replace with genuine, verifiable media coverage only.
export const pressReleases = [];

// PLACEHOLDER: No open roles were specified in the source material.
export const openPositions = [];
