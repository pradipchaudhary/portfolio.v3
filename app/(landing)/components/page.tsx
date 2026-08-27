import { SectionHeader } from "@/components/ui/SectionHeader";

export default function ComponentsPage() {
  return (
    <section className="">

      <SectionHeader title="Components" description="A collection of reusable UI components and design patterns for building consistent and scalable user interfaces." />

      {/* Coming Soon Box */}
      <div className="border border-dashed border-gray-300 dark:border-zinc-800 rounded-xl p-10 bg-gray-50 mt-16 dark:bg-zinc-900/50 backdrop-blur-sm">
        <p className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
          🚧 Coming Soon
        </p>

        <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
          I&apos;m currently designing and engineering a set of production-ready
          components. This section will be available soon.
        </p>
      </div>

      {/* Optional Hint */}
      {/* <p className="mt-10 text-xs text-gray-400">
        Built with Next.js, TypeScript, and Tailwind CSS
      </p> */}

    </section>
  )
}