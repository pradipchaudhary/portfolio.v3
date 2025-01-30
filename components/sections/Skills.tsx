"use client";
import React from "react";

// Skill type with optional icon and proficiency
interface Skill {
    name: string;
    icon: string; // Optional icon for the skill
}

// Main Skills component
const Skills: React.FC = () => {
    const skills: Skill[] = [
        { name: "JavaScript", icon: "/img/javascript.svg" },
        { name: "TypeScript", icon: "/img/typescript.svg" },
        { name: "React.js", icon: "/img/react-2.svg" },
        { name: "Node.js", icon: "/img/nodejs-icon.svg" },
        { name: "PHP", icon: "/img/php.svg" },
        { name: "MySQL", icon: "/img/mysql-logo-pure.svg" },
        { name: "PostgreSQL", icon: "/img/postgresql.svg" },
        { name: "Next.js", icon: "/img/next-js.svg" },
        { name: "Prisma", icon: "/img/prisma.svg" },
        { name: "WordPress", icon: "/img/wordpress-icon.svg" },
        { name: "MongoDB", icon: "/img/mongodb-icon-1.svg" },
        { name: "Git", icon: "/img/git-icon.svg" },
        // { name: "CI/CD" },
        { name: "Docker", icon: "/img/docker-4.svg" },
        // { name: "Github Action" },
        { name: "OpenAI", icon: "/img/openai-2.svg" },
    ];

    return (
        <section className="py-8" id="skills">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-b from-[#8c95e4] to-[#292450]/80 text-transparent bg-clip-text  tracking-tight ">
                Skills
            </h2>
            <div className="flex flex-wrap gap-4 mt-10  ml-3">
                {skills.map((skill, index) => (
                    <div key={index} className="flex items-center justify-center">
                        <span className="py-1 px-3 bg-[#6f49d8]/10 text-s">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
