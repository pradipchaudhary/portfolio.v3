"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const CustomScroller = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Add custom scrollbar styles dynamically
        const style = document.createElement("style");
        style.textContent = `
            html, body {
                overflow-x: hidden;
                max-width: 100%;
            }

            ::-webkit-scrollbar {
                width: 8px;
                background: transparent;
            }

            ::-webkit-scrollbar-track {
                background: rgba(45, 40, 84, 0.2);
                border-radius: 4px;
            }

            ::-webkit-scrollbar-thumb {
                background: linear-gradient(
                    to bottom,
                    rgba(111, 73, 216, 0.8),
                    rgba(111, 73, 216, 0.4)
                );
                border-radius: 4px;
                border: 2px solid rgba(45, 40, 84, 0.2);
            }

            ::-webkit-scrollbar-thumb:hover {
                background: linear-gradient(
                    to bottom,
                    rgba(111, 73, 216, 1),
                    rgba(111, 73, 216, 0.6)
                );
            }

            /* For Firefox */
            * {
                scrollbar-width: thin;
                scrollbar-color: rgba(111, 73, 216, 0.8) rgba(45, 40, 84, 0.2);
            }
        `;
        document.head.appendChild(style);

        // Handle scroll visibility
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            document.head.removeChild(style);
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 p-3 bg-[#2d2854]/80 backdrop-blur-sm
                     border border-[#6f49d8]/20 rounded-lg shadow-lg
                     hover:bg-[#2d2854] transition-all duration-300
                     group z-50 ${
                         isVisible
                             ? "opacity-100 translate-y-0"
                             : "opacity-0 translate-y-10 pointer-events-none"
                     }`}
        >
            <ArrowUp
                className="h-5 w-5 text-[#6f49d8] group-hover:text-white 
                               transition-all duration-300 group-hover:-translate-y-1"
            />
            <span
                className="absolute -top-8 left-1/2 -translate-x-1/2 
                           text-sm text-slate-300 opacity-0 group-hover:opacity-100
                           transition-all duration-300 whitespace-nowrap"
            >
                Back to top
            </span>
        </button>
    );
};

export default CustomScroller;
