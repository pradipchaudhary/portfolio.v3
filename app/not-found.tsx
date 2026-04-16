"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen px-6">

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md text-center"
      >
        {/* 404 */}
        <h1
          className="text-7xl font-extrabold tracking-tight
          text-gray-900 dark:text-white"
        >
          404
        </h1>

        {/* subtle underline accent */}
        <div className="mx-auto mt-4 h-[2px] w-12 bg-gray-900 dark:bg-white opacity-80" />

        {/* Title */}
        <h2 className="mt-6 text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Page not found
        </h2>

        {/* Description */}
        <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Actions */}
        <div className="mt-10 flex items-center justify-center gap-4">

          {/* Primary */}
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-5 py-2.5
            text-sm font-medium rounded-md
            text-white bg-gray-900
            dark:bg-white dark:text-black
            hover:opacity-90
            transition-all duration-200"
          >
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10.5L12 3l9 7.5M5 9.5V20h14V9.5"
              />
            </svg>
            Home
          </Link>

          {/* Secondary */}
          <button
            onClick={() => window.history.back()}
            className="px-5 py-2.5 text-sm font-medium rounded-md
            text-gray-700 dark:text-gray-300
            border border-gray-300 dark:border-gray-700
            hover:bg-gray-100 dark:hover:bg-white/5
            transition-all duration-200"
          >
            Go Back
          </button>
        </div>

        {/* Footer note */}
        <p className="mt-10 text-xs text-gray-400 dark:text-gray-500">
          Error code: 404
        </p>
      </motion.div>
    </div>
  );
}