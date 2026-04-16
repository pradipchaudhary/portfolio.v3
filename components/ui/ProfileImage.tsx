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
      {/* Animated Border */}
      {/* <div className="absolute inset-0 rounded-full overflow-hidden">
        <div className="w-full h-full border-2 border-t-2 border-b-2 border-gradient-to-r from-blue-200 via-blue-300 to-blue-200 rounded-full animate-[slide_3s_linear_infinite]" />
      </div> */}

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
        className="rounded-full object-cover border-[3px] border-white dark:border-zinc-900 shadow-md"
      />
    </motion.div>
  );
}