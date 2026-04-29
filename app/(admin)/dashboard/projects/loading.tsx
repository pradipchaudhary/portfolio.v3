// app/dashboard/projects/loading.tsx

export default function Loading() {
  return (
    <div className="mt-16 max-w-5xl space-y-4 animate-pulse">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="h-24 rounded-2xl bg-neutral-200 dark:bg-neutral-800"
        />
      ))}
    </div>
  );
}