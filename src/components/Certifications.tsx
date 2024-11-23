import React from "react";

interface CertificationItem {
    year: string;
    certifications: string[];
}

const certificationsData: CertificationItem[] = [
    {
        year: "2020",
        certifications: [
            "Passed JavaScript LinkedIn Assessment & listed on top 15% of total users.",
            "Passed PHP LinkedIn Assessment & listed on top 5% of total users.",
            "Scored 92 / 100 in JavaScript code verification in Hacker Rank.",
        ],
    },
    {
        year: "2019",
        certifications: [
            "JavaScript Expert Verified by Pluralsight IQ with 212 score.",
            "CSS Expert Verified by Pluralsight IQ with 218 score.",
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
