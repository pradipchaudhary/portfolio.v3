import Tag from "@/components/sections/projects/Tag";
import { projectsitem } from "@/lib/animations";
import { formatTitle } from "@/lib/utils";
import { Project } from "@/types";
import { motion } from "motion/react";

export default function ProjectCard({ project }: { project: Project }) {
  const href = project.link || project.github || null;
  const isClickable = Boolean(href);

  return (
    <motion.a
      variants={projectsitem}
      {...(href
        ? {
            href,
            target: "_blank",
            rel: "noopener noreferrer",
          }
        : {})}
      className={`
    group relative rounded-xl p-5 overflow-hidden
    border border-[var(--foreground)]/5
  bg-gray-50/60 dark:bg-white/[0.02]
    transition-all duration-300
    ${!href ? "opacity-60 pointer-events-none" : ""}
  `}
    >
      {/* hover glow */}
      <div className="" />
      {/* content */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-2">
            {formatTitle(project.title)}
          </h3>

          <p className="text-sm leading-6 text-[var(--foreground)]/70">
            {project.description}
          </p>
        </div>

        {/* tags */}
        <div className="mt-4 flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </motion.a>
  );
}
