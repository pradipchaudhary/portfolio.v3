import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { Github, Globe } from "lucide-react";

// Define the project type (ensure it matches your API response)
interface Project {
    title: string;
    description: string;
    content: string;
    thumbnail: string;
    technologies: string[];
    completionDate: string;
    liveLink?: string;
    repoLink?: string;
    role: string;
    timeline: string;
    status: string;
    image: string;
    liveUrl: string;
    githubUrl: string;
    challenges: string[];
    solutions: string[];
}
// Status color helper function
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

// Fetch project data dynamically
async function fetchProjectData(slug: string): Promise<Project> {
    try {
        const response = await fetch(
            `https://portfolio-v3-api-pddz.onrender.com/api/projects/${slug}`,
            { next: { revalidate: 3600 } }
        );

        if (!response.ok) {
            const errorText = await response.text(); // Read once
            console.error(`API Error: ${response.status} - ${errorText}`);
            throw new Error(`Failed to fetch project data for slug: ${slug}`);
        }

        return await response.json(); // Read JSON once
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`Fetch error: ${error.message}`);
        } else {
            console.error("Fetch error: An unknown error occurred");
        }
        throw error;
    }
}

// Server Component for rendering a project
async function Project({ slug }: { slug: string }) {
    const project = await fetchProjectData(slug);
    // console.log("Project data:", project);
    const {
        title,
        description,
        content,
        technologies,
        role,
        timeline,
        status,
        image,
        liveUrl,
        githubUrl,
        challenges,
        solutions,
    } = project;
    // const sanitizedContent = DOMPurify.sanitize(project?.content || "");

    return (
        <article className="max-w-3xl mx-auto py-8 px-4">
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
                    <h1 className="text-3xl font-bold">{title}</h1>
                    <p>{description}</p>
                    <div className="flex flex-wrap gap-6 text-sm text-slate-400">
                        {role && (
                            <div>
                                <span className="text-slate-200">Role:</span>{" "}
                                {role}
                            </div>
                        )}
                        {timeline && (
                            <div>
                                <span className="text-slate-200">
                                    Timeline:
                                </span>{" "}
                                {timeline}
                            </div>
                        )}
                        {status && (
                            <div>
                                <span className="text-slate-200">Status:</span>{" "}
                                <span
                                    className={`px-2 py-1 text-xs rounded-full border ${getStatusColor(
                                        status
                                    )}`}
                                >
                                    {status}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </header>
            {/* Featured Image */}
            {image && (
                <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            )}
            {/* Links */}
            <div className="flex gap-4 mb-8">
                {liveUrl && (
                    <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-[#6f49d8] text-white rounded-lg 
                                 hover:bg-[#8b6ce7] transition-colors flex items-center gap-2"
                    >
                        <Globe size={18} />
                        View Live Site
                    </a>
                )}
                {githubUrl && (
                    <a
                        href={githubUrl}
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
            {technologies && (
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">
                        Technologies Used
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
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
                dangerouslySetInnerHTML={{ __html: content || "" }}
            />
            <div
                id="blog-content"
                className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-200 prose-p:text-slate-400 prose-a:text-[#6f49d8] hover:prose-a:text-[#8b6ce7] prose-strong:text-slate-200 prose-code:text-slate-200 prose-ul:text-slate-400"
            />
            {/* Challenges and Solutions */}
            {(challenges || solutions) && (
                <div className="flex flex-col gap-8 mb-12">
                    {challenges && (
                        <div>
                            <h2 className="text-xl font-semibold mb-4">
                                Challenges
                            </h2>
                            <ul className="space-y-2">
                                {challenges.map((challenge, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-2"
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
                    {solutions && (
                        <div>
                            <h2 className="text-xl font-semibold mb-4">
                                Solutions
                            </h2>
                            <ul className="space-y-2">
                                {solutions.map((solution, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-2"
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

// Skeleton for loading state
function ProjectSkeleton() {
    return (
        <article className="max-w-3xl mx-auto py-8 px-4 animate-pulse">
            {/* <!-- Back Button --> */}
            <div className="inline-flex items-center text-sm h-4 mb-8 rounded w-1/2"></div>

            {/* <!-- Article Header --> */}
            <header className="mb-8">
                <div className="space-y-4">
                    <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                    <div className="flex items-center gap-8 text-sm h-4 rounded w-3/4"></div>
                </div>
            </header>

            {/* <!-- Featured Image --> */}
            <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
                <div className="h-full bg-gray-200 rounded"></div>
            </div>

            {/* <!-- Article Content --> */}
            <div
                id="blog-content"
                className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-200 prose-p:text-slate-400 prose-a:text-[#6f49d8] hover:prose-a:text-[#8b6ce7] prose-strong:text-slate-200 prose-code:text-slate-200 prose-ul:text-slate-400"
            >
                <div className="h-4 bg-gray-200 rounded w-full my-1"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3 my-1"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 my-1"></div>
            </div>

            {/* <!-- Article Footer --> */}
            <footer className="mt-12 pt-8 border-t border-slate-800">
                <div className="flex items-center justify-between">
                    <div className="text-sm text-slate-400 h-4 bg-gray-200 rounded w-1/3"></div>
                    <div className="flex gap-4">
                        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                    </div>
                </div>
            </footer>
        </article>
    );
}

// Main Page Component
// Modify Page function to avoid awaiting params
export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params; // No need to await params

    return (
        <Suspense fallback={<ProjectSkeleton />}>
            <Project slug={slug} />
        </Suspense>
    );
}
