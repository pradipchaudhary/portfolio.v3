"use client";
import React from "react";

// Skill type
interface Skill {
    name: string;
    icon: string;
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
        { name: "Docker", icon: "/img/docker-4.svg" },
        { name: "OpenAI", icon: "/img/openai-2.svg" },
    ];

    return (
        <section id="skills" className="py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-center bg-gradient-to-b from-black to-gray-800 text-transparent bg-clip-text tracking-tight">
                    Skills
                </h2>

                <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center bg-purple-100/20 hover:bg-purple-200/40 transition-all p-4 rounded-xl shadow-sm"
                        >
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                className="w-10 h-10 mb-2"
                            />
                            <span className="text-sm font-medium text-gray-800 text-center">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
