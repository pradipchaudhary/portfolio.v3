import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import HomeLayout from "@/components/layout/HomeLayout";

const inter = Inter({ subsets: ["latin"] });

// ==============================
// 🌐 ADVANCED SEO METADATA
// ==============================
export const viewport = {
    themeColor: "#0f172a", // Dark navy blue for brand consistency
    width: "device-width",
    initialScale: 1.0,
    maximumScale: 5.0,
    userScalable: true,
    viewportFit: "cover"
};

export const metadata: Metadata = {
    title:
        "Pradip Chaudhary | Full Stack Developer from Nepal | React, Next.js, Node.js, TypeScript & GraphQL Expert",
    description:
        "I'm Pradip Chaudhary — a Full Stack Developer from Nepal specializing in React, Next.js, Node.js, and TypeScript. I build scalable, high-performance web applications with clean UI/UX, modern APIs, and SEO optimization. Explore my portfolio and learn how I craft digital solutions for global brands.",
    keywords:
        "Pradip Chaudhary, pradip chaudhary, Pradeep Chaudhary, Pradip Choudhary, Pradeep Choudhary, Pradip Chaudary, Pradeep Chaudary, Pradip Chowdhary, Pradip Chowdary, Pradip Chaudhari, Pradeep Chaudhari, pradipchaudhary, pradip-chaudhary, pradip chaudhary nepal, pradipchaudhary nepal, Pradip C, Pradip K Chaudhary, P Chaudhary, pradipcoder, pradip developer, pradip chaudhary developer, pradip chaudhary programmer, pradip chaudhary web developer, pradip chaudhary full stack developer, pradip chaudhary react developer, pradip chaudhary nextjs developer, pradip chaudhary mern developer, pradip chaudhary software engineer, pradip chaudhary kathmandu, pradip chaudhary portfolio, pradip chaudhary website, pradip chaudhary github, pradip chaudhary linkedin, pradip chaudhary reactjs, pradip chaudhary nodejs, pradip chaudhary javascript, pradip chaudhary frontend developer, pradip chaudhary ui developer, pradip chaudhary nepal, pradip chaudhary tech, pradip chaudhary it professional, pradip chaudhary web designer, Full Stack Developer Nepal, React Developer, Next.js Developer, Full Stack Developer Portfolio using Next.js, React Developer Portfolio Template, Pradip Chaudhary Developer Portfolio, Node.js Developer, TypeScript Developer, GraphQL Developer, Frontend Developer, Backend Developer, Software Engineer Nepal, MERN Stack Developer, Web Developer Nepal, SEO Developer, UI UX Engineer, Web App Developer, JavaScript Expert, Tailwind CSS Developer, Remote Developer Nepal, Portfolio Website, Pradip Chaudhary Full Stack Developer Nepal, Pradip Chaudhary React.js Developer, Pradip Chaudhary MERN Stack Developer, Pradip Chaudhary Software Engineer Nepal, Pradip Chaudhary Official Website, Pradip Chaudhary Personal Website, Pradip Chaudhary Frontend Developer Nepal, Pradip Chaudhary Web Developer from Nepal, Pradip Chaudhary JavaScript Expert, Pradip Chaudhary TypeScript Developer, Pradip Chaudhary Next.js Engineer",
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
    verification: {
        google: "google-site-verification=HiE84E4kBt1bJ-0_dnIXM7FzBGG5xkrRyD58d45O9Hc", // add if available
    },
};
// google-site-verification=HiE84E4kBt1bJ-0_dnIXM7FzBGG5xkrRyD58d45O9Hc
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
