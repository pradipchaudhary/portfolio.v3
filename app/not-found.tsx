import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      {/* Error Code */}
      <h1 className="text-5xl font-extrabold text-gray-900 mb-2">404</h1>

      {/* Headline */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Page Not Found
      </h2>

      {/* Subtext */}
      <p className="text-gray-600 mb-4 max-w-sm">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      {/* Return Home Button */}
      <Link
        href="/"
        className="inline-block px-4 py-2 text-sm bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
      >
        Return Home
      </Link>
    </div>
  );
}
