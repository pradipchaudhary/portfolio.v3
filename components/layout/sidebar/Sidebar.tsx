"use client";

import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import Navbar from "./Navbar";
import FollowMeSocial from "@/components/ui/FollowMeSocial";

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
        <div className="relative w-28 h-28">
          <Image
            src="/logo.png"
            alt="Pradip Chaudhary"
            fill
            priority
            className="rounded-full border border-gray-300 shadow-sm object-cover"
          />

          {/* Verified Icon */}
          <div className="absolute bottom-1 right-1 bg-white rounded-full p-1 border border-gray-200 shadow-md">
            <Check className="w-4 h-4 text-green-500" />
          </div>
        </div>

        {/* Name + Username */}
        <Link
          href="#"
          className="hover:opacity-80 transition "
        >
          <h1 className="text-xl font-semibold text-gray-900 -mt-2">
            Pradip Chaudhary
          </h1>
          <p className="text-sm text-gray-500 font-sans -mt-2">
            @pradipchaudhary
          </p>
        </Link>

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