"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
    const { slug } = useParams(); // Correctly using useParams at the top of the component
    const [blog, setBlog] = useState<any>(null); // Allow any type for now
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    console.log("sluge : ", slug);
    console.log("blog : ", blog);

    useEffect(() => {
        const fetchBlog = async () => {
            if (!slug) {
                setError("No slug found");
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`/api/blog/${slug}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch blog post");
                }
                const data = await response.json();
                setBlog(data);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [slug]); // Add `slug` to the dependency array so it refetches if the slug changes

    // If data is still loading, show a loading message
    if (loading) {
        return <div>Loading...</div>;
    }

    // If there was an error fetching data
    if (error) {
        return <div>Error: {error}</div>;
    }

    // If no blog data exists or error is present, show a fallback
    if (!blog || blog.error) {
        return <div>Blog not found</div>;
    }
    const { title, excerpt, content, date, readTime, thumbnail, category } =
        blog.foundBlogPost;
    // Render the blog content when available
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
                    {/* Title */}
                    <h1 className="text-3xl font-bold text-slate-200">
                        {title}
                    </h1>
                    {/* Category and Date */}
                    <div className="flex items-center gap-8 text-sm text-slate-500">
                        {category && (
                            <>
                                <span className="px-3 py-1 bg-slate-800/50 rounded-full">
                                    {category}
                                </span>
                            </>
                        )}
                        <time className="italic">
                            {new Date(date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </time>
                        <span className="italic">{readTime}</span>
                    </div>
                </div>
            </header>

            {/* Featured Image */}
            <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
                <Image
                    src={thumbnail}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Article Content */}
            <div
                id="blog-content"
                className="prose prose-invert prose-slate max-w-none
                         prose-headings:text-slate-200 
                         prose-p:text-slate-400 
                         prose-a:text-[#6f49d8] hover:prose-a:text-[#8b6ce7]
                         prose-strong:text-slate-200
                         prose-code:text-slate-200
                         prose-ul:text-slate-400"
                dangerouslySetInnerHTML={{ __html: content }}
            />
            {/* <div>{content}</div> */}

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
};

export default Page;
