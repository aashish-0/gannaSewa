// Content data for Gana Sewa website

export const brand = {
  name: "Gana Sewa",
  fullName: "Gana Sewa",
  tagline: "SKILLING COMMUNITIES. BUILDING LIVELIHOODS.",
  hashtag: "#HaqBantaHai",
  phone: "0859-1717-669",
  phoneRaw: "08591717669",
  email: "ganasewa.india@gmail.com",
  whatsapp: "918591717669",
  address: "Gana Sewa, Guwahati, Assam, India",
  ngoReg: "Registered under the Societies Registration Act, 1860 | Reg. No. RS/DBR/250/G/05 OF 2008 | UBIN: 618/10193/AABAG4599A/11/2024",
  taxNote: "Donations exempted under 80G of the Income Tax Act 1961",
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

export const heroSlides = [
  {
    id: 1,
    image: "/images/hero/certificate-ceremony.jpg",
    alt: "Women in skill development training",
    title: "Empowering Women. Transforming Families. Building Stronger Communities.",
    subtitle: "For over 18 years, Gana Sewa has been helping women, youth and vulnerable communities gain the skills, confidence and opportunities they need to build a better future.",
    cta: "Donate Now"
  }
];

// "What We Do" categories used by the CausesSection on the homepage.
export const causes = [
  { id: 1, name: "Skill Development", icon: "https://cdn-icons-png.flaticon.com/512/2942/2942909.png", link: "/projects/saksham-parivar", slug: "saksham-parivar" },
  { id: 2, name: "Women Empowerment", icon: "https://cdn-icons-png.flaticon.com/512/2065/2065169.png", link: "/projects/saksham-parivar", slug: "saksham-parivar" },
  { id: 3, name: "Health & Wellness", icon: "https://cdn-icons-png.flaticon.com/512/2966/2966327.png", link: "/projects/jeevan-raksha-abhiyan", slug: "jeevan-raksha-abhiyan" },
  { id: 4, name: "Child Development", icon: "https://cdn-icons-png.flaticon.com/512/2913/2913465.png", link: "/projects/beti-padao-samridhi-lao", slug: "beti-padao-samridhi-lao" },
  { id: 5, name: "Digital Literacy", icon: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png", link: "/projects/saksham-parivar", slug: "saksham-parivar" }
];

// Programs featured on the homepage "Our Programs" section (matches Our Program doc).
export const programs = [
  { id: 1, hashtag: "Beti Padao, Samridhi Lao", description: "Education support for girls from Class 6 to Class 12 — fees, books, uniforms, stationery and mentorship.", image: "/images/projects/she-stitches-she-soars.jpg", slug: "beti-padao-samridhi-lao" },
  { id: 2, hashtag: "Annapurna Seva", description: "Share meals on your special occasions with underprivileged families and celebrate with compassion.", image: "/images/projects/swasthya-saathi.jpg", slug: "annapurna-seva" },
  { id: 3, hashtag: "Jeevan Raksha Abhiyan", description: "Free health camps, doctor consultations and preventive care awareness for underserved communities.", image: "/images/projects/pran-vayu.jpg", slug: "jeevan-raksha-abhiyan" },
  { id: 4, hashtag: "Saksham Parivar Initiative", description: "Vocational skill training for women and youth — tailoring, beauty, hospitality, digital literacy and more.", image: "/images/projects/udyamita-saathi.jpg", slug: "saksham-parivar" }
];

export const celebrities = [];

// Impact figures directly from the homepage content doc.
export const impactStats = [
  { id: 1, value: 18, suffix: "+", label: "YEARS SERVING COMMUNITIES SINCE 2008" },
  { id: 2, value: 2700, suffix: "+", label: "PEOPLE TRAINED THROUGH SKILL DEVELOPMENT" },
  { id: 3, value: 2300, suffix: "+", label: "BENEFICIARIES SUPPORTED UNDER GOVT PROJECTS" },
  { id: 4, value: 5, suffix: "+", label: "STATES REACHED ACROSS INDIA" },
  { id: 5, value: 70, suffix: "%+", label: "LIVELIHOOD OUTCOMES THROUGH EMPLOYMENT" }
];

// Success story — Renuka's Journey from Hope to Opportunity.
export const stories = [
  {
    id: 1,
    title: "Renuka's Journey From Hope To Opportunity",
    image: "/images/stories/skill-training.jpg",
    description: "Renuka came from a financially challenged family. Through Gana Sewa's skill development training, she gained professional skills in the beauty and wellness sector. Today, she earns independently and contributes to her family's wellbeing. \"The training gave me confidence, skills and a new future.\""
  },
  { id: 2, title: "Skill Training in Action", image: "/images/stories/certificate-success.jpg", description: "At our skill development centres, trainees build job-ready capabilities through structured, hands-on classroom instruction." },
  { id: 3, title: "Standing With Communities During the Assam Floods", image: "/images/stories/flood-relief-assam.jpg", description: "Gana Sewa volunteers have mobilized relief supplies — food, water and essentials — directly to flood-affected communities in Assam." },
  { id: 4, title: "Community Cleanliness & Plantation Drives", image: "/images/stories/tree-plantation-drive.jpg", description: "Under campaigns like Swachhata Hi Seva, Gana Sewa volunteers have led community clean-up and tree plantation drives to build cleaner, greener neighborhoods." }
];

export const instagramGallery = [];
export const accreditations = [];
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
    name: "Our Programs", href: "/projects", children: [
      { name: "Beti Padao, Samridhi Lao", href: "/projects/beti-padao-samridhi-lao" },
      { name: "Annapurna Seva", href: "/projects/annapurna-seva" },
      { name: "Jeevan Raksha Abhiyan", href: "/projects/jeevan-raksha-abhiyan" },
      { name: "Aapda Mitra", href: "/projects/aapda-mitra" },
      { name: "Saksham Parivar Initiative", href: "/projects/saksham-parivar" }
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

// Five programs from the Our Program document.
export const projectsData = {
  "beti-padao-samridhi-lao": {
    title: "Beti Padao, Samridhi Lao",
    subtitle: "Every Girl Deserves the Chance to Learn, Dream and Succeed",
    image: "/images/projects/she-stitches-she-soars.jpg",
    body: [
      "Education has the power to break the cycle of poverty and transform generations. Yet, thousands of girls from economically disadvantaged families are forced to discontinue their education due to financial constraints.",
      "Beti Padao, Samridhi Lao is Gana Sewa's education support initiative dedicated to helping girls from Class 6 to Class 12 continue their schooling without interruption. Under this program, we provide support for school fees, books, uniforms, stationery, examination fees, digital learning resources and mentorship guidance.",
      "Our aim is not only to keep girls in school but also to help them build confidence and aspire for a brighter future. When a girl receives an education, she gains the power to make informed choices, become financially independent and contribute positively to society.",
      "Your Support Can Help: ✅ Sponsor School Fees ✅ Provide Learning Materials ✅ Support Scholarships ✅ Encourage Higher Education",
      "\"Educate a Girl Today. Empower a Nation Tomorrow.\""
    ],
    stats: [
      { label: "Per Girl School Fee (Monthly)", value: "₹5,000" },
      { label: "Grades Supported", value: "6 – 12" },
      { label: "Tax Benefit", value: "80G" }
    ],
    budget: "₹5,000 / month"
  },
  "annapurna-seva": {
    title: "Annapurna Seva",
    subtitle: "Share a Meal. Share Happiness. Share Blessings.",
    image: "/images/projects/swasthya-saathi.jpg",
    body: [
      "For many families, a nutritious meal is something they cannot afford every day. Annapurna Seva allows individuals and families to celebrate their special occasions by sharing meals with those in need.",
      "Whether it is a birthday, anniversary, wedding celebration, memorial day or any other meaningful occasion, your contribution can bring food and happiness to underprivileged individuals. A simple meal not only satisfies hunger but also reminds people that they are not forgotten.",
      "Every meal shared creates a moment of hope, dignity and human connection.",
      "Celebrate With Compassion: ✅ Birthdays ✅ Anniversaries ✅ Festivals ✅ Family Celebrations ✅ Memorial Tributes",
      "\"The joy of sharing food is the joy of sharing humanity.\""
    ],
    stats: [
      { label: "Meals per ₹5,000", value: "20" },
      { label: "Occasions Celebrated", value: "5+" },
      { label: "Tax Benefit", value: "80G" }
    ],
    budget: "₹5,000 for 20 meals"
  },
  "jeevan-raksha-abhiyan": {
    title: "Jeevan Raksha Abhiyan",
    subtitle: "Healthcare Should Never Be a Privilege",
    image: "/images/projects/pran-vayu.jpg",
    body: [
      "Thousands of people living in underserved communities lack access to timely medical advice, preventive healthcare and health awareness.",
      "Jeevan Raksha Abhiyan focuses on organizing health camps and awareness programs in rural and economically vulnerable communities. Through free health check-ups, consultations with qualified medical professionals, diagnostics, health awareness sessions and preventive care education, we aim to detect health issues early and improve overall community well-being.",
      "A timely diagnosis can save a life. Proper awareness can prevent diseases before they become serious.",
      "Your Contribution Supports: ✅ Free Medical Check-ups ✅ Doctor Consultations ✅ Health Awareness Sessions ✅ Women & Child Health Programs ✅ Preventive Healthcare Initiatives",
      "\"Good Health Creates Strong Families and Strong Communities.\""
    ],
    stats: [
      { label: "Free Check-ups", value: "Yes" },
      { label: "Awareness Sessions", value: "Regular" },
      { label: "Tax Benefit", value: "80G" }
    ],
    budget: "Support a Health Camp"
  },
  "aapda-mitra": {
    title: "Aapda Mitra",
    subtitle: "Rebuilding Hope When Disaster Strikes",
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1200&q=80",
    body: [
      "Natural disasters can destroy homes, livelihoods and dreams within moments. Floods, earthquakes, cyclones and other calamities leave thousands of families struggling to rebuild their lives.",
      "Aapda Mitra is Gana Sewa's disaster relief and rehabilitation initiative designed to provide immediate assistance and long-term support to affected communities. Our efforts include emergency food distribution, relief materials, temporary shelter support, medical assistance, rehabilitation and recovery initiatives.",
      "During difficult times, communities need more than relief. They need hope.",
      "Your Support Helps Provide: ✅ Emergency Food Supplies ✅ Medicines & Essential Items ✅ Temporary Shelter Support ✅ Rehabilitation Assistance ✅ Disaster Recovery Support",
      "\"Together We Can Help Communities Rise Again.\""
    ],
    stats: [
      { label: "Emergency Response", value: "Rapid" },
      { label: "Support Areas", value: "5+" },
      { label: "Tax Benefit", value: "80G" }
    ],
    budget: "Support Disaster Relief"
  },
  "saksham-parivar": {
    title: "Saksham Parivar Initiative",
    subtitle: "One Skill. One Livelihood. One Prosperous Family.",
    image: "/images/projects/udyamita-saathi.jpg",
    body: [
      "A single skill can transform an entire family. When one individual gains employable skills, the household gains income, confidence and a pathway towards a brighter future.",
      "The Saksham Parivar Initiative provides skill development training to women and youth from economically weaker sections of society. Training programs include tailoring, beauty and wellness, hospitality, digital literacy, entrepreneurship and other market-relevant vocational skills.",
      "Our goal is simple: Skill → Employment → Income → Prosperity. By helping individuals become self-reliant, we help families become stronger and communities become more resilient.",
      "Your Contribution Supports: ✅ Vocational Training ✅ Skill Development Infrastructure ✅ Certification Programs ✅ Employment Support ✅ Entrepreneurship Development ✅ Livelihood Creation",
      "\"Teach a Skill. Create a Future.\""
    ],
    stats: [
      { label: "Complete Journey (Sponsor)", value: "₹15,000" },
      { label: "Training Tracks", value: "6+" },
      { label: "Tax Benefit", value: "80G" }
    ],
    budget: "₹15,000 sponsors one woman's complete journey"
  }
};

// Donation impact tiers shown on the "Our Programs" page (Featured Impact Section).
export const donationTiers = [
  { amount: "₹5,000", description: "Supports educational assistance for a girl child." },
  { amount: "₹10,000", description: "Provides meals for underprivileged families." },
  { amount: "₹15,000", description: "Sponsors one complete skill development training." },
  { amount: "₹25,000", description: "Helps organize a community health camp." },
  { amount: "₹50,000+", description: "Supports disaster relief and rehabilitation efforts." }
];

// Homepage donation impact tiers ("How Your Donation Helps").
export const homeDonationTiers = [
  { amount: "₹1,500", description: "Provides learning materials for one trainee." },
  { amount: "₹5,000", description: "Supports one month of vocational training." },
  { amount: "₹15,000", description: "Sponsors one woman's complete skill development journey." },
  { amount: "₹50,000", description: "Supports an entire training batch." },
  { amount: "₹1,00,000+", description: "Becomes a community transformation partnership." }
];

// Reasons to support Gana Sewa (used on Home).
export const whySupport = [
  { title: "Established in 2008", description: "Serving communities for over eighteen years." },
  { title: "Proven Experience", description: "Successfully implemented skill development and livelihood programs across multiple states." },
  { title: "Transparent Operations", description: "Committed to accountability and responsible use of donor funds." },
  { title: "Real Impact", description: "Focused on measurable outcomes that improve lives and strengthen communities." },
  { title: "Community-Centered Approach", description: "Working directly with beneficiaries to create sustainable change." }
];

// Team leadership pillars from the About Us document.
export const teamMembers = [
  { id: 1, name: "Governing Body", role: "Strategic Direction & Oversight", image: "", bio: "Our governing body provides strategic direction and oversight to ensure Gana Sewa remains committed to its mission, values and objectives — guiding organizational growth, strengthening governance and ensuring transparency in all activities." },
  { id: 2, name: "Program Team", role: "Program Design & Implementation", image: "", bio: "Designs and delivers initiatives across Skill Development, Women Empowerment, Child Development, Livelihood Promotion, Health & Wellness and Community Mobilization — working directly with beneficiaries to create measurable impact." },
  { id: 3, name: "Trainers & Mentors", role: "Skill Building & Guidance", image: "", bio: "Deliver vocational training, career guidance, entrepreneurship support, soft-skills development and digital literacy — helping participants transition from learning to livelihood." },
  { id: 4, name: "Volunteers & Supporters", role: "Community & CSR Partners", image: "", bio: "Volunteers, donors, CSR partners and well-wishers who believe in our mission — every contribution of time, expertise and resources helps us reach more communities and create greater impact." }
];

export const awards = [];

export const blogPosts = [
  { id: 1, title: "Inside Our Mobile Health Camps: A Day in the Field", date: "", image: "/images/hero/yoga-wellness.jpg", excerpt: "How Jeevan Raksha Abhiyan brings preventive healthcare to underserved communities.", author: "" },
  { id: 2, title: "Beti Padao, Samridhi Lao: Keeping Girls in School", date: "", image: "/images/projects/she-stitches-she-soars.jpg", excerpt: "Sponsoring girls from Class 6 to Class 12 with fees, books and mentorship.", author: "" },
  { id: 3, title: "One Skill, One Livelihood — The Saksham Parivar Story", date: "", image: "/images/projects/udyamita-saathi.jpg", excerpt: "How vocational training is turning household earners into confident professionals.", author: "" }
];

export const pressReleases = [];
export const openPositions = [];
