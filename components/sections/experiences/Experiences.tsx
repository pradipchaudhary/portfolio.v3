"use client";

import Section from "@/components/layout/Section";
import { experiences } from "@/data/experiences";

const Experience = () => {
  return (
    <Section id="experience" ariaLabel="Experience Section">
      <h2 className="text-3xl font-bold tracking-tight mb-5 text-gray-900 dark:text-white">
        Experience
      </h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col group py-3 transition-all duration-300 "
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
    </Section>
  );
};

export default Experience;
