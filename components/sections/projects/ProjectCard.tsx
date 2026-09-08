import Tag from "@/components/ui/Tag";
import { formatTitle } from "@/lib/utils";
import { Project } from "@/types";
import { motion, Variants } from "motion/react";

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
/* =========================
   DATA
========================= */

export const projects: Project[] = [
  {
    id: "proj_docsnepal",
    title: "DocsNepal",
    slug: "docsnepal",
    description:
      "DocsNepal: a document generator for Nepali legal and official documents (PDF/docx) — templates and API utilities.",
    content: null,
    link: "https://docsnepal.vercel.app/",
    github: null,
    image: null,
    tags: ["TypeScript", "PDF", "Docx"],
    featured: true,
    published: true,
    order: 1,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
  {
    id: "proj_portfolio_v3",
    title: "Portfolio v3",
    slug: "portfolio-v3",
    description:
      "Portfolio site built with Next.js & Tailwind showcasing work, skills and blog.",
    content: null,
    link: null,
    github: "https://github.com/pradipchaudhary/portfolio.v3",
    image: null,
    tags: ["Next.js", "TailwindCSS", "TypeScript"],
    featured: true,
    published: true,
    order: 2,
    createdAt: new Date("2024-01-02"),
    updatedAt: new Date("2024-01-02"),
  },
  {
    id: "proj_100_js",
    title: "100 JavaScript Projects",
    slug: "100-javascript-projects",
    description:
      "A curated collection of 100 practical JavaScript projects for learning and practice.",
    content: null,
    link: "https://100plusjs.vercel.app/",
    github: null,
    image: null,
    tags: ["JavaScript", "Learning", "Projects"],
    featured: false,
    published: true,
    order: 3,
    createdAt: new Date("2024-01-03"),
    updatedAt: new Date("2024-01-03"),
  },
  {
    id: "proj_jobfindingai",
    title: "JobFindingAI",
    slug: "jobfindingai",
    description:
      "AI-powered job finder using resume, skills and preferences.",
    content: null,
    link: null,
    github: "https://github.com/pradipchaudhary/jobfindingai",
    image: null,
    tags: ["AI", "Next.js", "OpenAI"],
    featured: true,
    published: true,
    order: 4,
    createdAt: new Date("2024-01-04"),
    updatedAt: new Date("2024-01-04"),
  },
];
export default function ProjectCard({ project }: { project: Project }) {
   const href = project.link || project.github || null;
  const isClickable = Boolean(href);
  
  return(
    <motion.a
      variants={item}
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
      <div
        className="
    pointer-events-none absolute inset-0 rounded-2xl

    opacity-0 scale-95
    group-hover:opacity-100 group-hover:scale-100

    transition-all duration-500 ease-out

    bg-[radial-gradient(600px_circle_at_center,rgba(0,0,0,0.06),transparent_60%)]
    dark:bg-[radial-gradient(600px_circle_at_center,rgba(255,255,255,0.08),transparent_65%)]
  "
      />
      {/* glow line */}
      <span className="absolute w-[40%] -bottom-px right-0 h-px bg-[var(--accent)]/30" />

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
  )
}