"use client";

import React from "react";
import Background from "./Background";
import { ThemeToggle } from "../shared/ThemeToggle";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return <>
    <div className="relative min-h-screen w-full">
      {/* Fixed Background */}
      <Background />
      {/* Fixed Theme Toggle */}
      <div className="fixed right-2 top-2 z-50">
        <ThemeToggle />
      </div>
      {/* Main Content */}
      {children}
    </div>
  </>;
};

