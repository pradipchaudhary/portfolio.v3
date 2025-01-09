interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    slug: string;
    thumbnail: string;
    category?: string;
    content?: string;
}

export const blogPosts: BlogPost[] = [
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
        content: `
                <p>React Server Components offer a revolutionary approach to rendering React applications. They allow server-side rendering (SSR) of components, reducing the JavaScript load on the client side and improving performance. In this blog, we’ll explore what React Server Components are, their benefits, and how they work.</p>

                <h2>Project Overview</h2>
                <p>React Server Components aim to enhance web performance by offloading some of the rendering and data-fetching responsibilities to the server. This feature enables developers to  build more efficient and faster web applications by minimizing the JavaScript that needs to be sent to the client.</p>
            `,
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
        thumbnail: "/blog/tailwind.png",
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
        thumbnail: "/blog/zustand.png",
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
        thumbnail: "/blog/nodejs.png",
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
        thumbnail: "/blog/css-grid.png",
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
        thumbnail: "/blog/docker.webp",
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
        thumbnail: "/blog/git.png",
        category: "DevOps",
    },
];
