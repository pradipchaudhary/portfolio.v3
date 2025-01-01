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
