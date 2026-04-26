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
import { useEffect, useState } from "react";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/projects");
      const data: Project[] = await res.json();
      setProjects(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="mt-16 text-sm text-muted-foreground">
        Loading projects...
      </div>
    );
  }

  return (
    <section className="mt-16">
      <div className="max-w-5xl space-y-10 pb-24">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          {/* SEARCH */}
          <div className="relative w-full md:max-w-sm group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-foreground transition" />

            <input
              placeholder="Search projects..."
              className="
                w-full
                bg-card
                border border-border
                rounded-xl
                pl-10 pr-4 py-2.5
                text-sm text-foreground
                placeholder:text-muted-foreground
                outline-none
                focus:ring-2 focus:ring-primary/20
                focus:border-primary
                transition
              "
            />
          </div>

          {/* BUTTON */}
          <button className="
            flex items-center gap-2
            px-5 py-2.5
            rounded-xl
            bg-foreground text-background
            hover:opacity-90 transition
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
                bg-card
                border border-border
                hover:border-primary/30
                hover:-translate-y-0.5
                transition
              "
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                <stat.icon className="w-4 h-4" />
                <span className="text-[11px] uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>

              <h4 className="text-2xl font-semibold mt-2 text-foreground">
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
              href={`/projects/${p.slug}`}
              className="
                group flex flex-col md:flex-row md:items-center justify-between
                p-6 md:p-8
                rounded-2xl
                bg-card
                border border-border
                hover:border-primary/30
                hover:bg-muted/30
                hover:-translate-y-0.5
                transition-all duration-300
              "
            >

              {/* LEFT */}
              <div className="space-y-1">
                <h4 className="
                  text-lg font-semibold text-foreground
                  group-hover:text-primary transition
                ">
                  {p.title}
                </h4>

                <p className="text-sm text-muted-foreground max-w-xl">
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
                        text-[10px]
                        px-2 py-1
                        rounded-md
                        border border-border
                        text-muted-foreground
                        bg-background
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* ACTIONS */}
                <div className="flex items-center gap-1">

                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      className="
                        p-2 rounded-lg
                        hover:bg-muted
                        text-muted-foreground hover:text-foreground
                        transition
                      "
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  <button className="
                    p-2 rounded-lg
                    hover:bg-muted
                    text-muted-foreground hover:text-foreground
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