"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      if (!res.ok) {
        throw new Error("Logout failed");
      }

      // Refresh app state (clears cached user/session)
      router.refresh();

      // Redirect to login page
      router.push("/login");
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-muted/40 transition group cursor-pointer"
    >
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-xs font-bold">
          PC
        </div>
        <div className="text-left">
          <p className="text-sm font-medium">Pradip C.</p>
          <p className="text-xs text-muted-foreground">
            {loading ? "Logging out..." : "Admin"}
          </p>
        </div>
      </div>

      <LogOut className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
    </button>
  );
}