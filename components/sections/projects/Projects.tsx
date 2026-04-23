"use client";

import Link from "next/link";
import { motion, Variants } from "motion/react";
import { Project } from "@/types";

/* =========================
   UTIL
========================= */

const formatTitle = (t: string) =>
  t
    .replace(/[-_.]/g, " ")
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

/* =========================
   ANIMATION
========================= */

const container: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.3,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/* =========================
   DATA
========================= */

export const projects: Project[] = [
  {
    id: "proj_docsnepal",
    title: "DocsNepal",
    slug: "docsnepal",
    description:
      "DocsNepal: a document generator for Nepali legal and official documents (PDF/docx) — templates and API utilities.",
    content: null,
    link: "https://docsnepal.vercel.app/",
    github: null,
    image: null,
    tags: ["TypeScript", "PDF", "Docx"],
    featured: true,
    published: true,
    order: 1,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
  {
    id: "proj_portfolio_v3",
    title: "Portfolio v3",
    slug: "portfolio-v3",
    description:
      "Portfolio site built with Next.js & Tailwind showcasing work, skills and blog.",
    content: null,
    link: null,
    github: "https://github.com/pradipchaudhary/portfolio.v3",
    image: null,
    tags: ["Next.js", "TailwindCSS", "TypeScript"],
    featured: true,
    published: true,
    order: 2,
    createdAt: new Date("2024-01-02"),
    updatedAt: new Date("2024-01-02"),
  },
  {
    id: "proj_100_js",
    title: "100 JavaScript Projects",
    slug: "100-javascript-projects",
    description:
      "A curated collection of 100 practical JavaScript projects for learning and practice.",
    content: null,
    link: "https://100plusjs.vercel.app/",
    github: null,
    image: null,
    tags: ["JavaScript", "Learning", "Projects"],
    featured: false,
    published: true,
    order: 3,
    createdAt: new Date("2024-01-03"),
    updatedAt: new Date("2024-01-03"),
  },
  {
    id: "proj_jobfindingai",
    title: "JobFindingAI",
    slug: "jobfindingai",
    description:
      "AI-powered job finder using resume, skills and preferences.",
    content: null,
    link: null,
    github: "https://github.com/pradipchaudhary/jobfindingai",
    image: null,
    tags: ["AI", "Next.js", "OpenAI"],
    featured: true,
    published: true,
    order: 4,
    createdAt: new Date("2024-01-04"),
    updatedAt: new Date("2024-01-04"),
  },
];

/* =========================
   UI: TAG
========================= */

const Tag = ({ label }: { label: string }) => (
  <span className="text-xs italic px-1.5 text-[var(--foreground)]/50 group-hover:text-[var(--foreground)]/80 transition-colors">
    {label}
  </span>
);

/* =========================
   UI: CARD
========================= */

const ProjectCard = ({ project }: { project: Project }) => {
  const href = project.link || project.github || null;
  const isClickable = Boolean(href);

  return (
    <motion.a
      variants={item}
      {...(href
        ? {
          href,
          target: "_blank",
          rel: "noopener noreferrer",
        }
        : {})}
      className={`
    group relative rounded-xl p-5 overflow-hidden
    border border-[var(--foreground)]/10
    bg-[var(--background)]
    transition-all duration-300
    ${!href ? "opacity-60 pointer-events-none" : ""}
  `}
    >
      {/* hover glow */}
      <div
        className="
          pointer-events-none absolute inset-0 opacity-0
          group-hover:opacity-100 transition duration-500
          bg-gradient-to-r from-orange-50 to-orange-100
          dark:from-neutral-900 dark:to-neutral-800
        "
        style={{
          maskImage:
            "radial-gradient(300px at 150px 20px, white, transparent)",
        }}
      />

      {/* glow line */}
      <span className="absolute w-[40%] -bottom-px right-0 h-px bg-[var(--accent)]/30" />

      {/* content */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-2">
            {formatTitle(project.title)}
          </h3>

          <p className="text-sm leading-6 text-[var(--foreground)]/70">
            {project.description}
          </p>
        </div>

        {/* tags */}
        <div className="mt-4 flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </motion.a>
  );
};

/* =========================
   MAIN COMPONENT
========================= */

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="py-10 text-[var(--foreground)]"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <h2 className="text-3xl font-bold tracking-tight mb-8">
        Projects
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* SEE MORE */}
      <div className="flex justify-center mt-8">
        <Link
          href="/projects"
          className="
            flex items-center gap-1 text-sm font-medium
            hover:text-[var(--accent)]
            transition-colors
          "
        >
          See More
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </Link>
      </div>
    </motion.section>
  );
};

export default Projects;