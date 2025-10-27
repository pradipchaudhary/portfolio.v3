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
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
                '30': '7.5rem',
            },
            fontSize: {
                'xs': ['0.75rem', { lineHeight: '1.5' }],
                'sm': ['0.875rem', { lineHeight: '1.5715' }],
                'base': ['1rem', { lineHeight: '1.75' }],
                'lg': ['1.125rem', { lineHeight: '1.75' }],
                'xl': ['1.25rem', { lineHeight: '1.75' }],
                '2xl': ['1.5rem', { lineHeight: '1.5' }],
                '3xl': ['1.875rem', { lineHeight: '1.5' }],
                '4xl': ['2.25rem', { lineHeight: '1.4' }],
            },
            container: {
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                    lg: '3rem',
                    xl: '4rem',
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
