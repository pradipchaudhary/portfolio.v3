"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfileImage({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.div className="relative w-28 h-28"
      initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Subtle Animated Border */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div className="w-full h-full border-2 border-t-2 border-b-2 border-gradient-to-r from-blue-200 via-blue-300 to-blue-200 rounded-full animate-[slide_3s_linear_infinite]"></div>
      </div>

      {/* Profile Image */}
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="rounded-full border-2 border-gray-200 shadow-md object-cover"
      />
    </motion.div>
  );
}