import MainLayout from "@/components/layout/MainLayout";
import React from "react";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return <MainLayout>{children}</MainLayout>;
}
