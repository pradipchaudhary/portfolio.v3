import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomScroller from "@/components/shared/CustomScroller";
import { StoreProvider } from "./StoreProvider";
import Stars from "@/components/shared/Stars";

const inter = Inter({ subsets: ["latin"] });

// Metadata for SEO and social sharing
export const metadata: Metadata = {
    title: "Pradip Chaudhary - Full Stack Developer & Web Development Expert",
    description:
        "Pradip Chaudhary is a professional Full Stack Developer specializing in building responsive, high-performance web applications using modern technologies like React, Next.js, Node.js, and Tailwind CSS. Explore my portfolio for cutting-edge web development solutions.",
    keywords:
        "Pradip Chaudhary, Full Stack Developer, Web Development, React, Next.js, Node.js, JavaScript, Tailwind CSS, Frontend Development, Backend Development, Web Applications, SEO Expert",
    robots: "index, follow",

    openGraph: {
        title: "Pradip Chaudhary - Full Stack Developer Portfolio",
        description:
            "Explore the portfolio of Pradip Chaudhary, a Full Stack Developer specializing in React, Next.js, Node.js, and more. Offering cutting-edge solutions for modern web development.",
        url: "https://pradipchaudhary.com.np/",
        siteName: "Pradip Chaudhary's Portfolio",
        images: [
            {
                url: "https://pradipchaudhary.com.np/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Pradip Chaudhary Portfolio Image",
            },
        ],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        site: "@PradipChaudhary",
        creator: "@PradipChaudhary",
        title: "Pradip Chaudhary - Full Stack Developer Portfolio",
        description:
            "Explore Pradip Chaudhary's professional portfolio, showcasing web development projects with expertise in React, Next.js, Node.js, and more.",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                {/* Favicon and App Metadata */}
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <meta name="theme-color" content="#2d3748" />
                <meta
                    name="apple-mobile-web-app-title"
                    content="Pradip Chaudhary Portfolio"
                />
                <meta
                    name="application-name"
                    content="Pradip Chaudhary Portfolio"
                />
                <link rel="apple-touch-icon" href="/favicon-32x32.png" />
                <meta name="msapplication-TileColor" content="#2d3748" />
                <meta
                    name="msapplication-TileImage"
                    content="/favicon-32x32.png"
                />
            </head>
            <body className={inter.className}>
                <CustomScroller />
                <div className="relative min-h-screen w-full">
                    {/* Fixed Background */}
                    <div className="fixed inset-0 overflow-hidden">
                        {/* Base Gradient */}
                        <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-[#1a1333]" />

                        {/* Mesh Gradient */}
                        <div className="fixed inset-0 opacity-30">
                            <div className="fixed inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#6f49d8,transparent)]" />
                            <div className="fixed inset-0 bg-[radial-gradient(circle_600px_at_0%_300px,#432a84,transparent)]" />
                            <div className="fixed inset-0 bg-[radial-gradient(circle_1000px_at_50%_-100px,#2d1f54,transparent)]" />
                        </div>

                        {/* Vignette Effect */}
                        <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_80%)]" />
                    </div>
                    <Stars />

                    {/* Main Content */}
                    <div className="relative">
                        <StoreProvider>{children}</StoreProvider>
                    </div>
                </div>
            </body>
        </html>
    );
}
