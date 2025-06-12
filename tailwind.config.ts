import type { Config } from "tailwindcss";

export default {
    images: {
        remotePatterns: {
            protocol: "https",
        }
    },
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {

        },
    },
    plugins: [],
} satisfies Config;
