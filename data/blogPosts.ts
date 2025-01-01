import { BlogPost } from "../types";

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        title: "Understanding React Server Components",
        excerpt:
            "A deep dive into React Server Components and how they change the way we build React applications.",
        content: `...your content here...`,
        date: "2024-03-15",
        readTime: "5 min read",
        author: {
            name: "John Doe",
            avatar: "/avatars/john.jpg",
        },
        category: "React",
        thumbnail: "/blog/react-server.png",
        slug: "understanding-react-server-components",
    },
    // ... other blog posts
];
