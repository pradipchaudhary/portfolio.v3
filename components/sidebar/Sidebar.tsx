"use client";

import Image from "next/image";
import { Check } from "lucide-react"; // lightweight icon import


const Sidebar = () => {
  return (
    <aside className="sm:w-full md:w-1/2 lg:w-1/2  lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:min-h-screen  lg:flex-col lg:justify-between lg:py-20 lg:pb-8 px-4 bg-red-100">
      {/* text-4xl font-semibold tracking-tight sm:text-5xl */}
      <header className="flex flex-col items-center text-center border-b border-gray-200 pb-6">
        {/* Avatar + Verified Badge */}
        <div className="relative w-28 h-28">
          <Image
            src="/logo.png"
            alt="Pradip Chaudhary"
            fill
            className="rounded-full border border-gray-300 shadow-sm object-cover"
            sizes="112px"
          />

          {/* ✅ VERIFIED BADGE (bottom-right corner) */}
          <div className="absolute bottom-1 right-1 bg-white rounded-full p-1 border border-gray-200 shadow-md">
            <Check className="w-4 h-4 text-green-500" />
          </div>
        </div>

        {/* Name */}
        <h1 className="mt-4 text-xl font-semibold text-gray-900">
          Pradip Chaudhary
        </h1>

        {/* Username */}
        <p className="text-sm text-gray-500">@pradipchaudhary</p>

        {/* Bio */}
        <p className="mt-2 text-sm text-gray-600 max-w-[200px]">
          💻 Full Stack Developer <br /> Building modern web experiences.
        </p>

        {/* Stats */}
        <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <span className="font-medium text-gray-700">120</span> followers
          </div>
          <div className="flex items-center gap-1">
            <span className="font-medium text-gray-700">90</span> following
          </div>
        </div>
      </header>

    </aside>
  );
};

export default Sidebar;
