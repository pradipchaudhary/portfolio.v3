"use client";

import React from "react";
import { Hash } from "lucide-react";

const skills = [
  "JavaScript",
  "React",
  "NextJS",
  "TypeScript",
  "NodeJS",
  "PHP",
  "TailwindCSS",
  "Redux",
  "ExpressJS",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "REST",
  "Git",
  "Docker",
  "WordPress",
  "OpenAI",
  "HTML",
  "CSS",
];

const Skills = () => {
  return (
    <section id="skills" className="max-w-3xl mx-auto py-12">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
        Skills
      </h2>

      {/* Skills Tags */}
      <div className="flex flex-wrap gap-x-1.5 gap-y-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="inline-flex items-center text-[15px] text-gray-600 hover:text-gray-900 
                     transition-colors duration-200"
          >
            <Hash className="w-3.5 h-3.5 text-gray-400 mr-0.5" />
            {skill}{index < skills.length - 1 ? "" : ""}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
