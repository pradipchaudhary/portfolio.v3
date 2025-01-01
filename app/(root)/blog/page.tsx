"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    slug: string;
    thumbnail: string;
    category?: string;
}

const blogPosts: BlogPost[] = [
    {
        id: "1",
        title: "Understanding React Server Components",
        excerpt:
            "A deep dive into React Server Components and how they change the way we build React applications.",
        date: "2024-03-15",
        readTime: "5 min read",
        slug: "understanding-react-server-components",
        thumbnail: "/blog/react-server.png",
        category: "React",
    },
    {
        id: "2",
        title: "Building with Next.js 14",
        excerpt:
            "Exploring the new features and improvements in Next.js 14 and how to leverage them.",
        date: "2024-03-10",
        readTime: "4 min read",
        slug: "building-with-nextjs-14",
        thumbnail: "/blog/nextjs-14.jpg",
        category: "Next.js",
    },
    {
        id: "3",
        title: "Mastering Tailwind CSS: Advanced Techniques",
        excerpt:
            "Learn advanced Tailwind CSS techniques to build beautiful and maintainable user interfaces.",
        date: "2024-03-05",
        readTime: "6 min read",
        slug: "mastering-tailwind-css",
        thumbnail: "/blog/tailwind.jpg",
        category: "CSS",
    },
    {
        id: "4",
        title: "TypeScript Best Practices in 2024",
        excerpt:
            "Essential TypeScript patterns and practices for writing better, type-safe code in modern applications.",
        date: "2024-02-28",
        readTime: "7 min read",
        slug: "typescript-best-practices-2024",
        thumbnail: "/blog/typescript.jpg",
        category: "TypeScript",
    },
    {
        id: "5",
        title: "Introduction to Web Authentication",
        excerpt:
            "A comprehensive guide to implementing secure authentication in web applications.",
        date: "2024-02-20",
        readTime: "8 min read",
        slug: "web-authentication-guide",
        thumbnail: "/blog/auth.jpg",
        category: "Security",
    },
    {
        id: "6",
        title: "State Management with Zustand",
        excerpt:
            "Simplify your React state management with Zustand - a lightweight and powerful alternative.",
        date: "2024-02-15",
        readTime: "5 min read",
        slug: "state-management-zustand",
        thumbnail: "/blog/zustand.jpg",
        category: "React",
    },
    {
        id: "7",
        title: "Building a REST API with Node.js",
        excerpt:
            "Step-by-step guide to creating a scalable REST API using Node.js, Express, and MongoDB.",
        date: "2024-02-10",
        readTime: "10 min read",
        slug: "building-rest-api-nodejs",
        thumbnail: "/blog/nodejs.jpg",
        category: "Backend",
    },
    {
        id: "8",
        title: "CSS Grid Mastery",
        excerpt:
            "Master CSS Grid layout with practical examples and advanced techniques.",
        date: "2024-02-05",
        readTime: "6 min read",
        slug: "css-grid-mastery",
        thumbnail: "/blog/css-grid.jpg",
        category: "CSS",
    },
    {
        id: "9",
        title: "React Performance Optimization",
        excerpt:
            "Practical techniques to improve the performance of your React applications.",
        date: "2024-01-30",
        readTime: "7 min read",
        slug: "react-performance-optimization",
        thumbnail: "/blog/react-performance.jpg",
        category: "React",
    },
    {
        id: "10",
        title: "Getting Started with Docker",
        excerpt:
            "A beginner's guide to containerization with Docker for web developers.",
        date: "2024-01-25",
        readTime: "8 min read",
        slug: "getting-started-docker",
        thumbnail: "/blog/docker.jpg",
        category: "DevOps",
    },
    {
        id: "11",
        title: "Modern JavaScript Features",
        excerpt:
            "Exploring the latest JavaScript features and how to use them effectively.",
        date: "2024-01-20",
        readTime: "6 min read",
        slug: "modern-javascript-features",
        thumbnail: "/blog/javascript.jpg",
        category: "JavaScript",
    },
    {
        id: "12",
        title: "Git Workflow Best Practices",
        excerpt:
            "Learn effective Git workflows and collaboration strategies for development teams.",
        date: "2024-01-15",
        readTime: "5 min read",
        slug: "git-workflow-best-practices",
        thumbnail: "/blog/git.jpg",
        category: "DevOps",
    },
];

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    // Filter posts based on search query
    const filteredPosts = blogPosts.filter(
        (post) =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.category?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Calculate pagination
    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
    const paginatedPosts = filteredPosts.slice(
        (currentPage - 1) * POSTS_PER_PAGE,
        currentPage * POSTS_PER_PAGE
    );

    return (
        <div className="max-w-3xl mx-auto pb-8 pr-4">
            {/* Improved Header Section */}
            <div className="relative mb-12">
                {/* Background Accent */}

                {/* Header Content */}
                <div className="space-y-6">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold text-slate-500">
                            Blog & Articles
                        </h1>
                        <div className="h-0.5 w-32 bg-gradient-to-r from-[#6f49d8] to-transparent rounded-full"></div>
                        <p className="text-slate-400">
                            Exploring web development, sharing insights, and
                            documenting my journey
                        </p>
                    </div>

                    {/* Stats Row */}
                    <div className="flex gap-6 text-sm text-slate-400 pb-6">
                        <div>
                            <span className="text-slate-200 font-semibold">
                                {blogPosts.length}
                            </span>{" "}
                            Articles
                        </div>
                        <div>
                            <span className="text-slate-200 font-semibold">
                                {
                                    [
                                        ...new Set(
                                            blogPosts.map(
                                                (post) => post.category
                                            )
                                        ),
                                    ].length
                                }
                            </span>{" "}
                            Categories
                        </div>
                    </div>

                    {/* Search Bar with improved styling */}
                    <div className="relative max-w-xl">
                        <input
                            type="text"
                            placeholder="Search articles by title, content, or category..."
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="w-full px-4 py-3 bg-slate-800/40 border border-slate-700/50 
                                     rounded-lg text-slate-200 placeholder-slate-400 
                                     focus:outline-none focus:border-[#6f49d8]/50
                                     focus:ring-2 focus:ring-[#6f49d8]/20 transition-all"
                        />
                        <svg
                            className="absolute right-3 top-3.5 h-5 w-5 text-slate-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Blog Posts Section */}
            <div className="space-y-8 mb-8 ">
                {paginatedPosts.map((post) => (
                    <Link href={`/blog/${post.slug}`} key={post.id}>
                        <article
                            className="overflow-hidden rounded-lg bg-slate-800/40 
                                     border border-slate-700/50 hover:border-slate-600 
                                     transition-all duration-200 group my-8"
                        >
                            {/* Image container with overlay */}
                            <div className="h-48 w-full relative">
                                <Image
                                    src={post.thumbnail}
                                    alt={post.title}
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

                            <div className="p-6 space-y-3">
                                <div className="flex items-center gap-2 text-xs text-slate-400">
                                    {post.category && (
                                        <>
                                            <span className="px-2 py-1 bg-slate-700/50 rounded-full">
                                                {post.category}
                                            </span>
                                            <span>•</span>
                                        </>
                                    )}
                                    <time>
                                        {new Date(post.date).toLocaleDateString(
                                            "en-US",
                                            {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            }
                                        )}
                                    </time>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </div>

                                <h2
                                    className="text-xl font-semibold text-slate-200 
                                             group-hover:text-slate-100"
                                >
                                    {post.title}
                                </h2>

                                <p className="text-sm text-slate-400">
                                    {post.excerpt}
                                </p>

                                <div className="pt-2">
                                    <span
                                        className="text-sm text-[#6f49d8] group-hover:text-[#8b6ce7] 
                                                   transition-colors"
                                    >
                                        Read more →
                                    </span>
                                </div>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center gap-2">
                    <button
                        onClick={() =>
                            setCurrentPage((prev) => Math.max(prev - 1, 1))
                        }
                        disabled={currentPage === 1}
                        className="px-3 py-1 rounded-md bg-slate-800/40 border border-slate-700/50
                                 text-slate-400 hover:text-slate-200 disabled:opacity-50
                                 disabled:cursor-not-allowed transition-colors"
                    >
                        Previous
                    </button>

                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`px-3 py-1 rounded-md border 
                                      ${
                                          currentPage === i + 1
                                              ? "bg-[#6f49d8] border-[#6f49d8] text-white"
                                              : "bg-slate-800/40 border-slate-700/50 text-slate-400 hover:text-slate-200"
                                      } transition-colors`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        onClick={() =>
                            setCurrentPage((prev) =>
                                Math.min(prev + 1, totalPages)
                            )
                        }
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 rounded-md bg-slate-800/40 border border-slate-700/50
                                 text-slate-400 hover:text-slate-200 disabled:opacity-50
                                 disabled:cursor-not-allowed transition-colors"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}
