'use client'
export default function Admin() {
  return (
    <div className="mt-16 text-gray-900 dark:text-gray-100">

      {/* Top Bar */}
      <header className="sticky top-0 z-50 backdrop-blur border-b border-gray-200/60 dark:border-white/10 bg-white/70 dark:bg-black/70">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold tracking-tight">
            Portfolio Admin
          </h1>

          <div className="text-sm text-gray-500 dark:text-gray-400">
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
              className="group p-6 rounded-2xl border border-gray-200/70 dark:border-white/10 
              bg-white dark:bg-neutral-950
              hover:shadow-md hover:-translate-y-0.5
              transition-all duration-300"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.label}
              </p>
              <h2 className="text-3xl font-semibold mt-2 tracking-tight">
                {item.value}
              </h2>
            </div>
          ))}

        </section>

        {/* Recent Activity */}
        <section className="rounded-2xl border border-gray-200/70 dark:border-white/10 bg-white dark:bg-neutral-950">

          <div className="p-5 border-b border-gray-200/70 dark:border-white/10">
            <h3 className="font-medium tracking-tight">Recent Activity</h3>
          </div>

          <ul className="divide-y divide-gray-100 dark:divide-white/10 text-sm">
            {[
              { title: "New project added", time: "2h ago" },
              { title: "Message received", time: "1d ago" },
              { title: "Portfolio updated", time: "3d ago" },
            ].map((item, i) => (
              <li
                key={i}
                className="p-5 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-white/5 transition"
              >
                <span>{item.title}</span>
                <span className="text-gray-500 dark:text-gray-400">
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
              className="group p-6 rounded-2xl border border-gray-200/70 dark:border-white/10 
              bg-white dark:bg-neutral-950
              hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <h3 className="font-medium tracking-tight">{item.title}</h3>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {item.desc}
              </p>

              <button
                className="mt-5 px-4 py-2 text-sm rounded-lg 
                bg-black text-white 
                dark:bg-white dark:text-black
                hover:opacity-80 transition"
              >
                {item.btn}
              </button>
            </div>
          ))}

        </section>

      </main>
    </div>
  );
}