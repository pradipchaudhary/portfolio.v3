"use client";

import About from "@/components/about/About";

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

            {/* === DIVIDER === */}

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

