// components/common/Loader.tsx
export function Loader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-5 h-5 border-2 border-zinc-400 border-t-transparent rounded-full animate-spin" />
      <span className="text-sm text-zinc-500">{label}</span>
    </div>
  );
}