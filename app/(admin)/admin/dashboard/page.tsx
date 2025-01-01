"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Eye, FileText, Briefcase, Award, ArrowUp } from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
    return (
        <div className="min-h-screen p-6 space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-slate-200">
                    Dashboard Overview
                </h1>
                <p className="text-slate-400 mt-2">
                    Monitor and manage your portfolio content
                </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    {
                        label: "Total Projects",
                        value: "12",
                        change: "+2",
                        icon: <Briefcase className="h-5 w-5 text-[#6f49d8]" />,
                    },
                    {
                        label: "Blog Posts",
                        value: "24",
                        change: "+5",
                        icon: <FileText className="h-5 w-5 text-[#6f49d8]" />,
                    },
                    {
                        label: "Certifications",
                        value: "8",
                        change: "+1",
                        icon: <Award className="h-5 w-5 text-[#6f49d8]" />,
                    },
                    {
                        label: "Total Views",
                        value: "2.4K",
                        change: "+12%",
                        icon: <Eye className="h-5 w-5 text-[#6f49d8]" />,
                    },
                ].map((stat, index) => (
                    <Card
                        key={index}
                        className="bg-[#2d2854]/50 border-[#2d2854] p-5 hover:bg-[#2d2854]/70 
                                 transition-all duration-300 backdrop-blur-sm"
                    >
                        <div className="flex items-center justify-between">
                            <div className="h-12 w-12 rounded-lg bg-[#2d2854] flex items-center justify-center">
                                {stat.icon}
                            </div>
                            <span
                                className="flex items-center gap-1 text-xs font-medium text-[#6f49d8] 
                                         bg-[#6f49d8]/10 px-2.5 py-1 rounded-full"
                            >
                                <ArrowUp className="h-3 w-3" />
                                {stat.change}
                            </span>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-2xl font-bold text-slate-200">
                                {stat.value}
                            </h3>
                            <p className="text-sm text-slate-400 mt-1">
                                {stat.label}
                            </p>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Activity */}
                <Card className="bg-[#2d2854]/50 border-[#2d2854] p-6 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-bold text-slate-200">
                            Recent Activity
                        </h2>
                        <button className="text-sm text-slate-400 hover:text-slate-200 transition-colors">
                            View all
                        </button>
                    </div>
                    <div className="space-y-4">
                        {[
                            {
                                title: "New Project Added",
                                description: "Portfolio Website Redesign",
                                time: "2 hours ago",
                                icon: (
                                    <Briefcase className="h-4 w-4 text-[#6f49d8]" />
                                ),
                            },
                            {
                                title: "Blog Post Published",
                                description: "Getting Started with Next.js 14",
                                time: "5 hours ago",
                                icon: (
                                    <FileText className="h-4 w-4 text-[#6f49d8]" />
                                ),
                            },
                            {
                                title: "New Certification",
                                description: "AWS Cloud Practitioner",
                                time: "1 day ago",
                                icon: (
                                    <Award className="h-4 w-4 text-[#6f49d8]" />
                                ),
                            },
                        ].map((activity, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#2d2854] 
                                         transition-all duration-300"
                            >
                                <div className="p-2 rounded-lg bg-[#1d193e]">
                                    {activity.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-medium text-slate-200">
                                        {activity.title}
                                    </h3>
                                    <p className="text-sm text-slate-400">
                                        {activity.description}
                                    </p>
                                </div>
                                <span className="text-sm text-slate-500 whitespace-nowrap">
                                    {activity.time}
                                </span>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Quick Actions */}
                <Card className="bg-[#2d2854]/50 border-[#2d2854] p-6 backdrop-blur-sm">
                    <h2 className="text-lg font-bold text-slate-200 mb-6">
                        Quick Actions
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            {
                                title: "Add Project",
                                description: "Create a new project",
                                icon: (
                                    <Briefcase className="h-5 w-5 text-[#6f49d8]" />
                                ),
                                href: "/admin/projects/create-new",
                                color: "bg-[#6f49d8]/10",
                            },
                            {
                                title: "New Blog Post",
                                description: "Write an article",
                                icon: (
                                    <FileText className="h-5 w-5 text-[#6f49d8]" />
                                ),
                                href: "/admin/blog/create-new",
                                color: "bg-[#6f49d8]/10",
                            },
                            {
                                title: "Add Experience",
                                description: "Update work history",
                                icon: (
                                    <Briefcase className="h-5 w-5 text-[#6f49d8]" />
                                ),
                                href: "/admin/experience/create-new",
                                color: "bg-[#6f49d8]/10",
                            },
                            {
                                title: "Add Certification",
                                description: "Add new certification",
                                icon: (
                                    <Award className="h-5 w-5 text-[#6f49d8]" />
                                ),
                                href: "/admin/certifications/create-new",
                                color: "bg-[#6f49d8]/10",
                            },
                        ].map((action, index) => (
                            <Link
                                key={index}
                                href={action.href}
                                className="p-4 rounded-lg border border-[#2d2854] 
                                         hover:bg-[#2d2854] transition-all duration-300 group"
                            >
                                <div
                                    className={`w-10 h-10 rounded-lg ${action.color} 
                                              flex items-center justify-center mb-3`}
                                >
                                    {action.icon}
                                </div>
                                <h3 className="font-medium text-slate-200">
                                    {action.title}
                                </h3>
                                <p className="text-sm text-slate-400 mt-1">
                                    {action.description}
                                </p>
                            </Link>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
}
