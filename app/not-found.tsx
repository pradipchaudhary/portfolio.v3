import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen px-6">

      <div className="w-full max-w-md text-center">

        {/* 404 Code */}
        <h1 className="text-7xl font-extrabold tracking-tight 
          text-transparent bg-clip-text 
          bg-gradient-to-r from-slate-800 to-slate-500">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-6 text-2xl font-semibold text-slate-800">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-3 text-slate-600 leading-relaxed">
          The page you are looking for may have been removed,
          renamed, or is temporarily unavailable.
        </p>

        {/* Divider */}
        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

        {/* Back Button */}
        <div className="mt-8">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-6 py-2.5 
            text-sm font-medium rounded-lg
            text-white bg-gradient-to-r from-slate-800 to-slate-600
            hover:opacity-90 transition-all duration-200"
          >
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10.5L12 3l9 7.5M5 9.5V20h14V9.5"
              />
            </svg>
            Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}
