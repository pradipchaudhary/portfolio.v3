"use client";

import React from "react";
import Image from "next/image";
import AnimatedSignature from "@/components/ui/signaturePath";
import { FaDownload } from "react-icons/fa6";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";



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
        <div className="relative flex items-center mb-7 ml-[10px] p-2.5 transform -rotate-1 transition-all duration-300">
          {/* Background Effect */}
          <div className="absolute inset-0 bg-white/90 rounded-lg shadow-[0_3px_10px_rgba(0,0,0,0.08)] transform rotate-1 hover:rotate-0 transition-all duration-300"></div>

          {/* Content */}
          <div className="relative flex items-center gap-2">
            <Image
              src="/namaste.png"
              alt="Pradip Chaudhary"
              width={52}
              height={52}
            />
            <span className="text-[2.25rem] text-gray-700 font-thin hover:text-gray-900 transition-colors duration-300">
              Namaste
            </span>
          </div>

          {/* Decorative Pin Effect */}
          <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-gradient-to-br from-red-400 to-red-500 rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.2)] ring-1 ring-red-400/20"></div>
          <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-gradient-to-br from-red-400 to-red-500 rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.2)] ring-1 ring-red-400/20"></div>
        </div>

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





      {/* === Signature, Name & Buttons Section === */}
      <div className="mt-12 flex flex-col items-start space-y-4">


        {/* === Action Buttons === */}
        <div className="flex flex-wrap gap-3 mt-4">
          {/* Resume Button (Now First) */}
          <a
            href="/Pradip-Chaudhary-CV.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-lg bg-gray-600 text-white text-sm font-medium tracking-wide shadow-md hover:bg-gray-700 hover:shadow-lg active:scale-[0.98] transition-all duration-200"
          >

            Resume
            <FaDownload className="text-gray-200 text-sm" />
          </a>

          {/* Hire Me Button (Now Second) */}
          <a
            href="mailto:pradip@example.com"
            className="inline-flex bg-red-50 border border-sm border-red-100 rounded-lg shadow-[0_3px_10px_rgba(0,0,0,0.05)] items-center justify-center gap-2 px-5 py-2 text-gray-800 text-sm font-medium tracking-wide hover:bg-white-100 active:scale-[0.98] transition-all duration-200"
          >
            Hire Me
          </a>
        </div>


        {/* Animated Signature */}
        <div className="mt-4">

          <AnimatedSignature color="#2563eb" />
          {/* <AnimatedSignature color="#dc2626" /> */}
          {/* <AnimatedSignature color="#222222" /> */}
        </div>


      </div>



    </section>
  );
};

export default About;
