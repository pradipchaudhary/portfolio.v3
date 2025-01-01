"use client";
import React from "react";

// Skill type with optional icon and proficiency
interface Skill {
    name: string;
    icon?: string; // Optional icon for the skill
}

// Main Skills component
const Skills: React.FC = () => {
    const skills: Skill[] = [
        { name: "JavaScript", icon: "/path/to/js-icon.png" },
        { name: "TypeScript" },
        { name: "React.js", icon: "/path/to/react-icon.png" },
        { name: "Node.js" },
        { name: "PHP" },
        { name: "MySQL" },
        { name: "PostgreSQL" },
        { name: "Next.js" },
        { name: "Prisma" },
        { name: "WordPress" },
        { name: "MongoDB" },
        { name: "Git" },
        { name: "CI/CD" },
        { name: "Docker" },
        { name: "Github Action" },
    ];

    return (
        <section className="py-8" id="skills">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-400 mb-6">
                🛠️ Skills
            </h2>
            <div className="flex flex-wrap gap-4 mt-10 ml-10">
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="flex items-center cursor-pointer gap-2 px-4 min-w-[80px] py-[.4rem] mb-2 border border-dotted border-[#2b275e] rounded-full text-sm text-slate-500 relative overflow-hidden hover:border-solid hover:animate-border"
                    >
                        <span className="absolute inset-0 border border-transparent transition-all duration-300 ease-linear rounded-full hover:border-[#2b275e]"></span>
                        # {skill.name}
                    </span>
                ))}
            </div>
        </section>
    );
};

export default Skills;
