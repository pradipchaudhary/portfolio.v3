"use client";

import Link from "next/link";
import { motion } from "motion/react";
import ProjectCard from "./ProjectCard";
import { maincontainer } from "@/lib/animations";
import { projects } from "@/data/projects";
import Section from "@/components/layout/Section";

/* =========================
   MAIN COMPONENT
========================= */

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="py-10 text-[var(--foreground)]"
      variants={maincontainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <h2 className="text-3xl font-bold tracking-tight mb-8">Projects</h2>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* SEE MORE */}
      <div className="flex justify-center mt-10">
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
