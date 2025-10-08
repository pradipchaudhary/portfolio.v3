<<<<<<< HEAD
=======

>>>>>>> b2ed57a8a54c1285dd0dda7cc1c1e25f8173eb51
import React from "react";

const Background = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Soft gradient base */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#f9fafb] via-[#f3f4f6] to-[#e5e7eb]" />

            {/* Subtle radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(111,73,216,0.08),transparent_70%)]" />

            {/* Ambient light overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.4),transparent_70%)] mix-blend-soft-light" />

            {/* Gentle vignette edges */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_40%,rgba(255,255,255,1)_100%)] pointer-events-none" />
        </div>
    );
};

export default Background;
