// BlogPosts.tsx

import React, { useEffect, useState } from "react";
import { BlogPost } from "@/types";
import Link from "next/link";
import Image from "next/image";

const POSTS_PER_PAGE = 6;

interface BlogPostsProps {
    currentPage: number;
    searchQuery: string;
}

const BlogPosts: React.FC<BlogPostsProps> = ({ currentPage, searchQuery }) => {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

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
    // const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
    const paginatedPosts = filteredPosts.slice(
        (currentPage - 1) * POSTS_PER_PAGE,
        currentPage * POSTS_PER_PAGE
    );

    if (loading) {
        return (
            <article className="animate-pulse overflow-hidden rounded-lg bg-slate-800/40 border border-slate-700/50 group my-8">
                {/* Thumbnail */}
                <div className="h-48 w-full bg-gray-500 relative"></div>
                {/* Content */}
                <div className="p-6 space-y-3">
                    <div className="flex items-center gap-4 text-xs">
                        <div className="h-6 w-1/4 bg-gray-500 rounded-lg"></div>
                        <div className="h-6 w-1/4 bg-gray-500 rounded-lg"></div>
                        <div className="h-6 w-1/4 bg-gray-500 rounded-lg"></div>
                    </div>
                    <div className="h-8 bg-gray-500 rounded-lg"></div>
                    <div className="h-6 bg-gray-500 rounded-lg"></div>
                </div>
            </article>
        ); // You can replace this with your `BlogPostSkeleton` component
    }

    return (
        <div>
            {paginatedPosts.map(
                (post) => (
                    console.log("object", post),
                    (
                        <Link key={post.id} href={`/blog/${post.slug}`}>
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
                    )
                )
            )}
        </div>
    );
};

export default BlogPosts;
