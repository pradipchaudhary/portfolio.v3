"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Email and password required");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        router.push("/dashboard");
        // router.refresh();
      } else {
        alert(data.error || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 text-foreground">

      {/* Card */}
      <div className="w-full max-w-sm rounded-2xl border border-foreground/[0.05] bg-background/90 backdrop-blur-md p-8 shadow-sm">

        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Admin Login
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Access your portfolio dashboard
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-muted-foreground">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              className="h-10 w-full rounded-lg border border-foreground/10 bg-background px-3 text-sm 
  outline-none transition-all duration-200
  focus:border-primary focus:ring-2 focus:ring-primary/30
  hover:border-foreground/20"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-muted-foreground">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="h-10 rounded-lg border bg-background/90 border-foreground/[0.08 px-3 text-sm outline-none focus:ring-2 focus:ring-primary/40"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-10 rounded-lg bg-primary text-primary-foreground text-sm font-medium transition hover:opacity-90 disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-xs text-muted-foreground text-center mt-6">
          Protected Admin Access
        </p>
        <div>
          <Link href="/" className="text-xs text-primary hover:underline block text-center mt-2">
            Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}