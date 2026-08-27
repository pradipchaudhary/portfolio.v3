"use client";

import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";

const posts = [
  {
    id: 1,
    title: "Getting Started with Next.js 16",
    excerpt:
      "Learn the fundamentals of the App Router, Server Components, and modern React development.",
    category: "Next.js",
    date: "July 30, 2026",
    readTime: "6 min read",
    tags: ["React", "Next.js"],
    slug: "getting-started-nextjs-16",
  },
  {
    id: 2,
    title: "Why TypeScript Makes You Faster",
    excerpt:
      "Discover how TypeScript improves maintainability and developer experience.",
    category: "TypeScript",
    date: "July 22, 2026",
    readTime: "5 min read",
    tags: ["TypeScript"],
    slug: "typescript-guide",
  },
  {
    id: 3,
    title: "Building Better UI with Tailwind CSS",
    excerpt:
      "Practical tips for creating beautiful interfaces without leaving your HTML.",
    category: "CSS",
    date: "July 12, 2026",
    readTime: "4 min read",
    tags: ["Tailwind", "CSS"],
    slug: "tailwind-css-ui",
  },
];

export default function BlogPage() {
  return (
    <div>
      <SectionHeader title="Blog" description="Thoughts, stories and ideas." />


      {/* Blog posts */}

      <div className="mt-8">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`} className="p-6 transition hover:shadow-lg">
            <h3 className="text-lg font-semibold">{post.title}</h3>

          </Link>
        ))}
      </div>
    </div >
  )
}