"use client";

import About from "@/components/sections/about/About";
import Certifications from "@/components/sections/certifications/Certifications";
import Experience from "@/components/sections/experience/Experience";
import Projects from "@/components/sections/projects/Projects";
import QuoteSection from "@/components/sections/quote/Quote";
import Skills from "@/components/sections/skills/Skills";


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
            <About />
            <Projects />
            <Experience />
            <Skills />
            <Certifications />
            <QuoteSection />
            {/* === FOOTER === */}

        </>
    );
}

