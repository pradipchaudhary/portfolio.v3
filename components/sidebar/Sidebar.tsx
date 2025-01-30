"use client";
import Link from "next/link";
import FloatingDock from "../ui/FloatingDock";
import DownloadCV from "./DownloadCV";
import Navigation from "./Navigation";
import SidebarHeader from "./SidebarHeader";

const Sidebar = () => {
    return (
        <aside className="sm:w-full md:w-1/2 lg:w-1/2  lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:min-h-screen  lg:flex-col lg:justify-between lg:py-20 lg:pb-8 px-4">
            <DownloadCV />
            {/* text-4xl font-semibold tracking-tight sm:text-5xl */}
            <div>
                <SidebarHeader />
                {/* Navigation */}
                <Navigation />
            </div>
            {/* FOOTER  */}
            <div className="mt-4 flex items-center " aria-label="Social media">
                <FloatingDock />
            </div>
        </aside>
    );
};

export default Sidebar;
