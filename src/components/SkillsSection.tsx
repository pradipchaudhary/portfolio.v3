import React from "react";

interface SkillProps {
    title: string;
    skills: string[];
}

const SkillsSection: React.FC<SkillProps> = ({ title, skills }) => {
    return (
        <div className="mb-10 ml-10">
            <h3 className="text-xl font-bold text-slate-400 mb-6 pb-2 tracking-wide">
                {title}
            </h3>

            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                {skills.map((skill, index) => (
                    <li
                        key={index}
                        className="group relative border-[1.5px] border-dashed border-[#25396ccf] text-[#4299e1] rounded-full text-xs font-medium leading-5 px-4 py-2 shadow-sm transition-all duration-300 hover:border-[#4299e1] hover:text-[#4299e1] hover:shadow-lg hover:pl-[2.15rem] cursor-pointer"
                    >
                        {/* Animation Divs, shown only on hover */}
                        <div className="absolute left-5 top-2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-[.65rem] h-[.65rem] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full absolute top-[.2rem] left-[-6px] transform animate-beat"></div>
                            <div className="w-[.65rem] h-[.65rem] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full absolute top-[.2rem] left-[-6px] transform animate-echo"></div>
                        </div>
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillsSection;
