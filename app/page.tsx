"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/**
 * HomePage Component — Enhanced Professional UI
 * ----------------------------------------------
 * Features:
 * - Balanced vertical spacing
 * - Improved footer and typography rhythm
 * - Clean, minimal, and professional design
 */
export default function HomePage() {
    return (
        <>
            {/* === ABOUT SECTION === */}
            <section
                id="about"
                aria-label="About Pradip Chaudhary"
                className="max-w-3xl mx-auto pt-20 pb-20 px-6 text-gray-800"
            >
                {/* === HEADER === */}
                <motion.div
                    className="text-center mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <Image
                        src="/namaste.png"
                        alt="Pradip Chaudhary"
                        width={120}
                        height={120}
                        className="rounded-full mx-auto mb-4 shadow-sm "
                    />

                    <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-3 text-gray-900 tracking-tight">
                        I’m Pradip Chaudhary
                    </h1>

                    <p className="text-sm md:text-base text-gray-600 mt-1 tracking-wide max-w-xl mx-auto">
                        React Developer • UI/UX Enthusiast • SEO & Web Scraping Explorer
                    </p>

                    <div className="w-14 h-1 bg-gray-300 mx-auto mt-5 rounded-full" />
                </motion.div>

                {/* === DESCRIPTION === */}
                <motion.div
                    className="space-y-5 leading-relaxed text-sm md:text-base text-gray-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <p>
                        I’m a passionate{" "}
                        <PlainLink href="https://react.dev/">React Developer</PlainLink> who
                        enjoys turning ideas into intuitive and responsive web applications.
                    </p>

                    <p>
                        Currently exploring{" "}
                        <PlainLink href="https://nextjs.org/">Next.js</PlainLink> and{" "}
                        <PlainLink href="https://www.typescriptlang.org/">TypeScript</PlainLink>,
                        while applying clean UI/UX design principles and{" "}
                        <PlainLink href="https://moz.com/beginners-guide-to-seo">SEO</PlainLink>{" "}
                        optimization. I also experiment with{" "}
                        <PlainLink href="https://scrapy.org/">Web Scraping</PlainLink> to build
                        data-driven solutions.
                    </p>

                    <p>
                        My frontend stack includes{" "}
                        <PlainLink href="https://tailwindcss.com/">Tailwind CSS</PlainLink>,{" "}
                        <PlainLink href="https://getbootstrap.com/">Bootstrap</PlainLink>, and{" "}
                        <PlainLink href="https://bulma.io/">Bulma</PlainLink>, ensuring projects
                        are clean, responsive, and accessible.
                    </p>
                </motion.div>
            </section>

            {/* === DIVIDER === */}
            <div className="max-w-3xl mx-auto border-t border-gray-200" />

            {/* === FOOTER === */}
            <footer className="py-10 text-center text-gray-500 text-xs md:text-sm">
                <p>
                    © {new Date().getFullYear()}{" "}
                    <strong className="font-semibold text-gray-700">
                        Pradip Chaudhary
                    </strong>
                    . All rights reserved.
                </p>

            </footer>
        </>
    );
}

/**
 * PlainLink Component
 * -------------------
 * Clean, accessible, and consistent link styling.
 */
function PlainLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-600 hover:text-blue-800 hover:underline underline-offset-2 transition-colors duration-150"
        >
            {children}
        </Link>
    );
}
