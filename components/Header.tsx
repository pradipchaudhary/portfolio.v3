"use client";
import Link from "next/link";
import DownloadCV from "./DownloadCV";
import FloatingDock from "./FloatingDock";

const Header = () => {
    const menuItem = [
        {
            name: "Introduction",
            link: "/",
        },
        {
            name: "My Work",
            link: "/projects",
        },
        {
            name: "Blog",
            link: "/blog",
        },
    ];

    return (
        <header className="sm:w-full md:w-1/2 lg:w-1/2  lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:min-h-screen  lg:flex-col lg:justify-between lg:py-20 lg:pb-8 px-4">
            <DownloadCV />
            {/* text-4xl font-semibold tracking-tight sm:text-5xl */}
            <div>
                <h1 className="text-6xl md:text-5xl font-semibold tracking-tight">
                    <Link

                        href="/"
                        className="bg-gradient-to-b from-[#8c95e4] to-[#292450]/80 text-transparent bg-clip-text ml-[0.20rem]"
                    >
                        Pradip <span className="-ml-0">Chaudhary</span>
                    </Link>
                </h1>
                <h2
                    className={`text-lg font-medium text-[#6745c2]  sm:text-xl typing-animation`}
                >
                    Software Engieer
                </h2>
                <p className="mt-4 max-w-xs leading-normal  text-[.9rem]">
                    I build accessible, pixel-perfect digital experiences for
                    the web.
                </p>

                {/* Navigation */}
                <nav className="md:mt-16 mt-6" aria-label="In-page jump links">
                    <ul className="space-y-2">
                        {menuItem.map((menu) => (
                            <li key={menu.name}>
                                <a
                                    href={`${menu.link.toLowerCase()}`}
                                    className="group flex items-center py-2"
                                >
                                    <span className="nav-indicator mr-3 h-px w-3 bg-slate-600 transition-all group-hover:w-4 group-hover:bg-[#6743CD] motion-reduce:transition-none"></span>
                                    <span className="nav-text text-xs font-bold uppercase tracking-tight group-hover:text-[#6743CD]">
                                        {menu.name}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            {/* FOOTER  */}
            <div className="mt-4 flex items-center " aria-label="Social media">
                <FloatingDock />
            </div>
        </header>
    );
};

export default Header;
