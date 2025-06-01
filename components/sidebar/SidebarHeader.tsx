'use client'
import Link from "next/link";

const SidebarHeader = () => {
    return (
        <>
            <h1 className="text-6xl md:text-5xl font-semibold tracking-tight">
                <Link

                    href="/"
                    className=""
                >
                    Pradip <span className="-ml-0">Chaudhary</span>
                </Link>
            </h1>
            <h2
                className={`text-lg font-medium text-[#6f6f6f]  sm:text-xl typing-animation`}
            >
                Software Engieer
            </h2>
            <p className="mt-4 max-w-xs leading-normal  text-[.9rem]">
                I build accessible, pixel-perfect digital experiences for
                the web.
            </p>
        </>
    );
};

export default SidebarHeader;
