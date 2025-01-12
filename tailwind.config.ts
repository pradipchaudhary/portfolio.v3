import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                // Custom color class
                "custom-text": "#7b74a6", // Example: Purple shade
            },
            animation: {
                heartbeat: "heartbeat 1.5s ease-in-out infinite",
            },
            keyframes: {
                heartbeat: {
                    "0%, 100%": { transform: "scale(1)", opacity: "1" },
                    "50%": { transform: "scale(1.3)", opacity: "0.6" },
                },
                moveBorderLine: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(100%)" },
                },
            },
            fontFamily: {
                custom: ["SignatureFont", "sans-serif"],
            },
            typography: {
                DEFAULT: {
                    css: {
                        body: {
                            backgroundColor: "#1e40af", // Tailwind blue-900
                            color: "#ffffff",
                        },
                        p: {
                            color: "#4e6f9f", // Tailwind gray-700
                            fontSize: ".9rem", // Tailwind text-lg
                        },
                    },
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
