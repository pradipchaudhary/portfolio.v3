"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutMe() {
    return (
        <section
            id="about"
            aria-label="About Pradip Chaudhary"
            className="max-w-3xl mx-auto pt-16 px-6 text-gray-700"
        >
            {/* Header Section */}
            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <span className="text-7xl block">🙏</span>
                <span className="text-5xl block font-semibold mt-2 mb-4">Namaste</span>

                <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#6f49d8] via-[#8b5cf6] to-[#b794f4] bg-clip-text text-transparent tracking-tight drop-shadow-sm">
                    I’m <span className="underline decoration-[#6f49d8]/30 underline-offset-4">Pradip Chaudhary</span>
                </h2>

                <p className="text-sm md:text-base text-gray-500 mt-3 tracking-wide">
                    React Developer • UI/UX Enthusiast • SEO & Web Scraping Explorer
                </p>

                <div className="w-16 h-1 bg-[#6f49d8] mx-auto mt-5 rounded-full" />
            </motion.div>

            {/* Description Section */}
            <motion.div
                className="space-y-6 leading-relaxed text-base md:text-lg text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                <p>
                    I’m an enthusiastic{" "}
                    <Link
                        href="https://react.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#6f49d8] font-medium hover:underline"
                    >
                        React Developer
                    </Link>{" "}
                    dedicated to crafting intuitive and dynamic web applications. I transform
                    complex ideas into smooth, interactive, and scalable digital experiences.
                </p>

                <p>
                    As a full-time{" "}
                    <Link
                        href="https://react.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#6f49d8] font-medium hover:underline"
                    >
                        React Developer
                    </Link>
                    , I specialize in building seamless and responsive UIs that bring designs
                    to life. Currently exploring{" "}
                    <Link
                        href="https://nextjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#6f49d8] font-medium hover:underline"
                    >
                        Next.js
                    </Link>{" "}
                    and{" "}
                    <Link
                        href="https://www.typescriptlang.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#6f49d8] font-medium hover:underline"
                    >
                        TypeScript
                    </Link>
                    , leveraging my skills in{" "}
                    <Link
                        href="https://www.behance.net/galleries/ui-ux/ui-ux"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#6f49d8] font-medium hover:underline"
                    >
                        UI/UX Design
                    </Link>{" "}
                    and{" "}
                    <Link
                        href="https://moz.com/beginners-guide-to-seo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#6f49d8] font-medium hover:underline"
                    >
                        SEO
                    </Link>
                    , alongside{" "}
                    <Link
                        href="https://scrapy.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#6f49d8] font-medium hover:underline"
                    >
                        Web Scraping
                    </Link>
                    , to deliver modern, high-performance solutions.
                </p>

                <p>
                    My toolkit includes modern frameworks and styling libraries such as{" "}
                    <Link
                        href="https://bulma.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#6f49d8] font-medium hover:underline"
                    >
                        Bulma
                    </Link>
                    ,{" "}
                    <Link
                        href="https://getbootstrap.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#6f49d8] font-medium hover:underline"
                    >
                        Bootstrap
                    </Link>
                    , and{" "}
                    <Link
                        href="https://tailwindcss.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#6f49d8] font-medium hover:underline"
                    >
                        Tailwind CSS
                    </Link>
                    . These tools help me create applications that are both functional and
                    visually refined.
                </p>
            </motion.div>

            {/* Quote Section */}
            <motion.blockquote
                className="mt-12 text-center italic text-gray-700 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
            >
                “Let’s build something extraordinary together!” 🚀
            </motion.blockquote>
        </section>
    );
}
