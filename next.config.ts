import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    // reactStrictMode: false,
    async redirects() {
        return [
            {
                source: "/admin",
                destination: "/admin/dashboard",
                permanent: true, // Use `true` for 301 redirect or `false` for 302 redirect
            },
        ];
    },

    images: {
        domains: ["res.cloudinary.com"],
    },
};

export default nextConfig;
