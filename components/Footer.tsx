"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className="py-10 pl-6 space-y-0.5">
            <p className=" flex gap-2 items-center text-xs sm:text-sm  leading-relaxed">
                Find me on{" "}
                <Link
                    href="https://www.linkedin.com/in/pradipchaudhary/"
                    target="_blank"
                >
                    <Image
                        src="/linkedin.svg"
                        width={16}
                        height={16}
                        alt="LinkedIn"
                    />
                </Link>
                and
                <Link
                    href="https://peerlist.io/pradipchaudhary"
                    target="_blank"
                >
                    <Image
                        src="/peerlist.png"
                        className="h-4 w-4"
                        alt="peerlist"
                        width={24}
                        height={24}
                    />
                </Link>
            </p>
            <p className="text-xs sm:text-sm  leading-relaxed">
                Portfolio inspired by{" "}
                <Link
                    href="https://manuarora.in/"
                    target="_blank"
                    className="font-semibold"
                >
                    Manu Arora
                </Link>
            </p>
        </footer>
    );
};

export default Footer;
