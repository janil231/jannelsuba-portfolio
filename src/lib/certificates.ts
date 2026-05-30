import { CONTACT } from "./portfolio-data";

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issued?: string;
  description?: string;
  image: string;
  pdf?: string;
  href?: string;
}

export const CERTIFICATES: Certificate[] = [
  {
    id: "hour-of-ai-csta",
    title: "Hour of AI — Professional Development",
    issuer: "CSTA Philippines",
    issued: "November 26, 2025",
    description:
      "Certificate of participation for a 5-hour professional development session on AI in education.",
    image: "/certificates/Suba.jpg",
  },
  {
    id: "aws-ml-art-of-possible",
    title: "Introduction to Machine Learning: Art of the Possible",
    issuer: "AWS Training & Certification",
    issued: "May 02, 2026",
    description:
      "Completion certificate for foundational machine learning concepts on AWS.",
    image: "/certificates/4316bc33-1149-4193-ae77-7de8b95021b0.jpg",
    pdf: "/certificates/4316bc33-1149-4193-ae77-7de8b95021b0.pdf",
  },
  {
    id: "aws-ml-essentials",
    title: "Machine Learning Essentials for Business and Technical Decision Makers",
    issuer: "AWS Training & Certification",
    issued: "May 02, 2026",
    description:
      "Completion certificate focused on ML strategy for business and technical leaders.",
    image: "/certificates/719a70b1-4925-4de7-9b72-afce7d2c260f.jpg",
    pdf: "/certificates/719a70b1-4925-4de7-9b72-afce7d2c260f.pdf",
  },
  {
    id: "aws-ml-planning",
    title: "Planning a Machine Learning Project",
    issuer: "AWS Training & Certification",
    issued: "May 02, 2026",
    description:
      "Completion certificate covering ML project planning and lifecycle fundamentals.",
    image: "/certificates/a22a9d96-cf7f-4c88-8857-d9e65601a250.jpg",
    pdf: "/certificates/a22a9d96-cf7f-4c88-8857-d9e65601a250.pdf",
  },
  {
    id: "aws-ml-terminology",
    title: "Machine Learning Terminology and Process",
    issuer: "AWS Training & Certification",
    issued: "May 02, 2026",
    description:
      "Completion certificate on core machine learning terminology and workflow processes.",
    image: "/certificates/b5875d04-a710-4754-a905-5cb7482f33a3.jpg",
    pdf: "/certificates/b5875d04-a710-4754-a905-5cb7482f33a3.pdf",
  },
];

export const CREDLY_PROFILE_URL = CONTACT.credly;
