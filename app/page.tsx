"use client";

import About from "@/components/about/About";
import Certifications from "@/components/Certifications";
import Experience from "@/components/experience/Experience";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";

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

            <Experience />
            <Skills />
            <Certifications />
            {/* === FOOTER === */}
            <Footer />
        </>
    );
}

