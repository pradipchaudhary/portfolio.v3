"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import DOMPurify from "dompurify"; // Ensure this package is installed
import { Project } from "@/types";
import { Github, Globe } from "lucide-react";

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

export default function ProjectPage() {
    const params = useParams();
    const slug = params?.slug;
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProject = async () => {
            if (!slug) {
                setError("No slug found");
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`/api/projects/${slug}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch project");
                }
                const data = await response.json();
                setProject(data.project);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProject();
    }, [slug]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!project) return <div>Project not found</div>;

    const sanitizedContent = DOMPurify.sanitize(project.content || "");

    return (
        <article className="max-w-4xl mx-auto py-8 px-4">
            {/* Back Button */}
            <Link
                href="/projects"
                className="inline-flex items-center text-sm text-slate-400 hover:text-slate-200 
                         mb-8 transition-colors"
            >
                <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
                Back to Projects
            </Link>
            {/* Project Header */}
            <header className="mb-8">
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold">{project.title}</h1>
                    <p className="">{project.description}</p>
                    <div className="flex flex-wrap gap-6 text-sm text-slate-400">
                        {project.role && (
                            <div>
                                <span className="text-slate-200">Role:</span>{" "}
                                {project.role}
                            </div>
                        )}
                        {project.timeline && (
                            <div>
                                <span className="text-slate-200">
                                    Timeline:
                                </span>{" "}
                                {project.timeline}
                            </div>
                        )}
                        {project.status && (
                            <div>
                                <span className="text-slate-200">Status:</span>{" "}
                                <span
                                    className={`px-2 py-1 text-xs rounded-full border ${getStatusColor(
                                        project.status
                                    )}`}
                                >
                                    {project.status}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </header>
            {/* Featured Image */}
            {project.image && (
                <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            )}
            {/* Links */}
            <div className="flex gap-4 mb-8">
                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-[#6f49d8] text-white rounded-lg 
                                 hover:bg-[#8b6ce7] transition-colors flex items-center gap-2"
                    >
                        <Globe size={18} />
                        View Live Site
                    </a>
                )}
                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-slate-700 text-white rounded-lg 
                                 hover:bg-slate-600 transition-colors flex items-center gap-2"
                    >
                        <Github size={18} /> View Source
                    </a>
                )}
            </div>
            {/* Technologies */}
            {project.technologies && (
                <div className="mb-8">
                    <h2 className="text-xl font-semibold  mb-4">
                        Technologies Used
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-slate-800/40 
                                         rounded-full border border-slate-700/50"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            )}
            {/* Content */}
            <div
                id="blog-content"
                className="prose text-editor prose-invert prose-slate max-w-none mb-12"
                dangerouslySetInnerHTML={{ __html: sanitizedContent }}
            />
            {/* Challenges and Solutions */}
            {(project.challenges || project.solutions) && (
                <div className="flex flex-col gap-8 mb-12">
                    {project.challenges && (
                        <div>
                            <h2 className="text-xl font-semibold  mb-4">
                                Challenges
                            </h2>
                            <ul className="space-y-2">
                                {project.challenges.map((challenge, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-2 "
                                    >
                                        <span className="text-[#6f49d8]">
                                            •
                                        </span>
                                        {challenge}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {project.solutions && (
                        <div>
                            <h2 className="text-xl font-semibold mb-4">
                                Solutions
                            </h2>
                            <ul className="space-y-2">
                                {project.solutions.map((solution, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-2 "
                                    >
                                        <span className="text-[#6f49d8]">
                                            •
                                        </span>
                                        {solution}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </article>
    );
}
