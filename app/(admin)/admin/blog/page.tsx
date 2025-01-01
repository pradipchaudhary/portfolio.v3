"use client";

import React from "react";
// import { Card } from "@/components/ui/card";
import {
    Search,
    Plus,
    Filter,
    Edit2,
    Trash2,
    Eye,
    Calendar,
    Tag,
} from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";

const blogs = [
    {
        id: 1,
        title: "Getting Started with Next.js 14",
        excerpt:
            "Learn how to build modern web applications with Next.js 14 and its new features.",
        coverImage: "/blog-1.jpg",
        published: true,
        tags: ["Next.js", "React", "Web Development"],
        createdAt: "2024-03-15",
        author: "John Doe",
    },
    {
        id: 2,
        title: "Modern State Management in React",
        excerpt:
            "Explore different state management solutions for React applications.",
        coverImage: "/blog-2.jpg",
        published: false,
        tags: ["React", "State Management", "Redux"],
        createdAt: "2024-03-14",
        author: "Jane Smith",
    },
    // Add more sample blogs
];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-[#0f1c31] p-6 space-y-6">
            {/* Header */}
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-200">
                        Blog Posts
                    </h1>
                    <p className="text-gray-400 mt-1">
                        Manage your blog content
                    </p>
                </div>
                <Link
                    href="/admin/blog/new"
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
                >
                    <Plus className="h-4 w-4" />
                    <span>New Post</span>
                </Link>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-6 lg:col-span-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search posts..."
                            className="w-full rounded-lg border border-[#243656] bg-[#1a2942] pl-10 pr-4 py-2.5 text-sm text-gray-200 placeholder:text-gray-500 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
                        />
                    </div>
                </div>
                <div className="md:col-span-6 lg:col-span-8 flex items-center justify-end gap-3">
                    <select className="rounded-lg border border-[#243656] bg-[#1a2942] px-4 py-2.5 text-sm text-gray-200 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/50">
                        <option value="">All Posts</option>
                        <option value="published">Published</option>
                        <option value="draft">Drafts</option>
                    </select>
                    <button className="flex items-center gap-2 px-4 py-2.5 border border-[#243656] text-gray-300 rounded-lg hover:bg-[#1a2942] transition-colors">
                        <Filter className="h-4 w-4" />
                        <span>Filter</span>
                    </button>
                </div>
            </div>

            {/* Blog Posts Grid - Updated for 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogs.map((blog) => (
                    <Card
                        key={blog.id}
                        className="bg-[#1a2942] border-[#243656] hover:shadow-lg transition-all duration-200"
                    >
                        {/* Cover Image */}
                        <div className="h-48 w-full rounded-t-lg bg-[#243656] overflow-hidden">
                            {blog.coverImage && (
                                <img
                                    src={blog.coverImage}
                                    alt={blog.title}
                                    className="w-full h-full object-cover"
                                />
                            )}
                        </div>

                        <div className="p-5 space-y-4">
                            {/* Content */}
                            <div className="space-y-2">
                                <div className="flex items-start justify-between gap-4">
                                    <h3 className="text-lg font-medium text-gray-200 line-clamp-1">
                                        {blog.title}
                                    </h3>
                                    <div className="flex items-center gap-1">
                                        <button className="p-2 hover:bg-[#243656] rounded-lg transition-colors">
                                            <Eye className="h-4 w-4 text-gray-400" />
                                        </button>
                                        <button className="p-2 hover:bg-[#243656] rounded-lg transition-colors">
                                            <Edit2 className="h-4 w-4 text-gray-400" />
                                        </button>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-400 line-clamp-2">
                                    {blog.excerpt}
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {blog.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-0.5 rounded-full text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Meta Information */}
                            <div className="flex items-center justify-between pt-4 border-t border-[#243656]">
                                <div className="flex items-center gap-1.5">
                                    <Calendar className="h-4 w-4 text-gray-400" />
                                    <span className="text-sm text-gray-400">
                                        {blog.createdAt}
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span
                                        className={`px-2 py-0.5 rounded-full text-xs ${
                                            blog.published
                                                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                                                : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                                        }`}
                                    >
                                        {blog.published ? "Published" : "Draft"}
                                    </span>
                                    <button className="p-1.5 hover:bg-[#243656] rounded-lg transition-colors">
                                        <Trash2 className="h-4 w-4 text-red-400" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
