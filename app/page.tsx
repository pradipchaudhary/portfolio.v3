"use client";

import Footer from "@/components/layout/footer/Footer";
import About from "@/components/sections/about/About";
import Certifications from "@/components/sections/certifications/Certifications";
import Experience from "@/components/sections/experience/Experience";
import Projects from "@/components/sections/projects/Projects";
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
            {/* === FOOTER === */}
            <Footer />
        </>
    );
}

