import Link from "next/link";
import React from "react";

const DownloadCV = () => {
    return (
        <div className="animation-container">
            <svg
                className="cv-path"
                width="154"
                height="750"
                viewBox="0 0 154 710"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    className="animated-dotted-path"
                    d="M51.4157 -52C51.4157 -52 47.2098 13.6712 51.4157 53.8723C62.863 163.29 140.253 138.263 151.608 227.258C162.964 316.252 103.516 435.934 21.3579 279.426C-60.8002 122.919 132.488 315.934 128.898 428.261C125.751 526.721 53.3734 478.716 38.0567 570.958C28.4812 628.625 38.0567 729 38.0567 729"
                    stroke="#6F49D8"
                    strokeOpacity="0.2"
                />
            </svg>

            <div className="hidden md:block mt-2 -ml-1 ">
                <Link
                    href={"/Pradip_Chaudhary.pdf"}
                    className="download-button -ml-7 hover:text-slate-400"
                >
                    Download CV
                </Link>
            </div>
        </div>
    );
};

export default DownloadCV;
