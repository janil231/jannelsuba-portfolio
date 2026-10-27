export const PERSONAL = {
  name: "Jannel Crespo Suba",
  displayName: "Jannel Suba",
  role: "Developer",
  secondaryRole: "Information Systems Student",
  age: 21,
  summary:
    "Information Systems student and developer building complete full-stack applications with AI-assisted development. I direct architecture, feature design, database structure, and debugging while AI handles code implementation—turning real operational problems into working systems.",
  heroHeadline:
    "Building secure digital systems from curiosity, creativity, and obsession.",
  heroDescription:
    "Information Systems student at Exact Colleges of Asia and working student. I design and ship full-stack systems using AI-assisted development, from architecture and databases to deployment.",
  aboutNarrative:
    "I enjoy designing systems that combine usability, security, and performance. My focus is on understanding the problem, shaping the architecture, and delivering practical software—using AI as a development partner rather than claiming to write every line unaided.",
  skillStatement:
    "Builds complete full-stack applications using AI-assisted development — directing architecture, feature design, database structure, and debugging, with AI handling code implementation.",
} as const;

export const EDUCATION = {
  degree: "Bachelor of Science in Information Systems",
  year: "2023 – Present",
  school: "Exact Colleges of Asia",
  address: "Cabiao, Nueva Ecija",
  status: "4th Year — Working Student",
  graduation: "June 2027",
  honors: "Dean's Lister",
  honorsPeriod:
    "Every semester: 1st Semester A.Y. 2023–2024 – 2nd Semester A.Y. 2025–2026",
  generalAverage: "88–98",
} as const;

export const CONTACT = {
  email: "jannelsuba06242004@gmail.com",
  phone: "09925913654",
  linkedIn: "https://www.linkedin.com/in/jannel-suba-325ba0334",
  facebook: "https://www.facebook.com/chuchichu24",
  credly: "https://www.credly.com/users/jannel-suba",
  github: "https://github.com/janil231",
  portfolio: "https://jannelsuba-portfolio.vercel.app",
  cv: "/Jannel_Suba_CV_2026.pdf",
  cvDocx: "/Jannel_Suba_CV_2026.docx",
} as const;

export const IDENTITY_TRAITS = [
  { label: "FULL NAME", value: "Jannel Crespo Suba" },
  { label: "AGE", value: "21" },
  { label: "ROLE", value: "Developer" },
  { label: "FOCUS", value: "Secure Web Systems" },
  { label: "STATUS", value: "4th Year — Working Student" },
  {
    label: "HONORS",
    value: "Dean's Lister — A.Y. 2023–2024 to 2025–2026",
  },
] as const;

export interface WorkExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
}

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    role: "Working Student — Receptionist",
    company: "Red Gym",
    location: "Cabiao, Nueva Ecija",
    period: "June 2026 – Present",
    description:
      "Handles front-desk reception and day-to-day gym operations while studying full time. Identified the gym's manual record-keeping problem on the job and built the Red Fitness Center management system that the owner and reception staff now use daily.",
  },
];

export interface CharacterReference {
  name: string;
  role: string;
  company: string;
  phone: string;
}

export const REFERENCES: CharacterReference[] = [
  {
    name: "Crisanto Ramoso",
    role: "Manager",
    company: "Red Gym, Cabiao, Nueva Ecija",
    phone: "+63 917 673 7711",
  },
  {
    name: "Rachela Anne Ramoso",
    role: "Senior Team Manager",
    company: "InterContinental Hotels Group",
    phone: "+63 977 063 2553",
  },
  {
    name: "Joseph D.C. Maniego",
    role: "Assistant Dean, College of Information Systems",
    company: "Exact Colleges of Asia",
    phone: "+63 956 830 1117",
  },
];

export interface Award {
  title: string;
  event: string;
  date: string;
  detail: string;
  type: "award" | "participation";
}

export const AWARDS: Award[] = [
  {
    title: "Best in Educational Impact",
    event: "RAITE 2026 Hackathon",
    date: "October 2, 2026",
    detail: "Team of 3",
    type: "award",
  },
  {
    title: "Participant",
    event: "IRCITE IT Marketing Challenge, PSITE Region III",
    date: "March 2026",
    detail: "Regional competition",
    type: "participation",
  },
];

export type ProjectStatus = "live" | "in-development" | "prototype";

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  badge: string;
  status: ProjectStatus;
  liveUrl?: string;
  role: string;
  timeline?: string;
  client?: string;
  team?: string;
  description: string;
  techStack: Record<string, readonly string[]>;
  features: readonly string[];
  highlights: readonly string[];
}

