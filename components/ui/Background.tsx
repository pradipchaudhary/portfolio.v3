// import React from "react";

// const Background = () => {
//     return (
//         <div className="fixed inset-0 overflow-hidden">
//             {/* Base Gradient for a deep black background */}
//             <div className="fixed inset-0 bg-gradient-to-b from-[#000000] via-[#050505] to-[#101010]" />

//             {/* Vignette Effect - helps add depth and focus to the center */}
//             <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.7)_100%)] pointer-events-none" />
//         </div>
//     );
// };

// export default Background;


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
