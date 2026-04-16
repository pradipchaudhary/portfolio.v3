
const Background = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Soft base gradient */}
            <div className="absolute inset-0 bg-zinc-50 dark:bg-black/20 transition-colors duration-700" />
            <div className="absolute inset-0 hidden dark:block bg-gradient-to-b from-zinc-900/50 via-zinc-950/40 to-zinc-950/30" />

            {/* Ambient light overlay - smaller spread - visible only in dark mode or extremely subtle */}
            <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.05),transparent_60%)] mix-blend-soft-light" />

            {/* Gentle vignette edges - tighter central hole - visible only in dark mode */}
            <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1)_70%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />
        </div>
    );
};

export default Background;

