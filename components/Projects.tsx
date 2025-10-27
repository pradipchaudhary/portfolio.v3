"use client";

import React from "react";
// no icon imports required for minimal cards

// Helper: format repo slug to readable title
const formatTitle = (t: string) =>
  t.replace(/[-_.]/g, " ")
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

const projects = [
  {
    title: "100-javascript-projects",
    description: "A curated collection of 100 practical JavaScript projects for learners — utilities, games, DOM practice and small apps.",
    tags: ["JavaScript", "Learning", "Projects"],
    github: "https://github.com/pradipchaudhary/100-javascript-projects",
    liveUrl: "",
  },
  {
    title: "portfolio.v3",
    description: "This portfolio site (built with Next.js & Tailwind) showcasing my work, skills and blog — the code for this website.",
    tags: ["Next.js", "TailwindCSS", "TypeScript"],
    github: "https://github.com/pradipchaudhary/portfolio.v3",
    liveUrl: "",
  },
  {
    title: "ainepal",
    description: "A suite of AI tools tailored for Nepali users — language tools, OCR and content helpers built with modern JS stacks.",
    tags: ["AI", "Next.js", "OpenAI"],
    github: "https://github.com/pradipchaudhary/ainepal",
    liveUrl: "",
  },
  {
    title: "docsnepal",
    description: "DocsNepal: a document generator for Nepali legal and official documents (PDF/docx) — templates and API utilities.",
    tags: ["TypeScript", "PDF", "Docx"],
    github: "https://github.com/pradipchaudhary/docsnepal",
    liveUrl: "",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="max-w-4xl mx-auto py-16">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">
        Projects
      </h2>

      {/* Projects Grid: 1 column on small, 2 columns on md+ to show two cards per row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <article
            key={index}
            className="group flex flex-col justify-between bg-gradient-to-r from-red-50 to-white rounded-lg p-4 border border-gray-100 transition-colors duration-200"
          >
            <div>
              <h3 className="text-base font-semibold text-gray-900">{formatTitle(project.title)}</h3>

              <p className="text-sm text-gray-700 mt-2">{project.description}</p>
            </div>

            <div className="mt-3">
              <div className="text-xs italic text-gray-500">{project.tags.join(", ")}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;