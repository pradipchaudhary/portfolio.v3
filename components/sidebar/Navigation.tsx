"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
    const pathname = usePathname(); // Get the current route

    const menuItem = [
        { name: "Intro", link: "/" },
        { name: "My Work", link: "/projects" },
        { name: "Blog", link: "/blog" },
    ];

    return (
        <nav className="md:mt-16 mt-6" aria-label="In-page jump links">
            <ul className="space-y-2">
                {menuItem.map((menu) => {
                    const isActive = pathname === menu.link; // Check if the current path matches the menu link

                    return (
                        <li key={menu.name}>
                            <Link
                                href={menu.link}
                                className={`group flex items-center py-2 transition-colors ${isActive
                                    ? "text-[#6743CD]" // Active color
                                    : "text-text hover:text-[#6743CD]" // Default & hover color
                                    }`}
                            >
                                <span
                                    className={`nav-indicator mr-3 h-px w-3 transition-all motion-reduce:transition-none ${isActive
                                        ? "w-4 bg-[#6743CD]" // Active indicator
                                        : "bg-slate-600 group-hover:w-4 group-hover:bg-[#6743CD]" // Default & hover indicator
                                        }`}
                                ></span>
                                <span className="nav-text text-xs font-bold uppercase tracking-tight">
                                    {menu.name}
                                </span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navigation;
