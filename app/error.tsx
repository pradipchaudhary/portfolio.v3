// apps/web/app/error.tsx
"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global Error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-black px-6 text-center">
      <div className="max-w-md">
        <h1 className="text-4xl font-bold text-red-500 mb-4">
          Something went wrong
        </h1>

        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
          An unexpected error occurred. Try reloading the page or come back later.
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-5 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black transition hover:opacity-80"
          >
            Try Again
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="px-5 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}