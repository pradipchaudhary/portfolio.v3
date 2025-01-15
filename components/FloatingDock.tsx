import Link from "next/link";
import React, { useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaCodepen, FaInstagram } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const FloatingDock = () => {
    return (
        <div className="flex items-center justify-center">
            <FloatingDockCore />
        </div>
    );
};

export default FloatingDock;

// Renamed to avoid conflicts with `next/link` Link component
type DockLink = {
    title: string;
    href: string;
    icon: React.ReactNode;
};

const FloatingDockCore = () => {
    const links: DockLink[] = [
        {
            title: "Github",
            href: "https://github.com/pradipchaudhary",
            icon: <FaGithub className="h-6  w-6" />,
        },
        {
            title: "Linkedin",
            href: "https://www.linkedin.com/in/pradipchaudhary/",
            icon: <FaLinkedin className="h-6  w-6" />,
        },
        {
            title: "Codepen",
            href: "https://codepen.io/pradipchaudhary",
            icon: <FaCodepen className="h-6  w-6" />,
        },
        {
            title: "Instagram",
            href: "https://instagram.com/pradipchaudhary_01",
            icon: <FaInstagram className="h-6  w-6" />,
        },
    ];

    return (
        <motion.div className="flex items-center justify-center gap-2 h-16 px-4">
            {links.map((link) => (
                <IconContainer key={link.title} link={link} />
            ))}
        </motion.div>
    );
};

const IconContainer = ({ link }: { link: DockLink }) => {
    const ref = useRef<HTMLDivElement>(null);

    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            href={link.href}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            target="_blank"
        >
            <motion.div
                ref={ref}
                className=" flex justify-center items-center rounded-full relative p-1  transition-colors duration-200 ease-in-out"
            >
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, x: "-42%" }}
                            animate={{ opacity: 1, y: 0, x: "-42%" }}
                            exit={{ opacity: 0, y: 2, x: "-42%" }}
                            className="absolute text-xs -top-6 inset-x-0 px-2 py-0"
                        >
                            {link.title}
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.div className="flex justify-center items-center">
                    {link.icon}
                </motion.div>
            </motion.div>
        </Link>
    );
};
