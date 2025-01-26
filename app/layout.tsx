import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Stars from "@/components/Stars";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Background from "@/components/Background";
import PreLoader from "./preloader";
import { Suspense } from "react";
import Loading from "./loading";
import HomeLayout from "@/components/layout/HomeLayout";

const inter = Inter({ subsets: ["latin"] });

// Metadata for SEO and social sharing
export const metadata: Metadata = {
    title: "Pradip Chaudhary - Full Stack Developer & Web Development Expert",
    description:
        "Pradip Chaudhary is a professional Full Stack Developer specializing in building responsive, high-performance web applications using modern technologies like React, Next.js, Node.js, and Tailwind CSS. Explore my portfolio for cutting-edge web development solutions.",
    keywords:
        "Pradip Chaudhary, Full Stack Developer, Web Development, React, Next.js, Node.js, JavaScript, Tailwind CSS, Frontend Development, Backend Development, Web Applications, SEO Expert",
    robots: "index, follow",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <PreLoader />
                <Suspense fallback={<Loading />}>
                    <HomeLayout>
                        {children}
                    </HomeLayout>
                </Suspense>

            </body>
        </html>
    );
}
