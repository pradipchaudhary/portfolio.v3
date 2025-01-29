import React from "react";

const Background = () => {
    return (
        <div className="fixed inset-0 overflow-hidden">
            {/* Base Gradient for Night Sky */}
            <div className="fixed inset-0 bg-gradient-to-b from-[#0a0e27] via-[#151a40] to-[#1a234d]" />

            {/* Vignette Effect */}
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />
        </div>
    );
};

export default Background;
