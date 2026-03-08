"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiDocker,
  SiTailwindcss,
  SiOpenai,
} from "react-icons/si";

type Skill = {
  name: string;
  icon: React.ReactElement;
  color: string; // primary color
};

const skills: Skill[] = [
  { name: "JavaScript", icon: <SiJavascript />, color: "#FACC15" },
  { name: "React", icon: <SiReact />, color: "#06B6D4" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#2563EB" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "#16A34A" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#059669" },
  { name: "Docker", icon: <SiDocker />, color: "#3B82F6" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#38BDF8" },
  { name: "OpenAI", icon: <SiOpenai />, color: "#7C3AED" },
];

const MAX_VISIBLE = 6;

export default function SkillsStack() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoverMore, setHoverMore] = useState(false);
  const [hoverItemIndex, setHoverItemIndex] = useState<number | null>(null);

  const visibleSkills = skills.slice(0, MAX_VISIBLE);
  const hiddenSkills = skills.slice(MAX_VISIBLE);

  return (
    <div className="flex items-center gap-5 relative">
      <div className="flex -space-x-6 relative">
        {/* Visible Skills */}
        {visibleSkills.map((skill, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <motion.div
              key={skill.name}
              layout
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              animate={{
                y: isHovered ? -12 : 0,
                scale: isHovered ? 1.15 : 1,
                zIndex: isHovered ? 50 : index,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative"
            >
              <div
                title={skill.name}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 shadow-md cursor-pointer transition-all duration-300"
                style={{
                  backgroundColor: isHovered ? skill.color : "#fff",
                  color: isHovered ? "#fff" : skill.color,
                }}
              >
                {React.cloneElement(skill.icon, {
                  color: isHovered ? "#fff" : skill.color,
                  size: 18,
                })}
              </div>
            </motion.div>
          );
        })}

        {/* +More Bubble */}
        {hiddenSkills.length > 0 && (
          <div
            className="relative z-50"
            onMouseEnter={() => setHoverMore(true)}
            onMouseLeave={() => {
              setHoverMore(false);
              setHoverItemIndex(null);
            }}
          >
            <motion.div
              layout
              animate={{
                scale: hoverMore ? 1.15 : 1,
                y: hoverMore ? -12 : 0,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="h-11 w-11 flex items-center justify-center rounded-full border border-neutral-200 shadow-md cursor-pointer bg-neutral-100 font-semibold text-black"
            >
              +{hiddenSkills.length}
            </motion.div>

            {/* Hidden skills popup (appear above +More) */}
            {hoverMore && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white shadow-xl rounded-lg p-3 text-sm min-w-[180px] z-50"
              >
                {hiddenSkills.map((skill, index) => {
                  const isItemHovered = hoverItemIndex === index;
                  return (
                    <div
                      key={skill.name}
                      onMouseEnter={() => setHoverItemIndex(index)}
                      onMouseLeave={() => setHoverItemIndex(null)}
                      className="flex items-center gap-2 mb-1 last:mb-0 cursor-pointer p-1 rounded transition-all duration-200"
                    >
                      {/* Icon container changes color on hover */}
                      <div
                        className="h-6 w-6 flex items-center justify-center rounded-full transition-all duration-200"
                        style={{
                          backgroundColor: isItemHovered ? skill.color : "#F3F4F6",
                        }}
                      >
                        {React.cloneElement(skill.icon, {
                          color: isItemHovered ? "#fff" : skill.color,
                          size: 16,
                        })}
                      </div>
                      <span className="text-black">{skill.name}</span>
                    </div>
                  );
                })}
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}