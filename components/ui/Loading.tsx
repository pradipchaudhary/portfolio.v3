// apps/web/app/loading.tsx

export default function Loading() {
  return (
    <main className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-white dark:bg-zinc-950">
      <div className="flex flex-col items-center">
        {/* Brand */}
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
          Portfolio
          <span className="text-zinc-400 dark:text-zinc-600">.v3</span>
        </h1>

        {/* Loading */}
        <div className="mt-4 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
          <span>Loading</span>

          <span className="flex gap-1">
            <span className="h-1 w-1 animate-pulse rounded-full bg-current" />
            <span className="h-1 w-1 animate-pulse rounded-full bg-current [animation-delay:150ms]" />
            <span className="h-1 w-1 animate-pulse rounded-full bg-current [animation-delay:300ms]" />
          </span>
        </div>
      </div>
    </main>
  );
}