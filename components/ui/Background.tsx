
const Background = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Soft base gradient */}
            <div className="absolute inset-0 bg-zinc-50 dark:bg-black/20 transition-colors duration-700" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-gray-100/40 to-gray-200/30 dark:from-zinc-900/50 dark:via-zinc-950/40 dark:to-zinc-950/30" />
            {/* 
          

            {/* Ambient light overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.25),transparent_80%)] dark:bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.05),transparent_80%)] mix-blend-soft-light" />

            {/* Gentle vignette edges */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0)_100%)] dark:bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.2)_50%,rgba(0,0,0,0.5)_100%)] pointer-events-none" />
        </div>
    );
};

export default Background;
