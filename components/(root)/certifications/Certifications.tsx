import React from "react";

interface CertificationItem {
    year: string;
    certifications: string[];
}

const certificationsData: CertificationItem[] = [
    {
        year: "2024",
        certifications: [
            "Completed the 'Complete Full Stack Web Development – MERN Stack' course at Deerwalk Training Center.",
            "Graduated from the 'Full Stack Next.js Bootcamp' organized by Jobsnipper.",
            "Successfully completed the 'Custom WordPress Theme Development Bootcamp' hosted by Jobsnipper.",
        ],
    },
    {
        year: "2020",
        certifications: [
            "Achieved top 15% ranking in the JavaScript LinkedIn Assessment.",
            "Ranked in the top 5% of participants in the PHP LinkedIn Assessment.",
            "Scored 92/100 in the JavaScript Code Verification on HackerRank.",
        ],
    },

    {
        year: "2018",
        certifications: ["HTML and CSS Certification from TemplateMonster.com"],
    },
    {
        year: "2017",
        certifications: [
            "Earned 'JavaScript Expert' status with a score of 212 on Pluralsight IQ.",
            "Achieved 'CSS Expert' verification with a score of 218 on Pluralsight IQ.",
        ],
    },
    {
        year: "2016",
        certifications: [
            "Diploma in Computer Engineering, accredited by CTEVT (Council for Technical Education and Vocational Training).",
        ],
    },
];

const Certifications: React.FC = () => {
    return (
        <section id="certifications" className="py-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-400">
                📜 Certifications
            </h2>
            <div className="relative border-l border-gray-600 pl-6 ml-[1.4rem] pt-10">
                {certificationsData.map((item, index) => (
                    <div
                        key={index}
                        className={`mb-8 relative fade-up fade-up-delayed-${index}`}
                    >
                        {/* Timeline Bullet */}
                        <div className="absolute left-[-31.5px] top-[.25rem] sm:top-[.55rem] h-3 w-3">
                            <div className="h-full w-full rounded-full bg-[#6f49d8] ring-[6px] ring-[#6f49d8]/10" />
                        </div>

                        {/* Year */}
                        <h6 className="text-lg sm:text-xl font-bold text-slate-500 mb-2">
                            {item.year}
                        </h6>

                        {/* Certifications */}
                        <ul className="space-y-2">
                            {item.certifications.map(
                                (certification, certIndex) => (
                                    <li
                                        key={certIndex}
                                        className="flex items-start gap-2 mb-2 text-xs sm:text-sm text-slate-500 leading-relaxed group-hover:text-slate-400"
                                    >
                                        <span className="text-slate-500">
                                            #
                                        </span>
                                        <span>{certification}</span>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
