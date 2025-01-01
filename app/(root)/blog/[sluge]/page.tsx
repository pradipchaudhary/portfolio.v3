"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
    id: string;
    title: string;
    content: string;
    date: string;
    readTime: string;
    author: {
        name: string;
        avatar: string;
    };
    category?: string;
    thumbnail: string;
}

// Mock data - replace with your actual data fetching logic
const post: BlogPost = {
    id: "1",
    title: "Understanding React Server Components",
    content: `
        <p>React Server Components are a new feature that allows components to be rendered on the server. This can improve performance and reduce the amount of JavaScript sent to the client.</p>
        
        <h2>What are Server Components?</h2>
        <p>Server Components are React components that are rendered on the server and can access server-side resources directly. They help reduce the bundle size and enable better performance.</p>
        
        <h2>Key Benefits</h2>
        <ul>
            <li>Reduced JavaScript bundle size</li>
            <li>Direct access to backend resources</li>
            <li>Improved initial page load</li>
            <li>Better SEO capabilities</li>
        </ul>
    `,
    date: "2024-03-15",
    readTime: "5 min read",
    author: {
        name: "John Doe",
        avatar: "/avatars/john.jpg",
    },
    category: "React",
    thumbnail: "/blog/react-server.png",
};

export default function BlogPost() {
    return (
        <article className="max-w-3xl mx-auto py-8 px-4">
            {/* Back Button */}
            <Link
                href="/blog"
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
                Back to Blog
            </Link>

            {/* Article Header */}
            <header className="mb-8">
                <div className="space-y-4">
                    {/* Category and Date */}
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                        {post.category && (
                            <>
                                <span className="px-2 py-1 bg-slate-800/50 rounded-full">
                                    {post.category}
                                </span>
                                <span>•</span>
                            </>
                        )}
                        <time>
                            {new Date(post.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </time>
                        <span>•</span>
                        <span>{post.readTime}</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl font-bold text-slate-200">
                        {post.title}
                    </h1>
                </div>
            </header>

            {/* Featured Image */}
            <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
                <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Article Content */}
            <div
                className="prose prose-invert prose-slate max-w-none
                         prose-headings:text-slate-200 
                         prose-p:text-slate-400 
                         prose-a:text-[#6f49d8] hover:prose-a:text-[#8b6ce7]
                         prose-strong:text-slate-200
                         prose-code:text-slate-200
                         prose-ul:text-slate-400"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Article Footer */}
            <footer className="mt-12 pt-8 border-t border-slate-800">
                <div className="flex items-center justify-between">
                    <div className="text-sm text-slate-400">
                        Share this article
                    </div>
                    <div className="flex gap-4">
                        {/* Add your social share buttons here */}
                        <button className="text-slate-400 hover:text-slate-200 transition-colors">
                            Twitter
                        </button>
                        <button className="text-slate-400 hover:text-slate-200 transition-colors">
                            LinkedIn
                        </button>
                    </div>
                </div>
            </footer>
        </article>
    );
}
