export interface Skill {
    id?: number;
    name: string;
    percentage?: number;
    iconUrl?: string;
    isHighlighted: boolean;
}

export interface Certification {
    id?: number; // Optional unique identifier for the certification
    certificationYear?: number; // Optional year when the certification was obtained
    achieveCertifications?: string[]; // Optional array of strings listing different certifications or skills
}

export interface BlogPost {
    id?: string;
    title: string;
    excerpt: string;
    date?: string; // Format: YYYY-MM-DD
    readTime?: string; // Example: "5 min read"
    slug: string;
    thumbnail?: string; // Path to the thumbnail image
    category: string;
}
