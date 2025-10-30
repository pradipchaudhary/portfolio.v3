"use client";

const Loading = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header Skeleton */}
      <div className="mb-12">
        <div className="h-10 w-48 bg-gray-200 rounded-lg mb-4 animate-pulse"></div>
        <div className="h-6 w-3/4 bg-gray-200 rounded-lg animate-pulse"></div>
      </div>

      {/* Projects Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-xl overflow-hidden border border-gray-200"
          >
            {/* Image Skeleton */}
            <div className="h-48 bg-gray-200 animate-pulse"></div>

            {/* Content Skeleton */}
            <div className="p-6">
              {/* Title */}
              <div className="h-6 w-3/4 bg-gray-200 rounded-lg mb-4 animate-pulse"></div>

              {/* Description */}
              <div className="space-y-2 mb-4">
                <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse"></div>
              </div>

              {/* Tags */}
              <div className="flex gap-2 mb-4">
                <div className="h-6 w-16 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="h-6 w-16 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="h-6 w-16 bg-gray-200 rounded-full animate-pulse"></div>
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4 border-t border-gray-100">
                <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;