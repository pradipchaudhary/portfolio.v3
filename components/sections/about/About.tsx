"use client";

import React from "react";
import ResumeDownload from "@/components/ui/ResumeDownload";
import Nameste from "@/components/ui/Namaste";
import Signature from "@/components/ui/Signature";



const About = () => {
  return (
    <section
      id="about"
      aria-label="About Pradip Chaudhary"
      className="max-w-3xl mx-auto mb-10 text-gray-800 pt-20 "
    >
      {/* === INTRO HEADER === */}
      <div className="flex flex-col items-start mb-7">
        {/* Namaste Image & Text */}
        <Nameste />

        {/* Developer Intro */}
        <p className="text-base md:text-base leading-relaxed text-gray-700 mt-2">
          Hi 👋, I’m{" "}
          {/* <span className="font-semibold text-gray-900">Pradip Chaudhary</span>, a{" "} */}
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block font-bold text-gray-900 transition-all duration-300"
          >
            React Developer
            {/* Elegant thin underline */}
            <svg
              className="absolute -bottom-[2px] left-0 w-full h-[10px] text-gray-400"
              viewBox="0 0 120 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 7C20 2 50 10 70 4C90 -2 110 8 118 3"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </a>{" "}
          passionate about creating performant, responsive, and user-friendly web applications.
        </p>

        <p className="text-base md:text-base leading-relaxed text-gray-600 mt-4 max-w-2xl">
          I enjoy exploring modern technologies such as{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block font-bold text-gray-900 transition-all duration-300"
          >
            Next.js
            <svg
              className="absolute -bottom-[2px] left-0 w-full h-[10px] text-gray-400"
              viewBox="0 0 120 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 7C20 2 50 10 70 4C90 -2 110 8 118 3"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </a>
          ,{" "}
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block font-bold text-gray-900 transition-all duration-300"
          >
            TypeScript
            <svg
              className="absolute -bottom-[2px] left-0 w-full h-[10px] text-gray-400"
              viewBox="0 0 120 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 7C20 2 50 10 70 4C90 -2 110 8 118 3"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </a>
          , and{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block font-bold text-gray-900 transition-all duration-300"
          >
            Tailwind CSS
            <svg
              className="absolute -bottom-[2px] left-0 w-full h-[10px] text-gray-400"
              viewBox="0 0 120 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 7C20 2 50 10 70 4C90 -2 110 8 118 3"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </a>{" "}
          to build clean, scalable, and accessible digital products.
        </p>

      </div>

      {/* === DESCRIPTION === */}
      <div className="space-y-6 text-base leading-relaxed text-gray-700">
        <p>
          I’m passionate about transforming ideas into elegant web solutions — combining{" "}
          <span className="font-medium text-gray-900">clean design</span> with{" "}
          <span className="font-medium text-gray-900">efficient, functional code</span>. My goal
          is to make the web simpler, faster, and more enjoyable for everyone.
        </p>

        <p>
          Beyond coding, I explore{" "}
          <a
            href="https://moz.com/beginners-guide-to-seo"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block font-bold text-gray-900 transition-all duration-300"
          >
            SEO
            <svg
              className="absolute -bottom-[2px] left-0 w-full h-[10px] text-gray-400"
              viewBox="0 0 120 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 7C20 2 50 10 70 4C90 -2 110 8 118 3"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </a>
          ,{" "}
          <a
            href="https://scrapy.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block font-bold text-gray-900 transition-all duration-300"
          >
            Web Scraping
            <svg
              className="absolute -bottom-[2px] left-0 w-full h-[10px] text-gray-400"
              viewBox="0 0 120 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 7C20 2 50 10 70 4C90 -2 110 8 118 3"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </a>
          , and data-driven projects that deliver real-world value and insights.
        </p>
      </div>




      <ResumeDownload />
      <Signature />
    </section>
  );
};

export default About;
