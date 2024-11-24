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
            <h2 className="text-2xl font-bold text-gray-400">
                📜 Certifications
            </h2>
            <div className="relative border-l border-gray-600 pl-6 ml-4 pt-10">
                {certificationsData.map((item, index) => (
                    <div
                        key={index}
                        className={`mb-8 relative fade-up fade-up-delayed-${index}`}
                    >
                        {/* Timeline Bullet */}
                        <div className="w-[.75rem] h-[.75rem] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full absolute top-[.4rem] left-[-1.94rem] transform animate-beat"></div>
                        <div className="w-[.75rem] h-[.75rem] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full absolute top-[.4rem] left-[-1.94rem] transform animate-echo"></div>

                        {/* Year */}
                        <h6 className="text-lg font-semibold text-gray-300 mb-4">
                            {item.year}
                        </h6>

                        {/* Certifications */}
                        <ul className="list-disc ml-6 space-y-2">
                            {item.certifications.map(
                                (certification, certIndex) => (
                                    <li key={certIndex} className="text-sm">
                                        {certification}
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
