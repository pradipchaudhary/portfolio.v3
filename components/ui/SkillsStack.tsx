"use client";

import { useState } from "react";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiDocker,
  // SiAmazonaws,
  SiTailwindcss,
  SiOpenai,
} from "react-icons/si";

type Skill = {
  name: string;
  icon: React.ReactNode;
  color: string; // color to show on hover
};

const skills: Skill[] = [
  { name: "JavaScript", icon: <SiJavascript size={16} />, color: "bg-yellow-400" },
  { name: "React", icon: <SiReact size={16} />, color: "bg-cyan-500" },
  { name: "Next.js", icon: <SiNextdotjs size={16} />, color: "bg-black" },
  { name: "TypeScript", icon: <SiTypescript size={16} />, color: "bg-blue-600" },
  { name: "Node.js", icon: <SiNodedotjs size={16} />, color: "bg-green-600" },
  { name: "MongoDB", icon: <SiMongodb size={16} />, color: "bg-emerald-600" },
  { name: "Docker", icon: <SiDocker size={16} />, color: "bg-blue-500" },
  // { name: "AWS", icon: <SiAmazonaws size={16} />, color: "bg-orange-400" },
  { name: "Tailwind", icon: <SiTailwindcss size={16} />, color: "bg-sky-400" },
  { name: "OpenAI", icon: <SiOpenai size={16} />, color: "bg-purple-600" },
];

const MAX_VISIBLE = 6;
const LIGHT_BG = "bg-neutral-100"; // default light background

export default function SkillsStack() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoverMore, setHoverMore] = useState(false);

  const visibleSkills = skills.slice(0, MAX_VISIBLE);
  const hiddenSkills = skills.slice(MAX_VISIBLE);

  return (
    <div className="flex items-center gap-6 relative">
      <div className="flex -space-x-5 relative">
        {/* Visible Skills */}
        {visibleSkills.map((skill, index) => {
          const isHovered = hoveredIndex === index;
          const zIndex = isHovered ? 50 : index;

          return (
            <div
              key={skill.name}
              title={skill.name}
              style={{ zIndex }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`
                relative h-10 w-10 flex items-center justify-center
                rounded-full border border-neutral-300 shadow-sm
                cursor-pointer transform-gpu transition-all duration-300
                ${isHovered ? `${skill.color} scale-125 shadow-lg` : LIGHT_BG}
              `}
            >
              <div className="relative z-10 text-gray-900">{skill.icon}</div>
            </div>
          );
        })}

        {/* +More Bubble */}
        {hiddenSkills.length > 0 && (
          <div
            onMouseEnter={() => setHoverMore(true)}
            onMouseLeave={() => setHoverMore(false)}
            style={{ zIndex: 100 }}
            title={`${hiddenSkills.length} more skills`}
            className={`
              relative h-10 w-10 flex items-center justify-center
              rounded-full border border-neutral-300 shadow-sm
              cursor-pointer transform-gpu transition-all duration-300
              text-gray-900 font-semibold
              ${hoverMore ? "scale-125 shadow-lg bg-blue-600" : LIGHT_BG}
            `}
          >
            +{hiddenSkills.length}

            {/* Hidden skills popup */}
            {hoverMore && (
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-lg p-3 text-sm min-w-[160px] z-50">
                {hiddenSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 mb-1 last:mb-0"
                  >
                    <div className={`h-4 w-4 rounded-full ${skill.color}`}></div>
                    <span className="text-neutral-800">{skill.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}