"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Check, Copy } from "lucide-react";

export default function Username({
  name,
  username,
}: {
  name: string;
  username: string;
}) {
  const controls = useAnimation();
  const [copied, setCopied] = useState(false);
  const email = "chaudharypradip678@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  useEffect(() => {
    const sequence = async () => {
      // First animation (fade + slide)
      await controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      });

      // Small delay after first animation
      await new Promise((resolve) => setTimeout(resolve, 200));

      // Second animation (shake)
      await controls.start({
        rotate: [-1, 1, -1],
        transition: {
          duration: 0.4,
          repeat: 3,
          ease: "easeInOut",
        },
      });
    };

    sequence();
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
    >
      <motion.div
        whileHover={{
          rotate: 0,
          transition: { type: "spring", stiffness: 200, damping: 20 },
        }}
      >

        <div className="hover:opacity-80 transition mt-1">
          <h1 className="text-xl font-semibold text-gray-900 -mt-4 dark:text-zinc-50">
            {name}
          </h1>
          <div
            onClick={copyEmail}
            className="flex items-center justify-center gap-1 text-sm text-foreground/50 dark:text-foreground/40 px-2 font-sans py-  cursor-pointer transition-all group/email"
          >
            <span className="truncate max-w-[155px] decoration-foreground/20">{email}</span>
            {copied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3 opacity-30 group-hover/email:opacity-100" />}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}