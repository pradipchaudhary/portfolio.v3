// AnimatedText.tsx (or .jsx)
const AnimatedText = () => (
    <svg
        viewBox="0 0 800 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-4xl"
    >
        {/* Background Rect */}
        <rect width="100%" height="100%" fill="#191736" />

        {/* Gradient Definition */}
        <defs>
            <linearGradient id="gradation-1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                    offset="0%"
                    style={{ stopColor: "#38bdf8", stopOpacity: 1 }}
                />
                <stop
                    offset="100%"
                    style={{ stopColor: "#ec4899", stopOpacity: 1 }}
                />
            </linearGradient>
            <clipPath id="text-clip">
                <text
                    x="50"
                    y="120"
                    fontFamily="Arial, sans-serif"
                    fontSize="48"
                    fontWeight="bold"
                >
                    Pradip{" "}
                    <tspan x="50" dy="100">
                        Chaudhary
                    </tspan>
                </text>
            </clipPath>
        </defs>

        {/* Gradient Background */}
        <rect width="100%" height="100%" fill="url(#gradation-1)" />

        {/* Clipped Text Animation */}
        <g clipPath="url(#text-clip)">
            <rect
                x="-800"
                y="0"
                width="1600"
                height="200"
                fill="url(#gradation-1)"
            >
                <animate
                    attributeName="x"
                    from="-800"
                    to="800"
                    dur="5s"
                    repeatCount="indefinite"
                />
            </rect>
        </g>

        {/* Outline Text */}
        <text
            x="50"
            y="120"
            fontFamily="Arial, sans-serif"
            fontSize="48"
            fontWeight="bold"
            fill="none"
            stroke="white"
            strokeWidth="1"
        >
            Pradip{" "}
            <tspan x="50" dy="100">
                Chaudhary
            </tspan>
        </text>
    </svg>
);

export default AnimatedText; // Make sure it's exported as default
