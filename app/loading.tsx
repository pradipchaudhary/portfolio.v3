// apps/web/app/loading.tsx
export default function GlobalLoading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 dark:bg-black/60 backdrop-blur-md">
      <div className="flex flex-col items-center gap-6">
        {/* Spinner */}
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-full border-4 border-zinc-300 dark:border-zinc-700" />
          <div className="absolute inset-0 rounded-full border-4 border-black dark:border-white border-t-transparent animate-spin" />
        </div>

        {/* Text */}
        <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300 tracking-wide">
          Loading experience...
        </p>
      </div>
    </div>
  );
}