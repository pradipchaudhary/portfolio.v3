import React from "react";

interface SkillsSectionProps {
    title: string;
    skills: string[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ title, skills }) => {
    return (
        <div className="mb-12 relative fade-up">
            {/* Timeline Bullet */}
            <div className="w-[.75rem] h-[.75rem] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full absolute top-[.4rem] left-[-1.94rem] transform animate-beat"></div>
            <div className="w-[.75rem] h-[.75rem] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full absolute top-[.4rem] left-[-1.94rem] transform animate-echo"></div>

            {/* Section Title */}
            <h3 className="text-xl font-semibold text-gray-300 mb-6">
                {title}
            </h3>

            {/* Skills List as 3 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ml-5">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className={`text-sm relative fade-up fade-up-delayed-${index} hover:cursor-pointer hover:text-[#6743CD]`}
                    >
                        {/* Nested Bullet */}
                        <div className="w-[.5rem] h-[.5rem] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full absolute top-[.2rem] left-[-1.2rem]"></div>
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    );
};

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
        "JavaScript",
        "C++",
        "Node CMS (Strapi & Storyblok)",
        "Serverless",
    ];

    return (
        <section id="skills" className="py-10">
            <h2 className="text-3xl font-bold text-gray-400 ">🛠️ Skills</h2>
            <div className="relative border-l border-gray-600 pl-6 ml-4 pt-10">
                {/* Experienced Skills Timeline */}
                <SkillsSection title="Experienced" skills={experiencedSkills} />

                {/* Familiar Skills Timeline */}
                <SkillsSection title="Familiar" skills={familiarSkills} />
            </div>
        </section>
    );
};

export default Skills;
