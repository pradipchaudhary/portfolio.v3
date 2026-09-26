"use client";

import { useState } from "react";
import { Workflow } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { item, tooltipVariants } from "@/lib/animations";
import { skills } from "@/data/skills";

// Main container animation only

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.section
      id="skills"
      className="py-18 relative text-foreground dark:text-gray-100"
      variants={item}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
        Skills
      </h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span className="inline-flex items-center gap-1.5 text-sm cursor-pointer text-gray-600 dark:text-gray-400 hover:text-blue-700 italic">
              #{skill.name}
            </span>

            {/* Animated Tooltip */}
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={tooltipVariants}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-full left-0  mb-3 w-72 z-50"
                >
                  <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.12)] border border-neutral-100 dark:border-neutral-800 backdrop-blur-xl relative px-4 py-4 pb-10">
                    {/* Arrow pointing down on left side */}

                    <div
                      className="absolute -bottom-1.5 left-6 w-3 h-3 bg-white dark:bg-neutral-900 border-b border-r border-neutral-100 dark:border-neutral-800 rotate-45"
                      // style={{ left: "10px" }} // fixed to left side
                    />

                    {/* Icon + Name + Description */}
                    <div className="flex items-center gap-3 mb-3 border-b border-neutral-100 dark:border-neutral-800 pb-2">
                      <div>{skill.icon}</div>

                      <div className="flex-1">
                        <h3 className="text-md font-semibold text-foreground">
                          {skill.name}
                        </h3>
                        <p className="text-[12px] text-gray-500 -mt-0.5 leading-tight">
                          {skill.description}
                        </p>
                      </div>
                    </div>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-1.5 mt-6">
                      {skill.topics.map((topic, i) => (
                        <span
                          key={i}
                          className="leading-5 mb-2  bg-foreground/[0.03] text-foreground/60 hover:text-blue-700 cursor-pointer  rounded-md text-xs italic  mr-2 px-1"
                        >
                          #{topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
