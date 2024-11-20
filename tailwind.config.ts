import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                lineColor: "#112044", // Define your custom color here
            },
            fontSize: {
                lg: "1rem", // Change text-lg to 1rem
            },
        },
    },
    plugins: [],
} satisfies Config;
