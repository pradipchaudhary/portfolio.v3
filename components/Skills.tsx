"use client";

import React from "react";
import { Hash } from "lucide-react";

const skills = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Node.js",
  "PHP",
  "MySQL",
  "PostgreSQL",
  "Next.js",
  "Prisma",
  "WordPress",
  "MongoDB",
  "Git",
  "Docker",
  "OpenAI",
];

const Skills = () => {
  return (
    <section id="skills" className="max-w-3xl mx-auto pt-10 pb-10">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
        Skills
      </h2>

      {/* Skills Grid */}
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="flex items-center px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium italic shadow-sm hover:bg-gray-200 transition-colors duration-150"
          >
            <Hash className="w-3.5 h-3.5" />
            {skill}
          </span>

        ))}
      </div>
    </section>
  );
};

export default Skills;
