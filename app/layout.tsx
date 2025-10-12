import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import Background from "@/components/ui/Background";
import HomeLayout from "@/components/layout/HomeLayout";

const inter = Inter({ subsets: ["latin"] });

// ==============================
// 🌐 ADVANCED SEO METADATA
// ==============================
export const metadata: Metadata = {
    title:
        "Pradip Chaudhary | Full Stack Developer from Nepal | React, Next.js, Node.js, TypeScript & GraphQL Expert",
    description:
        "I'm Pradip Chaudhary — a Full Stack Developer from Nepal specializing in React, Next.js, Node.js, and TypeScript. I build scalable, high-performance web applications with clean UI/UX, modern APIs, and SEO optimization. Explore my portfolio and learn how I craft digital solutions for global brands.",
    keywords:
        "Pradip Chaudhary, Full Stack Developer Nepal, React Developer, Next.js Developer,Full Stack Developer Portfolio using Next.js, React Developer Portfolio Template, Pradip Chaudhary Developer Portfolio, Node.js Developer, TypeScript Developer, GraphQL Developer, Frontend Developer, Backend Developer, Software Engineer Nepal, MERN Stack Developer, Web Developer Nepal, SEO Developer, UI UX Engineer, Web App Developer, JavaScript Expert, Tailwind CSS Developer, Remote Developer Nepal, Portfolio Website",
    authors: [{ name: "Pradip Chaudhary", url: "https://www.pradipchaudhary.com.np" }],
    creator: "Pradip Chaudhary",
    publisher: "Pradip Chaudhary",
    metadataBase: new URL("https://www.pradipchaudhary.com.np"),
    alternates: {
        canonical: "https://www.pradipchaudhary.com.np",
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
        },
    },
    openGraph: {
        type: "website",
        url: "https://www.pradipchaudhary.com.np",
        title:
            "Pradip Chaudhary - Full Stack Developer from Nepal | React, Next.js, Node.js & TypeScript Expert",
        description:
            "Explore the portfolio of Pradip Chaudhary, a Full Stack Developer from Nepal specializing in React, Next.js, Node.js, TypeScript, and GraphQL. Passionate about building modern, scalable web applications with strong UI/UX and SEO performance.",
        siteName: "Pradip Chaudhary Portfolio",
        locale: "en_US",
        images: [
            {
                url: "https://www.pradipchaudhary.com.np/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Pradip Chaudhary - Full Stack Developer from Nepal",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@pradipchaudhary", // Replace with your handle if you have one
        creator: "@pradipchaudhary",
        title:
            "Pradip Chaudhary | Full Stack Developer from Nepal | React, Next.js, Node.js, TypeScript & GraphQL Expert",
        description:
            "Explore my portfolio — I'm Pradip Chaudhary, a professional Full Stack Developer from Nepal specializing in React, Next.js, Node.js, and TypeScript.",
        images: ["https://www.pradipchaudhary.com.np/twitter-image.jpg"],
    },
    category: "Technology",
    themeColor: "#0f172a", // Dark navy blue for brand consistency
    viewport:
        "width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover",
    verification: {
        google: "HiE84E4kBt1bJ-0_dnIXM7FzBGG5xkrRyD58d45O9Hc", // add if available
    },
};

// ==============================
// 🌍 STRUCTURED DATA (JSON-LD)
// ==============================
export const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Pradip Chaudhary",
    url: "https://www.pradipchaudhary.com.np",
    image: "https://www.pradipchaudhary.com.np/og-image.jpg",
    jobTitle: "Full Stack Developer",
    worksFor: {
        "@type": "Organization",
        name: "Freelance / Open Source",
    },
    sameAs: [
        "https://github.com/pradipchaudhary",
        "https://linkedin.com/in/pradipchaudhary",
        "https://x.com/pradipchaudhary",
        "https://www.pradipchaudhary.com.np",
    ],
    description:
        "Pradip Chaudhary is a Full Stack Developer from Nepal specializing in React, Next.js, Node.js, and TypeScript — building scalable, SEO-optimized web applications.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                {/* JSON-LD Structured Data for SEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </head>
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
