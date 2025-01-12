"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types";

export default function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(
                    "https://portfolio-v3-api-pddz.onrender.com/api/projects"
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch projects.");
                }
                const data = await response.json();
                setProjects(data);
                setError(null); // Clear any existing errors
            } catch (err) {
                setError(
                    err instanceof Error
                        ? err.message
                        : "An unknown error occurred."
                );
            } finally {
                setLoading(false); // Always stop loading
            }
        };

        fetchProjects();
    }, []);

    const getStatusColor = (status?: string) => {
        switch (status) {
            case "completed":
                return "bg-green-500/10 text-green-400 border-green-500/20";
            case "in-progress":
                return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
            case "planned":
                return "bg-blue-500/10 text-blue-400 border-blue-500/20";
            default:
                return "bg-slate-500/10 text-slate-400 border-slate-500/20";
        }
    };

    return (
        <div className="max-w-3xl mx-auto pb-8 pr-4">
            {/* Header Section */}
            <div className="relative mb-12">
                <div className="space-y-6">
                    <div className="space-y-2">
                        <h1 className="text-4xl bg-gradient-to-b from-[#8c95e4] to-[#292450]/90 text-transparent bg-clip-text tracking-tight font-semibold mt-2 mb-2">
                            Projects & Work
                        </h1>
                        <p className="text-slate-400">
                            A collection of projects I&apos;ve built, from web
                            applications to open-source contributions
                        </p>
                    </div>
                </div>
            </div>

            {/* Loading State */}
            {loading && (
                <div className="flex items-center justify-center h-64">
                    <div className="flex flex-col items-center space-y-2">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-slate-400"></div>
                        <p className="text-center text-slate-400">Loading...</p>
                    </div>
                </div>
            )}

            {/* Error State */}
            {error && (
                <div className="flex items-center justify-center h-64">
                    <p className="text-center text-red-500">Error: {error}</p>
                </div>
            )}

            {/* Projects Grid */}
            {!loading && !error && (
                <div className="space-y-8">
                    {projects.map((project) => (
                        <Link
                            href={`/projects/${project.slug}`}
                            key={project.id}
                            className="block group"
                        >
                            <article
                                className="overflow-hidden rounded-lg bg-slate-800/40 
                                     border border-slate-700/50 hover:border-slate-600 
                                     transition-all duration-200"
                            >
                                {/* Project Image */}
                                <div className="h-48 w-full relative">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 
                                             transition-transform duration-200"
                                        sizes="(max-width: 768px) 100vw, 768px"
                                    />
                                    <div
                                        className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/20 
                                              transition-colors duration-200"
                                    />
                                </div>

                                {/* Project Content */}
                                <div className="p-6 space-y-4">
                                    {/* Title and Status */}
                                    <div className="flex items-center justify-between">
                                        <h2
                                            className="text-xl font-semibold text-slate-300 flex gap-1
                                                 group-hover:text-slate-300"
                                        >
                                            {project.title}{" "}
                                        </h2>
                                        {project.status && (
                                            <span
                                                className={`px-2 py-1 text-xs rounded-full border ${getStatusColor(
                                                    project.status
                                                )}`}
                                            >
                                                {project.status}
                                            </span>
                                        )}
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm text-slate-400">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map(
                                            (tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-1 text-xs bg-slate-700/50 
                                                     text-slate-300 rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            )
                                        )}
                                    </div>

                                    {/* View Project Link */}
                                    <div className="pt-2">
                                        <span
                                            className="text-sm text-[#6f49d8] group-hover:text-[#8b6ce7] 
                                                   transition-colors inline-flex items-center gap-1"
                                        >
                                            View Project
                                            <svg
                                                className="w-4 h-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
