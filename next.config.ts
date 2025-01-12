import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    // reactStrictMode: false,
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },

    images: {
        domains: ["res.cloudinary.com"],
    },
    // output: "export",
};

export default nextConfig;
