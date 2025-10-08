import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import HomeLayout from "@/components/layout/HomeLayout";


const inter = Inter({ subsets: ["latin"] });


// Metadata for SEO and social sharing
export const metadata: Metadata = {
    title: "Pradip Chaudhary | Full Stack Developer | React, Next.js, Node.js, GraphQL & TypeScript Expert",
    description:
        "Pradip Chaudhary is an accomplished Full Stack Developer specializing in crafting robust, high-performance web applications with React, Next.js, Node.js, and modern APIs like GraphQL. Leveraging TypeScript for scalable and maintainable code, I deliver innovative and responsive digital solutions. Explore my portfolio for advanced web development expertise.",
    keywords:
        "Pradip Chaudhary, Software Enginner, Nepali Developer, Full Stack Developer, Web Development, React Developer, Next.js Developer, Pradip, pradip, Chaudhary, Node.js, GraphQL Developer, TypeScript Developer, JavaScript, Tailwind CSS, Frontend Development, Backend Development, Web Applications, Portfolio, Custom Software, API Development, Database Management, Scalable Web Solutions, Modern Web Tech, Digital Transformation",
    robots: "index, follow",
    openGraph: {
        title: "Pradip Chaudhary - Full Stack Developer | React, Next.js, Node.js, GraphQL & TypeScript Expertise",
        description: "Pradip Chaudhary is an accomplished Full Stack Developer specializing in crafting robust, high-performance web applications with React, Next.js, Node.js, GraphQL, and TypeScript. Explore my portfolio for advanced web development solutions.",
        url: "https://www.pradipchaudhary.com.np/", // REMEMBER TO REPLACE WITH YOUR ACTUAL WEBSITE URL
        type: "website",
        images: [
            {
                url: "https://www.pradipchaudhary.com.np/og-image.jpg", // REMEMBER TO REPLACE WITH A COMPELLING IMAGE URL (e.g., your headshot, a project screenshot)
                width: 1200,
                height: 630,
                alt: "Pradip Chaudhary - Full Stack Developer & Web Development Expert",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@yourtwitterhandle", // REMEMBER TO REPLACE WITH YOUR TWITTER HANDLE
        title: "Pradip Chaudhary | Full Stack Developer | React, Next.js, Node.js, GraphQL & TypeScript Expertise",
        description: "Pradip Chaudhary is an accomplished Full Stack Developer specializing in crafting robust, high-performance web applications with React, Next.js, Node.js, GraphQL, and TypeScript. Explore my portfolio for advanced web development solutions.",
        images: ["https://www.pradipchaudhary.com.np/twitter-image.jpg"], // Similar to Open Graph image
    },
};



export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Suspense fallback={<Loading />}>
                    <HomeLayout>
                        {children}
                    </HomeLayout>
                </Suspense>

            </body>
        </html>
    );
}
