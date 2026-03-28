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
        w-full md:w-1/2 lg:w-1/2
        lg:sticky lg:top-0
        lg:h-screen
        flex flex-col justify-between
        px-6 py-10 lg:py-16
      "
    >
      {/* ===== TOP SECTION ===== */}
      <header className="flex flex-col items-center text-center space-y-4">
        {/* Profile Image */}
        <ProfileImage src="/logo.png" alt="Pradip Chaudhary" />

        {/* Name + Username */}
        <Username username="pradipchaudhary" name="Pradip Chaudhary" />

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
          className="text-sm text-gray-500 max-w-[300px] leading-relaxed">
          Full Stack Developer <br />
          Building modern web experiences.
        </motion.p>

        {/* Navbar */}
        <Navbar />
      </header>

      {/* ===== SOCIAL SECTION ===== */}
      <div className="mt-10 lg:mt-0 ml-[-38px]">
        <FollowMeSocial />
      </div>
    </aside >
  );
};

export default Sidebar;