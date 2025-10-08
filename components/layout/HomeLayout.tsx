"use client";

import React from "react";
import Background from "../ui/Background";

/**
 * HomeLayout Component
 * --------------------
 * Provides a consistent layout for all pages under the home section.
 * Includes:
 * - Background animation layer (behind content)
 * - Centered main content area with responsive padding
 * - Footer section (optional for future use)
 *
 * Props:
 * - children: React.ReactNode — the page content rendered inside the layout
 */
const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative min-h-screen flex flex-col overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
            {/* === Background Layer === */}
            <div className="absolute inset-0 -z-10">
                <Background />
            </div>

            {/* === Main Content === */}
            <main className="flex-grow w-full mx-auto max-w-6xl px-6 py-8 md:px-12 lg:px-24">
                {children}
            </main>
        </div>
    );
};

export default HomeLayout;
