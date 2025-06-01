'use client';

import Image from 'next/image';

const skills = [
    { src: "/skills-icons/node.svg", alt: "Node.js", label: "Node" },
    { src: "/skills-icons/react.svg", alt: "React", label: "React" },
    { src: "/skills-icons/next.svg", alt: "Next.js", label: "Next.js" },
    { src: "/skills-icons/tailwind-css.svg", alt: "Tailwind CSS", label: "TailwindCSS" },
];

const SkillIcons = () => {
    return (
        <div className="flex py-2 mt-4">
            {skills.map((icon, index) => (
                <div
                    key={index}
                    className={`relative group ${index !== 0 ? '-ml-4' : ''} z-${index * 10} hover:z-50 transition-all`}
                >
                    <a
                        href="#"
                        className="w-12 h-12 rounded-full border border-gray-200 flex justify-center items-center bg-white 
            shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] 
            transform hover:scale-110 transition-all duration-300 ease-out"
                    >
                        <Image
                            src={icon.src}
                            width={28}
                            height={28}
                            alt={icon.alt}
                        />
                    </a>
                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 translate-y-1 
          px-3 py-1 bg-gray-900 text-white text-xs font-medium rounded-md 
          opacity-0 group-hover:opacity-100 group-hover:translate-y-0 
          transition-all duration-300 ease-in-out z-50 shadow-lg">
                        {icon.label}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkillIcons;
