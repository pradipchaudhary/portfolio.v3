import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

// Define the page props with the expected params

// If you're using some function like checkFields, ensure that the types are correct

// Define the blog post type (ensure it matches your API response)
interface BlogPost {
    title: string;
    content: string;
    thumbnail: string;
    date: string;
    category: string;
    readTime: string;
}

// Function to fetch blog data dynamically
async function fetchBlogData(slug: string): Promise<BlogPost> {
    const response = await fetch(
        `https://portfolio-v3-api-pddz.onrender.com/api/blogs/slug/${slug}`,
        {
            next: { revalidate: 3600 }, // Revalidate every hour
        }
    );

    if (!response.ok) {
        throw new Error(`Failed to fetch blog data for slug: ${slug}`);
    }

    return response.json();
}

// Server Component for rendering a blog post
async function BlogPost({ slug }: { slug: string }) {
    const blog = await fetchBlogData(slug); // Fetch the blog data using the slug

    const { title, content, thumbnail, date, category, readTime } = blog;

    return (
        <article className="max-w-3xl mx-auto py-8 px-4">
            {/* Back Button */}
            <Link
                href="/blog"
                className="inline-flex items-center text-sm text-slate-400 hover:text-slate-200 mb-8"
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
                    <h1 className="text-3xl font-bold text-slate-200">
                        {title}
                    </h1>
                    <div className="flex items-center gap-8 text-sm text-slate-500">
                        {category && (
                            <span className="px-3 py-1 bg-slate-800/50 rounded-full">
                                {category}
                            </span>
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
                className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-200 prose-p:text-slate-400 prose-a:text-[#6f49d8] hover:prose-a:text-[#8b6ce7] prose-strong:text-slate-200 prose-code:text-slate-200 prose-ul:text-slate-400"
                dangerouslySetInnerHTML={{ __html: content || "" }}
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

// Loading skeleton for Suspense
function BlogPostSkeleton() {
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
export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    return (
        <Suspense fallback={<BlogPostSkeleton />}>
            <BlogPost slug={slug} />
        </Suspense>
    );
}
