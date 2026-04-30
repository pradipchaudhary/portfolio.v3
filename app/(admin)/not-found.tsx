"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white px-4">
      <div className="text-center max-w-md">
        {/* Animated 404 */}
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-[120px] font-extrabold tracking-tighter bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
        >
          404
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-2xl font-semibold"
        >
          Page Not Found
        </motion.h2>

        {/* Description */}
        <p className="text-white/60 mt-2">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-3 justify-center mt-6"
        >
          <Link
            href="/admin"
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition"
          >
            <Home size={18} />
            Dashboard
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 transition"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </motion.div>

        {/* Floating decoration */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="mt-10 flex justify-center opacity-40"
        >
          <Search size={40} />
        </motion.div>
      </div>
    </div>
  );
}
