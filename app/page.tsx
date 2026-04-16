"use client";

import About from "@/components/sections/about/About";
import Certifications from "@/components/sections/certifications/Certifications";
import Experience from "@/components/sections/experience/Experience";
import Projects from "@/components/sections/projects/Projects";
import QuoteSection from "@/components/sections/quote/Quote";
import Skills from "@/components/sections/skills/Skills";
import LoadingScreen from "@/components/ui/LoadingScreen";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";


/**
 * HomePage Component — Enhanced Professional UI
 * ----------------------------------------------
 * Features:
 * - Balanced vertical spacing
 * - Improved footer and typography rhythm
 * - Clean, minimal, and professional design
 */
export default function HomePage() {
    const [isLoading, setIsLoading] = React.useState(true);
    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <motion.div
                        key="loading"
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
                    </motion.div>
                )}
            </AnimatePresence>
            {/* === ABOUT SECTION === */}
            {!isLoading && (
                <>
                    <About />
                    <Projects />
                    <Experience />
                    <Skills />
                    <Certifications />
                    <QuoteSection />
                </>
            )}


        </>
    );
}

