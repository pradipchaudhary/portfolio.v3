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

// Mock data - replace with your actual data fetching logic
export const projects: Project[] = [
    {
        id: "1",
        title: "E-Commerce Platform",
        description:
            "A scalable e-commerce platform built with Next.js 14, Node.js, and Tailwind CSS.",
        content: `
            <p>An advanced e-commerce platform featuring product listings, a shopping cart, and secure checkout functionality.</p>
            <h2>Project Overview</h2>
            <p>Built to deliver a seamless online shopping experience with a focus on scalability and performance.</p>
            <h2>Technical Implementation</h2>
            <p>The platform leverages:</p>
            <ul>
                <li>Dynamic Routing for product pages</li>
                <li>Secure payment integration with Stripe</li>
                <li>Image Optimization with Next.js</li>
                <li>Responsive design with Tailwind CSS</li>
            </ul>
        `,
        image: "/projects/dashboard.png",
        technologies: ["Next.js", "Node.js", "Tailwind CSS", "Stripe API"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example/e-commerce",
        featured: true,
        gallery: [
            "/projects/e-commerce-1.jpg",
            "/projects/e-commerce-2.jpg",
            "/projects/e-commerce-3.jpg",
        ],
        challenges: [
            "Handling large-scale data operations",
            "Integrating secure payment methods",
            "Maintaining responsive layouts for all devices",
        ],
        solutions: [
            "Optimized backend with MongoDB aggregation",
            "Integrated Stripe for secure transactions",
            "Implemented responsive components using Tailwind CSS",
        ],
        timeline: "6 weeks",
        role: "Full Stack Developer",
        team: ["Alice Johnson", "Bob Clark"],
        slug: "e-commerce-platform",
        status: "completed",
    },
    {
        id: "2",
        title: "Blogging Platform",
        description:
            "A blogging platform with markdown support, user authentication, and real-time previews.",
        content: `
            <p>An intuitive platform for bloggers to write, edit, and share posts with ease.</p>
            <h2>Project Overview</h2>
            <p>Designed to provide content creators with tools to publish and manage their articles efficiently.</p>
            <h2>Technical Implementation</h2>
            <p>Key features include:</p>
            <ul>
                <li>Markdown editor with live previews</li>
                <li>User authentication and session management</li>
                <li>Dynamic theming options</li>
            </ul>
        `,
        image: "/projects/portfolio.jpg",
        technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example/blogging-platform",
        featured: false,
        gallery: [
            "/projects/thumbnail.svg",
            "/projects/thumbnail.svg",
            "/projects/thumbnail.svg",
        ],
        challenges: [
            "Creating a live markdown preview",
            "Implementing secure user authentication",
            "Supporting dynamic themes",
        ],
        solutions: [
            "Used react-markdown for live previews",
            "Implemented OAuth for user authentication",
            "Developed a theme switcher with Tailwind CSS",
        ],
        timeline: "4 weeks",
        role: "Frontend Developer",
        team: ["Chris Evans", "Dana White"],
        slug: "blogging-platform",
        status: "in-progress",
    },
    {
        id: "3",
        title: "Portfolio (v3)",
        description:
            "A modern and responsive personal portfolio built with Next.js, Tailwind CSS, and TypeScript.",
        content: `
        <p>A sleek and interactive portfolio showcasing personal projects, skills, and achievements.</p>
        <h2>Project Overview</h2>
        <p>The portfolio was designed to highlight the developer's work in a professional and user-friendly way.</p>
        <h2>Technical Implementation</h2>
        <p>The portfolio features:</p>
        <ul>
            <li>Server-side rendering with Next.js</li>
            <li>TypeScript for type safety</li>
            <li>Responsive design with Tailwind CSS</li>
            <li>Interactive animations with Framer Motion</li>
        </ul>
    `,
        image: "/projects/portfolio-v3.jpg",
        technologies: [
            "Next.js",
            "Tailwind CSS",
            "TypeScript",
            "Framer Motion",
        ],
        liveUrl: "https://example.com/portfolio",
        githubUrl: "https://github.com/example/portfolio-v3",
        featured: true,
        gallery: [
            "/projects/portfolio-1.jpg",
            "/projects/portfolio-2.jpg",
            "/projects/portfolio-3.jpg",
        ],
        challenges: [
            "Ensuring responsive design across various devices",
            "Integrating animations smoothly",
            "Optimizing for performance",
        ],
        solutions: [
            "Used Tailwind CSS for efficient styling",
            "Implemented Framer Motion for smooth animations",
            "Optimized assets and lazy loading to enhance performance",
        ],
        timeline: "3 weeks",
        role: "Frontend Developer",
        team: ["Pradip Chaudhary"],
        slug: "portfolio-v3",
        status: "completed",
    },
    {
        id: "4",
        title: "Beauty Parlor Website",
        description:
            "A professional website for showcasing beauty and salon services, built with Next.js 14, Tailwind CSS, and integrated appointment booking functionality.",
        content: `
        <p>An elegant and user-friendly platform for Ramita Beauty Parlor to highlight services, showcase testimonials, and enable customers to book appointments seamlessly.</p>
        <h2>Project Overview</h2>
        <p>Designed to enhance the online presence of the beauty parlor with a focus on aesthetics, usability, and responsiveness.</p>
        <h2>Technical Implementation</h2>
        <p>The platform leverages:</p>
        <ul>
            <li>Dynamic Routing for service detail pages</li>
            <li>Custom forms for appointment bookings</li>
            <li>SEO optimization for better online visibility</li>
            <li>Responsive design with Tailwind CSS</li>
        </ul>
    `,
        image: "/projects/beauty-parlor.jpg",
        technologies: ["Next.js", "Tailwind CSS", "Vercel Hosting"],
        liveUrl: "https://ramita-beautiparler.vercel.app/",
        githubUrl: "https://github.com/pradipchaudhary/ramita",
        featured: true,
        gallery: [
            "/projects/beauty-parlor-1.jpg",
            "/projects/beauty-parlor-2.jpg",
            "/projects/beauty-parlor-3.jpg",
        ],
        challenges: [
            "Showcasing a wide range of services visually",
            "Implementing a smooth appointment booking process",
            "Ensuring responsive design for all devices",
        ],
        solutions: [
            "Integrated a gallery and service pages using dynamic routing",
            "Developed a custom booking form with email notifications",
            "Styled responsive components with Tailwind CSS for a polished look",
        ],
        timeline: "4 weeks",
        role: "Frontend Developer",
        team: ["Pradip Chaudhary"],
        slug: "ramita-beauty-parlor",
        status: "completed",
    },
    {
        id: "5",
        title: "100+ JavaScript Projects",
        description:
            "An extensive collection of JavaScript projects designed to enhance problem-solving skills and explore various JavaScript functionalities, hosted on Vercel.",
        content: `
        <p>A showcase of 100 creative JavaScript projects, each focusing on different aspects of JavaScript programming, ranging from basic concepts to advanced techniques.</p>
        <h2>Project Overview</h2>
        <p>The goal of this project is to provide a comprehensive learning resource for JavaScript developers of all levels.</p>
        <h2>Technical Implementation</h2>
        <p>The platform includes:</p>
        <ul>
            <li>Interactive demos for each project</li>
            <li>Step-by-step explanations and code samples</li>
            <li>Search and filter functionality to find projects easily</li>
            <li>Responsive design for better accessibility</li>
        </ul>
    `,
        image: "/projects/100-js-projects.jpg",
        technologies: ["JavaScript", "HTML", "CSS", "Vercel Hosting"],
        liveUrl: "https://100jsproject.vercel.app/",
        githubUrl: "https://github.com/pradipchaudhary/100-javascript-projects",
        featured: true,
        gallery: [
            "/projects/100-js-1.jpg",
            "/projects/100-js-2.jpg",
            "/projects/100-js-3.jpg",
        ],
        challenges: [
            "Designing a scalable structure for 100 projects",
            "Ensuring code readability and simplicity for beginners",
            "Implementing responsive and user-friendly navigation",
        ],
        solutions: [
            "Organized the projects into categories with clear descriptions",
            "Provided detailed comments and step-by-step guides",
            "Used responsive CSS for consistent rendering on all devices",
        ],
        timeline: "12 weeks",
        role: "Full Stack Developer",
        team: ["Pradip Chaudhary"],
        slug: "100-javascript-projects",
        status: "completed",
    },

    // Continue with the other projects similarly
];
