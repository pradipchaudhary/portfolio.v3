"use client";

import { useMemo, useState } from "react";
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
import { useRouter } from "next/navigation";
import clsx from "clsx";

export default function ProjectsClient({
  projects,
}: {
  projects: Project[];
}) {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const query = search.toLowerCase();

      return (
        p.title.toLowerCase().includes(query) ||
        p.description?.toLowerCase().includes(query) ||
        p.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    });
  }, [projects, search]);

  return (
    <section className="mt-16">
      <div className="max-w-6xl mx-auto space-y-10 pb-24 px-4">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

          {/* SEARCH */}
          <div className="relative w-full lg:max-w-sm group">
            <Search
              className="
                absolute left-4 top-1/2 -translate-y-1/2
                w-4 h-4 text-neutral-400
                group-focus-within:text-neutral-700
                dark:group-focus-within:text-neutral-300
                transition
              "
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search projects..."
              className="
                w-full h-12
                rounded-2xl
                border border-neutral-200 dark:border-neutral-800
                bg-white/70 dark:bg-neutral-900/70
                backdrop-blur-xl
                pl-11 pr-4
                text-sm
                outline-none
                transition-all
                focus:ring-4 focus:ring-neutral-200/70
                dark:focus:ring-neutral-800/70
                focus:border-neutral-400 dark:focus:border-neutral-600
              "
            />
          </div>

          {/* BUTTON */}
          <button
            className="
              inline-flex items-center justify-center gap-2
              h-12 px-5
              rounded-2xl
              bg-neutral-900 dark:bg-white
              text-white dark:text-black
              text-sm font-medium
              shadow-sm
              hover:scale-[1.02]
              active:scale-[0.98]
              transition-all
            "
          >
            <Plus className="w-4 h-4" />
            New Project
          </button>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              label: "Projects",
              value: projects.length,
              icon: Briefcase,
            },
            {
              label: "Featured",
              value: projects.filter((p) => p.featured).length,
              icon: Layers,
            },
            {
              label: "Published",
              value: projects.filter((p) => p.published).length,
              icon: Code2,
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="
                relative overflow-hidden
                rounded-3xl
                border border-neutral-200/70 dark:border-neutral-800
                bg-white dark:bg-neutral-950
                p-6
                hover:border-neutral-300 dark:hover:border-neutral-700
                transition-all
              "
            >
              <div className="flex items-center gap-2 text-neutral-500">
                <div
                  className="
                    flex items-center justify-center
                    w-9 h-9 rounded-xl
                    bg-neutral-100 dark:bg-neutral-900
                  "
                >
                  <stat.icon className="w-4 h-4" />
                </div>

                <span className="text-xs uppercase tracking-[0.2em]">
                  {stat.label}
                </span>
              </div>

              <h4 className="mt-5 text-4xl font-semibold tracking-tight">
                {stat.value}
              </h4>
            </div>
          ))}
        </div>

        {/* PROJECT LIST */}
        <div className="grid grid-cols-1 gap-5">

          {filteredProjects.map((p) => (
            <div
              key={p.id}
              role="button"
              tabIndex={0}
              onClick={() => router.push(`/dashboard/projects/${p.id}`)}
              className="
                group relative overflow-hidden
                rounded-3xl
                border border-neutral-200/70 dark:border-neutral-800
                bg-white dark:bg-neutral-950
                p-6 md:p-7
                hover:border-neutral-300 dark:hover:border-neutral-700
                hover:shadow-xl hover:shadow-black/[0.03]
                transition-all duration-300
                cursor-pointer
              "
            >

              {/* TOP */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">

                {/* LEFT */}
                <div className="min-w-0 flex-1 space-y-3">

                  <div className="flex items-start gap-3">

                    <div
                      className="
                        mt-1 flex h-11 w-11 shrink-0 items-center justify-center
                        rounded-2xl
                        bg-neutral-100 dark:bg-neutral-900
                        border border-neutral-200 dark:border-neutral-800
                      "
                    >
                      <Briefcase className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
                    </div>

                    <div className="min-w-0">
                      <h3
                        className="
                          text-lg md:text-xl
                          font-semibold
                          tracking-tight
                          text-neutral-900 dark:text-white
                          group-hover:text-neutral-700
                          dark:group-hover:text-neutral-200
                          transition
                        "
                      >
                        {p.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm leading-6
                          text-neutral-500
                          line-clamp-2
                        "
                      >
                        {p.description}
                      </p>
                    </div>
                  </div>

                  {/* TAGS */}
                  {!!p.tags?.length && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {p.tags.slice(0, 5).map((tag) => (
                        <span
                          key={tag}
                          className="
                            inline-flex items-center
                            rounded-full
                            border border-neutral-200 dark:border-neutral-800
                            bg-neutral-50 dark:bg-neutral-900
                            px-3 py-1
                            text-xs font-medium
                            text-neutral-600 dark:text-neutral-300
                          "
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* ACTIONS */}
                <div className="flex items-center gap-2 shrink-0">

                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="
                        flex items-center justify-center
                        w-11 h-11
                        rounded-2xl
                        border border-neutral-200 dark:border-neutral-800
                        bg-white dark:bg-neutral-900
                        text-neutral-500
                        hover:text-neutral-900 dark:hover:text-white
                        hover:bg-neutral-100 dark:hover:bg-neutral-800
                        transition
                      "
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="
                      flex items-center justify-center
                      w-11 h-11
                      rounded-2xl
                      border border-neutral-200 dark:border-neutral-800
                      bg-white dark:bg-neutral-900
                      text-neutral-500
                      hover:text-neutral-900 dark:hover:text-white
                      hover:bg-neutral-100 dark:hover:bg-neutral-800
                      transition
                    "
                  >
                    <MoreVertical className="w-4 h-4" />
                  </button>

                </div>
              </div>

              {/* BOTTOM STATUS */}
              <div className="mt-6 flex flex-wrap items-center gap-3">

                <span
                  className={clsx(
                    "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
                    p.published
                      ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400"
                      : "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400"
                  )}
                >
                  {p.published ? "Published" : "Draft"}
                </span>

                {p.featured && (
                  <span
                    className="
                      inline-flex items-center rounded-full
                      bg-blue-100 text-blue-700
                      dark:bg-blue-500/10 dark:text-blue-400
                      px-3 py-1 text-xs font-medium
                    "
                  >
                    Featured
                  </span>
                )}
              </div>
            </div>
          ))}

          {/* EMPTY */}
          {!filteredProjects.length && (
            <div
              className="
                flex flex-col items-center justify-center
                rounded-3xl
                border border-dashed border-neutral-300 dark:border-neutral-700
                py-20 text-center
              "
            >
              <div
                className="
                  flex items-center justify-center
                  w-16 h-16 rounded-2xl
                  bg-neutral-100 dark:bg-neutral-900
                "
              >
                <Search className="w-6 h-6 text-neutral-500" />
              </div>

              <h4 className="mt-5 text-lg font-semibold">
                No projects found
              </h4>

              <p className="mt-2 text-sm text-neutral-500">
                Try searching with another keyword.
              </p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}