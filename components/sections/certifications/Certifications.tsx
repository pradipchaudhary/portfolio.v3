"use client";

import React from "react";
import { Hash } from "lucide-react";

const certifications = [
  {
    year: "2024",
    items: [
      "Completed the 'Complete Full Stack Web Development – MERN Stack' course at Deerwalk Training Center.",
      "Graduated from the 'Full Stack Next.js Bootcamp' organized by Jobsnipper.",
      "Successfully completed the 'Custom WordPress Theme Development Bootcamp' hosted by Jobsnipper.",
    ],
  },
  {
    year: "2020",
    items: [
      "Achieved top 15% ranking in the JavaScript LinkedIn Assessment.",
      "Ranked in the top 5% of participants in the PHP LinkedIn Assessment.",
      "Scored 92/100 in the JavaScript Code Verification on HackerRank.",
    ],
  },
  {
    year: "2018",
    items: [
      "HTML and CSS Certification from TemplateMonster.com",
    ],
  },
  {
    year: "2017",
    items: [
      "Earned 'JavaScript Expert' status with a score of 212 on Pluralsight IQ.",
      "Achieved 'CSS Expert' verification with a score of 218 on Pluralsight IQ.",
    ],
  },
  {
    year: "2016",
    items: [
      "Diploma in Computer Engineering, accredited by CTEVT (Council for Technical Education and Vocational Training).",
    ],
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="max-w-3xl mx-auto pt-10 pb-10"
    >
      {/* Section Title */}
      <h2
        className="text-3xl font-bold text-gray-900 mb-6 tracking-tight"
      >
        Certifications
      </h2>

      <div
        className="space-y-8"
      >
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            className="group transition-transform duration-300 "
          >
            {/* Year */}
            <h3
              className="text-lg font-semibold text-gray-900 mb-2"
            >
              {cert.year}
            </h3>

            {/* Certification Items */}
            <ul
              className="space-y-1"
            >
              {cert.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start group"
                >
                  <div className="transition-transform duration-200">
                    <Hash className="w-3.5 h-3.5 text-gray-500 mt-[3px] flex-shrink-0 italic" />
                  </div>
                  <span className="ml-1 text-gray-700 italic text-sm group-hover:text-gray-900 transition-colors duration-200">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
