"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProfileImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
}

export default function ProfileImage({
  src,
  alt,
  width = 112,
  height = 112,
  fill = true,
}: ProfileImageProps) {
  return (
    <motion.div
      className="relative"
      style={{
        width: fill ? "112px" : width,
        height: fill ? "112px" : height,
      }}
      initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >

      {/* Profile Image */}
      <Image
        src={src}
        alt={alt}
        {...(fill
          ? {
            fill: true,
            sizes: "(max-width: 640px) 80px, (max-width: 768px) 96px, 112px",
          }
          : {
            width,
            height,
          })}
        priority
        className="rounded-full object-cover border-[3px] border-white dark:border-zinc-900 shadow-md dark:shadow-[0_15px_50px_-10px_rgba(0,0,0,0.4)] "
      />
      {/* Active Status Dot with Tooltip & Ping */}
      <div className="absolute bottom-4 right-0 group/status">
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] opacity-75" />
        <div className="relative w-3.5 h-3.5 bg-emerald-500 border-2 border-background dark:border-zinc-900 rounded-full shadow-lg cursor-help transition-transform hover:scale-110" />

        {/* Tooltip */}
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 rounded-lg bg-zinc-900/50 dark:bg-zinc-100/50 text-white dark:text-zinc-900 text-[11px] font-bold whitespace-nowrap opacity-0 group-hover/status:opacity-100 transition-opacity pointer-events-none shadow-xl">
          Interested in working together?
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-zinc-900 dark:border-t-zinc-100" />
        </div>
      </div>
    </motion.div>
  );
}