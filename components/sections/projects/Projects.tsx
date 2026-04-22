"use client";

import Link from "next/link";
import { motion, Variants } from "motion/react";

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
      delay: 0.6,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
    },
  },
};

/* =========================
   DATA
========================= */

const projects = [
  {
    title: "docsnepal",
    description:
      "DocsNepal: a document generator for Nepali legal and official documents (PDF/docx) — templates and API utilities.",
    tags: ["TypeScript", "PDF", "Docx"],
    link: "https://docsnepal.vercel.app/",
  },
  {
    title: "portfolio.v3",
    description:
      "Portfolio site built with Next.js & Tailwind showcasing work, skills and blog.",
    tags: ["Next.js", "TailwindCSS", "TypeScript"],
    link: "https://github.com/pradipchaudhary/portfolio.v3",
  },
  {
    title: "100-javascript-projects",
    description:
      "A curated collection of 100 practical JavaScript projects for learning and practice.",
    tags: ["JavaScript", "Learning", "Projects"],
    link: "https://100plusjs.vercel.app/",
  },
  {
    title: "jobfindingai",
    description:
      "AI-powered job finder using resume, skills and preferences.",
    tags: ["AI", "Next.js", "OpenAI"],
    link: "https://github.com/pradipchaudhary/jobfindingai",
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

const ProjectCard = ({
  project,
}: {
  project: (typeof projects)[number];
}) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group relative rounded-xl p-5 overflow-hidden
        border border-[var(--foreground)]/10
        bg-[var(--background)]
        transition-all duration-300
      "
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

      {/* glow line bottom */}
      <span className="absolute w-[40%] -bottom-px right-0 h-px bg-[var(--accent)]/30" />

      {/* content */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
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
    </a>
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
      <h2 className="text-3xl font-bold tracking-tight mb-8 text-[var(--foreground)]">
        Projects
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {/* SEE MORE */}
      <div className="flex justify-center mt-8">
        <Link
          href="/projects"
          className="
            flex items-center gap-1 text-sm font-medium
            text-[var(--foreground)]
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