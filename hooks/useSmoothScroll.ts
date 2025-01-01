"use client";

import { useEffect } from "react";

export const useSmoothScroll = () => {
    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll(".scroll-fade");

            elements.forEach((element) => {
                const rect = element.getBoundingClientRect();
                const isVisible = rect.top <= window.innerHeight * 0.85;

                if (isVisible) {
                    element.classList.add("animate-fade-in");
                    element.classList.remove("opacity-0", "translate-y-10");
                }
            });
        };

        // Initial check
        handleScroll();

        // Add scroll listener
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
};
