"use client";

import VisitorCounter from "@/components/ui/VisitorCount";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-6 mt-12 pl-4">
      <p className="text-sm text-gray-500 italic">
        Built with ❤️ by Pradip Chaudhary
      </p>
      <VisitorCounter />
    </footer>
  );
};

export default Footer;
