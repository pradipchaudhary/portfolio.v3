"use client";
import Link from "next/link";
import React from "react";

export function MovingBorderButton() {
    return (
        <div className="bg-[#181028] relative flex justify-center items-center">
            <div className="fancy bg-transparent text-white absolute inset-0 z-10 p-6 fancy">
                <Link href="/Pradip_Chaudhary.pdf" className="">
                    Download CV
                </Link>
            </div>
        </div>
    );
}
