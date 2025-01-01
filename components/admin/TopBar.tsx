"use client";

import React, { useState } from "react";
import {
    Search,
    Bell,
    User,
    ChevronDown,
    Menu,
    MessageSquare,
    LogOut,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TopBar() {
    const router = useRouter();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleLogout = async () => {
        try {
            const response = await fetch("/api/auth/logout", {
                method: "POST",
            });

            if (response.ok) {
                router.push("/login");
            }
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <div className="sticky top-0 z-50 p-[0.38rem]  border-b border-[#2d2854]/30 backdrop-blur-sm bg-opacity-80">
            <div className="flex h-16 items-center justify-between px-6">
                {/* Left Section */}
                <div className="flex items-center gap-4">
                    <button className="lg:hidden p-2 hover:bg-[#2d2854] rounded-lg transition-colors">
                        <Menu className="h-5 w-5 text-slate-400" />
                    </button>
                    <div className="relative hidden md:block">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-72 rounded-lg border border-[#2d2854] bg-[#1d193e] pl-10 pr-4 py-2 
                                     text-sm text-slate-200 placeholder:text-slate-500 
                                     focus:border-[#6f49d8]/50 focus:outline-none focus:ring-1 focus:ring-[#6f49d8]/50
                                     transition-all duration-300"
                        />
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-4">
                    {/* Quick Actions */}
                    <div className="hidden md:flex items-center gap-2">
                        <Link
                            href="/admin/messages"
                            className="relative p-2 text-slate-400 hover:text-slate-200 hover:bg-[#2d2854] 
                                     rounded-lg transition-all duration-300"
                        >
                            <MessageSquare className="h-5 w-5" />
                            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#6f49d8]"></span>
                        </Link>
                        <Link
                            href="/admin/notifications"
                            className="relative p-2 text-slate-400 hover:text-slate-200 hover:bg-[#2d2854] 
                                     rounded-lg transition-all duration-300"
                        >
                            <Bell className="h-5 w-5" />
                            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#6f49d8]"></span>
                        </Link>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block h-6 w-px bg-[#2d2854]"></div>

                    {/* Profile Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center gap-3 p-1.5 hover:bg-[#2d2854] rounded-lg 
                                     transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div
                                        className="h-9 w-9 rounded-full bg-[#6f49d8]/20 ring-2 ring-[#6f49d8]/50 
                                                  flex items-center justify-center transition-all duration-300
                                                  group-hover:ring-[#6f49d8]/70"
                                    >
                                        <User className="h-5 w-5 text-[#a893e9]" />
                                    </div>
                                    <div
                                        className="absolute bottom-0 right-0 h-3 w-3 rounded-full 
                                                  border-2 border-[#1d193e] bg-emerald-500"
                                    ></div>
                                </div>
                                <div className="hidden md:block text-left">
                                    <div className="text-sm font-medium text-slate-200">
                                        Admin User
                                    </div>
                                    <div className="text-xs text-slate-400">
                                        admin@example.com
                                    </div>
                                </div>
                            </div>
                            <ChevronDown className="h-4 w-4 text-slate-400 group-hover:text-slate-200 transition-colors" />
                        </button>

                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                            <div
                                className="absolute right-0 mt-2 w-48 rounded-lg bg-[#2d2854] shadow-lg 
                                          border border-[#6f49d8]/20 py-1 z-50"
                            >
                                <button
                                    onClick={handleLogout}
                                    className="w-full px-4 py-2 text-left text-sm text-slate-200 
                                             hover:bg-[#1d193e] flex items-center gap-2
                                             transition-colors duration-150"
                                >
                                    <LogOut className="h-4 w-4" />
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Search */}
            <div className="md:hidden px-4 pb-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full rounded-lg border border-[#2d2854] bg-[#1d193e] pl-10 pr-4 py-2 
                                 text-sm text-slate-200 placeholder:text-slate-500 
                                 focus:border-[#6f49d8]/50 focus:outline-none focus:ring-1 focus:ring-[#6f49d8]/50
                                 transition-all duration-300"
                    />
                </div>
            </div>
        </div>
    );
}
