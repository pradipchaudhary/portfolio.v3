export default function ExperiencePage() {
  return (
    <main className="py-18">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          Experience
        </h1>

        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
          A showcase of my professional journey, highlighting key roles,
          projects, and achievements that have shaped my career in software
          development.
        </p>
      </header>

      <div className="space-y-6">
        {/* Example Experience Card */}
        <div className="p-6 rounded-xl border border-dashed border-gray-200 dark:border-gray-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Full Stack Developer
          </h3>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Company Name • 2024 - Present
          </p>

          <p className="mt-3 text-gray-600 dark:text-gray-400 leading-7">
            Built scalable web applications using modern technologies like
            React, Node.js, and MongoDB.
          </p>
        </div>
      </div>
    </main>
  );
}