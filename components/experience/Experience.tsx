"use client";

import React from "react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Freelancer",
    period: "May 2021 - Present",
    description: "Built modern web applications using React.js, Next.js, and Node.js for international clients. Developed e-commerce solutions with payment integrations and custom WordPress themes. Expertise in creating scalable applications across multiple industries.",
  },
  {
    role: "Full Stack Developer",
    company: "Sarathi Technosoft Pvt. Ltd",
    period: "Aug 2021 - Apr 2024",
    description: "Developed enterprise applications using React, Node.js, and MongoDB/MySQL. Improved application performance and implemented RESTful APIs. Led development teams and mentored junior developers in modern web technologies.",
  },
  {
    role: "Web Developer",
    company: "Softbenz Infosys • Software Company",
    period: "Sep 2020 - Jul 2021",
    description: "Created single-page applications with React.js and Redux. Built responsive UI components using Tailwind CSS. Integrated RESTful APIs for dynamic data management and improved user experience.",
  },
  {
    role: "Junior Frontend Developer",
    company: "Purwanchal Digital Media Technologies Pvt. Ltd.",
    period: "Feb 2016 - May 2021",
    description: "Developed responsive websites using HTML5, CSS3, and JavaScript. Implemented PHP-based features and focused on performance optimization. Enhanced sites for better SEO and accessibility standards.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="max-w-3xl mx-auto py-6">
      {/* Main Section Title */}
      <h2 className="text-3xl font-bold text-gray-900 mb-5 tracking-tight">
        Experience
      </h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col group hover:bg-gray-50/50 p-2 rounded-xl transition-all duration-300">
            {/* Role & Period */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-gray-800">{exp.role}</h3>
              <span className="mt-1 md:mt-0 text-xs italic text-gray-500">{exp.period}</span>
            </div>

            {/* Company */}
            <p className="text-gray-700 mb-2 font-medium text-base ">{exp.company}</p>

            {/* Description */}
            <p className="text-gray-600 text-base leading-normal ">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
