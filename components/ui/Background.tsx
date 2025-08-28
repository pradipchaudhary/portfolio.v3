
import React from "react";

const Background = () => {
    return (
        <div className="fixed inset-0 overflow-hidden">
            {/* Base Gradient for a soft light background */}
            <div className="fixed inset-0 bg-gradient-to-b from-[#ffffff] via-[#f5f5f5] to-[#eaeaea]" />

            {/* Vignette Effect - light fade toward the edges */}
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.6)_50%,rgba(255,255,255,0.9)_100%)] pointer-events-none" />
        </div>
    );
};

export default Background;
