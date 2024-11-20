// components/Skills.tsx

import React from "react";
import SkillsSection from "./SkillsSection";

const Skills: React.FC = () => {
    const experiencedSkills = [
        "JavaScript",
        "TypeScript",
        "React",
        "Node",
        "GraphQL",
        "PHP",
        "SQL",
        "WordPress",
        "MongoDB",
        "AWS",
        "Git",
        "Linux",
        "Test Driven Development",
        "Agile Tool (Jira)",
        "CI / CD with GitHub Actions",
    ];

    const familiarSkills = [
        "Docker",
        "Gatsby",
        "Storybook",
        "Java",
        "C++",
        "Node CMS (Strapi & Storyblok)",
        "Serverless",
    ];

    return (
        <div className="min-h-screen text-gray-300 py-10 ">
            <div className="w-full">
                <h2 className="text-3xl font-bold text-gray-400 mb-10 ">
                    🛠️ Languages and Tools:
                </h2>
                <SkillsSection title="Experienced" skills={experiencedSkills} />
                <SkillsSection title="Familiar" skills={familiarSkills} />
            </div>
        </div>
    );
};

export default Skills;
