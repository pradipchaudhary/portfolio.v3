"use client";

import { motion } from "framer-motion";
import React from "react";
import PlainLink from "../common/PlainLink";

const About = () => {
  return (
    <section
      id="about"
      aria-label="About Pradip Chaudhary"
      className="max-w-3xl mx-auto pt-20 pb-20 text-gray-800"
    >
      {/* === INTRO HEADER === */}
      <motion.div
        className="flex flex-col items-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >


        {/* Developer Intro */}
        <p className="leading-relaxed text-sm md:text-base text-gray-700">
          Hey 👋 I’m <span className="font-semibold text-gray-900">Pradip Chaudhary</span> — a{" "}
          <PlainLink href="https://react.dev/">React Developer</PlainLink> passionate about crafting
          smooth, high-performing user interfaces and scalable web experiences.
        </p>

        <p className="text-sm md:text-base text-gray-600 mt-3 max-w-xl">
          I love exploring modern technologies like{" "}
          <PlainLink href="https://nextjs.org/">Next.js</PlainLink>,{" "}
          <PlainLink href="https://www.typescriptlang.org/">TypeScript</PlainLink>, and{" "}
          <PlainLink href="https://tailwindcss.com/">Tailwind CSS</PlainLink> to build powerful,
          responsive, and accessible digital products.
        </p>

      </motion.div>

      {/* === DESCRIPTION === */}
      <motion.div
        className="space-y-5 leading-relaxed text-sm md:text-base text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <p>
          I enjoy transforming creative ideas into elegant web solutions — combining{" "}
          <span className="font-medium text-gray-900">clean design</span> and{" "}
          <span className="font-medium text-gray-900">functional code</span>.
          My goal is to make the web faster, simpler, and more delightful to use.
        </p>

        <p>
          Outside of coding, I’m passionate about{" "}
          <PlainLink href="https://moz.com/beginners-guide-to-seo">SEO</PlainLink>,{" "}
          <PlainLink href="https://scrapy.org/">Web Scraping</PlainLink>, and building
          data-driven projects that bring real-world value.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
