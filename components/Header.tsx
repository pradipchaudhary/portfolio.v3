import Link from "next/link";
import React from "react";
import DownloadCV from "./DownloadCV";
const Header = () => {
    // const cvpath = window.querySelector(".cv-path") as HTMLAnchorElement;
    // console.log("cvpath", cvpath);
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
    const socialIcons = [
        {
            href: "https://github.com/pradipchaudhary",
            label: "GitHub",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-6 w-6"
                    aria-hidden="true"
                >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
            ),
        },
        {
            href: "https://www.linkedin.com/in/pradipchaudhary/",
            label: "LinkedIn",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                    aria-hidden="true"
                >
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
            ),
        },
        {
            href: "https://codepen.io/pradipchaudhary",
            label: "CodePen",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                    aria-hidden="true"
                >
                    <path
                        d="M3.06 41.732L32 60.932l28.94-19.2V22.268L32 3.068l-28.94 19.2zm57.878 0L32 22.268 3.06 41.732m0-19.463L32 41.47l28.94-19.2M32 3.068v19.2m0 19.463v19.2"
                        strokeWidth="5"
                    ></path>
                </svg>
            ),
        },
        {
            href: "https://peerlist.io/pradipchaudhary",
            label: "Peerlist",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                    >
                        <path d="M8.87 3h6.26a6 6 0 0 1 5.963 5.337l.21 1.896c.131 1.174.131 2.36 0 3.534l-.21 1.896A6 6 0 0 1 15.13 21H8.87a6 6 0 0 1-5.963-5.337l-.21-1.896a16 16 0 0 1 0-3.534l.21-1.896A6 6 0 0 1 8.87 3" />
                        <path d="M9 17v-4m0 0V7h4a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3z" />
                    </g>
                </svg>
            ),
        },
    ];
    return (
        <header className="sm:w-full md:w-1/2 lg:w-1/2  lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:min-h-screen  lg:flex-col lg:justify-between lg:py-20 px-4">
            <DownloadCV />
            <div>
                <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl ">
                    <Link
                        href="/"
                        className="bg-gradient-to-b from-[#8c95e4] to-[#292450]/80 text-transparent bg-clip-text"
                    >
                        Pradip Chaudhary
                    </Link>
                </h1>
                <h2
                    className={`mt-3 text-lg font-medium  sm:text-xl typing-animation`}
                >
                    Front End Engineer
                </h2>
                <p className="mt-4 max-w-xs leading-normal  text-[.9rem]">
                    I build accessible, pixel-perfect digital experiences for
                    the web.
                </p>

                {/* Navigation */}
                <nav
                    className="hidden mt-16 lg:block"
                    aria-label="In-page jump links"
                >
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
            <ul
                className="mt-4 ml-1 flex items-center"
                aria-label="Social media"
            >
                {socialIcons.map((social) => (
                    <li key={social.label} className="mr-5 shrink-0 text-xs">
                        <a
                            href={social.href}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label={`${social.label} (opens in a new tab)`}
                            className="block text-slate-600 hover:text-slate-500"
                            title={social.label}
                        >
                            <span className="sr-only">{social.label}</span>

                            {social.icon}
                        </a>
                    </li>
                ))}
            </ul>
        </header>
    );
};

export default Header;
