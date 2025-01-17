export interface Project {
    id: string;
    title: string;
    description: string;
    content: string;
    image: string;
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
    featured: boolean;
    gallery: string[];
    challenges: string[];
    solutions: string[];
    timeline: string;
    role: string;
    team: string[];
    slug: string;
    status: "completed" | "in-progress" | "planned"; // Example, adjust to your needs
}

export interface BlogPost {
    _id: string;
    id?: number;
    title: string;
    excerpt?: string | " ";
    readTime?: string;
    slug: string;
    thumbnail?: string;
    content: string;
    category?: string;
    createdAt?: string;
    updatedAt?: string;
}
