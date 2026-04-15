"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
  { text: "Programs must be written for people to read.", author: "Harold Abelson" },
  { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
  { text: "Before software can be reusable, it first has to be usable.", author: "Ralph Johnson" },
  { text: "Fix the cause, not the symptom.", author: "Steve Maguire" },
  { text: "Good code is its own best documentation.", author: "Steve McConnell" },
  { text: "Any fool can write code that a computer can understand.", author: "Martin Fowler" },
  { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
];

export default function QuoteRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const quote = quotes[index];

  return (
    <section className="w-full">
      <div className="mt-8">
        <div className="relative flex flex-col gap-0">

          {/* subtle line */}
          <div className="w-12 h-px bg-gray-300 dark:bg-gray-700 mb-2" />

          {/* Animated quote */}
          <div className="min-h-[90px]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={quote.text}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-xl md:text-2xl font-medium text-gray-900 dark:text-gray-100 leading-snug tracking-tight max-w-3xl"
              >
                “{quote.text}”
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Author */}
          <AnimatePresence mode="wait">
            <motion.p
              key={quote.author}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-sm text-gray-500 dark:text-gray-400"
            >
              —{" "}
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {quote.author}
              </span>
            </motion.p>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}