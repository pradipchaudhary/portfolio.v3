const Background = () => {
    return (
        <div className="absolute lg:fixed inset-0 -z-10 overflow-hidden">
            {/* Base */}
            <div className="absolute inset-0 bg-zinc-50 dark:bg-black/20 transition-colors duration-700" />

            {/* Dark Gradient */}
            <div className="absolute inset-0 hidden dark:block bg-gradient-to-b from-zinc-900/50 via-zinc-950/40 to-zinc-950/30" />

            {/* Ambient Light */}
            <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.05),transparent_60%)] mix-blend-soft-light" />

            {/* Vignette */}
            <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1)_70%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />
        </div>
    );
};

export default Background;