export const FEATURED_PROJECTS: PortfolioProject[] = [
  {
    id: "research-repository",
    title: "Research Repository Management System",
    category: "Full-Stack Web Application",
    badge: "Flagship Project",
    status: "live",
    liveUrl: "https://research-repository2-1.onrender.com/index.html",
    role: "Developer",
    timeline: "August 2025 – November 2025",
    description:
      "Research Repository Management System is a centralized platform for managing, reviewing, and publishing academic research papers. It streamlines student submissions while providing administrators with moderation, analytics, reporting, and repository management tools.",
    techStack: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["Node.js", "Express"],
      database: ["MongoDB Atlas", "Mongoose"],
      security: ["JWT", "bcryptjs", "TOTP 2FA", "QR-code onboarding"],
      fileManagement: ["Multer", "Archiver"],
      reporting: ["PDFKit", "ExcelJS"],
      visualization: ["Chart.js"],
      deployment: ["Render", "MongoDB Atlas"],
    },
    features: [
      "Student registration and submissions",
      "Research paper PDF uploads",
      "Metadata management",
      "Admin moderation dashboard",
      "Approve / reject / archive workflows",
      "Search and filtering",
      "Analytics dashboards",
      "PDF report generation",
      "Excel exports",
      "Backup and restore tools",
      "Dark mode UI",
    ],
    highlights: [
      "Designed an end-to-end submission → moderation → publication workflow",
      "Implemented JWT authentication and password hashing",
      "Added TOTP-based two-factor authentication for administrators",
      "Built advanced search and filtering across repository data",
      "Developed analytics and reporting tools for institutional insights",
      "Implemented backup and restore functionality for repository assets",
    ],
  },
  {
    id: "smartdcabiao",
    title: "SMARTDCABIAO",
    category: "Capstone Project — Full-Stack MERN Application",
    badge: "Capstone / Thesis Project",
    status: "in-development",
    liveUrl: "https://smartdcabiao.vercel.app/",
    role: "Developer",
    client: "Municipality of Cabiao",
    team: "Group of 4",
    description:
      "SMARTDCABIAO (Smart Tourism & Digital Cabiao) is the capstone/thesis project built for the Municipality of Cabiao, Nueva Ecija. As the team's developer, I built the actual system and produced the system flowcharts. Visitors explore destinations and local businesses on an interactive map, save favorites, join seasonal quests and community activities, and redeem voucher rewards. Municipal staff use an LGU dashboard to manage submissions, seasons, quests, vouchers, reviews, and merchant insights—backed by Firebase and deployed on Vercel.",
    techStack: {
      frontend: ["React 19", "Vite 7", "React Router 7"],
      styling: ["Tailwind CSS 4"],
      maps: ["Leaflet", "React-Leaflet"],
      backendData: ["Firebase Auth", "Firestore", "Firebase Storage"],
      securityUx: ["DOMPurify", "Error boundaries", "Env-based config"],
      deployment: ["Vercel", "GitHub"],
    },
    features: [
      "Home & discovery — featured businesses, promotions, events",
      "Interactive Leaflet map of Cabiao businesses & attractions",
      "Business & destination listings with favorites",
      "Seasonal community quests with impact tracking & leaderboards",
      "Rewards, voucher store & QR redemption",
      "Firebase Auth — email, Google, Facebook",
      "Suggest-a-place & user profiles",
      "English / Filipino (en / fil) bilingual UI",
      "LGU dashboard — submissions, reports, seasons & quests",
      "Voucher management & partner redemption verification",
      "Places CRUD with Cabiao geo bounds",
      "Merchant insights & review moderation",
      "Privacy, terms & data deletion compliance pages",
    ],
    highlights: [
      "Built the actual SMARTDCABIAO system as the team's developer",
      "Produced the system flowcharts for the capstone documentation",
      "Delivered a municipal platform for a real LGU client in a group of 4",
      "Built a municipal smart-tourism platform with 20+ routes for public users and LGU staff",
      "Implemented interactive maps, business catalogs, and a favorites system",
      "Designed gamified tourism: seasonal quests, impact metrics, leaderboards, and voucher QR redemption",
      "Developed an LGU admin dashboard for submissions, quest verification, vouchers, and merchant insights",
      "Integrated Firebase Authentication and Firestore with configurable mock vs live data",
      "Added English/Filipino internationalization and mobile-friendly navigation",
      "Deployed via GitHub → Vercel with secure VITE_* environment configuration",
    ],
  },
  {
    id: "red-fitness-center",
    title: "Red Fitness Center — Gym Management System",
    category: "Gym Management System — Progressive Web App",
    badge: "Live — In Daily Use",
    status: "live",
    role: "Developer",
    timeline: "June – July 2026",
    client: "Red Gym, Cabiao, Nueva Ecija",
    description:
      "A mobile-first gym management progressive web app built for a real local gym. The owner asked for it after I proposed it, and it now runs the gym's daily operations.",
    techStack: {
      frontend: [
        "Next.js 16 (App Router, Turbopack)",
        "React 19",
        "TypeScript (strict)",
      ],
      styling: ["Tailwind CSS v4", "shadcn/ui"],
      database: ["Supabase (PostgreSQL)"],
      security: [
        "Custom cookie-based authentication",
        "Role-based access (admin / receptionist)",
      ],
      reporting: ["Recharts"],
      deployment: ["Vercel", "Installable PWA", "Service worker / offline fallback"],
    },
    features: [
      "Four walk-in membership tiers — Daily ₱40, Weekly ₱150, 15-Day ₱300, Monthly ₱500 — with cash/GCash payment",
      "Point-of-sale with product catalog, cart, and safe rollback if a sale fails midway",
      "Dashboard with auto-refresh",
      "Reports with date-range presets and period-over-period revenue comparison",
      "Analytics covering revenue trends, peak hours, busiest day, and top products",
      "Visitor logging",
      "Member subscription tracking with Active / Expiring / Expired filters",
      "Coach payment records",
      "Admin panels for products and staff",
      "Guided on-page tours for staff training",
    ],
    highlights: [
      "Built a production system now used daily by the gym owner and reception staff",
      "Implemented custom cookie-based authentication with role-based access",
      "Made reporting timezone-correct for Asia/Manila",
      "Shipped an installable PWA with a service worker and offline fallback",
      "Designed a point-of-sale flow with safe rollback if a sale fails midway",
      "Added guided on-page tours to support staff training",
    ],
  },
  {
    id: "accessible-reading-app",
    title: "Accessible Reading Web App",
    category: "Hackathon Prototype — Education / Accessibility",
    badge: "RAITE 2026 Hackathon",
    status: "prototype",
    role: "Developer (Programmer)",
    timeline: "October 2026",
    team: "3-person team",
    description:
      "A web app that turns a photo of a printed page into a reading format matched to the learner. Built as a 3-person team prototype for the RAITE 2026 Hackathon, Education / Accessibility track; I was the programmer.",
    techStack: {
      frontend: [
        "Next.js 15 (App Router)",
        "React 19",
        "TypeScript 5.7 (strict)",
      ],
      styling: ["Tailwind CSS 3.4"],
      ai: ["Google Gemini API (vision OCR, translation, concept mapping)"],
      accessibility: [
        "Web Speech API",
        "Dyslexia reading profile",
        "Autism-friendly low-stimulation profile",
      ],
      deployment: ["Vercel"],
    },
    features: [
      "Camera capture with model-fallback OCR chain",
      "Dyslexia reading profile with a line-tracking ruler",
      "Autism-friendly low-stimulation profile with literal-language restatement",
      "Adjustable type size and high-contrast page tints",
      "Word-by-word karaoke read-aloud",
      "English ↔ Tagalog translation",
      "AI-generated concept mind map",
      "Visual daily schedule",
      "Teacher flow that assigns the adapted version to a class",
    ],
    highlights: [
      "Accessibility-first design: single-select profile radio group with arrow-key navigation, full dialog semantics, live regions, and prefers-reduced-motion support",
      "All page images processed in memory only and never written to disk",
      "Highlighting applied without causing text reflow",
      "Built as a 3-person team prototype for the RAITE 2026 Hackathon",
    ],
  },
];

