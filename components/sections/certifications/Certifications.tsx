"use client";

import React from "react";
import { Hash } from "lucide-react";
import { motion, type Variants } from "framer-motion";

// ✅ Properly typed variants
const container: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.2,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number], // ✅ FIX
    },
  },
};

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
      "Diploma in Computer Engineering, accredited by CTEVT.",
    ],
  },
];

const Certifications = () => {
  return (
    <motion.section
      id="certifications"
      className="max-w-3xl mx-auto pt-10 pb-10 text-gray-900 dark:text-gray-100"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <h2 className="text-3xl font-bold mb-6 tracking-tight">
        Certifications
      </h2>

      <div className="space-y-8">
        {certifications.map((cert, idx) => (
          <div key={idx}>
            <h3 className="text-lg font-semibold mb-2">
              {cert.year}
            </h3>

            <ul className="space-y-1">
              {cert.items.map((item, i) => (
                <li key={i} className="flex items-start">
                  <Hash className="w-3.5 h-3.5 mt-[3px] text-gray-500" />
                  <span className="ml-2 text-sm italic text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Certifications;