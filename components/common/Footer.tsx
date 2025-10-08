"use client";
import React from "react";

const Footer = () => {
    return (
        <footer className="py-10 text-center border-t border-gray-200 mt-12">
            <p className="text-sm text-gray-600 leading-relaxed">
                © {new Date().getFullYear()} Pradip Chaudhary. All rights reserved.
            </p>
            <p className="text-xs text-gray-400 mt-1">
                Crafted with ❤️ using Next.js & Tailwind CSS.
            </p>
        </footer>
    );
};

export default Footer;
