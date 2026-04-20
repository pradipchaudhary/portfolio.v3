"use client";

type Post = {
  title: string;
  description: string;
  date: string;
  readTime: string;
  slug: string;
};

const posts: Post[] = [
  {
    title: "Building Scalable Full-Stack Apps with Next.js",
    description:
      "A practical guide to structuring modern full-stack applications using App Router, server components, and clean architecture.",
    date: "April 2026",
    readTime: "6 min read",
    slug: "#",
  },
  {
    title: "Designing Clean UI Systems with Tailwind CSS",
    description:
      "How to create consistent, scalable UI systems using utility-first principles and design tokens.",
    date: "March 2026",
    readTime: "5 min read",
    slug: "#",
  },
  {
    title: "From Idea to Product: Developer Workflow",
    description:
      "A structured workflow to go from idea validation to shipping real-world applications efficiently.",
    date: "February 2026",
    readTime: "7 min read",
    slug: "#",
  },
];

export default function BlogPage() {
  return (
    <main className="py-20 px-6 sm:px-10">
      {/* Header */}
      <header className="mb-12 max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          Blog
        </h1>

        <p className="mt-4 text-gray-600 dark:text-gray-400 leading-7">
          Thoughts, insights, and practical guides on full-stack development,
          UI engineering, and building scalable digital products.
        </p>
      </header>

      {/* Blog List */}
      <div className="space-y-10">
        {posts.map((post) => (
          <a
            key={post.title}
            href={post.slug}
            className="group block border-b border-gray-200 dark:border-gray-800 pb-6 transition-colors"
          >
            {/* Meta */}
            <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500 mb-2">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            {/* Title */}
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors group-hover:text-black dark:group-hover:text-gray-300">
              {post.title}
            </h2>

            {/* Description */}
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-6 max-w-2xl">
              {post.description}
            </p>
          </a>
        ))}
      </div>

      {/* Empty State */}
      {posts.length === 0 && (
        <div className="mt-20 border border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-10 text-center bg-gray-50 dark:bg-gray-900">
          <p className="text-lg font-medium text-gray-800 dark:text-white">
            ✍️ Writing in progress
          </p>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
            Articles on development, design, and system architecture will be published soon.
          </p>
        </div>
      )}
    </main>
  );
}