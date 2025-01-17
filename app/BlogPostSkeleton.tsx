// BlogPostSkeleton.tsx

const BlogPostSkeleton = () => {
    return (
        <article className="animate-pulse overflow-hidden rounded-lg bg-slate-800/40 border border-slate-700/50 group my-8">
            {/* Thumbnail */}
            <div className="h-48 w-full bg-gray-500 relative"></div>
            {/* Content */}
            <div className="p-6 space-y-3">
                <div className="flex items-center gap-4 text-xs">
                    <div className="h-6 w-1/4 bg-gray-500 rounded-lg"></div>
                    <div className="h-6 w-1/4 bg-gray-500 rounded-lg"></div>
                    <div className="h-6 w-1/4 bg-gray-500 rounded-lg"></div>
                </div>
                <div className="h-8 bg-gray-500 rounded-lg"></div>
                <div className="h-6 bg-gray-500 rounded-lg"></div>
            </div>
        </article>
    );
};

export default BlogPostSkeleton;
