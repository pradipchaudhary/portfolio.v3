"use client";

import type { Project } from "@/types";
import {
  Plus,
  Search,
  ExternalLink,
  MoreVertical,
  Briefcase,
  Layers,
  Code2,
} from "lucide-react";
import Link from "next/link";

export default function ProjectsClient({ projects }: { projects: Project[] }) {
  return (
    <section className="mt-16">
      <div className="max-w-5xl space-y-10 pb-24">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          {/* SEARCH */}
          <div className="relative w-full md:max-w-sm group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 group-focus-within:text-neutral-700 dark:group-focus-within:text-neutral-300 transition" />

            <input
              placeholder="Search projects..."
              className="
                w-full
                bg-white dark:bg-neutral-900
                border border-neutral-200 dark:border-neutral-800
                rounded-xl
                pl-10 pr-4 py-2.5
                text-sm
                outline-none
                focus:ring-2 focus:ring-neutral-300 dark:focus:ring-neutral-700
                focus:border-neutral-400 dark:focus:border-neutral-600
                transition
              "
            />
          </div>

          {/* BUTTON */}
          <button className="
            flex items-center gap-2
            px-5 py-2.5
            rounded-xl
            bg-neutral-900 text-white
            dark:bg-white dark:text-neutral-900
            hover:opacity-90 active:scale-[0.98]
            transition
          ">
            <Plus className="w-4 h-4" />
            <span className="text-sm font-medium">New Project</span>
          </button>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Projects", value: projects.length, icon: Briefcase },
            { label: "Featured", value: projects.filter(p => p.featured).length, icon: Layers },
            { label: "Published", value: projects.filter(p => p.published).length, icon: Code2 },
          ].map((stat, i) => (
            <div
              key={i}
              className="
                p-5 rounded-2xl
                bg-white dark:bg-neutral-900
                border border-neutral-200 dark:border-neutral-800
                hover:-translate-y-1 hover:shadow-sm
                transition
              "
            >
              <div className="flex items-center gap-2 text-neutral-500">
                <stat.icon className="w-4 h-4" />
                <span className="text-[11px] uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>

              <h4 className="text-2xl font-semibold mt-2">
                {stat.value}
              </h4>
            </div>
          ))}
        </div>

        {/* PROJECT LIST */}
        <div className="space-y-4">
          {projects.map((p) => (
            <Link
              key={p.id}
              href={`/dashboard/projects/${p.slug}`}
              className="
                group flex flex-col md:flex-row md:items-center justify-between
                p-6 md:p-7
                rounded-2xl
                bg-white dark:bg-neutral-900
                border border-neutral-200 dark:border-neutral-800
                hover:-translate-y-1 hover:shadow-sm
                transition-all duration-300
              "
            >
              {/* LEFT */}
              <div className="space-y-1 max-w-xl">
                <h4 className="text-lg font-semibold group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition">
                  {p.title}
                </h4>

                <p className="text-sm text-neutral-500 line-clamp-2">
                  {p.description}
                </p>
              </div>

              {/* RIGHT */}
              <div className="flex items-center gap-4 mt-4 md:mt-0">

                {/* TAGS */}
                <div className="hidden sm:flex gap-2 flex-wrap">
                  {p.tags?.slice(0, 3).map(tag => (
                    <span
                      key={tag}
                      className="
                        text-[11px]
                        px-2.5 py-1
                        rounded-full
                        bg-neutral-100 dark:bg-neutral-800
                        text-neutral-600 dark:text-neutral-300
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* ACTIONS */}
                <div className="flex items-center gap-1">

                  {p.link && (
                    <Link
                      href={p.link}
                      target="_blank"
                      className="
                        p-2 rounded-lg
                        hover:bg-neutral-100 dark:hover:bg-neutral-800
                        text-neutral-500 hover:text-neutral-900 dark:hover:text-white
                        transition
                      "
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  )}

                  <button className="
                    p-2 rounded-lg
                    hover:bg-neutral-100 dark:hover:bg-neutral-800
                    text-neutral-500 hover:text-neutral-900 dark:hover:text-white
                    transition
                  ">
                    <MoreVertical className="w-4 h-4" />
                  </button>

                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}