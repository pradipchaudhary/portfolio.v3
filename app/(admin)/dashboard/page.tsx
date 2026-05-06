'use client'

export default function DashboardPage() {
  return (
    <div className="mt-16 text-neutral-900 dark:text-neutral-100">

      {/* Top Bar */}
      <header className="sticky top-0 z-50 backdrop-blur border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold tracking-tight">
            Portfolio Admin
          </h1>

          <div className="text-sm text-neutral-500">
            Welcome back
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-6xl mx-auto px-6 py-10 space-y-10">

        {/* Overview Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {[
            { label: "Projects", value: "12" },
            { label: "Messages", value: "5" },
            { label: "Visitors", value: "1,024" },
          ].map((item, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl border border-neutral-200/50 dark:border-neutral-800/50
              bg-white/50 dark:bg-neutral-900/50
              transition-all duration-300
               hover:shadow-sm"
            >
              <p className="text-sm text-neutral-500">
                {item.label}
              </p>
              <h2 className="text-3xl font-semibold mt-2 tracking-tight">
                {item.value}
              </h2>
            </div>
          ))}

        </section>

        {/* Recent Activity */}
        <section className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">

          <div className="p-5 border-b border-neutral-200 dark:border-neutral-800">
            <h3 className="font-medium tracking-tight">Recent Activity</h3>
          </div>

          <ul className="divide-y divide-neutral-200 dark:divide-neutral-800 text-sm">
            {[
              { title: "New project added", time: "2h ago" },
              { title: "Message received", time: "1d ago" },
              { title: "Portfolio updated", time: "3d ago" },
            ].map((item, i) => (
              <li
                key={i}
                className="p-5 flex justify-between items-center
                hover:bg-neutral-50 dark:hover:bg-neutral-800/50
                transition"
              >
                <span>{item.title}</span>
                <span className="text-neutral-500">
                  {item.time}
                </span>
              </li>
            ))}
          </ul>

        </section>

        {/* Quick Actions */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {[
            {
              title: "Manage Projects",
              desc: "Add, edit or remove portfolio projects.",
              btn: "Open",
            },
            {
              title: "Messages",
              desc: "View contact form submissions.",
              btn: "View",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800
              bg-white dark:bg-neutral-900
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-sm"
            >
              <h3 className="font-medium tracking-tight">
                {item.title}
              </h3>

              <p className="text-sm text-neutral-500 mt-1">
                {item.desc}
              </p>

              <div className="mt-5 flex gap-2">
                {/* Primary Button */}
                <button
                  className="px-4 py-2 text-sm rounded-lg
                  bg-neutral-900 text-white
                  dark:bg-white dark:text-neutral-900
                  hover:opacity-90 active:scale-[0.98]
                  transition"
                >
                  {item.btn}
                </button>

                {/* Ghost Button */}
                <button
                  className="px-4 py-2 text-sm rounded-lg
                  border border-neutral-200 dark:border-neutral-700
                  hover:bg-neutral-100 dark:hover:bg-neutral-800
                  transition"
                >
                  Details
                </button>
              </div>
            </div>
          ))}

        </section>

      </main>
    </div>
  );
}