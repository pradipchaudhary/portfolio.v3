"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/types";

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    console.log("data : ", blogPosts);

    // Fetch blog posts from API
    useEffect(() => {
        const fetchBlogPosts = async () => {
            setLoading(true);
            try {
                const response = await fetch("/api/blog");
                const data: BlogPost[] = await response.json();
                setBlogPosts(data);
            } catch (error) {
                console.error("Error fetching blog posts:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogPosts();
    }, []);

    // Filter posts based on search query
    const filteredPosts = blogPosts.filter((post) => {
        const query = searchQuery.toLowerCase();
        return (
            post.title.toLowerCase().includes(query) ||
            post.excerpt.toLowerCase().includes(query) ||
            post.category?.toLowerCase().includes(query)
        );
    });

    // Pagination calculations
    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
    const paginatedPosts = filteredPosts.slice(
        (currentPage - 1) * POSTS_PER_PAGE,
        currentPage * POSTS_PER_PAGE
    );

    // Render component
    return (
        <div className="max-w-3xl mx-auto pb-8 pr-4">
            {/* Header Section */}
            <div className="relative mb-12 space-y-6">
                <div className="space-y-2">
                    <h1 className="text-4xl bg-gradient-to-b from-[#8c95e4] to-[#292450]/90 text-transparent bg-clip-text  tracking-tight font-semibold mt-2 mb-2">
                        Blog & Articles
                    </h1>
                    <p className="">
                        Exploring web development, sharing insights, and
                        documenting my journey.
                    </p>
                </div>

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
                                        blogPosts.map((post) => post.category)
                                    ),
                                ].filter(Boolean).length
                            }
                        </span>{" "}
                        Categories
                    </div>
                </div>

                {/* Search Bar */}
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

            {/* Blog Posts Section */}
            <div className="space-y-8 mb-8">
                {loading ? (
                    <div className="flex items-center justify-center h-full">
                        <div className="flex flex-col items-center space-y-2">
                            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-slate-400"></div>
                            <p className="text-center text-slate-400">
                                Loading...
                            </p>
                        </div>
                    </div>
                ) : paginatedPosts.length > 0 ? (
                    paginatedPosts.map((post) => (
                        <Link href={`/blog/${post.slug}`} key={post.id}>
                            <article
                                className="overflow-hidden rounded-lg bg-slate-800/40 
                                         border border-slate-700/50 hover:border-slate-600 
                                         transition-all duration-200 group my-8"
                            >
                                {/* Thumbnail */}
                                <div className="h-48 w-full relative">
                                    <Image
                                        src={post.thumbnail}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-200"
                                        sizes="(max-width: 768px) 100vw, 768px"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6 space-y-3">
                                    <div className="flex items-center gap-4 text-xs text-slate-400">
                                        {post.category && (
                                            <>
                                                <span className="px-2 py-1 bg-slate-700/50 rounded-full">
                                                    {post.category}
                                                </span>
                                            </>
                                        )}
                                        <time>
                                            {new Date(
                                                post.date
                                            ).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            })}
                                        </time>
                                        <span>{post.readTime}</span>
                                    </div>

                                    <h2 className="text-xl font-semibold text-slate-300 group-hover:text-slate-300">
                                        {post.title}
                                    </h2>

                                    <p className="text-sm text-slate-400">
                                        {post.excerpt}
                                    </p>
                                </div>
                            </article>
                        </Link>
                    ))
                ) : (
                    <p className="text-center text-slate-400">
                        No articles found.
                    </p>
                )}
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
                            className={`px-3 py-1 rounded-md border ${
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
