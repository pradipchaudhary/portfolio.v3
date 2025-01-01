"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

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
    const { getProjectBySlug } = useData();
    const { slug } = useParams<{ slug: string }>();
    const project = getProjectBySlug(slug);

    if (!project) {
        return <div>Project not found</div>;
    }

    const sanitizedContent = DOMPurify.sanitize(project.content);

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
                    <h1 className="text-3xl font-bold text-slate-200">
                        {project.title}
                    </h1>

                    <p className="text-lg text-slate-400">
                        {project.description}
                    </p>

                    {/* Project Meta */}
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
            <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            {/* Links */}
            <div className="flex gap-4 mb-8">
                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-[#6f49d8] text-white rounded-lg 
                                 hover:bg-[#8b6ce7] transition-colors"
                    >
                        View Live Site
                    </a>
                )}
                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-slate-700 text-white rounded-lg 
                                 hover:bg-slate-600 transition-colors"
                    >
                        View Source
                    </a>
                )}
            </div>
            {/* Technologies */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold text-slate-200 mb-4">
                    Technologies Used
                </h2>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-slate-800/40 text-slate-300 
                                     rounded-full border border-slate-700/50"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            {/* Project Content */}
            <div
                className="prose text-editor prose-invert prose-slate max-w-none mb-12
                         prose-headings:text-slate-200 
                         prose-p:text-slate-400 
                         prose-a:text-[#6f49d8] hover:prose-a:text-[#8b6ce7]
                         prose-strong:text-slate-200
                         prose-ul:text-slate-400
                         prose-pre:bg-[#1f1a40]
                         prose-code:text-slate-300
                         prose-img:rounded-lg
                         prose-hr:border-slate-700"
                dangerouslySetInnerHTML={{ __html: sanitizedContent }}
            />
            {console.log("Project content: ", project.content)}
            {/* Challenges and Solutions */}
            {(project.challenges || project.solutions) && (
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {project.challenges && (
                        <div>
                            <h2 className="text-xl font-semibold text-slate-200 mb-4">
                                Challenges
                            </h2>
                            <ul className="space-y-2">
                                {project.challenges.map((challenge, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-2 text-slate-400"
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
                            <h2 className="text-xl font-semibold text-slate-200 mb-4">
                                Solutions
                            </h2>
                            <ul className="space-y-2">
                                {project.solutions.map((solution, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-2 text-slate-400"
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
            {/* Project Gallery */}
            {project.gallery && (
                <div className="mb-12">
                    <h2 className="text-xl font-semibold text-slate-200 mb-4">
                        Project Gallery
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.gallery.map((image, index) => (
                            <div
                                key={index}
                                className="relative aspect-video rounded-lg overflow-hidden"
                            >
                                <Image
                                    src={image}
                                    alt={`${project.title} gallery image ${
                                        index + 1
                                    }`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {/* Team Members */}
            {project.team && (
                <div className="mb-12">
                    <h2 className="text-xl font-semibold text-slate-200 mb-4">
                        Team Members
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {project.team.map((member, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-slate-800/40 text-slate-300 
                                         rounded-full border border-slate-700/50"
                            >
                                {member}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </article>
    );
}
