"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import FollowMeSocial from "@/components/ui/FollowMeSocial";
import { Check } from "lucide-react";



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
    { label: "projects", href: "/projects", id: "projects" },
    { label: "experience", href: "/#experience", id: "experience" },
    { label: "blog", href: "/#blog", id: "blog" },
  ];

  // ✅ Determine active menu based on pathname & hash
  const isActive = (id: string) => {
    if (id === "home" && pathname === "/" && !hash) return true; // Home active on "/"
    if (hash === `#${id}`) return true; // Match hash
    return false;
  };

  return (
    <aside className="sm:w-full md:w-1/2 lg:w-1/2 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:min-h-screen lg:flex-col lg:justify-between lg:py-20 lg:pb-8 px-6">
      {/* // lg:pb-8 for some breathing room at the bottom */}
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
        <nav className="mt-6 px-8 w-full">
          <div className="relative pb-1 mb-4">
            <h2 className="text-xs font-medium text-gray-500 uppercase tracking-wider text-center">Menu</h2>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-[1px] bg-gradient-to-r from-gray-200 via-red-400 to-gray-200 rounded-full"></div>
          </div>

          <div className="relative rounded-full mb-6 mx-auto">
            <div className="absolute right-[35px] top-[-45px] rotate-90">
              <svg width="80" height="80" viewBox="0 0 81 84" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1087_2609)"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.5579 30.5227C22.4725 28.623 28.2492 29.3749 33.4667 31.6508C41.3459 35.0881 47.9522 42.0005 51.8464 48.614C54.2944 52.7702 54.4502 56.7492 55.8651 61.5377C55.9225 61.7316 56.1293 61.8068 56.3272 61.7054C56.5245 61.6049 56.6391 61.3648 56.5811 61.1718C55.1497 56.3272 54.9774 52.3095 52.5011 48.1044C48.5525 41.3988 41.8496 34.3948 33.8601 30.9088C28.4988 28.57 22.5574 27.8153 16.4791 29.7675C16.2743 29.8332 16.1259 30.0549 16.1476 30.2634C16.1694 30.472 16.3531 30.5884 16.5579 30.5227Z" fill="transparent" stroke="#7F7F7F" stroke-width="0.5" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M57.0873 62.1097C57.0832 62.0921 57.0533 61.9757 57.0388 61.8734C56.9763 61.45 56.9339 60.6847 56.9361 59.7042C56.947 56.4142 57.4643 50.7129 59.6242 47.3C59.7488 47.1031 59.7164 46.8667 59.5524 46.7716C59.3884 46.6764 59.1547 46.7579 59.0301 46.9548C56.7828 50.5058 56.2014 56.4357 56.1908 59.8586C56.1897 60.317 56.1975 60.7315 56.2135 61.0885C55.5902 60.3287 54.9902 59.5491 54.3985 58.7583C52.6959 56.4811 50.6985 54.9884 48.0625 53.8966C47.8867 53.8232 47.6568 53.9314 47.5515 54.1372C47.4454 54.3425 47.5029 54.5697 47.6794 54.6422C50.2161 55.6936 52.1405 57.1294 53.7796 59.3211C54.5532 60.3542 55.342 61.3695 56.1743 62.3467C56.2571 62.444 56.4755 62.6936 56.5123 62.7223C56.7223 62.886 56.9338 62.7112 56.9791 62.6705C57.0011 62.6509 57.2635 62.3944 57.0873 62.1097ZM56.4268 62.6084C56.4318 62.6161 56.4362 62.6247 56.4419 62.6329C56.4369 62.6266 56.4325 62.618 56.4268 62.6084Z" fill="transparent" stroke="#7F7F7F" stroke-width="0.5" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path></g><defs><clipPath id="clip0_1087_2609"><rect width="64.5423" height="52.3374" fill="white" transform="translate(0 51.8329) rotate(-53.4256)"></rect></clipPath></defs></svg>
            </div>
          </div>


          <div className="flex flex-wrap justify-center">
            {navItems.map((item, i) => {
              const active = isActive(item.id);
              return (
                <Link
                  key={i}
                  href={item.href}
                  className={`group inline-flex items-center text-[13px] transition-colors duration-200 ${active ? "text-gray-900 font-semibold" : "text-gray-500 hover:text-gray-900 pl-2"
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
