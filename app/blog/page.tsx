// BlogPage.tsx

"use client";

import React, { Suspense, useState } from "react";
import BlogPosts from "./BlogPosts"; // Import the new BlogPosts component
import BlogPostSkeleton from "./BlogPostSkeleton"; // Your skeleton loading component

const BlogPage = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [currentPage, setCurrentPage] = useState<number>(1);

    return (
        <div className="max-w-3xl mx-auto pb-8 pr-4">
            {/* Header Section */}
            <div className="relative mb-12 space-y-6">
                <div className="space-y-2">
                    <h1 className="text-4xl bg-gradient-to-b from-[#8c95e4] to-[#292450]/90 text-transparent bg-clip-text  tracking-tight font-semibold mt-2 mb-2">
                        Blog & Articles
                    </h1>
                    <p>
                        Exploring web development, sharing insights, and
                        documenting my journey.
                    </p>
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
                </div>
            </div>

            {/* Blog Posts Section */}
            <Suspense fallback={<BlogPostSkeleton />}>
                <BlogPosts
                    currentPage={currentPage}
                    searchQuery={searchQuery}
                />
            </Suspense>

            {/* Pagination */}
            {/* Pagination logic goes here */}
        </div>
    );
};

export default BlogPage;
