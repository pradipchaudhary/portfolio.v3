"use client";

import Link from "next/link";
import React from "react";

// Helper: format repo slug to readable title
const formatTitle = (t: string) =>
  t
    .replace(/[-_.]/g, " ")
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

const projects = [
  {
    title: "100-javascript-projects",
    description:
      "A curated collection of 100 practical JavaScript projects for learners — utilities, games, DOM practice and small apps.",
    tags: ["JavaScript", "Learning", "Projects"],
  },
  {
    title: "portfolio.v3",
    description:
      "This portfolio site (built with Next.js & Tailwind) showcasing my work, skills and blog — the code for this website.",
    tags: ["Next.js", "TailwindCSS", "TypeScript"],
  },
  {
    title: "docsnepal",
    description:
      "DocsNepal: a document generator for Nepali legal and official documents (PDF/docx) — templates and API utilities.",
    tags: ["TypeScript", "PDF", "Docx"],
  },
  {
    title: "nepcoin",
    description:
      "NepCoin: a decentralized digital token prototype built using blockchain concepts — focused on learning crypto fundamentals.",
    tags: ["Blockchain", "Crypto", "Learning"],
  },
  {
    title: "jobfindingai",
    description:
      "JobFindingAI: an AI-powered platform that helps users find jobs based on their resume, skills, and interests.",
    tags: ["AI", "Next.js", "OpenAI"],
  },
];

const Projects = () => {
  // show only first 4 projects
  const visibleProjects = projects.slice(0, 4);

  return (
    <section id="projects" className="max-w-4xl mx-auto py-10">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">
        Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {visibleProjects.map((project, index) => (
          <article
            key={index}
            className="group cursor-pointer flex flex-col justify-between border border-gray-200 rounded-lg p-4 transition-all duration-300 hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-50"
          >
            <div>
              <h3 className="text-base font-semibold text-gray-900">
                {formatTitle(project.title)}
              </h3>
              <p className="text-sm text-gray-700 mt-2">
                {project.description}
              </p>
            </div>

            <div className="mt-3">
              <div className="text-xs italic text-gray-500">
                {project.tags.join(", ")}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* See More Button */}
      <div className="flex justify-center mt-6 ">
        <Link
          href="/#"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 transition-colors duration-200"
        >
          See More
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
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

    </section>
  );
};

export default Projects;
