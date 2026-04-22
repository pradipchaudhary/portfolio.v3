"use client";

import { motion } from "framer-motion";
import Navbar from "./Navbar";
import FollowMeSocial from "@/components/ui/FollowMeSocial";
import ProfileImage from "@/components/ui/ProfileImage";
import Username from "@/components/ui/Username";

const Sidebar = () => {
  return (
    <aside
      className="
        w-full lg:w-1/2
        lg:sticky lg:top-0
        lg:h-dvh
        flex flex-col justify-between
        px-6 py-10 lg:pt-16 lg:pb-6
      "
    >
      {/* ===== TOP SECTION ===== */}
      <div className="flex flex-col items-center text-center space-y-4">

        <ProfileImage src="/logo.png" alt="Pradip Chaudhary" />

        <Username username="pradipchaudhary" name="Pradip Chaudhary" />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          className="text-sm text-gray-500 dark:text-zinc-500 max-w-[320px] leading-relaxed"
        >
          Full Stack Developer <br />
          Building modern, scalable web experiences.
        </motion.p>

        <Navbar />
      </div>

      {/* ===== SOCIAL SECTION ===== */}
      <div className="mt-10 lg:mt-0 flex flex-col items-center text-center space-y-4">
        <FollowMeSocial />
      </div>
    </aside>
  );
};

export default Sidebar;