import Link from "next/link";
import React from "react";

const DownloadCV = () => {
    return (
        <div className="animation-container">
            {/* SVG Path */}
            <svg
                className="cv-path"
                width="154"
                height="700"
                viewBox="0 0 154 700"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    className="animated-dotted-path"
                    d="M51.4157 1C51.4157 1 47.2098 59.6921 51.4157 95.6208C62.863 193.41 140.253 171.043 151.608 250.58C162.964 330.116 103.516 437.079 21.3579 297.204C-60.8001 157.33 132.488 329.832 128.898 430.222C125.751 518.218 53.3734 475.315 38.0567 557.754C28.4812 609.292 38.0567 699 38.0567 699"
                    stroke="rgba(111, 73, 216, 0.2)"
                    strokeWidth="1"
                />
            </svg>

            <div className="flex items-center justify-center">
                <Link
                    href={"/Pradip_Chaudhary.pdf"}
                    className="-ml-[4.5rem] download-button"
                >
                    Download CV
                </Link>
            </div>
        </div>
    );
};

export default DownloadCV;
