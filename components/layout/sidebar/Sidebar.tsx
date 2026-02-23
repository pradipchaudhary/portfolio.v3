"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import FollowMeSocial from "@/components/ui/FollowMeSocial";
import { Check } from "lucide-react";
import SocialIcons from "@/components/ui/SocialIcons";



const Sidebar = () => {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateHash = () => setHash(window.location.hash);
      updateHash();
      window.addEventListener("hashchange", updateHash);
      return () => window.removeEventListener("hashchange", updateHash);
    }
  }, []);

  const navItems = [
    { label: "home", href: "/", id: "home" },
    { label: "about", href: "/#about", id: "about" },
    { label: "projects", href: "/#projects", id: "projects" },
    { label: "experience", href: "/#experience", id: "experience" },
    { label: "skills", href: "/#skills", id: "skills" },
    { label: "certifications", href: "/#certifications", id: "certifications" },
  ];

  // ✅ Determine active menu based on pathname & hash
  const isActive = (id: string) => {
    if (id === "home" && pathname === "/" && !hash) return true; // Home active on "/"
    if (hash === `#${id}`) return true; // Match hash
    return false;
  };

  return (
    <aside className="sm:w-full md:w-1/2 lg:w-1/2 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:min-h-screen lg:flex-col lg:justify-between lg:py-20 lg:pb-8 px-6 bg-red-50">

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

        <h1 className="mt-4 text-xl font-semibold text-gray-900">Pradip Chaudhary</h1>
        <p className="text-sm text-gray-500 -mt-1 mb-1">@pradipchaudhary</p>

        <p className="mt-2 text-sm text-gray-600 max-w-[300px]">
          💻 Full Stack Developer <br /> Building modern web experiences.
        </p>

        {/* === Navigation Menu === */}
        <nav className="mt-6 px-8">
          <div className="relative pb-1 mb-4">
            <h2 className="text-xs font-medium text-gray-500 uppercase tracking-wider text-center">Menu</h2>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-[1px] bg-gradient-to-r from-gray-200 via-red-400 to-gray-200 rounded-full"></div>
          </div>

          <div className="flex flex-wrap justify-center">
            {navItems.map((item, i) => {
              const active = isActive(item.id);
              return (
                <Link
                  key={i}
                  href={item.href}
                  className={`group inline-flex items-center text-[13px] transition-colors duration-200 ${active ? "text-gray-900 font-semibold" : "text-gray-500 hover:text-gray-900 pl-1"
                    }`}
                >
                  <span
                    className={`mr-[0.3px] font-mono ${active ? "text-gray-800" : "text-gray-400 group-hover:text-gray-500"
                      }`}
                  >
                    #
                  </span>
                  <span
                    className={`italic tracking-tight ${active ? "text-gray-800" : "group-hover:text-gray-700"
                      }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>
      </header>


      <FollowMeSocial />

    </aside>
  );
};

export default Sidebar;
