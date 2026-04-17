"use client";

import React from "react";

const formatTitle = (t: string) =>
  t
    .replace(/[-_.]/g, " ")
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

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
      "This portfolio site (built with Next.js & Tailwind) showcasing my work, skills and blog.",
    tags: ["Next.js", "TailwindCSS", "TypeScript"],
    link: "https://github.com/pradipchaudhary/portfolio.v3",
  },
  {
    title: "100-javascript-projects",
    description:
      "A curated collection of 100 practical JavaScript projects for learners — utilities, games and DOM practice apps.",
    tags: ["JavaScript", "Learning"],
    link: "https://100plusjs.vercel.app/",
  },
  {
    title: "jobfindingai",
    description:
      "AI-powered platform that helps users find jobs based on resume, skills and interests.",
    tags: ["AI", "Next.js"],
    link: "https://jobfindingai.vercel.app/",
  },
  {
    title: "nepcoin",
    description:
      "A decentralized digital token prototype built using blockchain concepts.",
    tags: ["Blockchain", "Crypto"],
    link: "https://nepcoin.vercel.app/",
  },
];

const upcomingIdeas = [
  {
    title: "NepalGov360",
    description:
      "Centralized platform aggregating Nepal government notices, tenders, policies and updates with smart categorization.",
    tags: ["Scraping", "Next.js", "MongoDB"],
  },
  {
    title: "EV Nepal Live",
    description:
      "Real-time EV ecosystem platform displaying charging stations, brands, pricing and EV-related news.",
    tags: ["API", "Node.js"],
  },
  {
    title: "Book Chautari 2.0",
    description:
      "Community-driven digital reading platform with reviews, ratings and interactive discussions.",
    tags: ["Full Stack", "Community"],
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <div className="py-18">

        {/* Header */}
        <div className="mb-14">
          <h1 className="text-4xl font-bold tracking-tight
            text-gray-900 dark:text-white">
            Projects
          </h1>

          <p className="mt-4 max-w-2xl leading-7
            text-gray-600 dark:text-gray-400">
            A collection of production systems, learning builds and experimental
            applications focused on scalable full-stack architecture and clean UI engineering.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group rounded-xl p-6 transition-all duration-300
                border border-slate-200 dark:border-zinc-800
                bg-white dark:bg-zinc-900/40
                hover:shadow-sm hover:border-slate-300
                dark:hover:border-zinc-700 dark:hover:bg-zinc-900
              "
            >
              <h3 className="text-xl font-semibold mb-3
                text-gray-900 dark:text-gray-100">
                {formatTitle(project.title)}
              </h3>

              <p className="text-sm leading-6 mb-4
                text-gray-700 dark:text-gray-400">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="
                      text-xs italic px-1.5 transition-colors duration-200
                      text-gray-500 dark:text-gray-500
                      group-hover:text-gray-700 dark:group-hover:text-gray-300
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        {/* Upcoming Section */}
        <section className="mt-24">
          <div className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight
              text-gray-900 dark:text-white">
              Upcoming Project Ideas
            </h2>

            <p className="mt-3 max-w-2xl leading-7
              text-gray-600 dark:text-gray-400">
              Planned scalable platforms currently under research and architecture design phase.
            </p>
          </div>

          <div className="space-y-8">
            {upcomingIdeas.map((idea, index) => (
              <div
                key={index}
                className="
                  border-l-4 pl-6 py-2
                  border-orange-500 dark:border-orange-400
                "
              >
                <h3 className="text-lg font-semibold mb-2
                  text-gray-900 dark:text-gray-100">
                  {idea.title}
                </h3>

                <p className="text-sm leading-6 mb-3 max-w-3xl
                  text-gray-600 dark:text-gray-400">
                  {idea.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {idea.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="
                        text-xs px-2 py-1 rounded-md
                        bg-orange-50 text-orange-600
                        dark:bg-orange-500/10 dark:text-orange-300
                      "
                    >
                      {tag}
                    </span>
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