"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Project data
const projects = [
  {
    title: "100-javascript-projects",
    description:
      "A curated collection of 100 practical JavaScript projects for learners — utilities, games, DOM practice and small apps.",
    tags: ["JavaScript", "Learning", "Projects"],
    image: "/projects/js-projects.png",
    github: "https://github.com/pradipchaudhary/100-javascript-projects",
    demo: "https://100-js-projects.vercel.app",
  },
  {
    title: "DocsNepal",
    description:
      "DocsNepal: a document generator for Nepali legal and official documents (PDF/docx) — templates and API utilities.",
    tags: ["TypeScript", "PDF", "Docx"],
    image: "/projects/docsnepal.png",
    github: "https://github.com/pradipchaudhary/docsnepal",
    demo: "https://docsnepal.com",
  },

  {
    title: "JobFindingAI",
    description:
      "JobFindingAI: an AI-powered platform that helps users find jobs based on their resume, skills, and interests.",
    tags: ["AI", "Next.js", "OpenAI"],
    image: "/projects/jobfindingai.png",
    github: "https://github.com/pradipchaudhary/jobfindingai",
    demo: "https://jobfindingai.vercel.app",
  },
  {
    title: "Portfolio v3",
    description:
      "My personal portfolio built with Next.js 14, TypeScript, and Tailwind CSS. Features a clean, minimal design with dark mode support.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    image: "/projects/portfolio.png",
    github: "https://github.com/pradipchaudhary/portfolio.v3",
    demo: "https://pradipchaudhary.com.np",
  },
];

const ProjectsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      {/* Header */}
      <header className="mb-10 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">Projects</h1>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed">
          A collection of my work, side projects, and open-source contributions — focused on building performant, accessible, and user-friendly applications.
        </p>
      </header>

      {/* Projects Grid */}
      <div className="space-y-6">
        {projects.map((project, index) => (
          <article
            key={index}
            className="group flex flex-col bg-white rounded-lg overflow-hidden border border-gray-200/80 transition-all duration-300 hover:border-gray-300 hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-0.5"
          >
            {/* Project Image */}
            <div className="relative h-64 md:h-72 overflow-hidden bg-gray-50">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="100vw"
              />
            </div>

            {/* Content */}
            <div className="flex-1 p-6 md:p-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-800">
                {project.title}
              </h2>
              <p className="text-gray-600 text-[15px] mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-[13px] bg-gray-50 text-gray-600 rounded-full border border-gray-100 group-hover:border-gray-200 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-6 mt-auto pt-4 border-t border-gray-100">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 inline-flex items-center gap-1 transition-colors group"
                >
                  <svg className="w-4 h-4 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  Source
                </Link>
                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 transition-colors"
                >
                  Live Demo
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;