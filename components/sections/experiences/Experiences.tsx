"use client";

import Section from "@/components/layout/Section";
import { experiences } from "@/data/experiences";

interface ExperienceItemProps {
  role: string;
  company: string;
  period: string;
  description: string;
}

const ExperienceItem = ({
  role,
  company,
  period,
  description,
}: ExperienceItemProps) => {
  return (
    <article className="flex flex-col py-4">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-1">
        {/* Clean, static text color without hover effects */}
        <h3 className="text-lg md:text-xl font-semibold">{role}</h3>

        <time className="text-xs font-medium italic text-gray-500 dark:text-gray-400 whitespace-nowrap">
          {period}
        </time>
      </div>

      <p className="text-base font-medium text-gray-600 dark:text-gray-400 mb-2">
        {company}
      </p>

      <p className="text-sm leading-relaxed">{description}</p>
    </article>
  );
};

const Experience = () => {
  return (
    <Section id="experience" ariaLabel="Experience Section" className="pt-12">
      <h2 className="text-3xl font-bold tracking-tight mb-6">Experience</h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={`${exp.role}-${exp.company}-${index}`}
            role={exp.role}
            company={exp.company}
            period={exp.period}
            description={exp.description}
          />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
