"use client";

import Image from "next/image";
import FollowMeSocial from "@/components/ui/FollowMeSocial";
import { Check } from "lucide-react";
import Navbar from "./Navbar";
import Link from "next/link";



const Sidebar = () => {


  return (
    <aside className="sm:w-full md:w-1/2 lg:w-1/2 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:min-h-screen lg:flex-col lg:justify-between lg:py-20 lg:pb-8 px-6 ">
      {/* // lg:pb-8 for some breathing room at the bottom bg-gray-50 border-x border-gray-200 */}
      {/* === TOP SECTION === */}
      <header className="flex flex-col items-center text-center">
        <div className="relative w-28 h-28">
          <Image
            src="/logo.png"
            alt="Pradip Chaudhary"
            fill
            className="rounded-full border border-gray-300 shadow-sm object-cover"
          />
          <div className="absolute bottom-1 right-1 bg-white rounded-full p-1 border border-gray-200 shadow-md">
            <Check className="w-4 h-4 text-green-500" />
          </div>
        </div>

        <Link href="https://pradipchaudhary.com" target="_blank" className="mt-4">
          <h1 className="mt-2 text-xl font-semibold text-gray-900">Pradip Chaudhary</h1>
          <p className="text-sm text-gray-500 -mt-2 font-sans mb-1">@pradipchaudhary</p>
        </Link>

        <p className="mt-2 text-sm text-gray-500 max-w-[300px] font-sans leading-tight">
          Full Stack Developer <br /> Building modern web experiences.
        </p>

        {/* Navbar Menu */}
        <Navbar />
      </header>


      <FollowMeSocial />

    </aside>
  );
};

export default Sidebar;
