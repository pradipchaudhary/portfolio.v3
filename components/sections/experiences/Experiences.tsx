"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

type ExperienceType = {
  role: string;
  company: string;
  period: string;
  description: string;
};

const container: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const experiences: ExperienceType[] = [
  // your data
  {
    role: "Full Stack Developer",
    company: "Freelancer",
    period: "May 2021 - Present",
    description:
      "Built modern web applications using React.js, Next.js, and Node.js for international clients. Developed e-commerce solutions with payment integrations and custom WordPress themes. Expertise in creating scalable applications across multiple industries.",
  },
  {
    role: "Full Stack Developer",
    company: "Sarathi Technosoft Pvt. Ltd",
    period: "Aug 2021 - Apr 2024",
    description:
      "Developed enterprise applications using React, Node.js, and MongoDB/MySQL. Improved application performance and implemented RESTful APIs. Led development teams and mentored junior developers in modern web technologies.",
  },
  {
    role: "Web Developer",
    company: "Softbenz Infosys • Software Company",
    period: "Sep 2020 - Jul 2021",
    description:
      "Created single-page applications with React.js and Redux. Built responsive UI components using Tailwind CSS. Integrated RESTful APIs for dynamic data management and improved user experience.",
  },
  {
    role: "Junior Frontend Developer",
    company: "Purwanchal Digital Media Technologies Pvt. Ltd.",
    period: "Feb 2016 - May 2021",
    description:
      "Developed responsive websites using HTML5, CSS3, and JavaScript. Implemented PHP-based features and focused on performance optimization. Enhanced sites for better SEO and accessibility standards.",
  },
];

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="py-18 text-gray-900 dark:text-gray-100"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <h2 className="text-3xl font-bold tracking-tight mb-5 text-gray-900 dark:text-white">
        Experience
      </h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col group p-3 rounded-xl transition-all duration-300 hover:bg-gray-50/60 dark:hover:bg-white/5"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white group-hover:text-gray-800 dark:group-hover:text-gray-200">
                {exp.role}
              </h3>

              <span className="mt-1 md:mt-0 text-xs italic text-gray-500 dark:text-gray-400">
                {exp.period}
              </span>
            </div>

            <p className="text-base font-medium mb-2 text-gray-600 dark:text-gray-400">
              {exp.company}
            </p>

            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;