
export default function ComponentsPage() {
  return (
    <section className="py-18">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
          Components
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl leading-7">
          A collection of reusable UI components and design patterns for building consistent and scalable user interfaces.
        </p>
      </header>

      {/* Coming Soon Box */}
      <div className="border border-dashed border-gray-300 rounded-xl p-10 bg-gray-50 mt-16">
        <p className="text-lg font-medium text-gray-800">
          🚧 Coming Soon
        </p>

        <p className="mt-3 text-sm text-gray-500">
          I'm currently designing and engineering a set of production-ready
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