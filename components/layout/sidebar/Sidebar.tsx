"use client";

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
        <p className="text-sm text-gray-500 max-w-[300px] leading-relaxed">
          Full Stack Developer <br />
          Building modern web experiences.
        </p>

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