import AdminLayout from "@/components/layout/AdminLayout";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <AdminLayout>{children}</AdminLayout>
        </>
    );
}