/** @deprecated Use FEATURED_PROJECTS[0] */
export const FLAGSHIP_PROJECT = FEATURED_PROJECTS[0];

export const SKILL_GROUPS = [
  {
    title: "AI-Assisted Development",
    skills: [
      "Application architecture",
      "Feature design",
      "Database structure",
      "Debugging",
      "AI code implementation",
      "Prompt engineering",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React 19",
      "Next.js",
      "Vite",
      "React Router",
      "Tailwind CSS",
      "shadcn/ui",
      "Responsive Design",
      "i18n (EN / FIL)",
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Firebase",
      "Firebase Auth",
      "Firestore",
      "Firebase Storage",
      "Supabase",
    ],
  },
  {
    title: "Database",
    skills: [
      "MongoDB",
      "Mongoose",
      "MongoDB Atlas",
      "Firestore",
      "PostgreSQL",
      "Supabase",
    ],
  },
  {
    title: "Security & Auth",
    skills: [
      "JWT",
      "bcryptjs",
      "TOTP 2FA",
      "OAuth (Google / Facebook)",
      "DOMPurify",
      "Cookie-based authentication",
      "QR-code onboarding",
      "Role-based access",
    ],
  },
  {
    title: "Maps, Data & Reporting",
    skills: [
      "Leaflet",
      "React-Leaflet",
      "Chart.js",
      "Recharts",
      "PDFKit",
      "ExcelJS",
      "QR redemption flows",
    ],
  },
  {
    title: "Tools & Deployment",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Render",
      "Turbopack",
      "VS Code",
      "Multer",
      "Archiver",
      "Env-based config",
    ],
  },
  {
    title: "UI, Motion & Accessibility",
    skills: [
      "Framer Motion",
      "GSAP",
      "Three.js",
      "React Three Fiber",
      "Admin dashboards",
      "PWA / offline support",
      "Accessible UI patterns",
    ],
  },
] as const;

export const VISION_GOALS = [
  "Secure and scalable web applications",
  "Full-stack engineering mastery",
  "Modern system architecture",
  "User-centered software design",
  "Continuous learning and professional growth",
] as const;

export const VISION_NARRATIVE =
  "My goal is to build software that is reliable, secure, and meaningful. I am continuously improving my skills in full-stack development, system design, and modern web technologies.";

export const CONTACT_CTA =
  "Open to internships, freelance opportunities, collaborations, and software development projects.";
