export interface Blog {
    id: number; // Required, unique identifier
    title: string; // Required, title of the blog
    excerpt?: string; // Optional, short description
    content: string; // Required, main content
    date: Date; // Required, publication date
    readTime: string; // Required, estimated reading time
    slug: string; // Required, unique URL slug
    thumbnail?: string; // Optional, URL of the uploaded image
    imageId?: string; // Optional, ID from the third-party server
    category?: string; // Optional, category of the blog
    author?: string; // Optional, author name
    views: number; // Default 0, number of views
    likes: number; // Default 0, number of likes
    commentsCount: number; // Default 0, number of comments
    tags: string[]; // Array of tags
    isFeatured: boolean; // Default false, whether the blog is featured
    createdAt: Date; // Default to the current time, created timestamp
    updatedAt: Date; // Automatically updated timestamp
    seoTitle?: string; // Optional, SEO-friendly title
    seoDescription?: string; // Optional, SEO-friendly description
    seoKeywords?: string[]; // Optional, SEO keywords
}

export interface Project {
    id: string; // Required, unique identifier
    title: string; // Required, project title
    description: string; // Required, short project description
    content: string; // Required, detailed project content
    image: { url: string; id: string }; // Object containing image URL and ID
    technologies: string[]; // List of technologies used
    liveUrl?: string; // Optional, link to the live demo
    githubUrl?: string; // Optional, link to the GitHub repository
    featured: boolean; // Default false, whether the project is featured
    gallery: { url: string; id: string }[]; // Array of additional images or screenshots with URL and ID
    challenges: string[]; // Challenges faced during development
    solutions: string[]; // Solutions implemented to overcome challenges
    timeline: string; // Project timeline
    role: string; // Your role in the project
    team: string[]; // Team members involved
    slug: string; // Required, unique identifier for URLs
    status: string; // Current status (e.g., Completed, In Progress)
    createdAt: Date; // Default current time, created timestamp
    updatedAt: Date; // Automatically updated timestamp
    client?: string; // Optional, client name (if applicable)
    budget?: number; // Optional, project budget
    reviews?: Review[]; // Optional, list of related reviews/feedback
    tags: string[]; // Additional tags for categorization
    seoTitle?: string; // Optional, SEO-friendly title
    seoDescription?: string; // Optional, SEO-friendly description
    views: number; // Default 0, number of views
    likes: number; // Default 0, number of likes or reactions
    commentsCount: number; // Default 0, number of comments
    platform?: string; // Optional, platforms the project was built for (e.g., Web, Mobile)
    industry?: string; // Optional, industry served (e.g., E-commerce, EdTech)
    isArchived: boolean; // Default false, indicates if the project is archived
}

const demoBlog: Blog = {
    id: 1,
    title: "Understanding React Server Components",
    excerpt:
        "A deep dive into React Server Components and how they change the way we build React applications.",
    content:
        "React Server Components (RSC) allow developers to run components on the server and send the rendered HTML to the client...",
    date: new Date("2024-03-15"),
    readTime: "5 min read",
    slug: "understanding-react-server-components",
    thumbnail: "https://example.com/uploads/react-server.png",
    imageId: "img_12345",
    category: "React",
    author: "Pradip Chaudhary",
    views: 1245,
    likes: 150,
    commentsCount: 12,
    tags: ["React", "Server Components", "Frontend"],
    isFeatured: true,
    createdAt: new Date("2024-03-01T10:00:00Z"),
    updatedAt: new Date("2024-03-10T12:00:00Z"),
    seoTitle: "Understanding React Server Components | Pradip Chaudhary",
    seoDescription:
        "Explore React Server Components, their features, benefits, and how they revolutionize React application development.",
    seoKeywords: ["React", "Server Components", "React Development"],
};

const demoProject: Project = {
    id: "proj_001",
    title: "E-Commerce Platform",
    description: "An e-commerce platform for seamless online shopping.",
    content:
        "This platform offers a wide range of products with a user-friendly interface...",
    image: { url: "https://example.com/images/main.jpg", id: "img_12345" },
    technologies: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "https://ecommerce.example.com",
    githubUrl: "https://github.com/example/ecommerce-platform",
    featured: true,
    gallery: [
        { url: "https://example.com/images/gallery1.jpg", id: "img_67890" },
        { url: "https://example.com/images/gallery2.jpg", id: "img_11223" },
    ],
    challenges: ["Scalability", "Payment integration"],
    solutions: ["Used cloud services", "Integrated Stripe for payments"],
    timeline: "6 months",
    role: "Full-Stack Developer",
    team: ["Alice", "Bob"],
    slug: "ecommerce-platform",
    status: "Completed",
    createdAt: new Date("2024-01-15T10:00:00Z"),
    updatedAt: new Date("2024-02-20T12:00:00Z"),
    client: "TechCorp",
    budget: 50000,
    reviews: [],
    tags: ["E-commerce", "Web Development"],
    seoTitle: "E-Commerce Platform - Seamless Shopping",
    seoDescription:
        "Discover how we built a scalable e-commerce platform with cutting-edge technologies.",
    views: 2000,
    likes: 300,
    commentsCount: 20,
    platform: "Web",
    industry: "Retail",
    isArchived: false,
};
