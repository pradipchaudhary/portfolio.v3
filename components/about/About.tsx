"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import PlainLink from "../common/PlainLink";

const About = () => {
  return (
    <section
      id="about"
      aria-label="About Pradip Chaudhary"
      className="max-w-3xl mx-auto pt-0 mb-10 text-gray-800"
    >
      {/* === INTRO HEADER === */}
      <motion.div
        className="flex flex-col items-start mb-7"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Namaste Image & Text */}
        <div className="flex items-center mb-8 ml-[-20px]">
          <Image
            src="/namaste.png"
            alt="Pradip Chaudhary"
            width={80}
            height={80}
          />
          <span className="text-7xl text-gray-700 font-thin ">Namaste</span>
        </div>

        {/* Developer Intro */}
        <p className="text-base md:text-base leading-relaxed text-gray-700">
          Hi 👋, I’m{" "}
          <span className="font-semibold text-gray-900">Pradip Chaudhary</span>, a{" "}
          <PlainLink href="https://react.dev/">React Developer</PlainLink> passionate about creating
          performant, responsive, and user-friendly web applications.
        </p>

        <p className="text-base md:text-base leading-relaxed text-gray-600 mt-4 max-w-2xl">
          I enjoy exploring modern technologies such as{" "}
          <PlainLink href="https://nextjs.org/">Next.js</PlainLink>,{" "}
          <PlainLink href="https://www.typescriptlang.org/">TypeScript</PlainLink>, and{" "}
          <PlainLink href="https://tailwindcss.com/">Tailwind CSS</PlainLink> to build clean,
          scalable, and accessible digital products.
        </p>
      </motion.div>

      {/* === DESCRIPTION === */}
      <motion.div
        className="space-y-6 text-base leading-relaxed text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <p>
          I’m passionate about transforming ideas into elegant web solutions — combining{" "}
          <span className="font-medium text-gray-900">clean design</span> with{" "}
          <span className="font-medium text-gray-900">efficient, functional code</span>. My goal
          is to make the web simpler, faster, and more enjoyable for everyone.
        </p>

        <p>
          Beyond coding, I explore{" "}
          <PlainLink href="https://moz.com/beginners-guide-to-seo">SEO</PlainLink>,{" "}
          <PlainLink href="https://scrapy.org/">Web Scraping</PlainLink>, and data-driven projects
          that deliver real-world value and insights.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
