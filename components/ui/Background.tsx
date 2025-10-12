import React from "react";

const Background = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Soft base gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-gray-100/40 to-gray-200/30" />

            {/* Subtle radial glow spots */}
            <div className="absolute inset-0">
                <div className="absolute w-[600px] h-[600px] bg-purple-300/10 rounded-full top-[-100px] left-[-100px] blur-3xl" />
                <div className="absolute w-[500px] h-[500px] bg-indigo-300/10 rounded-full bottom-[-120px] right-[-80px] blur-2xl" />
                <div className="absolute w-[400px] h-[400px] bg-pink-300/10 rounded-full top-[200px] right-[150px] blur-2xl" />
            </div>

            {/* Ambient light overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.25),transparent_80%)] mix-blend-soft-light" />

            {/* Gentle vignette edges */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0)_100%)] pointer-events-none" />
        </div>
    );
};

export default Background;
