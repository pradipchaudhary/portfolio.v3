"use client";

import React from "react";

/* =========================
   Types
========================= */
type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
};

/* =========================
   Utils
========================= */
const formatTitle = (title: string): string =>
  title
    .replace(/[-_.]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

/* =========================
   Data
========================= */
const projects: Project[] = [
  {
    title: "docsnepal",
    description:
      "Document generator for Nepali legal and official documents with templates and export utilities.",
    tags: ["TypeScript", "PDF", "Docx"],
    link: "https://docsnepal.vercel.app/",
  },
  {
    title: "portfolio.v3",
    description:
      "Modern developer portfolio built with Next.js and Tailwind focused on performance and UI.",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    link: "https://github.com/pradipchaudhary/portfolio.v3",
  },
  {
    title: "100-javascript-projects",
    description:
      "Collection of 100 practical JavaScript projects for mastering DOM and logic building.",
    tags: ["JavaScript", "Learning"],
    link: "https://100plusjs.vercel.app/",
  },
  {
    title: "jobfindingai",
    description:
      "AI-powered job discovery platform based on resume, skills, and user intent.",
    tags: ["AI", "Next.js"],
    link: "https://jobfindingai.vercel.app/",
  },
  {
    title: "nepcoin",
    description:
      "Experimental blockchain-based token demonstrating decentralized concepts.",
    tags: ["Blockchain", "Crypto"],
    link: "https://nepcoin.vercel.app/",
  },
];

const upcomingIdeas: Project[] = [
  {
    title: "NepalGov360",
    description:
      "Central hub aggregating government notices, tenders, and updates.",
    tags: ["Scraping", "Next.js", "MongoDB"],
  },
  {
    title: "EV Nepal Live",
    description:
      "Live EV ecosystem dashboard for stations, pricing, and market insights.",
    tags: ["API", "Node.js"],
  },
  {
    title: "Book Chautari 2.0",
    description:
      "Interactive reading platform with community-driven discussions and reviews.",
    tags: ["Full Stack", "Community"],
  },
];

/* =========================
   UI Components
========================= */

const Tag = ({ label }: { label: string }) => (
  <span
    className="
      text-xs font-medium px-2.5 py-1 rounded-full
      bg-gray-100 text-gray-600
      dark:bg-zinc-800 dark:text-zinc-400
    "
  >
    {label}
  </span>
);

const ProjectCard = ({ project }: { project: Project }) => {
  const content = (
    <div
      className="
        relative group rounded-2xl p-6
        border border-gray-200 dark:border-zinc-800
        bg-white/70 dark:bg-zinc-900/60
        backdrop-blur-xl
        transition-all duration-300 ease-out

        hover:shadow-xl
        hover:border-gray-300 dark:hover:border-zinc-700
      "
    >
      {/* subtle gradient glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-transparent via-gray-200/20 to-transparent dark:via-zinc-700/20" />

      <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
        {formatTitle(project.title)}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
    </div>
  );

  if (!project.link) return content;

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${project.title}`}
      className="block"
    >
      {content}
    </a>
  );
};

const SectionHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="max-w-2xl">
    <h2 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
      {title}
    </h2>
    <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
      {description}
    </p>
  </div>
);

/* =========================
   Main Page
========================= */

export default function ProjectsPage() {
  return (
    <main className="py-20">
      <div className="space-y-24">

        {/* Projects */}
        <section className="space-y-10">
          <SectionHeader
            title="Projects"
            description="A collection of production systems, learning builds and experimental applications focused on scalable full-stack architecture and clean UI engineering."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        {/* Upcoming */}
        <section className="space-y-10">
          <SectionHeader
            title="Upcoming Ideas"
            description="Concepts currently under research and architectural planning."
          />

          <div className="space-y-6">
            {upcomingIdeas.map((idea) => (
              <div
                key={idea.title}
                className="
                  border border-gray-200 dark:border-zinc-800
                  rounded-xl p-5
                  bg-white/60 dark:bg-zinc-900/50
                  backdrop-blur
                "
              >
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {idea.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {idea.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {idea.tags.map((tag) => (
                    <Tag key={tag} label={tag} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}