'use client';

import Image from 'next/image';

const skills = [
    { src: "/skills-icons/node.svg", alt: "Node.js", label: "Node.js" },
    { src: "/skills-icons/react.svg", alt: "React", label: "React" },
    { src: "/skills-icons/next.svg", alt: "Next.js", label: "Next.js" },
    { src: "/skills-icons/tailwind-css.svg", alt: "Tailwind CSS", label: "Tailwind CSS" },
    { src: "/skills-icons/laravel.svg", alt: "Laravel", label: "Laravel" },
    { src: "/skills-icons/sass.svg", alt: "Sass", label: "Sass" },
    { src: "/skills-icons/sql.svg", alt: "SQL", label: "SQL" },
    { src: "/skills-icons/mongodb.svg", alt: "MongoDB", label: "MongoDB" },
    { src: "/skills-icons/github.svg", alt: "GitHub", label: "GitHub" },
    { src: "/skills-icons/docker.svg", alt: "Docker", label: "Docker" },
];

const MAX_VISIBLE = 6;

const SkillIcons = () => {
    const visibleSkills = skills.slice(0, MAX_VISIBLE);
    const hiddenSkills = skills.slice(MAX_VISIBLE);
    const remainingCount = hiddenSkills.length;

    return (
        <div className="flex py-2 mt-4">
            {visibleSkills.map((icon, index) => (
                <div
                    key={index}
                    className={`relative group ${index !== 0 ? '-ml-5' : ''} hover:z-50 transition-all z-10`}
                >
                    <a
                        href="#"
                        className="w-12 h-12 rounded-full border border-gray-200 flex justify-center items-center bg-white 
              shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] 
              transform hover:scale-110 transition-all duration-300 ease-out"
                    >
                        <Image src={icon.src} width={28} height={28} alt={icon.alt} />
                    </a>
                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 translate-y-1 
            px-3 py-1 bg-gray-900 text-white text-xs font-medium rounded-md 
            opacity-0 group-hover:opacity-100 group-hover:translate-y-0 
            transition-all duration-300 ease-in-out z-50 shadow-lg whitespace-nowrap">
                        {icon.label}
                    </div>
                </div>
            ))}

            {remainingCount > 0 && (
                <div className={`relative group -ml-5 hover:z-50 transition-all z-10`}>
                    <div
                        className="w-12 h-12 rounded-full border border-gray-200 flex justify-center items-center bg-white 
              shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] 
              transform hover:scale-110 transition-all duration-300 ease-out text-sm font-semibold"
                    >
                        +{remainingCount}
                    </div>
                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 translate-y-1 
            px-3 py-1 bg-gray-900 text-white text-xs font-medium rounded-md 
            opacity-0 group-hover:opacity-100 group-hover:translate-y-0 
            transition-all duration-300 ease-in-out z-50 shadow-lg whitespace-nowrap">
                        {hiddenSkills.map(skill => skill.label).join(', ')}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SkillIcons;
