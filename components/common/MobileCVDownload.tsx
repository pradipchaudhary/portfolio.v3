"use client";

import Link from "next/link";

export default function MobileCVDownload() {
    return (
        <div className="md:hidden mt-10 ml-8">
            <Link
                href="/Pradip_Chaudhary.pdf"
                className="download-button -ml-7 hover:text-slate-400"
            >
                Download CV
            </Link>
        </div>
    );
}
