export const PERSONAL = {
  name: "Jannel Suba",
  role: "Full-Stack Developer",
  secondaryRole: "Information Systems Student",
  age: 21,
  summary:
    "Information Systems student focused on building secure, scalable web applications. Passionate about full-stack development, system design, and creating practical solutions that solve real-world problems.",
  heroHeadline:
    "Building secure digital systems from curiosity, creativity, and obsession.",
  heroDescription:
    "Information Systems student at Exact Colleges of Asia focused on full-stack development, system design, and creating practical software that solves real-world problems.",
  aboutNarrative:
    "I enjoy building applications that combine usability, security, and performance. My focus is not only writing code but designing systems that create meaningful experiences and solve practical problems.",
} as const;

export const EDUCATION = {
  degree: "Bachelor of Science in Information Systems",
  school: "Exact Colleges of Asia",
  year: "4th Year Student",
  graduation: "June 2027",
} as const;

export const CONTACT = {
  email: "jannelsuba06242004@gmail.com",
  phone: "09282294216",
  linkedIn: "https://www.linkedin.com/in/jannel-suba-325ba0334",
  facebook: "https://www.facebook.com/chuchichu24",
  credly: "https://www.credly.com/users/jannel-suba",
} as const;

export const IDENTITY_TRAITS = [
  { label: "AGE", value: "21" },
  { label: "ROLE", value: "Full-Stack Developer" },
  { label: "FOCUS", value: "Secure Web Systems" },
  { label: "STUDY", value: "Information Systems" },
  { label: "GRADUATION", value: "June 2027" },
] as const;

export type ProjectStatus = "live" | "in-development";

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  badge: string;
  status: ProjectStatus;
  liveUrl: string;
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
    category: "Full-Stack MERN Application",
    badge: "In Development",
    status: "in-development",
    liveUrl: "https://smartdcabiao.vercel.app/",
    description:
      "SMARTDCABIAO (Smart Tourism & Digital Cabiao) is a responsive tourism platform for the Municipality of Cabiao, Nueva Ecija. Visitors explore destinations and local businesses on an interactive map, save favorites, join seasonal quests and community activities, and redeem voucher rewards. Municipal staff use an LGU dashboard to manage submissions, seasons, quests, vouchers, reviews, and merchant insights—backed by Firebase and deployed on Vercel.",
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
      "Built a municipal smart-tourism platform with 20+ routes for public users and LGU staff",
      "Implemented interactive maps, business catalogs, and a favorites system",
      "Designed gamified tourism: seasonal quests, impact metrics, leaderboards, and voucher QR redemption",
      "Developed an LGU admin dashboard for submissions, quest verification, vouchers, and merchant insights",
      "Integrated Firebase Authentication and Firestore with configurable mock vs live data",
      "Added English/Filipino internationalization and mobile-friendly navigation",
      "Deployed via GitHub → Vercel with secure VITE_* environment configuration",
    ],
  },
];

/** @deprecated Use FEATURED_PROJECTS[0] */
export const FLAGSHIP_PROJECT = FEATURED_PROJECTS[0];

export const SKILL_GROUPS = [
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
    ],
  },
  {
    title: "Database",
    skills: ["MongoDB", "Mongoose", "MongoDB Atlas", "Firestore"],
  },
  {
    title: "Security & Auth",
    skills: [
      "JWT",
      "bcryptjs",
      "TOTP 2FA",
      "OAuth (Google / Facebook)",
      "DOMPurify",
      "QR-code onboarding",
      "Role-based access",
    ],
  },
  {
    title: "Maps & Reporting",
    skills: [
      "Leaflet",
      "React-Leaflet",
      "Chart.js",
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
      "VS Code",
      "Multer",
      "Archiver",
      "Env-based config",
    ],
  },
  {
    title: "UI & Motion",
    skills: [
      "Framer Motion",
      "GSAP",
      "Three.js",
      "React Three Fiber",
      "Admin dashboards",
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
