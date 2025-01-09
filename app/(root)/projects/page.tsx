"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface Project {
    id: string;
    title: string;
    description: string;
    content: string;
    image: string;
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
    featured: boolean;
    gallery: string[];
    challenges: string[];
    solutions: string[];
    timeline: string;
    role: string;
    team: string[];
    slug: string;
    status: "completed" | "in-progress" | "planned"; // Example, adjust to your needs
}

// Mock data - replace with your actual data fetching logic
export const projects: Project[] = [
    {
        id: "1",
        title: "E-Commerce Platform",
        description:
            "A scalable e-commerce platform built with Next.js 14, Node.js, and Tailwind CSS.",
        content: `
            <p>An advanced e-commerce platform featuring product listings, a shopping cart, and secure checkout functionality.</p>
            <h2>Project Overview</h2>
            <p>Built to deliver a seamless online shopping experience with a focus on scalability and performance.</p>
            <h2>Technical Implementation</h2>
            <p>The platform leverages:</p>
            <ul>
                <li>Dynamic Routing for product pages</li>
                <li>Secure payment integration with Stripe</li>
                <li>Image Optimization with Next.js</li>
                <li>Responsive design with Tailwind CSS</li>
            </ul>
        `,
        image: "/projects/dashboard.png",
        technologies: ["Next.js", "Node.js", "Tailwind CSS", "Stripe API"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example/e-commerce",
        featured: true,
        gallery: [
            "/projects/e-commerce-1.jpg",
            "/projects/e-commerce-2.jpg",
            "/projects/e-commerce-3.jpg",
        ],
        challenges: [
            "Handling large-scale data operations",
            "Integrating secure payment methods",
            "Maintaining responsive layouts for all devices",
        ],
        solutions: [
            "Optimized backend with MongoDB aggregation",
            "Integrated Stripe for secure transactions",
            "Implemented responsive components using Tailwind CSS",
        ],
        timeline: "6 weeks",
        role: "Full Stack Developer",
        team: ["Alice Johnson", "Bob Clark"],
        slug: "e-commerce-platform",
        status: "completed",
    },
    {
        id: "2",
        title: "Blogging Platform",
        description:
            "A blogging platform with markdown support, user authentication, and real-time previews.",
        content: `
            <p>An intuitive platform for bloggers to write, edit, and share posts with ease.</p>
            <h2>Project Overview</h2>
            <p>Designed to provide content creators with tools to publish and manage their articles efficiently.</p>
            <h2>Technical Implementation</h2>
            <p>Key features include:</p>
            <ul>
                <li>Markdown editor with live previews</li>
                <li>User authentication and session management</li>
                <li>Dynamic theming options</li>
            </ul>
        `,
        image: "/projects/portfolio.jpg",
        technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example/blogging-platform",
        featured: false,
        gallery: [
            "/projects/thumbnail.svg",
            "/projects/thumbnail.svg",
            "/projects/thumbnail.svg",
        ],
        challenges: [
            "Creating a live markdown preview",
            "Implementing secure user authentication",
            "Supporting dynamic themes",
        ],
        solutions: [
            "Used react-markdown for live previews",
            "Implemented OAuth for user authentication",
            "Developed a theme switcher with Tailwind CSS",
        ],
        timeline: "4 weeks",
        role: "Frontend Developer",
        team: ["Chris Evans", "Dana White"],
        slug: "blogging-platform",
        status: "in-progress",
    },
    {
        id: "3",
        title: "Portfolio (v3)",
        description:
            "A modern and responsive personal portfolio built with Next.js, Tailwind CSS, and TypeScript.",
        content: `
        <p>A sleek and interactive portfolio showcasing personal projects, skills, and achievements.</p>
        <h2>Project Overview</h2>
        <p>The portfolio was designed to highlight the developer's work in a professional and user-friendly way.</p>
        <h2>Technical Implementation</h2>
        <p>The portfolio features:</p>
        <ul>
            <li>Server-side rendering with Next.js</li>
            <li>TypeScript for type safety</li>
            <li>Responsive design with Tailwind CSS</li>
            <li>Interactive animations with Framer Motion</li>
        </ul>
    `,
        image: "/projects/portfolio-v3.jpg",
        technologies: [
            "Next.js",
            "Tailwind CSS",
            "TypeScript",
            "Framer Motion",
        ],
        liveUrl: "https://example.com/portfolio",
        githubUrl: "https://github.com/example/portfolio-v3",
        featured: true,
        gallery: [
            "/projects/portfolio-1.jpg",
            "/projects/portfolio-2.jpg",
            "/projects/portfolio-3.jpg",
        ],
        challenges: [
            "Ensuring responsive design across various devices",
            "Integrating animations smoothly",
            "Optimizing for performance",
        ],
        solutions: [
            "Used Tailwind CSS for efficient styling",
            "Implemented Framer Motion for smooth animations",
            "Optimized assets and lazy loading to enhance performance",
        ],
        timeline: "3 weeks",
        role: "Frontend Developer",
        team: ["Pradip Chaudhary"],
        slug: "portfolio-v3",
        status: "completed",
    },
    {
        id: "4",
        title: "Ramita Beauty Parlor Website",
        description:
            "A professional website for showcasing beauty and salon services, built with Next.js 14, Tailwind CSS, and integrated appointment booking functionality.",
        content: `
        <p>An elegant and user-friendly platform for Ramita Beauty Parlor to highlight services, showcase testimonials, and enable customers to book appointments seamlessly.</p>
        <h2>Project Overview</h2>
        <p>Designed to enhance the online presence of the beauty parlor with a focus on aesthetics, usability, and responsiveness.</p>
        <h2>Technical Implementation</h2>
        <p>The platform leverages:</p>
        <ul>
            <li>Dynamic Routing for service detail pages</li>
            <li>Custom forms for appointment bookings</li>
            <li>SEO optimization for better online visibility</li>
            <li>Responsive design with Tailwind CSS</li>
        </ul>
    `,
        image: "/projects/beauty-parlor.png",
        technologies: ["Next.js", "Tailwind CSS", "Vercel Hosting"],
        liveUrl: "https://ramita-beautiparler.vercel.app/",
        githubUrl: "https://github.com/example/beauty-parlor",
        featured: true,
        gallery: [
            "/projects/beauty-parlor-1.jpg",
            "/projects/beauty-parlor-2.jpg",
            "/projects/beauty-parlor-3.jpg",
        ],
        challenges: [
            "Showcasing a wide range of services visually",
            "Implementing a smooth appointment booking process",
            "Ensuring responsive design for all devices",
        ],
        solutions: [
            "Integrated a gallery and service pages using dynamic routing",
            "Developed a custom booking form with email notifications",
            "Styled responsive components with Tailwind CSS for a polished look",
        ],
        timeline: "4 weeks",
        role: "Frontend Developer",
        team: ["Pradip Chaudhary"],
        slug: "ramita-beauty-parlor",
        status: "completed",
    },

    // Continue with the other projects similarly
];

export default function ProjectsPage() {
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
                        <h1 className="text-4xl bg-gradient-to-b from-[#8c95e4] to-[#292450]/90 text-transparent bg-clip-text  tracking-tight font-semibold mt-2 mb-2">
                            Projects & Work
                        </h1>
                        <p className="text-slate-400">
                            A collection of projects I&apos;ve built, from web
                            applications to open-source contributions
                        </p>
                    </div>

                    <div className="flex gap-6 text-sm text-slate-400">
                        <div>
                            <span className="text-slate-200 font-semibold">
                                {projects.length}
                            </span>{" "}
                            Projects
                        </div>
                        <div>
                            <span className="text-slate-200 font-semibold">
                                {projects.filter((p) => p.featured).length}
                            </span>{" "}
                            Featured
                        </div>
                    </div>
                </div>
            </div>

            {/* Projects Grid */}
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
                                {/* Title and Featured Badge */}
                                <div className="flex items-center justify-between">
                                    <h2
                                        className="text-xl font-semibold text-slate-200 flex gap-1
                                                 group-hover:text-slate-100"
                                    >
                                        {project.title}{" "}
                                    </h2>
                                    {project.featured && (
                                        <span
                                            className="px-2 py-1 text-xs bg-[#6f49d8]/10 text-[#6f49d8] 
                                                       rounded-full border border-[#6f49d8]/20"
                                        >
                                            Featured
                                        </span>
                                    )}
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
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 text-xs bg-slate-700/50 
                                                     text-slate-300 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
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
        </div>
    );
}
