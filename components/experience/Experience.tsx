"use client";

import React from "react";
import { Check } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Freelancer",
    period: "May 2021 - Present",
    responsibilities: [
      "Developed and deployed full-stack applications for clients worldwide.",
      "Built and customized WordPress themes and plugins for various businesses.",
      "Worked with React.js, Next.js, Node.js, and MongoDB to develop web applications.",
      "Integrated third-party APIs and payment gateways for e-commerce solutions.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Sarathi Technosoft Pvt. Ltd",
    period: "Aug 2021 - Apr 2024",
    responsibilities: [
      "Implemented RESTful APIs and integrated with third-party services.",
      "Optimized front-end performance and enhanced user experience across devices.",
      "Collaborated with cross-functional teams to design and implement new features.",
      "Built and maintained dynamic web applications using React, Node.js, and MongoDB or MySQL.",
    ],
  },
  {
    role: "Web Developer",
    company: "Softbenz Infosys • Software Company",
    period: "Sep 2020 - Jul 2021",
    responsibilities: [
      "Developed single-page applications (SPAs) using React.js and Redux.",
      "Created responsive and accessible UI components with Tailwind CSS.",
      "Integrated REST APIs to fetch data dynamically and ensure a smooth UX.",
    ],
  },
  {
    role: "Junior Frontend Developer",
    company: "Purwanchal Digital Media Technologies Pvt. Ltd.",
    period: "Feb 2016 - May 2021",
    responsibilities: [
      "Developed responsive websites with HTML5, CSS3, and JavaScript.",
      "Collaborated with senior developers to implement features using PHP.",
      "Optimized websites for performance, SEO, and accessibility standards.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="max-w-3xl mx-auto pt-10 pb-10">
      {/* Main Section Title */}
      <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">
        Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col">
            {/* Role & Period */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">{exp.role}</h3>
              <span className="text-[12px] text-gray-500 mt-1 md:mt-0">{exp.period}</span>
            </div>

            {/* Company */}
            <p className="text-gray-700 mt-1 mb-1 font-medium text-sm md:text-sm">{exp.company}</p>

            {/* Responsibilities */}
            <ul className="space-y-1 text-gray-600 text-sm">
              {exp.responsibilities.map((task, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-green-500 mt-[3px] flex-shrink-0" />
                  <span className="text-sm">{task}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
