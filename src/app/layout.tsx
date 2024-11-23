import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});
export const metadata: Metadata = {
    title: "Pradip Chaudhary - Full Stack Developer & Web Development Expert",
    description:
        "Pradip Chaudhary is a professional Full Stack Developer specializing in building responsive, high-performance web applications using modern technologies like React, Next.js, Node.js, and Tailwind CSS. Explore my portfolio for cutting-edge web development solutions.",
    keywords:
        "Pradip Chaudhary, Full Stack Developer, Web Development, React, Next.js, Node.js, JavaScript, Tailwind CSS, Frontend Development, Backend Development, Web Applications, SEO Expert",
    robots: "index, follow",

    // Open Graph Metadata for social media sharing (Facebook, LinkedIn, etc.)
    openGraph: {
        title: "Pradip Chaudhary - Full Stack Developer Portfolio",
        description:
            "Explore the portfolio of Pradip Chaudhary, a Full Stack Developer specializing in React, Next.js, Node.js, and more. Offering cutting-edge solutions for modern web development.",
        url: "https://pradipchaudhary.com.np/", // Make sure this is the correct URL
        siteName: "Pradip Chaudhary's Portfolio",
        images: [
            {
                url: "https://pradipchaudhary.com.np/og-image.jpg", // Replace with your own image URL
                width: 1200,
                height: 630,
                alt: "Pradip Chaudhary Portfolio Image",
            },
        ],
        type: "website",
    },

    // Twitter Card Metadata
    twitter: {
        card: "summary_large_image", // Use a large image for better visibility
        site: "@PradipChaudhary", // Twitter handle for your site
        creator: "@PradipChaudhary", // Your Twitter handle
        title: "Pradip Chaudhary - Full Stack Developer Portfolio",
        description:
            "Explore Pradip Chaudhary's professional portfolio, showcasing web development projects with expertise in React, Next.js, Node.js, and more.",
    },
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" />
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
                {/* Meta Tags for Favicons */}
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
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900 leading-relaxed text-slate-400  selection:bg-teal-300 selection:text-teal-900`}
            >
                <div className="relative group/spotlight">
                    {/* Main Content Container */}
                    <div className="mx-auto min-h-screen max-w-6xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
                        <div className="lg:flex lg:justify-between lg:gap-6">
                            {/* Header Section */}
                            <Header />
                            <main
                                id="content"
                                className="pt-24 lg:w-full lg:py-24 lg:pl-10 lg:pr-1"
                            >
                                {children}
                            </main>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
