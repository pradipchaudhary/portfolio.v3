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
        <section className="px-4 py-8 bg-gray-900 text-gray-200 rounded-md">
            <h4 className="text-xl font-bold mb-6">Certifications:</h4>
            {certificationsData.map((item, index) => (
                <div key={index} className="mb-4">
                    <h6 className="text-lg font-semibold text-teal-400 mb-2">
                        <strong>{item.year}:</strong>
                    </h6>
                    <ul className="list-disc ml-6 space-y-2">
                        {item.certifications.map((certification, certIndex) => (
                            <li key={certIndex} className="text-sm">
                                {certification}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
};

export default Certifications;
