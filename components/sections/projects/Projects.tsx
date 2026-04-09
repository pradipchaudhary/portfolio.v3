"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

// Format title utility
const formatTitle = (t: string) =>
  t
    .replace(/[-_.]/g, " ")
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

// Main container animation only
const container = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.8, // slight delay after About
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

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
      "This portfolio site (built with Next.js & Tailwind) showcasing my work, skills and blog — the code for this website.",
    tags: ["Next.js", "TailwindCSS", "TypeScript"],
    link: "https://github.com/pradipchaudhary/portfolio.v3",
  },
  {
    title: "100-javascript-projects",
    description:
      "A curated collection of 100 practical JavaScript projects for learners — utilities, games, DOM practice and small apps.",
    tags: ["JavaScript", "Learning", "Projects"],
    link: "https://100plusjs.vercel.app/",
  },
  {
    title: "jobfindingai",
    description:
      "JobFindingAI: an AI-powered platform that helps users find jobs based on their resume, skills, and interests.",
    tags: ["AI", "Next.js", "OpenAI"],
    link: "https://github.com/pradipchaudhary/jobfindingai",
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="py-10"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">
        Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative border border-slate-200 rounded-xl p-5 bg-white transition-all duration-300 cursor-pointer overflow-hidden"
          >
            {/* Hover Gradient */}
            <div
              className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-r from-orange-50 to-orange-100"
              style={{
                maskImage:
                  "radial-gradient(300px at 150px 20px, white, transparent)",
              }}
            />

            {/* Glow Lines */}
            <span className="absolute w-[40%] -bottom-px right-px h-px bg-gradient-to-r from-orange-400/0 via-orange-400/40 to-orange-400/0"></span>
            <span className="absolute w-px -left-px top-[50%] h-[40%] bg-gradient-to-b from-orange-400/0 via-orange-400/40 to-orange-400/0"></span>

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {formatTitle(project.title)}
                </h3>
                <p className="text-sm text-gray-700 leading-6">
                  {project.description}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs italic text-gray-500 transition-colors duration-200 group-hover:text-gray-700 px-1.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* See More */}
      <div className="flex justify-center mt-6">
        <Link
          href="/projects"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 transition-colors duration-200 hover:text-gray-700"
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
    </motion.section>
  );
};

export default Projects;