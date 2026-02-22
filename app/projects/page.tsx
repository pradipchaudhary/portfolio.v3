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
    link: "https://github.com/pradipchaudhary/100-javascript-projects",
  },
  {
    title: "jobfindingai",
    description:
      "AI-powered platform that helps users find jobs based on resume, skills and interests.",
    tags: ["AI", "Next.js"],
    link: "https://github.com/pradipchaudhary/jobfindingai",
  },
  {
    title: "nepcoin",
    description:
      "A decentralized digital token prototype built using blockchain concepts.",
    tags: ["Blockchain", "Crypto"],
    link: "https://github.com/pradipchaudhary/nepcoin",
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
    <main className="min-h-screen">
      <div className="max-w-5xl mx-auto px-2 py-16">

        {/* Header */}
        <div className="mb-14">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            Projects
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl leading-7">
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
              className="group border border-slate-200 rounded-xl p-6 transition-all duration-300 hover:shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {formatTitle(project.title)}
              </h3>

              <p className="text-gray-700 text-sm leading-6 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs italic text-gray-500 transition-colors duration-200 group-hover:text-gray-700 px-1.5"
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
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              Upcoming Project Ideas
            </h2>
            <p className="mt-3 text-gray-600 leading-7 max-w-2xl">
              Planned scalable platforms currently under research and architecture design phase.
            </p>
          </div>

          <div className="space-y-8">
            {upcomingIdeas.map((idea, index) => (
              <div
                key={index}
                className="border-l-4 border-orange-500 pl-6 py-2"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {idea.title}
                </h3>

                <p className="text-sm text-gray-600 leading-6 mb-3 max-w-3xl">
                  {idea.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {idea.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-orange-50 text-orange-600 rounded-md"
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